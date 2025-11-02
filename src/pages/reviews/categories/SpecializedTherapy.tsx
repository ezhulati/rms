import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Heart, Users, Brain, Sparkles, Leaf } from 'lucide-react';
import Button from '../../../components/Button';

const SpecializedTherapy = () => {
  // Specialized therapy types
  const specializedTypes = [
    {
      name: 'Couples Therapy',
      icon: Heart,
      description: 'Online therapy focused on improving relationship dynamics, communication, and resolving conflicts between partners.',
      platforms: ['ReGain', 'Talkspace Couples Therapy', 'Ritual'],
      reviewLink: '/reviews/specialty/couples-therapy',
      benefits: [
        'Convenient joint sessions from home',
        'Flexible scheduling for busy couples',
        'More affordable than traditional couples counseling',
        'Specialized relationship therapists'
      ]
    },
    {
      name: 'Trauma & PTSD Therapy',
      icon: Brain,
      description: 'Specialized online therapy for processing traumatic experiences and managing PTSD symptoms using evidence-based approaches.',
      platforms: ['BetterHelp', 'Talkspace', 'Online-Therapy.com'],
      reviewLink: '/reviews/specialty/online-therapy-for-ptsd',
      benefits: [
        'Trauma-informed therapists',
        'EMDR and CPT specialists available',
        'Private environment for processing trauma',
        'Consistent support between sessions'
      ]
    },
    {
      name: 'Anxiety Treatment',
      icon: Sparkles,
      description: 'Specialized online therapy focusing on anxiety disorders using CBT, exposure therapy, and other evidence-based approaches.',
      platforms: ['Online-Therapy.com', 'BetterHelp', 'Brightside'],
      reviewLink: '/reviews/specialty/anxiety-treatment',
      benefits: [
        'CBT-focused anxiety management',
        'Exposure therapy guidance',
        'Panic attack coping strategies',
        'Between-session support tools'
      ]
    },
    {
      name: 'Depression Treatment',
      icon: Leaf,
      description: 'Specialized online therapy for depression, combining therapeutic approaches with lifestyle interventions and potential medication management.',
      platforms: ['Brightside', 'Talkspace', 'BetterHelp'],
      reviewLink: '/reviews/specialty/talkspace-for-depression',
      benefits: [
        'Evidence-based depression interventions',
        'Mood tracking and monitoring',
        'Integrated medication options on some platforms',
        'Specialized depression therapists'
      ]
    }
  ];

  // Platform data
  const platforms = [
    {
      name: 'ReGain',
      image: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Specialized online platform focused exclusively on relationship counseling and couples therapy.',
      rating: 4.3,
      specialty: 'Couples Therapy',
      reviewLink: '/reviews/platforms/regain-review',
      pros: [
        'Specialized relationship counselors',
        'Joint sessions with both partners',
        'Individual messaging options',
        'Affordable compared to traditional couples therapy'
      ],
      cons: [
        'No three-way live sessions (both partners must be in same location)',
        'Limited insurance coverage',
        'No free trial period',
        'Cannot choose specific therapist'
      ]
    },
    {
      name: 'Pride Counseling',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Online therapy platform specializing in LGBTQ+ affirming care and issues specific to the LGBTQ+ community.',
      rating: 4.4,
      specialty: 'LGBTQ+ Therapy',
      reviewLink: '/reviews/platforms/pride-counseling',
      pros: [
        'LGBTQ+ specialized therapists',
        'Identity-affirming care',
        'Cultural competence in LGBTQ+ issues',
        'Multiple communication options'
      ],
      cons: [
        'Limited insurance coverage',
        'Therapist matching system can be hit or miss',
        'Part of BetterHelp network (not independent)',
        'No psychiatry services'
      ]
    },
    {
      name: 'Teen Counseling',
      image: 'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Online therapy platform designed specifically for teenagers (13-19) with age-appropriate approaches and parental involvement options.',
      rating: 4.2,
      specialty: 'Teen Therapy',
      reviewLink: '/reviews/platforms/teen-counseling',
      pros: [
        'Therapists specialized in adolescent issues',
        'Private space for teens to communicate',
        'Parent portal with appropriate oversight',
        'Multiple communication methods'
      ],
      cons: [
        'Limited insurance coverage',
        'No three-way sessions with parents',
        'Not suitable for crisis intervention',
        'Part of BetterHelp network (not independent)'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Specialized Online Therapy Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive reviews of online therapy platforms offering specialized treatment for specific conditions, populations, and therapeutic approaches.
          </p>
        </div>

        {/* What is Specialized Therapy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What is Specialized Online Therapy?</h2>
          <div className="md:flex gap-8">
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Specialized online therapy focuses on specific mental health conditions, relationship dynamics, or demographic groups with unique needs. Unlike general therapy platforms, specialized services offer therapists with advanced training and experience in particular areas, along with tailored approaches and resources.
              </p>
              <p className="text-gray-600 mb-4">
                These platforms may be dedicated exclusively to one specialty (like couples counseling or teen therapy) or offer specialized tracks within a larger service. The key advantage is matching clients with therapists who have expertise in their specific concerns, potentially leading to more effective treatment outcomes.
              </p>
              <p className="text-gray-600">
                Specialized therapy can be particularly beneficial for complex conditions, relationship issues, identity-related concerns, or situations requiring specific therapeutic modalities that go beyond general counseling approaches.
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Therapists with specialized training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Tailored therapeutic approaches</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Condition-specific resources and tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Community with similar concerns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>More targeted treatment outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Specialized Therapy */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Types of Specialized Online Therapy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {specializedTypes.map((type) => (
            <div key={type.name} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <type.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{type.name}</h3>
                  <p className="text-gray-600 mb-3">{type.description}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-800 mb-2">Top Platforms:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {type.platforms.map((platform) => (
                    <span key={platform} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-5">
                <h4 className="font-bold text-gray-800 mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                as={Link}
                to={type.reviewLink}
                variant="outline"
                size="sm"
              >
                Read Full Review
              </Button>
            </div>
          ))}
        </div>

        {/* Top Specialized Platforms */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Top Specialized Therapy Platforms</h2>
        
        {platforms.map((platform) => (
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
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{platform.name}</h3>
                    <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm inline-block">
                      {platform.specialty}
                    </div>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
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

        {/* Other Specialized Categories */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Specialized Therapy Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Population-Specific Therapy</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/reviews/specialty/therapy-for-veterans" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Therapy for Veterans</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/specialty/therapy-for-seniors" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Therapy for Seniors</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/specialty/therapy-for-college-students" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Therapy for College Students</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Condition-Specific Therapy</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/reviews/specialty/eating-disorder-treatment" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Eating Disorder Treatment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/specialty/addiction-counseling" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Addiction Counseling</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/specialty/ocd-treatment" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>OCD Treatment</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Approach-Specific Therapy</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/reviews/specialty/dbt-therapy-online" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>DBT Therapy Online</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/specialty/emdr-therapy-online" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>EMDR Therapy Online</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/specialty/mindfulness-based-therapy" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Mindfulness-Based Therapy</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Choose */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose a Specialized Therapy Platform</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">1. Identify Your Specific Needs</h3>
              <p className="text-gray-600">
                Start by clearly defining what specialized support you're looking for. Is it related to a specific condition, relationship dynamic, identity, or therapeutic approach? The more specific you can be about your needs, the better you can match with an appropriate specialized service.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">2. Verify Therapist Credentials and Specialization</h3>
              <p className="text-gray-600">
                Look beyond general licensing to verify that therapists have specialized training, certifications, or extensive experience in your area of concern. For example, couples therapists should have specific training in relationship counseling approaches like Gottman Method or Emotionally Focused Therapy.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">3. Evaluate Platform-Specific Features</h3>
              <p className="text-gray-600">
                Specialized platforms often offer unique features tailored to their focus area. For couples therapy, look for joint session capabilities; for anxiety treatment, check for panic attack resources or exposure therapy tools; for LGBTQ+ therapy, ensure cultural competence and affirming approaches.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">4. Consider Communication Methods</h3>
              <p className="text-gray-600">
                Different specialties may benefit from specific communication methods. For example, trauma therapy might be better suited to video sessions, while teen therapy might benefit from text options. Ensure the platform offers communication methods appropriate for your specialized needs.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is specialized online therapy more expensive than general therapy?</h3>
              <p className="text-gray-600">
                Specialized online therapy can sometimes cost more than general therapy platforms, particularly for niche specialties or highly credentialed therapists. However, many specialized platforms remain more affordable than their in-person equivalents. Prices typically range from $60-$150 per week, depending on the specialty and level of service.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Does insurance cover specialized online therapy?</h3>
              <p className="text-gray-600">
                Insurance coverage varies widely among specialized platforms. Some, like Talkspace's specialized services, may accept certain insurance plans. Others, particularly niche platforms, often operate on a self-pay model but may provide superbills for out-of-network reimbursement. Always verify coverage directly with both the platform and your insurance provider.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I know if I need specialized therapy versus general therapy?</h3>
              <p className="text-gray-600">
                Consider specialized therapy if you have a specific condition requiring targeted treatment approaches (like OCD or PTSD), relationship issues, identity-related concerns, or if you've tried general therapy without satisfactory results. General therapy is often suitable for broader concerns like mild to moderate anxiety, depression, stress management, or personal growth.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can specialized online therapy handle severe or complex mental health conditions?</h3>
              <p className="text-gray-600">
                While specialized online therapy can address many complex conditions, there are limitations. Most platforms are not suitable for active suicidal ideation, severe psychiatric conditions requiring intensive treatment, or situations needing immediate crisis intervention. Some specialized platforms may offer higher levels of care than general platforms but still recommend in-person treatment for severe cases.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Specialized Therapy That Meets Your Needs</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our assessment to get matched with the right specialized therapy platform for your specific concerns and preferences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="light"
              size="lg"
            >
              Find Your Specialized Match
            </Button>
            <Button 
              as={Link} 
              to="/best/platforms/specialized-therapy-platforms" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              View Top Specialized Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializedTherapy;
