import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain, Search } from 'lucide-react';
import Button from '../../components/Button';
import HowWeReviewed from '../../components/HowWeReviewed';

const AffordableBetterHelpAlternatives = () => {
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

  // Platform data
  const platforms = [
    {
      name: 'Calmerry',
      slug: 'calmerry',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: '$42-$68/week',
      description: 'Affordable online therapy platform with flexible subscription plans and licensed therapists.',
      pros: [
        'Lower starting price than BetterHelp',
        'Flexible subscription options',
        'No long-term commitment required',
        'Licensed therapists only'
      ],
      cons: [
        'Newer platform with smaller therapist network',
        'No insurance coverage',
        'Limited to messaging and video (no phone)',
        'No financial aid program'
      ],
      features: [
        'Text therapy',
        'Video sessions',
        'Therapist matching',
        'Flexible scheduling'
      ],
      bestFor: 'Budget-conscious individuals seeking quality therapy with flexible options'
    },
    {
      name: 'Online-Therapy.com',
      slug: 'online-therapy-com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.0,
      price: '$40-$88/week',
      description: 'CBT-focused platform with comprehensive self-help tools and resources.',
      pros: [
        'Lower starting price than BetterHelp',
        'Comprehensive CBT worksheets and tools',
        'Daily therapist feedback',
        'Yoga and meditation resources included'
      ],
      cons: [
        'Limited to CBT approach only',
        'Smaller therapist network',
        'No insurance coverage',
        'Limited communication options'
      ],
      features: [
        'CBT program',
        'Worksheets',
        'Video sessions',
        'Yoga videos'
      ],
      bestFor: 'Those seeking structured CBT therapy with additional self-help resources'
    },
    {
      name: '7 Cups',
      slug: '7-cups',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 3.8,
      price: 'Free (listeners) or $150/month (therapy)',
      description: 'Platform offering both free peer support and affordable professional therapy.',
      pros: [
        'Free peer support option',
        'Lower monthly cost for therapy than BetterHelp',
        'Community forums and group support',
        'Available 24/7'
      ],
      cons: [
        'Volunteer listeners aren\'t licensed professionals',
        'Limited therapist availability in some regions',
        'Basic messaging interface',
        'No video or phone options with free plan'
      ],
      features: [
        'Free listeners',
        'Professional therapy',
        'Community support',
        'Self-help guides'
      ],
      bestFor: 'Those seeking free emotional support or affordable professional therapy'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Affordable BetterHelp Alternatives in 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover budget-friendly online therapy options that provide quality mental health support without breaking the bank.
          </p>
          <div className="flex justify-center">
            <Button 
              as={Link} 
              to="/tools/matchers/budget-friendly-finder" 
              variant="primary" 
              size="lg" 
              icon={Search}
            >
              Find your affordable therapy match
            </Button>
          </div>
        </div>

        {/* BetterHelp Price Context */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">BetterHelp Pricing Context</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">BetterHelp Standard Pricing</h3>
              <p className="text-gray-600 mb-4">
                BetterHelp typically costs between $60-$90 per week (billed monthly at $240-$360), depending on your location, therapist availability, and specific needs.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="font-bold text-gray-800">Standard Plan: $60-$90/week</span>
                </div>
                <ul className="space-y-1 text-gray-600 pl-7">
                  <li>• Unlimited messaging with your therapist</li>
                  <li>• Weekly live sessions (video, phone, or chat)</li>
                  <li>• Access to groupinars and worksheets</li>
                  <li>• Billed monthly ($240-$360)</li>
                </ul>
              </div>
              <p className="text-gray-600">
                While BetterHelp offers financial aid to eligible users (potentially reducing costs by 15-40%), many people still find the service outside their budget.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Why Consider Alternatives?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <DollarSign className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Lower Cost Options</span>
                    <p className="text-gray-600">Some platforms offer therapy starting at $40/week, significantly less than BetterHelp's starting price.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Different Payment Models</span>
                    <p className="text-gray-600">Alternatives may offer pay-per-session options instead of subscriptions, or more flexible billing cycles.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Specialized Approaches</span>
                    <p className="text-gray-600">Some alternatives focus on specific therapeutic methods or offer unique resources that may better suit your needs.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Top Affordable Alternatives */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Top Affordable Alternatives to BetterHelp</h2>
          
          {platforms.map((platform, index) => (
            <div key={platform.slug} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-6 md:mb-0">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl font-bold text-indigo-600 mr-3">{index + 1}</span>
                      <h3 className="text-2xl font-bold text-gray-800">{platform.name}</h3>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="mr-2">
                        {renderStars(platform.rating)}
                      </div>
                      <span className="text-gray-600">{platform.rating}/5</span>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                        <span className="text-gray-600">{platform.price}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button 
                        as={Link} 
                        to={`/reviews/platforms/${platform.slug}`} 
                        variant="outline" 
                        size="sm" 
                        className="w-full justify-center"
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
                        icon={ArrowRight}
                        className="w-full justify-center"
                      >
                        Visit Website
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 md:pl-8">
                    <h4 className="font-bold text-gray-800 mb-3">Why It's a Good Alternative</h4>
                    <p className="text-gray-600 mb-6">
                      {platform.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-3">Pros</h5>
                        <ul className="space-y-2">
                          {platform.pros.map((pro, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold text-gray-800 mb-3">Cons</h5>
                        <ul className="space-y-2">
                          {platform.cons.map((con, i) => (
                            <li key={i} className="flex items-start">
                              <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-gray-800 mb-3">Key Features</h5>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {platform.features.map((feature, i) => (
                          <div key={i} className="bg-gray-50 rounded-lg p-3 flex items-center">
                            <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-indigo-50 rounded-lg p-4">
                      <h5 className="font-bold text-gray-800 mb-2">Best For</h5>
                      <p className="text-gray-700">{platform.bestFor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Cost-Saving Options */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Ways to Access Affordable Therapy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Insurance-Covered Therapy</h3>
              <p className="text-gray-600 mb-4">
                If you have health insurance, check if it covers mental health services. Platforms like Talkspace and Brightside accept many insurance plans.
              </p>
              <Link to="/reviews/pricing/insurance-coverage-guide" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Insurance coverage guide <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Community Resources</h3>
              <p className="text-gray-600 mb-4">
                Many communities offer free or low-cost mental health services through community centers, universities, or non-profit organizations.
              </p>
              <Link to="/compare/alternatives/free-therapy-options" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Free therapy options <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Sliding Scale Therapists</h3>
              <p className="text-gray-600 mb-4">
                Many therapists offer sliding scale fees based on your income. Websites like Open Path Collective connect clients with affordable therapists.
              </p>
              <a href="https://openpathcollective.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Open Path Collective <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">BetterHelp vs Affordable Alternatives: Quick Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Platform</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Price Range</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Communication Methods</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Insurance</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Financial Aid</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">BetterHelp</td>
                  <td className="py-3 px-4 text-center">$60-$90/week</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center space-x-1">
                      <MessageSquare className="h-4 w-4 text-indigo-600" aria-label="Messaging" />
                      <Video className="h-4 w-4 text-indigo-600" aria-label="Video" />
                      <Phone className="h-4 w-4 text-indigo-600" aria-label="Phone" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.5)}
                    </div>
                  </td>
                </tr>
                
                {platforms.map(platform => (
                  <tr key={platform.slug} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{platform.name}</td>
                    <td className="py-3 px-4 text-center">{platform.price}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center space-x-1">
                        <MessageSquare className="h-4 w-4 text-indigo-600" aria-label="Messaging" />
                        {platform.slug !== '7-cups' && (
                          <Video className="h-4 w-4 text-indigo-600" aria-label="Video" />
                        )}
                        {platform.slug === 'calmerry' && (
                          <Phone className="h-4 w-4 text-indigo-600" aria-label="Phone" />
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="py-3 px-4 text-center">
                      {platform.slug === '7-cups' ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">
                        {renderStars(platform.rating)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How to Choose */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Affordable Option</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Factors to Consider</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <DollarSign className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">True Cost Analysis</span>
                    <p className="text-gray-600">Compare the total cost over time, not just weekly rates. Consider billing frequency and minimum commitments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Communication Preferences</span>
                    <p className="text-gray-600">Determine which communication methods (text, video, phone) are most important to you.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Therapist Qualifications</span>
                    <p className="text-gray-600">Ensure the platform uses licensed professionals with appropriate credentials for your needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Therapeutic Approach</span>
                    <p className="text-gray-600">Consider if you prefer a specific therapy method (CBT, psychodynamic, etc.) or want a platform with multiple options.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Red Flags to Watch For</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Unclear Pricing</span>
                    <p className="text-gray-600">Be wary of platforms that don't clearly disclose all costs upfront or have hidden fees.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Difficult Cancellation</span>
                    <p className="text-gray-600">Check cancellation policies before signing up. Some platforms make it difficult to cancel subscriptions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Unverified Therapists</span>
                    <p className="text-gray-600">Avoid platforms that don't verify therapist credentials or use unlicensed "coaches" instead of professionals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Poor Privacy Practices</span>
                    <p className="text-gray-600">Ensure the platform has strong privacy policies and secure, HIPAA-compliant communication.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              For most people seeking affordable alternatives to BetterHelp, we recommend:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Calmerry</strong> for those wanting a similar experience to BetterHelp at a lower price point</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Online-Therapy.com</strong> for those who prefer a structured CBT approach with additional resources</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>7 Cups</strong> for those on an extremely tight budget who need immediate emotional support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect Affordable Therapy Match</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the most affordable therapy option that meets your specific needs and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/budget-friendly-finder" 
              variant="light"
              size="lg"
            >
              Find Affordable Therapy
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

export default AffordableBetterHelpAlternatives;
