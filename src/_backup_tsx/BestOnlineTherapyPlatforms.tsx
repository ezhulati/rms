import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Shield, Users, Brain, DollarSign, Award, Search } from 'lucide-react';
import Button from '../components/Button';
import RatingBreakdown from '../components/RatingBreakdown';

const BestOnlineTherapyPlatforms = () => {
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
      id: 1,
      name: 'BetterHelp',
      slug: 'betterhelp',
      image: '/images/concepts/bestonlinetherapyplatforms.jpg',
      rating: 4.8,
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      description: 'The world\'s largest online therapy platform, offering messaging, phone, and video sessions on a subscription model.',
      pros: ['Large network of 25,000+ licensed therapists', 'Multiple communication methods (messaging, live chat, phone, video)', 'Financial aid available for those who qualify', 'Weekly live sessions included in all plans', 'Unlimited messaging with your therapist', 'Easy therapist switching if needed'],
      cons: ['No insurance coverage', 'No medication management', 'Response times can vary between therapists', 'Not suitable for severe mental health conditions'],
      features: ['Unlimited messaging', 'Weekly live sessions', 'Therapist matching algorithm', 'Group webinars', 'Journaling tools', 'Mobile app access'],
      bestFor: 'Mild to moderate mental health concerns, flexibility, affordability'
    },
    {
      id: 2,
      name: 'Talkspace',
      slug: 'talkspace',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: '$65-$99/week',
      priceRange: [65, 99],
      communication: ['messaging', 'video', 'phone'],
      insurance: true,
      medication: true,
      description: 'Online therapy and psychiatry via text, audio, and video sessions, with medication options and insurance coverage.',
      pros: ['Insurance coverage available', 'Medication management services', 'Multiple subscription tiers', 'Specialized therapy options', 'Structured treatment approach', 'Guaranteed response times'],
      cons: ['Higher pricing than some competitors', 'No financial aid program', 'Limited live sessions on basic plan', 'Less flexibility in scheduling'],
      features: ['Unlimited messaging', 'Live video sessions', 'Psychiatry services', 'Insurance integration', 'Progress tracking', 'Specialized programs'],
      bestFor: 'Insurance holders, medication needs, comprehensive mental health care'
    },
    {
      id: 3,
      name: 'Cerebral',
      slug: 'cerebral',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.0,
      price: '$85-$325/month',
      priceRange: [85, 325],
      communication: ['messaging', 'video', 'phone'],
      insurance: true,
      medication: true,
      description: 'Subscription-based therapy and medication management for anxiety, depression, ADHD, and insomnia.',
      pros: ['Comprehensive care options', 'Medication delivery available', 'Insurance accepted', 'Multiple plan options', 'Combined therapy and medication', 'Regular check-ins'],
      cons: ['Higher cost for medication plans', 'Not available in all states', 'Limited therapist selection compared to others', 'Less flexible scheduling options'],
      features: ['Medication management', 'Therapy sessions', 'Care counseling', 'Medication delivery', 'Self-care tools', 'Regular progress tracking'],
      bestFor: 'Combined therapy and medication management, ADHD treatment'
    },
    {
      id: 4,
      name: 'Calmerry',
      slug: 'calmerry',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.0,
      price: '$42-$68/week',
      priceRange: [42, 68],
      communication: ['messaging', 'video'],
      insurance: false,
      medication: false,
      description: 'Affordable online therapy platform offering flexible text and video-based therapy sessions.',
      pros: ['Lower pricing', 'Fast therapist matching', 'Flexible subscription plans', 'No long-term commitments', 'Quick response times', 'User-friendly platform'],
      cons: ['Smaller therapist network', 'No insurance coverage', 'Limited communication options', 'No medication management', 'Newer platform with less track record'],
      features: ['Unlimited messaging', 'Video sessions', 'Therapy toolbox', 'Journal feature', 'Goal tracking', 'Mobile app access'],
      bestFor: 'Budget-conscious users, flexibility, text-based therapy'
    },
    {
      id: 5,
      name: 'Online-Therapy.com',
      slug: 'online-therapy-com',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.0,
      price: '$40-$88/week',
      priceRange: [40, 88],
      communication: ['messaging', 'video'],
      insurance: false,
      medication: false,
      description: 'Specializes in CBT-based therapy with structured programs, including worksheets and yoga resources.',
      pros: ['Comprehensive CBT toolbox', 'Structured approach', 'Self-help resources', 'Daily therapist feedback', 'Yoga and meditation resources', 'Weekly live sessions'],
      cons: ['Limited therapy approaches', 'No insurance coverage', 'Smaller therapist network', 'No medication management', 'Less suitable for complex conditions'],
      features: ['CBT worksheets', 'Live sessions', 'Daily journal', 'Yoga videos', 'Activity plan', 'Progress tracking'],
      bestFor: 'CBT focus, structured therapy, self-help tools'
    }
  ];

  // Rating categories for methodology
  const ratingCategories = [
    {
      name: "Therapist Qualifications",
      score: 4.5,
      description: "We evaluate the credentials, experience, and specializations of therapists on each platform, as well as the vetting process."
    },
    {
      name: "Value & Affordability",
      score: 4.0,
      description: "We assess pricing structures, insurance coverage, financial aid options, and overall value for the services provided."
    },
    {
      name: "User Experience",
      score: 4.5,
      description: "We analyze platform usability, communication options, session quality, and overall client satisfaction based on reviews."
    },
    {
      name: "Privacy & Security",
      score: 4.5,
      description: "We evaluate data protection measures, encryption standards, and compliance with healthcare regulations like HIPAA."
    },
    {
      name: "Communication Options",
      score: 4.0,
      description: "We assess the quality and availability of messaging, live chat, video, and phone session options."
    },
    {
      name: "Specialized Services",
      score: 3.5,
      description: "We review the availability of specialized services like medication management, couples therapy, and specific condition treatments."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Online Therapy Platforms of 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our comprehensive analysis of the top online therapy platforms, based on therapist qualifications, user experience, pricing, and specialized services.
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

        {/* Top Picks Summary */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Top Picks at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Best Overall */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best Overall
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">BetterHelp</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.8)}
                  </div>
                  <span className="text-gray-600">4.8/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                The world's largest online therapy platform with 25,000+ therapists, offering unlimited messaging and weekly live sessions.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $60-$90/week
              </div>
              <Button 
                as={Link} 
                to="/reviews/platforms/betterhelp" 
                variant="outline" 
                size="sm" 
                className="w-full justify-center mb-2"
              >
                Read full review
              </Button>
              <Button 
                as="a"
                href="https://www.betterhelp.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ExternalLink}
                className="w-full justify-center"
              >
                Visit BetterHelp
              </Button>
            </div>
            
            {/* Best with Insurance */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best with Insurance
              </div>
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
                Leading platform with insurance coverage and integrated psychiatric services for medication management.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $65-$99/week
              </div>
              <Button 
                as={Link} 
                to="/reviews/platforms/talkspace" 
                variant="outline" 
                size="sm" 
                className="w-full justify-center mb-2"
              >
                Read full review
              </Button>
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
            
            {/* Best Budget Option */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best Budget Option
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Calmerry</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.0)}
                  </div>
                  <span className="text-gray-600">4.0/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Affordable online therapy platform with flexible subscription plans and quick therapist matching.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $42-$68/week
              </div>
              <Button 
                as={Link} 
                to="/reviews/platforms/calmerry" 
                variant="outline" 
                size="sm" 
                className="w-full justify-center mb-2"
              >
                Read full review
              </Button>
              <Button 
                as="a"
                href="https://www.calmerry.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ExternalLink}
                className="w-full justify-center"
              >
                Visit Calmerry
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed Reviews of the Best Online Therapy Platforms</h2>
          
          {platforms.map((platform, index) => (
            <div key={platform.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
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
                      <div className="flex items-center">
                        <div className="flex space-x-1 mr-2">
                          {platform.communication.includes('messaging') && (
                            <MessageSquare className="h-5 w-5 text-indigo-600" title="Messaging" />
                          )}
                          {platform.communication.includes('video') && (
                            <Video className="h-5 w-5 text-indigo-600" title="Video" />
                          )}
                          {platform.communication.includes('phone') && (
                            <Phone className="h-5 w-5 text-indigo-600" title="Phone" />
                          )}
                        </div>
                        <span className="text-gray-600">Communication</span>
                      </div>
                      <div className="flex items-center">
                        {platform.insurance ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        <span className="text-gray-600">Insurance Coverage</span>
                      </div>
                      <div className="flex items-center">
                        {platform.medication ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        <span className="text-gray-600">Medication Management</span>
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
                        href={`https://www.${platform.slug.replace('-', '')}.com`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        variant="primary"
                        size="sm"
                        icon={ExternalLink}
                        className="w-full justify-center"
                      >
                        Visit Website
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 md:pl-8">
                    <h4 className="font-bold text-gray-800 mb-3">Why We Recommend It</h4>
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
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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

        {/* How to Choose Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Online Therapy Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Consider Your Specific Needs</h3>
              <p className="text-gray-600 mb-4">
                The "best" platform varies depending on your unique situation. Consider these factors when making your decision:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-700">Mental Health Concerns</span>
                    <p className="text-gray-600 text-sm">Different platforms specialize in different conditions. Some excel at anxiety and depression treatment, while others offer specialized services for PTSD, OCD, or eating disorders.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-700">Communication Preferences</span>
                    <p className="text-gray-600 text-sm">Consider whether you prefer text-based therapy, video sessions, phone calls, or a combination. Some platforms offer more flexibility than others.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <DollarSign className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-700">Budget Constraints</span>
                    <p className="text-gray-600 text-sm">Prices range from $40 to $100+ per week. Consider whether you need financial aid options or insurance coverage.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Considerations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-700">Insurance Coverage</span>
                    <p className="text-gray-600 text-sm">If you have insurance that covers mental health, platforms like Talkspace and Cerebral may be more cost-effective for you.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-700">Therapist Selection</span>
                    <p className="text-gray-600 text-sm">Consider the size of the therapist network and how easy it is to switch therapists if needed.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-700">Medication Needs</span>
                    <p className="text-gray-600 text-sm">If you need medication management alongside therapy, platforms like Talkspace and Cerebral offer integrated psychiatric services.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-700">Specialized Services</span>
                    <p className="text-gray-600 text-sm">Some platforms offer specialized services like couples therapy, teen counseling, or LGBTQ+ focused therapy.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              For most people seeking online therapy, we recommend starting with <strong>BetterHelp</strong> due to its large therapist network, flexible communication options, and reasonable pricing with financial aid options. However, if you have insurance coverage or need medication management, <strong>Talkspace</strong> may be a better fit.
            </p>
            <p className="text-gray-700">
              Still unsure? Take our <Link to="/tools/matchers/therapy-platform-matcher" className="text-indigo-600 hover:text-indigo-800 font-medium">personalized therapy platform matcher</Link> to find your perfect fit based on your specific needs and preferences.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Side-by-Side Comparison</h2>
          
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
                {platforms.map((platform) => (
                  <tr key={platform.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">{platform.name}</td>
                    <td className="py-4 px-4">{platform.price}</td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-1">
                        {platform.communication.includes('messaging') && (
                          <MessageSquare className="h-4 w-4 text-indigo-600" title="Messaging" />
                        )}
                        {platform.communication.includes('video') && (
                          <Video className="h-4 w-4 text-indigo-600" title="Video" />
                        )}
                        {platform.communication.includes('phone') && (
                          <Phone className="h-4 w-4 text-indigo-600" title="Phone" />
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {platform.insurance ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {platform.medication ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex">
                        {renderStars(platform.rating)}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm">{platform.bestFor.split(',')[0]}</td>
                  </tr>
                ))}
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

        {/* Rating Methodology */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How We Rate Mental Health Platforms</h2>
          
          <div className="mb-8">
            <p className="text-gray-600 mb-6">
              Our comprehensive evaluation process involves hands-on testing, user feedback analysis, and expert consultation to provide you with accurate, unbiased information. Here's how we rate each platform:
            </p>
            
            <RatingBreakdown 
              overallRating={4.2} 
              categories={ratingCategories}
              showDescription={true}
            />
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Commitment to You</h3>
            <p className="text-gray-700 mb-4">
              At RealMindSolutions, we're committed to providing honest, thorough, and unbiased reviews. We regularly update our reviews to reflect changes in platforms, pricing, and features. Our goal is to help you find the right mental health solution for your unique needs, preferences, and budget.
            </p>
            <p className="text-gray-700">
              We maintain editorial independence and do not accept payment for favorable reviews. While we may receive affiliate commissions when you sign up through our links (at no additional cost to you), this never influences our ratings or recommendations. Your mental health journey matters to us, and we're dedicated to providing information you can trust.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is online therapy as effective as in-person therapy?</h3>
              <p className="text-gray-700">
                Research shows that online therapy can be just as effective as in-person therapy for many conditions, including depression, anxiety, and PTSD. A 2023 meta-analysis of 32 studies found comparable outcomes between online and traditional therapy, with online approaches showing slightly better retention rates for anxiety disorders. The key is finding a qualified therapist and a platform that offers the communication methods that work best for you.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How much does online therapy cost compared to traditional therapy?</h3>
              <p className="text-gray-700">
                Online therapy typically costs between $40 and $100 per week, which is significantly less than traditional in-person therapy that can range from $100 to $200 per session. Additionally, online therapy often includes unlimited messaging between sessions, providing more continuous support than the traditional weekly model. Some online platforms also accept insurance or offer financial aid, making them even more affordable.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can I use insurance for online therapy?</h3>
              <p className="text-gray-700">
                Yes, some platforms like Talkspace and Cerebral accept insurance from many major providers. Others like BetterHelp don't work directly with insurance companies but may provide receipts (superbills) that you can submit to your insurance for potential reimbursement. Check with your insurance provider about coverage for telehealth services and whether they have partnerships with specific online therapy platforms.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I know if my therapist is qualified?</h3>
              <p className="text-gray-700">
                All reputable online therapy platforms require their therapists to be licensed mental health professionals with valid credentials in their state of practice. They typically have at least a master's degree and several years of clinical experience. Platforms like BetterHelp and Talkspace have rigorous vetting processes and verify licenses and credentials before allowing therapists on their platforms. You can usually view your therapist's credentials, specializations, and experience on their profile.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">What if I don't like my assigned therapist?</h3>
              <p className="text-gray-700">
                Most online therapy platforms make it easy to switch therapists at no additional cost. This is typically done through the platform's website or app with just a few clicks, and there's usually no additional cost. Finding the right therapeutic relationship is important, so don't hesitate to request a change if you don't feel comfortable or aren't making progress with your current therapist.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is online therapy secure and private?</h3>
              <p className="text-gray-700">
                Reputable online therapy platforms use bank-grade encryption to protect your communications and personal information. They are HIPAA-compliant and follow strict privacy protocols. Your therapy sessions and messages are confidential, just as they would be in traditional therapy. However, it's always a good idea to review a platform's privacy policy and security measures before signing up.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Therapy Journey?</h2>
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

        {/* Related Content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/compare/platforms/betterhelp-vs-talkspace" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">BetterHelp vs Talkspace</h3>
              <p className="text-gray-600 text-sm">A detailed comparison of the two largest online therapy platforms to help you decide which is right for you.</p>
            </Link>
            <Link to="/best/conditions/best-for-anxiety" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Best Online Therapy for Anxiety</h3>
              <p className="text-gray-600 text-sm">Discover the top platforms specifically for anxiety treatment, with specialized approaches and therapists.</p>
            </Link>
            <Link to="/guides/financial/affordable-therapy-options" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Finding Affordable Therapy</h3>
              <p className="text-gray-600 text-sm">A comprehensive guide to accessing quality mental health care on any budget, including free and low-cost options.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOnlineTherapyPlatforms;