import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Brain, CheckCircle, Info, Star, DollarSign, MessageSquare, Video, Phone, AlertCircle, XCircle, ExternalLink } from 'lucide-react';
import Button from '../../../components/Button';

interface Question {
  id: number;
  text: string;
  category: 'needs' | 'preferences' | 'practical';
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

interface Platform {
  name: string;
  slug: string;
  description: string;
  rating: number;
  price: string;
  priceRange: [number, number];
  insurance: boolean;
  medication: boolean;
  communication: string[];
  bestFor: string[];
  matchScore?: number;
}

const questions: Question[] = [
  {
    id: 1,
    text: "What are your primary reasons for seeking therapy?",
    category: 'needs',
    type: 'multiple',
    options: [
      { value: 'anxiety', text: 'Anxiety' },
      { value: 'depression', text: 'Depression' },
      { value: 'relationships', text: 'Relationship Issues' },
      { value: 'trauma', text: 'Trauma/PTSD' },
      { value: 'addiction', text: 'Addiction' },
      { value: 'stress', text: 'Stress Management' },
      { value: 'self-improvement', text: 'Personal Growth' },
      { value: 'other', text: 'Other Mental Health Concerns' }
    ]
  },
  {
    id: 2,
    text: "Do you need medication management services?",
    category: 'needs',
    type: 'single',
    options: [
      { value: 'yes', text: 'Yes, I need medication management', description: 'I want to discuss and manage psychiatric medications' },
      { value: 'maybe', text: 'Maybe in the future', description: 'I might want to explore medication options later' },
      { value: 'no', text: 'No, just therapy', description: 'I am only interested in therapy/counseling' }
    ]
  },
  {
    id: 3,
    text: "How would you prefer to communicate with your therapist?",
    category: 'preferences',
    type: 'multiple',
    options: [
      { value: 'messaging', text: 'Text Messaging', description: 'Asynchronous text-based communication' },
      { value: 'video', text: 'Video Sessions', description: 'Face-to-face video calls' },
      { value: 'phone', text: 'Phone Calls', description: 'Voice-only sessions' },
      { value: 'chat', text: 'Live Chat', description: 'Real-time text conversations' }
    ]
  },
  {
    id: 4,
    text: "How important is having insurance coverage for therapy?",
    category: 'practical',
    type: 'single',
    options: [
      { value: 'essential', text: 'Essential - Must accept insurance', description: 'I need to use my insurance benefits' },
      { value: 'preferred', text: 'Preferred but not required', description: 'Would like to use insurance but open to other options' },
      { value: 'not-important', text: 'Not important', description: 'I plan to pay out of pocket' }
    ]
  },
  {
    id: 5,
    text: "What's your weekly budget for therapy?",
    category: 'practical',
    type: 'single',
    options: [
      { value: 'low', text: 'Under $60/week', description: 'Looking for most affordable options' },
      { value: 'medium', text: '$60-$90/week', description: 'Moderate budget' },
      { value: 'high', text: '$90+/week', description: 'Flexible budget for comprehensive care' }
    ]
  },
  {
    id: 6,
    text: "How often would you like to have live sessions?",
    category: 'preferences',
    type: 'single',
    options: [
      { value: 'weekly', text: 'Weekly', description: 'Regular weekly sessions' },
      { value: 'biweekly', text: 'Every other week', description: 'Less frequent sessions' },
      { value: 'flexible', text: 'Flexible/As needed', description: 'No fixed schedule' },
      { value: 'none', text: 'No live sessions', description: 'Prefer messaging only' }
    ]
  },
  {
    id: 7,
    text: "How important is having a quick response from your therapist?",
    category: 'preferences',
    type: 'scale',
    scaleLabels: {
      min: 'Not very important',
      max: 'Very important'
    }
  },
  {
    id: 8,
    text: "Do you have any specific preferences for your therapist?",
    category: 'preferences',
    type: 'multiple',
    options: [
      { value: 'gender', text: 'Specific gender preference' },
      { value: 'lgbtq', text: 'LGBTQ+ affirming' },
      { value: 'cultural', text: 'Cultural competency' },
      { value: 'religious', text: 'Religious/spiritual background' },
      { value: 'experience', text: 'Extensive experience' },
      { value: 'none', text: 'No specific preferences' }
    ]
  }
];

const platforms: Platform[] = [
  {
    name: 'BetterHelp',
    slug: 'betterhelp',
    description: 'Large therapy platform with diverse therapists and flexible communication options',
    rating: 4.0,
    price: '$60-$90/week',
    priceRange: [60, 90],
    insurance: false,
    medication: false,
    communication: ['messaging', 'video', 'phone', 'chat'],
    bestFor: ['anxiety', 'depression', 'relationships', 'stress', 'self-improvement']
  },
  {
    name: 'Talkspace',
    slug: 'talkspace',
    description: 'Comprehensive platform with insurance coverage and medication management',
    rating: 4.5,
    price: '$65-$99/week',
    priceRange: [65, 99],
    insurance: true,
    medication: true,
    communication: ['messaging', 'video', 'phone'],
    bestFor: ['anxiety', 'depression', 'trauma', 'medication-management']
  },
  {
    name: 'Cerebral',
    slug: 'cerebral',
    description: 'Combined therapy and medication management platform',
    rating: 4.0,
    price: '$85-$325/month',
    priceRange: [85, 325],
    insurance: true,
    medication: true,
    communication: ['messaging', 'video', 'phone'],
    bestFor: ['anxiety', 'depression', 'ADHD', 'medication-management']
  },
  {
    name: 'Calmerry',
    slug: 'calmerry',
    description: 'Affordable therapy platform with flexible plans',
    rating: 4.0,
    price: '$42-$68/week',
    priceRange: [42, 68],
    insurance: false,
    medication: false,
    communication: ['messaging', 'video'],
    bestFor: ['anxiety', 'depression', 'stress', 'relationships']
  },
  {
    name: 'Online-Therapy.com',
    slug: 'online-therapy',
    description: 'CBT-focused platform with structured program and resources',
    rating: 4.0,
    price: '$40-$88/week',
    priceRange: [40, 88],
    insurance: false,
    medication: false,
    communication: ['messaging', 'video'],
    bestFor: ['anxiety', 'depression', 'self-improvement', 'stress']
  }
];

const TherapyPlatformMatcher = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [showResults, setShowResults] = useState(false);
  const [matchedPlatforms, setMatchedPlatforms] = useState<Platform[]>([]);

  const handleSingleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateMatches();
    }
  };

  const handleMultipleAnswer = (values: string[]) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: values }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateMatches();
    }
  };

  const handleScaleAnswer = (value: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateMatches();
    }
  };

  const calculateMatches = () => {
    const scoredPlatforms = platforms.map(platform => {
      let score = 0;
      const maxScore = 100;

      if (answers[2] === 'yes' && platform.medication) score += 15;
      if (answers[2] === 'no' && !platform.medication) score += 10;

      if (answers[4] === 'essential' && platform.insurance) score += 20;
      if (answers[4] === 'preferred' && platform.insurance) score += 10;

      const budgetMap = { low: [0, 60], medium: [60, 90], high: [90, 999] };
      const budget = budgetMap[answers[5] as keyof typeof budgetMap];
      if (platform.priceRange[0] >= budget[0] && platform.priceRange[1] <= budget[1]) score += 15;

      const preferredMethods = answers[3] as string[];
      if (preferredMethods) {
        const matchingMethods = preferredMethods.filter(method => 
          platform.communication.includes(method)
        );
        score += (matchingMethods.length / preferredMethods.length) * 15;
      }

      const needs = answers[1] as string[];
      if (needs) {
        const matchingNeeds = needs.filter(need => 
          platform.bestFor.includes(need)
        );
        score += (matchingNeeds.length / needs.length) * 15;
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

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="h-4 w-4 fill-current" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<Star key={i} className="h-4 w-4 fill-current" />);
      } else {
        stars.push(<Star key={i} className="h-4 w-4" strokeWidth={1} />);
      }
    }
    return <div className="flex text-yellow-400">{stars}</div>;
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
              <h1 className="text-2xl font-bold mb-2">Your Therapy Platform Matches</h1>
              <p className="text-indigo-100">
                Based on your responses, here are your best matches for online therapy
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
                            {renderStars(platform.rating)}
                            <span className="ml-2 text-sm text-gray-600">{platform.rating}/5</span>
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
                        <h3 className="font-medium text-gray-800 mb-2">Key Features</h3>
                        <ul className="space-y-1">
                          <li className="flex items-center text-sm">
                            <DollarSign className="h-4 w-4 text-indigo-600 mr-2" />
                            <span>{platform.price}</span>
                          </li>
                          <li className="flex items-center text-sm">
                            {platform.insurance ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-500 mr-2" />
                            )}
                            <span>Insurance Coverage</span>
                          </li>
                          <li className="flex items-center text-sm">
                            {platform.medication ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-500 mr-2" />
                            )}
                            <span>Medication Management</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-2">Communication Methods</h3>
                        <div className="flex space-x-2">
                          {platform.communication.includes('messaging') && (
                            <div className="bg-gray-100 px-2 py-1 rounded text-sm">
                              <MessageSquare className="h-4 w-4 inline mr-1" />
                              Messaging
                            </div>
                          )}
                          {platform.communication.includes('video') && (
                            <div className="bg-gray-100 px-2 py-1 rounded text-sm">
                              <Video className="h-4 w-4 inline mr-1" />
                              Video
                            </div>
                          )}
                          {platform.communication.includes('phone') && (
                            <div className="bg-gray-100 px-2 py-1 rounded text-sm">
                              <Phone className="h-4 w-4 inline mr-1" />
                              Phone
                            </div>
                          )}
                        </div>
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
                        icon={ExternalLink}
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
                    These recommendations are based on your responses and our platform analysis. Always do your own research and consider consulting with a mental health professional about your specific needs.
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
                    to="/tools/assessments/mental-health-assessment"
                    variant="primary"
                    icon={Brain}
                  >
                    Take Mental Health Assessment
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
        {currentQuestion === 0 && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-indigo-600 p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Therapy Platform Matcher</h1>
              <p className="text-indigo-100">
                Find your perfect online therapy match in just a few minutes
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">About This Tool</h2>
                    <p className="text-gray-600">
                      Our matching algorithm analyzes your needs, preferences, and practical requirements to recommend the best online therapy platforms for you.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">What We'll Ask About</h2>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Your therapy goals and needs</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Communication preferences</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Budget and insurance requirements</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Therapist preferences</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">Important Note</h2>
                    <p className="text-gray-600">
                      This tool provides recommendations based on your responses but is not a substitute for professional medical advice. If you're in crisis, please seek immediate help through emergency services or crisis hotlines.
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
                Start Matching
              </Button>
            </div>
          </div>
        )}

        {currentQuestion > 0 && (
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
                      onClick={() => handleSingleAnswer(option.value)}
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
                        handleMultipleAnswer(answers[currentQuestion]);
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
                    onChange={(e) => handleScaleAnswer(parseInt(e.target.value))}
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

export default TherapyPlatformMatcher;