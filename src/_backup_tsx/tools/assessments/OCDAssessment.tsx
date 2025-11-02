import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, ArrowLeft, CheckCircle, Info, AlertCircle } from 'lucide-react';
import Button from '../../../components/Button';

interface Question {
  id: number;
  text: string;
  category: 'obsessions' | 'compulsions' | 'impact';
  options: {
    value: number;
    text: string;
  }[];
}

const questions: Question[] = [
  // Obsessions
  {
    id: 1,
    text: "How much time do you spend dealing with intrusive or unwanted thoughts?",
    category: 'obsessions',
    options: [
      { value: 0, text: "None" },
      { value: 1, text: "Less than 1 hour per day" },
      { value: 2, text: "1-3 hours per day" },
      { value: 3, text: "3-8 hours per day" },
      { value: 4, text: "More than 8 hours per day" }
    ]
  },
  {
    id: 2,
    text: "How much distress do these unwanted thoughts cause you?",
    category: 'obsessions',
    options: [
      { value: 0, text: "None" },
      { value: 1, text: "Mild distress" },
      { value: 2, text: "Moderate distress" },
      { value: 3, text: "Severe distress" },
      { value: 4, text: "Extreme distress" }
    ]
  },
  {
    id: 3,
    text: "How hard do you try to resist or ignore these thoughts?",
    category: 'obsessions',
    options: [
      { value: 0, text: "I don't need to resist them" },
      { value: 1, text: "Try a little to resist" },
      { value: 2, text: "Some effort to resist" },
      { value: 3, text: "Much effort to resist" },
      { value: 4, text: "Maximum effort to resist" }
    ]
  },
  // Compulsions
  {
    id: 4,
    text: "How much time do you spend performing repetitive behaviors or mental acts?",
    category: 'compulsions',
    options: [
      { value: 0, text: "None" },
      { value: 1, text: "Less than 1 hour per day" },
      { value: 2, text: "1-3 hours per day" },
      { value: 3, text: "3-8 hours per day" },
      { value: 4, text: "More than 8 hours per day" }
    ]
  },
  {
    id: 5,
    text: "How much do these behaviors or mental acts interfere with your daily routine?",
    category: 'compulsions',
    options: [
      { value: 0, text: "No interference" },
      { value: 1, text: "Slight interference" },
      { value: 2, text: "Moderate interference" },
      { value: 3, text: "Significant interference" },
      { value: 4, text: "Extreme interference" }
    ]
  },
  {
    id: 6,
    text: "How anxious would you become if prevented from performing these behaviors?",
    category: 'compulsions',
    options: [
      { value: 0, text: "Not anxious" },
      { value: 1, text: "Slightly anxious" },
      { value: 2, text: "Moderately anxious" },
      { value: 3, text: "Very anxious" },
      { value: 4, text: "Extremely anxious" }
    ]
  },
  // Impact
  {
    id: 7,
    text: "How much do these symptoms impact your work or school performance?",
    category: 'impact',
    options: [
      { value: 0, text: "No impact" },
      { value: 1, text: "Mild impact" },
      { value: 2, text: "Moderate impact" },
      { value: 3, text: "Severe impact" },
      { value: 4, text: "Extreme impact" }
    ]
  },
  {
    id: 8,
    text: "How much do these symptoms affect your social life and relationships?",
    category: 'impact',
    options: [
      { value: 0, text: "No effect" },
      { value: 1, text: "Mild effect" },
      { value: 2, text: "Moderate effect" },
      { value: 3, text: "Severe effect" },
      { value: 4, text: "Extreme effect" }
    ]
  }
];

const OCDAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScores = () => {
    const obsessionScore = [1, 2, 3].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const compulsionScore = [4, 5, 6].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const impactScore = [7, 8].reduce((sum, id) => sum + (answers[id - 1] || 0), 0);
    const totalScore = obsessionScore + compulsionScore + impactScore;
    
    return {
      obsessionScore,
      compulsionScore,
      impactScore,
      totalScore,
      severity: getSeverityLevel(totalScore)
    };
  };

  const getSeverityLevel = (score: number) => {
    if (score <= 8) return "Mild";
    if (score <= 16) return "Moderate";
    if (score <= 24) return "Severe";
    return "Extreme";
  };

  const getRecommendations = (severity: string) => {
    switch (severity) {
      case "Mild":
        return {
          text: "Your symptoms suggest mild OCD. While they may be manageable, professional support can help prevent them from becoming more severe.",
          recommendations: [
            "Consider online therapy focused on CBT",
            "Learn about exposure and response prevention (ERP)",
            "Practice stress management techniques",
            "Keep a symptom journal"
          ]
        };
      case "Moderate":
        return {
          text: "Your symptoms suggest moderate OCD. Professional treatment could significantly improve your quality of life.",
          recommendations: [
            "Seek regular therapy with an OCD specialist",
            "Consider platforms specializing in ERP therapy",
            "Join OCD support groups",
            "Learn and practice mindfulness techniques"
          ]
        };
      case "Severe":
        return {
          text: "Your symptoms suggest severe OCD. Professional treatment is strongly recommended.",
          recommendations: [
            "Consult with a mental health professional immediately",
            "Consider intensive outpatient programs",
            "Explore medication options with a psychiatrist",
            "Combine therapy with medication management"
          ]
        };
      case "Extreme":
        return {
          text: "Your symptoms suggest extreme OCD. Immediate professional intervention is recommended.",
          recommendations: [
            "Seek immediate professional help",
            "Consider intensive treatment programs",
            "Consult with an OCD specialist",
            "Explore comprehensive treatment options including therapy and medication"
          ]
        };
      default:
        return {
          text: "Please complete the assessment to receive personalized recommendations.",
          recommendations: []
        };
    }
  };

  const restartAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const scores = calculateScores();
    const recommendations = getRecommendations(scores.severity);

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-600 p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Your OCD Assessment Results</h1>
              <p className="text-indigo-100">
                Based on your responses, here's an analysis of your symptoms
              </p>
            </div>
            
            <div className="p-6">
              {/* Severity Score */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Overall Severity</h2>
                  <span className="text-2xl font-bold text-indigo-600">{scores.severity}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-4 mb-2">
                  <div 
                    className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${(scores.totalScore / 32) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  Total Score: {scores.totalScore}/32
                </p>
              </div>

              {/* Detailed Scores */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Obsessions</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {scores.obsessionScore}/12
                  </div>
                  <p className="text-sm text-gray-600">
                    Frequency and intensity of intrusive thoughts
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Compulsions</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {scores.compulsionScore}/12
                  </div>
                  <p className="text-sm text-gray-600">
                    Frequency and impact of repetitive behaviors
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Life Impact</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {scores.impactScore}/8
                  </div>
                  <p className="text-sm text-gray-600">
                    Effect on daily life and relationships
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
                    Find an OCD Specialist
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
                    to="/best/conditions/best-for-ocd"
                    variant="outline"
                    icon={ArrowRight}
                  >
                    View Best OCD Treatment Options
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
              <h1 className="text-2xl font-bold mb-2">OCD Assessment</h1>
              <p className="text-indigo-100">
                Evaluate your OCD symptoms with this clinically-informed assessment
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">About This Assessment</h2>
                    <p className="text-gray-600">
                      This assessment is based on standard OCD screening tools and helps evaluate the presence and severity of OCD symptoms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">What It Measures</h2>
                    <p className="text-gray-600">
                      The assessment evaluates three key areas:
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Obsessive thoughts and their impact</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Compulsive behaviors and their frequency</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Overall life impact and functioning</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-gray-800">Important Note</h2>
                    <p className="text-gray-600">
                      This assessment is not a diagnostic tool. It's designed to help you understand your symptoms and determine if professional help might be beneficial.
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
              
              <div className="space-y-3">
                {questions[currentQuestion - 1].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200"
                  >
                    <span className="font-medium text-gray-800">{option.text}</span>
                  </button>
                ))}
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

export default OCDAssessment;