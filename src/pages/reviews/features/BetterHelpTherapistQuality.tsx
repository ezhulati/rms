import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, GraduationCap, Award, Clock } from 'lucide-react';
import Button from '../../../components/Button';
import HowWeReviewed from '../../../components/HowWeReviewed';

const BetterHelpTherapistQuality = () => {
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
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="BetterHelp Therapist Quality" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">BetterHelp Therapist Quality Review</h1>
              <p className="text-xl text-gray-600 mb-6">
                An in-depth analysis of BetterHelp's therapist qualifications, vetting process, and overall quality of care.
              </p>
              <div className="flex items-center mb-6">
                <div className="mr-2">
                  {renderStars(4.0)}
                </div>
                <span className="text-gray-600">4.0/5 - Therapist Quality Rating</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link}
                  to="/reviews/platforms/betterhelp"
                  variant="primary"
                  icon={ArrowRight}
                >
                  Read Full BetterHelp Review
                </Button>
                <Button 
                  as="a"
                  href="https://www.betterhelp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  Visit BetterHelp
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Findings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">All therapists are fully licensed and credentialed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Rigorous vetting process with only 15% of applicants accepted</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Wide range of specializations and therapeutic approaches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Easy therapist switching if you're not satisfied</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Limitations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Inconsistent therapist response times</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Quality can vary between individual therapists</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Limited control over therapist matching process</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Some therapists manage large caseloads</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Verdict</h3>
            <p className="text-gray-700">
              BetterHelp maintains high standards for therapist qualifications and offers a diverse range of well-credentialed professionals. While the quality of individual therapist interactions can vary, the platform's easy switching policy ensures you can find a good match. Overall, BetterHelp provides reliable access to qualified mental health professionals, though the experience may not be as consistent as with some premium in-person services.
            </p>
          </div>
        </div>

        {/* Therapist Credentials */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Therapist Credentials & Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Education Requirements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Master's or Doctoral degree in counseling or related field</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Accredited institution required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Specialized training verified</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Licensing & Certification</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Current state license required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">License verification process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Good standing with licensing board</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Experience Requirements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Minimum 3 years clinical experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">1,000+ hours of clinical work</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Experience verification process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Reviewed Section */}
        <div className="mt-8">
          <HowWeReviewed />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Find the Right Therapist?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            BetterHelp offers a large network of qualified therapists with a simple matching process to help you find the right fit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as="a" 
              href="https://www.betterhelp.com" 
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              size="lg"
            >
              Visit BetterHelp
            </Button>
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
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

export default BetterHelpTherapistQuality;
