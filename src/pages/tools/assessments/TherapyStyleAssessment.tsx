import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, ArrowLeft, CheckCircle, Info, AlertCircle, Star } from 'lucide-react';
import Button from '../../../components/Button';

interface Question {
  id: number;
  text: string;
  category: 'communication' | 'approach' | 'preferences';
  type: 'single' | 'scale';
  options?: {
    value: string;
    text: string;
    description?: string;
    therapyTypes?: string[];
  }[];
  scaleLabels?: {
    min: string;
    max: string;
  };
}

const questions: Question[] = [
  {
    id: 1,
    text: "How do you prefer to express your thoughts and feelings?",
    category: 'communication',
    type: 'single',
    options: [
      { 
        value: 'verbal',
        text: 'Through detailed verbal discussion',
        description: 'I prefer talking things through in detail',
        therapyTypes: ['psychodynamic', 'humanistic']
      },
      {
        value: 'practical',
        text: 'Through practical examples and solutions',
        description: 'I like focusing on specific problems and solutions',
        therapyTypes: ['cbt', 'solution-focused']
      },
      {
        value: 'creative',
        text: 'Through creative or expressive methods',
        description: 'I express myself better through art, writing, or metaphors',
        therapyTypes: ['art-therapy', 'narrative']
      },
      {
        value: 'structured',
        text: 'Through structured exercises and worksheets',
        description: 'I prefer organized, systematic approaches',
        therapyTypes: ['cbt', 'dbt']
      }
    ]
  },
  {
    id: 2,
    text: "What's most important to you in a therapeutic relationship?",
    category: 'preferences',
    type: 'single',
    options: [
      {
        value: 'support',
        text: 'Emotional support and validation',
        description: 'Someone who helps me feel understood and accepted',
        therapyTypes: ['humanistic', 'person-centered']
      },
      {
        value: 'guidance',
        text: 'Practical guidance and advice',
        description: 'Someone who provides clear direction and strategies',
        therapyTypes: ['cbt', 'behavioral']
      },
      {
        value: 'insight',
        text: 'Help understanding patterns and root causes',
        description: 'Someone who helps me explore deeper meanings',
        therapyTypes: ['psychodynamic', 'analytical']
      },
      {
        value: 'skills',
        text: 'Learning new skills and techniques',
        description: 'Someone who teaches practical coping methods',
        therapyTypes: ['dbt', 'cbt']
      }
    ]
  },
  {
    id: 3,
    text: "How do you prefer to work through challenges?",
    category: 'approach',
    type: 'single',
    options: [
      {
        value: 'present',
        text: 'Focus on the present moment',
        description: 'Working with current thoughts and feelings',
        therapyTypes: ['mindfulness', 'cbt']
      },
      {
        value: 'past',
        text: 'Explore past experiences',
        description: 'Understanding how past events influence the present',
        therapyTypes: ['psychodynamic', 'trauma-focused']
      },
      {
        value: 'future',
        text: 'Plan for the future',
        description: 'Setting goals and making positive changes',
        therapyTypes: ['solution-focused', 'behavioral']
      },
      {
        value: 'holistic',
        text: 'Consider all aspects together',
        description: 'Looking at the whole picture of past, present, and future',
        therapyTypes: ['integrative', 'holistic']
      }
    ]
  },
  {
    id: 4,
    text: "How structured would you like your therapy to be?",
    category: 'preferences',
    type: 'scale',
    scaleLabels: {
      min: 'Very flexible and open-ended',
      max: 'Highly structured with clear goals'
    }
  },
  {
    id: 5,
    text: "How important is having homework or exercises between sessions?",
    category: 'approach',
    type: 'scale',
    scaleLabels: {
      min: 'Not important',
      max: 'Very important'
    }
  },
  {
    id: 6,
    text: "How do you prefer to learn and process information?",
    category: 'communication',
    type: 'single',
    options: [
      {
        value: 'analytical',
        text: 'Through logical analysis and reasoning',
        description: 'I prefer understanding things systematically',
        therapyTypes: ['cbt', 'rational-emotive']
      },
      {
        value: 'emotional',
        text: 'Through emotional experience and reflection',
        description: 'I learn best through feeling and experiencing',
        therapyTypes: ['experiential', 'emotion-focused']
      },
      {
        value: 'behavioral',
        text: 'Through practice and action',
        description: 'I learn by doing and trying things out',
        therapyTypes: ['behavioral', 'exposure']
      },
      {
        value: 'reflective',
        text: 'Through self-reflection and insight',
        description: 'I learn through deep contemplation',
        therapyTypes: ['psychodynamic', 'mindfulness']
      }
    ]
  }
];

interface TherapyType {
  name: string;
  description: string;
  bestFor: string[];
  techniques: string[];
  effectiveness: string[];
}

const therapyTypes: { [key: string]: TherapyType } = {
  cbt: {
    name: 'Cognitive Behavioral Therapy (CBT)',
    description: 'A structured approach focusing on identifying and changing negative thought patterns and behaviors.',
    bestFor: [
      'Anxiety disorders',
      'Depression',
      'Specific phobias',
      'OCD'
    ],
    techniques: [
      'Thought challenging',
      'Behavioral activation',
      'Exposure exercises',
      'Problem-solving techniques'
    ],
    effectiveness: [
      'Strong evidence base',
      'Measurable outcomes',
      'Practical skill development',
      'Long-lasting results'
    ]
  },
  psychodynamic: {
    name: 'Psychodynamic Therapy',
    description: 'Explores how past experiences and unconscious processes influence current behavior and relationships.',
    bestFor: [
      'Complex emotional issues',
      'Relationship patterns',
      'Identity concerns',
      'Long-standing problems'
    ],
    techniques: [
      'Free association',
      'Dream analysis',
      'Pattern recognition',
      'Therapeutic relationship'
    ],
    effectiveness: [
      'Deep insight development',
      'Lasting personality changes',
      'Improved relationships',
      'Better self-understanding'
    ]
  },
  humanistic: {
    name: 'Humanistic Therapy',
    description: 'Person-centered approach focusing on personal growth and self-actualization.',
    bestFor: [
      'Self-exploration',
      'Personal growth',
      'Identity issues',
      'Life transitions'
    ],
    techniques: [
      'Active listening',
      'Unconditional positive regard',
      'Empathetic understanding',
      'Self-directed growth'
    ],
    effectiveness: [
      'Increased self-acceptance',
      'Improved authenticity',
      'Better self-awareness',
      'Enhanced personal growth'
    ]
  }
};

const TherapyStyleAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [showResults, setShowResults] = useState(false);
  const [matchedTypes, setMatchedTypes] = useState<string[]>([]);

  const handleAnswer = (value: any) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
    if (currentQuestion < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    // Simple matching algorithm based on answers
    const matches = new Set<string>();
    
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions[parseInt(questionId) - 1];
      
      if (question.type === 'single') {
        const option = question.options?.find(opt => opt.value === answer);
        option?.therapyTypes?.forEach(type => matches.add(type));
      }
      
      // Add logic for scale questions
      if (question.type === 'scale') {
        if (answer >= 4) {
          // High structure preference
          matches.add('cbt');
          matches.add('dbt');
        } else {
          // More flexible preference
          matches.add('humanistic');
          matches.add('psychodynamic');
        }
      }
    });
    
    setMatchedTypes(Array.from(matches));
    setShowResults(true);
  };

  const restartAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setMatchedTypes([]);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-600 p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Your Therapy Style Results</h1>
              <p className="text-indigo-100">
                Based on your responses, here are the therapy approaches that might work best for you
              </p>
            </div>
            
            <div className="p-6">
              <div className="space-y-8">
                {matchedTypes.map(type => {
                  const therapyType = therapyTypes[type];
                  if (!therapyType) return null;
                  
                  return (
                    <div key={type} className="bg-gray-50 rounded-lg p-6">
                      <h2 className="text-xl font-bold text-gray-800 mb-4">{therapyType.name}</h2>
                      <p className="text-gray-600 mb-4">{therapyType.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">Best For</h3>
                          <ul className="space-y-1">
                            {therapyType.bestFor.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                <span className="text-sm text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">Key Techniques</h3>
                          <ul className="space-y-1">
                            {therapyType.techniques.map((technique, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                <span className="text-sm text-gray-600">{technique}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">Effectiveness</h3>
                          <ul className="space-y-1">
                            {therapyType.effectiveness.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                <span className="text-sm text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 space-y-6">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                    <p className="text-sm text-yellow-700">
                      This assessment provides general guidance about therapy approaches that might suit you. The best way to find the right fit is to discuss these options with a mental health professional.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    as={Link}
                    to="/tools/matchers/therapy-platform-matcher"
                    variant="primary"
                    icon={ArrowRight}
                  >
                    Find Matching Therapists
                  </Button>
                  <Button 
                    onClick={restartAssessment}
                    variant="outline"
                    icon={ArrowLeft}
                  >
                    Take Assessment Again
                  </Button>
                  <Button 
                    as={Link}
                    to="/learn/fundamentals/therapy-types"
                    variant="outline"
                    icon={ArrowRight}
                  >
                    Learn More About Therapy Types
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
              <h1 className="text-2xl font-bold mb-2">Therapy Style Assessment</h1>
              <p className="text-indigo-100">
                Discover which therapy approaches might work best for you
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">About This Assessment</h2>
                    <p className="text-gray-600">
                      This assessment helps identify therapy approaches that align with your communication style, preferences, and needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">What You'll Learn</h2>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Which therapy approaches might suit you best</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Your preferred communication and learning styles</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Treatment preferences and goals</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Personalized therapy recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">Important Note</h2>
                    <p className="text-gray-600">
                      This assessment is a guide to help you explore therapy options. The best way to determine the right approach is through discussion with a mental health professional.
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
                Begin Assessment
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

export default TherapyStyleAssessment;