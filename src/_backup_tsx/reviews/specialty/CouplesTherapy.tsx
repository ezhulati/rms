import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import Button from '../../../components/Button';
import HowWeReviewed from '../../../components/HowWeReviewed';

const CouplesTherapy: React.FC = () => {
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
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Online Couples Therapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Best Online Couples Therapy</h1>
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  {renderStars(4.5)}
                </div>
                <span className="text-gray-600 font-medium">Expert Review</span>
              </div>
              <p className="text-xl text-gray-600 mb-6">
                Comprehensive analysis of the most effective online therapy platforms for couples
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Top Pick</h3>
                  <p className="text-gray-600">ReGain</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Best Value</h3>
                  <p className="text-gray-600">Talkspace</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Best for Serious Issues</h3>
                  <p className="text-gray-600">Couples Therapy Inc</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Best with Insurance</h3>
                  <p className="text-gray-600">Amwell</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button 
                  as={Link} 
                  to="/tools/matchers/therapy-platform-matcher" 
                  variant="primary"
                >
                  Find Your Perfect Match
                </Button>
                <Button 
                  as={Link} 
                  to="/best/audiences/best-for-couples" 
                  variant="outline"
                >
                  See All Options
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Online Couples Therapy: An Overview</h2>
          <p className="text-gray-700 mb-4">
            Online couples therapy has emerged as a convenient, effective alternative to traditional in-person sessions, offering relationship counseling through video calls, messaging, and interactive exercises. Research shows that online couples therapy can be just as effective as in-person therapy for addressing relationship issues, improving communication, and resolving conflicts.
          </p>
          <p className="text-gray-700 mb-4">
            The flexibility of online platforms makes couples therapy more accessible, allowing partners with busy schedules, childcare responsibilities, or location constraints to receive professional guidance. Many platforms offer specialized approaches including Emotionally Focused Therapy (EFT), the Gottman Method, and Cognitive Behavioral Therapy (CBT) for couples.
          </p>
          <p className="text-gray-700">
            In this comprehensive guide, we evaluate the leading online therapy platforms specifically for couples, examining their therapeutic approaches, therapist qualifications, session formats, and overall effectiveness to help you find the right solution for your relationship needs.
          </p>
        </div>

        {/* Top Platforms Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Online Therapy Platforms for Couples</h2>
          
          <div className="space-y-8">
            {/* ReGain */}
            <div className="border-b pb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">1. ReGain</h3>
                <div className="flex items-center">
                  {renderStars(4.7)}
                  <span className="ml-2 text-gray-600">4.7/5</span>
                </div>
              </div>
              
              <div className="md:flex">
                <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                  <img 
                    src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="ReGain Couples Therapy" 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 mb-4">
                    ReGain earns our top recommendation for couples therapy due to its exclusive focus on relationship counseling, with therapists specifically trained and experienced in couples work. The platform offers a shared account system that allows both partners to access the same therapist and conversation thread, fostering transparency and collaborative healing.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Strengths for Couples</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Specialized in relationship counseling</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Shared account for both partners</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Joint and individual messaging options</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Weekly live video sessions</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Limitations</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No insurance coverage</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No three-way video sessions (couples must be in same location)</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Limited worksheets and interactive exercises</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-700">
                      <strong>Price:</strong> $60-$90/week (per couple)
                    </div>
                    <Button 
                      as={Link} 
                      to="/reviews/platforms/regain" 
                      variant="outline" 
                      size="sm" 
                      icon={ArrowRight}
                    >
                      Read Full Review
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Talkspace */}
            <div className="border-b pb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">2. Talkspace</h3>
                <div className="flex items-center">
                  {renderStars(4.5)}
                  <span className="ml-2 text-gray-600">4.5/5</span>
                </div>
              </div>
              
              <div className="md:flex">
                <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                  <img 
                    src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Talkspace Couples Therapy" 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 mb-4">
                    Talkspace offers a robust couples therapy program with licensed relationship specialists and the added benefit of insurance coverage options. Their dedicated couples therapy service provides a secure shared space where both partners can communicate with their therapist, with the flexibility of three-way live video sessions even when partners are in different locations.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Strengths for Couples</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Insurance coverage available</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Three-way video sessions (partners can be in different locations)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Specialized relationship therapists</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Shared messaging room</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Limitations</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Higher pricing than some competitors</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Limited live sessions on basic plans</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Fewer relationship-specific resources than ReGain</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-700">
                      <strong>Price:</strong> $99-$129/week (per couple)
                    </div>
                    <Button 
                      as={Link} 
                      to="/reviews/platforms/talkspace" 
                      variant="outline" 
                      size="sm" 
                      icon={ArrowRight}
                    >
                      Read Full Review
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Couples Therapy Inc */}
            <div className="border-b pb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">3. Couples Therapy Inc</h3>
                <div className="flex items-center">
                  {renderStars(4.3)}
                  <span className="ml-2 text-gray-600">4.3/5</span>
                </div>
              </div>
              
              <div className="md:flex">
                <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Couples Therapy Inc" 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 mb-4">
                    Couples Therapy Inc offers the most intensive and specialized approach, with therapists who have advanced training in evidence-based methods like the Gottman Method and Emotionally Focused Therapy. Their comprehensive assessment process and focus on serious relationship issues make them ideal for couples facing significant challenges or considering separation.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Strengths for Couples</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Advanced specialist therapists</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Comprehensive assessment process</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Intensive retreat options</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Specialized in serious relationship issues</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Limitations</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Significantly higher cost</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No messaging-only options</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Less flexible scheduling</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-700">
                      <strong>Price:</strong> $119-$199/session
                    </div>
                    <Button 
                      as="a" 
                      href="https://couplestherapyinc.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline" 
                      size="sm" 
                      icon={ArrowRight}
                    >
                      Visit Website
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Reviewed */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Find Your Ideal Couples Therapy Platform</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect online therapy platform for your relationship needs, communication style, and specific challenges.
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
              to="/best/audiences/best-for-couples" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              See All Options
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouplesTherapy;
