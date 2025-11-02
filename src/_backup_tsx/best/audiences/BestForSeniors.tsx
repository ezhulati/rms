import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Search, Shield, Users, Heart, DollarSign } from 'lucide-react';
import Button from '../../../components/Button';
import RatingBreakdown from '../../../components/RatingBreakdown';

const BestForSeniors = () => {
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
      image: '/images/concepts/bestforseniors.jpg',
      rating: 4.7,
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      description: 'Large network with therapists experienced in senior-specific issues and flexible communication options.',
      pros: ['Large network of experienced therapists', 'Multiple communication methods', 'Financial aid for seniors', 'Easy therapist switching', 'Weekly live sessions', 'User-friendly interface'],
      cons: ['No insurance coverage', 'No medication management', 'Response times vary', 'Technology learning curve for some'],
      features: ['Age-specific matching', 'Grief counseling', 'Retirement transition support', 'Health-related anxiety expertise', 'Relationship counseling', 'Mobile app access'],
      bestFor: 'Tech-comfortable seniors seeking flexible therapy options with a wide selection of experienced therapists'
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
      description: 'Comprehensive platform with insurance coverage and medication management, ideal for seniors with Medicare.',
      pros: ['Insurance coverage including Medicare', 'Medication management', 'Senior-friendly therapist filtering', 'Integrated care', 'Psychiatric services', 'Health condition expertise'],
      cons: ['Higher pricing', 'Limited live sessions on basic plan', 'Technology learning curve', 'Less specialized for seniors'],
      features: ['Medicare acceptance', 'Psychiatric services', 'Insurance benefits', 'Multiple therapy approaches', 'Medication delivery', 'Secure messaging'],
      bestFor: 'Seniors seeking therapy with medication management and Medicare or other insurance coverage'
    },
    {
      id: 3,
      name: 'Amwell',
      slug: 'amwell',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: '$109-$129/session',
      priceRange: [109, 129],
      communication: ['video'],
      insurance: true,
      medication: true,
      description: 'Telehealth platform with strong Medicare acceptance, medication management, and integration with medical care.',
      pros: ['Broad Medicare acceptance', 'Medication management', 'Medical care integration', 'Same-day appointments', 'Experienced geriatric specialists', 'Simple interface'],
      cons: ['Per-session pricing', 'Video-only format', 'No unlimited messaging', 'Less specialized resources'],
      features: ['Medicare coverage', 'Psychiatric services', 'Medical care integration', 'Licensed specialists', 'Quick appointments', 'Simple technology'],
      bestFor: 'Seniors with Medicare seeking integrated mental and physical healthcare with medication management'
    },
    {
      id: 4,
      name: 'Calmerry',
      slug: 'calmerry',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: '$42-$68/week',
      priceRange: [42, 68],
      communication: ['messaging', 'video'],
      insurance: false,
      medication: false,
      description: 'Affordable platform with a simple interface and therapists experienced in issues common among seniors.',
      pros: ['Lower pricing', 'Simple user interface', 'Flexible plans', 'Specialized therapists', 'No long-term commitments', 'User-friendly platform'],
      cons: ['No insurance coverage', 'No medication management', 'No phone sessions', 'Newer platform with fewer therapists'],
      features: ['Text therapy', 'Video sessions', 'Age-related resources', 'Therapist matching', 'Client portal', 'Progress tracking'],
      bestFor: 'Budget-conscious seniors seeking an affordable, user-friendly therapy platform'
    },
    {
      id: 5,
      name: 'Online-Therapy.com',
      slug: 'online-therapy',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.2,
      price: '$40-$88/week',
      priceRange: [40, 88],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      description: 'Structured CBT-focused platform with comprehensive self-help tools and resources suitable for seniors.',
      pros: ['Structured CBT program', 'Comprehensive toolbox', 'Daily therapist support', 'Worksheets and activities', 'Mindfulness resources', 'Lower starting price'],
      cons: ['No insurance coverage', 'No medication management', 'Limited therapy approaches', 'Technology learning curve'],
      features: ['CBT worksheets', 'Journaling tools', 'Activity planning', 'Mindfulness exercises', 'Live weekly sessions', 'Self-help courses'],
      bestFor: 'Seniors who prefer a structured approach to therapy with comprehensive self-help tools'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Online Therapy for Seniors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find specialized online therapy platforms that understand and support the unique mental health needs of older adults.
          </p>
          <div className="flex justify-center">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="primary" 
              size="lg" 
              icon={Search}
            >
              Find your perfect senior therapy match
            </Button>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Picks for Senior Therapy at a Glance</h2>
          
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
                Large network with therapists experienced in senior-specific issues and flexible communication options.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $60-$90/week
              </div>
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
            
            {/* Best with Medicare */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best with Medicare
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Amwell</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.5)}
                  </div>
                  <span className="text-gray-600">4.5/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Telehealth platform with strong Medicare acceptance, medication management, and integration with medical care.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $109-$129/session
              </div>
              <Button 
                as="a"
                href="https://www.amwell.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ArrowRight}
                className="w-full justify-center"
              >
                Visit Amwell
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
                Affordable platform with a simple interface and therapists experienced in issues common among seniors.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $42-$68/week
              </div>
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

        {/* Understanding Senior Therapy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Senior Mental Health Needs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Common Mental Health Concerns for Seniors</h3>
              <p className="text-gray-600 mb-4">
                Older adults face unique mental health challenges that can benefit from specialized therapeutic approaches:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Depression and isolation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Anxiety about health and independence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Grief and loss of loved ones</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Adjustment to retirement and life changes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Cognitive changes and concerns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Caregiver stress and family dynamics</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Effective therapy for seniors addresses these concerns with approaches that respect life experience and wisdom while providing practical support for current challenges.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Benefits of Online Therapy for Seniors</h3>
              <p className="text-gray-600 mb-4">
                Online therapy offers several advantages that make it particularly suitable for older adults:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Accessibility without transportation barriers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Comfort of receiving therapy in familiar surroundings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Reduced exposure risk for those with health concerns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Flexible scheduling that accommodates daily routines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Multiple communication options (text, phone, video)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Access to specialists regardless of geographic location</span>
                </li>
              </ul>
              <p className="text-gray-600">
                While there may be a technology learning curve for some seniors, many platforms offer user-friendly interfaces and support to help overcome these challenges.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Important Considerations for Senior Therapy</h3>
            <p className="text-gray-700 mb-4">
              When evaluating online therapy platforms for seniors, these factors are particularly important:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Medicare Acceptance</h4>
                    <p className="text-gray-600 text-sm">
                      Many seniors rely on Medicare, so platforms that accept this insurance can significantly reduce costs
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">User-Friendly Interface</h4>
                    <p className="text-gray-600 text-sm">
                      Simple navigation, clear text, and minimal technical requirements make platforms more accessible
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Multiple Communication Options</h4>
                    <p className="text-gray-600 text-sm">
                      Flexibility to choose between text, phone, or video based on comfort level and hearing/vision needs
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Integration with Medical Care</h4>
                    <p className="text-gray-600 text-sm">
                      Platforms that coordinate with physical healthcare providers can offer more comprehensive support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              The platforms we recommend have been evaluated with these senior-specific considerations in mind.
            </p>
          </div>
        </div>

        {/* Detailed Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed Reviews of the Best Senior Therapy Platforms</h2>
          
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
                      <div className="flex items-center">
                        <div className="flex space-x-1 mr-2">
                          {platform.communication.includes('messaging') && (
                            <MessageSquare className="h-4 w-4 text-indigo-600" />
                          )}
                          {platform.communication.includes('video') && (
                            <Video className="h-4 w-4 text-indigo-600" />
                          )}
                          {platform.communication.includes('phone') && (
                            <Phone className="h-4 w-4 text-indigo-600" />
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
                        as="a"
                        href={`https://www.${platform.slug.replace('-', '')}.com`} 
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
                    <h4 className="font-bold text-gray-800 mb-3">Why We Recommend It for Seniors</h4>
                    <p className="text-gray-600 mb-4">
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
                      <h5 className="font-bold text-gray-800 mb-3">Senior-Specific Features</h5>
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

        {/* How to Choose */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Senior Therapy Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Specific Needs</h3>
              <p className="text-gray-600">
                Consider the specific mental health concerns you're facing, such as grief, depression, anxiety, or adjustment to life changes, and look for platforms with therapists experienced in these areas.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Insurance & Budget</h3>
              <p className="text-gray-600">
                If you have Medicare or other insurance, prioritize platforms that accept your coverage. Otherwise, consider your budget and look for platforms offering financial aid for seniors.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Communication Preference</h3>
              <p className="text-gray-600">
                Consider your comfort level with technology and communication preferences. Some seniors prefer phone sessions over video, while others appreciate the option for text-based communication.
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              For most seniors seeking online therapy, we recommend:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>BetterHelp</strong> for most seniors comfortable with technology who want flexible therapy options and a wide selection of experienced therapists</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Amwell</strong> for seniors with Medicare who need integrated mental and physical healthcare with medication management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Calmerry</strong> for budget-conscious seniors seeking an affordable, user-friendly therapy platform</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Therapy Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect online therapy platform for your unique needs.
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
              to="/learn/fundamentals/therapy-types-explained" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Learn About Therapy Types
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestForSeniors;
