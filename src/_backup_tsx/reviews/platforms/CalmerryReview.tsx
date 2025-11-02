import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain } from 'lucide-react';
import HowWeReviewed from '../../../components/HowWeReviewed';
import Button from '../../../components/Button';
import RatingBreakdown from '../../../components/RatingBreakdown';

const CalmerryReview = () => {
  // Rating categories
  const ratingCategories = [
    {
      name: "Therapist Qualifications",
      score: 4.0,
      description: "Licensed professionals with good credentials, though network is smaller than competitors."
    },
    {
      name: "Platform Usability",
      score: 4.0,
      description: "Clean interface with good functionality, though some features could be more intuitive."
    },
    {
      name: "Communication Options",
      score: 3.5,
      description: "Limited to messaging and video, but good quality for available options."
    },
    {
      name: "Privacy & Security",
      score: 4.0,
      description: "Standard security measures and clear privacy policies."
    },
    {
      name: "Value & Affordability",
      score: 4.5,
      description: "Excellent value with competitive pricing and flexible plans."
    },
    {
      name: "Client Satisfaction",
      score: 4.0,
      description: "Generally positive user feedback, particularly regarding affordability and flexibility."
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
                src="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Calmerry Review" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 md:mb-0">Calmerry Review</h1>
                <div className="flex items-center">
                  <div className="mr-2">
                    {renderStars(4.0)}
                  </div>
                  <span className="text-lg font-bold text-gray-700">4.0/5</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg mb-6">
                Calmerry is an affordable online therapy platform offering flexible subscription plans and quick therapist matching, with a focus on accessibility and user choice.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Pros</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Lower pricing than competitors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Fast therapist matching</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Flexible subscription plans</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>No long-term commitments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Quick response times</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Cons</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Smaller therapist network</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>No insurance coverage</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Limited communication options</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>No medication management</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Newer platform with less track record</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  as="a"
                  href="https://www.calmerry.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="primary"
                  icon={ExternalLink}
                >
                  Visit Calmerry
                </Button>
                <Button 
                  as={Link}
                  to="/compare/platforms/betterhelp-vs-calmerry" 
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Calmerry at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Pricing</h3>
                <p className="text-gray-600">$42-$68 per week</p>
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
                <p className="text-sm text-gray-500">Text + video sessions</p>
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
                <p className="text-sm text-gray-500 mt-1">Flexible plans</p>
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
                <p className="text-gray-600">Licensed therapists</p>
                <p className="text-sm text-gray-500 mt-1">Growing network</p>
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
                <p className="text-gray-600">Budget-conscious therapy seekers</p>
                <p className="text-sm text-gray-500 mt-1">Flexible therapy options</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Review */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Full Calmerry Review</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">What is Calmerry?</h3>
            <p className="text-gray-600 mb-4">
              Calmerry is a newer online therapy platform that focuses on providing affordable mental health services with flexible subscription options. The platform stands out for its competitive pricing and quick therapist matching process.
            </p>
            <p className="text-gray-600">
              While newer to the online therapy space, Calmerry has quickly gained attention for its user-friendly approach and commitment to making therapy more accessible through lower price points and flexible communication options.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">How Calmerry Works</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-gray-800 mb-3">Getting Started</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>Complete brief assessment about your needs and preferences</li>
                <li>Choose your subscription plan</li>
                <li>Get matched with a therapist within 24 hours</li>
                <li>Begin therapy through messaging or schedule video sessions</li>
                <li>Switch therapists at any time if needed</li>
              </ol>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Communication Options</h4>
                <p className="text-gray-600 mb-3">
                  Calmerry offers two main ways to communicate with your therapist:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Text messaging through secure platform</li>
                  <li>Live video sessions (30 minutes)</li>
                  <li>Therapist responses within 24 hours</li>
                  <li>Session scheduling flexibility</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Platform Features</h4>
                <p className="text-gray-600 mb-3">
                  The platform includes several helpful features:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Secure messaging system</li>
                  <li>Video session capability</li>
                  <li>Progress tracking tools</li>
                  <li>Mobile app access</li>
                </ul>
              </div>
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
                    <h5 className="font-bold text-gray-800">Messaging</h5>
                    <p className="text-gray-600 mb-2">$42/week (billed monthly at $168)</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>Unlimited text messaging</li>
                      <li>Therapist responses 5 days/week</li>
                      <li>Basic emotional support</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800">Messaging + 1 Video</h5>
                    <p className="text-gray-600 mb-2">$52/week (billed monthly at $208)</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>All Messaging features</li>
                      <li>1 video session per month</li>
                      <li>Priority support</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800">Messaging + 4 Video</h5>
                    <p className="text-gray-600 mb-2">$68/week (billed monthly at $272)</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>All Messaging features</li>
                      <li>4 video sessions per month</li>
                      <li>Premium support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">Value Assessment</h4>
              <p className="text-gray-600 mb-3">
                Calmerry's value proposition centers on affordability and flexibility:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Lower entry price point than most competitors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Flexible plan options to match different needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>No long-term commitment required</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Limited features compared to premium platforms</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Who Calmerry Is Best For</h3>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
              <div className="bg-green-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-gray-800">Ideal For</h4>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Budget-conscious individuals</strong> seeking affordable therapy options</li>
                  <li><strong>People who prefer text-based communication</strong> and flexible scheduling</li>
                  <li><strong>Those dealing with mild to moderate mental health issues</strong> like anxiety or depression</li>
                  <li><strong>Users who want a simple, straightforward therapy experience</strong> without extra features</li>
                  <li><strong>People who value quick therapist matching</strong> and easy platform navigation</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-gray-800">Not Recommended For</h4>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Those needing insurance coverage</strong> for therapy</li>
                  <li><strong>People seeking medication management</strong> services</li>
                  <li><strong>Individuals with severe mental health conditions</strong> requiring intensive treatment</li>
                  <li><strong>Users wanting extensive self-help resources</strong> and tools</li>
                  <li><strong>Those preferring a large selection of therapists</strong> to choose from</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Alternatives to Calmerry</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-indigo-50 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-800">BetterHelp</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-3">
                    <strong>Best for:</strong> More comprehensive care
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Price:</strong> $60-$90/week
                  </p>
                  <p className="text-gray-600 mb-3">
                    Larger platform with more features and therapist options, but higher pricing.
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
                    Accepts insurance and offers medication management, but more expensive.
                  </p>
                  <Link to="/reviews/platforms/talkspace" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Read Talkspace review <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-indigo-50 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-800">Online-Therapy.com</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-3">
                    <strong>Best for:</strong> Structured CBT approach
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Price:</strong> $40-$88/week
                  </p>
                  <p className="text-gray-600 mb-3">
                    Similar pricing with more structured program and self-help tools.
                  </p>
                  <Link to="/reviews/platforms/online-therapy" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Read Online-Therapy.com review <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Final Verdict</h3>
            
            <p className="text-gray-600 mb-4">
              Calmerry earns our 4.0/5 rating for providing an affordable and user-friendly online therapy experience. The platform excels in offering flexible plans and quick therapist matching at competitive price points.
            </p>
            
            <p className="text-gray-600 mb-4">
              While the platform lacks some features found on more established services (like insurance coverage and medication management), it delivers solid value for those seeking straightforward, affordable therapy options. The quick response times and flexible communication options make it particularly appealing for users who prefer text-based therapy.
            </p>
            
            <p className="text-gray-600">
              Calmerry is best suited for budget-conscious individuals seeking therapy for mild to moderate mental health concerns. Its combination of affordable pricing, flexible plans, and quality basic services makes it an excellent choice for those who want professional support without the higher costs of premium platforms. However, those needing insurance coverage or additional services like medication management should consider alternatives.
            </p>
          </div>
        </div>
        
        {/* How We Review Section */}
        <HowWeReviewed />
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Therapy Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to discover if Calmerry or another platform is the best fit for your needs.
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
              href="https://www.calmerry.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="outline"
              size="lg"
              icon={ExternalLink}
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Visit Calmerry
            </Button>
          </div>
        </div>
        
        {/* Related Reviews */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/reviews/platforms/betterhelp" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">BetterHelp Review</h3>
              <p className="text-gray-600 text-sm">Compare with a larger platform offering more features and therapist options.</p>
            </Link>
            <Link to="/reviews/platforms/talkspace" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Talkspace Review</h3>
              <p className="text-gray-600 text-sm">Explore a platform with insurance coverage and integrated services.</p>
            </Link>
            <Link to="/reviews/platforms/online-therapy" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Online-Therapy.com Review</h3>
              <p className="text-gray-600 text-sm">See how another affordable therapy platform compares.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalmerryReview;