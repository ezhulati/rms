import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain } from 'lucide-react';
import HowWeReviewed from '../components/HowWeReviewed';
import Button from '../components/Button';

const BetterHelpVsTalkspace = () => {
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
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">BetterHelp vs Talkspace: Which Is Better in 2025?</h1>
            <p className="text-xl text-gray-600 mb-6">
              A comprehensive comparison of the two largest online therapy platforms to help you decide which one is right for your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <h2 className="text-xl font-bold text-gray-800 mr-3">BetterHelp</h2>
                  <div className="flex items-center">
                    <div className="mr-1">
                      {renderStars(4)}
                    </div>
                    <span className="text-gray-600">4.0/5</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  The world's largest online therapy platform with 25,000+ therapists, offering unlimited messaging and weekly live sessions.
                </p>
                <Button 
                  as="a"
                  href="https://www.betterhelp.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="primary"
                  icon={ExternalLink}
                  className="w-full justify-center"
                >
                  Visit BetterHelp
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
                  A leading online therapy platform with insurance coverage and medication management services.
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
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Feature</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">BetterHelp</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Talkspace</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Price Range</td>
                  <td className="py-3 px-4 text-center">$60-$90/week</td>
                  <td className="py-3 px-4 text-center">$65-$99/week</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">BetterHelp</span>
                      <span className="text-sm text-gray-600">Slightly more affordable</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Insurance Coverage</td>
                  <td className="py-3 px-4 text-center">
                    <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Talkspace</span>
                      <span className="text-sm text-gray-600">Accepts many insurance plans</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Medication Management</td>
                  <td className="py-3 px-4 text-center">
                    <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Talkspace</span>
                      <span className="text-sm text-gray-600">Offers psychiatric services</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Therapist Network</td>
                  <td className="py-3 px-4 text-center">25,000+ therapists</td>
                  <td className="py-3 px-4 text-center">5,000+ therapists</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">BetterHelp</span>
                      <span className="text-sm text-gray-600">Larger selection</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Communication Options</td>
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
                      <Phone className="h-4 w-4 text-indigo-600" title="Phone" />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-600 mr-2">Tie</span>
                      <span className="text-sm text-gray-600">Both offer messaging, video, phone</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Financial Aid</td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">BetterHelp</span>
                      <span className="text-sm text-gray-600">Offers up to 40% discount</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Response Time</td>
                  <td className="py-3 px-4 text-center">10-24 hours (avg)</td>
                  <td className="py-3 px-4 text-center">12-48 hours (avg)</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">BetterHelp</span>
                      <span className="text-sm text-gray-600">Faster average response</span>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Overall Rating</td>
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
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-600 mr-2">Talkspace</span>
                      <span className="text-sm text-gray-600">By a slight margin</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
          
          {/* Pricing & Value */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pricing & Value</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">BetterHelp</h4>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="font-medium">Price Range:</span>
                  </div>
                  <p className="text-gray-600 ml-7">$60-$90 per week (billed monthly at $240-$360)</p>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">Financial Aid:</span>
                  </div>
                  <p className="text-gray-600 ml-7">Available with up to 40% discount based on financial need</p>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span className="font-medium">Insurance:</span>
                  </div>
                  <p className="text-gray-600 ml-7">No direct insurance coverage, but may provide receipts for reimbursement</p>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">What's Included:</span>
                  </div>
                  <ul className="text-gray-600 ml-7 space-y-1">
                    <li>• Unlimited messaging with therapist</li>
                    <li>• One live session per week (video, phone, or chat)</li>
                    <li>• Worksheets and resources</li>
                    <li>• Ability to switch therapists at no cost</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="font-medium">Price Range:</span>
                  </div>
                  <p className="text-gray-600 ml-7">$65-$99 per week (billed monthly at $260-$396)</p>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span className="font-medium">Financial Aid:</span>
                  </div>
                  <p className="text-gray-600 ml-7">No formal financial aid program</p>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">Insurance:</span>
                  </div>
                  <p className="text-gray-600 ml-7">Accepts many insurance plans including Cigna, Ginger, Aetna, and more</p>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">What's Included:</span>
                  </div>
                  <ul className="text-gray-600 ml-7 space-y-1">
                    <li>• Unlimited messaging with therapist</li>
                    <li>• Live sessions (quantity depends on plan)</li>
                    <li>• Psychiatric services available (additional cost)</li>
                    <li>• Ability to switch therapists at no cost</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-800 mb-3">Verdict: Who Offers Better Value?</h4>
              <p className="text-gray-700 mb-3">
                <span className="font-medium text-indigo-600">BetterHelp</span> offers slightly better value for those without insurance and those who qualify for financial aid. Their base price is lower, and the financial aid program can make therapy significantly more affordable.
              </p>
              <p className="text-gray-700">
                <span className="font-medium text-indigo-600">Talkspace</span> provides better value for those with compatible insurance plans, potentially reducing out-of-pocket costs to just a copay. It's also a better value for those needing both therapy and medication management in one platform.
              </p>
            </div>
          </div>
          
          {/* Therapist Quality & Matching */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Therapist Quality & Matching</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">BetterHelp</h4>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <Users className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="font-medium">Therapist Network:</span>
                  </div>
                  <p className="text-gray-600 ml-7">25,000+ licensed therapists</p>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">Qualifications:</span>
                  </div>
                  <p className="text-gray-600 ml-7">All therapists are licensed, have a master's or doctoral degree, 3+ years of experience, and 1,000+ hours of hands-on experience</p>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">Matching Process:</span>
                  </div>
                  <p className="text-gray-600 ml-7">Algorithm-based matching using a detailed questionnaire, with the ability to request specific preferences (gender, specialties, etc.)</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <Users className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="font-medium">Therapist Network:</span>
                  </div>
                  <p className="text-gray-600 ml-7">5,000+ licensed therapists</p>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">Qualifications:</span>
                  </div>
                  <p className="text-gray-600 ml-7">All therapists are licensed with 3,000+ hours of clinical experience, and receive additional training in digital therapeutic approaches</p>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">Matching Process:</span>
                  </div>
                  <p className="text-gray-600 ml-7">Consultation with a matching therapist who recommends 3 potential therapists based on your needs, allowing you to choose</p>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-800 mb-3">Verdict: Who Has Better Therapists?</h4>
              <p className="text-gray-700 mb-3">
                Both platforms maintain high standards for their therapists, with similar qualification requirements. The key differences are:
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-medium text-indigo-600">BetterHelp</span> has a significantly larger network, providing more options and potentially better matching for specialized needs or preferences. However, quality can be more variable across such a large network.
              </p>
              <p className="text-gray-700">
                <span className="font-medium text-indigo-600">Talkspace</span> has a more personalized matching process and provides additional training in digital therapy approaches. Their therapists may have more consistent quality but with fewer options overall.
              </p>
            </div>
          </div>
          
          {/* User Experience & Communication */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">User Experience & Communication</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">BetterHelp</h4>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <MessageSquare className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="font-medium">Messaging:</span>
                  </div>
                  <p className="text-gray-600 ml-7">Unlimited text, audio, and video messages with therapist responses typically 1-2 times per day on weekdays</p>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <Video className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="font-medium">Live Sessions:</span>
                  </div>
                  <p className="text-gray-600 ml-7">One 30-45 minute session per week (video, phone, or live chat) included in all subscriptions</p>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">Platform Features:</span>
                  </div>
                  <ul className="text-gray-600 ml-7 space-y-1">
                    <li>• User-friendly website and mobile app</li>
                    <li>• Journaling feature</li>
                    <li>• Groupinar sessions (group webinars)</li>
                    <li>• Basic worksheets and resources</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <MessageSquare className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="font-medium">Messaging:</span>
                  </div>
                  <p className="text-gray-600 ml-7">Unlimited text, audio, and video messages with guaranteed therapist responses 5 days per week</p>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <Video className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="font-medium">Live Sessions:</span>
                  </div>
                  <p className="text-gray-600 ml-7">Number of live sessions depends on subscription tier (0-4 per month)</p>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">Platform Features:</span>
                  </div>
                  <ul className="text-gray-600 ml-7 space-y-1">
                    <li>• Sleek website and mobile app</li>
                    <li>• Progress tracking</li>
                    <li>• Comprehensive resource center</li>
                    <li>• Integrated psychiatric services</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-800 mb-3">Verdict: Who Offers Better User Experience?</h4>
              <p className="text-gray-700 mb-3">
                <span className="font-medium text-indigo-600">BetterHelp</span> offers a more consistent live session experience with one weekly session included in all plans. Their therapists tend to respond more frequently, though response quality can vary.
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-medium text-indigo-600">Talkspace</span> provides a more structured messaging approach with guaranteed response days and better multimedia messaging capabilities. Their tiered subscription model offers more flexibility but can limit live sessions on basic plans.
              </p>
              <p className="text-gray-700">
                Both platforms offer excellent mobile apps and user interfaces, with Talkspace having a slight edge in design polish and BetterHelp offering more supplementary features like groupinars.
              </p>
            </div>
          </div>
          
          {/* Specialized Services */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Specialized Services</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">BetterHelp</h4>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="font-medium">Specialized Platforms:</span>
                  </div>
                  <ul className="text-gray-600 ml-7 space-y-1">
                    <li>• ReGain (couples therapy)</li>
                    <li>• Teen Counseling (teens 13-19)</li>
                    <li>• Pride Counseling (LGBTQ+)</li>
                    <li>• Faith Counseling (Christian-based)</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span className="font-medium">Medication Management:</span>
                  </div>
                  <p className="text-gray-600 ml-7">Not available</p>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">Conditions Treated:</span>
                  </div>
                  <p className="text-gray-600 ml-7">Depression, anxiety, relationships, trauma, grief, substance abuse, eating disorders, and more</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="font-medium">Specialized Services:</span>
                  </div>
                  <ul className="text-gray-600 ml-7 space-y-1">
                    <li>• Couples therapy</li>
                    <li>• Teen therapy (13-17)</li>
                    <li>• Insomnia program</li>
                    <li>• Workplace programs</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">Medication Management:</span>
                  </div>
                  <p className="text-gray-600 ml-7">Available with psychiatrists and prescribing providers for an additional fee</p>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">Conditions Treated:</span>
                  </div>
                  <p className="text-gray-600 ml-7">Depression, anxiety, PTSD, OCD, bipolar disorder, eating disorders, substance use, and more</p>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-800 mb-3">Verdict: Who Offers Better Specialized Services?</h4>
              <p className="text-gray-700 mb-3">
                <span className="font-medium text-indigo-600">BetterHelp</span> offers more specialized platforms for specific demographics and needs, with separate services tailored to couples, teens, LGBTQ+ individuals, and those seeking faith-based counseling.
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-medium text-indigo-600">Talkspace</span> excels with its integrated psychiatric services, making it a better one-stop solution for those who may need both therapy and medication. Their specialized programs like the insomnia program also offer targeted treatment for specific conditions.
              </p>
              <p className="text-gray-700">
                Both platforms treat a similar range of mental health conditions, though neither is suitable for severe mental illness requiring intensive treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Final Verdict */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Final Verdict: Which Platform Is Better?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">Choose BetterHelp If:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You're on a tighter budget or qualify for financial aid</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You want a guaranteed weekly live session</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You prefer more frequent therapist interactions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You want access to a larger therapist network</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You don't need medication management</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">Choose Talkspace If:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You have insurance that covers Talkspace</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You need both therapy and medication management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You prefer a more structured therapy approach</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You value a more personalized matching process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You want more flexibility in subscription tiers</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-bold text-gray-800 mb-3">Our Overall Recommendation</h4>
            <p className="text-gray-700 mb-4">
              While both platforms offer high-quality online therapy services, our overall recommendation is:
            </p>
            <div className="flex items-center justify-center bg-indigo-100 p-4 rounded-lg mb-4">
              <span className="text-xl font-bold text-indigo-800">Talkspace (4.5/5)</span>
            </div>
            <p className="text-gray-700 mb-4">
              Talkspace edges out BetterHelp with its insurance coverage, medication management options, and more structured approach to therapy. These features make it a more comprehensive mental health solution for most users.
            </p>
            <p className="text-gray-700">
              However, BetterHelp (4.0/5) remains an excellent choice for those without insurance coverage, those seeking more affordable options, or users who prioritize a larger therapist selection and guaranteed weekly live sessions.
            </p>
          </div>
        </div>

        {/* User Reviews */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">BetterHelp User Reviews</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      {renderStars(5)}
                    </div>
                    <span className="font-medium">Sarah T.</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "I've been using BetterHelp for 6 months and it's been life-changing. My therapist responds quickly and our weekly video sessions have helped me manage my anxiety. The ability to message anytime I'm feeling overwhelmed is invaluable."
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      {renderStars(4)}
                    </div>
                    <span className="font-medium">Michael R.</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "BetterHelp connected me with a great therapist after my first match wasn't a good fit. The platform is easy to use, though sometimes response times are slower than I'd like. Overall, it's been worth the investment."
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      {renderStars(3)}
                    </div>
                    <span className="font-medium">Jessica L.</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "The financial aid program made therapy affordable for me, which I appreciate. My experience has been mixed - my first two therapists weren't great matches, but my current one is helpful. Wish they accepted insurance."
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Talkspace User Reviews</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      {renderStars(5)}
                    </div>
                    <span className="font-medium">David M.</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "Talkspace has been a game-changer for me. Being able to use my insurance made therapy affordable, and the combination of therapy and medication management in one platform has helped me manage my depression effectively."
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      {renderStars(4)}
                    </div>
                    <span className="font-medium">Amanda K.</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "I love the structured approach my Talkspace therapist takes. The platform is sleek and easy to use, though I wish responses were a bit more frequent. The video sessions are high quality and rarely have technical issues."
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      {renderStars(3)}
                    </div>
                    <span className="font-medium">Robert J.</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "Talkspace's therapist matching process was thorough, and I appreciated having options. The main downside is that the basic plan only includes messaging with no live sessions, which wasn't enough for me. Had to upgrade."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Review Section */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Therapy Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to find out which platform is the best match for your specific needs, preferences, and budget.
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
              href="https://www.betterhelp.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="outline"
              size="lg"
              icon={ExternalLink}
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Visit BetterHelp
            </Button>
            <Button 
              as="a"
              href="https://www.talkspace.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="outline"
              size="lg"
              icon={ExternalLink}
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Visit Talkspace
            </Button>
          </div>
        </div>

        {/* Related Comparisons */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/compare/platforms/betterhelp-vs-cerebral" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">BetterHelp vs Cerebral</h3>
              <p className="text-gray-600 text-sm">Compare BetterHelp's therapy-only approach with Cerebral's combined therapy and medication management.</p>
            </Link>
            <Link to="/compare/platforms/talkspace-vs-cerebral" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Talkspace vs Cerebral</h3>
              <p className="text-gray-600 text-sm">Compare two platforms that offer both therapy and psychiatric services.</p>
            </Link>
            <Link to="/compare/platforms/betterhelp-vs-calmerry" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">BetterHelp vs Calmerry</h3>
              <p className="text-gray-600 text-sm">Compare BetterHelp with Calmerry, a more affordable alternative with similar services.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetterHelpVsTalkspace;