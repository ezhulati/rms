import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, ArrowLeft, CheckCircle, Info, AlertCircle, Star, DollarSign, Shield, Users } from 'lucide-react';
import Button from '../../../components/Button';

interface Question {
  id: number;
  text: string;
  category: 'budget' | 'insurance' | 'preferences';
  type: 'single' | 'multiple' | 'scale';
  options?: {
    value: string;
    text: string;
    description?: string;
  }[];
  scaleLabels?: {
    min: string;
    max: string;
  };
}

const questions: Question[] = [
  {
    id: 1,
    text: "What's your maximum weekly budget for therapy?",
    category: 'budget',
    type: 'single',
    options: [
      { value: 'under-40', text: 'Under $40/week', description: 'Looking for most affordable options' },
      { value: '40-60', text: '$40-$60/week', description: 'Budget-conscious but some flexibility' },
      { value: '60-80', text: '$60-$80/week', description: 'Moderate budget' },
      { value: '80-plus', text: '$80+/week', description: 'Flexible budget' }
    ]
  },
  {
    id: 2,
    text: "Do you have health insurance that covers mental health?",
    category: 'insurance',
    type: 'single',
    options: [
      { value: 'yes', text: 'Yes, I have insurance coverage', description: 'Looking for in-network providers' },
      { value: 'no', text: 'No insurance coverage', description: 'Need self-pay options' },
      { value: 'unsure', text: 'Not sure about coverage', description: 'Need help checking insurance benefits' }
    ]
  },
  {
    id: 3,
    text: "Which financial assistance options interest you?",
    category: 'budget',
    type: 'multiple',
    options: [
      { value: 'sliding-scale', text: 'Sliding scale fees', description: 'Fees based on income' },
      { value: 'financial-aid', text: 'Financial aid programs', description: 'Platform-specific assistance' },
      { value: 'payment-plans', text: 'Payment plans', description: 'Flexible payment options' },
      { value: 'hsa-fsa', text: 'HSA/FSA acceptance', description: 'Use health savings accounts' }
    ]
  },
  {
    id: 4,
    text: "How important is having insurance coverage?",
    category: 'insurance',
    type: 'scale',
    scaleLabels: {
      min: 'Not important',
      max: 'Very important'
    }
  },
  {
    id: 5,
    text: "Which therapy features are most important to you?",
    category: 'preferences',
    type: 'multiple',
    options: [
      { value: 'messaging', text: 'Unlimited messaging', description: 'Text-based therapy support' },
      { value: 'live-sessions', text: 'Live video sessions', description: 'Face-to-face therapy' },
      { value: 'resources', text: 'Self-help resources', description: 'Additional tools and content' },
      { value: 'medication', text: 'Medication management', description: 'Combined therapy and medication' }
    ]
  }
];

interface Platform {
  name: string;
  slug: string;
  priceRange: [number, number];
  weeklyPrice: string;
  insurance: boolean;
  financialAid: boolean;
  features: string[];
  bestFor: string;
  description: string;
  matchScore?: number;
}

const platforms: Platform[] = [
  {
    name: 'Calmerry',
    slug: 'calmerry',
    priceRange: [42, 68],
    weeklyPrice: '$42-$68/week',
    insurance: false,
    financialAid: true,
    features: ['Messaging therapy', 'Video sessions', 'Flexible plans'],
    bestFor: 'Budget-conscious individuals seeking flexible therapy options',
    description: 'Affordable online therapy platform with flexible subscription plans and quick therapist matching.'
  },
  {
    name: 'Online-Therapy.com',
    slug: 'online-therapy',
    priceRange: [40, 88],
    weeklyPrice: '$40-$88/week',
    insurance: false,
    financialAid: false,
    features: ['CBT program', 'Worksheets', 'Yoga videos'],
    bestFor: 'Self-guided therapy with professional support',
    description: 'Comprehensive CBT-based platform with structured programs and additional self-help resources.'
  },
  {
    name: 'BetterHelp',
    slug: 'betterhelp',
    priceRange: [60, 90],
    weeklyPrice: '$60-$90/week',
    insurance: false,
    financialAid: true,
    features: ['Unlimited messaging', 'Live sessions', 'Financial aid'],
    bestFor: 'Those seeking comprehensive therapy with financial aid options',
    description: 'Large therapy platform offering financial assistance and flexible communication options.'
  },
  {
    name: 'Talkspace',
    slug: 'talkspace',
    priceRange: [65, 99],
    weeklyPrice: '$65-$99/week',
    insurance: true,
    financialAid: false,
    features: ['Insurance coverage', 'Multiple plans', 'Medication options'],
    bestFor: 'Insurance holders seeking comprehensive care',
    description: 'Leading platform with insurance coverage and integrated psychiatric services.'
  }
];

const BudgetFriendlyFinder = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [showResults, setShowResults] = useState(false);
  const [matchedPlatforms, setMatchedPlatforms] = useState<Platform[]>([]);

  const handleAnswer = (value: any) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
    if (currentQuestion < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateMatches();
    }
  };

  const calculateMatches = () => {
    const scoredPlatforms = platforms.map(platform => {
      let score = 0;
      const maxScore = 100;

      // Budget matching
      const budgetRanges = {
        'under-40': [0, 40],
        '40-60': [40, 60],
        '60-80': [60, 80],
        '80-plus': [80, 999]
      };
      const budgetRange = budgetRanges[answers[1] as keyof typeof budgetRanges];
      if (platform.priceRange[0] >= budgetRange[0] && platform.priceRange[1] <= budgetRange[1]) {
        score += 30;
      }

      // Insurance matching
      if (answers[2] === 'yes' && platform.insurance) score += 25;
      if (answers[2] === 'no' && platform.financialAid) score += 20;

      // Financial assistance matching
      const assistancePreferences = answers[3] as string[];
      if (assistancePreferences) {
        if (assistancePreferences.includes('financial-aid') && platform.financialAid) score += 15;
        if (assistancePreferences.includes('sliding-scale') && platform.priceRange[0] < 50) score += 10;
      }

      // Feature preferences matching
      const featurePreferences = answers[5] as string[];
      if (featurePreferences) {
        const matchingFeatures = featurePreferences.filter(pref => 
          platform.features.some(feature => feature.toLowerCase().includes(pref))
        );
        score += (matchingFeatures.length / featurePreferences.length) * 20;
      }

      return {
        ...platform,
        matchScore: Math.round((score / maxScore) * 100)
      };
    });

    const sortedPlatforms = scoredPlatforms.sort((a, b) => 
      (b.matchScore || 0) - (a.matchScore || 0)
    );

    setMatchedPlatforms(sortedPlatforms);
    setShowResults(true);
  };

  const restartMatcher = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setMatchedPlatforms([]);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-600 p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Your Budget-Friendly Therapy Matches</h1>
              <p className="text-indigo-100">
                Based on your budget and preferences, here are your best matches for affordable therapy
              </p>
            </div>
            
            <div className="p-6">
              <div className="space-y-6 mb-8">
                {matchedPlatforms.map((platform, index) => (
                  <div key={platform.slug} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center mb-2 md:mb-0">
                        <span className="text-2xl font-bold text-indigo-600 mr-3">{index + 1}</span>
                        <div>
                          <h2 className="text-xl font-bold text-gray-800">{platform.name}</h2>
                          <div className="flex items-center mt-1">
                            <DollarSign className="h-4 w-4 text-indigo-600 mr-1" />
                            <span className="text-sm text-gray-600">{platform.weeklyPrice}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                          {platform.matchScore}% Match
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{platform.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h3 className="font-medium text-gray-800 mb-2">Financial Options</h3>
                        <ul className="space-y-1">
                          <li className="flex items-center text-sm">
                            {platform.insurance ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                            )}
                            <span>Insurance Coverage</span>
                          </li>
                          <li className="flex items-center text-sm">
                            {platform.financialAid ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                            )}
                            <span>Financial Aid Available</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-2">Key Features</h3>
                        <ul className="space-y-1">
                          {platform.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button 
                        as={Link}
                        to={`/reviews/platforms/${platform.slug}`}
                        variant="outline"
                        size="sm"
                      >
                        Read full review
                      </Button>
                      <Button
                        as="a"
                        href={`https://www.${platform.slug}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="sm"
                      >
                        Visit Website
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-start bg-yellow-50 rounded-lg p-4">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <p className="text-sm text-yellow-700">
                    These recommendations are based on your responses and our platform analysis. Always verify current pricing and features directly with the platform, as they may change over time.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={restartMatcher}
                    variant="outline"
                    icon={ArrowLeft}
                  >
                    Start Over
                  </Button>
                  <Button 
                    as={Link}
                    to="/compare/platforms"
                    variant="outline"
                    icon={ArrowRight}
                  >
                    Compare All Platforms
                  </Button>
                  <Button 
                    as={Link}
                    to="/guides/financial/affordable-therapy-options"
                    variant="primary"
                    icon={ArrowRight}
                  >
                    View Affordability Guide
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {currentQuestion === 0 ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-indigo-600 p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Budget-Friendly Therapy Finder</h1>
              <p className="text-indigo-100">
                Find affordable therapy options that fit your budget and needs
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">About This Tool</h2>
                    <p className="text-gray-600">
                      This tool helps you find affordable therapy options by considering your budget, insurance status, and financial assistance needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">What You'll Learn</h2>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Affordable therapy platforms within your budget</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Available financial assistance options</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Insurance coverage possibilities</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Cost-effective therapy solutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">Important Note</h2>
                    <p className="text-gray-600">
                      While we help you find affordable options, never compromise on the quality of care. Many platforms offer financial assistance or sliding scale fees to make quality therapy more accessible.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => setCurrentQuestion(1)} 
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                Begin Matching
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-600 p-6">
              <div className="flex justify-between items-center text-white mb-4">
                <h2 className="text-lg font-semibold">Question {currentQuestion} of {questions.length}</h2>
                <span className="text-sm text-indigo-200">
                  {Math.round((currentQuestion / questions.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-indigo-300 rounded-full h-2">
                <div 
                  className="bg-white rounded-full h-2 transition-all duration-300"
                  style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {questions[currentQuestion - 1].text}
              </h3>
              
              {questions[currentQuestion - 1].type === 'single' && (
                <div className="space-y-3">
                  {questions[currentQuestion - 1].options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200"
                    >
                      <div className="font-medium text-gray-800">{option.text}</div>
                      {option.description && (
                        <div className="text-sm text-gray-600 mt-1">{option.description}</div>
                      )}
                    </button>
                  ))}
                </div>
              )}
              
              {questions[currentQuestion - 1].type === 'multiple' && (
                <div className="space-y-3">
                  {questions[currentQuestion - 1].options?.map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={option.value}
                        onChange={(e) => {
                          const currentAnswers = answers[currentQuestion] || [];
                          const newAnswers = e.target.checked
                            ? [...currentAnswers, option.value]
                            : currentAnswers.filter((v: string) => v !== option.value);
                          setAnswers(prev => ({ ...prev, [currentQuestion]: newAnswers }));
                        }}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <div className="ml-3">
                        <div className="font-medium text-gray-800">{option.text}</div>
                        {option.description && (
                          <div className="text-sm text-gray-600">{option.description}</div>
                        )}
                      </div>
                    </label>
                  ))}
                  <Button
                    onClick={() => {
                      if (answers[currentQuestion]?.length > 0) {
                        handleAnswer(answers[currentQuestion]);
                      }
                    }}
                    variant="primary"
                    disabled={!answers[currentQuestion]?.length}
                    className="mt-4"
                  >
                    Continue
                  </Button>
                </div>
              )}
              
              {questions[currentQuestion - 1].type === 'scale' && (
                <div className="space-y-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{questions[currentQuestion - 1].scaleLabels?.min}</span>
                    <span>{questions[currentQuestion - 1].scaleLabels?.max}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    onChange={(e) => handleAnswer(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex justify-between px-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <div key={value} className="flex flex-col items-center">
                        <div className="w-1 h-3 bg-gray-300 mb-1"></div>
                        <span className="text-sm text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {currentQuestion > 1 && (
                <button
                  onClick={() => setCurrentQuestion(prev => prev - 1)}
                  className="mt-6 text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Previous question
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetFriendlyFinder;