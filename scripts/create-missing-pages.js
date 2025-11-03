import fs from 'fs/promises';
import path from 'path';

const BASE_LAYOUT = `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
---

<BaseLayout
  title="{TITLE} | RealMindSolutions"
  description="{DESCRIPTION}"
>
  <div class="sb-container py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-6">{HEADING}</h1>
    <p class="text-xl text-gray-600 mb-12">{INTRO}</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {CONTENT}
    </div>
  </div>
</BaseLayout>
`;

const CARD_TEMPLATE = `      <a href="{LINK}" class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{CARD_TITLE}</h3>
        <p class="text-gray-600">{CARD_DESC}</p>
      </a>`;

const pages = {
  'compare/platforms/index.astro': {
    title: 'Platform Comparisons',
    description: 'Compare online therapy platforms side-by-side',
    heading: 'Platform Comparisons',
    intro: 'Side-by-side comparisons of popular online therapy platforms',
    cards: [
      { link: '/better-help-vs-talkspace', title: 'BetterHelp vs Talkspace', desc: 'Compare the two largest platforms' },
      { link: '/comparisons/better-help-vs-cerebral', title: 'BetterHelp vs Cerebral', desc: 'Therapy vs medication management' },
      { link: '/comparisons/talkspace-vs-cerebral', title: 'Talkspace vs Cerebral', desc: 'Traditional vs medication-focused' },
    ]
  },
  'compare/modalities/index.astro': {
    title: 'Therapy Modality Comparisons',
    description: 'Compare different therapy approaches and modalities',
    heading: 'Therapy Modality Comparisons',
    intro: 'Understand the differences between therapy approaches',
    cards: [
      { link: '/comparisons/cbt-vs-psychodynamic', title: 'CBT vs Psychodynamic', desc: 'Compare therapeutic approaches' },
      { link: '/comparisons/online-vs-traditional-therapy', title: 'Online vs Traditional', desc: 'Telehealth vs in-person therapy' },
      { link: '/comparisons/text-vs-video-therapy', title: 'Text vs Video', desc: 'Different communication methods' },
    ]
  },
  'compare/alternatives/index.astro': {
    title: 'Therapy Alternatives',
    description: 'Find alternatives to popular therapy platforms',
    heading: 'Therapy Platform Alternatives',
    intro: 'Explore alternative options for online therapy',
    cards: [
      { link: '/comparisons/affordable-better-help-alternatives', title: 'BetterHelp Alternatives', desc: 'More affordable options' },
      { link: '/comparisons/talkspace-alternatives', title: 'Talkspace Alternatives', desc: 'Similar platforms to consider' },
      { link: '/comparisons/free-therapy-options', title: 'Free Therapy Options', desc: 'No-cost mental health resources' },
    ]
  },
  'compare/roundups/index.astro': {
    title: 'Platform Roundups',
    description: 'Comprehensive roundup comparisons of therapy platforms',
    heading: 'Platform Roundups',
    intro: 'Compare multiple platforms at once',
    cards: [
      { link: '/comparisons/top-therapy-platforms-compared', title: 'Top Platforms Compared', desc: 'Best overall platforms' },
      { link: '/comparisons/best-therapy-apps-compared', title: 'Best Apps Compared', desc: 'Mobile-friendly options' },
      { link: '/comparisons/insurance-friendly-platforms', title: 'Insurance-Friendly Platforms', desc: 'Platforms accepting insurance' },
    ]
  },
  'reviews/platforms/index.astro': {
    title: 'Platform Reviews',
    description: 'Detailed reviews of online therapy platforms',
    heading: 'Platform Reviews',
    intro: 'In-depth reviews of online therapy services',
    cards: [
      { link: '/better-help-review', title: 'BetterHelp Review', desc: 'Comprehensive BetterHelp analysis' },
      { link: '/talkspace-review', title: 'Talkspace Review', desc: 'Full Talkspace evaluation' },
      { link: '/cerebral-review', title: 'Cerebral Review', desc: 'Medication management review' },
    ]
  },
  'reviews/features/index.astro': {
    title: 'Feature Reviews',
    description: 'Reviews of specific therapy platform features',
    heading: 'Feature Reviews',
    intro: 'Deep dives into platform features',
    cards: [
      { link: '/reviews/features/therapist-matching-systems', title: 'Therapist Matching', desc: 'How platforms match you with therapists' },
      { link: '/reviews/features/communication', title: 'Communication Features', desc: 'Messaging and video options' },
      { link: '/reviews/features/video-session-quality', title: 'Video Quality', desc: 'Video session experience' },
    ]
  },
  'reviews/specialty/index.astro': {
    title: 'Specialty Reviews',
    description: 'Platform reviews for specific conditions and needs',
    heading: 'Specialty Reviews',
    intro: 'Platform reviews for specific needs',
    cards: [
      { link: '/reviews/specialty/anxiety-treatment', title: 'Anxiety Treatment', desc: 'Best for anxiety disorders' },
      { link: '/reviews/specialty/couples-therapy', title: 'Couples Therapy', desc: 'Relationship counseling online' },
      { link: '/reviews/specialty/online-therapy-for-ptsd', title: 'PTSD Treatment', desc: 'Trauma-focused therapy' },
    ]
  },
  'reviews/pricing/index.astro': {
    title: 'Pricing Reviews',
    description: 'Therapy platform pricing analysis',
    heading: 'Pricing & Insurance',
    intro: 'Cost analysis and insurance coverage',
    cards: [
      { link: '/reviews/pricing/online-therapy-pricing-comparison', title: 'Pricing Comparison', desc: 'Compare platform costs' },
      { link: '/reviews/pricing/insurance-coverage-guide', title: 'Insurance Guide', desc: 'Insurance coverage explained' },
    ]
  },
  'best/platforms/index.astro': {
    title: 'Best Platforms',
    description: 'Top-rated therapy platforms',
    heading: 'Best Therapy Platforms',
    intro: 'Top-rated online therapy services',
    cards: [
      { link: '/best-online-therapy-platforms', title: 'Best Overall', desc: 'Top platforms for general therapy' },
      { link: '/best-text-therapy-services', title: 'Best for Text', desc: 'Text-based therapy services' },
    ]
  },
  'best/conditions/index.astro': {
    title: 'Best by Condition',
    description: 'Best platforms for specific mental health conditions',
    heading: 'Best by Condition',
    intro: 'Top platforms for specific conditions',
    cards: [
      { link: '/best/conditions/best-for-anxiety', title: 'Best for Anxiety', desc: 'Anxiety disorder treatment' },
      { link: '/best/conditions/best-for-depression', title: 'Best for Depression', desc: 'Depression treatment online' },
      { link: '/best/conditions/best-for-ptsd', title: 'Best for PTSD', desc: 'Trauma-focused platforms' },
    ]
  },
  'best/audiences/index.astro': {
    title: 'Best by Audience',
    description: 'Best platforms for specific demographics',
    heading: 'Best by Audience',
    intro: 'Top platforms for specific groups',
    cards: [
      { link: '/best/audiences/best-for-teens', title: 'Best for Teens', desc: 'Teen-friendly platforms' },
      { link: '/best/audiences/best-for-couples', title: 'Best for Couples', desc: 'Couples therapy online' },
      { link: '/best/audiences/best-for-lgbtq', title: 'Best for LGBTQ+', desc: 'LGBTQ+-friendly services' },
    ]
  },
  'best/specific-needs/index.astro': {
    title: 'Best for Specific Needs',
    description: 'Best platforms for specific requirements',
    heading: 'Best for Specific Needs',
    intro: 'Specialized platform recommendations',
    cards: [
      { link: '/best/specific-needs/best-specific-needs', title: 'View All', desc: 'All specialized options' },
    ]
  },
  'tools/assessments/index.astro': {
    title: 'Mental Health Assessments',
    description: 'Free mental health screening tools',
    heading: 'Mental Health Assessments',
    intro: 'Free screening tools and assessments',
    cards: [
      { link: '/tools/assessments/mental-health-assessment', title: 'General Assessment', desc: 'Overall mental health screening' },
      { link: '/tools/assessments/anxiety-screening', title: 'Anxiety Screening', desc: 'Anxiety disorder assessment' },
      { link: '/tools/assessments/depression-screening', title: 'Depression Screening', desc: 'Depression assessment tool' },
    ]
  },
  'tools/matchers/index.astro': {
    title: 'Platform Matchers',
    description: 'Find the right therapy platform for you',
    heading: 'Platform Matching Tools',
    intro: 'Tools to find your perfect platform',
    cards: [
      { link: '/tools/matchers/therapy-platform-matcher', title: 'Platform Matcher', desc: 'Find your ideal platform' },
      { link: '/tools/matchers/budget-friendly-finder', title: 'Budget Finder', desc: 'Affordable options for you' },
      { link: '/tools/matchers/insurance-coverage-checker', title: 'Insurance Checker', desc: 'Check insurance compatibility' },
    ]
  },
};

async function createPages() {
  let created = 0;

  for (const [pagePath, data] of Object.entries(pages)) {
    const fullPath = path.join('src/pages', pagePath);
    const dir = path.dirname(fullPath);

    // Create directory if needed
    await fs.mkdir(dir, { recursive: true });

    // Generate cards HTML
    const cardsHtml = data.cards.map(card =>
      CARD_TEMPLATE
        .replace('{LINK}', card.link)
        .replace('{CARD_TITLE}', card.title)
        .replace('{CARD_DESC}', card.desc)
    ).join('\n');

    // Generate page content
    const content = BASE_LAYOUT
      .replace('{TITLE}', data.title)
      .replace('{DESCRIPTION}', data.description)
      .replace('{HEADING}', data.heading)
      .replace('{INTRO}', data.intro)
      .replace('{CONTENT}', cardsHtml);

    await fs.writeFile(fullPath, content);
    created++;
    console.log(`✓ Created: ${pagePath}`);
  }

  console.log(`\n✅ Created ${created} index pages`);
}

createPages().catch(console.error);
