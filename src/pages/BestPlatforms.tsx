import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Search, Filter, ExternalLink, DollarSign, Brain, Users } from 'lucide-react';
import Button from '../components/Button';

const BestPlatforms = () => {
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
      id: 1,
      name: 'BetterHelp',
      slug: 'betterhelp',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
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

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Online Therapy Platforms</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the top-rated online therapy platforms categorized by different needs, preferences, and specialties to find your perfect match.
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

        {/* Platform Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              to="/best/platforms/best-online-therapy-platforms" 
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
              to="/best/platforms/best-medication-therapy-platforms" 
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
                <Link to="/reviews/platforms/online-therapy" className="text-indigo-600 hover:text-indigo-800">
                  Online-Therapy.com (CBT)
                </Link>
              </li>
            </ul>
            <Button 
              as={Link} 
              to="/best/platforms/best-specialized-platforms" 
              variant="outline" 
              size="sm" 
              icon={ArrowRight}
            >
              View all specialized platforms
            </Button>
          </div>
        </div>

        {/* Featured Platforms */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Online Therapy Platforms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.slice(0, 3).map((platform) => (
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
                    <a href={`https://www.${platform.slug.replace('-', '')}.com`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 flex items-center text-sm">
                      Visit site <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              as={Link} 
              to="/best/platforms/best-online-therapy-platforms" 
              variant="primary" 
              icon={ArrowRight}
            >
              View all top-rated platforms
            </Button>
          </div>
        </div>

        {/* Platform Comparison */}
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
                {platforms.map((platform) => (
                  <tr key={platform.slug} className="border-b hover:bg-gray-50">
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

        {/* Platform Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Find the Right Platform for Your Needs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* By Price */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <DollarSign className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">By Price Range</h3>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/best/specific-needs/best-affordable-therapy" className="text-indigo-600 hover:text-indigo-800">
                    Budget-Friendly Options (Under $50/week)
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/best/specific-needs/mid-range-therapy-options" className="text-indigo-600 hover:text-indigo-800">
                    Mid-Range Options ($50-$80/week)
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/best/specific-needs/premium-therapy-services" className="text-indigo-600 hover:text-indigo-800">
                    Premium Services ($80+/week)
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/best/specific-needs/best-insurance-coverage" className="text-indigo-600 hover:text-indigo-800">
                    Best Insurance Coverage
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* By Condition */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <Brain className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">By Condition</h3>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/best/conditions/best-for-anxiety" className="text-indigo-600 hover:text-indigo-800">
                    Best for Anxiety
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/best/conditions/best-for-depression" className="text-indigo-600 hover:text-indigo-800">
                    Best for Depression
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/best/conditions/best-for-ptsd" className="text-indigo-600 hover:text-indigo-800">
                    Best for PTSD
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <Link to="/best/conditions/best-for-relationships" className="text-indigo-600 hover:text-indigo-800">
                    Best for Relationship Issues
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-16">
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
              <h3 className="text-lg font-bold text-gray-800 mb-2">What's the difference between general and specialized therapy platforms?</h3>
              <p className="text-gray-700">
                General therapy platforms like BetterHelp and Talkspace offer a wide range of mental health services for various conditions, while specialized platforms focus on specific demographics (like couples or LGBTQ+ individuals) or treatment approaches (like CBT). Specialized platforms often provide therapists with expertise in those specific areas.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I know which platform is right for me?</h3>
              <p className="text-gray-700">
                Consider your specific needs (type of therapy, communication preferences), budget constraints, insurance requirements, and whether you need medication management. Our detailed reviews and comparison tools can help you identify which platform best meets your unique requirements.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Are online therapy platforms as effective as in-person therapy?</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPlatforms;