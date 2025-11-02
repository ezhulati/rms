import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Brain, CheckCircle, Info, AlertCircle, Star } from 'lucide-react';
import Button from '../../../components/Button';

interface Question {
  id: number;
  text: string;
  category: 'depression' | 'anxiety' | 'stress' | 'wellbeing';
  type: 'scale';
  scaleLabels?: {
    min: string;
    max: string;
  };
}

const questions: Question[] = [
  // Depression Screening (PHQ-9 based)
  {
    id: 1,
    text: "Over the last 2 weeks, how often have you had little interest or pleasure in doing things?",
    category: 'depression',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 2,
    text: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
    category: 'depression',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 3,
    text: "Over the last 2 weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
    category: 'depression',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  // Anxiety Screening (GAD-7 based)
  {
    id: 4,
    text: "Over the last 2 weeks, how often have you felt nervous, anxious, or on edge?",
    category: 'anxiety',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 5,
    text: "Over the last 2 weeks, how often have you not been able to stop or control worrying?",
    category: 'anxiety',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 6,
    text: "Over the last 2 weeks, how often have you had trouble relaxing?",
    category: 'anxiety',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  // Stress Assessment
  {
    id: 7,
    text: "In the last month, how often have you felt that you were unable to control the important things in your life?",
    category: 'stress',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  },
  {
    id: 8,
    text: "In the last month, how often have you felt confident about your ability to handle personal problems?",
    category: 'stress',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  },
  {
    id: 9,
    text: "In the last month, how often have you felt that things were going your way?",
    category: 'stress',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  },
  // General Wellbeing
  {
    id: 10,
    text: "How would you rate your overall quality of sleep?",
    category: 'wellbeing',
    type: 'scale',
    scaleLabels: {
      min: "Very poor",
      max: "Very good"
    }
  },
  {
    id: 11,
    text: "How would you rate your ability to maintain meaningful relationships?",
    category: 'wellbeing',
    type: 'scale',
    scaleLabels: {
      min: "Very difficult",
      max: "Very easy"
    }
  },
  {
    id: 12,
    text: "How would you rate your ability to handle daily stress and challenges?",
    category: 'wellbeing',
    type: 'scale',
    scaleLabels: {
      min: "Very poor",
      max: "Very good"
    }
  }
];

const MentalHealthAssessment = () => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestionId === questions.length - 1) {
      calculateResults();
    } else {
      setCurrentQuestionId(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionId(prev => prev - 1);
  };

  const calculateResults = () => {
    const depressionScore = [1, 2, 3].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const anxietyScore = [4, 5, 6].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const stressScore = [7, 8, 9].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const wellbeingScore = [10, 11, 12].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    
    setShowResults(true);
  };

  const getRecommendations = (scores: any) => {
    return {
      text: "Based on your responses, we recommend exploring professional support to help you develop coping strategies and improve your mental wellbeing.",
      recommendations: [
        "Consider online therapy with a licensed mental health professional",
        "Practice stress management and relaxation techniques",
        "Maintain regular sleep schedule and exercise routine",
        "Build a support network of friends and family"
      ],
      urgentCare: scores.depression > 8 || scores.anxiety > 8
    };
  };

  const restartAssessment = () => {
    setAnswers({});
    setShowResults(false);
    setCurrentQuestionId(0);
  };

  if (showResults) {
    const scores = {
      depression: [1, 2, 3].reduce((sum, id) => sum + (answers[id - 1] || 0), 0),
      anxiety: [4, 5, 6].reduce((sum, id) => sum + (answers[id - 1] || 0), 0),
      stress: [7, 8, 9].reduce((sum, id) => sum + (answers[id - 1] || 0), 0),
      wellbeing: [10, 11, 12].reduce((sum, id) => sum + (answers[id - 1] || 0), 0)
    };

    const recommendations = getRecommendations(scores);

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-600 p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Your Mental Health Assessment Results</h1>
              <p className="text-indigo-100">
                Based on your responses, here's an analysis of your mental wellbeing
              </p>
            </div>
            
            <div className="p-6">
              {/* Score Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Depression Screening</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Severity Level</span>
                        <span className="font-bold text-gray-800">
                          {scores.depression <= 4 ? 'Minimal' :
                           scores.depression <= 9 ? 'Mild' :
                           scores.depression <= 14 ? 'Moderate' :
                           'Severe'}
                        </span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${(scores.depression / 12) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Score: {scores.depression}/12
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Anxiety Screening</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Severity Level</span>
                        <span className="font-bold text-gray-800">
                          {scores.anxiety <= 4 ? 'Minimal' :
                           scores.anxiety <= 9 ? 'Mild' :
                           scores.anxiety <= 14 ? 'Moderate' :
                           'Severe'}
                        </span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${(scores.anxiety / 12) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Score: {scores.anxiety}/12
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Scores */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Stress Level</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Impact Level</span>
                        <span className="font-bold text-gray-800">
                          {scores.stress <= 4 ? 'Low' :
                           scores.stress <= 8 ? 'Moderate' :
                           'High'}
                        </span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${(scores.stress / 12) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Score: {scores.stress}/12
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Overall Wellbeing</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Status</span>
                        <span className="font-bold text-gray-800">
                          {scores.wellbeing <= 4 ? 'Needs Attention' :
                           scores.wellbeing <= 8 ? 'Fair' :
                           'Good'}
                        </span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${(scores.wellbeing / 12) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Score: {scores.wellbeing}/12
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-indigo-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Recommendations</h3>
                <p className="text-gray-700 mb-4">{recommendations.text}</p>
                <ul className="space-y-2">
                  {recommendations.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Steps */}
              <div className="space-y-4">
                {recommendations.urgentCare && (
                  <div className="flex items-start bg-red-50 rounded-lg p-4">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-red-800">Important Notice</h4>
                      <p className="text-sm text-red-700">
                        Your responses indicate you may be experiencing significant distress. We strongly recommend speaking with a mental health professional as soon as possible.
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start bg-yellow-50 rounded-lg p-4">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <p className="text-sm text-yellow-700">
                    This assessment is not a diagnostic tool. For a proper diagnosis and treatment plan, please consult with a mental health professional.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    as={Link}
                    to="/tools/matchers/therapy-platform-matcher"
                    variant="primary"
                    icon={ArrowRight}
                  >
                    Find a Therapist
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
                    to="/learn/fundamentals/mental-health-basics"
                    variant="outline"
                    icon={ArrowRight}
                  >
                    Learn More About Mental Health
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuestionId === 0 ? null : questions[currentQuestionId - 1];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">
              {currentQuestionId === 0 ? 'Mental Health Assessment' : `Question ${currentQuestionId} of ${questions.length}`}
            </h1>
            <p className="text-indigo-100">
              {currentQuestionId === 0 
                ? 'Evaluate your mental wellbeing with this comprehensive assessment'
                : `${Math.round((currentQuestionId / questions.length) * 100)}% Complete`
              }
            </p>
            {currentQuestionId > 0 && (
              <div className="w-full bg-indigo-300 rounded-full h-2 mt-4">
                <div 
                  className="bg-white rounded-full h-2 transition-all duration-300"
                  style={{ width: `${(currentQuestionId / questions.length) * 100}%` }}
                ></div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {currentQuestionId === 0 ? (
              // Introduction Screen
              <div className="space-y-6">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">About This Assessment</h2>
                    <p className="text-gray-600">
                      This assessment combines validated screening tools to help evaluate your mental health across multiple dimensions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">What It Measures</h2>
                    <ul className="mt-2 space-y-2">
                      {['Depression symptoms', 'Anxiety levels', 'Stress impact', 'Overall wellbeing'].map((item, index) => (
                        <li key={index} className="flex items-center bg-gray-50 rounded-lg p-3">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">Important Note</h2>
                    <p className="text-gray-600">
                      This assessment is not a diagnostic tool. It's designed to help you understand your mental health and determine if professional help might be beneficial.
                    </p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => setCurrentQuestionId(1)} 
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  Begin Assessment
                </Button>
              </div>
            ) : (
              // Question Screen
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-gray-800">
                  {currentQuestion?.text}
                </h3>
                
                <div className="space-y-6">
                  {/* Answer Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {[0, 1, 2, 3].map((value) => (
                      <button
                        key={value}
                        onClick={() => handleAnswer(currentQuestionId, value)}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                          answers[currentQuestionId] === value
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                            : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-center">
                          <div className="font-medium mb-2">
                            {value === 0 ? 'Not at all' :
                             value === 1 ? 'Several days' :
                             value === 2 ? 'More than half the days' :
                             'Nearly every day'}
                          </div>
                          <div className="text-sm text-gray-500">{value}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between items-center pt-4">
                    <Button
                      onClick={handlePrevious}
                      variant="outline"
                      icon={ArrowLeft}
                      disabled={currentQuestionId === 1}
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={handleNext}
                      variant="primary"
                      icon={ArrowRight}
                      disabled={!answers[currentQuestionId]}
                    >
                      {currentQuestionId === questions.length ? 'See Results' : 'Next'}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthAssessment;