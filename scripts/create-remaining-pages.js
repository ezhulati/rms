import fs from 'fs/promises';
import path from 'path';

const SIMPLE_PAGE = (title, heading, content) => `---
import BaseLayout from '{LAYOUT_PATH}';
---

<BaseLayout title="${title} | RealMindSolutions" description="${heading}">
  <div class="sb-container py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-6">${heading}</h1>
    <div class="prose prose-lg max-w-4xl">${content}</div>
  </div>
</BaseLayout>`;

const pages = [
  // Blog tags
  { path: 'blog/tag/research.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Research', heading: 'Research Articles', content: '<p>Articles tagged with research</p>' },
  { path: 'blog/tag/online-therapy.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Online Therapy', heading: 'Online Therapy Articles', content: '<p>Articles about online therapy</p>' },
  { path: 'blog/tag/interviews.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Interviews', heading: 'Therapist Interviews', content: '<p>Interview articles</p>' },
  { path: 'blog/tag/therapists.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Therapists', heading: 'Therapist Resources', content: '<p>Articles about therapists</p>' },
  { path: 'blog/tag/self-care.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Self Care', heading: 'Self Care Articles', content: '<p>Self care resources</p>' },
  { path: 'blog/tag/mental-health.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Mental Health', heading: 'Mental Health Articles', content: '<p>General mental health content</p>' },
  { path: 'blog/tag/therapy.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Therapy', heading: 'Therapy Articles', content: '<p>Articles about therapy</p>' },
  { path: 'blog/tag/beginners.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Beginners Guide', heading: 'Beginner Resources', content: '<p>Resources for therapy beginners</p>' },
  { path: 'blog/tag/therapist-selection.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Therapist Selection', heading: 'Finding a Therapist', content: '<p>Guidance on selecting therapists</p>' },
  { path: 'blog/tag/therapy-types.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Therapy Types', heading: 'Types of Therapy', content: '<p>Different therapeutic modalities</p>' },
  { path: 'blog/tag/finance.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Finance', heading: 'Therapy Costs', content: '<p>Financial aspects of therapy</p>' },
  { path: 'blog/tag/insurance.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Insurance', heading: 'Insurance Coverage', content: '<p>Insurance information</p>' },
  { path: 'blog/tag/policy.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Policy', heading: 'Mental Health Policy', content: '<p>Policy updates and news</p>' },
  { path: 'blog/tag/telehealth.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Telehealth', heading: 'Telehealth Resources', content: '<p>Telehealth information</p>' },
  { path: 'blog/tag/anxiety.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Anxiety', heading: 'Anxiety Resources', content: '<p>Anxiety-related articles</p>' },
  { path: 'blog/tag/depression.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Depression', heading: 'Depression Resources', content: '<p>Depression information</p>' },
  { path: 'blog/tag/mindfulness.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Mindfulness', heading: 'Mindfulness Resources', content: '<p>Mindfulness practices</p>' },
  { path: 'blog/tag/relationships.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Relationships', heading: 'Relationship Resources', content: '<p>Relationship content</p>' },

  // Blog authors
  { path: 'blog/author/sarah-johnson.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Sarah Johnson', heading: 'Articles by Sarah Johnson', content: '<p>Mental health writer and researcher</p>' },
  { path: 'blog/author/emma-rodriguez.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Emma Rodriguez', heading: 'Articles by Emma Rodriguez', content: '<p>Therapist and mental health advocate</p>' },
  { path: 'blog/author/maya-patel.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Maya Patel', heading: 'Articles by Maya Patel', content: '<p>Wellness coach and writer</p>' },
  { path: 'blog/author/michael-chen.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Michael Chen', heading: 'Articles by Michael Chen', content: '<p>Mental health journalist</p>' },

  // Resources
  { path: 'resources/worksheets/index.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Mental Health Worksheets', heading: 'Free Worksheets', content: '<p>Downloadable mental health worksheets</p>' },
  { path: 'resources/guides/index.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Mental Health Guides', heading: 'Free Guides', content: '<p>Comprehensive mental health guides</p>' },

  // Case studies
  { path: 'case-studies/conditions/index.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Condition Case Studies', heading: 'Case Studies by Condition', content: '<p>Real stories organized by condition</p>' },
  { path: 'case-studies/demographics/index.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Demographic Case Studies', heading: 'Case Studies by Demographics', content: '<p>Stories from different groups</p>' },

  // Learn pages
  { path: 'learn/approaches/index.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Therapy Approaches', heading: 'Therapeutic Approaches', content: '<p>Learn about different therapy modalities</p>' },
  { path: 'best/overall/best-online-therapy.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Best Online Therapy', heading: 'Best Online Therapy Overall', content: '<p>Top-rated online therapy platforms</p>' },
];

async function createPages() {
  for (const page of pages) {
    const fullPath = path.join('src/pages', page.path);
    const content = SIMPLE_PAGE(page.title, page.heading, page.content).replace('{LAYOUT_PATH}', page.layout);
    await fs.writeFile(fullPath, content);
    console.log(`✓ ${page.path}`);
  }
  console.log(`\n✅ Created ${pages.length} pages`);
}

createPages().catch(console.error);
