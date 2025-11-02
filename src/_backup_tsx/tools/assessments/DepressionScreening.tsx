import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, ArrowLeft, CheckCircle, Info, AlertCircle, Star } from 'lucide-react';
import Button from '../../../components/Button';

interface Question {
  id: number;
  text: string;
  category: 'mood' | 'physical' | 'cognitive' | 'behavioral';
  type: 'scale';
  scaleLabels?: {
    min: string;
    max: string;
  };
}

const questions: Question[] = [
  // PHQ-9 based questions
  {
    id: 1,
    text: "Over the last 2 weeks, how often have you had little interest or pleasure in doing things?",
    category: 'mood',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 2,
    text: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
    category: 'mood',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 3,
    text: "Over the last 2 weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
    category: 'physical',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 4,
    text: "Over the last 2 weeks, how often have you felt tired or had little energy?",
    category: 'physical',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 5,
    text: "Over the last 2 weeks, how often have you had poor appetite or been overeating?",
    category: 'physical',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 6,
    text: "Over the last 2 weeks, how often have you felt bad about yourself or that you are a failure or have let yourself or your family down?",
    category: 'cognitive',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 7,
    text: "Over the last 2 weeks, how often have you had trouble concentrating on things, such as reading or watching TV?",
    category: 'cognitive',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 8,
    text: "Over the last 2 weeks, how often have you moved or spoken so slowly that other people could have noticed, or been so fidgety or restless that you have been moving around a lot more than usual?",
    category: 'behavioral',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 9,
    text: "Over the last 2 weeks, how often have you had thoughts that you would be better off dead or of hurting yourself in some way?",
    category: 'behavioral',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  }
];

const DepressionScreening = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
    if (currentQuestion < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    setShowResults(true);
  };

  const getSeverityLevel = (score: number) => {
    if (score <= 4) return "Minimal depression";
    if (score <= 9) return "Mild depression";
    if (score <= 14) return "Moderate depression";
    if (score <= 19) return "Moderately severe depression";
    return "Severe depression";
  };

  const getRecommendations = (score: number) => {
    if (score <= 4) {
      return {
        text: "Your responses suggest minimal or no depression symptoms.",
        recommendations: [
          "Continue monitoring your mental health",
          "Practice self-care and stress management",
          "Maintain healthy lifestyle habits",
          "Reach out if symptoms worsen"
        ]
      };
    } else if (score <= 9) {
      return {
        text: "Your responses suggest mild depression symptoms.",
        recommendations: [
          "Consider talking to a mental health professional",
          "Practice regular self-care activities",
          "Engage in regular exercise",
          "Maintain social connections"
        ]
      };
    } else if (score <= 14) {
      return {
        text: "Your responses suggest moderate depression symptoms. Professional support could be beneficial.",
        recommendations: [
          "Consult with a mental health professional",
          "Consider online therapy options",
          "Establish a daily routine",
          "Build a support network"
        ]
      };
    } else {
      return {
        text: "Your responses suggest significant depression symptoms. Professional help is strongly recommended.",
        recommendations: [
          "Seek professional help promptly",
          "Consider both therapy and medication options",
          "Build a strong support system",
          "Create a safety plan"
        ]
      };
    }
  };

  const restartAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const severityLevel = getSeverityLevel(totalScore);
    const recommendations = getRecommendations(totalScore);
    const urgentCare = totalScore >= 20 || answers[8] > 1; // High score or suicidal thoughts

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-600 p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Your Depression Screening Results</h1>
              <p className="text-indigo-100">
                Based on your responses, here's an analysis of your symptoms
              </p>
            </div>
            
            <div className="p-6">
              {/* Severity Score */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Depression Severity</h2>
                  <span className="text-2xl font-bold text-indigo-600">{severityLevel}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-4 mb-2">
                  <div 
                    className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${(totalScore / 27) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  Total Score: {totalScore}/27
                </p>
              </div>

              {/* Symptom Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Mood Symptoms</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {Math.round(((answers[0] || 0) + (answers[1] || 0)) / 6 * 100)}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Impact on mood and emotional state
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Physical Symptoms</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {Math.round(((answers[2] || 0) + (answers[3] || 0) + (answers[4] || 0)) / 9 * 100)}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Impact on sleep, energy, and appetite
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Cognitive Symptoms</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {Math.round(((answers[5] || 0) + (answers[6] || 0)) / 6 * 100)}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Impact on thinking and concentration
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Behavioral Symptoms</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {Math.round(((answers[7] || 0) + (answers[8] || 0)) / 6 * 100)}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Impact on activity and behavior
                  </p>
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
                {urgentCare && (
                  <div className="flex items-start bg-red-50 rounded-lg p-4">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-red-800">Important Notice</h4>
                      <p className="text-sm text-red-700">
                        Your responses indicate you may be experiencing severe depression or thoughts of self-harm. Please seek professional help immediately. If you're having thoughts of suicide, call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start bg-yellow-50 rounded-lg p-4">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <p className="text-sm text-yellow-700">
                    This screening tool is not a diagnostic instrument. For a proper diagnosis and treatment plan, please consult with a mental health professional.
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
                    to="/learn/fundamentals/depression"
                    variant="outline"
                    icon={ArrowRight}
                  >
                    Learn About Depression
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
              <h1 className="text-2xl font-bold mb-2">Depression Screening</h1>
              <p className="text-indigo-100">
                Evaluate your depression symptoms with this clinically-validated assessment
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">About This Assessment</h2>
                    <p className="text-gray-600">
                      This screening tool is based on the PHQ-9, a validated instrument for assessing depression symptoms. It helps evaluate the presence and severity of depression symptoms over the past two weeks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">What It Measures</h2>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Mood and emotional symptoms</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Physical symptoms like sleep and appetite</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Cognitive symptoms like concentration</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Behavioral changes and patterns</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">Important Note</h2>
                    <p className="text-gray-600">
                      This screening is not a diagnostic tool. It's designed to help you understand your symptoms and determine if professional help might be beneficial. If you're having thoughts of suicide, please call 988 (Suicide & Crisis Lifeline) or seek immediate help.
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
              
              <div className="space-y-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{questions[currentQuestion - 1].scaleLabels?.min}</span>
                  <span>{questions[currentQuestion - 1].scaleLabels?.max}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="1"
                  onChange={(e) => handleAnswer(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between px-2">
                  {[0, 1, 2, 3].map((value) => (
                    <div key={value} className="flex flex-col items-center">
                      <div className="w-1 h-3 bg-gray-300 mb-1"></div>
                      <span className="text-sm text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
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

export default DepressionScreening;