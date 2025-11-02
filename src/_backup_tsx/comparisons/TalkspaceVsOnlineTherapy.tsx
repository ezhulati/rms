import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain } from 'lucide-react';
import Button from '../../components/Button';
import HowWeReviewed from '../../components/HowWeReviewed';

const TalkspaceVsOnlineTherapy = () => {
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
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Talkspace vs Online-Therapy.com: Which Is Better in 2025?</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Compare Talkspace's comprehensive platform with Online-Therapy.com's specialized CBT approach to find your best fit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <h2 className="text-xl font-bold text-gray-800 mr-3">Talkspace</h2>
                  <div className="flex items-center">
                    <div className="mr-1">
                      {renderStars(4.5)}
                    </div>
                    <span className="text-gray-600">4.5/5</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Leading online therapy platform with insurance coverage and integrated psychiatric services.
                </p>
                <Button 
                  as="a"
                  href="https://www.talkspace.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="primary"
                  icon={ExternalLink}
                  className="w-full justify-center"
                >
                  Visit Talkspace
                </Button>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <h2 className="text-xl font-bold text-gray-800 mr-3">Online-Therapy.com</h2>
                  <div className="flex items-center">
                    <div className="mr-1">
                      {renderStars(4.0)}
                    </div>
                    <span className="text-gray-600">4.0/5</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Specialized platform focused on cognitive behavioral therapy (CBT) with comprehensive self-help resources.
                </p>
                <Button 
                  as="a"
                  href="https://www.online-therapy.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="primary"
                  icon={ExternalLink}
                  className="w-full justify-center"
                >
                  Visit Online-Therapy.com
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Feature</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Talkspace</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Online-Therapy.com</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Price Range</td>
                  <td className="py-3 px-4 text-center">$65-$99/week</td>
                  <td className="py-3 px-4 text-center">$40-$88/week</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Online-Therapy.com</span>
                      <span className="text-sm text-gray-600">Lower starting price</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Insurance Coverage</td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Talkspace</span>
                      <span className="text-sm text-gray-600">Accepts major insurance</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Therapy Approaches</td>
                  <td className="py-3 px-4 text-center">Multiple approaches</td>
                  <td className="py-3 px-4 text-center">CBT focused</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Talkspace</span>
                      <span className="text-sm text-gray-600">More flexibility</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Communication</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center space-x-1">
                      <MessageSquare className="h-4 w-4 text-indigo-600" title="Messaging" />
                      <Video className="h-4 w-4 text-indigo-600" title="Video" />
                      <Phone className="h-4 w-4 text-indigo-600" title="Phone" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center space-x-1">
                      <MessageSquare className="h-4 w-4 text-indigo-600" title="Messaging" />
                      <Video className="h-4 w-4 text-indigo-600" title="Video" />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Talkspace</span>
                      <span className="text-sm text-gray-600">More options</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Additional Resources</td>
                  <td className="py-3 px-4 text-center">Basic resources</td>
                  <td className="py-3 px-4 text-center">Comprehensive CBT toolbox</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Online-Therapy.com</span>
                      <span className="text-sm text-gray-600">Better self-help tools</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Therapist Network</td>
                  <td className="py-3 px-4 text-center">5,000+ therapists</td>
                  <td className="py-3 px-4 text-center">Smaller network</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Talkspace</span>
                      <span className="text-sm text-gray-600">Larger selection</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Overall Rating</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.0)}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Talkspace</span>
                      <span className="text-sm text-gray-600">Better overall value</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
          
          {/* Therapy Approach */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Therapy Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Multiple therapeutic approaches available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Therapist matching based on needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Flexible treatment plans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Integrated psychiatric services</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Online-Therapy.com</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Focused CBT approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Structured program with sections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Daily therapist feedback</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>Limited to CBT techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Pricing & Value */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pricing & Value</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800">Messaging Plan</h5>
                    <p className="text-gray-600">$65/week - Unlimited messaging only</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Video Plan</h5>
                    <p className="text-gray-600">$79/week - 4 video sessions/month</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Video+ Plan</h5>
                    <p className="text-gray-600">$99/week - Video sessions + messaging</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Insurance</h5>
                    <p className="text-gray-600">Many major providers accepted</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Online-Therapy.com</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800">Basic Plan</h5>
                    <p className="text-gray-600">$40/week - CBT program access</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Standard Plan</h5>
                    <p className="text-gray-600">$64/week - One weekly video session</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Premium Plan</h5>
                    <p className="text-gray-600">$88/week - Two weekly video sessions</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Insurance</h5>
                    <p className="text-gray-600">No insurance coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features & Resources */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Features & Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Multiple communication methods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Psychiatric services available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Basic worksheets and exercises</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>Limited self-help resources</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Online-Therapy.com</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Comprehensive CBT worksheets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Yoga and meditation videos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Daily journal and activity plan</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>Limited communication options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Final Verdict */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              Choose <strong>Talkspace</strong> if:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You want to use insurance benefits</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You need medication management options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You prefer multiple therapy approaches</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Choose <strong>Online-Therapy.com</strong> if:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You specifically want CBT therapy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You value comprehensive self-help resources</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You prefer a more structured approach</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How We Review Section */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Therapy Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to discover which platform is the best fit for your needs.
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
              to="/tools/assessments/therapy-style-assessment" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Take Therapy Style Assessment
            </Button>
          </div>
        </div>

        {/* Related Comparisons */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/compare/platforms/betterhelp-vs-talkspace" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">BetterHelp vs Talkspace</h3>
              <p className="text-gray-600 text-sm">Compare two of the largest online therapy platforms.</p>
            </Link>
            <Link to="/compare/platforms/betterhelp-vs-online-therapy" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">BetterHelp vs Online-Therapy.com</h3>
              <p className="text-gray-600 text-sm">Compare general therapy with specialized CBT approach.</p>
            </Link>
            <Link to="/compare/platforms/cerebral-vs-talkspace" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Cerebral vs Talkspace</h3>
              <p className="text-gray-600 text-sm">Compare two platforms offering medication management.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkspaceVsOnlineTherapy;