import fs from 'fs/promises';
import path from 'path';

const REDIRECT_PAGE = (title, targetPath) => `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
---

<BaseLayout title="${title} | RealMindSolutions" description="${title}">
  <script>
    window.location.href = '${targetPath}';
  </script>
  <div class="sb-container py-12 text-center">
    <p>Redirecting to <a href="${targetPath}" class="text-indigo-600 hover:underline">${title}</a>...</p>
  </div>
</BaseLayout>`;

const redirects = [
  // Platform comparisons
  { from: 'compare/platforms/betterhelp-vs-talkspace.astro', to: '/better-help-vs-talkspace', title: 'BetterHelp vs Talkspace' },
  { from: 'compare/platforms/betterhelp-vs-cerebral.astro', to: '/comparisons/better-help-vs-cerebral', title: 'BetterHelp vs Cerebral' },
  { from: 'compare/platforms/talkspace-vs-cerebral.astro', to: '/comparisons/talkspace-vs-cerebral', title: 'Talkspace vs Cerebral' },
  { from: 'compare/platforms/betterhelp-vs-calmerry.astro', to: '/comparisons/better-help-vs-calmerry', title: 'BetterHelp vs Calmerry' },
  { from: 'compare/platforms/top-therapy-platforms-compared.astro', to: '/comparisons/top-therapy-platforms-compared', title: 'Top Therapy Platforms Compared' },

  // Modality comparisons
  { from: 'compare/modalities/online-vs-traditional-therapy.astro', to: '/comparisons/online-vs-traditional-therapy', title: 'Online vs Traditional Therapy' },
  { from: 'compare/modalities/text-vs-video-therapy.astro', to: '/comparisons/text-vs-video-therapy', title: 'Text vs Video Therapy' },
  { from: 'compare/modalities/cbt-vs-psychodynamic.astro', to: '/comparisons/cbt-vs-psychodynamic', title: 'CBT vs Psychodynamic' },
  { from: 'compare/modalities/individual-vs-group-therapy.astro', to: '/comparisons/individual-vs-group-therapy', title: 'Individual vs Group Therapy' },
  { from: 'compare/modalities/therapy-approaches.astro', to: '/comparisons/therapy-approaches', title: 'Therapy Approaches' },

  // Alternatives
  { from: 'compare/alternatives/affordable-betterhelp-alternatives.astro', to: '/comparisons/affordable-better-help-alternatives', title: 'Affordable BetterHelp Alternatives' },
  { from: 'compare/alternatives/talkspace-alternatives.astro', to: '/comparisons/talkspace-alternatives', title: 'Talkspace Alternatives' },
  { from: 'compare/alternatives/free-therapy-options.astro', to: '/comparisons/free-therapy-options', title: 'Free Therapy Options' },

  // Roundups
  { from: 'compare/roundups/top-therapy-platforms-compared.astro', to: '/comparisons/top-therapy-platforms-compared', title: 'Top Therapy Platforms Compared' },
  { from: 'compare/roundups/best-therapy-apps-compared.astro', to: '/comparisons/best-therapy-apps-compared', title: 'Best Therapy Apps Compared' },
  { from: 'compare/roundups/insurance-friendly-platforms.astro', to: '/comparisons/insurance-friendly-platforms', title: 'Insurance Friendly Platforms' },
];

async function createRedirects() {
  for (const redirect of redirects) {
    const fullPath = path.join('src/pages', redirect.from);
    const content = REDIRECT_PAGE(redirect.title, redirect.to);
    await fs.writeFile(fullPath, content);
    console.log(`✓ ${redirect.from} -> ${redirect.to}`);
  }
  console.log(`\n✅ Created ${redirects.length} redirect pages`);
}

createRedirects().catch(console.error);
