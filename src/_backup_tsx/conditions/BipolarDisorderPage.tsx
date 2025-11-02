import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Star, Users, Search } from 'lucide-react';
import Button from '../../components/Button';

const BipolarDisorderPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Bipolar Disorder" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Bipolar Disorder</h1>
              <p className="text-xl text-gray-600 mb-6">
                Bipolar disorder is a mental health condition characterized by extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link} 
                  to="/tools/assessments/mood-disorder-assessment" 
                  variant="primary"
                  icon={Brain}
                >
                  Take Mood Assessment
                </Button>
                <Button 
                  as={Link}
                  to="/best/conditions/best-for-bipolar" 
                  variant="outline"
                  icon={Star}
                >
                  Find Best Treatment Options
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Bipolar Disorder */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Bipolar Disorder</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Bipolar I Disorder</h3>
              <p className="text-gray-600 mb-4">
                Characterized by manic episodes that last at least 7 days or severe manic symptoms requiring hospitalization.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Severe manic episodes</li>
                <li>Depressive episodes</li>
                <li>Possible psychotic features</li>
                <li>Significant impact on functioning</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Bipolar II Disorder</h3>
              <p className="text-gray-600 mb-4">
                Pattern of depressive episodes and hypomanic episodes, but not full manic episodes.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Hypomanic episodes</li>
                <li>Major depressive episodes</li>
                <li>Less severe than Bipolar I</li>
                <li>Often misdiagnosed as depression</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cyclothymic Disorder</h3>
              <p className="text-gray-600 mb-4">
                Chronic, fluctuating mood disturbance with hypomanic and depressive symptoms.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Milder symptoms</li>
                <li>Chronic course</li>
                <li>Frequent mood changes</li>
                <li>Less severe than other types</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Symptoms */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Manic Episode Symptoms</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Increased Energy</h4>
                    <p className="text-gray-600">Feeling extremely energetic and active, often with reduced need for sleep</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Racing Thoughts</h4>
                    <p className="text-gray-600">Flight of ideas, talking very fast about many different things</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Risky Behavior</h4>
                    <p className="text-gray-600">Engaging in high-risk activities without considering consequences</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Depressive Episode Symptoms</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Deep Sadness</h4>
                    <p className="text-gray-600">Persistent feelings of sadness, emptiness, or hopelessness</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Loss of Interest</h4>
                    <p className="text-gray-600">Decreased interest in activities once enjoyed</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Physical Changes</h4>
                    <p className="text-gray-600">Changes in sleep, appetite, and energy levels</p>
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
              <h3 className="text-xl font-bold text-gray-800 mb-4">Medication</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Mood Stabilizers</h4>
                    <p className="text-gray-600">Help control manic and depressive episodes and prevent mood swings.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Antipsychotics</h4>
                    <p className="text-gray-600">May be prescribed to control psychotic symptoms or severe manic episodes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Antidepressants</h4>
                    <p className="text-gray-600">Sometimes used in combination with mood stabilizers to treat depressive episodes.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Psychotherapy</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Cognitive Behavioral Therapy</h4>
                    <p className="text-gray-600">Helps identify and change negative thought patterns and behaviors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Family-Focused Therapy</h4>
                    <p className="text-gray-600">Involves family members in treatment and education about the condition.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    <Brain className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Interpersonal and Social Rhythm Therapy</h4>
                    <p className="text-gray-600">Focuses on stabilizing daily routines and improving relationships.</p>
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
                Review and compare different treatment providers specializing in bipolar disorder.
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
                Discover the top-rated treatment providers for bipolar disorder.
              </p>
              <Button 
                as={Link} 
                to="/best/conditions/best-for-bipolar" 
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
                Take our mood assessment to understand your symptoms and get personalized recommendations.
              </p>
              <Button 
                as={Link} 
                to="/tools/assessments/mood-disorder-assessment" 
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
                  <Link to="/learn/fundamentals/bipolar-disorder" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Understanding Bipolar Disorder</span>
                  </Link>
                </li>
                <li>
                  <Link to="/learn/fundamentals/bipolar-medication-guide" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Guide to Bipolar Medications</span>
                  </Link>
                </li>
                <li>
                  <Link to="/learn/fundamentals/managing-bipolar-episodes" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Managing Bipolar Episodes</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Support Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/resources/worksheets/mood-tracking" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Mood Tracking Worksheet</span>
                  </Link>
                </li>
                <li>
                  <Link to="/resources/worksheets/trigger-identification" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Trigger Identification Worksheet</span>
                  </Link>
                </li>
                <li>
                  <Link to="/resources/support-groups/bipolar" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Find Bipolar Support Groups</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take Control of Your Mental Health?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect treatment provider for managing bipolar disorder.
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
              to="/tools/assessments/mood-disorder-assessment" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Take Mood Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BipolarDisorderPage;