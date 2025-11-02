import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Search, Shield, Users, Heart, DollarSign } from 'lucide-react';
import Button from '../../../components/Button';
import RatingBreakdown from '../../../components/RatingBreakdown';

const BestForLGBTQ = () => {
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
      name: 'Pride Counseling',
      slug: 'pride-counseling',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      description: 'Specialized platform with LGBTQ+ affirming therapists trained in issues specific to the community.',
      pros: ['All therapists have LGBTQ+ expertise', 'Multiple communication methods', 'Financial aid available', 'Easy therapist switching', 'Weekly live sessions', 'Unlimited messaging'],
      cons: ['No insurance coverage', 'No medication management', 'Response times vary', 'Higher cost than some alternatives'],
      features: ['LGBTQ+ affirming care', 'Identity exploration support', 'Coming out guidance', 'Relationship counseling', 'Trauma-informed approaches', 'Community resources'],
      bestFor: 'Comprehensive LGBTQ+ affirming therapy with specialized support for identity, relationships, and community-specific challenges'
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
      description: 'Large platform with LGBTQ+ friendly therapists and medication management with insurance coverage.',
      pros: ['Insurance coverage', 'Medication management', 'LGBTQ+ therapist filtering', 'Integrated care', 'Psychiatric services', 'Identity-affirming approaches'],
      cons: ['Higher pricing', 'Limited live sessions on basic plan', 'Varying LGBTQ+ expertise levels', 'Less specialized than Pride Counseling'],
      features: ['LGBTQ+ therapist matching', 'Psychiatric services', 'Insurance benefits', 'Multiple therapy approaches', 'Medication delivery', 'Secure messaging'],
      bestFor: 'LGBTQ+ individuals seeking therapy with medication management and insurance coverage'
    },
    {
      id: 3,
      name: 'BetterHelp',
      slug: 'betterhelp',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      description: 'Large network with LGBTQ+ friendly therapists and flexible communication options.',
      pros: ['Large LGBTQ+ friendly therapist network', 'Multiple communication methods', 'Financial aid available', 'Easy therapist switching', 'Weekly live sessions', 'Unlimited messaging'],
      cons: ['No insurance coverage', 'No medication management', 'Response times vary', 'Less specialized than Pride Counseling'],
      features: ['LGBTQ+ preference matching', 'Identity-affirming care', 'Relationship counseling', 'Trauma support', 'Secure messaging', 'Mobile app access'],
      bestFor: 'LGBTQ+ individuals seeking flexible therapy options with a wide selection of affirming therapists'
    },
    {
      id: 4,
      name: 'Ayana Therapy',
      slug: 'ayana-therapy',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: '$60-$90/month',
      priceRange: [60, 90],
      communication: ['messaging', 'video'],
      insurance: false,
      medication: false,
      description: 'Culturally competent therapy platform focused on marginalized communities, including LGBTQ+ individuals of color.',
      pros: ['Intersectional approach', 'Culturally competent therapists', 'Focus on marginalized identities', 'Affordable monthly pricing', 'Identity matching algorithm', 'Community resources'],
      cons: ['Smaller therapist network', 'No insurance coverage', 'No medication management', 'Limited communication options'],
      features: ['Intersectional identity matching', 'Cultural competency', 'BIPOC LGBTQ+ specialists', 'Community resources', 'Secure messaging', 'Video sessions'],
      bestFor: 'LGBTQ+ individuals of color seeking culturally competent, intersectional therapy'
    },
    {
      id: 5,
      name: 'Amwell',
      slug: 'amwell',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.2,
      price: '$109-$129/session',
      priceRange: [109, 129],
      communication: ['video'],
      insurance: true,
      medication: true,
      description: 'Telehealth platform with LGBTQ+ friendly providers, strong insurance coverage, and medication management.',
      pros: ['Broad insurance acceptance', 'Medication management', 'LGBTQ+ friendly providers', 'Same-day appointments', 'Integrated health services', 'Licensed psychiatrists'],
      cons: ['Per-session pricing', 'Video-only format', 'No unlimited messaging', 'Less specialized in LGBTQ+ care'],
      features: ['Insurance coverage', 'Psychiatric services', 'Medical care integration', 'LGBTQ+ friendly providers', 'Quick appointments', 'Licensed professionals'],
      bestFor: 'LGBTQ+ individuals seeking therapy and medication management with insurance coverage'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Online Therapy for LGBTQ+ Individuals</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find affirming, specialized online therapy platforms that understand and support the unique needs of LGBTQ+ individuals.
          </p>
          <div className="flex justify-center">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="primary" 
              size="lg" 
              icon={Search}
            >
              Find your perfect LGBTQ+ affirming therapy match
            </Button>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Picks for LGBTQ+ Therapy at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Best Overall */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best Overall
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Pride Counseling</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.8)}
                  </div>
                  <span className="text-gray-600">4.8/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized platform with LGBTQ+ affirming therapists trained in issues specific to the community.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $60-$90/week
              </div>
              <Button 
                as="a"
                href="https://www.pridecounseling.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ArrowRight}
                className="w-full justify-center"
              >
                Visit Pride Counseling
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
                Large platform with LGBTQ+ friendly therapists and medication management with insurance coverage.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $65-$99/week
              </div>
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
            
            {/* Best for Intersectional Identities */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best for Intersectionality
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Ayana Therapy</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.3)}
                  </div>
                  <span className="text-gray-600">4.3/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Culturally competent therapy platform focused on marginalized communities, including LGBTQ+ individuals of color.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $60-$90/month
              </div>
              <Button 
                as="a"
                href="https://www.ayanatherapy.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ArrowRight}
                className="w-full justify-center"
              >
                Visit Ayana Therapy
              </Button>
            </div>
          </div>
        </div>

        {/* Understanding LGBTQ+ Therapy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding LGBTQ+ Affirming Therapy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">What Makes Therapy LGBTQ+ Affirming?</h3>
              <p className="text-gray-600 mb-4">
                LGBTQ+ affirming therapy goes beyond basic acceptance to actively validate and support diverse sexual orientations, gender identities, and relationship structures. Key elements include:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Recognition of LGBTQ+ identities as normal variations of human experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Understanding of the impact of minority stress and discrimination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Knowledge of LGBTQ+ community-specific challenges and resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Use of appropriate language, pronouns, and terminology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Awareness of intersectionality with other marginalized identities</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Affirming therapy creates a safe space where LGBTQ+ individuals can explore their authentic selves without fear of judgment or the need to educate their therapist about basic LGBTQ+ concepts.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Common Therapeutic Needs in the LGBTQ+ Community</h3>
              <p className="text-gray-600 mb-4">
                While LGBTQ+ individuals seek therapy for many of the same reasons as anyone else, some concerns are more prevalent or uniquely experienced:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Identity exploration and affirmation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Coming out and disclosure decisions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Family acceptance and relationship challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Minority stress, discrimination, and trauma</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Gender-affirming care and transition support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Internalized stigma and self-acceptance</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Effective LGBTQ+ therapy addresses these concerns within the context of affirming one's identity rather than treating identity itself as a problem to be solved.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">The Importance of LGBTQ+ Cultural Competence</h3>
            <p className="text-gray-700 mb-4">
              Many LGBTQ+ individuals report negative experiences with therapists who lack cultural competence, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Microaggressions</h4>
                    <p className="text-gray-600 text-sm">
                      Subtle comments or assumptions that invalidate or stigmatize LGBTQ+ identities
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Over-focusing on Identity</h4>
                    <p className="text-gray-600 text-sm">
                      Assuming all problems are related to sexual orientation or gender identity
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Lack of Knowledge</h4>
                    <p className="text-gray-600 text-sm">
                      Requiring clients to educate therapists about basic LGBTQ+ concepts and experiences
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Pathologizing Identity</h4>
                    <p className="text-gray-600 text-sm">
                      Treating LGBTQ+ identities as disorders or problems to be fixed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              The platforms we recommend have therapists who are either LGBTQ+ specialists or have demonstrated cultural competence in working with the community.
            </p>
          </div>
        </div>

        {/* Detailed Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed Reviews of the Best LGBTQ+ Therapy Platforms</h2>
          
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
                    <h4 className="font-bold text-gray-800 mb-3">Why We Recommend It for LGBTQ+ Individuals</h4>
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
                      <h5 className="font-bold text-gray-800 mb-3">LGBTQ+ Specific Features</h5>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right LGBTQ+ Therapy Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Affirming Approach</h3>
              <p className="text-gray-600">
                Look for platforms that explicitly state their commitment to LGBTQ+ affirming care and have therapists with specialized training or experience in LGBTQ+ issues.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Intersectionality</h3>
              <p className="text-gray-600">
                Consider how your other identities (race, ethnicity, disability, etc.) intersect with your LGBTQ+ identity and whether the platform offers therapists who understand these intersections.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Practical Factors</h3>
              <p className="text-gray-600">
                Consider your budget, insurance needs, communication preferences, and whether you might benefit from medication management alongside therapy.
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              For most LGBTQ+ individuals seeking online therapy, we recommend:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Pride Counseling</strong> for those seeking specialized LGBTQ+ affirming therapy with therapists trained in community-specific issues</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Talkspace</strong> for those needing both therapy and medication management with insurance coverage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Ayana Therapy</strong> for LGBTQ+ individuals of color seeking culturally competent, intersectional therapy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Therapy Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect LGBTQ+ affirming therapy platform for your needs.
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

export default BestForLGBTQ;
