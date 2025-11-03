import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * This script standardizes button styling across all Astro files
 * - Ensures consistent horizontal padding
 * - Adds whitespace-nowrap to prevent text wrapping
 * - Maps inconsistent styles to standard button patterns
 */

const BUTTON_PATTERNS = {
  // Primary buttons (indigo/purple backgrounds)
  indigoPrimary: {
    pattern: /class="([^"]*(?:inline-flex|flex)[^"]*items-center[^"]*)(px-\d+\s+py-\d+[^"]*bg-indigo-\d+[^"]*)"/g,
    replacement: (match, preClasses, rest) => {
      // Remove old padding, add standard padding and whitespace-nowrap
      let cleaned = rest.replace(/px-\d+\s+py-\d+/, '').trim();
      if (!cleaned.includes('whitespace-nowrap')) {
        cleaned = 'whitespace-nowrap ' + cleaned;
      }
      // Use px-6 py-3 for standard buttons, px-8 py-4 for large text-lg buttons
      const padding = cleaned.includes('text-lg') ? 'px-8 py-4' : 'px-6 py-3';
      return `class="${preClasses.trim()} ${padding} ${cleaned}"`;
    },
  },

  // Secondary buttons (white/border)
  secondaryWhite: {
    pattern: /class="([^"]*(?:inline-flex|flex)[^"]*items-center[^"]*)(px-\d+\s+py-\d+[^"]*border[^"]*)"/g,
    replacement: (match, preClasses, rest) => {
      let cleaned = rest.replace(/px-\d+\s+py-\d+/, '').trim();
      if (!cleaned.includes('whitespace-nowrap')) {
        cleaned = 'whitespace-nowrap ' + cleaned;
      }
      const padding = cleaned.includes('text-lg') ? 'px-8 py-4' : 'px-6 py-3';
      return `class="${preClasses.trim()} ${padding} ${cleaned}"`;
    },
  },

  // All other buttons with inline-flex
  generic: {
    pattern: /class="([^"]*inline-flex[^"]*items-center[^"]*)(px-\d+\s+py-\d+)([^"]*)"/g,
    replacement: (match, preClasses, oldPadding, postClasses) => {
      let cleaned = postClasses.trim();
      if (!cleaned.includes('whitespace-nowrap')) {
        cleaned = 'whitespace-nowrap ' + cleaned;
      }
      const padding = cleaned.includes('text-lg') ? 'px-8 py-4' : 'px-6 py-3';
      return `class="${preClasses.trim()} ${padding} ${cleaned}"`;
    },
  },
};

async function fixButtonStyles() {
  console.log('🔍 Finding all Astro files...\n');

  const files = await glob('src/**/*.astro', {
    ignore: ['node_modules/**', 'dist/**'],
  });

  console.log(`Found ${files.length} Astro files\n`);

  let totalUpdates = 0;
  let filesModified = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    let originalContent = content;
    let fileUpdates = 0;

    // Apply each pattern
    Object.entries(BUTTON_PATTERNS).forEach(([name, { pattern, replacement }]) => {
      const matches = [...content.matchAll(pattern)];
      if (matches.length > 0) {
        content = content.replace(pattern, (...args) => {
          fileUpdates++;
          return replacement(...args);
        });
      }
    });

    // Also ensure any remaining buttons without whitespace-nowrap get it
    const simpleButtonPattern = /class="([^"]*(?:px-\d+|py-\d+)[^"]*(?:bg-\w+-\d+|border)[^"]*)"/g;
    content = content.replace(simpleButtonPattern, (match, classes) => {
      if (!classes.includes('whitespace-nowrap') && (classes.includes('px-') || classes.includes('py-'))) {
        // Check if this looks like a button (has background or border)
        if (classes.includes('bg-') || classes.includes('border')) {
          const updatedClasses = 'whitespace-nowrap ' + classes;
          fileUpdates++;
          return `class="${updatedClasses}"`;
        }
      }
      return match;
    });

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf-8');
      filesModified++;
      totalUpdates += fileUpdates;
      console.log(`✅ ${file}: ${fileUpdates} button(s) updated`);
    }
  }

  console.log(`\n✨ Complete! Modified ${filesModified} files with ${totalUpdates} total updates`);
}

fixButtonStyles().catch(console.error);
