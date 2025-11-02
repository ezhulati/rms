import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, ArrowLeft, CheckCircle, Info, AlertCircle, Star, DollarSign, Shield, Users } from 'lucide-react';
import Button from '../../../components/Button';

interface Question {
  id: number;
  text: string;
  category: 'insurance' | 'preferences' | 'practical';
  type: 'single' | 'multiple';
  options: {
    value: string;
    text: string;
    description?: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "What type of insurance do you have?",
    category: 'insurance',
    type: 'single',
    options: [
      { value: 'private', text: 'Private Insurance', description: 'Through employer or purchased individually' },
      { value: 'medicaid', text: 'Medicaid', description: 'State-provided health coverage' },
      { value: 'medicare', text: 'Medicare', description: 'Federal health insurance program' },
      { value: 'none', text: 'No Insurance', description: 'Looking for self-pay options' }
    ]
  },
  {
    id: 2,
    text: "Select your insurance provider:",
    category: 'insurance',
    type: 'single',
    options: [
      { value: 'cigna', text: 'Cigna' },
      { value: 'aetna', text: 'Aetna' },
      { value: 'bluecross', text: 'Blue Cross Blue Shield' },
      { value: 'united', text: 'United Healthcare' },
      { value: 'kaiser', text: 'Kaiser Permanente' },
      { value: 'other', text: 'Other Insurance Provider' }
    ]
  },
  {
    id: 3,
    text: "What therapy features are most important to you?",
    category: 'preferences',
    type: 'multiple',
    options: [
      { value: 'messaging', text: 'Text messaging therapy' },
      { value: 'video', text: 'Video sessions' },
      { value: 'medication', text: 'Medication management' },
      { value: 'psychiatry', text: 'Access to psychiatrists' }
    ]
  },
  {
    id: 4,
    text: "What's your preferred price range per session with insurance coverage?",
    category: 'practical',
    type: 'single',
    options: [
      { value: 'under-25', text: 'Under $25 copay' },
      { value: '25-50', text: '$25-$50 copay' },
      { value: '50-75', text: '$50-$75 copay' },
      { value: '75-plus', text: '$75+ copay' }
    ]
  }
];

interface Platform {
  name: string;
  slug: string;
  description: string;
  insurance: {
    providers: string[];
    coverage: string;
    copayRange: string;
  };
  features: string[];
  requirements: string[];
  bestFor: string;
  matchScore?: number;
}

const platforms: Platform[] = [
  {
    name: 'Talkspace',
    slug: 'talkspace',
    description: 'Online therapy platform with broad insurance coverage and integrated psychiatric services.',
    insurance: {
      providers: ['cigna', 'aetna', 'bluecross', 'united', 'kaiser'],
      coverage: 'Most plans cover therapy sessions',
      copayRange: '$25-$75 per session'
    },
    features: [
      'Insurance coverage',
      'Medication management',
      'Multiple communication methods',
      'Psychiatric services'
    ],
    requirements: [
      'Valid insurance plan',
      'State residency verification',
      'Initial consultation'
    ],
    bestFor: 'Insurance holders seeking comprehensive care'
  },
  {
    name: 'Cerebral',
    slug: 'cerebral',
    description: 'Combined therapy and medication management platform with insurance options.',
    insurance: {
      providers: ['cigna', 'aetna', 'united'],
      coverage: 'Varies by plan and location',
      copayRange: '$30-$85 per session'
    },
    features: [
      'Insurance accepted',
      'Medication management',
      'Therapy sessions',
      'Care counseling'
    ],
    requirements: [
      'Insurance verification',
      'Initial assessment',
      'Regular check-ins'
    ],
    bestFor: 'Those needing both therapy and medication'
  },
  {
    name: 'Amwell',
    slug: 'amwell',
    description: 'Telehealth platform with strong insurance coverage for therapy services.',
    insurance: {
      providers: ['bluecross', 'aetna', 'cigna', 'united'],
      coverage: 'Wide insurance acceptance',
      copayRange: '$20-$65 per session'
    },
    features: [
      'Video therapy',
      'Insurance coverage',
      'On-demand sessions',
      'Provider choice'
    ],
    requirements: [
      'Insurance information',
      'Video capability',
      'Valid ID'
    ],
    bestFor: 'Traditional therapy format with insurance'
  }
];

const InsuranceCoverageChecker = () => {
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

      // Insurance provider matching
      if (answers[1] === 'none') {
        score += 0; // No insurance match
      } else if (platform.insurance.providers.includes(answers[2])) {
        score += 40; // Direct insurance match
      }

      // Feature matching
      const desiredFeatures = answers[3] as string[];
      if (desiredFeatures) {
        const matchingFeatures = desiredFeatures.filter(feature =>
          platform.features.some(f => f.toLowerCase().includes(feature))
        );
        score += (matchingFeatures.length / desiredFeatures.length) * 30;
      }

      // Copay range matching
      const copayRanges = {
        'under-25': [0, 25],
        '25-50': [25, 50],
        '50-75': [50, 75],
        '75-plus': [75, 999]
      };
      const desiredRange = copayRanges[answers[4] as keyof typeof copayRanges];
      const platformCopay = parseInt(platform.insurance.copayRange.match(/\d+/g)![0]);
      if (platformCopay >= desiredRange[0] && platformCopay <= desiredRange[1]) {
        score += 30;
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
              <h1 className="text-2xl font-bold mb-2">Your Insurance Coverage Matches</h1>
              <p className="text-indigo-100">
                Based on your insurance and preferences, here are your best matches
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
                            <Shield className="h-4 w-4 text-indigo-600 mr-1" />
                            <span className="text-sm text-gray-600">{platform.insurance.coverage}</span>
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
                        <h3 className="font-medium text-gray-800 mb-2">Insurance Details</h3>
                        <ul className="space-y-1">
                          <li className="flex items-center text-sm">
                            <DollarSign className="h-4 w-4 text-indigo-600 mr-2" />
                            <span>Copay Range: {platform.insurance.copayRange}</span>
                          </li>
                          <li className="flex items-center text-sm">
                            <Shield className="h-4 w-4 text-indigo-600 mr-2" />
                            <span>{platform.insurance.coverage}</span>
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

              {answers[1] === 'none' && (
                <div className="bg-yellow-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">No Insurance? Consider These Options</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Look for platforms offering financial aid or sliding scale fees</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Consider platforms with lower per-session costs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Check if your employer offers an Employee Assistance Program (EAP)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Explore HSA/FSA payment options</span>
                    </li>
                  </ul>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-start bg-yellow-50 rounded-lg p-4">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <p className="text-sm text-yellow-700">
                    Coverage and copay amounts may vary based on your specific plan and location. Always verify coverage details directly with your insurance provider and the therapy platform.
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
                    to="/guides/financial/therapy-insurance-coverage"
                    variant="primary"
                    icon={ArrowRight}
                  >
                    Read Insurance Guide
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
              <h1 className="text-2xl font-bold mb-2">Insurance Coverage Checker</h1>
              <p className="text-indigo-100">
                Find therapy platforms that accept your insurance
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">About This Tool</h2>
                    <p className="text-gray-600">
                      This tool helps you find online therapy platforms that accept your insurance and match your preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">What You'll Learn</h2>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Which platforms accept your insurance</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Estimated copay ranges</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Coverage requirements</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Alternative options if uninsured</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">Important Note</h2>
                    <p className="text-gray-600">
                      Coverage and copay amounts may vary based on your specific plan and location. Always verify coverage details with your insurance provider.
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
                Check Coverage
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
                  {questions[currentQuestion - 1].options.map((option, index) => (
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
                  {questions[currentQuestion - 1].options.map((option, index) => (
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

export default InsuranceCoverageChecker;