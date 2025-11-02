import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Shield, Users, Search, FileText } from 'lucide-react';
import HowWeReviewed from '../components/HowWeReviewed';
import Button from '../components/Button';

const ReviewsFeatures = () => {
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

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Online Therapy Feature Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth analysis of specific features across therapy platforms to help you understand what matters most for your mental health journey.
          </p>
        </div>

        {/* Featured Feature Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Messaging Systems Review */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-100 p-6 flex items-center justify-center">
              <MessageSquare className="h-16 w-16 text-indigo-600" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Messaging Systems Compared</h3>
              <p className="text-gray-600 mb-4">
                A detailed comparison of text-based therapy systems across major platforms, analyzing response times, interface design, and therapeutic effectiveness.
              </p>
              <Link to="/reviews/features/messaging-systems-compared" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                Read feature review <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Video Session Quality Review */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-100 p-6 flex items-center justify-center">
              <Video className="h-16 w-16 text-indigo-600" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Video Session Quality</h3>
              <p className="text-gray-600 mb-4">
                An in-depth analysis of video therapy quality across platforms, including connection stability, video clarity, and user experience features.
              </p>
              <Link to="/reviews/features/video-session-quality" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                Read feature review <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Therapist Matching Systems */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-100 p-6 flex items-center justify-center">
              <Users className="h-16 w-16 text-indigo-600" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Therapist Matching Systems</h3>
              <p className="text-gray-600 mb-4">
                A comparative review of how different platforms match clients with therapists, evaluating algorithm effectiveness and match satisfaction rates.
              </p>
              <Link to="/reviews/features/therapist-matching-systems" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                Read feature review <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Communication Features */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Communication Features</h2>
              <p className="text-gray-600 mb-6">
                Detailed reviews of the various communication methods offered by online therapy platforms.
              </p>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link to="/reviews/features/messaging-systems-compared" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Messaging Systems Compared</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/video-session-quality" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Video Session Quality</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/live-chat-effectiveness" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Live Chat Effectiveness</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/audio-session-quality" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Audio Session Quality</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/response-time-analysis" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Therapist Response Time Analysis</span>
                  </Link>
                </li>
              </ul>
              <Button 
                as={Link} 
                to="/reviews/features/communication" 
                variant="primary" 
                icon={ArrowRight}
              >
                View all communication features
              </Button>
            </div>
          </div>

          {/* Platform Features */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Platform Features</h2>
              <p className="text-gray-600 mb-6">
                Reviews focusing on the technical aspects and user experience of therapy platforms.
              </p>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link to="/reviews/features/therapist-matching-systems" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Therapist Matching Systems</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/mobile-app-usability" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Mobile App Usability</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/privacy-security-measures" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Privacy & Security Measures</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/worksheets-resources" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Worksheets & Resources</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/scheduling-systems" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Scheduling Systems</span>
                  </Link>
                </li>
              </ul>
              <Button 
                as={Link} 
                to="/reviews/features/platform" 
                variant="primary" 
                icon={ArrowRight}
              >
                View all platform features
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Clinical Features */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Clinical Features</h2>
              <p className="text-gray-600 mb-6">
                Reviews of therapeutic approaches, specialized services, and clinical effectiveness.
              </p>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link to="/reviews/features/cbt-implementation" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>CBT Implementation Across Platforms</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/medication-management-services" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Medication Management Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/couples-therapy-features" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Couples Therapy Features</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/crisis-support-options" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Crisis Support Options</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/therapy-modalities-offered" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Therapy Modalities Offered</span>
                  </Link>
                </li>
              </ul>
              <Button 
                as={Link} 
                to="/reviews/features/clinical" 
                variant="primary" 
                icon={ArrowRight}
              >
                View all clinical features
              </Button>
            </div>
          </div>

          {/* Business Features */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Business Features</h2>
              <p className="text-gray-600 mb-6">
                Reviews focusing on pricing, insurance, billing, and customer service aspects.
              </p>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link to="/reviews/features/insurance-coverage-options" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Insurance Coverage Options</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/pricing-models-compared" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Pricing Models Compared</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/financial-aid-programs" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Financial Aid Programs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/customer-service-quality" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Customer Service Quality</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/features/cancellation-policies" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Cancellation Policies</span>
                  </Link>
                </li>
              </ul>
              <Button 
                as={Link} 
                to="/reviews/features/business" 
                variant="primary" 
                icon={ArrowRight}
              >
                View all business features
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Review Content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Featured Review: Messaging Systems Compared</h2>
              <Link to="/reviews/features/messaging-systems-compared" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                Read full review <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-1">
                <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center">
                  <MessageSquare className="h-16 w-16 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">Messaging Systems</h3>
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      {renderStars(4.5)}
                    </div>
                    <span className="text-gray-700">4.5/5</span>
                  </div>
                  <p className="text-gray-600 text-sm text-center mb-4">Last updated: June 2025</p>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Text-Based Therapy: Platform Comparison</h3>
                <p className="text-gray-600 mb-4">
                  Text-based messaging is the foundation of most online therapy platforms, allowing clients to communicate with their therapists asynchronously. Our comprehensive analysis reveals significant differences in messaging systems across major platforms.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Key Findings:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span><strong>BetterHelp</strong> offers the most robust messaging system with excellent organization, multimedia support, and therapist response times averaging 10-24 hours.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span><strong>Talkspace</strong> provides the best multimedia messaging experience, allowing voice messages, photos, and videos, with slightly longer response times (12-48 hours).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span><strong>Calmerry</strong> offers the fastest average response times (8-16 hours) but with more limited multimedia capabilities.</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-gray-600">
                  Our full review includes detailed analysis of message organization, notification systems, multimedia support, therapist response patterns, and therapeutic effectiveness across eight leading platforms. We also provide recommendations based on different communication preferences and therapy needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Feature Comparison: Top Platforms</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Feature</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">BetterHelp</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Talkspace</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Cerebral</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Calmerry</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Messaging</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(3.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4)}
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Video Quality</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(3.5)}
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Therapist Matching</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(3.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(3.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4)}
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Mobile App</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(3.5)}
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Privacy & Security</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4)}
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Worksheets & Resources</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(3.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(3.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.5)}
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Overall Feature Rating</td>
                  <td className="py-3 px-4 text-center font-bold">4.2/5</td>
                  <td className="py-3 px-4 text-center font-bold">4.3/5</td>
                  <td className="py-3 px-4 text-center font-bold">3.8/5</td>
                  <td className="py-3 px-4 text-center font-bold">3.9/5</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              as={Link} 
              to="/compare/platforms" 
              variant="primary" 
              icon={ArrowRight}
            >
              See full platform comparisons
            </Button>
          </div>
        </div>

        {/* Feature Review Methodology */}
        <div className="bg-indigo-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Feature Review Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                <Search className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Hands-On Testing</h3>
              <p className="text-gray-600 text-sm">
                We thoroughly test each feature across multiple platforms, documenting performance, usability, and effectiveness. Our testing includes various devices, connection speeds, and use cases to provide comprehensive insights.
              </p>
            </div>
            
            <div>
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">User Feedback Analysis</h3>
              <p className="text-gray-600 text-sm">
                We collect and analyze feedback from hundreds of actual users for each feature, identifying common pain points, highlights, and real-world usage patterns that might not be apparent during controlled testing.
              </p>
            </div>
            
            <div>
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Comparative Analysis</h3>
              <p className="text-gray-600 text-sm">
                We evaluate each feature across multiple platforms using consistent criteria, allowing for direct comparisons. This helps identify best-in-class implementations and highlights areas where specific platforms excel or fall short.
              </p>
            </div>
          </div>
        </div>

        {/* How We Review Section */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Not Sure Which Features Matter Most to You?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to discover which therapy platform features align best with your unique needs and preferences.
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
              to="/compare/platforms" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Compare All Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsFeatures;