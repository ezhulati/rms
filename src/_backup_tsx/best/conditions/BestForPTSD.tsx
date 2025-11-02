import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Search, Brain, Shield, Users } from 'lucide-react';
import Button from '../../../components/Button';

const BestForPTSD = () => {
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
      image: '/images/concepts/bestforptsd.jpg',
      rating: 4.7,
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      description: 'Large network of trauma-informed therapists with flexible communication options.',
      pros: ['Many trauma specialists', 'Multiple communication methods', 'Financial aid available', 'Easy therapist switching'],
      cons: ['No insurance coverage', 'No medication management', 'Response times vary', 'Not for severe PTSD'],
      features: ['EMDR-trained therapists', 'Trauma-focused CBT', 'Crisis support', 'Secure messaging'],
      bestFor: 'Mild to moderate PTSD with flexible therapy needs'
    },
    {
      id: 2,
      name: 'Talkspace',
      slug: 'talkspace',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      price: '$65-$99/week',
      priceRange: [65, 99],
      communication: ['messaging', 'video', 'phone'],
      insurance: true,
      medication: true,
      description: 'Comprehensive platform offering both trauma therapy and medication management.',
      pros: ['Insurance coverage', 'Medication management', 'Trauma specialists', 'Integrated care'],
      cons: ['Higher pricing', 'No financial aid', 'Limited live sessions on basic plan', 'Scheduling restrictions'],
      features: ['Psychiatric services', 'Trauma-focused therapy', 'Insurance coverage', 'Multiple plans'],
      bestFor: 'PTSD treatment with medication management needs'
    },
    {
      id: 3,
      name: 'Calmerry',
      slug: 'calmerry',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: '$42-$68/week',
      priceRange: [42, 68],
      communication: ['messaging', 'video'],
      insurance: false,
      medication: false,
      description: 'Affordable platform with trauma-informed therapists and flexible plans.',
      pros: ['Lower pricing', 'Quick matching', 'Flexible plans', 'Trauma-informed care'],
      cons: ['No insurance coverage', 'Limited therapist selection', 'No medication management', 'Basic features only'],
      features: ['Trauma counseling', 'Flexible scheduling', 'Affordable plans', 'Video sessions'],
      bestFor: 'Budget-conscious individuals seeking trauma support'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Online Therapy for PTSD</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare the top-rated online therapy platforms specializing in PTSD and trauma treatment.
          </p>
          <div className="flex justify-center">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="primary" 
              size="lg" 
              icon={Search}
            >
              Find your perfect PTSD therapy match
            </Button>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Picks for PTSD Treatment</h2>
          
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
                    {renderStars(4.7)}
                  </div>
                  <span className="text-gray-600">4.7/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Large network of trauma specialists with flexible communication options and comprehensive PTSD support.
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
                icon={ArrowRight}
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
                    {renderStars(4.6)}
                  </div>
                  <span className="text-gray-600">4.6/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive PTSD treatment with insurance coverage and medication management options.
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
                icon={ArrowRight}
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
                    {renderStars(4.3)}
                  </div>
                  <span className="text-gray-600">4.3/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Affordable trauma-informed therapy with flexible communication options.
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
                icon={ArrowRight}
                className="w-full justify-center"
              >
                Visit Calmerry
              </Button>
            </div>
          </div>
        </div>

        {/* Understanding PTSD Treatment */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Online PTSD Treatment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Evidence-Based Approaches</h3>
              <p className="text-gray-600 mb-4">
                Effective online PTSD treatment typically includes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Trauma-focused cognitive behavioral therapy (TF-CBT)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Eye Movement Desensitization and Reprocessing (EMDR)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Cognitive Processing Therapy (CPT)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Exposure therapy techniques</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Important Platform Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Trauma-informed therapists with specialized training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Multiple communication options for comfort and safety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Crisis support and safety planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Secure and confidential platform</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed Platform Reviews for PTSD Treatment</h2>
          
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
                        <div className="flex space-x-1 mr-2">
                          {platform.communication.includes('messaging') && (
                            <MessageSquare className="h-4 w-4 text-indigo-600" aria-label="Messaging" />
                          )}
                          {platform.communication.includes('video') && (
                            <Video className="h-4 w-4 text-indigo-600" aria-label="Video" />
                          )}
                          {platform.communication.includes('phone') && (
                            <Phone className="h-4 w-4 text-indigo-600" aria-label="Phone" />
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
                    <h4 className="font-bold text-gray-800 mb-3">Why We Recommend It for PTSD</h4>
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
                      <h5 className="font-bold text-gray-800 mb-3">PTSD-Specific Features</h5>
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

        {/* Choosing the Right Platform */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right PTSD Treatment Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Treatment Approach</h3>
              <p className="text-gray-600">
                Look for platforms offering evidence-based trauma treatments like TF-CBT, EMDR, or CPT with trauma-informed therapists.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Safety & Support</h3>
              <p className="text-gray-600">
                Ensure the platform offers crisis support, safety planning, and a secure environment for processing trauma.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Communication Style</h3>
              <p className="text-gray-600">
                Consider which communication methods feel most comfortable and safe for discussing trauma-related issues.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              For most people seeking PTSD treatment online, we recommend:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>BetterHelp</strong> for those seeking flexible, affordable trauma therapy with a large selection of specialists</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Talkspace</strong> for those needing both therapy and medication management with insurance coverage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Calmerry</strong> for those seeking affordable trauma-informed care with flexible scheduling</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Healing Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect online therapy platform for treating your PTSD.
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
              to="/tools/assessments/ptsd-assessment" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Take PTSD Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestForPTSD;
