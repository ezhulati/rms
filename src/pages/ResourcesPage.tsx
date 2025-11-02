import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, FileText, Download, BookOpen } from 'lucide-react';

const ResourcesPage = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/resources';

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {isRootPath ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Mental Health Resources</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Free downloadable worksheets, guides, and resources to support your mental health journey.
              </p>
            </div>

            {/* Featured Resources */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Resource 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-indigo-100 p-6 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-indigo-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cognitive Distortion Worksheet</h3>
                  <p className="text-gray-600 mb-4">
                    Learn to identify and challenge common cognitive distortions that contribute to anxiety and depression.
                  </p>
                  <Link to="/resources/worksheets/cognitive-distortion-worksheet" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    View resource <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Resource 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-indigo-100 p-6 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-indigo-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Therapy Session Preparation Guide</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive guide to help you prepare for and get the most out of your therapy sessions.
                  </p>
                  <Link to="/resources/worksheets/therapy-session-preparation" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    View resource <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Resource 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-indigo-100 p-6 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-indigo-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Mindfulness Practice Worksheet</h3>
                  <p className="text-gray-600 mb-4">
                    Simple mindfulness exercises to help reduce stress, anxiety, and improve your overall mental wellbeing.
                  </p>
                  <Link to="/resources/worksheets/mindfulness-practice-worksheet" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    View resource <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Resource Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Worksheets */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Worksheets</h2>
                  <p className="text-gray-600 mb-6">
                    Practical worksheets to help you apply therapeutic techniques in your daily life.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/resources/worksheets/cognitive-distortion-worksheet" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Cognitive Distortion Worksheet</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources/worksheets/therapy-session-preparation" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Therapy Session Preparation Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources/worksheets/mindfulness-practice-worksheet" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Mindfulness Practice Worksheet</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources/worksheets/thought-record-worksheet" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Thought Record Worksheet</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources/worksheets/stress-management-techniques" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Stress Management Techniques</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/resources/worksheets" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all worksheets <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Guides */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Guides</h2>
                  <p className="text-gray-600 mb-6">
                    Comprehensive guides to help you navigate various aspects of mental health care.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/resources/guides/therapy-types-explained" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Therapy Types Explained</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources/guides/insurance-coverage-guide" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Insurance Coverage Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources/guides/talking-to-loved-ones" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Talking to Loved Ones About Mental Health</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources/guides/self-care-strategies" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Self-Care Strategies</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources/guides/crisis-resources" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Crisis Resources</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/resources/guides" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all guides <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Resource Preview */}
            <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Featured Resource: Cognitive Distortion Worksheet</h2>
                  <Link to="/resources/worksheets/cognitive-distortion-worksheet" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                    View full resource <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="col-span-1 md:col-span-1">
                    <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center">
                      <FileText className="h-16 w-16 text-indigo-600 mb-4" />
                      <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">Cognitive Distortion Worksheet</h3>
                      <p className="text-gray-600 text-sm text-center mb-4">PDF Worksheet • 3 pages</p>
                      <button className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                        <Download className="h-4 w-4 mr-2" /> Download PDF
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Understanding Cognitive Distortions</h3>
                    <p className="text-gray-600 mb-4">
                      Cognitive distortions are patterns of thinking that are inaccurate and negatively biased. These thought patterns can reinforce negative emotions and lead to increased anxiety and depression. This worksheet helps you identify and challenge these distortions.
                    </p>
                    
                    <h4 className="font-bold text-gray-800 mb-2">What's Included:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span><strong>Distortion Identification Guide:</strong> Descriptions and examples of common cognitive distortions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span><strong>Thought Record Template:</strong> A structured format to document and analyze distorted thoughts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span><strong>Reframing Exercises:</strong> Techniques to challenge and replace distorted thoughts with more balanced ones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span><strong>Practice Scenarios:</strong> Example situations to help you apply the techniques</span>
                      </li>
                    </ul>
                    
                    <p className="text-gray-600">
                      This worksheet is based on cognitive-behavioral therapy (CBT) principles and can be used as a self-help tool or in conjunction with therapy. Regular practice can help you develop more balanced thinking patterns over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resource Development */}
            <div className="mt-16 bg-indigo-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">How Our Resources Are Developed</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Expert-Created</h3>
                  <p className="text-gray-600">
                    All resources are developed by licensed mental health professionals with expertise in their respective areas.
                  </p>
                </div>
                
                <div>
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Evidence-Based</h3>
                  <p className="text-gray-600">
                    Our resources incorporate techniques and approaches that are supported by research and clinical evidence.
                  </p>
                </div>
                
                <div>
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Download className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Practical & Accessible</h3>
                  <p className="text-gray-600">
                    We design our resources to be user-friendly, practical, and applicable to real-life situations.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Need More Personalized Support?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                While these resources can be helpful, they're not a substitute for professional mental health care. Consider exploring online therapy options for personalized support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/compare" className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                  Compare Therapy Platforms
                </Link>
                <Link to="/tools/matchers/therapy-platform-matcher" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition">
                  Find Your Match
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Resource Content</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              This is a placeholder for the specific resource content based on the current URL path.
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

export default ResourcesPage;