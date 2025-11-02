import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain } from 'lucide-react';
import HowWeReviewed from '../components/HowWeReviewed';
import Button from '../components/Button';
import RatingBreakdown from '../components/RatingBreakdown';

const OnlineTherapyReview = () => {
  // Rating categories
  const ratingCategories = [
    {
      name: "Therapist Qualifications",
      score: 4.0,
      description: "Licensed professionals with CBT specialization."
    },
    {
      name: "Platform Usability",
      score: 4.0,
      description: "Well-organized interface with comprehensive CBT toolbox."
    },
    {
      name: "Communication Options",
      score: 3.5,
      description: "Limited to messaging and video, but includes daily therapist feedback."
    },
    {
      name: "Privacy & Security",
      score: 4.0,
      description: "Standard security measures and clear privacy policies."
    },
    {
      name: "Value & Affordability",
      score: 4.0,
      description: "Good value for structured CBT program, though no insurance coverage."
    },
    {
      name: "Client Satisfaction",
      score: 4.0,
      description: "High satisfaction rates for users seeking structured CBT approach."
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
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Online-Therapy.com Review" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 md:mb-0">Online-Therapy.com Review</h1>
                <div className="flex items-center">
                  <div className="mr-2">
                    {renderStars(4.0)}
                  </div>
                  <span className="text-lg font-bold text-gray-700">4.0/5</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg mb-6">
                Online-Therapy.com specializes in cognitive behavioral therapy (CBT) with a structured program that includes daily therapist feedback, worksheets, and additional wellness resources.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Pros</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Comprehensive CBT program</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Daily therapist feedback</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Extensive self-help resources</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Structured approach to therapy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Yoga and meditation resources</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Cons</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Limited therapy approaches (CBT only)</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>No insurance coverage</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Smaller therapist network</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>No medication management</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Not suitable for severe conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  as="a"
                  href="https://www.online-therapy.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="primary"
                  icon={ExternalLink}
                >
                  Visit Online-Therapy.com
                </Button>
                <Button 
                  as={Link}
                  to="/compare/platforms/betterhelp-vs-online-therapy" 
                  variant="outline"
                  icon={ArrowRight}
                >
                  Compare with BetterHelp
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Online-Therapy.com at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Pricing</h3>
                <p className="text-gray-600">$40-$88 per week</p>
                <p className="text-sm text-gray-500 mt-1">Billed monthly</p>
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
                </div>
                <p className="text-sm text-gray-500">Daily messaging + weekly video</p>
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
                <p className="text-gray-600">No insurance coverage</p>
                <p className="text-sm text-gray-500 mt-1">Self-pay only</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Therapist Network</h3>
                <p className="text-gray-600">Licensed CBT specialists</p>
                <p className="text-sm text-gray-500 mt-1">Smaller, focused network</p>
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
                <p className="text-gray-600">CBT-focused therapy</p>
                <p className="text-sm text-gray-500 mt-1">Structured self-improvement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Review */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Full Online-Therapy.com Review</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">What is Online-Therapy.com?</h3>
            <p className="text-gray-600 mb-4">
              Online-Therapy.com is a specialized platform that focuses exclusively on delivering cognitive behavioral therapy (CBT) through a structured online program. Unlike general therapy platforms, it provides a comprehensive CBT toolbox including worksheets, journaling, yoga videos, and daily therapist feedback.
            </p>
            <p className="text-gray-600">
              The platform stands out for its systematic approach to therapy, combining self-guided CBT modules with professional support and additional wellness resources. This structured program is designed to help users develop practical skills and strategies for managing various mental health challenges.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">How Online-Therapy.com Works</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-gray-800 mb-3">Program Structure</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>Complete initial assessment and CBT introduction</li>
                <li>Work through structured CBT sections at your own pace</li>
                <li>Complete daily worksheets and activities</li>
                <li>Receive therapist feedback on your progress</li>
                <li>Attend weekly live sessions (higher-tier plans)</li>
              </ol>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">CBT Program Components</h4>
                <p className="text-gray-600 mb-3">
                  The platform's CBT program includes eight sections covering key therapeutic concepts and skills:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Understanding your problems</li>
                  <li>Identifying negative thoughts</li>
                  <li>Challenging cognitive distortions</li>
                  <li>Behavioral activation</li>
                  <li>Exposure therapy techniques</li>
                  <li>Mindfulness and relaxation</li>
                  <li>Sleep improvement</li>
                  <li>Relapse prevention</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Additional Resources</h4>
                <p className="text-gray-600 mb-3">
                  Beyond the core CBT program, users get access to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Yoga and meditation videos</li>
                  <li>Activity planning tools</li>
                  <li>Journaling platform</li>
                  <li>Progress tracking</li>
                  <li>Worksheets and exercises</li>
                  <li>Educational materials</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">Therapist Interaction</h4>
              <p className="text-gray-600 mb-3">
                Therapist support varies by subscription plan:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Daily feedback on worksheets and activities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Weekly live video sessions (premium plans)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Messaging support through the platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Progress reviews and goal setting</span>
                </li>
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
                    <h5 className="font-bold text-gray-800">Basic</h5>
                    <p className="text-gray-600 mb-2">$40/week (billed monthly at $160)</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>CBT program access</li>
                      <li>Daily therapist responses</li>
                      <li>Worksheets and activities</li>
                      <li>Yoga and meditation videos</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800">Standard</h5>
                    <p className="text-gray-600 mb-2">$64/week (billed monthly at $256)</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>All Basic features</li>
                      <li>1 weekly video session</li>
                      <li>Express messaging replies</li>
                      <li>Additional worksheets</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800">Premium</h5>
                    <p className="text-gray-600 mb-2">$88/week (billed monthly at $352)</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>All Standard features</li>
                      <li>2 weekly video sessions</li>
                      <li>Priority support</li>
                      <li>Advanced CBT resources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">Value Assessment</h4>
              <p className="text-gray-600 mb-3">
                Online-Therapy.com's value proposition depends on what you're looking for:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Excellent value for those specifically seeking CBT</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Cost-effective for self-motivated individuals who will use the resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Good value for the comprehensive CBT program and resources</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Less value if you need more flexible therapy approaches</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Therapist Qualifications</h3>
            
            <p className="text-gray-600 mb-4">
              All therapists on Online-Therapy.com are licensed mental health professionals with:
            </p>
            
            <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
              <li>Master's degree or higher in psychology or related field</li>
              <li>Current state licensure</li>
              <li>Specialized training in CBT</li>
              <li>Regular quality monitoring</li>
            </ul>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">CBT Specialization</h4>
              <p className="text-gray-600 mb-3">
                Unlike general therapy platforms, Online-Therapy.com focuses exclusively on CBT-trained therapists. This specialization means:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>All therapists are trained in evidence-based CBT techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Consistent approach to treatment across the platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Regular CBT-specific training and updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Expertise in CBT worksheet development and feedback</span>
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
                  The platform offers a clean, well-organized interface focused on the CBT program structure. Navigation is intuitive, with clear progression through sections and easy access to resources. The mobile experience is good, though not as full-featured as some competitors.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Privacy & Security</h4>
                <p className="text-gray-600">
                  Online-Therapy.com maintains industry-standard security measures including encryption and HIPAA compliance. The platform's focus on structured CBT means less emphasis on open messaging, which some users may find more private and contained.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">Program Effectiveness</h4>
              <p className="text-gray-600 mb-3">
                The platform's structured CBT program shows strong effectiveness for:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Anxiety and depression symptoms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Stress management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Building coping skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Maintaining progress through structured practice</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Who Online-Therapy.com Is Best For</h3>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
              <div className="bg-green-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-gray-800">Ideal For</h4>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>People specifically seeking CBT</strong> who want a structured, evidence-based approach</li>
                  <li><strong>Self-motivated individuals</strong> who will engage with the program materials</li>
                  <li><strong>Those dealing with anxiety, depression, or stress</strong> that responds well to CBT</li>
                  <li><strong>People who want daily support</strong> through feedback and resources</li>
                  <li><strong>Those who prefer a structured learning approach</strong> to therapy</li>
                  <li><strong>Individuals interested in holistic wellness</strong> with yoga and meditation</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-gray-800">Not Recommended For</h4>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Those needing medication management</strong> as this is not available</li>
                  <li><strong>People seeking insurance coverage</strong> for therapy</li>
                  <li><strong>Individuals who prefer other therapy approaches</strong> besides CBT</li>
                  <li><strong>Those with severe mental health conditions</strong> requiring intensive treatment</li>
                  <li><strong>People who prefer more flexible, unstructured therapy</strong></li>
                  <li><strong>Those needing crisis support</strong> or immediate assistance</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Alternatives to Online-Therapy.com</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-indigo-50 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-800">BetterHelp</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-3">
                    <strong>Best for:</strong> More flexible therapy options
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Price:</strong> $60-$90/week
                  </p>
                  <p className="text-gray-600 mb-3">
                    Offers more therapy approaches and communication options, but less structured program.
                  </p>
                  <Link to="/reviews/platforms/betterhelp" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Read BetterHelp review <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-indigo-50 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-800">Talkspace</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-3">
                    <strong>Best for:</strong> Insurance coverage
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Price:</strong> $65-$99/week
                  </p>
                  <p className="text-gray-600 mb-3">
                    Accepts insurance and offers medication management, but less focused on CBT.
                  </p>
                  <Link to="/reviews/platforms/talkspace" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Read Talkspace review <ArrowRight className="h-4 w-4 ml-1" />
                  </Link </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-indigo-50 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-800">Calmerry</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-3">
                    <strong>Best for:</strong> Affordable therapy
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Price:</strong> $42-$68/week
                  </p>
                  <p className="text-gray-600 mb-3">
                    More affordable with flexible plans but less structured approach and fewer resources.
                  </p>
                  <Link to="/reviews/platforms/calmerry" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Read Calmerry review <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Final Verdict</h3>
            
            <p className="text-gray-600 mb-4">
              Online-Therapy.com earns our 4.0/5 rating for providing a comprehensive, structured CBT program with excellent supporting resources and daily therapist feedback. The platform excels in delivering a systematic approach to therapy with clear progression and practical tools.
            </p>
            
            <p className="text-gray-600 mb-4">
              While the platform's focus on CBT and lack of insurance coverage may limit its appeal for some users, it provides exceptional value for those specifically seeking CBT or preferring a structured, educational approach to therapy. The addition of wellness resources like yoga and meditation adds value beyond traditional therapy.
            </p>
            
            <p className="text-gray-600">
              Online-Therapy.com is best suited for individuals who want to learn and apply CBT techniques with professional guidance. It's particularly effective for anxiety, depression, and stress management when users are committed to engaging with the program materials and completing the work between sessions. However, those needing more flexible therapy approaches or insurance coverage may want to consider other platforms.
            </p>
          </div>
        </div>
        
        {/* How We Review Section */}
        <HowWeReviewed />
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your CBT Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to discover if Online-Therapy.com or another platform is the best fit for your needs.
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
              href="https://www.online-therapy.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="outline"
              size="lg"
              icon={ExternalLink}
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Visit Online-Therapy.com
            </Button>
          </div>
        </div>
        
        {/* Related Reviews */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/reviews/platforms/betterhelp" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">BetterHelp Review</h3>
              <p className="text-gray-600 text-sm">Compare with a platform offering multiple therapy approaches and communication methods.</p>
            </Link>
            <Link to="/reviews/platforms/talkspace" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Talkspace Review</h3>
              <p className="text-gray-600 text-sm">Explore a platform with insurance coverage and integrated services.</p>
            </Link>
            <Link to="/reviews/platforms/calmerry" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Calmerry Review</h3>
              <p className="text-gray-600 text-sm">See how a more affordable therapy platform compares.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
  );
};

export default OnlineTherapyReview;