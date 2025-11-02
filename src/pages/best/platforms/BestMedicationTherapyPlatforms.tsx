import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain, Pill, Search } from 'lucide-react';
import Button from '../../../components/Button';

const BestMedicationTherapyPlatforms = () => {
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
      name: 'Talkspace',
      slug: 'talkspace',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      price: '$65-$99/week + $249 initial psychiatry session',
      priceRange: [65, 99],
      communication: ['messaging', 'video', 'phone'],
      insurance: true,
      medication: true,
      description: 'Comprehensive platform offering both therapy and psychiatric services with insurance coverage options.',
      pros: ['Insurance coverage for therapy and psychiatry', 'Integrated care between therapists and psychiatrists', 'Medication delivery options', 'Wide range of conditions treated', 'Multiple communication methods', 'User-friendly platform'],
      cons: ['Higher pricing without insurance', 'Psychiatry services cost extra', 'Limited medication options compared to some competitors', 'Psychiatry availability varies by state'],
      features: ['Psychiatric evaluations', 'Medication management', 'Therapy sessions', 'Unlimited messaging', 'Insurance integration', 'Progress tracking'],
      bestFor: 'Insurance holders seeking integrated therapy and medication management'
    },
    {
      id: 2,
      name: 'Cerebral',
      slug: 'cerebral',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: '$85-$325/month',
      priceRange: [85, 325],
      communication: ['messaging', 'video', 'phone'],
      insurance: true,
      medication: true,
      description: 'Subscription-based platform offering therapy, medication, and combined care plans for anxiety, depression, and ADHD.',
      pros: ['Comprehensive medication-focused plans', 'ADHD treatment available', 'Medication delivery to your door', 'Insurance accepted', 'Care counselor support', 'Multiple plan options'],
      cons: ['Higher cost for combined plans', 'Not available in all states', 'Limited therapist selection', 'Some medication restrictions'],
      features: ['Medication management', 'Therapy sessions', 'ADHD treatment', 'Medication delivery', 'Monthly provider check-ins', 'Self-care tools'],
      bestFor: 'ADHD treatment and medication delivery convenience'
    },
    {
      id: 3,
      name: 'Brightside',
      slug: 'brightside',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: '$95-$349/month',
      priceRange: [95, 349],
      communication: ['messaging', 'video'],
      insurance: true,
      medication: true,
      description: 'Data-driven platform specializing in depression and anxiety treatment with precision prescribing technology.',
      pros: ['Precision prescribing approach', 'Insurance coverage options', 'Specialized in depression and anxiety', 'Integrated care model', 'Regular progress tracking', 'Evidence-based treatment'],
      cons: ['Higher cost without insurance', 'Limited to depression and anxiety', 'Video-only therapy format', 'Less flexible scheduling'],
      features: ['Precision prescribing', 'Medication delivery', 'Therapy sessions', 'Symptom tracking', 'Self-care tools', 'Insurance coverage'],
      bestFor: 'Depression and anxiety with data-driven medication approach'
    },
    {
      id: 4,
      name: 'Hims & Hers',
      slug: 'hims-hers',
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.0,
      price: '$39-$85/month for medication, $99/session for therapy',
      priceRange: [39, 99],
      communication: ['messaging', 'video'],
      insurance: false,
      medication: true,
      description: 'Telehealth platform offering psychiatric medication management with separate therapy options.',
      pros: ['Affordable medication plans', 'Quick psychiatric evaluations', 'Discreet packaging', 'No subscription required for therapy', 'Fast medication delivery', 'User-friendly interface'],
      cons: ['No insurance coverage', 'Therapy and medication not integrated', 'Limited medication options', 'Less comprehensive mental health care'],
      features: ['Psychiatric consultations', 'Medication delivery', 'Individual therapy sessions', 'Free shipping', 'Automatic refills', 'Messaging with providers'],
      bestFor: 'Affordable medication management with separate therapy options'
    },
    {
      id: 5,
      name: 'Amwell',
      slug: 'amwell',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.0,
      price: '$109-$129/therapy session, $269 initial psychiatry visit',
      priceRange: [109, 269],
      communication: ['video'],
      insurance: true,
      medication: true,
      description: 'Telehealth platform offering on-demand therapy and psychiatry services with strong insurance coverage.',
      pros: ['Extensive insurance coverage', 'On-demand appointments available', 'Board-certified psychiatrists', 'Integrated with medical care', 'No subscription required', 'Wide range of conditions treated'],
      cons: ['Higher per-session costs', 'No unlimited messaging', 'Video-only format', 'Less consistent provider relationship'],
      features: ['Psychiatric evaluations', 'Medication management', 'Therapy sessions', 'Insurance integration', 'On-demand appointments', 'Medical care integration'],
      bestFor: 'Insurance coverage and on-demand psychiatric care'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Online Therapy Platforms with Medication Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare the top platforms offering both therapy and psychiatric medication services for comprehensive mental health care.
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Picks at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Best Overall */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best Overall
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Talkspace</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.7)}
                  </div>
                  <span className="text-gray-600">4.7/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive platform with integrated therapy and psychiatric services, plus insurance coverage options.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $65-$99/week + psychiatry
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
            
            {/* Best for ADHD */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best for ADHD
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Cerebral</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.5)}
                  </div>
                  <span className="text-gray-600">4.5/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive platform offering ADHD treatment and medication delivery to your door.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $85-$325/month
              </div>
              <Button 
                as={Link} 
                to="/reviews/platforms/cerebral" 
                variant="outline" 
                size="sm" 
                className="w-full justify-center mb-2"
              >
                Read full review
              </Button>
              <Button 
                as="a"
                href="https://www.cerebral.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ArrowRight}
                className="w-full justify-center"
              >
                Visit Cerebral
              </Button>
            </div>
            
            {/* Best for Depression */}
            <div className="bg-indigo-50 rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Best for Depression
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 mr-3">Brightside</h3>
                <div className="flex items-center">
                  <div className="mr-1">
                    {renderStars(4.3)}
                  </div>
                  <span className="text-gray-600">4.3/5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Data-driven platform specializing in depression treatment with precision prescribing technology.
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Price:</strong> $95-$349/month
              </div>
              <Button 
                as={Link} 
                to="/reviews/platforms/brightside" 
                variant="outline" 
                size="sm" 
                className="w-full justify-center mb-2"
              >
                Read full review
              </Button>
              <Button 
                as="a"
                href="https://www.brightside.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                size="sm"
                icon={ArrowRight}
                className="w-full justify-center"
              >
                Visit Brightside
              </Button>
            </div>
          </div>
        </div>

        {/* Understanding Medication + Therapy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Combined Medication and Therapy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Benefits of Combined Treatment</h3>
              <p className="text-gray-600 mb-4">
                Research consistently shows that combining medication with therapy often provides better outcomes than either treatment alone, especially for conditions like:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Major depression</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Generalized anxiety disorder</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Bipolar disorder</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>ADHD</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>OCD</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Integrated platforms that offer both services can provide more coordinated care, with therapists and psychiatrists working together on your treatment plan.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">What to Look For</h3>
              <p className="text-gray-600 mb-4">
                When choosing a platform for combined medication and therapy, consider these key factors:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Provider qualifications (board-certified psychiatrists, licensed therapists)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Integration between therapy and psychiatric services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Insurance coverage options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Medication delivery vs. local pharmacy options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Types of medications prescribed (including controlled substances if needed)</span>
                </li>
              </ul>
              <p className="text-gray-600">
                The right platform will depend on your specific condition, medication needs, and whether you prefer integrated or separate services.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Important Considerations</h3>
            <p className="text-gray-700 mb-4">
              Before starting medication management online:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <Pill className="h-5 w-5 text-indigo-600 mr-2" />
                  <h4 className="font-bold text-gray-800">Medication Limitations</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Some platforms cannot prescribe controlled substances (like certain ADHD medications or benzodiazepines). Check each platform's prescribing policies.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <Shield className="h-5 w-5 text-indigo-600 mr-2" />
                  <h4 className="font-bold text-gray-800">State Restrictions</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Availability of psychiatric services varies by state due to licensing regulations. Verify coverage in your location before signing up.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                  <h4 className="font-bold text-gray-800">Condition Severity</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Online services are generally appropriate for mild to moderate conditions. Severe mental health issues may require in-person care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed Reviews of Top Medication + Therapy Platforms</h2>
          
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
                        icon={ArrowRight}
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Platform for You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">By Condition</h3>
              <p className="text-gray-600">
                <strong>For ADHD:</strong> Choose Cerebral, which offers comprehensive ADHD treatment including controlled medications.
              </p>
              <p className="text-gray-600 mt-2">
                <strong>For Depression/Anxiety:</strong> Consider Brightside for its data-driven approach to medication selection.
              </p>
              <p className="text-gray-600 mt-2">
                <strong>For Multiple Conditions:</strong> Talkspace offers the most comprehensive care for various mental health concerns.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">By Budget</h3>
              <p className="text-gray-600">
                <strong>With Insurance:</strong> Talkspace, Cerebral, Brightside, and Amwell all accept insurance, potentially reducing costs significantly.
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Without Insurance:</strong> Hims & Hers offers more affordable medication-only options, while Cerebral provides good value for combined care.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">By Service Model</h3>
              <p className="text-gray-600">
                <strong>For Integrated Care:</strong> Talkspace and Brightside offer the most seamless integration between therapy and medication management.
              </p>
              <p className="text-gray-600 mt-2">
                <strong>For Medication Focus:</strong> Cerebral and Hims & Hers provide more medication-focused options with therapy as an add-on.
              </p>
              <p className="text-gray-600 mt-2">
                <strong>For On-Demand Care:</strong> Amwell offers flexible, on-demand appointments without subscription requirements.
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              For most people seeking combined medication and therapy services, we recommend:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Talkspace</strong> for those with insurance coverage who want comprehensive mental health care</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Cerebral</strong> for those seeking ADHD treatment or medication delivery convenience</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Brightside</strong> for those with depression or anxiety who want a data-driven approach</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Mental Health Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect platform for your therapy and medication needs.
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
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can online psychiatrists prescribe all medications?</h3>
              <p className="text-gray-700">
                Online psychiatrists can prescribe most medications, but there are limitations for controlled substances (like certain ADHD medications, benzodiazepines, and sleep medications). Cerebral is one of the few platforms that can prescribe some controlled substances for ADHD. Always check each platform's prescribing policies.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is online medication management covered by insurance?</h3>
              <p className="text-gray-700">
                Many platforms like Talkspace, Cerebral, Brightside, and Amwell accept insurance for both therapy and psychiatric services. Coverage varies by insurance provider and plan. Some platforms offer superbills for out-of-network reimbursement.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do medication refills work with online platforms?</h3>
              <p className="text-gray-700">
                Most platforms handle refills through their online portal. Some offer automatic refills and medication delivery to your door (like Cerebral), while others send prescriptions to your local pharmacy. Regular check-ins with your provider are typically required for refills.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is combined therapy and medication more expensive?</h3>
              <p className="text-gray-700">
                Combined services typically cost more than therapy-only options. However, many platforms offer bundled pricing that makes the combination more affordable than purchasing each service separately. With insurance coverage, costs can be significantly reduced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestMedicationTherapyPlatforms;
