import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Info, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  options: {
    text: string;
    value: number;
  }[];
}

interface AssessmentProps {
  title: string;
  description: string;
  questions: Question[];
  scoringGuide: {
    min: number;
    max: number;
    severity: string;
    description: string;
    color: string;
  }[];
  recommendations?: {
    low?: string;
    moderate?: string;
    high?: string;
  };
}

const Assessment: React.FC<AssessmentProps> = ({
  title,
  description,
  questions,
  scoringGuide,
  recommendations
}) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, val) => sum + val, 0);
  };

  const getResult = () => {
    const score = calculateScore();
    const result = scoringGuide.find(guide =>
      score >= guide.min && score <= guide.max
    );
    return result || scoringGuide[0];
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResults(true);
      // Scroll to results
      setTimeout(() => {
        document.getElementById('assessment-results')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;
  const allAnswered = Object.keys(answers).length === questions.length;

  if (showResults) {
    const result = getResult();
    const score = calculateScore();
    const recommendation = recommendations?.[result.severity.toLowerCase() as keyof typeof recommendations];

    return (
      <div id="assessment-results" className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
            result.color === 'green' ? 'bg-green-100' :
            result.color === 'yellow' ? 'bg-yellow-100' :
            result.color === 'orange' ? 'bg-orange-100' : 'bg-red-100'
          }`}>
            <CheckCircle className={`h-10 w-10 ${
              result.color === 'green' ? 'text-green-600' :
              result.color === 'yellow' ? 'text-yellow-600' :
              result.color === 'orange' ? 'text-orange-600' : 'text-red-600'
            }`} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Results</h3>
          <p className="text-3xl font-bold text-indigo-600 mb-2">{score} points</p>
          <p className="text-xl font-semibold text-gray-700">{result.severity}</p>
        </div>

        <div className={`p-6 rounded-lg mb-6 ${
          result.color === 'green' ? 'bg-green-50 border border-green-200' :
          result.color === 'yellow' ? 'bg-yellow-50 border border-yellow-200' :
          result.color === 'orange' ? 'bg-orange-50 border border-orange-200' :
          'bg-red-50 border border-red-200'
        }`}>
          <h4 className="font-bold text-gray-800 mb-2 flex items-center">
            <Info className="h-5 w-5 mr-2" />
            What This Means
          </h4>
          <p className="text-gray-700">{result.description}</p>
        </div>

        {recommendation && (
          <div className="bg-indigo-50 p-6 rounded-lg mb-6 border border-indigo-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center">
              <ArrowRight className="h-5 w-5 mr-2 text-indigo-600" />
              Recommended Next Steps
            </h4>
            <p className="text-gray-700">{recommendation}</p>
          </div>
        )}

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-bold text-gray-800 mb-2 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-gray-600" />
            Important Disclaimer
          </h4>
          <p className="text-gray-700 text-sm">
            This assessment is a screening tool and not a diagnostic instrument. Only a qualified mental health professional can provide an accurate diagnosis. If you're experiencing significant distress, please consult with a healthcare provider.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleReset}
            className="flex-1 min-w-[200px] bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition font-medium"
          >
            Retake Assessment
          </button>
          <a
            href="/tools/matchers/therapy-platform-matcher"
            className="flex-1 min-w-[200px] bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition font-medium text-center"
          >
            Find a Therapist
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Object.keys(answers).length} / {questions.length} questions</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {questions.map((question, index) => (
          <div key={question.id} className="border-b border-gray-200 pb-6 last:border-0">
            <h4 className="font-semibold text-gray-800 mb-4">
              <span className="text-indigo-600 mr-2">{index + 1}.</span>
              {question.text}
            </h4>
            <div className="space-y-2">
              {question.options.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition ${
                    answers[question.id] === option.value
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    checked={answers[question.id] === option.value}
                    onChange={() => handleAnswer(question.id, option.value)}
                    className="mt-1 mr-3 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-gray-700">{option.text}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center">
        {!allAnswered && (
          <p className="text-gray-600 mb-4 flex items-center">
            <Info className="h-5 w-5 mr-2 text-gray-400" />
            Please answer all questions to see your results
          </p>
        )}
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`w-full md:w-auto px-8 py-4 rounded-md font-semibold text-lg transition ${
            allAnswered
              ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          View Results
        </button>
      </div>
    </div>
  );
};

export default Assessment;
