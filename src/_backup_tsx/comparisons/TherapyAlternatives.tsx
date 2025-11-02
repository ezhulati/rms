import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Search, Brain, Shield, Users, DollarSign, ExternalLink } from 'lucide-react';
import Button from '../../components/Button';
import HowWeReviewed from '../../components/HowWeReviewed';

const TherapyAlternatives = () => {
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

  // Alternative options data
  const alternatives = [
    {
      category: 'Traditional Therapy',
      options: [
        {
          name: 'In-Person Therapy',
          description: 'Face-to-face sessions with a local therapist',
          typicalCost: '$100-$200 per session',
          insurance: true,
          pros: [
            'Direct personal interaction',
            'Body language observation',
            'Typically covered by insurance',
            'Good for complex issues'
          ],
          cons: [
            'Higher cost',
            'Travel required',
            'Less flexible scheduling',
            'Limited provider availability'
          ],
          bestFor: 'Complex mental health issues, those who prefer face-to-face interaction'
        },
        {
          name: 'Group Therapy',
          description: 'Therapeutic sessions with multiple participants',
          typicalCost: '$30-$80 per session',
          insurance: true,
          pros: [
            'More affordable',
            'Peer support',
            'Shared experiences',
            'Social skill development'
          ],
          cons: [
            'Less individual attention',
            'Fixed schedules',
            'Privacy concerns',
            'May not suit all issues'
          ],
          bestFor: 'Social anxiety, addiction recovery, shared experiences'
        }
      ]
    },
    {
      category: 'Self-Help Resources',
      options: [
        {
          name: 'Mental Health Apps',
          description: 'Mobile applications for mental wellness and self-help',
          typicalCost: '$0-$15 per month',
          insurance: false,
          pros: [
            'Very affordable',
            'Available 24/7',
            'Privacy',
            'Self-paced learning'
          ],
          cons: [
            'No professional guidance',
            'Limited personalization',
            'Basic features only',
            'Not suitable for serious issues'
          ],
          bestFor: 'Mild symptoms, self-management, supplemental support'
        },
        {
          name: 'Support Groups',
          description: 'Peer-led or facilitated support meetings',
          typicalCost: 'Free or low cost',
          insurance: false,
          pros: [
            'Free or very low cost',
            'Community support',
            'Shared experiences',
            'Regular meetings'
          ],
          cons: [
            'No professional treatment',
            'Variable quality',
            'Less structure',
            'Limited privacy'
          ],
          bestFor: 'Ongoing support, community connection, specific life challenges'
        }
      ]
    },
    {
      category: 'Specialized Services',
      options: [
        {
          name: 'Employee Assistance Programs (EAP)',
          description: 'Mental health services through employer benefits',
          typicalCost: 'Free through employer',
          insurance: true,
          pros: [
            'No direct cost',
            'Quick access',
            'Professional counseling',
            'Additional resources'
          ],
          cons: [
            'Limited sessions',
            'Restricted provider choice',
            'Basic services only',
            'Employer connection'
          ],
          bestFor: 'Work-related stress, short-term counseling, crisis support'
        },
        {
          name: 'University Counseling',
          description: 'Mental health services through educational institutions',
          typicalCost: 'Free or low cost for students',
          insurance: true,
          pros: [
            'Low or no cost',
            'Convenient location',
            'Student-focused',
            'Integrated support'
          ],
          cons: [
            'Limited availability',
            'Wait times',
            'Only for students',
            'Basic services'
          ],
          bestFor: 'Students dealing with academic stress, adjustment issues'
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Alternatives to Online Therapy Platforms</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore different mental health support options beyond traditional online therapy platforms.
          </p>
          <div className="flex justify-center">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="primary" 
              size="lg" 
              icon={Search}
            >
              Find your best therapy option
            </Button>
          </div>
        </div>

        {/* Alternative Categories */}
        {alternatives.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">{category.category}</h2>
            
            <div className="space-y-8">
              {category.options.map((option, optionIndex) => (
                <div key={optionIndex} className="bg-white rounded-lg shadow-md p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">{option.name}</h3>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                        {option.typicalCost}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Advantages</h4>
                      <ul className="space-y-2">
                        {option.pros.map((pro, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Limitations</h4>
                      <ul className="space-y-2">
                        {option.cons.map((con, i) => (
                          <li key={i} className="flex items-start">
                            <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Best For</h4>
                    <p className="text-gray-700">{option.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Choosing the Right Option */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Option</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Consider Your Needs</h3>
              <p className="text-gray-600">
                Think about the severity of your concerns, preferred communication style, and type of support needed.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Budget & Resources</h3>
              <p className="text-gray-600">
                Consider your budget, insurance coverage, and available local resources.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Support Style</h3>
              <p className="text-gray-600">
                Decide whether you prefer professional guidance, peer support, or self-directed resources.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              Consider combining multiple approaches for comprehensive support:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Use professional therapy (online or in-person) as your primary support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Supplement with self-help apps and resources</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Join support groups for community connection</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How We Review Section */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Need Help Finding the Right Support?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to discover which mental health support options best fit your needs and circumstances.
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

export default TherapyAlternatives;