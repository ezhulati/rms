import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain, Search, Pill } from 'lucide-react';
import Button from '../../components/Button';

const SocialAnxietyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Social Anxiety Disorder</h1>
              <p className="text-xl text-gray-600 mb-6">
                Understanding, managing, and treating social anxiety disorder for a better quality of life.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 mb-6">
                <h2 className="font-bold text-gray-800 mb-2">Quick Facts</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span>Affects approximately 7% of the U.S. population</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span>Typically begins in adolescence (around age 13)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span>Highly treatable with therapy and/or medication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span>Often co-occurs with other anxiety disorders or depression</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link} 
                  to="/tools/assessments/anxiety-screening" 
                  variant="primary" 
                  size="lg" 
                >
                  Take Anxiety Assessment
                </Button>
                <Button 
                  as={Link} 
                  to="/tools/matchers/therapy-platform-matcher" 
                  variant="outline" 
                  size="lg" 
                >
                  Find Treatment Options
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Person experiencing social anxiety" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* What is Social Anxiety */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What is Social Anxiety Disorder?</h2>
          <p className="text-gray-600 mb-4">
            Social anxiety disorder (also called social phobia) is a mental health condition characterized by an intense, persistent fear of being watched and judged by others. This fear can affect work, school, and other daily activities. It can even make it hard to make and keep friends.
          </p>
          <p className="text-gray-600 mb-4">
            Social anxiety disorder is more than just shyness. It involves overwhelming worry and self-consciousness about everyday social situations. The fear that people with social anxiety experience can be so severe that it feels beyond their control, leading them to avoid social situations altogether.
          </p>
          <p className="text-gray-600">
            While it's normal to feel nervous in some social situations, social anxiety disorder involves fear that is out of proportion to the situation, disrupts daily life, and causes significant distress.
          </p>
        </div>

        {/* Symptoms */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Signs and Symptoms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Emotional and Cognitive Symptoms</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span className="text-gray-600">Intense fear of situations where you might be judged</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span className="text-gray-600">Worry about embarrassing or humiliating yourself</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span className="text-gray-600">Fear of interacting with unfamiliar people</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span className="text-gray-600">Anxiety about being perceived as anxious, weak, or stupid</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span className="text-gray-600">Excessive worry before social events</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span className="text-gray-600">Overthinking your actions in social situations</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Physical Symptoms</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span className="text-gray-600">Blushing or reddening of the face</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span className="text-gray-600">Rapid heartbeat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span className="text-gray-600">Trembling or shaking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span className="text-gray-600">Sweating</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span className="text-gray-600">Upset stomach or nausea</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <span className="text-gray-600">Difficulty speaking or a "blank mind"</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Common Triggering Situations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Social Interactions</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Meeting new people</li>
                  <li>• Dating scenarios</li>
                  <li>• Making small talk</li>
                  <li>• Attending parties</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Performance Situations</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Public speaking</li>
                  <li>• Giving presentations</li>
                  <li>• Performing on stage</li>
                  <li>• Job interviews</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Everyday Activities</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Eating in public</li>
                  <li>• Using public restrooms</li>
                  <li>• Making phone calls</li>
                  <li>• Being observed while working</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Causes and Risk Factors */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Causes and Risk Factors</h2>
          
          <p className="text-gray-600 mb-6">
            Like many mental health conditions, social anxiety disorder likely arises from a complex interaction of biological and environmental factors. Some potential causes and risk factors include:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Biological Factors</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Genetics</span>
                    <p className="text-gray-600">Social anxiety disorder can run in families, suggesting a genetic component.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Brain Structure</span>
                    <p className="text-gray-600">An overactive amygdala (the brain's fear center) may play a role in social anxiety.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Temperament</span>
                    <p className="text-gray-600">Children who are shy, timid, or withdrawn may be more prone to developing social anxiety.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Environmental Factors</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Negative Experiences</span>
                    <p className="text-gray-600">Embarrassing or humiliating social experiences, particularly during childhood or adolescence.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Parenting Styles</span>
                    <p className="text-gray-600">Overprotective or controlling parenting may contribute to social anxiety in some individuals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Bullying or Rejection</span>
                    <p className="text-gray-600">Being bullied, teased, or socially excluded, especially during formative years.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Treatment Options */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Treatment Options</h2>
          
          <p className="text-gray-600 mb-6">
            Social anxiety disorder is highly treatable, and many people experience significant improvement with appropriate treatment. The most common treatment approaches include:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Cognitive Behavioral Therapy (CBT)</h3>
              <p className="text-gray-600 mb-4">
                CBT is considered the gold standard for treating social anxiety. It helps you identify and challenge negative thought patterns and gradually face feared social situations.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Cognitive restructuring</li>
                <li>• Exposure therapy</li>
                <li>• Social skills training</li>
                <li>• Role-playing exercises</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Pill className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Medication</h3>
              <p className="text-gray-600 mb-4">
                Several types of medications have proven effective for treating social anxiety disorder, often used in combination with therapy.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• SSRIs (e.g., sertraline, paroxetine)</li>
                <li>• SNRIs (e.g., venlafaxine)</li>
                <li>• Beta-blockers (for performance anxiety)</li>
                <li>• Benzodiazepines (short-term use)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Support Strategies</h3>
              <p className="text-gray-600 mb-4">
                Complementary approaches that can help manage social anxiety alongside professional treatment.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Mindfulness and meditation</li>
                <li>• Relaxation techniques</li>
                <li>• Support groups</li>
                <li>• Lifestyle changes (sleep, exercise, reducing caffeine)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Online Therapy for Social Anxiety</h3>
            <p className="text-gray-600 mb-4">
              Online therapy platforms can be particularly beneficial for people with social anxiety, as they allow you to access treatment from the comfort of your home. Many platforms offer specialized CBT for social anxiety and connect you with therapists experienced in treating this condition.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">BetterHelp</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Large network of therapists with experience in anxiety disorders, including social anxiety.
                </p>
                <Link to="/reviews/platforms/betterhelp" className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center">
                  Read review <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Talkspace</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Offers therapy and psychiatric services for social anxiety, with insurance coverage options.
                </p>
                <Link to="/reviews/platforms/talkspace" className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center">
                  Read review <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Online-Therapy.com</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Specialized in CBT with structured program specifically for anxiety disorders.
                </p>
                <Link to="/reviews/platforms/online-therapy" className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center">
                  Read review <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Living With Social Anxiety */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Living With Social Anxiety</h2>
          
          <p className="text-gray-600 mb-6">
            In addition to professional treatment, there are many strategies that can help you manage social anxiety in your daily life:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Self-Help Strategies</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Practice mindfulness</span>
                    <p className="text-gray-600">Stay present in the moment rather than worrying about what others might think.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Challenge negative thoughts</span>
                    <p className="text-gray-600">Question and reframe unhelpful thinking patterns about social situations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Set small, achievable goals</span>
                    <p className="text-gray-600">Gradually expose yourself to feared social situations, starting with less challenging ones.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Practice relaxation techniques</span>
                    <p className="text-gray-600">Deep breathing, progressive muscle relaxation, and visualization can help manage anxiety symptoms.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Building Support</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Educate friends and family</span>
                    <p className="text-gray-600">Help loved ones understand social anxiety so they can provide appropriate support.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Join a support group</span>
                    <p className="text-gray-600">Connect with others who understand what you're going through.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Practice social skills</span>
                    <p className="text-gray-600">Consider joining groups or classes focused on building social confidence.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Be kind to yourself</span>
                    <p className="text-gray-600">Practice self-compassion and recognize that recovery is a process with ups and downs.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Books</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-bold text-gray-800">The Shyness and Social Anxiety Workbook</p>
                  <p className="text-gray-600 text-sm">By Martin M. Antony and Richard P. Swinson</p>
                </li>
                <li>
                  <p className="font-bold text-gray-800">Overcoming Social Anxiety and Shyness</p>
                  <p className="text-gray-600 text-sm">By Gillian Butler</p>
                </li>
                <li>
                  <p className="font-bold text-gray-800">How to Be Yourself</p>
                  <p className="text-gray-600 text-sm">By Ellen Hendriksen</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Organizations</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-bold text-gray-800">Anxiety and Depression Association of America (ADAA)</p>
                  <a href="https://adaa.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center">
                    adaa.org <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <p className="font-bold text-gray-800">National Social Anxiety Center</p>
                  <a href="https://nationalsocialanxietycenter.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center">
                    nationalsocialanxietycenter.com <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <p className="font-bold text-gray-800">Social Anxiety Support</p>
                  <a href="https://www.socialanxietysupport.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center">
                    socialanxietysupport.com <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Apps</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-bold text-gray-800">Headspace</p>
                  <p className="text-gray-600 text-sm">Guided meditation and mindfulness exercises</p>
                </li>
                <li>
                  <p className="font-bold text-gray-800">Woebot</p>
                  <p className="text-gray-600 text-sm">AI-based CBT chatbot for anxiety</p>
                </li>
                <li>
                  <p className="font-bold text-gray-800">CBT Thought Diary</p>
                  <p className="text-gray-600 text-sm">Tool for tracking and challenging anxious thoughts</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Help for Social Anxiety</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the right online therapy platform for treating social anxiety.
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

export default SocialAnxietyPage;
