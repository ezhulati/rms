import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Video, Phone, Users, Brain, Star, CheckCircle, XCircle, Info } from 'lucide-react';
import Button from '../components/Button';

const ModalitiesPage = () => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Online Therapy Modalities Compared</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare different therapy approaches and delivery methods to find what works best for your needs.
          </p>
          <div className="flex justify-center">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="primary" 
              size="lg" 
              icon={Brain}
            >
              Find your ideal therapy match
            </Button>
          </div>
        </div>

        {/* Quick Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Therapy Modalities at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Text-Based Therapy */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-800">Text-Based</h3>
              </div>
              <div className="mb-3">
                {renderStars(4)}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Asynchronous messaging with therapist through secure platform.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>24/7 access to support</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Time to process thoughts</span>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                  <span>No real-time interaction</span>
                </div>
              </div>
            </div>
            
            {/* Video Therapy */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Video className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-800">Video</h3>
              </div>
              <div className="mb-3">
                {renderStars(4.5)}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Live video sessions similar to in-person therapy.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Face-to-face interaction</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Non-verbal cues visible</span>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                  <span>Requires good internet</span>
                </div>
              </div>
            </div>
            
            {/* Phone Therapy */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Phone className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-800">Phone</h3>
              </div>
              <div className="mb-3">
                {renderStars(4)}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Live voice sessions without video component.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>No video anxiety</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>More mobile flexibility</span>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                  <span>No visual interaction</span>
                </div>
              </div>
            </div>
            
            {/* Group Therapy */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-800">Group</h3>
              </div>
              <div className="mb-3">
                {renderStars(4)}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Therapist-led sessions with multiple participants.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Peer support</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>More affordable</span>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                  <span>Less individual focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Comparisons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Online vs Traditional */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Online vs Traditional Therapy</h2>
              <p className="text-gray-600 mb-6">
                Compare the key differences between online and in-person therapy approaches.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Online Therapy</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>More flexible scheduling and access</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Often more affordable</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Multiple communication options</span>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Requires stable internet connection</span>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Not suitable for severe conditions</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Traditional Therapy</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>In-person connection</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Better for complex issues</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>More insurance options</span>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Less flexible scheduling</span>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Travel time required</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/compare/modalities/online-vs-traditional-therapy" className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-800">
                Read detailed comparison <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Text vs Video */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Text vs Video Therapy</h2>
              <p className="text-gray-600 mb-6">
                Compare the benefits and limitations of text-based and video therapy sessions.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Text-Based Therapy</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Time to process thoughts</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Written record of conversations</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Accessible anytime</span>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Slower response times</span>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>No non-verbal cues</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Video Therapy</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Real-time interaction</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Non-verbal communication</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>More personal connection</span>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Requires scheduling</span>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Technical requirements</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/compare/modalities/text-vs-video-therapy" className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-800">
                Read detailed comparison <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Therapeutic Approaches */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Therapeutic Approaches Compared</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CBT */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-800">CBT</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Cognitive Behavioral Therapy focuses on identifying and changing negative thought patterns and behaviors.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Evidence-based approach</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Structured treatment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Practical skills focus</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Best for:</strong> Anxiety, depression, specific phobias
              </div>
            </div>
            
            {/* Psychodynamic */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-800">Psychodynamic</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Explores how past experiences and unconscious processes influence current behavior.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Deep insight development</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Long-term change focus</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Relationship patterns</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Best for:</strong> Complex issues, relationship patterns
              </div>
            </div>
            
            {/* Humanistic */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-800">Humanistic</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Client-centered approach focusing on personal growth and self-actualization.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Non-judgmental support</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Client-led process</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Emotional awareness</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Best for:</strong> Self-exploration, personal growth
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              as={Link} 
              to="/compare/modalities/therapy-approaches" 
              variant="primary" 
              icon={ArrowRight}
            >
              Compare all therapy approaches
            </Button>
          </div>
        </div>

        {/* Research & Effectiveness */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Research & Effectiveness</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Online Therapy Effectiveness</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Research Findings</h4>
                  <p className="text-gray-600 text-sm">
                    Recent studies show that online therapy can be as effective as in-person therapy for many conditions, with some advantages in accessibility and consistency of care.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Success Rates</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-24 font-medium">Depression:</div>
                      <div className="flex items-center">
                        {renderStars(4.5)}
                        <span className="ml-2 text-sm text-gray-600">88% effectiveness</span>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-24 font-medium">Anxiety:</div>
                      <div className="flex items-center">
                        {renderStars(4.5)}
                        <span className="ml-2 text-sm text-gray-600">85% effectiveness</span>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-24 font-medium">PTSD:</div>
                      <div className="flex items-center">
                        {renderStars(4)}
                        <span className="ml-2 text-sm text-gray-600">75% effectiveness</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Modality Effectiveness</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-800">Video Therapy</h4>
                    <div className="flex items-center">
                      {renderStars(4.5)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Most similar to traditional therapy, with high satisfaction rates and treatment outcomes.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-800">Text Therapy</h4>
                    <div className="flex items-center">
                      {renderStars(4)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Effective for ongoing support and processing thoughts, particularly beneficial for anxiety.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-800">Group Therapy</h4>
                    <div className="flex items-center">
                      {renderStars(4)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Particularly effective for specific conditions and peer support benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Choosing the Right Modality */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Therapy Modality</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Consider Your Needs</h3>
              <p className="text-gray-600">
                Think about your specific mental health concerns, comfort with different communication styles, and treatment goals.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Practical Factors</h3>
              <p className="text-gray-600">
                Consider your schedule, budget, technology access, and whether you need insurance coverage.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Treatment Style</h3>
              <p className="text-gray-600">
                Different approaches work better for different conditions and personal preferences.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              For most people, we recommend:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Video therapy</strong> if you prefer face-to-face interaction and want the closest experience to traditional therapy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Text therapy</strong> if you prefer processing thoughts in writing or need more flexible communication</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Combined approach</strong> (text + video) for the most comprehensive support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Therapy Match?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to discover which therapy modality and platform best fits your needs and preferences.
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
      </div>
    </div>
  );
};

export default ModalitiesPage;