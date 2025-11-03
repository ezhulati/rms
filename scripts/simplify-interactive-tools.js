#!/usr/bin/env node

/**
 * Simplify Interactive Tool Pages
 *
 * Converts React-style assessment and matcher pages to simple static pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toolConfigs = {
  'AnxietyScreening.astro': {
    title: 'Anxiety Screening',
    subtitle: 'Evaluate your anxiety symptoms with this clinically-informed screening',
    about: 'This screening tool helps evaluate the presence and severity of anxiety symptoms using standard clinical assessment methods.',
    measures: [
      'Frequency and intensity of anxious thoughts',
      'Physical symptoms of anxiety',
      'Impact on daily functioning and relationships'
    ],
    links: [
      { href: '/tools/matchers/therapy-platform-matcher', text: 'Find an Anxiety Specialist', primary: true },
      { href: '/best/conditions/best-for-anxiety', text: 'View Best Anxiety Treatment Options', primary: true },
      { href: '/conditions/anxiety-disorder', text: 'Learn More About Anxiety', primary: false }
    ]
  },
  'DepressionScreening.astro': {
    title: 'Depression Screening',
    subtitle: 'Evaluate your depression symptoms with this clinically-informed screening',
    about: 'This screening tool helps evaluate the presence and severity of depression symptoms using standard clinical assessment methods.',
    measures: [
      'Mood and emotional state patterns',
      'Changes in sleep, appetite, and energy levels',
      'Impact on daily activities and relationships'
    ],
    links: [
      { href: '/tools/matchers/therapy-platform-matcher', text: 'Find a Depression Specialist', primary: true },
      { href: '/best/conditions/best-for-depression', text: 'View Best Depression Treatment Options', primary: true },
      { href: '/conditions/depression', text: 'Learn More About Depression', primary: false }
    ]
  },
  'MentalHealthAssessment.astro': {
    title: 'Mental Health Assessment',
    subtitle: 'Comprehensive evaluation of your mental health and wellbeing',
    about: 'This comprehensive assessment evaluates multiple aspects of your mental health to help you understand your overall wellbeing and identify areas that may benefit from professional support.',
    measures: [
      'Mood and emotional patterns',
      'Anxiety and stress levels',
      'Daily functioning and quality of life',
      'Sleep and energy patterns'
    ],
    links: [
      { href: '/tools/matchers/therapy-platform-matcher', text: 'Find a Mental Health Professional', primary: true },
      { href: '/compare/platforms', text: 'Compare Treatment Options', primary: true },
      { href: '/conditions-az', text: 'Learn About Mental Health Conditions', primary: false }
    ]
  },
  'StressLevelTest.astro': {
    title: 'Stress Level Test',
    subtitle: 'Assess your current stress levels and their impact on your life',
    about: 'This stress assessment helps you evaluate your current stress levels, identify stressors, and understand how stress may be affecting your physical and mental health.',
    measures: [
      'Current stress intensity and frequency',
      'Physical symptoms of stress',
      'Impact on work, relationships, and daily life',
      'Coping mechanisms and resilience'
    ],
    links: [
      { href: '/tools/matchers/therapy-platform-matcher', text: 'Find Stress Management Support', primary: true },
      { href: '/guides/lifestyle/stress-management-techniques', text: 'View Stress Management Guide', primary: true },
      { href: '/conditions/anxiety-disorder', text: 'Learn About Stress and Anxiety', primary: false }
    ]
  },
  'TherapyStyleAssessment.astro': {
    title: 'Therapy Style Assessment',
    subtitle: 'Discover which therapy approaches best match your preferences and needs',
    about: 'This assessment helps you understand which therapeutic approaches and styles align with your preferences, personality, and treatment goals.',
    measures: [
      'Your communication preferences and comfort levels',
      'Preferred treatment approaches and goals',
      'Learning style and engagement preferences',
      'Practical considerations for therapy'
    ],
    links: [
      { href: '/tools/matchers/therapy-platform-matcher', text: 'Find Matching Therapists', primary: true },
      { href: '/learn/approaches', text: 'Explore Therapy Approaches', primary: true },
      { href: '/compare/platforms', text: 'Compare Therapy Platforms', primary: false }
    ]
  },
  'InsuranceCoverageChecker.astro': {
    title: 'Insurance Coverage Checker',
    subtitle: 'Find therapy platforms that accept your insurance',
    about: 'This tool helps you identify online therapy platforms that accept your insurance plan, making mental health care more affordable and accessible.',
    measures: [
      'Platforms accepting your insurance',
      'Coverage details and copay information',
      'Out-of-network reimbursement options',
      'Alternative payment and financial assistance options'
    ],
    links: [
      { href: '/tools/matchers/therapy-platform-matcher', text: 'Find Insurance-Accepting Platforms', primary: true },
      { href: '/guides/financial/insurance-mental-health-coverage', text: 'Insurance Coverage Guide', primary: true },
      { href: '/compare/platforms', text: 'Compare All Platforms', primary: false }
    ]
  },
  'TherapyPlatformMatcher.astro': {
    title: 'Therapy Platform Matcher',
    subtitle: 'Find the perfect online therapy platform for your unique needs',
    about: 'This comprehensive matching tool considers your specific needs, preferences, budget, and treatment goals to recommend the best online therapy platforms for you.',
    measures: [
      'Your specific mental health needs and goals',
      'Budget and insurance considerations',
      'Preferred therapy format and communication style',
      'Therapist qualifications and specializations'
    ],
    links: [
      { href: '/compare/platforms', text: 'Compare All Platforms', primary: true },
      { href: '/best/overall/best-online-therapy', text: 'View Top-Rated Platforms', primary: true },
      { href: '/learn', text: 'Learn About Online Therapy', primary: false }
    ]
  },
  'TherapyTypeFinder.astro': {
    title: 'Therapy Type Finder',
    subtitle: 'Discover which type of therapy is right for your needs',
    about: 'This tool helps you understand different therapy types and approaches, matching you with the therapeutic modalities that best address your specific concerns and goals.',
    measures: [
      'Your primary concerns and treatment goals',
      'Preferred therapeutic approaches',
      'Evidence-based treatments for your needs',
      'Therapy formats and delivery methods'
    ],
    links: [
      { href: '/learn/approaches', text: 'Explore Therapy Types', primary: true },
      { href: '/tools/matchers/therapy-platform-matcher', text: 'Find Matching Platforms', primary: true },
      { href: '/best/overall/best-online-therapy', text: 'View Top Therapy Platforms', primary: false }
    ]
  }
};

function generateStaticPage(config) {
  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import { CheckCircle, Info, AlertCircle, Brain } from 'lucide-react';
---

<BaseLayout>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-indigo-600 p-6 text-white">
          <h1 class="text-2xl font-bold mb-2">${config.title}</h1>
          <p class="text-indigo-100">
            ${config.subtitle}
          </p>
        </div>

        <div class="p-6">
          <div class="space-y-4 mb-6">
            <div class="flex items-start">
              <Info class="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <h2 class="font-bold text-gray-800">About This Tool</h2>
                <p class="text-gray-600">
                  ${config.about}
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <Brain class="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <h2 class="font-bold text-gray-800">What It Evaluates</h2>
                <ul class="mt-2 space-y-1">
                  ${config.measures.map(measure => `<li class="flex items-center">
                    <CheckCircle class="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>${measure}</span>
                  </li>`).join('\n                  ')}
                </ul>
              </div>
            </div>

            <div class="flex items-start">
              <AlertCircle class="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <h2 class="font-bold text-gray-800">Important Note</h2>
                <p class="text-gray-600">
                  This tool is not a diagnostic instrument. It's designed to help you understand your needs and determine if professional help might be beneficial.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 class="font-bold text-gray-800 mb-2">Interactive Tool Coming Soon</h3>
            <p class="text-gray-700 mb-4">
              We're currently updating this tool. In the meantime, you can explore our comprehensive resources and find the help you need through the links below.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start bg-yellow-50 rounded-lg p-4">
              <AlertCircle class="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <p class="text-sm text-yellow-700">
                If you're experiencing mental health concerns, we recommend consulting with a qualified mental health professional for personalized assessment and care.
              </p>
            </div>

            <div class="flex flex-wrap gap-4">
              ${config.links.map(link => {
                const classes = link.primary
                  ? 'inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition'
                  : 'inline-flex items-center border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition';
                return `<a href="${link.href}" class="${classes}">
                ${link.text}
              </a>`;
              }).join('\n              ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</BaseLayout>
`;
}

async function main() {
  const assessmentsDir = path.resolve(__dirname, '../src/pages/tools/assessments');
  const matchersDir = path.resolve(__dirname, '../src/pages/tools/matchers');

  let fixedCount = 0;

  for (const [filename, config] of Object.entries(toolConfigs)) {
    const assessmentPath = path.join(assessmentsDir, filename);
    const matcherPath = path.join(matchersDir, filename);

    const filePath = fs.existsSync(assessmentPath) ? assessmentPath : matcherPath;

    if (fs.existsSync(filePath)) {
      const content = generateStaticPage(config);
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
      const relativePath = path.relative(path.resolve(__dirname, '..'), filePath);
      console.log(`✅ Fixed: ${relativePath}`);
    } else {
      console.log(`⚠️  Skipped (not found): ${filename}`);
    }
  }

  console.log(`\n✨ Fixed ${fixedCount} tool pages`);
}

main().catch(console.error);
