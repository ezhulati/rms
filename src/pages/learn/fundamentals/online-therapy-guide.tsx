import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertCircle, Laptop, Video, MessageSquare, Phone, DollarSign, Shield, Clock } from 'lucide-react';
import Button from '../../../components/Button';

const OnlineTherapyGuide = () => {
  // Communication methods data
  const communicationMethods = [
    {
      name: 'Video Sessions',
      icon: Video,
      description: 'Face-to-face virtual sessions similar to traditional in-person therapy.',
      benefits: [
        'Visual cues and body language',
        'Real-time conversation',
        'Most similar to traditional therapy',
        'Deeper therapeutic connection'
      ],
      considerations: [
        'Requires stable internet connection',
        'Needs private, quiet space',
        'May feel uncomfortable for some',
        'Scheduled time commitment'
      ]
    },
    {
      name: 'Audio/Phone Sessions',
      icon: Phone,
      description: 'Voice-only therapy sessions conducted over the phone or through the platform.',
      benefits: [
        'No need for video setup',
        'Can be done while walking or moving',
        'May feel less intimidating than video',
        'Works with limited internet bandwidth'
      ],
      considerations: [
        'Lacks visual cues and body language',
        'Still requires scheduled time',
        'Needs relatively private space',
        'May have connection issues'
      ]
    },
    {
      name: 'Text Messaging',
      icon: MessageSquare,
      description: 'Asynchronous text-based communication with your therapist through a secure platform.',
      benefits: [
        'Available anytime, anywhere',
        'Time to reflect on responses',
        'Creates written record of therapy',
        'No scheduling required'
      ],
      considerations: [
        'Slower response times',
        'Potential for misinterpretation',
        'Less immediate support',
        'Requires written expression skills'
      ]
    }
  ];

  // Platform features to consider
  const platformFeatures = [
    {
      name: 'Therapist Qualifications',
      description: 'Check that all therapists are licensed professionals with verified credentials and experience in your areas of concern.'
    },
    {
      name: 'Communication Options',
      description: 'Consider which communication methods (video, audio, text) are available and which would work best for your needs and preferences.'
    },
    {
      name: 'Pricing Structure',
      description: 'Understand the cost, billing cycle, what\'s included in the subscription, and whether insurance coverage or financial aid is available.'
    },
    {
      name: 'Scheduling Flexibility',
      description: 'Look at session availability, cancellation policies, and whether the platform offers evening or weekend appointments.'
    },
    {
      name: 'Security & Privacy',
      description: 'Ensure the platform is HIPAA-compliant with strong encryption and clear privacy policies to protect your sensitive information.'
    },
    {
      name: 'Therapist Matching',
      description: 'Check if the platform offers therapist matching services or allows you to browse and select your own therapist.'
    },
    {
      name: 'Specialized Services',
      description: 'Some platforms offer specialized services for specific conditions, couples therapy, teen counseling, or medication management.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Online Therapy Guide" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Online Therapy Guide</h1>
              <p className="text-xl text-gray-600 mb-6">
                Everything you need to know about online therapy, from how it works to what to expect in your first session and how to get the most from your experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link} 
                  to="/tools/matchers/therapy-platform-matcher" 
                  variant="primary"
                  icon={Laptop}
                >
                  Find Your Online Therapy Match
                </Button>
                <Button 
                  as={Link}
                  to="/best/platforms/best-online-therapy-platforms" 
                  variant="outline"
                  icon={ArrowRight}
                >
                  View Top Platforms
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* What is Online Therapy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What is Online Therapy?</h2>
          <div className="md:flex gap-8">
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Online therapy (also known as teletherapy, virtual therapy, or e-therapy) is the delivery of mental health counseling and support through digital platforms. It connects clients with licensed therapists through secure video calls, phone sessions, or text-based communication.
              </p>
              <p className="text-gray-600 mb-4">
                This approach to therapy has grown significantly in recent years, offering a convenient and accessible alternative to traditional in-person therapy. Online therapy platforms typically provide subscription-based services that include regular sessions with a licensed therapist, along with additional features like messaging, resources, and tools.
              </p>
              <p className="text-gray-600">
                Research has shown that online therapy can be as effective as in-person therapy for many common mental health concerns, including anxiety, depression, and stress management. The key is finding the right platform and therapist that matches your specific needs and preferences.
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
                    <span>Eliminates travel time and costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Often more affordable than in-person</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Flexible communication options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Greater privacy and comfort</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Communication Methods */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Communication Methods</h2>
        
        {communicationMethods.map((method) => (
          <div key={method.name} className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start mb-4">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <method.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.name}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
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
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Considerations:</h4>
                <ul className="space-y-1">
                  {method.considerations.map((consideration, i) => (
                    <li key={i} className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{consideration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Choosing the Right Platform */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Choosing the Right Platform</h2>
          <p className="text-gray-600 mb-6">
            With numerous online therapy platforms available, it's important to find one that best meets your specific needs and preferences. Here are key features to consider when evaluating different platforms:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platformFeatures.map((feature) => (
              <div key={feature.name} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{feature.name}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="primary"
            >
              Find Your Platform Match
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find the Right Online Therapist?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Now that you understand how online therapy works, take the next step in your mental health journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="light"
              size="lg"
            >
              Find Your Therapy Match
            </Button>
            <Button 
              as={Link} 
              to="/best/platforms/best-online-therapy-platforms" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Explore Top Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineTherapyGuide;
