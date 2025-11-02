import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Star, Users, Search } from 'lucide-react';
import Button from '../../components/Button';

const PTSDPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="PTSD" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Post-Traumatic Stress Disorder (PTSD)</h1>
              <p className="text-xl text-gray-600 mb-6">
                PTSD is a mental health condition triggered by experiencing or witnessing a terrifying event. Symptoms can include flashbacks, nightmares, severe anxiety, and uncontrollable thoughts about the event.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link} 
                  to="/tools/assessments/ptsd-assessment" 
                  variant="primary"
                  icon={Brain}
                >
                  Take PTSD Assessment
                </Button>
                <Button 
                  as={Link}
                  to="/best/conditions/best-for-ptsd" 
                  variant="outline"
                  icon={Star}
                >
                  Find Best Treatment Options
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Types of PTSD */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of PTSD</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Acute PTSD</h3>
              <p className="text-gray-600 mb-4">
                Symptoms lasting less than three months after trauma exposure.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Recent trauma</li>
                <li>Immediate symptoms</li>
                <li>Short-term impact</li>
                <li>Good treatment prognosis</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Chronic PTSD</h3>
              <p className="text-gray-600 mb-4">
                Symptoms lasting more than three months after trauma exposure.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Long-term symptoms</li>
                <li>Complex treatment needs</li>
                <li>Significant life impact</li>
                <li>May require ongoing support</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Complex PTSD</h3>
              <p className="text-gray-600 mb-4">
                Develops from prolonged, repeated trauma exposure.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Multiple traumas</li>
                <li>Relationship difficulties</li>
                <li>Identity issues</li>
                <li>Emotional regulation problems</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Delayed-Onset PTSD</h3>
              <p className="text-gray-600 mb-4">
                Symptoms begin more than six months after trauma exposure.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Delayed symptoms</li>
                <li>Later recognition</li>
                <li>Triggered by life events</li>
                <li>May be harder to identify</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Symptoms */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Symptoms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Re-experiencing Symptoms</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Flashbacks</h4>
                    <p className="text-gray-600">Reliving the trauma as if it were happening again</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Nightmares</h4>
                    <p className="text-gray-600">Disturbing dreams about the traumatic event</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Intrusive Thoughts</h4>
                    <p className="text-gray-600">Unwanted memories of the trauma</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Avoidance & Arousal Symptoms</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Avoiding Triggers</h4>
                    <p className="text-gray-600">Staying away from places, events, or objects that remind of the trauma</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Hypervigilance</h4>
                    <p className="text-gray-600">Being easily startled and feeling tense or on edge</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Sleep Problems</h4>
                    <p className="text-gray-600">Difficulty falling or staying asleep</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Treatment Options */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Treatment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Evidence-Based Therapies</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">EMDR Therapy</h4>
                    <p className="text-gray-600">Eye Movement Desensitization and Reprocessing helps process traumatic memories.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Cognitive Processing Therapy</h4>
                    <p className="text-gray-600">Helps change unhelpful beliefs and thoughts related to the trauma.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Prolonged Exposure Therapy</h4>
                    <p className="text-gray-600">Gradually and safely faces trauma-related memories and situations.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Treatments</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Medication</h4>
                    <p className="text-gray-600">Antidepressants and anti-anxiety medications can help manage symptoms.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Stress Management</h4>
                    <p className="text-gray-600">Techniques like mindfulness, meditation, and relaxation exercises.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Users className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Support Groups</h4>
                    <p className="text-gray-600">Connecting with others who have similar experiences.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Finding Help */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Finding the Right Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Compare Options</h3>
              <p className="text-gray-600 mb-4">
                Review and compare different treatment providers specializing in trauma therapy.
              </p>
              <Button 
                as={Link} 
                to="/compare" 
                variant="outline" 
                size="sm"
              >
                Compare providers
              </Button>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Best Options</h3>
              <p className="text-gray-600 mb-4">
                Discover the top-rated treatment providers for PTSD and trauma.
              </p>
              <Button 
                as={Link} 
                to="/best/conditions/best-for-ptsd" 
                variant="outline" 
                size="sm"
              >
                View best options
              </Button>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Get Assessed</h3>
              <p className="text-gray-600 mb-4">
                Take our PTSD assessment to understand your symptoms and get personalized recommendations.
              </p>
              <Button 
                as={Link} 
                to="/tools/assessments/ptsd-assessment" 
                variant="outline" 
                size="sm"
              >
                Take assessment
              </Button>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Educational Materials</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/learn/fundamentals/ptsd" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Understanding PTSD</span>
                  </Link>
                </li>
                <li>
                  <Link to="/learn/fundamentals/trauma-recovery" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Guide to Trauma Recovery</span>
                  </Link>
                </li>
                <li>
                  <Link to="/learn/fundamentals/ptsd-treatment-options" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>PTSD Treatment Options</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Support Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/resources/worksheets/trauma-processing" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Trauma Processing Worksheet</span>
                  </Link>
                </li>
                <li>
                  <Link to="/resources/worksheets/grounding-techniques" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Grounding Techniques Guide</span>
                  </Link>
                </li>
                <li>
                  <Link to="/resources/support-groups/ptsd" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Find PTSD Support Groups</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Recovery Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect treatment provider for managing PTSD and trauma.
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
              to="/tools/assessments/ptsd-assessment" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Take PTSD Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PTSDPage;