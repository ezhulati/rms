import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Heart, Shield, Users } from 'lucide-react';
import MetaTags from '../components/MetaTags';

const GuidesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Therapy Guides & Resources | Review My Therapy"
        description="Comprehensive guides on choosing therapists, preparing for sessions, understanding therapy types, and recognizing red flags in therapy."
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Therapy Guides & Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guidance to help you navigate your mental health journey with confidence.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">About Our Guides</h2>
          </div>
          
          <p className="text-gray-600 mb-4">
            Our comprehensive guides are designed to help you make informed decisions about your mental health care. Whether you're new to therapy or looking to enhance your current experience, these resources provide expert insights and practical advice.
          </p>
          
          <p className="text-gray-600">
            Each guide is thoroughly researched and regularly updated to ensure you have access to the most current and reliable information. We cover everything from choosing the right therapist to understanding different therapeutic approaches.
          </p>
        </div>

        {/* Guide Categories */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Therapy Selection Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Guide 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">Choosing the Right Therapist</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to finding the perfect therapist for your unique needs and preferences. Learn what factors to consider and questions to ask when selecting a therapist.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Understanding therapist credentials and specializations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Evaluating therapeutic approaches for your needs</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Assessing the therapeutic relationship</span>
                  </li>
                </ul>
                <Link 
                  to="/guides/selection/choosing-online-therapist" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Guide 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">First Therapy Session</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Tips and guidance to help you prepare for and get the most out of your first online therapy session. Reduce anxiety and set yourself up for success.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>What to expect in your first session</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>How to prepare mentally and logistically</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Questions to ask your new therapist</span>
                  </li>
                </ul>
                <Link 
                  to="/guides/selection/first-therapy-session" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Guide 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-6 w-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">Therapy Types Explained</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A comprehensive overview of different therapy approaches and which conditions they're best suited for. Understand the options available to you.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Comparing CBT, psychodynamic, and humanistic approaches</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Specialized therapies for specific conditions</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Finding the right therapeutic approach for you</span>
                  </li>
                </ul>
                <Link 
                  to="/guides/selection/therapy-types-explained" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Guide 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">Red Flags in Therapy</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn to identify warning signs that might indicate a therapist isn't the right fit for you. Protect your mental health journey.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional and ethical red flags</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Signs of a poor therapeutic relationship</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>When and how to find a new therapist</span>
                  </li>
                </ul>
                <Link 
                  to="/guides/selection/red-flags-in-therapy" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Coming Soon</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Heart className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Self-Care Practices</h3>
              </div>
              <p className="text-gray-600">
                Effective strategies to maintain mental wellness between therapy sessions.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Users className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Therapy for Couples</h3>
              </div>
              <p className="text-gray-600">
                A guide to navigating relationship therapy and strengthening your connection.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Shield className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Insurance & Therapy</h3>
              </div>
              <p className="text-gray-600">
                Understanding coverage options and maximizing your benefits for mental health care.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Mental Health Assessments</h3>
              <p className="text-gray-600 mb-4">
                Free screening tools to help you better understand your mental health needs.
              </p>
              <Link to="/tools/assessments" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                View assessments <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Therapy Platform Reviews</h3>
              <p className="text-gray-600 mb-4">
                Detailed reviews of top online therapy platforms to help you make an informed choice.
              </p>
              <Link to="/reviews/platforms" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Read reviews <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Therapy Platform Matcher</h3>
              <p className="text-gray-600 mb-4">
                Answer a few questions to find the online therapy platform that best fits your needs.
              </p>
              <Link to="/tools/matchers/therapy-platform-matcher" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Try the matcher <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Mental Health Blog</h3>
              <p className="text-gray-600 mb-4">
                Articles, interviews, and the latest research on mental health and therapy.
              </p>
              <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Read blog <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
