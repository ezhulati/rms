import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, ArrowLeft, CheckCircle, Info, AlertCircle, Star, MessageSquare, Video, Phone } from 'lucide-react';
import Button from '../../../components/Button';

interface Question {
  id: number;
  text: string;
  category: 'preferences' | 'goals' | 'style';
  type: 'single' | 'multiple' | 'scale';
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
    text: "What are your main goals for therapy?",
    category: 'goals',
    type: 'multiple',
    options: [
      {
        value: 'current-issues',
        text: 'Address current issues',
        description: 'Focus on solving immediate problems',
        therapyTypes: ['cbt', 'solution-focused']
      },
      {
        value: 'past-exploration',
        text: 'Explore past experiences',
        description: 'Understand how past events influence present',
        therapyTypes: ['psychodynamic', 'psychoanalytic']
      },
      {
        value: 'personal-growth',
        text: 'Personal growth',
        description: 'Focus on self-development and understanding',
        therapyTypes: ['humanistic', 'existential']
      },
      {
        value: 'coping-skills',
        text: 'Learn coping skills',
        description: 'Develop practical tools and techniques',
        therapyTypes: ['cbt', 'dbt']
      }
    ]
  },
  {
    id: 2,
    text: "How do you prefer to communicate and process information?",
    category: 'preferences',
    type: 'single',
    options: [
      {
        value: 'analytical',
        text: 'Logical and analytical',
        description: 'Prefer structured, systematic approaches',
        therapyTypes: ['cbt', 'rational-emotive']
      },
      {
        value: 'emotional',
        text: 'Emotional and intuitive',
        description: 'Process through feelings and experiences',
        therapyTypes: ['humanistic', 'emotion-focused']
      },
      {
        value: 'practical',
        text: 'Practical and action-oriented',
        description: 'Focus on concrete solutions and actions',
        therapyTypes: ['solution-focused', 'behavioral']
      },
      {
        value: 'reflective',
        text: 'Reflective and introspective',
        description: 'Prefer deep exploration and insight',
        therapyTypes: ['psychodynamic', 'existential']
      }
    ]
  },
  {
    id: 3,
    text: "How structured would you like your therapy to be?",
    category: 'style',
    type: 'scale',
    scaleLabels: {
      min: 'Very flexible and open-ended',
      max: 'Highly structured with clear goals'
    }
  },
  {
    id: 4,
    text: "How important is having homework or exercises between sessions?",
    category: 'style',
    type: 'scale',
    scaleLabels: {
      min: 'Not important',
      max: 'Very important'
    }
  },
  {
    id: 5,
    text: "What type of therapeutic relationship do you prefer?",
    category: 'preferences',
    type: 'single',
    options: [
      {
        value: 'directive',
        text: 'Directive guidance',
        description: 'Therapist provides clear direction and advice',
        therapyTypes: ['cbt', 'behavioral']
      },
      {
        value: 'collaborative',
        text: 'Collaborative exploration',
        description: 'Work together as equals to find solutions',
        therapyTypes: ['humanistic', 'solution-focused']
      },
      {
        value: 'supportive',
        text: 'Supportive listening',
        description: 'Therapist primarily listens and supports',
        therapyTypes: ['person-centered', 'supportive']
      },
      {
        value: 'insight',
        text: 'Insight-oriented',
        description: 'Focus on gaining deep understanding',
        therapyTypes: ['psychodynamic', 'psychoanalytic']
      }
    ]
  }
];

interface TherapyType {
  name: string;
  description: string;
  bestFor: string[];
  approach: string[];
  techniques: string[];
  matchScore?: number;
}

const therapyTypes: { [key: string]: TherapyType } = {
  cbt: {
    name: 'Cognitive Behavioral Therapy (CBT)',
    description: 'A structured approach focusing on identifying and changing negative thought patterns and behaviors.',
    bestFor: [
      'Anxiety and depression',
      'Specific phobias',
      'OCD',
      'Stress management'
    ],
    approach: [
      'Structured sessions',
      'Goal-oriented',
      'Skills-based learning',
      'Present-focused'
    ],
    techniques: [
      'Thought challenging',
      'Behavioral activation',
      'Exposure exercises',
      'Problem-solving techniques'
    ]
  },
  psychodynamic: {
    name: 'Psychodynamic Therapy',
    description: 'Explores how past experiences and unconscious processes influence current behavior and relationships.',
    bestFor: [
      'Complex emotional issues',
      'Relationship patterns',
      'Identity concerns',
      'Recurring problems'
    ],
    approach: [
      'Open-ended exploration',
      'Focus on past experiences',
      'Insight development',
      'Relationship patterns'
    ],
    techniques: [
      'Free association',
      'Dream analysis',
      'Pattern recognition',
      'Transference work'
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
    approach: [
      'Non-directive',
      'Client-led sessions',
      'Present-focused',
      'Emotional awareness'
    ],
    techniques: [
      'Active listening',
      'Unconditional positive regard',
      'Empathetic reflection',
      'Self-directed growth'
    ]
  },
  'solution-focused': {
    name: 'Solution-Focused Brief Therapy',
    description: 'Goal-oriented approach focusing on solutions rather than problems.',
    bestFor: [
      'Specific goals',
      'Quick results',
      'Practical issues',
      'Life transitions'
    ],
    approach: [
      'Future-focused',
      'Goal-oriented',
      'Brief intervention',
      'Strength-based'
    ],
    techniques: [
      'Miracle question',
      'Scaling questions',
      'Exception finding',
      'Coping questions'
    ]
  }
};

const TherapyTypeFinder = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [showResults, setShowResults] = useState(false);
  const [matchedTypes, setMatchedTypes] = useState<Array<{ type: string; score: number }>>([]);

  const handleAnswer = (value: any) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
    if (currentQuestion < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateMatches();
    }
  };

  const calculateMatches = () => {
    const scores: { [key: string]: number } = {};
    
    // Initialize scores
    Object.keys(therapyTypes).forEach(type => {
      scores[type] = 0;
    });

    // Calculate scores based on answers
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions[parseInt(questionId) - 1];
      
      if (question.type === 'single' || question.type === 'multiple') {
        const selectedOptions = Array.isArray(answer) ? answer : [answer];
        selectedOptions.forEach(selected => {
          const option = question.options?.find(opt => opt.value === selected);
          option?.therapyTypes?.forEach(type => {
            scores[type] = (scores[type] || 0) + 1;
          });
        });
      }
      
      // Handle scale questions
      if (question.type === 'scale') {
        if (answer >= 4) {
          scores['cbt'] += 1;
          scores['solution-focused'] += 1;
        } else {
          scores['psychodynamic'] += 1;
          scores['humanistic'] += 1;
        }
      }
    });

    // Convert scores to percentages and sort
    const maxScore = Math.max(...Object.values(scores));
    const matches = Object.entries(scores)
      .map(([type, score]) => ({
        type,
        score: Math.round((score / maxScore) * 100)
      }))
      .sort((a, b) => b.score - a.score);

    setMatchedTypes(matches);
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
                {matchedTypes.slice(0, 3).map(match => {
                  const therapyType = therapyTypes[match.type];
                  if (!therapyType) return null;
                  
                  return (
                    <div key={match.type} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-800">{therapyType.name}</h2>
                        <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                          {match.score}% Match
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{therapyType.description}</p>
                      
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
                          <h3 className="font-bold text-gray-800 mb-2">Approach</h3>
                          <ul className="space-y-1">
                            {therapyType.approach.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                <span className="text-sm text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">Common Techniques</h3>
                          <ul className="space-y-1">
                            {therapyType.techniques.map((technique, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                <span className="text-sm text-gray-600">{technique}</span>
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
                      These results are meant to guide your exploration of different therapy approaches. The best way to find the right fit is to discuss these options with a mental health professional.
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
              <h1 className="text-2xl font-bold mb-2">Therapy Type Finder</h1>
              <p className="text-indigo-100">
                Discover which therapy approaches might work best for you
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">About This Tool</h2>
                    <p className="text-gray-600">
                      This assessment helps identify therapy approaches that align with your communication style, preferences, and goals.
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
                      This tool provides general guidance about therapy approaches that might suit you. The best way to find the right fit is through discussion with a mental health professional.
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

export default TherapyTypeFinder;