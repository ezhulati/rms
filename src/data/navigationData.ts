import {
  GitCompare,
  Star,
  Award,
  Wrench,
  Brain,
  BookOpen,
  FileText,
  Scale,
  Palette,
  MessageSquare,
  Shield,
  DollarSign,
  Target,
  ClipboardList,
  Search,
  CheckCircle2,
  Heart,
  Users,
  Sparkles,
  Stethoscope,
  Activity,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  badge?: string;
}

export interface NavCategory {
  title: string;
  icon: LucideIcon;
  items: NavItem[];
}

export interface DirectLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

// Dropdown Categories
export const navigationCategories: NavCategory[] = [
  {
    title: 'Compare',
    icon: GitCompare,
    items: [
      {
        label: 'Platform Comparisons',
        href: '/compare/platforms',
        icon: Scale,
        description: 'Side-by-side platform feature analysis',
      },
      {
        label: 'Therapy Modalities',
        href: '/compare/modalities',
        icon: Palette,
        description: 'Different therapeutic approaches explained',
      },
      {
        label: 'Therapy Approaches',
        href: '/compare/modalities/therapy-approaches',
        icon: MessageSquare,
        description: 'CBT, DBT, psychodynamic, and more',
      },
      {
        label: 'Insurance Coverage',
        href: '/compare/roundups/insurance-friendly-platforms',
        icon: Shield,
        description: 'Platforms that accept insurance',
        badge: 'Popular',
      },
      {
        label: 'Therapy Alternatives',
        href: '/compare/alternatives',
        icon: Sparkles,
        description: 'Alternative mental health solutions',
      },
    ],
  },
  {
    title: 'Reviews',
    icon: Star,
    items: [
      {
        label: 'Platform Reviews',
        href: '/reviews/platforms',
        icon: Award,
        description: 'In-depth platform evaluations',
      },
      {
        label: 'Feature Reviews',
        href: '/reviews/features',
        icon: CheckCircle2,
        description: 'Deep dives into platform capabilities',
      },
      {
        label: 'Specialty Reviews',
        href: '/reviews/specialty',
        icon: Stethoscope,
        description: 'Specialized therapy focus areas',
      },
      {
        label: 'Pricing Reviews',
        href: '/reviews/pricing',
        icon: DollarSign,
        description: 'Cost comparison and value analysis',
      },
    ],
  },
  {
    title: 'Best For You',
    icon: Heart,
    items: [
      {
        label: 'Best Platforms',
        href: '/best/platforms',
        icon: Award,
        description: 'Top-rated therapy platforms',
        badge: 'Featured',
      },
      {
        label: 'Best by Condition',
        href: '/best/conditions',
        icon: Activity,
        description: 'Platforms for anxiety, depression, and more',
      },
      {
        label: 'Best for Specific Needs',
        href: '/best/specific-needs',
        icon: Target,
        description: 'Specialized requirements and preferences',
      },
      {
        label: 'Best by Audience',
        href: '/best/audiences',
        icon: Users,
        description: 'Teens, couples, LGBTQ+, and more',
      },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: [
      {
        label: 'Mental Health Assessments',
        href: '/tools/assessments',
        icon: ClipboardList,
        description: 'Self-assessment screening tools',
      },
      {
        label: 'Platform Matcher',
        href: '/tools/matchers/therapy-platform-matcher',
        icon: Search,
        description: 'Find your ideal therapy platform',
        badge: 'Popular',
      },
      {
        label: 'Insurance Checker',
        href: '/tools/matchers/insurance-coverage-checker',
        icon: Shield,
        description: 'Check insurance compatibility',
      },
      {
        label: 'Therapy Style Finder',
        href: '/tools/matchers/therapy-type-finder',
        icon: Target,
        description: 'Discover your best therapy approach',
      },
    ],
  },
];

// Direct Links (no dropdown)
export const directLinks: DirectLink[] = [
  {
    label: 'Conditions A-Z',
    href: '/conditions-az',
    icon: Brain,
  },
  {
    label: 'Learn',
    href: '/learn',
    icon: BookOpen,
  },
  {
    label: 'Blog',
    href: '/blog',
    icon: FileText,
  },
];

// Get all navigation items flattened (useful for search, sitemap, etc.)
export const getAllNavItems = (): NavItem[] => {
  const categoryItems = navigationCategories.flatMap(category => category.items);
  const directLinkItems: NavItem[] = directLinks.map(link => ({
    label: link.label,
    href: link.href,
    icon: link.icon,
  }));
  return [...categoryItems, ...directLinkItems];
};

// Find active category based on current path
export const findActiveCategory = (pathname: string): NavCategory | null => {
  for (const category of navigationCategories) {
    if (category.items.some(item => pathname.startsWith(item.href))) {
      return category;
    }
  }
  return null;
};
