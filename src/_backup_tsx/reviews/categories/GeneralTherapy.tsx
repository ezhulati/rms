import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users } from 'lucide-react';
import Button from '../../../components/Button';

const GeneralTherapy = () => {
  // Platform data
  const platforms = [
    {
      name: 'BetterHelp',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'The largest online therapy platform offering a wide range of licensed therapists and flexible communication options.',
      rating: 4.5,
      bestFor: 'General mental health concerns, anxiety, depression',
      reviewLink: '/reviews/platforms/betterhelp',
      pros: [
        'Large network of licensed therapists',
        'Multiple communication methods (text, voice, video)',
        'Flexible scheduling',
        'Weekly live sessions'
      ],
      cons: [
        'No insurance coverage (except some FSA/HSA)',
        'Therapist matching algorithm can be hit or miss',
        'Not suitable for severe mental health conditions',
        'Limited therapist selection in some regions'
      ]
    },
    {
      name: 'Talkspace',
      image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Established online therapy platform with insurance coverage options and integrated psychiatric services.',
      rating: 4.3,
      bestFor: 'Depression, anxiety, stress management',
      reviewLink: '/reviews/platforms/talkspace',
      pros: [
        'Insurance coverage options',
        'Integrated psychiatric services',
        'Unlimited messaging',
        'Structured therapy approach'
      ],
      cons: [
        'Higher price point',
        'Response times can vary',
        'Limited live session options in basic plans',
        'Some users report platform technical issues'
      ]
    },
    {
      name: 'Online-Therapy.com',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'CBT-focused therapy platform with comprehensive toolbox and structured program approach.',
      rating: 4.4,
      bestFor: 'Anxiety, depression, structured CBT approach',
      reviewLink: '/reviews/platforms/online-therapy',
      pros: [
        'Structured CBT program',
        'Comprehensive self-help toolbox',
        'Daily therapist feedback (weekdays)',
        'Worksheets and activities'
      ],
      cons: [
        'No insurance coverage',
        'Limited communication methods in basic plan',
        'Smaller therapist network',
        'CBT focus may not suit everyone'
      ]
    }
  ];

  // Communication methods
  const communicationMethods = [
    {
      name: 'Text Messaging',
      icon: MessageSquare,
      description: 'Asynchronous text-based communication with your therapist through a secure platform.',
      benefits: [
        'Convenient for busy schedules',
        'Time to reflect on responses',
        'Creates written record of therapy',
        'Less intimidating for some clients'
      ]
    },
    {
      name: 'Video Sessions',
      icon: Video,
      description: 'Face-to-face virtual sessions similar to traditional in-person therapy.',
      benefits: [
        'Visual cues and body language',
        'Real-time conversation',
        'More personal connection',
        'Similar to traditional therapy experience'
      ]
    },
    {
      name: 'Phone Sessions',
      icon: Phone,
      description: 'Voice-only therapy sessions conducted over the phone or through the platform.',
      benefits: [
        'No need for stable internet connection',
        'More privacy than video',
        'Focus on verbal communication',
        'Good middle ground between text and video'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">General Online Therapy Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive reviews of online therapy platforms offering general mental health counseling for anxiety, depression, stress, and more.
          </p>
        </div>

        {/* What is Online Therapy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What is Online Therapy?</h2>
          <div className="md:flex gap-8">
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Online therapy (also known as teletherapy or virtual therapy) provides mental health counseling and support through digital platforms. It connects clients with licensed therapists through secure video calls, phone sessions, or text-based communication.
              </p>
              <p className="text-gray-600 mb-4">
                General online therapy platforms typically offer support for common mental health concerns like anxiety, depression, stress, relationship issues, grief, and personal growth. These services make therapy more accessible by eliminating geographical barriers, reducing costs, and providing flexible scheduling options.
              </p>
              <p className="text-gray-600">
                Most platforms offer subscription-based models with weekly live sessions and additional communication options, though specific features vary by provider. Research shows that online therapy can be as effective as in-person therapy for many common mental health concerns.
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Convenient access from anywhere</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>More affordable than traditional therapy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Flexible communication options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Greater privacy and comfort</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Wide selection of therapists</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Top Rated Platforms */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Top-Rated General Therapy Platforms</h2>
        
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

        {/* Communication Methods */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Communication Methods</h2>
          <p className="text-gray-600 mb-8">
            Online therapy platforms offer various ways to communicate with your therapist. Each method has its own advantages and may be better suited to different needs and preferences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communicationMethods.map((method) => (
              <div key={method.name} className="bg-gray-50 rounded-lg p-6">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <method.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{method.name}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <h4 className="font-bold text-gray-800 mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {method.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How We Review */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How We Review Online Therapy Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Therapist Qualifications</h3>
              <p className="text-gray-600">
                We evaluate the credentials, licensing, and vetting process for therapists on each platform, as well as the breadth and depth of expertise available.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Session Quality & Availability</h3>
              <p className="text-gray-600">
                We assess the quality, frequency, and duration of therapy sessions, along with the responsiveness and availability of therapists.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Value & Pricing</h3>
              <p className="text-gray-600">
                We analyze subscription costs, what's included in each plan, insurance coverage options, and overall value compared to traditional therapy.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Privacy & Security</h3>
              <p className="text-gray-600">
                We examine each platform's privacy policies, data protection measures, and compliance with healthcare regulations like HIPAA.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Communication Options</h3>
              <p className="text-gray-600">
                We evaluate the variety and quality of communication methods available, including text, audio, video, and live sessions.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">User Experience</h3>
              <p className="text-gray-600">
                We consider the platform's ease of use, accessibility, customer support, and overall client satisfaction based on user reviews.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is online therapy as effective as in-person therapy?</h3>
              <p className="text-gray-600">
                Research shows that online therapy can be just as effective as in-person therapy for many common mental health concerns, including anxiety, depression, and stress. Multiple studies have found comparable outcomes between virtual and face-to-face therapy. However, online therapy may not be suitable for severe mental health conditions, crises, or situations requiring in-person intervention.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How much does online therapy cost?</h3>
              <p className="text-gray-600">
                Online therapy typically costs between $60-$120 per week, depending on the platform and subscription plan. This is often more affordable than traditional therapy, which can range from $100-$200 per session. Many platforms offer subscription models that include weekly live sessions and additional features like messaging. Some services accept insurance, while others provide superbills for out-of-network reimbursement.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I choose the right therapist?</h3>
              <p className="text-gray-600">
                Most platforms offer therapist matching services based on your needs and preferences. When selecting a therapist, consider their specializations, therapeutic approaches, and experience with your specific concerns. Many services allow you to switch therapists if the initial match isn't a good fit. It's important to find someone you feel comfortable with, as the therapeutic relationship is a key factor in successful therapy outcomes.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is online therapy confidential and secure?</h3>
              <p className="text-gray-600">
                Reputable online therapy platforms use encryption and other security measures to protect your privacy. They should be HIPAA-compliant and have clear privacy policies. Therapists are bound by the same confidentiality rules as in-person therapy, with similar exceptions (such as risk of harm to self or others). For additional privacy, consider your own environment when having sessions and use secure internet connections.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect Therapy Match</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our assessment to get matched with the best online therapy platform for your specific needs, preferences, and budget.
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
              to="/best/platforms/best-online-therapy-platforms" 
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

export default GeneralTherapy;
