import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, FileText, Users, Brain } from 'lucide-react';

const CaseStudiesPage = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/case-studies';

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {isRootPath ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Mental Health Case Studies</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world examples and success stories of online therapy treatments for various conditions and demographics.
              </p>
            </div>

            {/* Featured Case Studies */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Case Study 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Anxiety Treatment Success" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                    <Brain className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Anxiety Treatment Success Story</h3>
                  <p className="text-gray-600 mb-4">
                    How Sarah overcame severe anxiety through online CBT therapy and mindfulness techniques.
                  </p>
                  <Link to="/case-studies/conditions/anxiety-treatment-success" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    Read case study <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Remote Worker Mental Health" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Remote Worker Mental Health</h3>
                  <p className="text-gray-600 mb-4">
                    How online therapy helped John manage work-from-home burnout and isolation during his tech career.
                  </p>
                  <Link to="/case-studies/demographics/remote-worker-mental-health" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    Read case study <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Therapy for Night Owls" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Therapy for Night Owls</h3>
                  <p className="text-gray-600 mb-4">
                    How flexible online therapy scheduling helped Maria, a night shift nurse, access mental health care.
                  </p>
                  <Link to="/case-studies/demographics/therapy-for-night-owls" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    Read case study <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Study Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Condition Case Studies */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Condition Case Studies</h2>
                  <p className="text-gray-600 mb-6">
                    Real-world examples of how online therapy has helped people with specific mental health conditions.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/case-studies/conditions/anxiety-treatment-success" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Anxiety Treatment Success Story</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies/conditions/depression-recovery-journey" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Depression Recovery Journey</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies/conditions/ptsd-treatment-online" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>PTSD Treatment Online</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies/conditions/ocd-management-success" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>OCD Management Success</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/case-studies/conditions" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all condition case studies <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Demographic Case Studies */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Demographic Case Studies</h2>
                  <p className="text-gray-600 mb-6">
                    Success stories from people of different backgrounds, lifestyles, and demographics.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/case-studies/demographics/remote-worker-mental-health" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Remote Worker Mental Health</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies/demographics/therapy-for-night-owls" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Therapy for Night Owls</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies/demographics/rural-access-to-therapy" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Rural Access to Therapy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies/demographics/college-student-stress-management" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>College Student Stress Management</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/case-studies/demographics" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all demographic case studies <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Case Study Content</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              This is a placeholder for the specific case study content based on the current URL path.
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

export default CaseStudiesPage;