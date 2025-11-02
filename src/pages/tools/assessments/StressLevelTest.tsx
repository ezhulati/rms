import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, ArrowLeft, CheckCircle, Info, AlertCircle, Star } from 'lucide-react';
import Button from '../../../components/Button';

interface Question {
  id: number;
  text: string;
  category: 'physical' | 'emotional' | 'cognitive' | 'behavioral';
  type: 'scale';
  scaleLabels?: {
    min: string;
    max: string;
  };
}

const questions: Question[] = [
  // Physical Stress Symptoms
  {
    id: 1,
    text: "How often do you experience physical tension or muscle pain?",
    category: 'physical',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  },
  {
    id: 2,
    text: "How often do you have trouble sleeping due to stress?",
    category: 'physical',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  },
  {
    id: 3,
    text: "How often do you experience headaches or fatigue?",
    category: 'physical',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  },
  // Emotional Stress Symptoms
  {
    id: 4,
    text: "How often do you feel overwhelmed or unable to cope?",
    category: 'emotional',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  },
  {
    id: 5,
    text: "How often do you feel irritable or easily angered?",
    category: 'emotional',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  },
  {
    id: 6,
    text: "How often do you experience mood swings?",
    category: 'emotional',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  },
  // Cognitive Stress Symptoms
  {
    id: 7,
    text: "How often do you have difficulty concentrating or making decisions?",
    category: 'cognitive',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  },
  {
    id: 8,
    text: "How often do you experience racing thoughts or constant worry?",
    category: 'cognitive',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  },
  // Behavioral Stress Symptoms
  {
    id: 9,
    text: "How often do you find yourself procrastinating or avoiding responsibilities?",
    category: 'behavioral',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  },
  {
    id: 10,
    text: "How often do your stress levels interfere with your relationships or social life?",
    category: 'behavioral',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  }
];

const StressLevelTest = () => {
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
    const physicalScore = [1, 2, 3].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const emotionalScore = [4, 5, 6].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const cognitiveScore = [7, 8].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const behavioralScore = [9, 10].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    
    setShowResults(true);
  };

  const getStressLevel = (score: number) => {
    if (score <= 10) return "Low stress";
    if (score <= 20) return "Moderate stress";
    if (score <= 30) return "High stress";
    return "Severe stress";
  };

  const getRecommendations = (score: number) => {
    if (score <= 10) {
      return {
        text: "Your stress levels appear to be manageable.",
        recommendations: [
          "Continue practicing stress management techniques",
          "Maintain healthy lifestyle habits",
          "Regular exercise and relaxation",
          "Monitor stress levels periodically"
        ]
      };
    } else if (score <= 20) {
      return {
        text: "You're experiencing moderate stress levels. Some additional support could be beneficial.",
        recommendations: [
          "Develop a regular stress management routine",
          "Practice mindfulness or meditation",
          "Consider talking to a counselor",
          "Identify and address stress triggers"
        ]
      };
    } else if (score <= 30) {
      return {
        text: "You're experiencing high stress levels. Professional support is recommended.",
        recommendations: [
          "Consult with a mental health professional",
          "Develop a comprehensive stress management plan",
          "Practice regular relaxation techniques",
          "Consider lifestyle changes to reduce stress"
        ]
      };
    } else {
      return {
        text: "You're experiencing severe stress levels. Professional help is strongly recommended.",
        recommendations: [
          "Seek professional help promptly",
          "Develop a stress reduction plan with a therapist",
          "Consider both counseling and lifestyle changes",
          "Build a strong support system"
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
    const physicalScore = [1, 2, 3].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const emotionalScore = [4, 5, 6].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const cognitiveScore = [7, 8].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const behavioralScore = [9, 10].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    
    const stressLevel = getStressLevel(totalScore);
    const recommendations = getRecommendations(totalScore);
    const urgentCare = totalScore >= 35;

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-600 p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Your Stress Level Results</h1>
              <p className="text-indigo-100">
                Based on your responses, here's an analysis of your stress levels
              </p>
            </div>
            
            <div className="p-6">
              {/* Overall Stress Level */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Overall Stress Level</h2>
                  <span className="text-2xl font-bold text-indigo-600">{stressLevel}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-4 mb-2">
                  <div 
                    className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${(totalScore / 40) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  Total Score: {totalScore}/40
                </p>
              </div>

              {/* Stress Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Physical Stress</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {Math.round((physicalScore / 12) * 100)}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Physical manifestations of stress
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Emotional Stress</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {Math.round((emotionalScore / 12) * 100)}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Emotional impact of stress
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Cognitive Stress</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {Math.round((cognitiveScore / 8) * 100)}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Impact on thinking and concentration
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Behavioral Impact</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {Math.round((behavioralScore / 8) * 100)}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Impact on daily activities
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
                        Your responses indicate you're experiencing severe stress levels that may be impacting your wellbeing significantly. Professional support is strongly recommended to help you develop effective stress management strategies.
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start bg-yellow-50 rounded-lg p-4">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <p className="text-sm text-yellow-700">
                    This assessment is not a diagnostic tool. For a proper evaluation and stress management plan, please consult with a mental health professional.
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
                    to="/learn/fundamentals/stress-management"
                    variant="outline"
                    icon={ArrowRight}
                  >
                    Learn About Stress Management
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
              <h1 className="text-2xl font-bold mb-2">Stress Level Test</h1>
              <p className="text-indigo-100">
                Evaluate your current stress levels and their impact on your wellbeing
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">About This Assessment</h2>
                    <p className="text-gray-600">
                      This comprehensive stress assessment helps evaluate your current stress levels across multiple dimensions, including physical, emotional, cognitive, and behavioral impacts.
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
                        <span>Physical stress symptoms</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Emotional stress impact</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Cognitive effects of stress</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Behavioral changes due to stress</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">Important Note</h2>
                    <p className="text-gray-600">
                      This assessment is designed to help you understand your stress levels and determine if additional support might be beneficial. It is not a diagnostic tool or substitute for professional evaluation.
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
                  max="4"
                  step="1"
                  onChange={(e) => handleAnswer(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between px-2">
                  {[0, 1, 2, 3, 4].map((value) => (
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

export default StressLevelTest;