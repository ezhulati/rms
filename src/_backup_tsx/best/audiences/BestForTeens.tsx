import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Search, Shield, Users, Brain, DollarSign } from 'lucide-react';
import Button from '../../../components/Button';
import RatingBreakdown from '../../../components/RatingBreakdown';

const BestForTeens = () => {
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
      name: 'Teen Counseling',
      slug: 'teen-counseling',
      image: '/images/concepts/bestforteens.jpg',
      rating: 4.7,
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      description: 'Specialized platform with therapists trained in adolescent mental health and development.',
      pros: ['Therapists specialized in teen issues', 'Multiple communication methods', 'Financial aid available', 'Parent involvement options', 'Private teen-therapist messaging', 'Age-appropriate approaches'],
      cons: ['No insurance coverage', 'No medication management', 'Response times vary', 'Parent must sign up initially'],
      features: ['Teen-specific therapy', 'Parental consent management', 'Privacy controls', 'Crisis support', 'School issue expertise', 'Identity development focus'],
      bestFor: 'Comprehensive therapy specifically designed for teens with appropriate parental involvement and privacy safeguards'
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
      description: 'Large platform with teen-friendly therapists and medication management with insurance coverage.',
      pros: ['Insurance coverage', 'Medication management', 'Teen therapist filtering', 'Integrated care', 'Psychiatric services', 'Parent-teen coordination'],
      cons: ['Higher pricing', 'Limited live sessions on basic plan', 'Not exclusively for teens', 'Less specialized than Teen Counseling'],
      features: ['Teen therapist matching', 'Psychiatric services', 'Insurance benefits', 'Multiple therapy approaches', 'Medication options', 'Secure messaging'],
      bestFor: 'Teens needing therapy with medication management and insurance coverage'
    },
    {
      id: 3,
      name: 'BetterHelp',
      slug: 'betterhelp',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.4,
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      description: 'Large network with teen-friendly therapists and flexible communication options.',
      pros: ['Large therapist network', 'Multiple communication methods', 'Financial aid available', 'Easy therapist switching', 'Weekly live sessions', 'Unlimited messaging'],
      cons: ['No insurance coverage', 'No medication management', 'Response times vary', 'Less specialized for teens'],
      features: ['Teen-friendly therapists', 'Flexible scheduling', 'Messaging options', 'Video sessions', 'Therapist matching', 'Mobile app access'],
      bestFor: 'Older teens (16+) seeking flexible therapy options with a wide selection of therapists'
    },
    {
      id: 4,
      name: 'Amwell',
      slug: 'amwell',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: '$109-$129/session',
      priceRange: [109, 129],
      communication: ['video'],
      insurance: true,
      medication: true,
      description: 'Telehealth platform with child and adolescent specialists, strong insurance coverage, and medication management.',
      pros: ['Broad insurance acceptance', 'Child psychiatrists available', 'Licensed adolescent specialists', 'Same-day appointments', 'Integrated health services', 'Family session options'],
      cons: ['Per-session pricing', 'Video-only format', 'No unlimited messaging', 'Less teen-specific resources'],
      features: ['Insurance coverage', 'Child psychiatry', 'Medical care integration', 'Licensed specialists', 'Quick appointments', 'Family sessions'],
      bestFor: 'Teens needing psychiatric evaluation and medication management with insurance coverage'
    },
    {
      id: 5,
      name: 'Charlie Health',
      slug: 'charlie-health',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.2,
      price: 'Insurance-based',
      priceRange: [0, 0],
      communication: ['video', 'group'],
      insurance: true,
      medication: true,
      description: 'Intensive outpatient program specifically designed for teens and young adults with serious mental health needs.',
      pros: ['Intensive support', 'Group therapy options', 'Insurance-based model', 'Crisis management', 'Family involvement', 'Specialized for high-acuity cases'],
      cons: ['Requires insurance', 'More intensive commitment', 'Not for mild issues', 'Limited geographic availability'],
      features: ['Intensive outpatient program', 'Group therapy', 'Individual sessions', 'Family therapy', 'Crisis intervention', 'Peer support'],
      bestFor: 'Teens with more serious mental health needs requiring intensive support and group therapy'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Online Therapy for Teens</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find specialized online therapy platforms that understand and support the unique mental health needs of teenagers.
          </p>
          <div className="flex justify-center">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="primary" 
              size="lg" 
              icon={Search}
            >
              Find the perfect teen therapy match
            </Button>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Picks for Teen Therapy at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Best Overall */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best Overall
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Teen Counseling</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.7)}
                  </div>
                  <span className="text-gray-600">4.7/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized platform with therapists trained in adolescent mental health and development.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $60-$90/week
              </div>
              <Button 
                as="a"
                href="https://www.teencounseling.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ArrowRight}
                className="w-full justify-center"
              >
                Visit Teen Counseling
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
                Large platform with teen-friendly therapists and medication management with insurance coverage.
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
            
            {/* Best for Intensive Support */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best Intensive Support
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Charlie Health</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.2)}
                  </div>
                  <span className="text-gray-600">4.2/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Intensive outpatient program specifically designed for teens and young adults with serious mental health needs.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> Insurance-based
              </div>
              <Button 
                as="a"
                href="https://www.charliehealth.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ArrowRight}
                className="w-full justify-center"
              >
                Visit Charlie Health
              </Button>
            </div>
          </div>
        </div>

        {/* Understanding Teen Therapy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Teen Therapy Needs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Teens Need Specialized Support</h3>
              <p className="text-gray-600 mb-4">
                Adolescence is a unique developmental period with specific challenges that benefit from specialized therapeutic approaches. Effective teen therapy considers:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Developmental stage and brain development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Identity formation and independence needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Peer relationships and social pressures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>School and academic stressors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Family dynamics and parental relationships</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Therapists who specialize in working with teens understand these unique factors and adapt their approaches accordingly, using age-appropriate techniques and communication styles.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Common Mental Health Concerns for Teens</h3>
              <p className="text-gray-600 mb-4">
                While teens can experience the same mental health conditions as adults, certain issues are particularly prevalent during adolescence:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Anxiety and social anxiety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Depression and mood disorders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Identity and self-esteem issues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>School-related stress and academic pressure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Family conflicts and peer relationship challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Body image concerns and eating disorders</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Online therapy platforms for teens should have therapists experienced in addressing these common adolescent concerns with evidence-based approaches.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">The Balance of Privacy and Parental Involvement</h3>
            <p className="text-gray-700 mb-4">
              A key consideration in teen therapy is balancing the adolescent's need for privacy with appropriate parental involvement:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Confidentiality</h4>
                    <p className="text-gray-600 text-sm">
                      Teens need a private space to share openly with their therapist, with clear limits on what will be shared with parents
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Safety Protocols</h4>
                    <p className="text-gray-600 text-sm">
                      Clear policies on when confidentiality must be broken for safety concerns like self-harm or suicide risk
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Parental Updates</h4>
                    <p className="text-gray-600 text-sm">
                      Structured ways for parents to receive general progress updates without violating the teen's trust
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Family Sessions</h4>
                    <p className="text-gray-600 text-sm">
                      Options for occasional family therapy sessions to address systemic issues while maintaining individual therapy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              The platforms we recommend have thoughtful policies and practices around teen privacy and parental involvement, creating a safe therapeutic environment while keeping parents appropriately informed.
            </p>
          </div>
        </div>

        {/* Detailed Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed Reviews of the Best Teen Therapy Platforms</h2>
          
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
                          {platform.communication.includes('group') && (
                            <Users className="h-4 w-4 text-indigo-600" />
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
                    <h4 className="font-bold text-gray-800 mb-3">Why We Recommend It for Teens</h4>
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
                      <h5 className="font-bold text-gray-800 mb-3">Teen-Specific Features</h5>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Teen Therapy Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Teen's Needs & Preferences</h3>
              <p className="text-gray-600">
                Consider your teen's specific mental health needs, communication preferences, and comfort level with technology. Involving them in the decision can increase their engagement in therapy.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Parental Involvement</h3>
              <p className="text-gray-600">
                Look for platforms that balance teen privacy with appropriate parental involvement, with clear policies on confidentiality and safety protocols.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Safety & Credentials</h3>
              <p className="text-gray-600">
                Ensure the platform has licensed therapists with experience working with teens, clear crisis protocols, and strong privacy protections appropriate for minors.
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              For most teens seeking online therapy, we recommend:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Teen Counseling</strong> for most teens seeking specialized adolescent therapy with appropriate privacy and parental involvement</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Talkspace</strong> for teens who may need medication management alongside therapy with insurance coverage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Charlie Health</strong> for teens with more serious mental health needs requiring intensive support and group therapy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find the Right Teen Therapy?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect online therapy platform for your teen's unique needs.
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

export default BestForTeens;
