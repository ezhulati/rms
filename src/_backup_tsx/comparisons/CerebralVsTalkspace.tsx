import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain } from 'lucide-react';
import Button from '../../components/Button';
import HowWeReviewed from '../../components/HowWeReviewed';

const CerebralVsTalkspace = () => {
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
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Cerebral vs Talkspace: Comparing Therapy & Medication Platforms (2025)</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Compare two leading platforms that offer both therapy and medication management to find the best solution for your mental health needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <h2 className="text-xl font-bold text-gray-800 mr-3">Cerebral</h2>
                  <div className="flex items-center">
                    <div className="mr-1">
                      {renderStars(4.2)}
                    </div>
                    <span className="text-gray-600">4.2/5</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Subscription-based platform offering therapy, medication, and combined care plans for anxiety, depression, and more.
                </p>
                <Button 
                  as="a"
                  href="https://www.cerebral.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="primary"
                  icon={ExternalLink}
                  className="w-full justify-center"
                >
                  Visit Cerebral
                </Button>
              </div>
              
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
                  Leading online therapy platform with messaging, live sessions, and psychiatric services with insurance coverage.
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
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Cerebral</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Talkspace</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Price Range</td>
                  <td className="py-3 px-4 text-center">$85-$325/month</td>
                  <td className="py-3 px-4 text-center">$65-$99/week</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Cerebral</span>
                      <span className="text-sm text-gray-600">Lower monthly cost</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Insurance Coverage</td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Talkspace</span>
                      <span className="text-sm text-gray-600">More insurance partners</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Medication Management</td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Cerebral</span>
                      <span className="text-sm text-gray-600">More medication options</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Communication</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center space-x-1">
                      <MessageSquare className="h-4 w-4 text-indigo-600" aria-label="Messaging" />
                      <Video className="h-4 w-4 text-indigo-600" aria-label="Video" />
                      <Phone className="h-4 w-4 text-indigo-600" aria-label="Phone" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center space-x-1">
                      <MessageSquare className="h-4 w-4 text-indigo-600" aria-label="Messaging" />
                      <Video className="h-4 w-4 text-indigo-600" aria-label="Video" />
                      <Phone className="h-4 w-4 text-indigo-600" aria-label="Phone" />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-600 mr-2">Tie</span>
                      <span className="text-sm text-gray-600">Similar options</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Conditions Treated</td>
                  <td className="py-3 px-4 text-center">Anxiety, Depression, ADHD, Insomnia</td>
                  <td className="py-3 px-4 text-center">Wide range of conditions</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Talkspace</span>
                      <span className="text-sm text-gray-600">More comprehensive</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Therapist Network</td>
                  <td className="py-3 px-4 text-center">Smaller network</td>
                  <td className="py-3 px-4 text-center">5,000+ therapists</td>
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
                      {renderStars(4.2)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.5)}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Talkspace</span>
                      <span className="text-sm text-gray-600">Better overall experience</span>
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
          
          {/* Service Offerings */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Service Offerings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Cerebral</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Therapy-only plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Medication-only plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Combined therapy & medication plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>ADHD medication management</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>Limited to specific conditions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Messaging-only therapy plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Messaging + live sessions plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Psychiatric services add-on</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Couples therapy option</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>No ADHD medication management</span>
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
                <h4 className="font-bold text-gray-800 mb-3">Cerebral</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800">Therapy Plan</h5>
                    <p className="text-gray-600">$85/month - Weekly therapy sessions</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Medication Plan</h5>
                    <p className="text-gray-600">$85/month - Medication management only</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Therapy + Medication</h5>
                    <p className="text-gray-600">$325/month - Combined care</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Insurance</h5>
                    <p className="text-gray-600">In-network with several providers</p>
                  </div>
                </div>
              </div>
              
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
                    <h5 className="font-bold text-gray-800">Psychiatry</h5>
                    <p className="text-gray-600">$249 initial evaluation, $125 follow-ups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Medication Management */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Medication Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Cerebral</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Prescribes for anxiety, depression, ADHD, insomnia</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Monthly provider check-ins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Medication delivery available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Can prescribe controlled substances for ADHD</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Prescribes for anxiety, depression, sleep issues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Initial evaluation plus follow-ups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Prescriptions sent to local pharmacy</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>Cannot prescribe controlled substances</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* User Experience */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">User Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Cerebral</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Clean, modern interface</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Symptom tracking tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Care counselor support</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>Provider turnover issues</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Intuitive messaging platform</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Well-designed mobile app</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Easy therapist switching</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>Variable therapist response times</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Final Verdict */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              Choose <strong>Cerebral</strong> if:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You need ADHD medication management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You prefer a monthly subscription model</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You want medication delivery options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You need a more affordable combined care option</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Choose <strong>Talkspace</strong> if:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You want a larger selection of therapists</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You need treatment for a wider range of conditions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You prefer unlimited messaging with your therapist</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You have insurance that partners with Talkspace</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How We Review Section */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Mental Health Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to discover which platform is the best fit for your therapy and medication needs.
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

        {/* Related Comparisons */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/compare/platforms/betterhelp-vs-talkspace" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">BetterHelp vs Talkspace</h3>
              <p className="text-gray-600 text-sm">Compare two of the largest online therapy platforms.</p>
            </Link>
            <Link to="/compare/platforms/betterhelp-vs-cerebral" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">BetterHelp vs Cerebral</h3>
              <p className="text-gray-600 text-sm">Compare therapy-only with combined care options.</p>
            </Link>
            <Link to="/compare/platforms/cerebral-vs-brightside" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Cerebral vs Brightside</h3>
              <p className="text-gray-600 text-sm">Compare two platforms offering medication management.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CerebralVsTalkspace;
