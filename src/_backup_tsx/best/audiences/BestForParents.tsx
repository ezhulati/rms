import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Search, Shield, Users, Heart, DollarSign } from 'lucide-react';
import Button from '../../../components/Button';
import RatingBreakdown from '../../../components/RatingBreakdown';

const BestForParents = () => {
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
      image: '/images/concepts/bestforparents.jpg',
      rating: 4.7,
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      description: 'Large network with therapists specializing in parenting challenges, stress management, and work-life balance.',
      pros: ['Large network of parenting specialists', 'Multiple communication methods', 'Financial aid available', 'Flexible scheduling', 'Weekly live sessions', 'Unlimited messaging'],
      cons: ['No insurance coverage', 'No medication management', 'Response times vary', 'Not exclusively for parents'],
      features: ['Parenting support', 'Stress management', 'Work-life balance', 'Relationship counseling', 'Self-care strategies', 'Mobile app access'],
      bestFor: 'Parents seeking flexible therapy options with a wide selection of therapists specializing in parenting challenges'
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
      description: 'Comprehensive platform with insurance coverage, medication management, and therapists experienced in family dynamics.',
      pros: ['Insurance coverage', 'Medication management', 'Parenting specialists', 'Integrated care', 'Psychiatric services', 'Family-focused approaches'],
      cons: ['Higher pricing without insurance', 'Limited live sessions on basic plan', 'Response times vary', 'Not exclusively for parents'],
      features: ['Family therapy expertise', 'Psychiatric services', 'Insurance benefits', 'Multiple therapy approaches', 'Medication options', 'Secure messaging'],
      bestFor: 'Parents seeking therapy with medication management and insurance coverage'
    },
    {
      id: 3,
      name: 'ReGain',
      slug: 'regain',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      description: 'Specialized platform for couples and co-parents focusing on relationship dynamics and parenting partnerships.',
      pros: ['Co-parenting specialists', 'Couples therapy focus', 'Joint or individual sessions', 'Relationship expertise', 'Weekly live sessions', 'Shared messaging account option'],
      cons: ['No insurance coverage', 'No medication management', 'Limited individual focus', 'Both partners need to sign up'],
      features: ['Co-parenting support', 'Relationship counseling', 'Communication strategies', 'Conflict resolution', 'Parenting agreement help', 'Blended family support'],
      bestFor: 'Co-parents and couples seeking to improve their parenting partnership and relationship dynamics'
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
      description: 'Telehealth platform with strong insurance coverage, medication management, and family therapists.',
      pros: ['Broad insurance acceptance', 'Medication management', 'Family therapy options', 'Same-day appointments', 'Licensed psychiatrists', 'Medical care integration'],
      cons: ['Per-session pricing', 'Video-only format', 'No unlimited messaging', 'Less specialized for parents'],
      features: ['Insurance coverage', 'Psychiatric services', 'Family therapy', 'Licensed specialists', 'Quick appointments', 'Medical integration'],
      bestFor: 'Parents seeking integrated mental and physical healthcare with medication management and insurance coverage'
    },
    {
      id: 5,
      name: 'Calmerry',
      slug: 'calmerry',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.2,
      price: '$42-$68/week',
      priceRange: [42, 68],
      communication: ['messaging', 'video'],
      insurance: false,
      medication: false,
      description: 'Affordable platform with therapists experienced in parenting stress, anxiety, and work-life balance.',
      pros: ['Lower pricing', 'Flexible plans', 'No long-term commitments', 'User-friendly platform', 'Quick matching', 'Parenting-focused therapists'],
      cons: ['No insurance coverage', 'No medication management', 'No phone sessions', 'Newer platform with fewer therapists'],
      features: ['Text therapy', 'Video sessions', 'Parenting resources', 'Stress management', 'Work-life balance', 'Self-care strategies'],
      bestFor: 'Budget-conscious parents seeking affordable therapy with flexible scheduling'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Online Therapy for Parents</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find specialized online therapy platforms that understand and support the unique mental health needs of parents and caregivers.
          </p>
          <div className="flex justify-center">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="primary" 
              size="lg" 
              icon={Search}
            >
              Find your perfect parent therapy match
            </Button>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Picks for Parent Therapy at a Glance</h2>
          
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
                Large network with therapists specializing in parenting challenges, stress management, and work-life balance.
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
            
            {/* Best for Co-Parents */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best for Co-Parents
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">ReGain</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.5)}
                  </div>
                  <span className="text-gray-600">4.5/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized platform for couples and co-parents focusing on relationship dynamics and parenting partnerships.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $60-$90/week
              </div>
              <Button 
                as="a"
                href="https://www.regain.us" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ArrowRight}
                className="w-full justify-center"
              >
                Visit ReGain
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
                    {renderStars(4.2)}
                  </div>
                  <span className="text-gray-600">4.2/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Affordable platform with therapists experienced in parenting stress, anxiety, and work-life balance.
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

        {/* Understanding Parent Therapy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Parent Mental Health Needs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Common Mental Health Concerns for Parents</h3>
              <p className="text-gray-600 mb-4">
                Parents face unique mental health challenges related to the demands and responsibilities of raising children:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Parental burnout and chronic stress</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Anxiety about children's wellbeing and development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Postpartum depression and anxiety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Work-life balance struggles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Co-parenting conflicts and relationship strain</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Guilt, perfectionism, and identity challenges</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Effective therapy for parents addresses these concerns with approaches that acknowledge the unique pressures of parenting while providing practical strategies for self-care and family wellbeing.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Benefits of Online Therapy for Parents</h3>
              <p className="text-gray-600 mb-4">
                Online therapy offers several advantages that make it particularly suitable for busy parents:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Convenience and flexibility around family schedules</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>No need for childcare during therapy sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Ability to participate from the comfort of home</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Multiple communication options to fit parenting demands</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Access to specialists in parenting and family dynamics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Ongoing support between sessions via messaging</span>
                </li>
              </ul>
              <p className="text-gray-600">
                These benefits help overcome common barriers that prevent many parents from seeking and continuing with mental health treatment.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Important Considerations for Parent Therapy</h3>
            <p className="text-gray-700 mb-4">
              When evaluating online therapy platforms for parents, these factors are particularly important:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Scheduling Flexibility</h4>
                    <p className="text-gray-600 text-sm">
                      Options for late evening or early morning sessions, rescheduling, and asynchronous communication
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Parenting Expertise</h4>
                    <p className="text-gray-600 text-sm">
                      Therapists with specialized training in family dynamics, child development, and parenting challenges
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Communication Options</h4>
                    <p className="text-gray-600 text-sm">
                      Multiple ways to connect with therapists, including text, video, and phone, to accommodate parenting demands
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Practical Approach</h4>
                    <p className="text-gray-600 text-sm">
                      Focus on actionable strategies for managing parenting stress, improving family dynamics, and self-care
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              The platforms we recommend have been evaluated with these parent-specific considerations in mind.
            </p>
          </div>
        </div>

        {/* Detailed Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed Reviews of the Best Parent Therapy Platforms</h2>
          
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
                    <h4 className="font-bold text-gray-800 mb-3">Why We Recommend It for Parents</h4>
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
                      <h5 className="font-bold text-gray-800 mb-3">Parent-Specific Features</h5>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Parent Therapy Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Parenting Focus</h3>
              <p className="text-gray-600">
                Consider platforms that offer therapists with expertise in parenting challenges, family dynamics, and the specific issues you're facing as a parent.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Practical Factors</h3>
              <p className="text-gray-600">
                Consider your budget, insurance needs, and whether you might benefit from medication management alongside therapy for issues like postpartum depression.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Scheduling Flexibility</h3>
              <p className="text-gray-600">
                Look for platforms that offer flexible scheduling options, asynchronous communication, and the ability to easily reschedule when parenting demands arise.
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              For most parents seeking online therapy, we recommend:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>BetterHelp</strong> for most parents seeking flexible therapy options with a wide selection of therapists specializing in parenting challenges</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>ReGain</strong> for co-parents and couples seeking to improve their parenting partnership and relationship dynamics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Calmerry</strong> for budget-conscious parents seeking affordable therapy with flexible scheduling</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Therapy Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect online therapy platform for your unique needs as a parent.
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

export default BestForParents;
