import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Pill, Brain, MessageSquare, Video } from 'lucide-react';
import Button from '../../../components/Button';

const MedicationTherapy = () => {
  // Platform data
  const platforms = [
    {
      name: 'Cerebral',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Comprehensive online mental health service offering therapy and medication management for various conditions.',
      rating: 4.2,
      bestFor: 'Anxiety, Depression, Insomnia',
      reviewLink: '/reviews/platforms/cerebral',
      pros: [
        'Integrated therapy and medication services',
        'Monthly medication delivery',
        'Regular provider check-ins',
        'Affordable subscription plans'
      ],
      cons: [
        'Not available in all states',
        'Limited psychiatrist availability in some areas',
        'Not suitable for severe mental health conditions',
        'Some insurance limitations'
      ]
    },
    {
      name: 'Brightside',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Specialized online service focusing on depression and anxiety treatment with precision prescribing technology.',
      rating: 4.4,
      bestFor: 'Depression, Anxiety',
      reviewLink: '/reviews/platforms/brightside',
      pros: [
        'Data-driven medication selection',
        'Specialized in depression treatment',
        'Regular progress tracking',
        'Insurance coverage options'
      ],
      cons: [
        'Limited to anxiety and depression',
        'Higher price point than some competitors',
        'No couples or family therapy',
        'Limited therapy session frequency'
      ]
    },
    {
      name: 'Talkspace Psychiatry',
      image: 'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Psychiatric services from the established Talkspace platform, offering medication management alongside therapy options.',
      rating: 4.0,
      bestFor: 'Multiple conditions, Existing Talkspace users',
      reviewLink: '/reviews/platforms/talkspace',
      pros: [
        'Integration with Talkspace therapy',
        'Board-certified psychiatrists',
        'Flexible scheduling',
        'Wide insurance acceptance'
      ],
      cons: [
        'Higher cost for initial consultation',
        'Sometimes limited psychiatrist availability',
        'Separate fee structure from therapy',
        'Video-only psychiatry sessions'
      ]
    }
  ];

  // Condition data
  const conditions = [
    {
      name: 'Depression',
      description: 'Online medication management for depression typically involves SSRIs, SNRIs, and other antidepressants.',
      link: '/conditions-az/depression'
    },
    {
      name: 'Anxiety',
      description: 'Treatment may include SSRIs, SNRIs, buspirone, and sometimes benzodiazepines for short-term use.',
      link: '/conditions-az/anxiety-disorders'
    },
    {
      name: 'ADHD',
      description: 'Online providers may prescribe non-stimulant medications, with some platforms offering stimulant medications in certain states.',
      link: '/conditions-az/adhd'
    },
    {
      name: 'Insomnia',
      description: 'Treatment options include sleep aids and medications that address underlying anxiety or depression.',
      link: '/conditions-az/insomnia'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Medication Management Therapy Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive reviews of online platforms offering psychiatric services and medication management for mental health conditions.
          </p>
        </div>

        {/* What is Medication Management */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What is Online Medication Management?</h2>
          <div className="md:flex gap-8">
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Online medication management services provide psychiatric care and prescription medications through telehealth platforms. These services connect patients with licensed psychiatrists, psychiatric nurse practitioners, or other qualified prescribers who can diagnose conditions, prescribe appropriate medications, and monitor treatment progress remotely.
              </p>
              <p className="text-gray-600 mb-4">
                Most platforms offer video consultations for initial evaluations and follow-up appointments. After assessment, providers can prescribe medications that are delivered directly to patients or sent to local pharmacies. Regular check-ins allow for medication adjustments and side effect monitoring.
              </p>
              <p className="text-gray-600">
                Many services also integrate medication management with therapy options, creating a comprehensive approach to mental health treatment that addresses both biological and psychological factors.
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Convenient access to psychiatric care</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>No travel or waiting rooms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Often more affordable than in-person care</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Regular monitoring and adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Integration with therapy services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Top Rated Platforms */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Top-Rated Medication Management Platforms</h2>
        
        {platforms.map((platform, index) => (
          <div key={platform.name} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={platform.image}
                  alt={platform.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{platform.name}</h3>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(platform.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="font-bold">{platform.rating}/5</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  {platform.description}
                </p>
                <div className="mb-6">
                  <span className="font-bold text-gray-800">Best for: </span>
                  <span className="text-gray-600">{platform.bestFor}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Pros</h4>
                    <ul className="space-y-1">
                      {platform.pros.map((pro, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Cons</h4>
                    <ul className="space-y-1">
                      {platform.cons.map((con, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button 
                  as={Link}
                  to={platform.reviewLink}
                  variant="primary"
                >
                  Read Full Review
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Conditions Treated */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Conditions Treated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conditions.map((condition) => (
              <div key={condition.name} className="flex">
                <div className="mr-4">
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Pill className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{condition.name}</h3>
                  <p className="text-gray-600 mb-2">{condition.description}</p>
                  <Link to={condition.link} className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Learn more about {condition.name.toLowerCase()} <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Review */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How We Review Medication Management Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Pill className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Provider Qualifications</h3>
              <p className="text-gray-600">
                We evaluate the credentials, licensing, and experience of the psychiatric providers on each platform, including their specializations and areas of expertise.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Treatment Approach</h3>
              <p className="text-gray-600">
                We assess each platform's diagnostic process, medication options, follow-up protocols, and how they handle medication adjustments and side effects.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Platform Experience</h3>
              <p className="text-gray-600">
                We examine the user experience, including appointment scheduling, video quality, medication delivery or pickup options, and overall ease of use.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can online providers prescribe all types of psychiatric medications?</h3>
              <p className="text-gray-600">
                Online providers can prescribe many psychiatric medications, but there are limitations. Most can prescribe antidepressants, anti-anxiety medications, mood stabilizers, and some sleep aids. However, controlled substances like stimulants for ADHD and benzodiazepines have more restrictions. Some platforms can prescribe these in certain states, while others cannot prescribe controlled substances at all.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do medication deliveries work?</h3>
              <p className="text-gray-600">
                Most platforms offer two options: direct delivery to your home or sending prescriptions to your local pharmacy. Home delivery is typically handled through partner pharmacies and may be included in subscription costs or charged separately. Delivery times vary but usually take 2-7 days. Some medications, particularly controlled substances, may only be available through local pharmacy pickup.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is online medication management covered by insurance?</h3>
              <p className="text-gray-600">
                Many platforms now accept insurance for psychiatric services. Coverage varies by platform and insurance provider. Some platforms are in-network with major insurers, while others offer out-of-network benefits or superbills for reimbursement. Always verify coverage with both the platform and your insurance company before beginning treatment.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How often will I meet with my provider?</h3>
              <p className="text-gray-600">
                Initial consultations typically last 30-60 minutes. Follow-up appointments are usually shorter (15-30 minutes) and scheduled based on your treatment needs. When starting a new medication, follow-ups might be every 2-4 weeks. Once stabilized, appointments may be scheduled every 1-3 months. Most platforms allow for messaging between appointments for questions or concerns.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find the Right Medication Management Service</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our assessment to get matched with the best online medication management service for your specific needs and preferences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="light"
              size="lg"
            >
              Find Your Match
            </Button>
            <Button 
              as={Link} 
              to="/best/platforms/best-medication-therapy-platforms" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              View Top-Rated Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationTherapy;
