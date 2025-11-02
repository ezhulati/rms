import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, AlertCircle, Star, Search, FileText, Clock, Shield } from 'lucide-react';
import Button from '../../components/Button';

interface Assessment {
  id: string;
  name: string;
  slug: string;
  description: string;
  duration: string;
  questionCount: number;
  category: 'general' | 'condition' | 'specialized';
  features: string[];
  image: string;
}

const assessments: Assessment[] = [
  {
    id: 'mental-health',
    name: 'Mental Health Assessment',
    slug: 'mental-health-assessment',
    description: 'Comprehensive screening for common mental health conditions including anxiety, depression, and stress.',
    duration: '5-7 minutes',
    questionCount: 12,
    category: 'general',
    features: [
      'Screens for multiple conditions',
      'Personalized recommendations',
      'Severity assessment',
      'Treatment suggestions'
    ],
    image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'anxiety',
    name: 'Anxiety Screening',
    slug: 'anxiety-screening',
    description: 'Evaluate anxiety symptoms and their impact on your daily life using validated screening tools.',
    duration: '3-5 minutes',
    questionCount: 8,
    category: 'condition',
    features: [
      'GAD-7 based assessment',
      'Anxiety type identification',
      'Severity tracking',
      'Coping strategies'
    ],
    image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'depression',
    name: 'Depression Screening',
    slug: 'depression-screening',
    description: 'Screen for depression symptoms and understand their severity with this evidence-based assessment.',
    duration: '4-6 minutes',
    questionCount: 9,
    category: 'condition',
    features: [
      'PHQ-9 based screening',
      'Mood tracking',
      'Risk assessment',
      'Support resources'
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ocd',
    name: 'OCD Assessment',
    slug: 'ocd-assessment',
    description: 'Evaluate OCD symptoms and their impact with this specialized screening tool.',
    duration: '5-7 minutes',
    questionCount: 8,
    category: 'condition',
    features: [
      'Symptom evaluation',
      'Impact assessment',
      'Treatment recommendations',
      'Severity tracking'
    ],
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'therapy-style',
    name: 'Therapy Style Assessment',
    slug: 'therapy-style-assessment',
    description: 'Discover which therapy approaches might work best for you based on your preferences and needs.',
    duration: '4-6 minutes',
    questionCount: 10,
    category: 'specialized',
    features: [
      'Therapy type matching',
      'Communication style analysis',
      'Treatment preferences',
      'Personalized recommendations'
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  }
];

const AssessmentsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mental Health Assessments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Free, clinically-informed screening tools to help you understand your mental health and find appropriate support.
          </p>
          <div className="flex justify-center">
            <Button 
              as={Link} 
              to="/tools/assessments/mental-health-assessment" 
              variant="primary" 
              size="lg" 
              icon={Brain}
            >
              Take the comprehensive assessment
            </Button>
          </div>
        </div>

        {/* Featured Assessment */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={assessments[0].image}
                alt="Mental Health Assessment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Mental Health Assessment</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our most comprehensive assessment screens for common mental health conditions and provides personalized recommendations for support and treatment options.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">What You'll Learn</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Potential mental health concerns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Symptom severity levels</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Treatment recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Support resources</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Assessment Details</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                      <span>{assessments[0].questionCount} questions</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                      <span>{assessments[0].duration}</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-5 w-5 text-indigo-600 mr-2" />
                      <span>Private & confidential</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                      <span>Detailed results</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Button 
                as={Link}
                to="/tools/assessments/mental-health-assessment"
                variant="primary"
                icon={ArrowRight}
              >
                Start Assessment
              </Button>
            </div>
          </div>
        </div>

        {/* Condition-Specific Assessments */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Condition-Specific Assessments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assessments
              .filter(assessment => assessment.category === 'condition')
              .map(assessment => (
                <div key={assessment.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={assessment.image}
                    alt={assessment.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{assessment.name}</h3>
                    <p className="text-gray-600 mb-4">{assessment.description}</p>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <FileText className="h-4 w-4 text-indigo-600 mr-2" />
                        <span>{assessment.questionCount} questions • {assessment.duration}</span>
                      </div>
                      <div className="space-y-1">
                        {assessment.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button 
                      as={Link}
                      to={`/tools/assessments/${assessment.slug}`}
                      variant="primary"
                      size="sm"
                      className="w-full justify-center"
                    >
                      Take Assessment
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Specialized Assessments */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Specialized Assessments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assessments
              .filter(assessment => assessment.category === 'specialized')
              .map(assessment => (
                <div key={assessment.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src={assessment.image}
                        alt={assessment.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{assessment.name}</h3>
                      <p className="text-gray-600 mb-4">{assessment.description}</p>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <FileText className="h-4 w-4 text-indigo-600 mr-2" />
                          <span>{assessment.questionCount} questions • {assessment.duration}</span>
                        </div>
                        <div className="space-y-1">
                          {assessment.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button 
                        as={Link}
                        to={`/tools/assessments/${assessment.slug}`}
                        variant="primary"
                        size="sm"
                      >
                        Take Assessment
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* About Our Assessments */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">About Our Assessments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Evidence-Based</h3>
              <p className="text-gray-600">
                Our assessments are based on clinically validated screening tools and best practices in mental health assessment.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Private & Secure</h3>
              <p className="text-gray-600">
                Your privacy is protected. All assessments are anonymous and your data is never shared without your consent.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Actionable Results</h3>
              <p className="text-gray-600">
                Get personalized recommendations and clear next steps based on your assessment results.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-yellow-50 rounded-lg p-6">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Important Note</h3>
                <p className="text-gray-600">
                  These assessments are screening tools, not diagnostic instruments. They are designed to help you understand your mental health and determine if professional help might be beneficial. For a proper diagnosis, please consult with a mental health professional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take the First Step?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Start with our comprehensive mental health assessment to understand your needs and get personalized recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/assessments/mental-health-assessment" 
              variant="light"
              size="lg"
            >
              Take the Assessment
            </Button>
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Find a Therapist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentsPage;