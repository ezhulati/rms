import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ExternalLink, Search, Filter, CheckCircle, XCircle, MessageSquare, Video, Phone, DollarSign, Shield, Users, Brain } from 'lucide-react';
import HowWeReviewed from '../components/HowWeReviewed';
import Button from '../components/Button';

const ReviewsPlatforms = () => {
  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="h-5 w-5 fill-current" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<Star key={i} className="h-5 w-5 fill-current" />);
      } else {
        stars.push(<Star key={i} className="h-5 w-5" strokeWidth={1} />);
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
      rating: 4,
      price: '$60-$90/week',
      description: 'The world\'s largest online therapy platform, offering messaging, phone, and video sessions on a subscription model.',
      pros: ['Large therapist network', 'Multiple communication methods', 'Financial aid available'],
      cons: ['No insurance coverage', 'No medication management', 'Response times can vary'],
      bestFor: 'Mild to moderate mental health concerns, flexibility, affordability'
    },
    {
      name: 'Talkspace',
      slug: 'talkspace',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: '$65-$99/week',
      description: 'Online therapy and psychiatry via text, audio, and video sessions, with medication options and insurance coverage.',
      pros: ['Insurance coverage', 'Medication management', 'Structured treatment plans'],
      cons: ['Higher pricing', 'No financial aid program', 'Limited live sessions on basic plan'],
      bestFor: 'Insurance holders, medication needs, comprehensive mental health care'
    },
    {
      name: 'Cerebral',
      slug: 'cerebral',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4,
      price: '$85-$325/month',
      description: 'Subscription-based therapy and medication management for anxiety, depression, ADHD, and insomnia.',
      pros: ['Comprehensive care options', 'Medication delivery', 'Insurance accepted'],
      cons: ['Higher cost for medication plans', 'Not available in all states', 'Limited therapist selection'],
      bestFor: 'Combined therapy and medication management, ADHD treatment'
    },
    {
      name: 'Calmerry',
      slug: 'calmerry',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4,
      price: '$42-$68/week',
      description: 'Affordable online therapy platform offering flexible text and video-based therapy sessions.',
      pros: ['Lower pricing', 'Fast therapist matching', 'Flexible subscription plans'],
      cons: ['Smaller therapist network', 'No insurance coverage', 'Limited communication options'],
      bestFor: 'Budget-conscious users, flexibility, text-based therapy'
    },
    {
      name: 'Online-Therapy.com',
      slug: 'online-therapy',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4,
      price: '$40-$88/week',
      description: 'Specializes in CBT-based therapy with structured programs, including worksheets and yoga resources.',
      pros: ['Comprehensive CBT toolbox', 'Structured approach', 'Self-help resources'],
      cons: ['Limited therapy approaches', 'No insurance coverage', 'Smaller therapist network'],
      bestFor: 'CBT focus, structured therapy, self-help tools'
    },
    {
      name: 'ReGain',
      slug: 'regain',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4,
      price: '$60-$90/week',
      description: 'Relationship and couples counseling with joint therapy sessions and specialized relationship therapists.',
      pros: ['Specialized couples therapists', 'Joint session options', 'Relationship focus'],
      cons: ['No insurance coverage', 'Limited to relationship issues', 'No individual therapy'],
      bestFor: 'Couples therapy, relationship issues, marriage counseling'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Online Therapy Platform Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            In-depth, unbiased reviews of the leading online therapy platforms to help you make an informed decision about your mental health care.
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

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-indigo-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Filter Reviews</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
              <select 
                id="condition" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All Conditions</option>
                <option value="anxiety">Anxiety</option>
                <option value="depression">Depression</option>
                <option value="ptsd">PTSD</option>
                <option value="relationships">Relationships</option>
                <option value="addiction">Addiction</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <select 
                id="price" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All Prices</option>
                <option value="budget">Budget ($40-$60/week)</option>
                <option value="moderate">Moderate ($60-$80/week)</option>
                <option value="premium">Premium ($80+/week)</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-1">Insurance</label>
              <select 
                id="insurance" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All Options</option>
                <option value="yes">Accepts Insurance</option>
                <option value="no">No Insurance Required</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="medication" className="block text-sm font-medium text-gray-700 mb-1">Medication</label>
              <select 
                id="medication" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All Options</option>
                <option value="yes">Offers Medication</option>
                <option value="no">Therapy Only</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <Button variant="primary">
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Featured Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Platform Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BetterHelp Featured Review */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="BetterHelp Review" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800 mr-3">BetterHelp</h3>
                    <div className="flex items-center">
                      <div className="mr-1">
                        {renderStars(4)}
                      </div>
                      <span className="text-gray-600">4.0/5</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    The world's largest online therapy platform, offering messaging, phone, and video sessions on a subscription model.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm">Pros</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Large therapist network</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Multiple communication methods</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Financial aid available</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm">Cons</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start text-sm">
                          <XCircle className="h-4 w-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>No insurance coverage</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <XCircle className="h-4 w-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>No medication management</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <XCircle className="h-4 w-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Response times can vary</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <strong>Price:</strong> $60-$90/week
                    </div>
                    <Link to="/reviews/platforms/betterhelp" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 text-sm">
                      Read full review <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Talkspace Featured Review */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img 
                    src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Talkspace Review" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800 mr-3">Talkspace</h3>
                    <div className="flex items-center">
                      <div className="mr-1">
                        {renderStars(4.5)}
                      </div>
                      <span className="text-gray-600">4.5/5</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    Online therapy and psychiatry via text, audio, and video sessions, with medication options and insurance coverage.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm">Pros</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Insurance coverage</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Medication management</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Structured treatment plans</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm">Cons</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start text-sm">
                          <XCircle className="h-4 w-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Higher pricing</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <XCircle className="h-4 w-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>No financial aid program</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <XCircle className="h-4 w-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Limited live sessions on basic plan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <strong>Price:</strong> $65-$99/week
                    </div>
                    <Link to="/reviews/platforms/talkspace" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 text-sm">
                      Read full review <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Platform Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">All Platform Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div key={platform.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={platform.image} 
                  alt={`${platform.name} Review`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{platform.name}</h3>
                    <div className="flex items-center">
                      <div className="mr-1">
                        {renderStars(platform.rating)}
                      </div>
                      <span className="text-gray-600">{platform.rating}/5</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {platform.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">
                      <strong>Price:</strong> {platform.price}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Best For:</strong> {platform.bestFor}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link to={`/reviews/platforms/${platform.slug}`} className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                      Read review <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                    <a href={`https://www.${platform.slug}.com`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 flex items-center text-sm">
                      Visit site <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Platform Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* General Therapy Platforms */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <MessageSquare className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">General Therapy</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Platforms offering a wide range of therapy services for various mental health conditions.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/reviews/platforms/betterhelp" className="text-indigo-600 hover:text-indigo-800">
                    BetterHelp
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/reviews/platforms/talkspace" className="text-indigo-600 hover:text-indigo-800">
                    Talkspace
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/reviews/platforms/calmerry" className="text-indigo-600 hover:text-indigo-800">
                    Calmerry
                  </Link>
                </li>
              </ul>
              <Button 
                as={Link} 
                to="/reviews/categories/general-therapy" 
                variant="outline" 
                size="sm" 
                icon={ArrowRight}
              >
                View all general platforms
              </Button>
            </div>
            
            {/* Medication + Therapy */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <Brain className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Medication + Therapy</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Platforms that offer both therapy and psychiatric medication management services.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/reviews/platforms/talkspace" className="text-indigo-600 hover:text-indigo-800">
                    Talkspace
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/reviews/platforms/cerebral" className="text-indigo-600 hover:text-indigo-800">
                    Cerebral
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/reviews/platforms/brightside" className="text-indigo-600 hover:text-indigo-800">
                    Brightside
                  </Link>
                </li>
              </ul>
              <Button 
                as={Link} 
                to="/reviews/categories/medication-therapy" 
                variant="outline" 
                size="sm" 
                icon={ArrowRight}
              >
                View all medication platforms
              </Button>
            </div>
            
            {/* Specialized Platforms */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Specialized Platforms</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Platforms focusing on specific demographics, conditions, or therapy approaches.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/reviews/platforms/regain" className="text-indigo-600 hover:text-indigo-800">
                    ReGain (Couples)
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/reviews/platforms/pride-counseling" className="text-indigo-600 hover:text-indigo-800">
                    Pride Counseling (LGBTQ+)
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/reviews/platforms/online-therapy-com" className="text-indigo-600 hover:text-indigo-800">
                    Online-Therapy.com (CBT)
                  </Link>
                </li>
              </ul>
              <Button 
                as={Link} 
                to="/reviews/categories/specialized" 
                variant="outline" 
                size="sm" 
                icon={ArrowRight}
              >
                View all specialized platforms
              </Button>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Platform Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Platform</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Price Range</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Communication</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Insurance</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Medication</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Rating</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">BetterHelp</td>
                  <td className="py-4 px-4">$60-$90/week</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      <div title="Messaging">
                        <MessageSquare className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div title="Video">
                        <Video className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div title="Phone">
                        <Phone className="h-4 w-4 text-indigo-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex">
                      {renderStars(4)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">Affordability, Flexibility</td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">Talkspace</td>
                  <td className="py-4 px-4">$65-$99/week</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      <div title="Messaging">
                        <MessageSquare className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div title="Video">
                        <Video className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div title="Phone">
                        <Phone className="h-4 w-4 text-indigo-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </td>
                  <td className="py-4 px-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex">
                      {renderStars(4.5)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">Insurance, Medication</td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">Cerebral</td>
                  <td className="py-4 px-4">$85-$325/month</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      <div title="Messaging">
                        <MessageSquare className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div title="Video">
                        <Video className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div title="Phone">
                        <Phone className="h-4 w-4 text-indigo-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </td>
                  <td className="py-4 px-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex">
                      {renderStars(4)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">Comprehensive Care, ADHD</td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">Calmerry</td>
                  <td className="py-4 px-4">$42-$68/week</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      <div title="Messaging">
                        <MessageSquare className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div title="Video">
                        <Video className="h-4 w-4 text-indigo-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex">
                      {renderStars(4)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">Budget-Friendly</td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">Online-Therapy.com</td>
                  <td className="py-4 px-4">$40-$88/week</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      <div title="Messaging">
                        <MessageSquare className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div title="Video">
                        <Video className="h-4 w-4 text-indigo-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex">
                      {renderStars(4)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">CBT Focus, Self-Help</td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">ReGain</td>
                  <td className="py-4 px-4">$60-$90/week</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      <div title="Messaging">
                        <MessageSquare className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div title="Video">
                        <Video className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div title="Phone">
                        <Phone className="h-4 w-4 text-indigo-600" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex">
                      {renderStars(4)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">Couples Therapy</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              as={Link} 
              to="/compare/platforms" 
              variant="primary" 
              icon={ArrowRight}
            >
              See detailed platform comparisons
            </Button>
          </div>
        </div>

        {/* How We Review Section */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Not Sure Which Platform Is Right For You?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect online therapy platform based on your unique needs, preferences, and budget.
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

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I choose the right online therapy platform?</h3>
              <p className="text-gray-700">
                Consider your specific needs (type of therapy, communication preferences), budget constraints, insurance requirements, and whether you need medication management. Our detailed reviews and comparison tools can help you identify which platform best meets your unique requirements.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is online therapy as effective as in-person therapy?</h3>
              <p className="text-gray-700">
                Research shows that online therapy can be just as effective as in-person therapy for many conditions, including depression, anxiety, and PTSD. The key is finding a qualified therapist and a platform that offers the communication methods that work best for you.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Which platforms accept insurance?</h3>
              <p className="text-gray-700">
                Talkspace, Cerebral, and Brightside accept insurance from many major providers. BetterHelp and Calmerry don't work directly with insurance companies but may provide receipts for reimbursement. Check our detailed reviews for specific insurance information.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can I get medication through online therapy platforms?</h3>
              <p className="text-gray-700">
                Yes, platforms like Talkspace, Cerebral, and Brightside offer medication management services with licensed psychiatrists or nurse practitioners. Other platforms like BetterHelp focus solely on therapy without medication services.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How much does online therapy cost?</h3>
              <p className="text-gray-700">
                Online therapy typically costs between $40 and $100 per week, depending on the platform, subscription plan, and whether you have insurance coverage. Many platforms offer tiered pricing based on the level of service, and some provide financial aid options.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can I switch therapists if I'm not satisfied?</h3>
              <p className="text-gray-700">
                Yes, most online therapy platforms allow you to switch therapists at no additional cost. The process varies by platform, but it's typically straightforward and can be done through the platform's website or app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPlatforms;
