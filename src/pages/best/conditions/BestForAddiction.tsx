import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, Brain, Search, ExternalLink, Shield, Users, MessageSquare, Video, Phone, Calendar, DollarSign } from 'lucide-react';
import Button from '../../../components/Button';

const BestForAddiction = () => {
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
      name: 'Monument',
      slug: 'monument',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      price: '$39-$249/month',
      priceRange: [39, 249],
      communication: ['messaging', 'video'],
      insurance: true,
      medication: true,
      description: 'Specialized online platform for alcohol use disorder treatment, combining therapy, medication, and peer support.',
      pros: ['Specialized in alcohol use disorder', 'Medication options available', 'Insurance accepted', 'Peer support community', 'Licensed addiction specialists', 'Flexible treatment plans'],
      cons: ['Focus limited to alcohol use', 'Not available in all states', 'Higher cost for medication plans', 'No in-person services'],
      features: ['Medical assessment', 'Therapy sessions', 'Medication management', 'Support groups', 'Progress tracking', 'Educational resources'],
      bestFor: 'Alcohol use disorder treatment with medication support'
    },
    {
      id: 2,
      name: 'BetterHelp',
      slug: 'betterhelp',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      description: 'Large therapy platform with addiction specialists and support for various substance use disorders.',
      pros: ['Wide range of addiction specialists', 'Multiple communication methods', 'Financial aid available', 'Easy therapist switching', 'Flexible scheduling', 'Comprehensive support'],
      cons: ['No medication management', 'No insurance coverage', 'Not specialized only in addiction', 'No group therapy options'],
      features: ['Individual therapy', 'Messaging support', 'Live sessions', 'Worksheets', 'Mobile app access', 'Progress tracking'],
      bestFor: 'General addiction counseling and recovery support'
    },
    {
      id: 3,
      name: 'Talkspace',
      slug: 'talkspace',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.4,
      price: '$65-$99/week',
      priceRange: [65, 99],
      communication: ['messaging', 'video', 'phone'],
      insurance: true,
      medication: true,
      description: 'Online therapy platform offering addiction treatment with integrated psychiatric services.',
      pros: ['Insurance coverage available', 'Medication management', 'Specialized addiction program', 'Multiple therapy approaches', 'Integrated care model', 'Licensed specialists'],
      cons: ['Higher pricing', 'No group support', 'Limited live sessions on basic plan', 'Response times vary'],
      features: ['Therapy sessions', 'Psychiatric care', 'Messaging support', 'Treatment planning', 'Progress tracking', 'Mobile app'],
      bestFor: 'Combined therapy and medication for addiction'
    },
    {
      id: 4,
      name: 'Lionrock Recovery',
      slug: 'lionrock',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: 'Insurance-based',
      priceRange: [0, 0],
      communication: ['video', 'group'],
      insurance: true,
      medication: false,
      description: 'Online intensive outpatient program (IOP) for substance use disorders with group and individual therapy.',
      pros: ['Comprehensive IOP program', 'Insurance accepted', 'Group support focus', 'Evidence-based treatment', 'Flexible scheduling', 'Strong aftercare support'],
      cons: ['More intensive commitment', 'Limited individual sessions', 'Video-only format', 'No medication management'],
      features: ['Group therapy', 'Individual counseling', 'Family support', 'Recovery tools', 'Alumni program', 'Mobile app'],
      bestFor: 'Intensive outpatient addiction treatment'
    },
    {
      id: 5,
      name: 'Workit Health',
      slug: 'workit-health',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.2,
      price: '$49-$299/month',
      priceRange: [49, 299],
      communication: ['messaging', 'video'],
      insurance: true,
      medication: true,
      description: 'Virtual addiction care platform offering medication-assisted treatment and therapy.',
      pros: ['Medication-assisted treatment', 'Insurance accepted', 'Same-day appointments', 'Virtual drug testing', 'Licensed providers', 'Comprehensive care'],
      cons: ['Limited availability', 'Higher cost for medication', 'No phone sessions', 'Newer platform'],
      features: ['Medical care', 'Counseling', 'Group sessions', 'Recovery courses', 'Drug testing', 'Care coordination'],
      bestFor: 'Medication-assisted treatment for addiction'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Online Therapy for Addiction & Recovery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find platforms supporting addiction recovery, substance use disorders, and maintaining sobriety with specialized treatment approaches and support systems.
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

        {/* Quick Summary */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Picks for Addiction Treatment at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Best Overall */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best Overall
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Monument</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.8)}
                  </div>
                  <span className="text-gray-600">4.8/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized platform for alcohol use disorder treatment with comprehensive care options including therapy and medication management.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $39-$249/month
              </div>
              <Button 
                as={Link} 
                to="/reviews/platforms/monument" 
                variant="outline" 
                size="sm" 
                className="w-full justify-center mb-2"
              >
                Read full review
              </Button>
              <Button 
                as="a"
                href="https://www.joinmonument.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ExternalLink}
                className="w-full justify-center"
              >
                Visit Monument
              </Button>
            </div>
            
            {/* Best Intensive Program */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best Intensive Program
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Lionrock</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.3)}
                  </div>
                  <span className="text-gray-600">4.3/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive online intensive outpatient program with strong group support and evidence-based treatment approaches.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> Insurance-based
              </div>
              <Button 
                as={Link} 
                to="/reviews/platforms/lionrock" 
                variant="outline" 
                size="sm" 
                className="w-full justify-center mb-2"
              >
                Read full review
              </Button>
              <Button 
                as="a"
                href="https://www.lionrockrecovery.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ExternalLink}
                className="w-full justify-center"
              >
                Visit Lionrock
              </Button>
            </div>
            
            {/* Best for MAT */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best for MAT
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Workit Health</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.2)}
                  </div>
                  <span className="text-gray-600">4.2/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Virtual addiction care platform specializing in medication-assisted treatment with integrated therapy support.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $49-$299/month
              </div>
              <Button 
                as={Link} 
                to="/reviews/platforms/workit-health" 
                variant="outline" 
                size="sm" 
                className="w-full justify-center mb-2"
              >
                Read full review
              </Button>
              <Button 
                as="a"
                href="https://www.workithealth.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ExternalLink}
                className="w-full justify-center"
              >
                Visit Workit Health
              </Button>
            </div>
          </div>
        </div>

        {/* Why Specialized Addiction Treatment Matters */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Specialized Addiction Treatment Matters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Unique Treatment Needs</h3>
              <p className="text-gray-600 mb-4">
                Addiction and substance use disorders require specialized treatment approaches that differ from general mental health care. Key aspects include:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Evidence-based addiction treatment protocols</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Medication-assisted treatment when appropriate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Regular monitoring and accountability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Peer support and community resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Relapse prevention strategies</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Therapists specialized in addiction treatment understand these unique needs and can provide more effective support for recovery.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Comprehensive Care Approach</h3>
              <p className="text-gray-600 mb-4">
                Effective addiction treatment often requires a multi-faceted approach that includes:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Individual therapy for underlying issues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Group support for shared experiences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Medical supervision when needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Family support and education</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Long-term recovery planning</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Specialized platforms are better equipped to provide this comprehensive level of care.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Communication Preferences</h3>
            <p className="text-gray-700 mb-4">
              Different communication methods serve various needs in addiction treatment:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <MessageSquare className="h-5 w-5 text-indigo-600 mr-2" />
                  <h4 className="font-bold text-gray-800">Messaging Support</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  24/7 access to support through messaging can be crucial during moments of craving or difficulty.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <Video className="h-5 w-5 text-indigo-600 mr-2" />
                  <h4 className="font-bold text-gray-800">Video Sessions</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Face-to-face interaction helps build stronger therapeutic relationships and allows for better assessment.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-indigo-600 mr-2" />
                  <h4 className="font-bold text-gray-800">Group Support</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Peer support and group therapy provide community, accountability, and shared learning experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed Reviews of the Best Addiction Treatment Platforms</h2>
          
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

        {/* How to Choose */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Addiction Treatment Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Treatment Approach</h3>
              <p className="text-gray-600">
                Consider platforms that offer evidence-based addiction treatment methods like CBT, motivational interviewing, and when needed, medication-assisted treatment (MAT).
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Level of Care</h3>
              <p className="text-gray-600">
                Evaluate whether you need intensive outpatient treatment, regular counseling, or maintenance support. Some platforms offer more comprehensive care than others.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Support Features</h3>
              <p className="text-gray-600">
                Look for platforms that offer the right mix of individual therapy, group support, medication management if needed, and crisis resources.
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              For most people seeking online addiction treatment, we recommend:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Monument</strong> for alcohol use disorder, especially if you're interested in medication-assisted treatment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Lionrock</strong> for those needing a more intensive, structured program with group support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Workit Health</strong> for those seeking medication-assisted treatment for various substance use disorders</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Important Considerations */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Considerations for Online Addiction Treatment</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">When Online Treatment Is Appropriate</h3>
              <p className="text-gray-600">
                Online addiction treatment can be effective for many people, but it's most appropriate for:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Individuals who are medically stable and not at risk for severe withdrawal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Those with a stable living environment and support system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>People in early recovery or maintaining sobriety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Individuals seeking ongoing support after completing intensive treatment</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">When Higher Levels of Care Are Needed</h3>
              <p className="text-gray-600">
                Online treatment may not be appropriate for:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Individuals at risk for severe withdrawal symptoms</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Those with severe or unstable mental health conditions</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>People who need 24/7 monitoring or support</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Individuals with a history of multiple relapses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Recovery Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to find the right addiction treatment platform for your specific needs and circumstances.
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
              to="/tools/assessments/addiction-assessment" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Take Addiction Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestForAddiction;
