import http from 'http';
import { JSDOM } from 'jsdom';

const BASE_URL = 'http://localhost:4323';
const visited = new Set();
const broken = new Map(); // path -> referring pages
const working = new Set();
let totalChecked = 0;

async function fetchPage(url) {
  return new Promise((resolve) => {
    const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;

    http.get(fullUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({
        status: res.statusCode,
        html: data,
        url: fullUrl
      }));
    }).on('error', (err) => {
      resolve({ status: 0, error: err.message, url: fullUrl });
    });
  });
}

function extractLinks(html, baseUrl) {
  try {
    const dom = new JSDOM(html);
    const links = dom.window.document.querySelectorAll('a[href]');
    const extracted = new Set();

    for (const link of links) {
      let href = link.getAttribute('href');

      // Skip external links, anchors, mailto, tel, javascript
      if (!href ||
          href.startsWith('http') ||
          href.startsWith('#') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:') ||
          href.startsWith('javascript:')) {
        continue;
      }

      // Remove query strings and anchors for checking
      href = href.split('?')[0].split('#')[0];

      // Ensure it starts with /
      if (!href.startsWith('/')) {
        href = '/' + href;
      }

      extracted.add(href);
    }

    return Array.from(extracted);
  } catch (err) {
    console.error('Error extracting links:', err.message);
    return [];
  }
}

async function checkPath(path, referrer = 'initial') {
  if (visited.has(path)) {
    return;
  }

  visited.add(path);
  totalChecked++;

  process.stdout.write(`\rChecked: ${totalChecked} | Working: ${working.size} | Broken: ${broken.size}`);

  const result = await fetchPage(path);

  if (result.status === 404) {
    if (!broken.has(path)) {
      broken.set(path, []);
    }
    broken.get(path).push(referrer);
    return;
  }

  if (result.status === 200) {
    working.add(path);

    // Extract and check links from this page
    const links = extractLinks(result.html, result.url);

    for (const link of links) {
      if (!visited.has(link)) {
        await checkPath(link, path);
      }
    }
  }
}

async function crawlSite() {
  console.log('🔍 Starting site crawl from', BASE_URL);
  console.log('This may take a few minutes...\n');

  const startTime = Date.now();

  // Start from homepage
  await checkPath('/', 'homepage');

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\n\n✅ Crawl complete!\n');
  console.log(`⏱️  Duration: ${duration}s`);
  console.log(`📊 Total paths checked: ${totalChecked}`);
  console.log(`✅ Working paths: ${working.size}`);
  console.log(`❌ Broken paths: ${broken.size}\n`);

  if (broken.size > 0) {
    console.log('❌ 404 ERRORS FOUND:\n');
    console.log('─'.repeat(80));

    const sortedBroken = Array.from(broken.entries()).sort((a, b) =>
      b[1].length - a[1].length
    );

    for (const [path, referrers] of sortedBroken) {
      console.log(`\n🔴 ${path}`);
      console.log(`   Referenced by ${referrers.length} page(s):`);
      const uniqueRefs = [...new Set(referrers)].slice(0, 5);
      uniqueRefs.forEach(ref => console.log(`   - ${ref}`));
      if (referrers.length > 5) {
        console.log(`   ... and ${referrers.length - 5} more`);
      }
    }

    console.log('\n' + '─'.repeat(80));
    console.log(`\nTotal broken links: ${broken.size}`);
  } else {
    console.log('🎉 No 404 errors found! All links are working.');
  }

  // Save report
  const report = {
    timestamp: new Date().toISOString(),
    duration: `${duration}s`,
    stats: {
      totalChecked,
      working: working.size,
      broken: broken.size
    },
    brokenLinks: Array.from(broken.entries()).map(([path, refs]) => ({
      path,
      referrers: [...new Set(refs)]
    }))
  };

  await import('fs').then(fs => {
    fs.promises.writeFile(
      'crawl-report.json',
      JSON.stringify(report, null, 2)
    );
  });

  console.log('\n📝 Full report saved to: crawl-report.json\n');
}

// Check if server is running first
console.log('Checking if dev server is running...');
http.get(BASE_URL, (res) => {
  if (res.statusCode === 200 || res.statusCode === 404) {
    crawlSite().catch(console.error);
  }
}).on('error', () => {
  console.error('❌ Error: Dev server is not running at', BASE_URL);
  console.error('Please run: npm run dev');
  process.exit(1);
});
