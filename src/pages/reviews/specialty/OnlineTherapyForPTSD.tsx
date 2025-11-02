import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, Shield, Clock, Users, Brain, Heart } from 'lucide-react';
import Button from '../../../components/Button';
import HowWeReviewed from '../../../components/HowWeReviewed';

const OnlineTherapyForPTSD = () => {
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
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Online Therapy for PTSD" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Online Therapy for PTSD: Comprehensive Review</h1>
              <p className="text-xl text-gray-600 mb-6">
                An in-depth analysis of how online therapy platforms address post-traumatic stress disorder, including effectiveness, approaches, and accessibility.
              </p>
              <div className="flex items-center mb-6">
                <div className="mr-2">
                  {renderStars(4.0)}
                </div>
                <span className="text-gray-600">4.0/5 - PTSD Treatment Rating</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link}
                  to="/best-for-ptsd"
                  variant="primary"
                  icon={ArrowRight}
                >
                  View Best Platforms for PTSD
                </Button>
                <Button 
                  as={Link}
                  to="/tools/matchers/therapy-platform-matcher"
                  variant="outline"
                >
                  Find Your Best Match
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Findings for PTSD Treatment Online</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Evidence-based trauma therapies available (CPT, PE, EMDR)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Increased accessibility for those with trauma-related mobility or social anxiety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Privacy and comfort of receiving treatment from home</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Specialized PTSD therapists available on major platforms</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Limitations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Not suitable for severe or complex PTSD without additional support</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Some evidence-based treatments harder to implement virtually</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Limited crisis support between sessions</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Therapist expertise in trauma treatment varies by platform</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Verdict</h3>
            <p className="text-gray-700">
              Online therapy can be effective for mild to moderate PTSD, particularly when delivered by specialists using evidence-based approaches. The convenience and privacy of virtual sessions benefit many trauma survivors, though those with severe symptoms may need more intensive or hybrid treatment models. For best results, look for platforms that specifically screen for trauma-informed therapists and offer video sessions rather than text-only therapy.
            </p>
          </div>
        </div>

        {/* Platform Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Online Platforms for PTSD Treatment</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Platform</th>
                  <th className="py-3 px-4 text-left">PTSD Rating</th>
                  <th className="py-3 px-4 text-left">Trauma Specialists</th>
                  <th className="py-3 px-4 text-left">Evidence-Based Approaches</th>
                  <th className="py-3 px-4 text-left">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-4 px-4 font-medium">BetterHelp</td>
                  <td className="py-4 px-4">{renderStars(3.8)}</td>
                  <td className="py-4 px-4">
                    <CheckCircle className="h-5 w-5 text-green-500 inline mr-1" />
                    <span>Available</span>
                  </td>
                  <td className="py-4 px-4">CPT, PE</td>
                  <td className="py-4 px-4">$60-$90/week</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Talkspace</td>
                  <td className="py-4 px-4">{renderStars(4.2)}</td>
                  <td className="py-4 px-4">
                    <CheckCircle className="h-5 w-5 text-green-500 inline mr-1" />
                    <span>Available</span>
                  </td>
                  <td className="py-4 px-4">CPT, PE, EMDR</td>
                  <td className="py-4 px-4">$65-$99/week</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Calmerry</td>
                  <td className="py-4 px-4">{renderStars(3.9)}</td>
                  <td className="py-4 px-4">
                    <CheckCircle className="h-5 w-5 text-green-500 inline mr-1" />
                    <span>Available</span>
                  </td>
                  <td className="py-4 px-4">CPT, CBT for trauma</td>
                  <td className="py-4 px-4">$42-$68/week</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Online-Therapy.com</td>
                  <td className="py-4 px-4">{renderStars(4.0)}</td>
                  <td className="py-4 px-4">
                    <CheckCircle className="h-5 w-5 text-green-500 inline mr-1" />
                    <span>Available</span>
                  </td>
                  <td className="py-4 px-4">CBT for trauma</td>
                  <td className="py-4 px-4">$40-$88/week</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Amwell</td>
                  <td className="py-4 px-4">{renderStars(4.1)}</td>
                  <td className="py-4 px-4">
                    <CheckCircle className="h-5 w-5 text-green-500 inline mr-1" />
                    <span>Available</span>
                  </td>
                  <td className="py-4 px-4">CPT, PE, EMDR</td>
                  <td className="py-4 px-4">$109-$129/session</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-sm text-gray-600">
            <p><strong>Note:</strong> CPT = Cognitive Processing Therapy, PE = Prolonged Exposure, EMDR = Eye Movement Desensitization and Reprocessing</p>
          </div>
        </div>

        {/* How We Reviewed Section */}
        <div className="mt-8">
          <HowWeReviewed />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Find PTSD Treatment?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Connect with a specialized trauma therapist through one of our recommended online therapy platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/best-for-ptsd" 
              variant="light"
              size="lg"
            >
              View Top PTSD Platforms
            </Button>
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Find Your Best Match
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineTherapyForPTSD;
