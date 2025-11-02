import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, HelpCircle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="text-indigo-600 text-9xl font-bold mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We're sorry, but the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-white rounded-lg p-4 shadow-md flex items-center">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search for resources, guides, or platforms..." 
              className="w-full text-gray-800 focus:outline-none bg-white"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md ml-2 hover:bg-indigo-700 transition">
              Search
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link to="/" className="flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
            <Home className="h-5 w-5 mr-2" />
            Return to Home
          </Link>
          <Link to="/compare" className="flex items-center justify-center bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition">
            <Search className="h-5 w-5 mr-2" />
            Compare Platforms
          </Link>
          <Link to="/tools/assessments/mental-health-assessment" className="flex items-center justify-center bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition">
            <HelpCircle className="h-5 w-5 mr-2" />
            Take Assessment
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Popular Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link to="/compare/platforms/betterhelp-vs-talkspace" className="text-indigo-600 hover:text-indigo-800">
              BetterHelp vs Talkspace
            </Link>
            <Link to="/reviews/platforms/betterhelp" className="text-indigo-600 hover:text-indigo-800">
              BetterHelp Review
            </Link>
            <Link to="/best/conditions/best-for-anxiety" className="text-indigo-600 hover:text-indigo-800">
              Best for Anxiety
            </Link>
            <Link to="/guides/financial/therapy-insurance-coverage" className="text-indigo-600 hover:text-indigo-800">
              Insurance Coverage Guide
            </Link>
            <Link to="/tools/matchers/therapy-platform-matcher" className="text-indigo-600 hover:text-indigo-800">
              Therapy Platform Matcher
            </Link>
            <Link to="/learn/fundamentals/therapy-types-explained" className="text-indigo-600 hover:text-indigo-800">
              Therapy Types Explained
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
