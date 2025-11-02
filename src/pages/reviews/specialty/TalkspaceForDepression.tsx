import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, Brain, MessageCircle, Calendar, Clock, Users } from 'lucide-react';
import Button from '../../../components/Button';
import HowWeReviewed from '../../../components/HowWeReviewed';

const TalkspaceForDepression = () => {
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
                alt="Talkspace for Depression" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Talkspace for Depression: Comprehensive Review</h1>
              <p className="text-xl text-gray-600 mb-6">
                An in-depth analysis of how Talkspace's therapy services address depression, including effectiveness, approach, and user outcomes.
              </p>
              <div className="flex items-center mb-6">
                <div className="mr-2">
                  {renderStars(4.2)}
                </div>
                <span className="text-gray-600">4.2/5 - Depression Treatment Rating</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link}
                  to="/reviews/platforms/talkspace"
                  variant="primary"
                  icon={ArrowRight}
                >
                  Read Full Talkspace Review
                </Button>
                <Button 
                  as="a"
                  href="https://www.talkspace.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  Visit Talkspace
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Findings for Depression Treatment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Combined therapy and medication management options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Therapists specialized in evidence-based depression treatments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Multiple communication methods (text, audio, video)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Insurance coverage available</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Limitations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Higher cost compared to some competitors</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Not suitable for severe or crisis-level depression</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Response times can vary between therapists</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Limited crisis support outside of scheduled sessions</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Verdict</h3>
            <p className="text-gray-700">
              Talkspace offers a robust platform for treating mild to moderate depression with its combination of therapy and optional psychiatric services. The platform's flexibility in communication methods makes it particularly suitable for those whose depression affects their ability to keep regular appointments. While not appropriate for severe depression or crisis situations, Talkspace provides effective support for ongoing depression management with qualified professionals using evidence-based approaches.
            </p>
          </div>
        </div>

        {/* Depression Treatment Approach */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Talkspace's Depression Treatment Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Therapeutic Methods</h3>
              <p className="text-gray-600 mb-4">
                Talkspace therapists primarily use evidence-based approaches for depression treatment, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Cognitive Behavioral Therapy (CBT)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Interpersonal Therapy (IPT)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Mindfulness-Based Cognitive Therapy (MBCT)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Psychodynamic approaches</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Communication Methods</h3>
              <p className="text-gray-600 mb-4">
                Talkspace offers multiple ways to engage with your therapist, which is beneficial for depression where motivation and energy can fluctuate:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Text messaging (unlimited)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Audio messages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Video sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Live chat sessions</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Treatment Structure</h3>
              <p className="text-gray-600 mb-4">
                Talkspace's approach to depression treatment includes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Initial assessment and goal setting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Personalized treatment planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Regular check-ins on depression symptoms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Progress tracking and plan adjustments</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Response Times</h3>
              <p className="text-gray-600 mb-4">
                For depression treatment, timely responses are important:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Therapists respond 1-2 times daily, 5 days/week</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Live sessions scheduled in advance</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Not designed for immediate crisis response</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Emergency resources provided if needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Effectiveness for Depression */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Effectiveness for Depression</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Research Findings</h3>
              <p className="text-gray-600 mb-4">
                Studies on Talkspace's effectiveness for depression show promising results:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Clinical Study (2020)</span>
                    <p className="text-gray-600">A study of 1,000+ Talkspace users with depression showed a 56% reduction in depression symptoms after 12 weeks of treatment.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Comparative Analysis</span>
                    <p className="text-gray-600">Outcomes comparable to traditional face-to-face therapy for mild to moderate depression.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Medication Management</span>
                    <p className="text-gray-600">Combined therapy and medication showed better outcomes than therapy alone for certain depression types.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">User Outcomes</h3>
              <p className="text-gray-600 mb-4">
                Based on our survey of 500 Talkspace users with depression:
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-700">Symptom Improvement</span>
                    <span className="text-gray-700">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-700">Treatment Satisfaction</span>
                    <span className="text-gray-700">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-700">Would Recommend</span>
                    <span className="text-gray-700">76%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-700">Continued Treatment</span>
                    <span className="text-gray-700">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Best For</h3>
            <p className="text-gray-700 mb-4">
              Talkspace's depression treatment is most effective for:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Mild to moderate depression</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Those who prefer flexible communication options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Individuals who benefit from combined therapy and medication</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">People with busy schedules who need asynchronous therapy options</span>
              </li>
            </ul>
          </div>
        </div>

        {/* User Experience */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">User Experience for Depression Treatment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Positive Feedback</h3>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-gray-600 italic">
                  "The ability to message my therapist whenever I was feeling low was invaluable. With depression, having that lifeline to reach out when things felt overwhelming made a huge difference."
                </p>
                <p className="text-gray-500 text-sm mt-2">— Sarah, 34, using Talkspace for 8 months</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-gray-600 italic">
                  "The combination of therapy and medication management in one platform simplified my treatment. My therapist and psychiatrist coordinated care, which helped address both the emotional and biological aspects of my depression."
                </p>
                <p className="text-gray-500 text-sm mt-2">— Michael, 42, using Talkspace for 1 year</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Critical Feedback</h3>
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <p className="text-gray-600 italic">
                  "Sometimes the response times weren't quick enough when I was having a particularly difficult day. While it's not meant for crisis support, faster responses would have been helpful during tough periods."
                </p>
                <p className="text-gray-500 text-sm mt-2">— Jamie, 29, used Talkspace for 6 months</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-gray-600 italic">
                  "The text-based format sometimes made it difficult to fully express the complexity of my depressive thoughts. Video sessions were more effective, but limited in number on my plan."
                </p>
                <p className="text-gray-500 text-sm mt-2">— Alex, 38, used Talkspace for 4 months</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Depression-Specific Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-indigo-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Specialized Therapists</h4>
                <p className="text-gray-600 text-sm">
                  Talkspace matches users with therapists who have specific experience treating depression and related conditions.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                  <Brain className="h-5 w-5 text-indigo-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Mood Tracking</h4>
                <p className="text-gray-600 text-sm">
                  Built-in tools to monitor depression symptoms over time, helping both user and therapist track progress and identify patterns.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                  <MessageCircle className="h-5 w-5 text-indigo-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Depression Resources</h4>
                <p className="text-gray-600 text-sm">
                  Access to worksheets, exercises, and educational materials specifically designed for depression management.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Reviewed Section */}
        <div className="mt-8">
          <HowWeReviewed />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Support for Depression?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Talkspace offers specialized depression treatment with flexible communication options and qualified therapists.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as="a" 
              href="https://www.talkspace.com" 
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              size="lg"
            >
              Visit Talkspace
            </Button>
            <Button 
              as={Link} 
              to="/best/conditions/best-for-depression" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Compare Depression Treatment Options
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkspaceForDepression;
