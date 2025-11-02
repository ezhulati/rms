import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Brain, DollarSign, Users, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../../components/Button';

interface MatcherTool {
  id: string;
  name: string;
  slug: string;
  description: string;
  duration: string;
  features: string[];
  image: string;
  category: 'general' | 'specialized' | 'practical';
}

const matchers: MatcherTool[] = [
  {
    id: 'therapy-platform',
    name: 'Therapy Platform Matcher',
    slug: 'therapy-platform-matcher',
    description: 'Find the perfect online therapy platform based on your needs, preferences, and budget.',
    duration: '3-5 minutes',
    features: [
      'Matches based on 15+ factors',
      'Compares pricing and features',
      'Insurance coverage options',
      'Personalized recommendations'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'general'
  },
  {
    id: 'platform-finder',
    name: 'Platform Finder',
    slug: 'platform-finder',
    description: 'Filter and compare therapy platforms by price range, condition specialties, and insurance coverage.',
    duration: '1-2 minutes',
    features: [
      'Interactive filtering options',
      'Price range categories',
      'Condition-specific matching',
      'Insurance coverage filtering'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'practical'
  },
  {
    id: 'therapy-type',
    name: 'Therapy Type Finder',
    slug: 'therapy-type-finder',
    description: 'Discover which therapy approaches might work best for your personality and needs.',
    duration: '4-6 minutes',
    features: [
      'Therapy style matching',
      'Communication preferences',
      'Treatment approach analysis',
      'Learning style assessment'
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'specialized'
  },
  {
    id: 'budget-friendly',
    name: 'Budget-Friendly Therapy Finder',
    slug: 'budget-friendly-finder',
    description: 'Find affordable therapy options that fit your budget and financial situation.',
    duration: '2-3 minutes',
    features: [
      'Cost comparison',
      'Financial aid options',
      'Insurance coverage check',
      'Sliding scale providers'
    ],
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'practical'
  },
  {
    id: 'insurance-checker',
    name: 'Insurance Coverage Checker',
    slug: 'insurance-coverage-checker',
    description: 'Find therapy platforms and providers that accept your insurance.',
    duration: '2-3 minutes',
    features: [
      'Insurance plan verification',
      'Coverage comparison',
      'Out-of-pocket estimates',
      'Provider network search'
    ],
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'practical'
  }
];

const MatchersPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Therapy Matching Tools</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find the perfect therapy solution with our matching tools that analyze your needs, preferences, and practical requirements.
          </p>
          <div className="flex justify-center">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="primary" 
              size="lg" 
              icon={Search}
            >
              Find your perfect therapy match
            </Button>
          </div>
        </div>

        {/* Featured Matcher */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={matchers[0].image}
                alt="Therapy Platform Matcher"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <div className="flex items-center mb-4">
                <Search className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Therapy Platform Matcher</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our most comprehensive matching tool analyzes your therapy needs, communication preferences, budget, and other factors to recommend the best online therapy platforms for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">What You'll Get</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Personalized platform recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Price and feature comparisons</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Insurance compatibility check</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Detailed platform reviews</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Details</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Search className="h-5 w-5 text-indigo-600 mr-2" />
                      <span>3-5 minute questionnaire</span>
                    </li>
                    <li className="flex items-center">
                      <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                      <span>15+ matching factors</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-indigo-600 mr-2" />
                      <span>Updated monthly</span>
                    </li>
                    <li className="flex items-center">
                      <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                      <span>Free to use</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Button 
                as={Link}
                to="/tools/matchers/therapy-platform-matcher"
                variant="primary"
                icon={ArrowRight}
              >
                Start Matching
              </Button>
            </div>
          </div>
        </div>

        {/* All Matchers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {matchers.slice(1).map(matcher => (
            <div key={matcher.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={matcher.image}
                alt={matcher.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{matcher.name}</h3>
                <p className="text-gray-600 mb-4">{matcher.description}</p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Search className="h-4 w-4 text-indigo-600 mr-2" />
                    <span>{matcher.duration} to complete</span>
                  </div>
                  <div className="space-y-1">
                    {matcher.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button 
                  as={Link}
                  to={`/tools/matchers/${matcher.slug}`}
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                >
                  Start Matching
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How Our Matching Tools Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Smart Analysis</h3>
              <p className="text-gray-600">
                Our algorithms analyze multiple factors including your needs, preferences, and practical requirements to find the best matches.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Personalized Results</h3>
              <p className="text-gray-600">
                Get personalized recommendations based on your unique situation, with detailed explanations of why each option might work for you.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Practical Considerations</h3>
              <p className="text-gray-600">
                We consider practical factors like budget, insurance coverage, and availability to ensure our recommendations are realistic and accessible.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Therapy Match?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Start with our comprehensive platform matcher to find the best online therapy option for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="light"
              size="lg"
            >
              Find Your Match
            </Button>
            <Button 
              as={Link} 
              to="/tools/assessments/mental-health-assessment" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Take Mental Health Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchersPage;
