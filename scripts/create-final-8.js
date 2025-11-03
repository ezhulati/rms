import fs from 'fs/promises';
import path from 'path';

const SIMPLE_PAGE = (title, heading, content) => `---
import BaseLayout from '{LAYOUT_PATH}';
---

<BaseLayout title="${title} | RealMindSolutions" description="${heading}">
  <div class="sb-container py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-6">${heading}</h1>
    <div class="prose prose-lg max-w-4xl">
      ${content}
    </div>
  </div>
</BaseLayout>`;

const REDIRECT_PAGE = (title, targetPath) => `---
import BaseLayout from '{LAYOUT_PATH}';
---

<BaseLayout title="${title} | RealMindSolutions" description="${title}">
  <script>
    window.location.href = '${targetPath}';
  </script>
  <div class="sb-container py-12 text-center">
    <p>Redirecting to <a href="${targetPath}" class="text-indigo-600 hover:underline">${title}</a>...</p>
  </div>
</BaseLayout>`;

const pages = [
  // Content pages
  { path: 'reviews/platforms/online-therapy-com.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Online-Therapy.com Review', heading: 'Online-Therapy.com Review', content: '<p>Comprehensive review of Online-Therapy.com platform.</p>', type: 'content' },
  { path: 'best/conditions/best-for-ptsd.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Best Therapy for PTSD', heading: 'Best Online Therapy for PTSD', content: '<p>Top platforms for PTSD treatment.</p>', type: 'content' },
  { path: 'reviews/features/messaging-systems.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Messaging Systems Review', heading: 'Therapy Platform Messaging Systems', content: '<p>Review of messaging features across platforms.</p>', type: 'content' },
  { path: 'reviews/features/mobile-apps.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Mobile Apps Review', heading: 'Therapy Platform Mobile Apps', content: '<p>Review of mobile app experiences.</p>', type: 'content' },
  { path: 'reviews/features/user-interface.astro', layout: '../../../layouts/BaseLayout.astro', title: 'User Interface Review', heading: 'Therapy Platform User Interfaces', content: '<p>Analysis of platform user interfaces.</p>', type: 'content' },
  { path: 'reviews/platforms/pride-counseling.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Pride Counseling Review', heading: 'Pride Counseling Review', content: '<p>Review of Pride Counseling LGBTQ+ therapy platform.</p>', type: 'content' },

  // Redirect pages
  { path: 'compare/platforms/talkspace-vs-betterhelp.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Talkspace vs BetterHelp', target: '/talkspace-vs-better-help', type: 'redirect' },
  { path: 'compare/platforms/talkspace-vs-online-therapy.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Talkspace vs Online-Therapy', target: '/comparisons/talkspace-vs-online-therapy', type: 'redirect' },
];

async function createPages() {
  let created = 0;
  for (const page of pages) {
    const fullPath = path.join('src/pages', page.path);
    let content;

    if (page.type === 'redirect') {
      content = REDIRECT_PAGE(page.title, page.target).replace('{LAYOUT_PATH}', page.layout);
    } else {
      content = SIMPLE_PAGE(page.title, page.heading, page.content).replace('{LAYOUT_PATH}', page.layout);
    }

    try {
      await fs.writeFile(fullPath, content);
      console.log(`✓ ${page.path}`);
      created++;
    } catch (error) {
      console.error(`✗ ${page.path}: ${error.message}`);
    }
  }
  console.log(`\n✅ Created ${created}/${pages.length} pages`);
}

createPages().catch(console.error);
