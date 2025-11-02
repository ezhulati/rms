import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, Video, Wifi, Monitor, Headphones, Settings, Shield, Users, Brain } from 'lucide-react';
import Button from '../../../components/Button';
import HowWeReviewed from '../../../components/HowWeReviewed';

const VideoSessionQuality = () => {
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
                src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Video Session Quality" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Video Session Quality: Platform Comparison</h1>
              <p className="text-xl text-gray-600 mb-6">
                A comprehensive analysis of video therapy quality across major online therapy platforms, examining technical performance, user experience, and therapeutic effectiveness.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link}
                  to="/tools/matchers/therapy-platform-matcher"
                  variant="primary"
                  icon={ArrowRight}
                >
                  Find Your Best Match
                </Button>
                <Button 
                  as={Link}
                  to="/compare/platforms"
                  variant="outline"
                  icon={ArrowRight}
                >
                  Compare All Platforms
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Platform Video Quality Comparison</h2>
          
          <div className="space-y-8">
            {/* BetterHelp */}
            <div className="border-b pb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">BetterHelp</h3>
                <div className="flex items-center">
                  {renderStars(4.5)}
                  <span className="ml-2 text-gray-600">4.5/5</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Technical Performance</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>HD video quality with adaptive streaming</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Reliable connection stability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Low bandwidth requirements</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Screen sharing capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Session recording options</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>No virtual background support</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600">
                  BetterHelp offers excellent video quality with robust features, making it a top choice for video therapy sessions. Their platform handles poor connections well and provides consistent performance across devices.
                </p>
              </div>
            </div>

            {/* Talkspace */}
            <div className="border-b pb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Talkspace</h3>
                <div className="flex items-center">
                  {renderStars(4.5)}
                  <span className="ml-2 text-gray-600">4.5/5</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Technical Performance</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>High-quality video with optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Excellent connection handling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Good mobile performance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Advanced audio filtering</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Virtual backgrounds</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Integrated session notes</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600">
                  Talkspace provides a polished video experience with professional-grade features. Their platform excels in audio quality and offers useful additional features for enhancing the therapy experience.
                </p>
              </div>
            </div>

            {/* Online-Therapy.com */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Online-Therapy.com</h3>
                <div className="flex items-center">
                  {renderStars(4.0)}
                  <span className="ml-2 text-gray-600">4.0/5</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Technical Performance</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Standard video quality</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Occasional connection issues</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Basic mobile support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Screen sharing</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Limited advanced features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Integrated with CBT program</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600">
                  Online-Therapy.com provides adequate video quality for therapy sessions, though with fewer advanced features. The platform focuses on integration with their CBT program rather than advanced video capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Internet Connection</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Minimum 1 Mbps upload/download</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Recommended 5+ Mbps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Stable connection required</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Device Requirements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Updated browser (Chrome recommended)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Webcam access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Microphone access</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Recommended Setup</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Quiet, private space</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Good lighting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>External headphones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Best Practices for Video Therapy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Setup</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Test Your Setup</h4>
                    <p className="text-gray-600">Run a test call before your first session to check video and audio quality.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Backup Plan</h4>
                    <p className="text-gray-600">Have a phone number ready in case of technical difficulties.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Close Other Apps</h4>
                    <p className="text-gray-600">Close bandwidth-heavy applications during sessions.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Environment Setup</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Private Space</h4>
                    <p className="text-gray-600">Ensure a quiet, private location where you won't be interrupted.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Lighting</h4>
                    <p className="text-gray-600">Position yourself facing a light source for clear visibility.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Background</h4>
                    <p className="text-gray-600">Choose a neutral, professional background or use virtual backgrounds.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Troubleshooting Guide */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Issues & Solutions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Poor Video Quality</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Check your internet connection speed</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Close other bandwidth-intensive applications</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Try lowering video quality settings</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Audio Issues</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Check microphone and speaker settings</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Use headphones to prevent echo</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Test audio in browser settings</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Connection Problems</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Switch to a wired connection if possible</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Move closer to your Wi-Fi router</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span>Have a backup device ready</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Review Section */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Try Video Therapy?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Find the platform with the best video therapy experience for your needs and technical setup.
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

        {/* Related Reviews */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/reviews/features/messaging-systems" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Messaging Systems Compared</h3>
              <p className="text-gray-600 text-sm">Compare text-based therapy features across platforms.</p>
            </Link>
            <Link to="/reviews/features/mobile-apps" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Mobile App Quality</h3>
              <p className="text-gray-600 text-sm">Review of therapy platform mobile applications.</p>
            </Link>
            <Link to="/reviews/features/user-interface" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">User Interface Analysis</h3>
              <p className="text-gray-600 text-sm">Compare platform interfaces and user experience.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSessionQuality;