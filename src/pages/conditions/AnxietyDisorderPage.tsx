import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, CheckCircle, Info, Users, Star, Search } from 'lucide-react';
import Button from '../../components/Button';

const AnxietyDisorderPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Anxiety Disorders" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Anxiety Disorders</h1>
              <p className="text-xl text-gray-600 mb-6">
                Anxiety disorders are a group of mental health conditions characterized by persistent and excessive worry or fear that interferes with daily activities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link} 
                  to="/tools/assessments/anxiety-screening" 
                  variant="primary"
                >
                  Take Anxiety Assessment
                </Button>
                <Button 
                  as={Link} 
                  to="/best/conditions/best-for-anxiety" 
                  variant="outline"
                >
                  Find Anxiety Treatment
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Facts About Anxiety Disorders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Prevalence</h3>
                <p className="text-gray-600">Affects approximately 19% of adults and 7% of children annually</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Treatability</h3>
                <p className="text-gray-600">Highly treatable with therapy, medication, or a combination of both</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <Star className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Recovery Rate</h3>
                <p className="text-gray-600">80% of people show improvement with proper treatment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Anxiety Disorders */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Anxiety Disorders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Generalized Anxiety Disorder (GAD)</h3>
              <p className="text-gray-600 mb-4">
                Persistent and excessive worry about various aspects of life, often without a specific trigger.
              </p>
              <h4 className="font-bold text-gray-800 mb-2">Common Symptoms:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Persistent worrying about everyday concerns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Difficulty controlling worry</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Restlessness or feeling on edge</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Social Anxiety Disorder</h3>
              <p className="text-gray-600 mb-4">
                Intense fear of social situations and being judged by others.
              </p>
              <h4 className="font-bold text-gray-800 mb-2">Common Symptoms:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Fear of social situations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Avoidance of social interactions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Physical symptoms in social settings</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Panic Disorder</h3>
              <p className="text-gray-600 mb-4">
                Recurring unexpected panic attacks and fear of future attacks.
              </p>
              <h4 className="font-bold text-gray-800 mb-2">Common Symptoms:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Sudden intense fear or discomfort</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Heart palpitations, sweating</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Fear of losing control</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Specific Phobias</h3>
              <p className="text-gray-600 mb-4">
                Intense fear of specific objects, situations, or activities.
              </p>
              <h4 className="font-bold text-gray-800 mb-2">Common Symptoms:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Immediate anxiety response to trigger</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Avoidance of feared object/situation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Recognition that fear is excessive</span>
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
              <h3 className="text-xl font-bold text-gray-800 mb-4">Therapy Approaches</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Cognitive Behavioral Therapy (CBT)</h4>
                  <p className="text-gray-600">
                    The most effective therapy for anxiety disorders, helping identify and change thought patterns and behaviors.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Exposure Therapy</h4>
                  <p className="text-gray-600">
                    Gradually facing feared situations in a controlled environment to reduce anxiety.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Mindfulness-Based Approaches</h4>
                  <p className="text-gray-600">
                    Learning to stay present and manage anxiety through meditation and mindfulness techniques.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Treatment Options</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Medication</h4>
                  <p className="text-gray-600">
                    Anti-anxiety medications, antidepressants, and other medications can help manage symptoms when prescribed by a healthcare provider.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Lifestyle Changes</h4>
                  <p className="text-gray-600">
                    Regular exercise, stress management techniques, and maintaining a healthy sleep schedule can help reduce anxiety.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Support Groups</h4>
                  <p className="text-gray-600">
                    Connecting with others who have similar experiences can provide valuable support and coping strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* When to Seek Help */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">When to Seek Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Warning Signs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Anxiety interferes with daily activities or relationships</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Physical symptoms like rapid heartbeat, sweating, or trembling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Avoiding situations due to anxiety or fear</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Difficulty sleeping or concentrating</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Persistent worry that's hard to control</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Getting Help</h3>
              <div className="bg-indigo-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  If you're experiencing symptoms of anxiety, there are several ways to get help:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Talk to your primary care physician</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Seek a mental health professional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Try online therapy platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Join support groups</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button 
                    as={Link} 
                    to="/tools/matchers/therapy-platform-matcher" 
                    variant="primary"
                    size="lg"
                  >
                    Find the Right Help
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Self-Help Strategies */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Self-Help Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mindfulness & Relaxation</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Deep breathing exercises</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Progressive muscle relaxation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Meditation practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Grounding techniques</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Lifestyle Changes</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Regular exercise routine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Healthy sleep habits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Balanced nutrition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Limit caffeine and alcohol</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Coping Strategies</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Journaling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Time management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Setting boundaries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Building support network</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Helpful Tools</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/tools/assessments/anxiety-screening" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Anxiety Screening Tool</span>
                  </Link>
                </li>
                <li>
                  <Link to="/resources/worksheets/anxiety-thought-record" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Anxiety Thought Record Worksheet</span>
                  </Link>
                </li>
                <li>
                  <Link to="/resources/worksheets/relaxation-techniques" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Relaxation Techniques Guide</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog/understanding-anxiety" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Understanding Anxiety: A Comprehensive Guide</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog/anxiety-management-techniques" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>10 Proven Anxiety Management Techniques</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog/anxiety-myths-facts" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Common Myths About Anxiety Disorders</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take the First Step?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Find the right support for your anxiety with our personalized matching tool.
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
              to="/tools/assessments/anxiety-screening" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Take Anxiety Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnxietyDisorderPage;