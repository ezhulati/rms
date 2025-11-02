import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Search, Brain, Shield, Users, DollarSign, ExternalLink } from 'lucide-react';
import Button from '../../components/Button';
import HowWeReviewed from '../../components/HowWeReviewed';

const TalkspaceVsCerebral = () => {
  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="h-4 w-4 fill-current" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<Star key={i} className="h-4 w-4 fill-current" />);
      } else {
        stars.push(<Star key={i} className="h-4 w-4" strokeWidth={1} />);
      }
    }
    return <div className="flex text-yellow-400">{stars}</div>;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Talkspace vs Cerebral: Which Is Better in 2025?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare two leading platforms that offer both therapy and medication management services.
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

        {/* Quick Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Comparison</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Talkspace */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Talkspace</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.5)}
                  </div>
                  <span className="text-gray-600">4.5/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Established platform with strong insurance coverage and integrated psychiatric services.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>$65-$99/week</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Insurance accepted</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Medication management</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>No financial aid</span>
                </li>
              </ul>
              <Button 
                as="a"
                href="https://www.talkspace.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ExternalLink}
                className="w-full justify-center"
              >
                Visit Talkspace
              </Button>
            </div>

            {/* Comparison */}
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Differences</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Talkspace has more therapy focus, Cerebral emphasizes medication</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Different insurance coverage networks</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Talkspace has more therapists</span>
                </li>
                <li className="flex items-start">
                  <DollarSign className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Different pricing structures</span>
                </li>
              </ul>
            </div>

            {/* Cerebral */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Cerebral</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.0)}
                  </div>
                  <span className="text-gray-600">4.0/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive mental health platform with strong focus on medication management.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>$85-$325/month</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Insurance accepted</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Medication delivery</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Limited availability</span>
                </li>
              </ul>
              <Button 
                as="a"
                href="https://www.cerebral.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ExternalLink}
                className="w-full justify-center"
              >
                Visit Cerebral
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
          
          {/* Services & Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Services & Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Unlimited messaging</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Live video sessions (plan dependent)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Psychiatric services available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Multiple subscription tiers</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>No medication delivery</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Cerebral</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Therapy sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Medication management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Medication delivery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Care counseling</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>Limited messaging features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Cost & Insurance */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Cost & Insurance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span>$65-$99 per week</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Major insurance plans accepted</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>No financial aid program</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>HSA/FSA accepted</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Cerebral</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span>$85-$325 per month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Insurance coverage available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Multiple plan options</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>Higher medication plan costs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Provider Network */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Provider Network</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>5,000+ licensed therapists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Licensed psychiatrists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Specialized providers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Easy provider switching</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Cerebral</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Licensed therapists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Prescribing providers</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>Smaller provider network</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>Limited provider choice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Final Verdict */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Verdict</h3>
            <p className="text-gray-700 mb-4">
              Choose <strong>Talkspace</strong> if:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You want more therapy-focused care with medication options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You prefer more provider options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You value comprehensive messaging features</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Choose <strong>Cerebral</strong> if:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You prioritize medication management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You want medication delivery included</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You prefer a more structured treatment approach</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How We Review Section */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Not Sure Which Platform Is Right For You?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect online therapy platform based on your unique needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="light"
              size="lg"
            >
              Find Your Perfect Match
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

export default TalkspaceVsCerebral;