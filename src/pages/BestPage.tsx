import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Star, Users, Brain, Heart, DollarSign, ExternalLink, CheckCircle, XCircle, MessageSquare, Video, Phone, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/Button';

const BestPage = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/best';
  
  // State for platform filter
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);
  
  // Platform data
  const platforms = [
    {
      id: 1,
      name: 'BetterHelp',
      slug: 'betterhelp',
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      rating: 4.8,
      description: 'The world\'s largest online therapy platform, offering messaging, phone, and video sessions on a subscription model.',
      pros: ['Large network of 25,000+ licensed therapists', 'Multiple communication methods (messaging, live chat, phone, video)', 'Financial aid available for those who qualify', 'Weekly live sessions included in all plans', 'Unlimited messaging with your therapist', 'Easy therapist switching if needed'],
      cons: ['No insurance coverage', 'No medication management', 'Response times can vary between therapists', 'Not suitable for severe mental health conditions'],
      features: ['Unlimited messaging', 'Weekly live sessions', 'Therapist matching algorithm', 'Group webinars', 'Journaling tools', 'Mobile app access']
    },
    {
      id: 2,
      name: 'Talkspace',
      slug: 'talkspace',
      price: '$65-$99/week',
      priceRange: [65, 99],
      communication: ['messaging', 'video', 'phone'],
      insurance: true,
      medication: true,
      rating: 4.5,
      description: 'Online therapy and psychiatry via text, audio, and video sessions, with medication options and insurance coverage.',
      pros: ['Insurance coverage available', 'Medication management services', 'Multiple subscription tiers', 'Specialized therapy options', 'Structured treatment approach', 'Guaranteed response times'],
      cons: ['Higher pricing than some competitors', 'No financial aid program', 'Limited live sessions on basic plan', 'Less flexibility in scheduling'],
      features: ['Unlimited messaging', 'Live video sessions', 'Psychiatry services', 'Insurance integration', 'Progress tracking', 'Specialized programs']
    },
    {
      id: 3,
      name: 'Cerebral',
      slug: 'cerebral',
      price: '$85-$325/month',
      priceRange: [85, 325],
      communication: ['messaging', 'video', 'phone'],
      insurance: true,
      medication: true,
      rating: 4.0,
      description: 'Subscription-based therapy and medication management for anxiety, depression, ADHD, and insomnia.',
      pros: ['Comprehensive care options', 'Medication delivery available', 'Insurance accepted', 'Multiple plan options', 'Combined therapy and medication', 'Regular check-ins'],
      cons: ['Higher cost for medication plans', 'Not available in all states', 'Limited therapist selection compared to others', 'Less flexible scheduling options'],
      features: ['Medication management', 'Therapy sessions', 'Care counseling', 'Medication delivery', 'Self-care tools', 'Regular progress tracking']
    },
    {
      id: 4,
      name: 'Calmerry',
      slug: 'calmerry',
      price: '$42-$68/week',
      priceRange: [42, 68],
      communication: ['messaging', 'video'],
      insurance: false,
      medication: false,
      rating: 4.0,
      description: 'Affordable online therapy platform offering flexible text and video-based therapy sessions.',
      pros: ['Lower pricing', 'Fast therapist matching', 'Flexible subscription plans', 'No long-term commitments', 'Quick response times', 'User-friendly platform'],
      cons: ['Smaller therapist network', 'No insurance coverage', 'Limited communication options', 'No medication management', 'Newer platform with less track record'],
      features: ['Unlimited messaging', 'Video sessions', 'Therapy toolbox', 'Journal feature', 'Goal tracking', 'Mobile app access']
    },
    {
      id: 5,
      name: 'Online-Therapy.com',
      slug: 'online-therapy-com',
      price: '$40-$88/week',
      priceRange: [40, 88],
      communication: ['messaging', 'video'],
      insurance: false,
      medication: false,
      rating: 4.0,
      description: 'Specializes in CBT-based therapy with structured programs, including worksheets and yoga resources.',
      pros: ['Comprehensive CBT toolbox', 'Structured approach', 'Self-help resources', 'Daily therapist feedback', 'Yoga and meditation resources', 'Weekly live sessions'],
      cons: ['Limited therapy approaches', 'No insurance coverage', 'Smaller therapist network', 'No medication management', 'Less suitable for complex conditions'],
      features: ['CBT worksheets', 'Live sessions', 'Daily journal', 'Yoga videos', 'Activity plan', 'Progress tracking']
    }
  ];
  
  // Display more platforms or limit to 5
  const displayedPlatforms = showAllPlatforms ? platforms : platforms.slice(0, 3);
  
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
        {isRootPath ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Find the Best Mental Health Solutions for You</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the top-rated online therapy platforms tailored to your specific needs, conditions, and preferences.
              </p>
            </div>

            {/* Best Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Platforms Category */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-indigo-600 p-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3">Best Platforms</h2>
                  <p className="text-gray-600 mb-4">
                    Find the top-rated online therapy platforms across different categories.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li>
                      <Link to="/best/platforms/best-online-therapy-platforms" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Best Overall Platforms</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best/platforms/best-text-therapy-services" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Best Text Therapy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best/platforms/best-video-therapy-platforms" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Best Video Therapy</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/best/platforms" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    View all platform lists <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Conditions Category */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-purple-600 p-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3">Best for Conditions</h2>
                  <p className="text-gray-600 mb-4">
                    Find the best platforms for specific mental health conditions.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li>
                      <Link to="/best/conditions/best-for-anxiety" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Best for Anxiety</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best/conditions/best-for-depression" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Best for Depression</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best/conditions/best-for-ptsd" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Best for PTSD</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/best/conditions" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    View all condition lists <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Audiences Category */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 p-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3">Best for Audiences</h2>
                  <p className="text-gray-600 mb-4">
                    Find the best platforms for specific demographics and groups.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li>
                      <Link to="/best/audiences/best-for-teens" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Best for Teens</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best/audiences/best-for-couples" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Best for Couples</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best/audiences/best-for-lgbtq" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Best for LGBTQ+</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/best/audiences" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    View all audience lists <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Specific Needs Category */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-600 p-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3">Best for Specific Needs</h2>
                  <p className="text-gray-600 mb-4">
                    Find platforms that meet specific requirements and preferences.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li>
                      <Link to="/best/specific-needs/best-affordable-therapy" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Most Affordable Options</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best/specific-needs/best-insurance-coverage" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Best Insurance Coverage</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best/specific-needs/best-medication-management" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Best Medication Management</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/best/specific-needs" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    View all specific needs lists <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Best Lists */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Featured Best Lists</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Best for Anxiety */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Brain className="h-6 w-6 text-purple-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-800">Best for Anxiety</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our top picks for platforms specializing in anxiety treatment, based on therapist expertise, treatment approaches, and user satisfaction.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="border-b pb-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-bold text-lg">1. BetterHelp</div>
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          Large network of therapists specializing in anxiety disorders with multiple communication options.
                        </p>
                        <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                          Visit BetterHelp <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      
                      <div className="border-b pb-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-bold text-lg">2. Talkspace</div>
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4" strokeWidth={1} />
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          Excellent for anxiety with medication management options and insurance coverage.
                        </p>
                        <a href="https://www.talkspace.com" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                          Visit Talkspace <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-bold text-lg">3. Online-Therapy.com</div>
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4" strokeWidth={1} />
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          Specialized in CBT for anxiety with comprehensive toolbox and worksheets.
                        </p>
                        <a href="https://www.online-therapy.com" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                          Visit Online-Therapy.com <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>
                    
                    <Link to="/best/conditions/best-for-anxiety" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                      View full anxiety platforms list <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
                
                {/* Best for Couples */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Heart className="h-6 w-6 text-red-500 mr-3" />
                      <h3 className="text-xl font-bold text-gray-800">Best for Couples</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Top platforms offering specialized couples therapy to improve communication and resolve relationship issues.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="border-b pb-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-bold text-lg">1. ReGain</div>
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          Specialized couples therapy platform with joint sessions and relationship-focused therapists.
                        </p>
                        <a href="https://www.regain.us" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                          Visit ReGain <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      
                      <div className="border-b pb-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-bold text-lg">2. Talkspace</div>
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4" strokeWidth={1} />
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          Offers dedicated couples therapy with licensed relationship counselors and flexible scheduling.
                        </p>
                        <a href="https://www.talkspace.com" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                          Visit Talkspace <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-bold text-lg">3. Lasting</div>
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4" strokeWidth={1} />
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          App-based relationship counseling with personalized programs and exercises for couples.
                        </p>
                        <a href="https://www.getlasting.com" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                          Visit Lasting <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>
                    
                    <Link to="/best/audiences/best-for-couples" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                      View full couples therapy list <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Comprehensive List */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Best Online Therapy Platforms of 2025</h2>
                  <Link to="/best/platforms/best-online-therapy-platforms" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                    View full detailed list <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <p className="text-gray-600 mb-8">
                  Our comprehensive analysis of the top online therapy platforms, based on therapist qualifications, user experience, pricing, and specialized services.
                </p>
                
                <div className="space-y-8">
                  {/* Platform 1 */}
                  <div className="border-b pb-8">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 mb-4 md:mb-0">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl font-bold text-indigo-600 mr-3">1</span>
                          <h3 className="text-xl font-bold">BetterHelp</h3>
                        </div>
                        <div className="flex text-yellow-400 mb-2">
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          <strong>Price:</strong> $60-$90/week
                        </div>
                        <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm">
                          Visit Website <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      <div className="md:w-3/4 md:pl-6">
                        <h4 className="font-bold text-gray-800 mb-2">Why We Recommend It</h4>
                        <p className="text-gray-600 mb-4">
                          BetterHelp earns our top spot for its extensive network of licensed therapists, flexible communication options, and overall value. With over 25,000 therapists, users can easily find specialists for their specific needs and switch if needed.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-bold text-gray-800 mb-1">Pros</h5>
                            <ul className="space-y-1">
                              <li className="flex items-start">
                                <span className="text-green-500 font-bold mr-2">✓</span>
                                <span className="text-sm">Large therapist network</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 font-bold mr-2">✓</span>
                                <span className="text-sm">Multiple communication methods</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 font-bold mr-2">✓</span>
                                <span className="text-sm">Financial aid available</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 font-bold mr-2">✓</span>
                                <span className="text-sm">Easy therapist switching</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-800 mb-1">Cons</h5>
                            <ul className="space-y-1">
                              <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">✗</span>
                                <span className="text-sm">No insurance coverage</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">✗</span>
                                <span className="text-sm">No medication management</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">✗</span>
                                <span className="text-sm">Response times can vary</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Platform 2 */}
                  <div className="border-b pb-8">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 mb-4 md:mb-0">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl font-bold text-indigo-600 mr-3">2</span>
                          <h3 className="text-xl font-bold">Talkspace</h3>
                        </div>
                        <div className="flex text-yellow-400 mb-2">
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5" strokeWidth={1} />
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          <strong>Price:</strong> $65-$99/week
                        </div>
                        <a href="https://www.talkspace.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm">
                          Visit Website <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      <div className="md:w-3/4 md:pl-6">
                        <h4 className="font-bold text-gray-800 mb-2">Why We Recommend It</h4>
                        <p className="text-gray-600 mb-4">
                          Talkspace stands out for its insurance coverage options and integrated psychiatric services. It's an excellent choice for those seeking both therapy and medication management in one platform.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-bold text-gray-800 mb-1">Pros</h5>
                            <ul className="space-y-1">
                              <li className="flex items-start">
                                <span className="text-green-500 font-bold mr-2">✓</span>
                                <span className="text-sm">Insurance coverage available</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 font-bold mr-2">✓</span>
                                <span className="text-sm">Medication management</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 font-bold mr-2">✓</span>
                                <span className="text-sm">Multiple subscription tiers</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 font-bold mr-2">✓</span>
                                <span className="text-sm">Specialized therapy options</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-800 mb-1">Cons</h5>
                            <ul className="space-y-1">
                              <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">✗</span>
                                <span className="text-sm">Higher pricing than some competitors</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">✗</span>
                                <span className="text-sm">No financial aid program</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">✗</span>
                                <span className="text-sm">Limited live sessions on basic plan</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Platform 3 */}
                  <div>
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 mb-4 md:mb-0">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl font-bold text-indigo-600 mr-3">3</span>
                          <h3 className="text-xl font-bold">Cerebral</h3>
                        </div>
                        <div className="flex text-yellow-400 mb-2">
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5" strokeWidth={1} />
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          <strong>Price:</strong> $85-$325/month
                        </div>
                        <a href="https://www.cerebral.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm">
                          Visit Website <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      <div className="md:w-3/4 md:pl-6">
                        <h4 className="font-bold text-gray-800 mb-2">Why We Recommend It</h4>
                        <p className="text-gray-600 mb-4">
                          Cerebral offers comprehensive mental health care with therapy, coaching, and medication management options. Their subscription model provides flexibility for different levels of care.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-bold text-gray-800 mb-1">Pros</h5>
                            <ul className="space-y-1">
                              <li className="flex items-start">
                                <span className="text-green-500 font-bold mr-2">✓</span>
                                <span className="text-sm">Comprehensive care options</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 font-bold mr-2">✓</span>
                                <span className="text-sm">Medication delivery available</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 font-bold mr-2">✓</span>
                                <span className="text-sm">Insurance accepted</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 font-bold mr-2">✓</span>
                                <span className="text-sm">Multiple plan options</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-800 mb-1">Cons</h5>
                            <ul className="space-y-1">
                              <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">✗</span>
                                <span className="text-sm">Higher cost for medication plans</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">✗</span>
                                <span className="text-sm">Not available in all states</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2">✗</span>
                                <span className="text-sm">Limited therapist selection compared to others</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Rate */}
            <div className="bg-indigo-50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">How We Rate Mental Health Platforms</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Therapist Qualifications</h3>
                  <p className="text-gray-600">
                    We evaluate the credentials, experience, and specializations of therapists on each platform, as well as the vetting process.
                  </p>
                </div>
                
                <div>
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Value & Affordability</h3>
                  <p className="text-gray-600">
                    We assess pricing structures, insurance coverage, financial aid options, and overall value for the services provided.
                  </p>
                </div>
                
                <div>
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">User Experience</h3>
                  <p className="text-gray-600">
                    We analyze platform usability, communication options, session quality, and overall client satisfaction based on reviews.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Not Sure Which Platform Is Right For You?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Take our personalized assessment to get matched with the perfect online therapy platform based on your unique needs and preferences.
              </p>
              <Link to="/tools/matchers/therapy-platform-matcher" className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                Find Your Perfect Match
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Best For You Content</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              This is a placeholder for the specific "Best For You" content based on the current URL path.
            </p>
            <p className="text-gray-600">
              Current path: {location.pathname}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestPage;