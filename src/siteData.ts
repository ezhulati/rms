// Centralized site data for RealMind Solutions

export const platforms = [
  {
    id: 'betterhelp',
    name: 'BetterHelp',
    slug: 'betterhelp',
    logo: '/images/platforms/betterhelp-logo.png',
    image: '/images/platforms/betterhelpreviews.jpg',
    tagline: 'World\'s Largest Online Therapy Platform',
    description: 'BetterHelp is the world\'s largest online therapy platform, offering affordable and convenient access to licensed therapists through messaging, phone, and video sessions.',
    rating: 4.8,
    ratings: {
      overall: 4.8,
      therapistQuality: 4.9,
      userExperience: 4.7,
      pricing: 4.5,
      customerService: 4.6,
      features: 4.8
    },
    pricing: {
      range: '$60-$90/week',
      billingCycle: 'Weekly',
      financialAid: 'Available',
      insurance: 'Not Accepted'
    },
    pros: [
      'Largest network of licensed therapists (over 30,000)',
      'Multiple communication methods (text, video, phone, live chat)',
      'Flexible scheduling and 24/7 messaging',
      'Financial aid available for those who qualify',
      'Quick therapist matching (usually within 24-48 hours)',
      'Easy therapist switching at no extra cost'
    ],
    cons: [
      'Does not accept insurance',
      'Therapists are independent contractors, not employees',
      'Video quality can vary depending on connection',
      'No medication management or psychiatric services',
      'Pricing can add up over time',
      'Some states have limited therapist availability'
    ],
    features: [
      'Unlimited messaging with your therapist',
      'Live video sessions (30-45 minutes)',
      'Phone sessions available',
      'Live chat sessions',
      'Group therapy sessions (included)',
      'Therapy worksheets and journaling',
      'Secure and confidential platform'
    ],
    bestFor: [
      'General anxiety and depression',
      'Convenient and flexible therapy',
      'Those who prefer text-based communication',
      'People with busy schedules',
      'First-time therapy seekers',
      'Long-distance or rural areas'
    ],
    notIdealFor: [
      'Those requiring medication management',
      'Severe mental health crises',
      'Court-mandated therapy',
      'Insurance-dependent individuals',
      'Those needing in-person sessions'
    ],
    specialties: ['Anxiety', 'Depression', 'Stress', 'Relationship Issues', 'Trauma', 'LGBTQ+ Issues'],
    communication: ['messaging', 'video', 'phone', 'live-chat'],
    insurance: false,
    medication: false,
    priceRange: [60, 90],
    price: '$60-$90/week',
    insuranceProviders: [],
    copayRange: 'N/A - Does not accept insurance',
    messagingRating: 4.9,
    liveSessionsRating: 4.7,
    responseTimeRating: 4.8,
    overallRating: 4.8
  },
  {
    id: 'talkspace',
    name: 'Talkspace',
    slug: 'talkspace',
    logo: '/images/platforms/talkspace-logo.png',
    image: '/images/platforms/talkspacereview.jpg',
    tagline: 'Therapy & Psychiatry - All Online',
    description: 'Talkspace offers online therapy and psychiatry services with insurance coverage options, providing access to licensed therapists and psychiatrists through text, audio, and video.',
    rating: 4.5,
    ratings: {
      overall: 4.5,
      therapistQuality: 4.6,
      userExperience: 4.4,
      pricing: 4.3,
      customerService: 4.4,
      features: 4.7
    },
    pricing: {
      range: '$65-$99/week',
      billingCycle: 'Weekly or Monthly',
      financialAid: 'Limited',
      insurance: 'Accepted'
    },
    pros: [
      'Accepts many major insurance plans',
      'Medication management available through psychiatrists',
      'Text, audio, and video therapy options',
      'Specializes in specific conditions (anxiety, depression, etc.)',
      'Corporate wellness programs available',
      'Teen therapy services (13-17 years old)'
    ],
    cons: [
      'More expensive than some competitors',
      'Insurance coverage can be confusing',
      'Video sessions require separate subscription tier',
      'Fewer therapists than BetterHelp',
      'Some complaints about customer service response time'
    ],
    features: [
      'Unlimited messaging therapy',
      'Live video sessions (varies by plan)',
      'Audio messaging',
      'Psychiatry and medication management',
      'Insurance billing support',
      'Mobile app with journaling tools'
    ],
    bestFor: [
      'Those with insurance coverage',
      'Need for medication management',
      'Specific mental health conditions',
      'Teen and adolescent therapy',
      'Corporate mental health benefits'
    ],
    notIdealFor: [
      'Budget-conscious without insurance',
      'Those preferring phone therapy',
      'Need for crisis intervention'
    ],
    specialties: ['Anxiety', 'Depression', 'PTSD', 'OCD', 'Bipolar Disorder', 'Eating Disorders'],
    communication: ['messaging', 'video', 'audio'],
    insurance: true,
    medication: true,
    priceRange: [65, 99],
    price: '$65-$99/week',
    insuranceProviders: ['Aetna', 'Cigna', 'Optum', 'Anthem', 'United Healthcare'],
    copayRange: '$0-$30 per session (varies by plan)',
    messagingRating: 4.6,
    liveSessionsRating: 4.4,
    responseTimeRating: 4.5,
    overallRating: 4.5
  },
  {
    id: 'cerebral',
    name: 'Cerebral',
    slug: 'cerebral',
    logo: '/images/platforms/cerebral-logo.png',
    image: '/images/platforms/cerebralreview.jpg',
    tagline: 'Mental Health Care, Simplified',
    description: 'Cerebral provides comprehensive online mental health care combining therapy and medication management, specializing in anxiety, depression, ADHD, and insomnia treatment.',
    rating: 4.0,
    ratings: {
      overall: 4.0,
      therapistQuality: 4.2,
      userExperience: 3.9,
      pricing: 3.8,
      customerService: 3.9,
      features: 4.3
    },
    pricing: {
      range: '$85-$325/month',
      billingCycle: 'Monthly',
      financialAid: 'Not Available',
      insurance: 'Accepted (select plans)'
    },
    pros: [
      'Medication management included in all plans',
      'Specializes in ADHD, anxiety, depression, and insomnia',
      'Accepts some insurance plans',
      'Prescription delivery available',
      'Care counselors for ongoing support',
      'Comprehensive treatment approach'
    ],
    cons: [
      'More expensive than therapy-only services',
      'Experienced regulatory challenges in some states',
      'Therapy sessions are limited per month',
      'Customer service complaints',
      'Not available in all states'
    ],
    features: [
      'Monthly therapy sessions',
      'Medication management and prescriptions',
      'Unlimited messaging with care team',
      'Prescription delivery',
      'Progress tracking tools',
      'Mobile app access'
    ],
    bestFor: [
      'Those needing medication management',
      'ADHD treatment',
      'Anxiety and depression with medication',
      'Comprehensive mental health care',
      'Insurance coverage seekers'
    ],
    notIdealFor: [
      'Budget-conscious therapy seekers',
      'Those preferring therapy-only approach',
      'Residents of restricted states'
    ],
    specialties: ['ADHD', 'Anxiety', 'Depression', 'Insomnia', 'Bipolar Disorder'],
    communication: ['messaging', 'video'],
    insurance: true,
    medication: true,
    priceRange: [85, 325],
    price: '$85-$325/month',
    insuranceProviders: ['Aetna', 'Cigna', 'Blue Cross Blue Shield'],
    copayRange: '$10-$50 per session (varies by plan)',
    messagingRating: 4.2,
    liveSessionsRating: 3.9,
    responseTimeRating: 3.8,
    overallRating: 4.0
  },
  {
    id: 'online-therapy',
    name: 'Online-Therapy.com',
    slug: 'online-therapy-com',
    logo: '/images/platforms/online-therapy-logo.png',
    image: '/images/platforms/onlinetherapyreview.jpg',
    tagline: 'CBT-Based Online Therapy',
    description: 'Online-Therapy.com specializes in Cognitive Behavioral Therapy (CBT) with a structured program including worksheets, yoga videos, and activity plans alongside traditional therapy.',
    rating: 4.0,
    ratings: {
      overall: 4.0,
      therapistQuality: 4.1,
      userExperience: 4.0,
      pricing: 4.3,
      customerService: 3.9,
      features: 4.2
    },
    pricing: {
      range: '$40-$88/week',
      billingCycle: 'Weekly or Monthly',
      financialAid: 'Available',
      insurance: 'Not Accepted'
    },
    pros: [
      'Focused on evidence-based CBT therapy',
      'Comprehensive therapy program with worksheets',
      'More affordable than many competitors',
      'Includes yoga and meditation resources',
      'Structured 8-section therapy program',
      'Good for specific behavioral changes'
    ],
    cons: [
      'Does not accept insurance',
      'Primarily focused on CBT (limited modalities)',
      'Fewer therapists than larger platforms',
      'Video sessions limited compared to messaging',
      'Interface less modern than competitors'
    ],
    features: [
      'CBT-focused therapy program',
      'Therapy worksheets and activities',
      'Yoga and meditation videos',
      'Live video sessions',
      'Unlimited messaging',
      'Progress tracking and journaling',
      'Activity planning tools'
    ],
    bestFor: [
      'CBT therapy approach',
      'Structured self-help programs',
      'Budget-conscious therapy seekers',
      'Anxiety and depression management',
      'Those who like homework and activities'
    ],
    notIdealFor: [
      'Those needing medication',
      'Crisis intervention',
      'Insurance coverage required',
      'Preference for other therapy modalities'
    ],
    specialties: ['Anxiety', 'Depression', 'Stress', 'Relationship Issues', 'Anger Management'],
    communication: ['messaging', 'video'],
    insurance: false,
    medication: false,
    priceRange: [40, 88],
    price: '$40-$88/week',
    insuranceProviders: [],
    copayRange: 'N/A - Does not accept insurance',
    messagingRating: 4.1,
    liveSessionsRating: 4.0,
    responseTimeRating: 4.2,
    overallRating: 4.0
  },
  {
    id: 'regain',
    name: 'ReGain',
    slug: 'regain',
    logo: '/images/platforms/regain-logo.png',
    image: '/images/platforms/regainreview.jpg',
    tagline: 'Online Couples Therapy',
    description: 'ReGain specializes in relationship counseling and couples therapy, allowing both partners to participate in joint sessions with licensed marriage and family therapists.',
    rating: 4.3,
    ratings: {
      overall: 4.3,
      therapistQuality: 4.5,
      userExperience: 4.2,
      pricing: 4.0,
      customerService: 4.2,
      features: 4.3
    },
    pricing: {
      range: '$60-$90/week',
      billingCycle: 'Weekly',
      financialAid: 'Available',
      insurance: 'Not Accepted'
    },
    pros: [
      'Specialized in couples and relationship therapy',
      'Both partners can participate at same price',
      'Licensed marriage and family therapists',
      'Multiple communication methods',
      'Flexible scheduling',
      'Relationship-focused resources and worksheets'
    ],
    cons: [
      'Does not accept insurance',
      'Limited to relationship issues',
      'Same price structure as BetterHelp',
      'No medication management',
      'Fewer individual therapy options'
    ],
    features: [
      'Joint couples therapy sessions',
      'Individual partner sessions available',
      'Unlimited messaging',
      'Live video sessions',
      'Phone sessions',
      'Relationship worksheets',
      'Private and secure platform'
    ],
    bestFor: [
      'Couples therapy and counseling',
      'Marriage issues',
      'Relationship communication problems',
      'Pre-marital counseling',
      'Divorce support',
      'Blended family challenges'
    ],
    notIdealFor: [
      'Individual mental health issues',
      'Severe mental illness',
      'Crisis situations',
      'Those needing medication',
      'Insurance-dependent couples'
    ],
    specialties: ['Couples Therapy', 'Marriage Counseling', 'Relationship Issues', 'Communication', 'Infidelity'],
    communication: ['messaging', 'video', 'phone'],
    insurance: false,
    medication: false,
    priceRange: [60, 90],
    price: '$60-$90/week',
    insuranceProviders: [],
    copayRange: 'N/A - Does not accept insurance',
    messagingRating: 4.4,
    liveSessionsRating: 4.3,
    responseTimeRating: 4.2,
    overallRating: 4.3
  }
];

export const blogArticles = [
  {
    id: 'understanding-anxiety',
    title: 'Understanding Anxiety: Types, Symptoms, and Treatment Options',
    slug: 'understanding-anxiety-disorders',
    category: 'guides',
    author: {
      name: 'Dr. Sarah Johnson',
      role: 'Clinical Psychologist',
      image: '/images/authors/sarah-johnson.jpg'
    },
    publishDate: '2024-01-15',
    readTime: '8 min read',
    image: '/images/blog/anxiety-guide.jpg',
    excerpt: 'Learn about different types of anxiety disorders, their symptoms, and evidence-based treatment approaches that can help you manage anxiety effectively.',
    tags: ['Anxiety', 'Mental Health', 'Treatment', 'Therapy'],
    featured: true
  },
  {
    id: 'online-therapy-vs-traditional',
    title: 'Online Therapy vs. Traditional Therapy: Which Is Right for You?',
    slug: 'online-vs-traditional-therapy',
    category: 'guides',
    author: {
      name: 'Dr. Michael Chen',
      role: 'Psychiatrist',
      image: '/images/authors/michael-chen.jpg'
    },
    publishDate: '2024-01-10',
    readTime: '10 min read',
    image: '/images/blog/therapy-comparison.jpg',
    excerpt: 'Explore the differences between online and in-person therapy, including benefits, limitations, and how to choose the best option for your needs.',
    tags: ['Online Therapy', 'Therapy Types', 'Beginners'],
    featured: true
  },
  {
    id: 'depression-symptoms',
    title: 'Recognizing Depression: Signs, Symptoms, and When to Seek Help',
    slug: 'depression-symptoms-guide',
    category: 'guides',
    author: {
      name: 'Dr. Emma Rodriguez',
      role: 'Licensed Therapist',
      image: '/images/authors/emma-rodriguez.jpg'
    },
    publishDate: '2024-01-05',
    readTime: '7 min read',
    image: '/images/blog/depression-awareness.jpg',
    excerpt: 'Understanding the signs and symptoms of depression is the first step toward getting help. Learn when and how to seek professional support.',
    tags: ['Depression', 'Mental Health', 'Awareness'],
    featured: false
  },
  {
    id: 'therapy-first-session',
    title: 'What to Expect in Your First Therapy Session',
    slug: 'first-therapy-session-guide',
    category: 'guides',
    author: {
      name: 'Dr. Sarah Johnson',
      role: 'Clinical Psychologist',
      image: '/images/authors/sarah-johnson.jpg'
    },
    publishDate: '2024-01-01',
    readTime: '6 min read',
    image: '/images/blog/first-session.jpg',
    excerpt: 'Nervous about your first therapy session? Learn what to expect, how to prepare, and what questions you should ask your therapist.',
    tags: ['Therapy', 'Beginners', 'Therapist Selection'],
    featured: false
  },
  {
    id: 'cbt-explained',
    title: 'Cognitive Behavioral Therapy (CBT): What It Is and How It Works',
    slug: 'cbt-therapy-explained',
    category: 'guides',
    author: {
      name: 'Dr. Maya Patel',
      role: 'CBT Specialist',
      image: '/images/authors/maya-patel.jpg'
    },
    publishDate: '2023-12-20',
    readTime: '9 min read',
    image: '/images/blog/cbt-therapy.jpg',
    excerpt: 'CBT is one of the most effective forms of therapy for anxiety and depression. Discover how it works and whether it\'s right for you.',
    tags: ['CBT', 'Therapy Types', 'Mental Health'],
    featured: true
  },
  {
    id: 'insurance-coverage',
    title: 'Navigating Mental Health Insurance Coverage: A Complete Guide',
    slug: 'mental-health-insurance-guide',
    category: 'guides',
    author: {
      name: 'Dr. Michael Chen',
      role: 'Psychiatrist',
      image: '/images/authors/michael-chen.jpg'
    },
    publishDate: '2023-12-15',
    readTime: '11 min read',
    image: '/images/blog/insurance-guide.jpg',
    excerpt: 'Understanding your mental health insurance benefits can be confusing. This guide helps you navigate coverage, claims, and out-of-pocket costs.',
    tags: ['Insurance', 'Finance', 'Healthcare'],
    featured: false
  }
];

export const featuredArticles = blogArticles.filter(article => article.featured);

export const reviews = platforms.map(platform => ({
  id: platform.id,
  platform: platform.name,
  rating: platform.rating,
  excerpt: platform.description,
  link: `/reviews/platforms/${platform.slug}-review`,
  image: platform.image,
  pros: platform.pros.slice(0, 3),
  cons: platform.cons.slice(0, 3)
}));

export const assessments = [
  {
    id: 'mental-health-assessment',
    title: 'Comprehensive Mental Health Assessment',
    description: 'Screen for common mental health conditions including anxiety, depression, and stress',
    duration: '15-20 minutes',
    questions: 42,
    image: '/images/assessments/mental-health.jpg',
    path: '/tools/assessments/mental-health-assessment',
    icon: 'Brain'
  },
  {
    id: 'anxiety-screening',
    title: 'Anxiety Screening Tool',
    description: 'Assess your anxiety levels and identify potential anxiety disorders',
    duration: '5-10 minutes',
    questions: 21,
    image: '/images/assessments/anxiety.jpg',
    path: '/tools/assessments/anxiety-screening',
    icon: 'AlertCircle'
  },
  {
    id: 'depression-screening',
    title: 'Depression Assessment',
    description: 'Evaluate symptoms of depression and determine severity',
    duration: '5-10 minutes',
    questions: 18,
    image: '/images/assessments/depression.jpg',
    path: '/tools/assessments/depression-screening',
    icon: 'Heart'
  },
  {
    id: 'stress-level-test',
    title: 'Stress Level Assessment',
    description: 'Measure your current stress levels and identify major stressors',
    duration: '10 minutes',
    questions: 25,
    image: '/images/assessments/stress.jpg',
    path: '/tools/assessments/stress-level-test',
    icon: 'Activity'
  },
  {
    id: 'ocd-assessment',
    title: 'OCD Screening Tool',
    description: 'Screen for obsessive-compulsive disorder symptoms and behaviors',
    duration: '8-12 minutes',
    questions: 20,
    image: '/images/assessments/ocd.jpg',
    path: '/tools/assessments/ocd-assessment',
    icon: 'RefreshCw'
  },
  {
    id: 'ptsd-assessment',
    title: 'PTSD Screening Assessment',
    description: 'Evaluate symptoms of post-traumatic stress disorder',
    duration: '10-15 minutes',
    questions: 24,
    image: '/images/assessments/ptsd.jpg',
    path: '/tools/assessments/ptsd-assessment',
    icon: 'Shield'
  },
  {
    id: 'depression-assessment',
    title: 'Depression Self-Assessment',
    description: 'Comprehensive evaluation of depressive symptoms and mood patterns',
    duration: '8-10 minutes',
    questions: 16,
    image: '/images/assessments/depression-full.jpg',
    path: '/tools/assessments/depression-assessment',
    icon: 'CloudRain'
  },
  {
    id: 'relationship-assessment',
    title: 'Relationship Health Assessment',
    description: 'Evaluate the health and satisfaction of your romantic relationship',
    duration: '10-15 minutes',
    questions: 28,
    image: '/images/assessments/relationship.jpg',
    path: '/tools/assessments/relationship-assessment',
    icon: 'Heart'
  },
  {
    id: 'therapy-readiness',
    title: 'Therapy Readiness Assessment',
    description: 'Determine if you\'re ready to begin therapy and what to expect',
    duration: '5 minutes',
    questions: 12,
    image: '/images/assessments/therapy-readiness.jpg',
    path: '/tools/assessments/therapy-readiness',
    icon: 'CheckCircle'
  },
  {
    id: 'burnout-assessment',
    title: 'Burnout Screening Tool',
    description: 'Assess signs of burnout and emotional exhaustion',
    duration: '8 minutes',
    questions: 16,
    image: '/images/assessments/burnout.jpg',
    path: '/tools/assessments/burnout-assessment',
    icon: 'Flame'
  }
];

export const matchers = [
  {
    id: 'therapy-platform-matcher',
    title: 'Therapy Platform Matcher',
    description: 'Find the perfect online therapy platform based on your needs, budget, and preferences',
    duration: '5 minutes',
    image: '/images/matchers/platform-matcher.jpg',
    path: '/tools/matchers/therapy-platform-matcher',
    icon: 'Search',
    features: [
      'Personalized platform recommendations',
      'Budget-based filtering',
      'Compare multiple platforms',
      'Insurance coverage matching'
    ]
  },
  {
    id: 'therapy-type-finder',
    title: 'Therapy Type Finder',
    description: 'Discover which therapy approach is best suited for your situation and goals',
    duration: '3 minutes',
    image: '/images/matchers/therapy-type.jpg',
    path: '/tools/matchers/therapy-type-finder',
    icon: 'Compass',
    features: [
      'Match to therapy modality',
      'CBT, DBT, psychodynamic, and more',
      'Condition-specific recommendations',
      'Evidence-based suggestions'
    ]
  },
  {
    id: 'budget-friendly-finder',
    title: 'Budget-Friendly Therapy Finder',
    description: 'Find affordable online therapy options that fit your budget',
    duration: '3 minutes',
    image: '/images/matchers/budget-finder.jpg',
    path: '/tools/matchers/budget-friendly-finder',
    icon: 'DollarSign',
    features: [
      'Filter by weekly budget',
      'Compare pricing across platforms',
      'Financial aid availability',
      'Sliding scale options'
    ]
  },
  {
    id: 'insurance-coverage-checker',
    title: 'Insurance Coverage Checker',
    description: 'Check which online therapy platforms accept your insurance',
    duration: '2 minutes',
    image: '/images/matchers/insurance-checker.jpg',
    path: '/tools/matchers/insurance-coverage-checker',
    icon: 'Shield',
    features: [
      'Insurance provider matching',
      'In-network vs out-of-network',
      'Copay estimation',
      'Reimbursement process guidance'
    ]
  },
  {
    id: 'therapist-specialty-finder',
    title: 'Therapist Specialty Finder',
    description: 'Find therapists specializing in your specific condition or situation',
    duration: '4 minutes',
    image: '/images/matchers/specialty-finder.jpg',
    path: '/tools/matchers/therapist-specialty-finder',
    icon: 'Users',
    features: [
      'Condition-specific specialists',
      'Cultural competency matching',
      'LGBTQ+ affirming therapists',
      'Language preferences'
    ]
  },
  {
    id: 'communication-preference-matcher',
    title: 'Communication Preference Matcher',
    description: 'Find platforms offering your preferred communication method',
    duration: '2 minutes',
    image: '/images/matchers/communication-matcher.jpg',
    path: '/tools/matchers/communication-preference-matcher',
    icon: 'MessageSquare',
    features: [
      'Text/messaging therapy',
      'Video session platforms',
      'Phone call options',
      'Live chat availability'
    ]
  }
];

export const worksheetCategories = [
  {
    name: 'Anxiety Management',
    description: 'Tools and exercises to help manage anxiety symptoms and reduce worry',
    worksheets: [
      {
        title: 'Worry Time Worksheet',
        description: 'Schedule dedicated worry time to contain anxious thoughts',
        format: 'PDF',
        pages: 2,
        tags: ['Anxiety', 'CBT', 'Daily Practice'],
        filePath: '/worksheets/anxiety/worry-time-worksheet.pdf'
      },
      {
        title: 'Anxiety Thought Record',
        description: 'Track and challenge anxiety-producing thoughts',
        format: 'PDF',
        pages: 3,
        tags: ['Anxiety', 'Thought Work', 'CBT'],
        filePath: '/worksheets/anxiety/anxiety-thought-record.pdf'
      }
    ]
  },
  {
    name: 'Depression Support',
    description: 'Worksheets designed to help manage depression symptoms and build coping skills',
    worksheets: [
      {
        title: 'Mood Tracking Log',
        description: 'Daily mood tracking to identify patterns and triggers',
        format: 'PDF',
        pages: 1,
        tags: ['Depression', 'Tracking', 'Self-Awareness'],
        filePath: '/worksheets/depression/mood-tracking.pdf'
      },
      {
        title: 'Activity Scheduling',
        description: 'Plan positive activities to combat depression and build momentum',
        format: 'PDF',
        pages: 2,
        tags: ['Depression', 'Behavioral Activation', 'Planning'],
        filePath: '/worksheets/depression/activity-scheduling.pdf'
      }
    ]
  },
  {
    name: 'Stress Management',
    description: 'Techniques and tools for reducing stress and building resilience',
    worksheets: [
      {
        title: 'Stress Symptom Tracker',
        description: 'Identify physical and emotional signs of stress',
        format: 'PDF',
        pages: 2,
        tags: ['Stress', 'Self-Awareness', 'Tracking'],
        filePath: '/worksheets/stress/stress-symptom-tracker.pdf'
      },
      {
        title: 'Relaxation Techniques Guide',
        description: 'Step-by-step instructions for progressive muscle relaxation and breathing exercises',
        format: 'PDF',
        pages: 3,
        tags: ['Stress', 'Relaxation', 'Mindfulness'],
        filePath: '/worksheets/stress/relaxation-techniques.pdf'
      }
    ]
  },
  {
    name: 'Cognitive Restructuring',
    description: 'Challenge negative thoughts and develop healthier thinking patterns',
    worksheets: [
      {
        title: 'Cognitive Distortion Worksheet',
        description: 'Identify and challenge common thinking errors',
        format: 'PDF',
        pages: 3,
        tags: ['CBT', 'Thought Work', 'Cognitive'],
        filePath: '/worksheets/cognitive/cognitive-distortions.pdf'
      },
      {
        title: 'Thought Record Worksheet',
        description: 'Comprehensive thought analysis and restructuring tool',
        format: 'PDF',
        pages: 2,
        tags: ['CBT', 'Thought Work', 'Cognitive'],
        filePath: '/worksheets/cognitive/thought-record.pdf'
      }
    ]
  },
  {
    name: 'Relationship & Communication',
    description: 'Build stronger relationships and improve communication skills',
    worksheets: [
      {
        title: 'Communication Styles Assessment',
        description: 'Identify your communication patterns and areas for growth',
        format: 'PDF',
        pages: 2,
        tags: ['Relationships', 'Communication', 'Self-Awareness'],
        filePath: '/worksheets/relationships/communication-styles.pdf'
      },
      {
        title: 'Conflict Resolution Worksheet',
        description: 'Navigate disagreements constructively and find win-win solutions',
        format: 'PDF',
        pages: 3,
        tags: ['Relationships', 'Communication', 'Problem-Solving'],
        filePath: '/worksheets/relationships/conflict-resolution.pdf'
      }
    ]
  },
  {
    name: 'Mindfulness & Self-Care',
    description: 'Practice mindfulness and develop sustainable self-care routines',
    worksheets: [
      {
        title: 'Mindfulness Practice Log',
        description: 'Track daily mindfulness exercises and their effects',
        format: 'PDF',
        pages: 1,
        tags: ['Mindfulness', 'Tracking', 'Self-Care'],
        filePath: '/worksheets/mindfulness/practice-log.pdf'
      },
      {
        title: 'Self-Care Action Plan',
        description: 'Create a personalized self-care routine for physical, emotional, and mental wellbeing',
        format: 'PDF',
        pages: 2,
        tags: ['Self-Care', 'Planning', 'Wellness'],
        filePath: '/worksheets/mindfulness/self-care-plan.pdf'
      }
    ]
  },
  {
    name: 'Trauma & PTSD',
    description: 'Resources for processing trauma and managing PTSD symptoms',
    worksheets: [
      {
        title: 'Grounding Techniques Card',
        description: 'Quick reference for grounding exercises during flashbacks or dissociation',
        format: 'PDF',
        pages: 1,
        tags: ['PTSD', 'Trauma', 'Grounding', 'Crisis'],
        filePath: '/worksheets/trauma/grounding-techniques.pdf'
      },
      {
        title: 'Trigger Identification Worksheet',
        description: 'Map out trauma triggers and develop coping strategies',
        format: 'PDF',
        pages: 3,
        tags: ['PTSD', 'Trauma', 'Self-Awareness', 'Coping'],
        filePath: '/worksheets/trauma/trigger-identification.pdf'
      }
    ]
  },
  {
    name: 'Goal Setting & Motivation',
    description: 'Set meaningful goals and maintain motivation for personal growth',
    worksheets: [
      {
        title: 'SMART Goals Worksheet',
        description: 'Define specific, measurable, achievable, relevant, and time-bound goals',
        format: 'PDF',
        pages: 2,
        tags: ['Goals', 'Planning', 'Motivation'],
        filePath: '/worksheets/goals/smart-goals.pdf'
      },
      {
        title: 'Values Clarification Exercise',
        description: 'Identify your core values and align goals with what matters most',
        format: 'PDF',
        pages: 3,
        tags: ['Goals', 'Values', 'Self-Awareness'],
        filePath: '/worksheets/goals/values-clarification.pdf'
      }
    ]
  }
];

// Helper functions
export function getPlatformBySlug(slug: string) {
  return platforms.find(p => p.slug === slug);
}

export function getArticlesByCategory(category: string) {
  return blogArticles.filter(article => article.category === category);
}

export function getFeaturedPlatforms(limit = 3) {
  return platforms.slice(0, limit);
}
