import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, ArrowLeft, CheckCircle, Info, AlertCircle, Star } from 'lucide-react';
import Button from '../../../components/Button';

interface Question {
  id: number;
  text: string;
  category: 'emotional' | 'physical' | 'cognitive' | 'behavioral';
  type: 'scale';
  scaleLabels?: {
    min: string;
    max: string;
  };
}

const questions: Question[] = [
  // GAD-7 based questions
  {
    id: 1,
    text: "Over the last 2 weeks, how often have you felt nervous, anxious, or on edge?",
    category: 'emotional',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 2,
    text: "Over the last 2 weeks, how often have you not been able to stop or control worrying?",
    category: 'cognitive',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 3,
    text: "Over the last 2 weeks, how often have you been worrying too much about different things?",
    category: 'cognitive',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 4,
    text: "Over the last 2 weeks, how often have you had trouble relaxing?",
    category: 'physical',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 5,
    text: "Over the last 2 weeks, how often have you been so restless that it's hard to sit still?",
    category: 'physical',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 6,
    text: "Over the last 2 weeks, how often have you become easily annoyed or irritable?",
    category: 'emotional',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  {
    id: 7,
    text: "Over the last 2 weeks, how often have you felt afraid as if something awful might happen?",
    category: 'emotional',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Nearly every day"
    }
  },
  // Additional anxiety-specific questions
  {
    id: 8,
    text: "How often do physical symptoms (like rapid heartbeat, sweating, or shortness of breath) accompany your anxiety?",
    category: 'physical',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very frequently"
    }
  },
  {
    id: 9,
    text: "How much do these anxiety symptoms interfere with your daily activities (work, school, or relationships)?",
    category: 'behavioral',
    type: 'scale',
    scaleLabels: {
      min: "Not at all",
      max: "Severely"
    }
  },
  {
    id: 10,
    text: "How often do you avoid situations or activities because of anxiety?",
    category: 'behavioral',
    type: 'scale',
    scaleLabels: {
      min: "Never",
      max: "Very often"
    }
  }
];

const AnxietyScreening = () => {
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
    const gad7Score = [1, 2, 3, 4, 5, 6, 7].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const physicalScore = [4, 5, 8].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const behavioralScore = [9, 10].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    
    setShowResults(true);
  };

  const getSeverityLevel = (score: number) => {
    if (score <= 4) return "Minimal anxiety";
    if (score <= 9) return "Mild anxiety";
    if (score <= 14) return "Moderate anxiety";
    return "Severe anxiety";
  };

  const getRecommendations = (score: number) => {
    if (score <= 4) {
      return {
        text: "Your responses suggest minimal anxiety symptoms.",
        recommendations: [
          "Continue monitoring your mental health",
          "Practice regular stress management",
          "Maintain healthy lifestyle habits",
          "Learn basic anxiety coping skills"
        ]
      };
    } else if (score <= 9) {
      return {
        text: "Your responses suggest mild anxiety symptoms.",
        recommendations: [
          "Consider talking to a mental health professional",
          "Learn and practice relaxation techniques",
          "Establish regular exercise routine",
          "Start anxiety journaling"
        ]
      };
    } else if (score <= 14) {
      return {
        text: "Your responses suggest moderate anxiety. Professional support could be beneficial.",
        recommendations: [
          "Consult with a mental health professional",
          "Consider online therapy options",
          "Learn cognitive-behavioral techniques",
          "Build a support network"
        ]
      };
    } else {
      return {
        text: "Your responses suggest severe anxiety. Professional help is strongly recommended.",
        recommendations: [
          "Seek professional help promptly",
          "Consider both therapy and medication options",
          "Develop a comprehensive treatment plan",
          "Create an anxiety management strategy"
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
    const gad7Score = [1, 2, 3, 4, 5, 6, 7].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const physicalScore = [4, 5, 8].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const behavioralScore = [9, 10].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    
    const severityLevel = getSeverityLevel(gad7Score);
    const recommendations = getRecommendations(gad7Score);
    const urgentCare = gad7Score >= 15;

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-600 p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Your Anxiety Screening Results</h1>
              <p className="text-indigo-100">
                Based on your responses, here's an analysis of your anxiety symptoms
              </p>
            </div>
            
            <div className="p-6">
              {/* Severity Score */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Anxiety Severity</h2>
                  <span className="text-2xl font-bold text-indigo-600">{severityLevel}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-4 mb-2">
                  <div 
                    className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${(gad7Score / 21) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  GAD-7 Score: {gad7Score}/21
                </p>
              </div>

              {/* Symptom Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Emotional Symptoms</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {Math.round(((answers[0] || 0) + (answers[5] || 0) + (answers[6] || 0)) / 9 * 100)}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Nervousness, irritability, and fear
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Physical Symptoms</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {Math.round(physicalScore / 9 * 100)}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Physical manifestations of anxiety
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Impact on Life</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {Math.round(behavioralScore / 6 * 100)}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Interference with daily activities
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
                        Your responses indicate you may be experiencing severe anxiety. Professional support is strongly recommended. Consider reaching out to a mental health professional or your healthcare provider.
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
                    to="/learn/fundamentals/anxiety"
                    variant="outline"
                    icon={ArrowRight}
                  >
                    Learn About Anxiety
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
              <h1 className="text-2xl font-bold mb-2">Anxiety Screening</h1>
              <p className="text-indigo-100">
                Evaluate your anxiety symptoms with this clinically-validated assessment
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">About This Assessment</h2>
                    <p className="text-gray-600">
                      This screening tool is based on the GAD-7, a validated instrument for assessing anxiety symptoms. It helps evaluate the presence and severity of anxiety symptoms over the past two weeks.
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
                        <span>Emotional symptoms of anxiety</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Physical symptoms and manifestations</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Impact on daily activities</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Severity of symptoms</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">Important Note</h2>
                    <p className="text-gray-600">
                      This screening is not a diagnostic tool. It's designed to help you understand your symptoms and determine if professional help might be beneficial.
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

export default AnxietyScreening;