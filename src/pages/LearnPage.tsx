import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, BookOpen, BarChart, Brain, Users } from 'lucide-react';

const LearnPage = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/learn';

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {isRootPath ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn About Mental Health</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Educational resources to help you understand mental health concepts, treatments, and best practices.
              </p>
            </div>

            {/* Featured Learning Resources */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Learning Resource 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Therapy Types" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Therapy Types Explained</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive guide to different therapy approaches including CBT, DBT, psychodynamic therapy, and more.
                  </p>
                  <Link to="/learn/fundamentals/therapy-types-explained" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    Read article <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Learning Resource 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Mental Health Statistics" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                    <BarChart className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Mental Health Statistics</h3>
                  <p className="text-gray-600 mb-4">
                    Explore current data and trends in mental health, including prevalence, treatment access, and outcomes.
                  </p>
                  <Link to="/learn/statistics/mental-health-statistics" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    Read article <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Learning Resource 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Online Therapy Guide" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Online Therapy Guide</h3>
                  <p className="text-gray-600 mb-4">
                    Everything you need to know about online therapy, from how it works to what to expect in your first session.
                  </p>
                  <Link to="/learn/fundamentals/online-therapy-guide" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    Read article <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Learning Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Statistics */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Statistics & Research</h2>
                  <p className="text-gray-600 mb-6">
                    Data-driven insights into mental health trends, research findings, and treatment outcomes.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/learn/statistics/mental-health-statistics" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Mental Health Statistics</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/learn/statistics/online-therapy-effectiveness" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Online Therapy Effectiveness Research</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/learn/statistics/therapy-outcomes-data" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Therapy Outcomes Data</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/learn/statistics/mental-health-demographics" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Mental Health Demographics</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/learn/statistics" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all statistics <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Fundamentals */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Mental Health Fundamentals</h2>
                  <p className="text-gray-600 mb-6">
                    Educational resources on core mental health concepts, treatments, and approaches.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/learn/fundamentals/therapy-types-explained" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Therapy Types Explained</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/learn/fundamentals/online-therapy-guide" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Online Therapy Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/learn/fundamentals/common-mental-health-conditions" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Common Mental Health Conditions</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/learn/fundamentals/medication-vs-therapy" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Medication vs. Therapy</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/learn/fundamentals" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all fundamentals <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Article */}
            <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Featured Article: Therapy Types Explained</h2>
                  <Link to="/learn/fundamentals/therapy-types-explained" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                    Read full article <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="col-span-1 md:col-span-1">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Therapy Types" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  
                  <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Understanding Different Therapeutic Approaches</h3>
                    <p className="text-gray-600 mb-4">
                      With so many different therapy types available, it can be challenging to understand which approach might be best for your specific needs. This guide breaks down the most common therapeutic modalities and their applications.
                    </p>
                    
                    <div className="space-y-4 mb-4">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Cognitive Behavioral Therapy (CBT)</h4>
                        <p className="text-gray-600 text-sm">
                          A structured, goal-oriented approach that focuses on identifying and changing negative thought patterns and behaviors. Particularly effective for anxiety, depression, and specific phobias.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Dialectical Behavior Therapy (DBT)</h4>
                        <p className="text-gray-600 text-sm">
                          Combines cognitive techniques with mindfulness practices. Originally developed for borderline personality disorder but now used for emotional regulation, interpersonal effectiveness, and distress tolerance.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Psychodynamic Therapy</h4>
                        <p className="text-gray-600 text-sm">
                          Focuses on unconscious processes and how they manifest in current behavior. Helps individuals understand how past experiences influence present patterns.
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">
                      Our full article explores these and other approaches in detail, including acceptance and commitment therapy (ACT), interpersonal therapy, and humanistic therapies, with guidance on which might be most suitable for different conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Highlight */}
            <div className="mt-16 bg-indigo-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Key Mental Health Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">1 in 5</div>
                  <p className="text-gray-600">
                    U.S. adults experience mental illness each year, representing 52.9 million people
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">60%</div>
                  <p className="text-gray-600">
                    Of people with mental health conditions don't receive treatment
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">76%</div>
                  <p className="text-gray-600">
                    Of online therapy users report improved mental wellbeing after treatment
                  </p>
                </div>
              </div>
              <div className="text-center mt-6">
                <Link to="/learn/statistics/mental-health-statistics" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                  View all statistics <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Topics Grid */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Popular Learning Topics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/learn/fundamentals/anxiety-disorders" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>Anxiety Disorders</span>
                </Link>
                
                <Link to="/learn/fundamentals/depression" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>Depression</span>
                </Link>
                
                <Link to="/learn/fundamentals/stress-management" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>Stress Management</span>
                </Link>
                
                <Link to="/learn/fundamentals/mindfulness" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>Mindfulness</span>
                </Link>
                
                <Link to="/learn/fundamentals/trauma-ptsd" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>Trauma & PTSD</span>
                </Link>
                
                <Link to="/learn/fundamentals/relationship-counseling" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center">
                  <Users className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>Relationship Counseling</span>
                </Link>
                
                <Link to="/learn/fundamentals/self-care" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>Self-Care</span>
                </Link>
                
                <Link to="/learn/fundamentals/medication-basics" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>Medication Basics</span>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Now that you've learned about mental health concepts and treatments, explore your options for professional support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/compare" className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                  Compare Therapy Platforms
                </Link>
                <Link to="/tools/assessments/mental-health-assessment" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition">
                  Take an Assessment
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Learning Content</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              This is a placeholder for the specific learning content based on the current URL path.
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

export default LearnPage;