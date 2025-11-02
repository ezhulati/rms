import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain } from 'lucide-react';
import HowWeReviewed from '../components/HowWeReviewed';
import Button from '../components/Button';
import RatingBreakdown from '../components/RatingBreakdown';

const CerebralReview = () => {
  // Rating categories
  const ratingCategories = [
    {
      name: "Therapist Qualifications",
      score: 4.0,
      description: "Licensed professionals with medication management expertise."
    },
    {
      name: "Platform Usability",
      score: 4.0,
      description: "Clean interface with good functionality, though some features could be more intuitive."
    },
    {
      name: "Communication Options",
      score: 3.5,
      description: "Multiple communication methods but with some scheduling limitations."
    },
    {
      name: "Privacy & Security",
      score: 4.0,
      description: "HIPAA-compliant with strong security measures for medication services."
    },
    {
      name: "Value & Affordability",
      score: 4.0,
      description: "Good value with insurance coverage, though medication plans can be costly."
    },
    {
      name: "Client Satisfaction",
      score: 3.5,
      description: "Generally positive feedback, with some concerns about provider availability."
    }
  ];

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="h-5 w-5 fill-current" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<Star key={i} className="h-5 w-5 fill-current" />);
      } else {
        stars.push(<Star key={i} className="h-5 w-5" strokeWidth={1} />);
      }
    }
    return <div className="flex text-yellow-400">{stars}</div>;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Cerebral Review" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 md:mb-0">Cerebral Review</h1>
                <div className="flex items-center">
                  <div className="mr-2">
                    {renderStars(4)}
                  </div>
                  <span className="text-lg font-bold text-gray-700">4.0/5</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg mb-6">
                Cerebral is a comprehensive mental health platform that combines therapy with medication management services. Our in-depth review examines its integrated care approach, pricing structure, and effectiveness for various mental health conditions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Pros</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Combined therapy and medication services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Insurance coverage available</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Medication delivery included</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Multiple subscription options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Regular provider check-ins</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Cons</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Higher cost for medication plans</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Not available in all states</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Limited therapist selection</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Less flexible scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Basic messaging features</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  as="a"
                  href="https://www.cerebral.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="primary"
                  icon={ExternalLink}
                >
                  Visit Cerebral
                </Button>
                <Button 
                  as={Link}
                  to="/compare/platforms/talkspace-vs-cerebral" 
                  variant="outline"
                  icon={ArrowRight}
                >
                  Compare with Talkspace
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="mb-8">
          <RatingBreakdown 
            overallRating={4.0} 
            categories={ratingCategories}
            showDescription={true}
          />
        </div>

        {/* Quick Facts */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Cerebral at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Pricing</h3>
                <p className="text-gray-600">$85-$325 per month</p>
                <p className="text-sm text-gray-500 mt-1">Insurance coverage available</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Communication Options</h3>
                <div className="flex space-x-2 mb-1">
                  <MessageSquare className="h-4 w-4 text-indigo-600" title="Messaging" />
                  <Video className="h-4 w-4 text-indigo-600" title="Video" />
                  <Phone className="h-4 w-4 text-indigo-600" title="Phone" />
                </div>
                <p className="text-sm text-gray-500">Video sessions + messaging support</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Subscription</h3>
                <p className="text-gray-600">Monthly billing, cancel anytime</p>
                <p className="text-sm text-gray-500 mt-1">Multiple plan options</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Insurance</h3>
                <p className="text-gray-600">Many major providers accepted</p>
                <p className="text-sm text-gray-500 mt-1">Coverage varies by state</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Provider Network</h3>
                <p className="text-gray-600">Licensed therapists & prescribers</p>
                <p className="text-sm text-gray-500 mt-1">Integrated care teams</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Best For</h3>
                <p className="text-gray-600">Combined therapy & medication</p>
                <p className="text-sm text-gray-500 mt-1">Anxiety, depression, ADHD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Review */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Full Cerebral Review</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">What is Cerebral?</h3>
            <p className="text-gray-600 mb-4">
              Cerebral is a comprehensive mental health platform that combines therapy with medication management services. The platform aims to provide integrated care by connecting clients with both therapists and prescribing providers when needed.
            </p>
            <p className="text-gray-600">
              What distinguishes Cerebral is its focus on providing complete mental health care through a combination of therapy, medication (when appropriate), and regular check-ins with care providers. The platform specializes in treating conditions like anxiety, depression, insomnia, and ADHD.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">How Cerebral Works</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-gray-800 mb-3">Getting Started</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>Complete an initial assessment about your symptoms and medical history</li>
                <li>Choose from available subscription plans</li>
                <li>Schedule an evaluation with a prescribing provider if needed</li>
                <li>Get matched with a therapist or counselor</li>
                <li>Begin treatment through the platform</li>
              </ol>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Care Plans</h4>
                <p className="text-gray-600 mb-3">
                  Cerebral offers several care plans to match different needs:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Therapy only</li>
                  <li>Medication only</li>
                  <li>Medication + Care counseling</li>
                  <li>Medication + Therapy</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  Each plan includes regular check-ins and ongoing support from your care team.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Treatment Process</h4>
                <p className="text-gray-600 mb-3">
                  Treatment typically includes:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Monthly video sessions with providers</li>
                  <li>Regular progress tracking</li>
                  <li>Medication delivery (if prescribed)</li>
                  <li>Messaging support between sessions</li>
                  <li>Access to self-care resources</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">Medication Management</h4>
              <p className="text-gray-600 mb-3">
                For clients on medication plans, Cerebral provides:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Initial psychiatric evaluation</li>
                <li>Regular follow-up appointments</li>
                <li>Monthly medication delivery</li>
                <li>Ongoing medication monitoring</li>
                <li>Prescription adjustments as needed</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pricing & Value</h3>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
              <div className="bg-indigo-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-gray-800">Subscription Plans</h4>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800">Therapy Plan</h5>
                    <p className="text-gray-600 mb-2">$85/month</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>Weekly video/phone therapy sessions</li>
                      <li>Messaging with therapist</li>
                      <li>Self-care tools and resources</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800">Medication + Care Counseling</h5>
                    <p className="text-gray-600 mb-2">$95/month</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>Monthly provider visits</li>
                      <li>Regular care counseling</li>
                      <li>Medication delivery</li>
                      <li>Ongoing support</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800">Medication + Therapy</h5>
                    <p className="text-gray-600 mb-2">$325/month</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>All features of both plans</li>
                      <li>Integrated care approach</li>
                      <li>Comprehensive support</li>
                      <li>Regular provider coordination</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-indigo-50 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-800">Insurance Coverage</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">
                    Cerebral works with several major insurance providers, including:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>Cigna</li>
                    <li>Aetna</li>
                    <li>United Healthcare</li>
                    <li>Select Blue Cross Blue Shield plans</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-indigo-50 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-800">Additional Costs</h4>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <strong>Insurance copays:</strong> Vary by provider and plan
                    </li>
                    <li>
                      <strong>Medication costs:</strong> Included in subscription
                    </li>
                    <li>
                      <strong>Cancellation fees:</strong> None with notice
                    </li>
                    <li>
                      <strong>Initial evaluation:</strong> Included in subscription
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">Value Assessment</h4>
              <p className="text-gray-600 mb-3">
                Cerebral's value proposition depends largely on your needs and insurance coverage:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Excellent value for those needing both therapy and medication management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Good value with insurance coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Medication delivery adds convenience value</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Higher cost for comprehensive care without insurance</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Provider Qualifications</h3>
            
            <p className="text-gray-600 mb-4">
              Cerebral maintains strict standards for their providers:
            </p>
            
            <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
              <li>Licensed therapists and counselors</li>
              <li>Board-certified physicians and nurse practitioners</li>
              <li>Care counselors with relevant certifications</li>
              <li>Regular quality monitoring</li>
            </ul>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">Care Team Structure</h4>
              <p className="text-gray-600 mb-3">
                Cerebral uses a team-based approach to care:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Prescribing providers for medication management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Licensed therapists for counseling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Care counselors for ongoing support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Coordinated care between team members</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">User Experience</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Platform & Interface</h4>
                <p className="text-gray-600">
                  Cerebral's platform offers a clean, professional interface for managing care. The mobile app (iOS and Android) provides easy access to appointments, messaging, and medication tracking. Some users report occasional technical issues with video sessions.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Privacy & Security</h4>
                <p className="text-gray-600">
                  As a platform handling both therapy and medication services, Cerebral maintains strict security standards including HIPAA compliance, data encryption, and secure prescription processing.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">Service Quality</h4>
              <p className="text-gray-600 mb-3">
                Our analysis and user feedback reveals several key points about service quality:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Consistent medication management services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Regular provider check-ins and monitoring</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Some users report provider turnover</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Limited flexibility in appointment scheduling</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Who Cerebral Is Best For</h3>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
              <div className="bg-green-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-gray-800">Ideal For</h4>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Individuals needing both therapy and medication</strong> who want coordinated care in one platform</li>
                  <li><strong>People with insurance coverage</strong> looking to minimize out-of-pocket costs</li>
                  <li><strong>Those seeking treatment for anxiety, depression, or ADHD</strong> with medication management</li>
                  <li><strong>Individuals who prefer structured treatment plans</strong> with regular check-ins</li>
                  <li><strong>People who value medication delivery service</strong> for convenience</li>
                  <li><strong>Those looking for comprehensive mental health care</strong> with multiple provider types</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-gray-800">Not Recommended For</h4>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Individuals in crisis</strong> or with severe mental health conditions</li>
                  <li><strong>People seeking the lowest-cost therapy option</strong> without medication</li>
                  <li><strong>Those needing highly flexible scheduling</strong> or frequent appointment changes</li>
                  <li><strong>Individuals in states where Cerebral doesn't operate</strong> or have full services</li>
                  <li><strong>People seeking specialized treatments</strong> like EMDR or couples therapy</li>
                  <li><strong>Those who prefer complete provider choice</strong> or need frequent provider changes</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Alternatives to Cerebral</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-indigo-50 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-800">Talkspace</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-3">
                    <strong>Best for:</strong> Insurance coverage, flexible therapy options
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Price:</strong> $65-$99/week
                  </p>
                  <p className="text-gray-600 mb-3">
                    Similar integrated care model but with more therapy-focused approach and better messaging features.
                  </p>
                  <Link to="/reviews/platforms/talkspace" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Read Talkspace review <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-indigo-50 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-800">Brightside</h4>
                </div>
                <div className="p -4">
                  <p className="text-gray-600 mb-3">
                    <strong>Best for:</strong> Depression and anxiety focus
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Price:</strong> $95-$349/month
                  </p>
                  <p className="text-gray-600 mb-3">
                    Specialized in depression and anxiety treatment with a data-driven approach to medication management.
                  </p>
                  <Link to="/reviews/platforms/brightside" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Read Brightside review <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-indigo-50 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-800">BetterHelp</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-3">
                    <strong>Best for:</strong> Therapy-only services
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Price:</strong> $60-$90/week
                  </p>
                  <p className="text-gray-600 mb-3">
                    Larger therapy network with more flexible scheduling but no medication services.
                  </p>
                  <Link to="/reviews/platforms/betterhelp" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Read BetterHelp review <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Final Verdict</h3>
            
            <p className="text-gray-600 mb-4">
              Cerebral earns our 4.0/5 rating for providing a comprehensive mental health platform that effectively combines therapy and medication management. The platform excels in providing coordinated care and convenient medication delivery, making it particularly valuable for those needing both services.
            </p>
            
            <p className="text-gray-600 mb-4">
              The platform's insurance coverage and integrated care approach are significant advantages, though higher costs for medication plans and limited availability in some areas are notable drawbacks. The structured treatment approach and regular check-ins provide good accountability, but may not suit those seeking more flexible care options.
            </p>
            
            <p className="text-gray-600">
              Cerebral is best suited for individuals seeking comprehensive mental health care who value the convenience of having therapy and medication management in one platform. It's particularly effective for treating anxiety, depression, and ADHD, especially for those with insurance coverage. However, those seeking solely therapy services or requiring more specialized treatment approaches may find better value with other platforms.
            </p>
          </div>
        </div>
        
        {/* How We Review Section */}
        <HowWeReviewed />
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Mental Health Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to discover if Cerebral or another platform is the best fit for your needs.
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
              as="a"
              href="https://www.cerebral.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="outline"
              size="lg"
              icon={ExternalLink}
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Visit Cerebral
            </Button>
          </div>
        </div>
        
        {/* Related Reviews */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/reviews/platforms/talkspace" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Talkspace Review</h3>
              <p className="text-gray-600 text-sm">Compare another platform offering both therapy and medication management services.</p>
            </Link>
            <Link to="/reviews/platforms/brightside" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Brightside Review</h3>
              <p className="text-gray-600 text-sm">Explore a platform specializing in depression and anxiety treatment.</p>
            </Link>
            <Link to="/reviews/platforms/betterhelp" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">BetterHelp Review</h3>
              <p className="text-gray-600 text-sm">See how a therapy-only platform compares to Cerebral's integrated approach.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CerebralReview;