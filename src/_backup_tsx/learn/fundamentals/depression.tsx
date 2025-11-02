import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, AlertCircle, Star, Users, Heart, Shield } from 'lucide-react';
import Button from '../../../components/Button';

const Depression = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Understanding Depression" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Understanding Depression</h1>
              <p className="text-xl text-gray-600 mb-6">
                Depression is more than just feeling sad – it's a complex mental health condition that affects millions of people worldwide. Learn about its symptoms, causes, and treatment options.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link} 
                  to="/tools/assessments/depression-screening" 
                  variant="primary"
                  icon={Brain}
                >
                  Take Depression Assessment
                </Button>
                <Button 
                  as={Link}
                  to="/best/conditions/best-for-depression" 
                  variant="outline"
                  icon={ArrowRight}
                >
                  Find Depression Treatment
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Depression at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Prevalence</h3>
                <p className="text-gray-600">Affects 280 million people globally</p>
                <p className="text-sm text-gray-500 mt-1">WHO, 2025</p>
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
                <p className="text-gray-600">Highly treatable condition</p>
                <p className="text-sm text-gray-500 mt-1">80-90% success rate</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Impact</h3>
                <p className="text-gray-600">Leading cause of disability</p>
                <p className="text-sm text-gray-500 mt-1">Ages 15-44</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Treatment</h3>
                <p className="text-gray-600">Multiple effective options</p>
                <p className="text-sm text-gray-500 mt-1">Therapy, medication, lifestyle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Depression */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Depression</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Major Depressive Disorder (MDD)</h3>
              <p className="text-gray-600 mb-4">
                The most common form of depression, characterized by persistent feelings of sadness and loss of interest lasting at least two weeks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Persistent sad mood</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Loss of interest in activities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Changes in sleep and appetite</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Difficulty concentrating</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Persistent Depressive Disorder</h3>
              <p className="text-gray-600 mb-4">
                A chronic form of depression lasting at least two years, with symptoms that may be less severe but more enduring.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Long-term low mood</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Changes in self-esteem</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Chronic fatigue</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Feelings of hopelessness</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Seasonal Affective Disorder (SAD)</h3>
              <p className="text-gray-600 mb-4">
                Depression that occurs during specific seasons, typically winter months with less natural sunlight.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Seasonal pattern</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Changes in sleep patterns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Weight changes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Social withdrawal</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Postpartum Depression</h3>
              <p className="text-gray-600 mb-4">
                Depression that occurs after childbirth, affecting both mothers and fathers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Severe mood swings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Difficulty bonding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Overwhelming fatigue</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Anxiety about parenting</span>
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
                    Helps identify and change negative thought patterns and behaviors that contribute to depression.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Interpersonal Therapy</h4>
                  <p className="text-gray-600">
                    Focuses on improving relationships and communication patterns to reduce depressive symptoms.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Psychodynamic Therapy</h4>
                  <p className="text-gray-600">
                    Explores past experiences and unconscious processes that may contribute to depression.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Treatments</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Medication</h4>
                  <p className="text-gray-600">
                    Antidepressants and other medications can help manage symptoms when prescribed by a healthcare provider.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Lifestyle Changes</h4>
                  <p className="text-gray-600">
                    Regular exercise, improved sleep habits, and stress management techniques can help reduce depressive symptoms.
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

        {/* Warning Signs */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Warning Signs & When to Seek Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Common Warning Signs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Persistent feelings of sadness or emptiness</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Loss of interest in activities once enjoyed</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Significant changes in sleep or appetite</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Difficulty concentrating or making decisions</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Thoughts of death or suicide</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">When to Seek Help</h3>
              <div className="bg-indigo-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Consider seeking professional help if you experience:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Symptoms lasting more than two weeks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Difficulty performing daily tasks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Impact on relationships or work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Thoughts of self-harm</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button 
                    as={Link} 
                    to="/tools/matchers/therapy-platform-matcher" 
                    variant="primary"
                    size="lg"
                  >
                    Find Help Now
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">Lifestyle Changes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Maintain regular sleep schedule</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Exercise regularly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Eat balanced meals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Limit alcohol and caffeine</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Social Support</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Stay connected with friends and family</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Join support groups</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Share feelings with trusted people</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Engage in social activities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Coping Strategies</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Practice mindfulness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Keep a mood journal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Set small, achievable goals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Practice relaxation techniques</span>
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
                  <Link to="/tools/assessments/depression-screening" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Depression Screening Tool</span>
                  </Link>
                </li>
                <li>
                  <Link to="/resources/worksheets/mood-tracking" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Mood Tracking Worksheet</span>
                  </Link>
                </li>
                <li>
                  <Link to="/resources/worksheets/thought-record" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Thought Record Worksheet</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog/understanding-depression-treatment" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Understanding Depression Treatment Options</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog/depression-coping-strategies" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>10 Effective Coping Strategies for Depression</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog/supporting-loved-ones" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Supporting Loved Ones with Depression</span>
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
            Take our depression assessment to better understand your symptoms and find appropriate support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/assessments/depression-screening" 
              variant="light"
              size="lg"
            >
              Take Depression Assessment
            </Button>
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Find a Therapist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depression;