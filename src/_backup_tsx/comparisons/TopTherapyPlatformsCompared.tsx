import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain, Search } from 'lucide-react';
import Button from '../../components/Button';
import HowWeReviewed from '../../components/HowWeReviewed';

const TopTherapyPlatformsCompared = () => {
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
      name: 'BetterHelp',
      slug: 'betterhelp',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: '$60-$90/week',
      description: 'The largest online therapy platform with a vast network of licensed therapists and flexible communication options.',
      pros: [
        'Largest network of therapists',
        'Multiple communication methods',
        'Financial aid available',
        'Quick therapist matching'
      ],
      cons: [
        'No insurance coverage',
        'No medication management',
        'Therapist changes can be difficult',
        'Limited specialized services'
      ],
      features: [
        'Text therapy',
        'Video sessions',
        'Phone sessions',
        'Therapist matching'
      ],
      bestFor: 'General therapy needs with flexible communication options'
    },
    {
      name: 'Talkspace',
      slug: 'talkspace',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: '$65-$99/week',
      description: 'Comprehensive online therapy platform offering therapy and psychiatric services with insurance coverage options.',
      pros: [
        'Insurance coverage available',
        'Medication management',
        'Structured therapy approach',
        'Multiple subscription tiers'
      ],
      cons: [
        'Higher price point',
        'Less flexible scheduling',
        'Response times can vary',
        'Limited financial aid'
      ],
      features: [
        'Text therapy',
        'Video sessions',
        'Psychiatry services',
        'Insurance coverage'
      ],
      bestFor: 'Those seeking therapy and medication management with insurance coverage'
    },
    {
      name: 'Cerebral',
      slug: 'cerebral',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.2,
      price: '$85-$325/month',
      description: 'Comprehensive mental healthcare platform offering therapy, medication management, and coaching services.',
      pros: [
        'Comprehensive care plans',
        'Medication delivery available',
        'Insurance coverage options',
        'Monthly subscription model'
      ],
      cons: [
        'Limited to certain conditions',
        'Not available in all states',
        'Higher cost for comprehensive plans',
        'Newer platform with less history'
      ],
      features: [
        'Medication management',
        'Therapy sessions',
        'Care counseling',
        'Insurance coverage'
      ],
      bestFor: 'Those seeking combined therapy and medication management for anxiety, depression, insomnia, or ADHD'
    },
    {
      name: 'Calmerry',
      slug: 'calmerry',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.0,
      price: '$42-$68/week',
      description: 'Affordable online therapy platform with flexible subscription plans and licensed therapists.',
      pros: [
        'More affordable pricing',
        'Flexible subscription options',
        'No long-term commitment',
        'Licensed therapists only'
      ],
      cons: [
        'Smaller therapist network',
        'No insurance coverage',
        'Limited to messaging and video',
        'Newer platform with less history'
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
      name: 'Brightside',
      slug: 'brightside',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.0,
      price: '$95-$349/month',
      description: 'Specialized platform for depression and anxiety treatment with data-driven medication management and therapy.',
      pros: [
        'Specialized in depression and anxiety',
        'Data-driven medication approach',
        'Insurance coverage options',
        'Structured therapy program'
      ],
      cons: [
        'Limited to depression and anxiety',
        'Higher price point',
        'Less flexible therapy approach',
        'Smaller therapist network'
      ],
      features: [
        'Medication management',
        'Therapy sessions',
        'Progress tracking',
        'Insurance coverage'
      ],
      bestFor: 'Those specifically seeking treatment for depression or anxiety with a data-driven approach'
    }
  ];

  // Comparison categories
  const categories = [
    {
      name: 'Pricing',
      icon: DollarSign,
      description: 'We compare subscription costs, available plans, discounts, and overall value for the services provided.'
    },
    {
      name: 'Communication Options',
      icon: MessageSquare,
      description: 'We evaluate the quality and availability of messaging, live chat, video, and phone session options.'
    },
    {
      name: 'Therapist Qualifications',
      icon: Users,
      description: 'We assess therapist credentials, specializations, vetting process, and matching systems.'
    },
    {
      name: 'User Experience',
      icon: Star,
      description: 'We analyze platform usability, app quality, customer service, and overall client satisfaction.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Top 5 Online Therapy Platforms Compared (2025)</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive comparison of the leading online therapy platforms to help you find the perfect match for your mental health needs.
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

        {/* Methodology */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How We Compare Online Therapy Platforms</h2>
          <p className="text-gray-600 mb-8">
            Our comprehensive comparison methodology evaluates online therapy platforms across multiple dimensions to provide you with accurate, unbiased information for making an informed decision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map(category => (
              <div key={category.name} className="bg-gray-50 rounded-lg p-6">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">At-a-Glance Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Platform</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Price Range</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Communication Methods</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Insurance</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Medication</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Rating</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map(platform => (
                  <tr key={platform.slug} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{platform.name}</td>
                    <td className="py-3 px-4 text-center">{platform.price}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center space-x-1">
                        <MessageSquare className="h-4 w-4 text-indigo-600" aria-label="Messaging" />
                        <Video className="h-4 w-4 text-indigo-600" aria-label="Video" />
                        {(platform.slug === 'betterhelp' || platform.slug === 'talkspace') && (
                          <Phone className="h-4 w-4 text-indigo-600" aria-label="Phone" />
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {platform.slug === 'betterhelp' || platform.slug === 'calmerry' ? (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {platform.slug === 'betterhelp' || platform.slug === 'calmerry' ? (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">
                        {renderStars(platform.rating)}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{platform.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Platform Comparisons */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed Platform Reviews</h2>
          
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

        {/* Head-to-Head Comparisons */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Head-to-Head Comparisons</h2>
          <p className="text-gray-600 mb-8">
            Looking for a direct comparison between specific platforms? Check out our detailed head-to-head analyses:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/compare/platforms/betterhelp-vs-talkspace" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">BetterHelp vs Talkspace</h3>
              <p className="text-gray-600 text-sm mb-3">Compare the two largest online therapy platforms.</p>
              <div className="flex justify-between items-center">
                <span className="text-indigo-600 text-sm">Read comparison</span>
                <ArrowRight className="h-4 w-4 text-indigo-600" />
              </div>
            </Link>
            
            <Link to="/compare/platforms/talkspace-vs-cerebral" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Talkspace vs Cerebral</h3>
              <p className="text-gray-600 text-sm mb-3">Compare these platforms' approaches to therapy and medication management.</p>
              <div className="flex justify-between items-center">
                <span className="text-indigo-600 text-sm">Read comparison</span>
                <ArrowRight className="h-4 w-4 text-indigo-600" />
              </div>
            </Link>
            
            <Link to="/compare/platforms/betterhelp-vs-calmerry" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">BetterHelp vs Calmerry</h3>
              <p className="text-gray-600 text-sm mb-3">Compare the largest platform with a more affordable alternative.</p>
              <div className="flex justify-between items-center">
                <span className="text-indigo-600 text-sm">Read comparison</span>
                <ArrowRight className="h-4 w-4 text-indigo-600" />
              </div>
            </Link>
          </div>
        </div>

        {/* Specialized Needs */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Finding the Right Platform for Specialized Needs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Insurance Coverage</h3>
              <p className="text-gray-600 mb-4">
                If using insurance is a priority, consider Talkspace, Cerebral, or Brightside, which accept many insurance plans.
              </p>
              <Link to="/compare/roundups/insurance-friendly-platforms" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Insurance-friendly platforms <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Budget Options</h3>
              <p className="text-gray-600 mb-4">
                For more affordable therapy, consider Calmerry or explore BetterHelp's financial aid program.
              </p>
              <Link to="/compare/alternatives/affordable-betterhelp-alternatives" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Affordable alternatives <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Specific Conditions</h3>
              <p className="text-gray-600 mb-4">
                For specialized treatment of specific conditions, platforms like Brightside (depression/anxiety) may be more effective.
              </p>
              <Link to="/best/conditions" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Best platforms by condition <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I choose the right online therapy platform?</h3>
              <p className="text-gray-600">
                Consider your specific needs (type of therapy, communication preferences), budget constraints, insurance requirements, and whether you need medication management. Our detailed comparisons can help you identify which platform best meets your unique requirements.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is online therapy as effective as in-person therapy?</h3>
              <p className="text-gray-600">
                Research shows that online therapy can be just as effective as in-person therapy for many conditions, including depression, anxiety, and PTSD. The key is finding a qualified therapist and a platform that offers the communication methods that work best for you.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How much does online therapy typically cost?</h3>
              <p className="text-gray-600">
                Online therapy platforms typically range from $40 to $100 per week, with most falling in the $60-$90 range. Platforms with medication management services may cost more. Insurance coverage and financial aid programs can significantly reduce these costs.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can I get medication through online therapy platforms?</h3>
              <p className="text-gray-600">
                Yes, platforms like Talkspace, Cerebral, and Brightside offer medication management services with licensed psychiatrists or nurse practitioners. Other platforms like BetterHelp focus solely on therapy without medication services.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect Therapy Match</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the online therapy platform that best fits your unique needs, preferences, and budget.
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
        
        {/* How We Review Section */}
        <div className="mt-16">
          <HowWeReviewed />
        </div>
      </div>
    </div>
  );
};

export default TopTherapyPlatformsCompared;
