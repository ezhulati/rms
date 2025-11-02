import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Search, Brain, Shield, Users, DollarSign, ExternalLink } from 'lucide-react';
import Button from '../../components/Button';
import HowWeReviewed from '../../components/HowWeReviewed';

const InsuranceFriendlyPlatforms = () => {
  // Platform data
  const platforms = [
    {
      name: 'Talkspace',
      slug: 'talkspace',
      rating: 4.5,
      price: '$65-$99/week',
      description: 'Leading platform with broad insurance coverage and integrated psychiatric services.',
      insuranceProviders: ['Cigna', 'Aetna', 'Blue Cross Blue Shield', 'United Healthcare', 'Optum'],
      copayRange: '$20-$75',
      features: [
        'Multiple communication methods',
        'Psychiatric services',
        'Medication management',
        'Specialized programs'
      ],
      pros: [
        'Wide insurance acceptance',
        'Integrated psychiatric care',
        'Multiple therapy approaches',
        'Guaranteed response times'
      ],
      cons: [
        'Higher out-of-pocket costs',
        'Limited live sessions on basic plan',
        'May have waiting lists',
        'Not all plans cover all services'
      ]
    },
    {
      name: 'Cerebral',
      slug: 'cerebral',
      rating: 4.0,
      price: '$85-$325/month',
      description: 'Comprehensive mental health platform combining therapy and medication management.',
      insuranceProviders: ['Cigna', 'Aetna', 'United Healthcare'],
      copayRange: '$30-$85',
      features: [
        'Therapy sessions',
        'Medication management',
        'Care counseling',
        'Medication delivery'
      ],
      pros: [
        'Insurance coverage available',
        'Combined care approach',
        'Medication delivery included',
        'Regular check-ins'
      ],
      cons: [
        'Higher medication plan costs',
        'Limited availability',
        'Fewer insurance partners',
        'Basic messaging features'
      ]
    },
    {
      name: 'Amwell',
      slug: 'amwell',
      rating: 4.2,
      price: '$109-$129/session',
      description: 'Traditional telehealth platform with strong insurance coverage for mental health.',
      insuranceProviders: ['Blue Cross Blue Shield', 'Aetna', 'Cigna', 'United Healthcare', 'Medicare'],
      copayRange: '$15-$60',
      features: [
        'Video therapy',
        'Psychiatric visits',
        'On-demand sessions',
        'Provider choice'
      ],
      pros: [
        'Extensive insurance network',
        'Traditional therapy format',
        'Choose your provider',
        'Quick appointment scheduling'
      ],
      cons: [
        'Higher per-session costs',
        'No messaging between sessions',
        'Video-only format',
        'Less flexible scheduling'
      ]
    }
  ];

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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Insurance-Friendly Online Therapy Platforms</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare online therapy platforms that accept insurance to maximize your mental health benefits and minimize out-of-pocket costs.
          </p>
          <div className="flex justify-center">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="primary" 
              size="lg" 
              icon={Search}
            >
              Find insurance-covered therapy
            </Button>
          </div>
        </div>

        {/* Insurance Coverage Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Insurance Coverage at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map(platform => (
              <div key={platform.slug} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-800 mr-3">{platform.name}</h3>
                  <div className="flex items-center">
                    <div className="mr-1">
                      {renderStars(platform.rating)}
                    </div>
                    <span className="text-gray-600">{platform.rating}/5</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{platform.description}</p>
                
                <div className="space-y-4 mb-4">
                  <div>
                    <div className="font-medium text-gray-800 mb-1">Insurance Partners:</div>
                    <div className="flex flex-wrap gap-2">
                      {platform.insuranceProviders.map(provider => (
                        <span key={provider} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-sm">
                          {provider}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-gray-800 mb-1">Typical Copay Range:</div>
                    <span className="text-gray-600">{platform.copayRange}</span>
                  </div>
                </div>
                
                <Button 
                  as={Link}
                  to={`/reviews/platforms/${platform.slug}`}
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                >
                  View Full Details
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Platform Comparisons */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Platform Comparisons</h2>
          
          {platforms.map((platform, index) => (
            <div key={platform.slug} className="mb-8 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-indigo-600 mr-3">{index + 1}</span>
                  <h3 className="text-2xl font-bold text-gray-800">{platform.name}</h3>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  {renderStars(platform.rating)}
                  <span className="ml-2 text-gray-600">{platform.rating}/5</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Insurance & Costs</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                      <span>Base Price: {platform.price}</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-5 w-5 text-indigo-600 mr-2" />
                      <span>Typical Copay: {platform.copayRange}</span>
                    </li>
                    <li>
                      <div className="font-medium mb-1">Accepted Insurance:</div>
                      <div className="flex flex-wrap gap-2">
                        {platform.insuranceProviders.map(provider => (
                          <span key={provider} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-sm">
                            {provider}
                          </span>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Pros</h4>
                  <ul className="space-y-2">
                    {platform.pros.map((pro, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Cons</h4>
                  <ul className="space-y-2">
                    {platform.cons.map((con, i) => (
                      <li key={i} className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  as={Link}
                  to={`/reviews/platforms/${platform.slug}`}
                  variant="outline"
                  size="sm"
                >
                  Read full review
                </Button>
                <Button 
                  as="a"
                  href={`https://www.${platform.slug}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  icon={ExternalLink}
                >
                  Visit Website
                </Button>
              </div>
              
              {index < platforms.length - 1 && <hr className="my-8 border-gray-200" />}
            </div>
          ))}
        </div>

        {/* Insurance Coverage Guide */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Online Therapy Insurance Coverage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Coverage Basics</h3>
              <p className="text-gray-600">
                Learn how insurance coverage works for online therapy, including copays, deductibles, and coverage limits.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Cost Comparison</h3>
              <p className="text-gray-600">
                Compare out-of-pocket costs versus insurance coverage across different platforms and plans.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Provider Networks</h3>
              <p className="text-gray-600">
                Understand how provider networks affect your coverage and access to mental health professionals.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Tips for Maximizing Insurance Benefits</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Verify your coverage before starting therapy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Understand your plan's mental health benefits</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Check if you need pre-authorization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Keep track of your deductible and copays</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How We Review Section */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Check Your Coverage?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Use our insurance coverage checker to find therapy platforms that accept your insurance and see estimated costs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/insurance-coverage-checker" 
              variant="light"
              size="lg"
            >
              Check Your Coverage
            </Button>
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Find Insurance-Friendly Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceFriendlyPlatforms;