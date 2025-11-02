import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Star, ExternalLink } from 'lucide-react';
import HowWeReviewed from '../components/HowWeReviewed';

const ReviewsPage = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/reviews';

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {isRootPath ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Online Therapy Platform Reviews</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth, unbiased reviews of the leading online therapy platforms to help you make an informed decision.
              </p>
            </div>

            {/* Featured Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* BetterHelp Review Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/images/concepts/reviewspage.jpg" 
                  alt="BetterHelp Review" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5" strokeWidth={1} />
                    </div>
                    <span className="ml-2 text-gray-600">4.0/5</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">BetterHelp Review</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive review of BetterHelp's services, pricing, therapist qualifications, and user experience.
                  </p>
                  <Link to="/reviews/platforms/betterhelp" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    Read full review <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Talkspace Review Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Talkspace Review" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                    <span className="ml-2 text-gray-600">4.5/5</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Talkspace Review</h3>
                  <p className="text-gray-600 mb-4">
                    An in-depth analysis of Talkspace's therapy services, medication management, and insurance coverage.
                  </p>
                  <Link to="/reviews/platforms/talkspace" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    Read full review <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Cerebral Review Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Cerebral Review" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5" strokeWidth={1} />
                    </div>
                    <span className="ml-2 text-gray-600">4.0/5</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cerebral Review</h3>
                  <p className="text-gray-600 mb-4">
                    A detailed review of Cerebral's combined therapy and medication management services.
                  </p>
                  <Link to="/reviews/platforms/cerebral" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    Read full review <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Review Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Platform Reviews */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Platform Reviews</h2>
                  <p className="text-gray-600 mb-6">
                    Comprehensive reviews of individual online therapy platforms.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/reviews/platforms/betterhelp" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>BetterHelp Review</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/platforms/talkspace" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Talkspace Review</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/platforms/cerebral" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Cerebral Review</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/platforms/calmerry" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Calmerry Review</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/platforms/online-therapy" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Online-Therapy.com Review</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/reviews/platforms" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all platform reviews <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Feature Reviews */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Feature Reviews</h2>
                  <p className="text-gray-600 mb-6">
                    Detailed reviews of specific features across therapy platforms.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/reviews/features/betterhelp-therapist-quality" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>BetterHelp Therapist Quality</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/features/talkspace-messaging-system" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Talkspace Messaging System</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/features/cerebral-medication-management" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Cerebral Medication Management</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/features/video-session-quality" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Video Session Quality Comparison</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/reviews/features" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all feature reviews <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Specialty Reviews */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Specialty Reviews</h2>
                  <p className="text-gray-600 mb-6">
                    Reviews focused on how platforms handle specific mental health conditions.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/reviews/specialty/betterhelp-for-anxiety" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>BetterHelp for Anxiety</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/specialty/talkspace-for-depression" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Talkspace for Depression</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/specialty/online-therapy-for-ptsd" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Online Therapy for PTSD</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/specialty/couples-therapy-platforms" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Couples Therapy Platforms</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/reviews/specialty" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all specialty reviews <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Pricing Reviews */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing Reviews</h2>
                  <p className="text-gray-600 mb-6">
                    Detailed analysis of pricing structures, value, and affordability.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/reviews/pricing/online-therapy-pricing-comparison" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Online Therapy Pricing Comparison</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/pricing/betterhelp-cost-analysis" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>BetterHelp Cost Analysis</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/pricing/insurance-coverage-guide" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Insurance Coverage Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews/pricing/affordable-therapy-options" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Affordable Therapy Options</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/reviews/pricing" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all pricing reviews <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Review */}
            <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Featured Review: BetterHelp</h2>
                  <Link to="/reviews/platforms/betterhelp" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                    Read full review <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="col-span-1 md:col-span-1">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="BetterHelp Review" 
                      className="w-full rounded-lg mb-4"
                    />
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5" strokeWidth={1} />
                      </div>
                      <span className="ml-2 text-gray-600">4.0/5</span>
                    </div>
                    <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                      Visit BetterHelp <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                  
                  <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">BetterHelp Review Summary</h3>
                    <p className="text-gray-600 mb-4">
                      BetterHelp is one of the largest online therapy platforms, offering counseling services through messaging, live chat, phone calls, and video sessions. Our comprehensive review examines the platform's strengths and limitations.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Pros</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <span className="text-green-500 font-bold mr-2">✓</span>
                            <span>Large network of licensed therapists</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 font-bold mr-2">✓</span>
                            <span>Multiple communication methods</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 font-bold mr-2">✓</span>
                            <span>Financial aid available</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 font-bold mr-2">✓</span>
                            <span>Therapist switching is easy</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Cons</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">✗</span>
                            <span>No insurance coverage</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">✗</span>
                            <span>No medication management</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">✗</span>
                            <span>Response times can vary</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">✗</span>
                            <span>Not suitable for severe conditions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">
                      BetterHelp is best suited for individuals seeking convenient, flexible therapy for mild to moderate mental health concerns. Read our full review for an in-depth analysis of the platform's therapist qualifications, user experience, and value for money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* How We Review Section */}
            <div className="mt-16">
              <HowWeReviewed />
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Review Content</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              This is a placeholder for the specific review content based on the current URL path.
            </p>
            <p className="text-gray-600">
              Current path: {location.pathname}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;