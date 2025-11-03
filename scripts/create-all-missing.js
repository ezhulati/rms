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

const pages = [
  // Review platform pages
  { path: 'reviews/platforms/betterhelp.astro', layout: '../../../layouts/BaseLayout.astro', title: 'BetterHelp Review', heading: 'BetterHelp Review', content: '<p>Comprehensive review of BetterHelp online therapy platform.</p>' },
  { path: 'reviews/platforms/talkspace.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Talkspace Review', heading: 'Talkspace Review', content: '<p>In-depth review of Talkspace therapy services.</p>' },
  { path: 'reviews/platforms/cerebral.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Cerebral Review', heading: 'Cerebral Review', content: '<p>Cerebral mental health platform review.</p>' },
  { path: 'reviews/platforms/calmerry.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Calmerry Review', heading: 'Calmerry Review', content: '<p>Calmerry online therapy review.</p>' },
  { path: 'reviews/platforms/online-therapy.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Online-Therapy.com Review', heading: 'Online-Therapy.com Review', content: '<p>Review of Online-Therapy.com platform.</p>' },
  { path: 'reviews/platforms/brightside.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Brightside Review', heading: 'Brightside Review', content: '<p>Brightside mental health services review.</p>' },
  { path: 'reviews/platforms/regain.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Regain Review', heading: 'Regain Review', content: '<p>Regain couples therapy platform review.</p>' },
  { path: 'reviews/platforms/lasting.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Lasting Review', heading: 'Lasting Review', content: '<p>Lasting relationship counseling app review.</p>' },
  { path: 'reviews/platforms/amwell.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Amwell Review', heading: 'Amwell Review', content: '<p>Amwell telehealth platform review.</p>' },
  { path: 'reviews/platforms/mdlive.astro', layout: '../../../layouts/BaseLayout.astro', title: 'MDLive Review', heading: 'MDLive Review', content: '<p>MDLive virtual healthcare review.</p>' },
  { path: 'reviews/platforms/doctor-on-demand.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Doctor On Demand Review', heading: 'Doctor On Demand Review', content: '<p>Doctor On Demand telehealth service review.</p>' },

  // Review feature/specialty/pricing pages
  { path: 'reviews/features/betterhelp-therapist-quality.astro', layout: '../../../layouts/BaseLayout.astro', title: 'BetterHelp Therapist Quality', heading: 'BetterHelp Therapist Quality Analysis', content: '<p>Analysis of BetterHelp therapist credentials and quality.</p>' },
  { path: 'reviews/features/talkspace-messaging-system.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Talkspace Messaging System', heading: 'Talkspace Messaging System Review', content: '<p>Review of Talkspace messaging features.</p>' },
  { path: 'reviews/features/cerebral-medication-management.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Cerebral Medication Management', heading: 'Cerebral Medication Management Review', content: '<p>Analysis of Cerebral medication services.</p>' },
  { path: 'reviews/specialty/betterhelp-for-anxiety.astro', layout: '../../../layouts/BaseLayout.astro', title: 'BetterHelp for Anxiety', heading: 'BetterHelp for Anxiety Treatment', content: '<p>How BetterHelp addresses anxiety disorders.</p>' },
  { path: 'reviews/specialty/couples-therapy-platforms.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Couples Therapy Platforms', heading: 'Best Couples Therapy Platforms', content: '<p>Comparison of couples therapy platforms.</p>' },
  { path: 'reviews/pricing/betterhelp-cost-analysis.astro', layout: '../../../layouts/BaseLayout.astro', title: 'BetterHelp Cost Analysis', heading: 'BetterHelp Cost and Pricing', content: '<p>Detailed analysis of BetterHelp pricing.</p>' },
  { path: 'reviews/pricing/affordable-therapy-options.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Affordable Therapy Options', heading: 'Affordable Online Therapy Options', content: '<p>Budget-friendly therapy platforms and options.</p>' },

  // Best pages
  { path: 'best/platforms/best-online-therapy-platforms.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Best Online Therapy Platforms', heading: 'Best Online Therapy Platforms 2025', content: '<p>Top-rated online therapy platforms compared.</p>' },
  { path: 'best/platforms/best-text-therapy-services.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Best Text Therapy Services', heading: 'Best Text-Based Therapy Services', content: '<p>Leading text therapy platforms reviewed.</p>' },
  { path: 'best/platforms/best-video-therapy-platforms.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Best Video Therapy Platforms', heading: 'Best Video Therapy Platforms', content: '<p>Top video therapy services compared.</p>' },
  { path: 'best/specific-needs/best-affordable-therapy.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Best Affordable Therapy', heading: 'Best Affordable Therapy Options', content: '<p>Most affordable online therapy platforms.</p>' },
  { path: 'best/specific-needs/best-insurance-coverage.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Best Insurance Coverage', heading: 'Best Therapy Platforms That Accept Insurance', content: '<p>Insurance-friendly therapy platforms.</p>' },
  { path: 'best/specific-needs/best-medication-management.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Best Medication Management', heading: 'Best Medication Management Services', content: '<p>Platforms offering medication management.</p>' },

  // Blog posts
  { path: 'blog/news/telehealth-innovations.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Telehealth Innovations', heading: 'Latest Telehealth Innovations', content: '<p>Recent innovations in telehealth and online therapy.</p>' },
  { path: 'blog/stories/client-success-story.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Client Success Story', heading: 'Client Success Story', content: '<p>Real stories of therapy success.</p>' },
  { path: 'blog/guides/finding-right-therapist.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Finding the Right Therapist', heading: 'How to Find the Right Therapist', content: '<p>Guide to finding your perfect therapist match.</p>' },
  { path: 'blog/understanding-depression-treatment.astro', layout: '../../layouts/BaseLayout.astro', title: 'Understanding Depression Treatment', heading: 'Understanding Depression Treatment Options', content: '<p>Comprehensive guide to depression treatment.</p>' },
  { path: 'blog/depression-coping-strategies.astro', layout: '../../layouts/BaseLayout.astro', title: 'Depression Coping Strategies', heading: 'Effective Depression Coping Strategies', content: '<p>Practical strategies for managing depression.</p>' },
  { path: 'blog/supporting-loved-ones.astro', layout: '../../layouts/BaseLayout.astro', title: 'Supporting Loved Ones', heading: 'Supporting Loved Ones with Mental Health Challenges', content: '<p>How to support someone with mental health issues.</p>' },

  // Learn pages
  { path: 'learn/fundamentals/depression-coping-strategies.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Depression Coping Strategies', heading: 'Depression Coping Strategies', content: '<p>Evidence-based coping strategies for depression.</p>' },
  { path: 'learn/fundamentals/depression-medication-guide.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Depression Medication Guide', heading: 'Depression Medication Guide', content: '<p>Comprehensive guide to depression medications.</p>' },
  { path: 'learn/fundamentals/anxiety-disorders.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Anxiety Disorders', heading: 'Understanding Anxiety Disorders', content: '<p>Complete guide to anxiety disorders and treatment.</p>' },
  { path: 'learn/fundamentals/stress-management.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Stress Management', heading: 'Stress Management Fundamentals', content: '<p>Essential stress management techniques.</p>' },
  { path: 'learn/fundamentals/mindfulness.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Mindfulness', heading: 'Mindfulness and Mental Health', content: '<p>Introduction to mindfulness practices.</p>' },
  { path: 'learn/fundamentals/trauma-ptsd.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Trauma and PTSD', heading: 'Understanding Trauma and PTSD', content: '<p>Comprehensive guide to trauma and PTSD.</p>' },
  { path: 'learn/fundamentals/relationship-counseling.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Relationship Counseling', heading: 'Relationship Counseling Basics', content: '<p>Introduction to relationship therapy.</p>' },
  { path: 'learn/fundamentals/medication-basics.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Medication Basics', heading: 'Mental Health Medication Basics', content: '<p>Understanding psychiatric medications.</p>' },
  { path: 'learn/fundamentals/self-care.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Self Care', heading: 'Self Care Fundamentals', content: '<p>Essential self-care practices for mental health.</p>' },
  { path: 'learn/fundamentals/supporting-loved-ones.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Supporting Loved Ones', heading: 'Supporting Loved Ones with Mental Health Issues', content: '<p>How to help someone with mental health challenges.</p>' },
  { path: 'learn/statistics/online-therapy-effectiveness.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Online Therapy Effectiveness', heading: 'Online Therapy Effectiveness Statistics', content: '<p>Research on online therapy outcomes.</p>' },
  { path: 'learn/statistics/therapy-outcomes-data.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Therapy Outcomes Data', heading: 'Therapy Outcomes and Success Rates', content: '<p>Data on therapy effectiveness and outcomes.</p>' },
  { path: 'learn/statistics/mental-health-demographics.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Mental Health Demographics', heading: 'Mental Health Demographics and Statistics', content: '<p>Mental health statistics and demographic data.</p>' },

  // Resource worksheets
  { path: 'resources/worksheets/mood-tracking.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Mood Tracking Worksheet', heading: 'Mood Tracking Worksheet', content: '<p>Free downloadable mood tracking worksheet.</p>' },
  { path: 'resources/worksheets/thought-record.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Thought Record Worksheet', heading: 'Thought Record Worksheet', content: '<p>CBT thought record worksheet for tracking thoughts.</p>' },
  { path: 'resources/worksheets/depression-thought-record.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Depression Thought Record', heading: 'Depression Thought Record Worksheet', content: '<p>Specialized thought record for depression.</p>' },
  { path: 'resources/worksheets/activity-planning.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Activity Planning Worksheet', heading: 'Activity Planning Worksheet', content: '<p>Behavioral activation activity planning tool.</p>' },
  { path: 'resources/support-groups/depression.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Depression Support Groups', heading: 'Depression Support Groups', content: '<p>Find depression support groups and communities.</p>' },
  { path: 'resources/worksheets/cognitive-distortion-worksheet.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Cognitive Distortion Worksheet', heading: 'Cognitive Distortion Worksheet', content: '<p>Identify and challenge cognitive distortions.</p>' },
  { path: 'resources/worksheets/therapy-session-preparation.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Therapy Session Preparation', heading: 'Therapy Session Preparation Worksheet', content: '<p>Prepare for therapy sessions effectively.</p>' },
  { path: 'resources/worksheets/mindfulness-practice-worksheet.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Mindfulness Practice Worksheet', heading: 'Mindfulness Practice Worksheet', content: '<p>Track your mindfulness practice.</p>' },
  { path: 'resources/worksheets/thought-record-worksheet.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Thought Record Worksheet', heading: 'Thought Record Worksheet', content: '<p>Standard CBT thought record.</p>' },
  { path: 'resources/worksheets/stress-management-techniques.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Stress Management Techniques', heading: 'Stress Management Techniques Worksheet', content: '<p>Practice stress management skills.</p>' },
  { path: 'resources/guides/therapy-types-explained.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Therapy Types Explained', heading: 'Therapy Types Explained', content: '<p>Complete guide to different therapy approaches.</p>' },
  { path: 'resources/guides/insurance-coverage-guide.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Insurance Coverage Guide', heading: 'Mental Health Insurance Coverage Guide', content: '<p>Understanding insurance coverage for therapy.</p>' },
  { path: 'resources/guides/talking-to-loved-ones.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Talking to Loved Ones', heading: 'Talking to Loved Ones About Mental Health', content: '<p>How to discuss mental health with family.</p>' },
  { path: 'resources/guides/self-care-strategies.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Self Care Strategies', heading: 'Self Care Strategies Guide', content: '<p>Comprehensive self-care strategies.</p>' },
  { path: 'resources/guides/crisis-resources.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Crisis Resources', heading: 'Crisis Resources and Hotlines', content: '<p>Immediate crisis support resources.</p>' },

  // Tools
  { path: 'tools/assessments/depression-assessment.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Depression Assessment', heading: 'Depression Assessment Tool', content: '<p>Free depression screening assessment.</p>' },
  { path: 'tools/assessments/ptsd-assessment.astro', layout: '../../../layouts/BaseLayout.astro', title: 'PTSD Assessment', heading: 'PTSD Assessment Tool', content: '<p>PTSD screening assessment.</p>' },
  { path: 'tools/assessments/relationship-assessment.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Relationship Assessment', heading: 'Relationship Assessment Tool', content: '<p>Assess relationship health.</p>' },
  { path: 'tools/matchers/platform-finder.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Platform Finder', heading: 'Therapy Platform Finder', content: '<p>Find your ideal therapy platform.</p>' },
  { path: 'tools/assessments/stress-level-test.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Stress Level Test', heading: 'Stress Level Assessment', content: '<p>Assess your stress levels.</p>' },
  { path: 'tools/matchers/insurance-coverage-checker.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Insurance Coverage Checker', heading: 'Insurance Coverage Checker', content: '<p>Check insurance coverage for therapy.</p>' },

  // Guides
  { path: 'guides/financial/affordable-therapy-options.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Affordable Therapy Options', heading: 'Affordable Therapy Options', content: '<p>Find affordable therapy solutions.</p>' },
  { path: 'guides/lifestyle/stress-management-techniques.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Stress Management Techniques', heading: 'Stress Management Techniques', content: '<p>Practical stress management strategies.</p>' },
  { path: 'guides/financial/insurance-mental-health-coverage.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Insurance Mental Health Coverage', heading: 'Insurance Mental Health Coverage Guide', content: '<p>Understanding mental health insurance.</p>' },

  // Case studies
  { path: 'case-studies/demographics/remote-worker-mental-health.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Remote Worker Mental Health', heading: 'Remote Worker Mental Health Case Study', content: '<p>Mental health challenges for remote workers.</p>' },
  { path: 'case-studies/demographics/therapy-for-night-owls.astro', layout: '../../../layouts/BaseLayout.astro', title: 'Therapy for Night Owls', heading: 'Therapy for Night Owls Case Study', content: '<p>Finding therapy with flexible scheduling.</p>' },

  // Comparisons
  { path: 'comparisons/platforms.astro', layout: '../../layouts/BaseLayout.astro', title: 'Platform Comparisons', heading: 'Therapy Platform Comparisons', content: '<p>Compare therapy platforms side by side.</p>' },
];

async function createPages() {
  let created = 0;
  for (const page of pages) {
    const fullPath = path.join('src/pages', page.path);
    const content = SIMPLE_PAGE(page.title, page.heading, page.content).replace('{LAYOUT_PATH}', page.layout);

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
