import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain } from 'lucide-react';
import Button from '../../components/Button';
import HowWeReviewed from '../../components/HowWeReviewed';

const CBTVsPsychodynamic = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">CBT vs Psychodynamic Therapy: Which Approach Is Right for You?</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Compare two of the most widely practiced therapeutic approaches to understand their differences, benefits, and ideal applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <h2 className="text-xl font-bold text-gray-800 mr-3">Cognitive Behavioral Therapy (CBT)</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  A structured, goal-oriented approach focused on identifying and changing negative thought patterns and behaviors.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <h2 className="text-xl font-bold text-gray-800 mr-3">Psychodynamic Therapy</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  An insight-oriented approach that explores unconscious processes and past experiences to understand present behaviors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Feature</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">CBT</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Psychodynamic</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Focus</td>
                  <td className="py-3 px-4 text-center">Present thoughts and behaviors</td>
                  <td className="py-3 px-4 text-center">Past experiences and unconscious processes</td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Duration</td>
                  <td className="py-3 px-4 text-center">Short-term (12-20 sessions)</td>
                  <td className="py-3 px-4 text-center">Longer-term (months to years)</td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Structure</td>
                  <td className="py-3 px-4 text-center">Highly structured with specific goals</td>
                  <td className="py-3 px-4 text-center">Less structured, open-ended exploration</td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Homework</td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Therapist Role</td>
                  <td className="py-3 px-4 text-center">Active, directive, collaborative</td>
                  <td className="py-3 px-4 text-center">Reflective, interpretive, less directive</td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Research Support</td>
                  <td className="py-3 px-4 text-center">Extensive empirical evidence</td>
                  <td className="py-3 px-4 text-center">Moderate empirical evidence</td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Best For</td>
                  <td className="py-3 px-4 text-center">Anxiety, depression, PTSD, specific phobias</td>
                  <td className="py-3 px-4 text-center">Complex issues, relationship patterns, personality concerns</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
          
          {/* Core Principles */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Core Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Cognitive Behavioral Therapy (CBT)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Based on the cognitive model: thoughts influence emotions and behaviors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Focuses on identifying and challenging cognitive distortions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Emphasizes learning new skills and behavioral changes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Goal-oriented with measurable outcomes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Psychodynamic Therapy</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Rooted in psychoanalytic theory: unconscious processes influence behavior</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Explores early life experiences and their impact on present functioning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Examines defense mechanisms and relationship patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Emphasizes insight and self-understanding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Therapeutic Process */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Therapeutic Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Cognitive Behavioral Therapy (CBT)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Structured sessions with clear agendas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Regular homework assignments between sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Use of worksheets, thought records, and behavioral experiments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Active collaboration between therapist and client</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Regular progress monitoring and goal assessment</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Psychodynamic Therapy</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Less structured, more open-ended sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Free association and exploration of thoughts and feelings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Analysis of transference (feelings toward therapist)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Interpretation of dreams and unconscious material</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Gradual development of insight over time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Effectiveness for Different Conditions */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Effectiveness for Different Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Cognitive Behavioral Therapy (CBT)</h4>
                <p className="text-gray-600 mb-4">Strong evidence for effectiveness with:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Anxiety disorders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Depression</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Post-traumatic stress disorder (PTSD)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Obsessive-compulsive disorder (OCD)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Specific phobias</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Eating disorders</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Psychodynamic Therapy</h4>
                <p className="text-gray-600 mb-4">Evidence for effectiveness with:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Depression (especially with interpersonal factors)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Anxiety with complex origins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Personality disorders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Relationship difficulties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Chronic emotional issues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Trauma with deep-rooted impacts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Pros and Cons */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pros and Cons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Cognitive Behavioral Therapy (CBT)</h4>
                <div className="mb-4">
                  <h5 className="font-bold text-gray-800 mb-2">Pros:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Time-limited with faster results</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Strong empirical support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Practical skills that can be used long-term</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Adaptable to online therapy formats</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Cons:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>May not address deeper emotional issues</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Less focus on past experiences</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Requires active participation and homework</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>May feel too structured for some clients</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Psychodynamic Therapy</h4>
                <div className="mb-4">
                  <h5 className="font-bold text-gray-800 mb-2">Pros:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Addresses root causes of issues</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Explores complex relationship patterns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Benefits may continue after therapy ends</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Deeper self-understanding and insight</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Cons:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Longer duration and higher cost</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Less empirical research support</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Progress may be slower and less measurable</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>May be less structured than some clients prefer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Final Verdict */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Which Approach Is Right for You?</h3>
            <p className="text-gray-700 mb-4">
              Consider <strong>Cognitive Behavioral Therapy (CBT)</strong> if:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You prefer a structured, goal-oriented approach</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You're dealing with specific symptoms like anxiety, phobias, or OCD</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You want to learn practical skills and techniques</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You have limited time or budget for therapy</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Consider <strong>Psychodynamic Therapy</strong> if:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You want to explore deeper patterns and unconscious processes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You're dealing with complex relationship issues or personality concerns</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You value self-discovery and insight</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>You're open to a longer-term therapeutic process</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-gray-700">
                <strong>Note:</strong> Many modern therapists use an integrative approach that combines elements of both CBT and psychodynamic therapy, tailored to each client's unique needs. The best approach is often one that feels right for you and addresses your specific concerns.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Find the Right Therapeutic Approach for You?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to discover which therapy style might be the best fit for your unique needs and preferences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/assessments/therapy-style-assessment" 
              variant="light"
              size="lg"
            >
              Take Therapy Style Assessment
            </Button>
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Find Your Perfect Platform
            </Button>
          </div>
        </div>

        {/* Related Comparisons */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/compare/modalities/online-vs-traditional-therapy" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Online vs Traditional Therapy</h3>
              <p className="text-gray-600 text-sm">Compare the benefits and limitations of virtual and in-person therapy.</p>
            </Link>
            <Link to="/compare/modalities/individual-vs-group-therapy" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Individual vs Group Therapy</h3>
              <p className="text-gray-600 text-sm">Explore the differences between one-on-one and group therapeutic settings.</p>
            </Link>
            <Link to="/compare/modalities/text-vs-video-therapy" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Text vs Video Therapy</h3>
              <p className="text-gray-600 text-sm">Compare different communication methods in online therapy.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CBTVsPsychodynamic;
