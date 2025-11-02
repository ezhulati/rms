import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain, Search, Smartphone, Download } from 'lucide-react';
import Button from '../../components/Button';
import HowWeReviewed from '../../components/HowWeReviewed';

const BestTherapyAppsCompared = () => {
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

  // App data
  const apps = [
    {
      name: 'BetterHelp',
      category: 'Full-Service Therapy',
      platforms: 'iOS, Android, Web',
      rating: 4.5,
      price: '$60-$90/week',
      description: 'The largest online therapy platform with a comprehensive mobile app for messaging, scheduling, and attending therapy sessions.',
      pros: [
        'Full therapy services in one app',
        'Message therapist anytime',
        'Schedule and attend video sessions',
        'Journal feature included'
      ],
      cons: [
        'Higher price point',
        'Requires subscription',
        'Limited free features',
        'Some users report app stability issues'
      ],
      features: [
        'Licensed therapists',
        'Video sessions',
        'Messaging',
        'Worksheets'
      ],
      bestFor: 'Those seeking comprehensive therapy services in a mobile-friendly format'
    },
    {
      name: 'Talkspace',
      category: 'Full-Service Therapy',
      platforms: 'iOS, Android, Web',
      rating: 4.3,
      price: '$65-$99/week',
      description: 'Professional therapy and psychiatry services through a polished mobile app with multiple communication options.',
      pros: [
        'Clean, intuitive interface',
        'Multiple therapy plans',
        'Medication management available',
        'Insurance coverage options'
      ],
      cons: [
        'Expensive without insurance',
        'Limited free content',
        'Some users report notification issues',
        'Video quality complaints'
      ],
      features: [
        'Licensed therapists',
        'Psychiatry services',
        'Text, audio, video',
        'Progress tracking'
      ],
      bestFor: 'Users seeking therapy and medication management in one app'
    },
    {
      name: 'Calm',
      category: 'Meditation & Sleep',
      platforms: 'iOS, Android, Web',
      rating: 4.8,
      price: 'Free with premium ($69.99/year)',
      description: 'Award-winning app for meditation, sleep stories, and relaxation exercises to reduce stress and improve mental wellbeing.',
      pros: [
        'High-quality guided meditations',
        'Celebrity narrated sleep stories',
        'Beautiful interface and sounds',
        'Regular new content'
      ],
      cons: [
        'Limited free content',
        'Not a replacement for therapy',
        'Premium subscription required for most content',
        'No direct professional support'
      ],
      features: [
        'Guided meditations',
        'Sleep stories',
        'Breathing exercises',
        'Music & soundscapes'
      ],
      bestFor: 'Stress reduction, sleep improvement, and mindfulness practice'
    },
    {
      name: 'Headspace',
      category: 'Meditation & Mindfulness',
      platforms: 'iOS, Android, Web',
      rating: 4.7,
      price: 'Free with premium ($69.99/year)',
      description: 'Science-backed meditation and mindfulness app with structured courses and exercises for stress, focus, and sleep.',
      pros: [
        'Structured meditation courses',
        'Engaging animations and design',
        'Science-backed approach',
        'Good for beginners'
      ],
      cons: [
        'Limited free content',
        'Not a replacement for therapy',
        'Annual subscription cost',
        'Some find the style too structured'
      ],
      features: [
        'Guided meditations',
        'Sleep content',
        'Focus exercises',
        'Stress management'
      ],
      bestFor: 'Beginners to meditation seeking structured guidance and variety'
    },
    {
      name: 'Woebot',
      category: 'AI Therapy Assistant',
      platforms: 'iOS, Android',
      rating: 4.6,
      price: 'Free',
      description: 'AI-powered chatbot that uses cognitive-behavioral therapy (CBT) principles to help users manage mental health.',
      pros: [
        'Completely free',
        'Available 24/7',
        'Evidence-based CBT techniques',
        'No appointment needed'
      ],
      cons: [
        'Not a replacement for human therapy',
        'Limited to text interactions',
        'May feel impersonal for some',
        'Cannot handle crisis situations'
      ],
      features: [
        'CBT exercises',
        'Mood tracking',
        'Daily check-ins',
        'Educational content'
      ],
      bestFor: 'Daily mental health support and CBT skill-building between therapy sessions'
    },
    {
      name: 'Wysa',
      category: 'AI Therapy Assistant',
      platforms: 'iOS, Android',
      rating: 4.5,
      price: 'Free with premium ($99/year)',
      description: 'AI chatbot and wellness app that combines CBT, DBT, meditation, and coaching to support mental health.',
      pros: [
        'Extensive free features',
        'Privacy-focused',
        'Multiple therapeutic approaches',
        'Option for human coaching'
      ],
      cons: [
        'AI limitations in complex situations',
        'Premium features require subscription',
        'Not a replacement for therapy',
        'Some repetitive responses'
      ],
      features: [
        'AI chat support',
        'Guided exercises',
        'Sleep stories',
        'Optional coaching'
      ],
      bestFor: 'Accessible mental health support with both AI and optional human coaching'
    }
  ];

  // App categories
  const categories = [
    {
      name: 'Full-Service Therapy Apps',
      description: 'Apps that connect you with licensed therapists for professional mental health treatment through text, audio, and video.',
      examples: ['BetterHelp', 'Talkspace', 'Cerebral', 'Calmerry']
    },
    {
      name: 'Meditation & Mindfulness Apps',
      description: 'Apps focused on guided meditation, mindfulness exercises, and relaxation techniques to reduce stress and anxiety.',
      examples: ['Calm', 'Headspace', 'Insight Timer', 'Ten Percent Happier']
    },
    {
      name: 'AI Therapy Assistants',
      description: 'Apps using artificial intelligence to provide CBT-based conversations, exercises, and mental health support.',
      examples: ['Woebot', 'Wysa', 'Youper', 'Replika']
    },
    {
      name: 'Mood & Habit Trackers',
      description: 'Apps for tracking moods, habits, and symptoms to identify patterns and improve mental health management.',
      examples: ['Daylio', 'MoodMission', 'Moodfit', 'Sanvello']
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Mental Health Apps Compared (2025)</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive comparison of the top mental health and therapy apps to help you find the right digital support for your wellbeing.
          </p>
          <div className="flex justify-center">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="primary" 
              size="lg" 
              icon={Search}
            >
              Find your perfect mental health app
            </Button>
          </div>
        </div>

        {/* App Categories */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Mental Health Apps</h2>
          <p className="text-gray-600 mb-8">
            Mental health apps fall into several categories, each serving different needs and offering unique features. Understanding these categories can help you choose the right app for your specific situation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(category => (
              <div key={category.name} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="bg-white rounded-lg p-3">
                  <h4 className="font-medium text-gray-800 mb-1">Popular Examples:</h4>
                  <p className="text-gray-600 text-sm">
                    {category.examples.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">At-a-Glance Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">App</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Category</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Price</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Platforms</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Professional Support</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Rating</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {apps.map(app => (
                  <tr key={app.name} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{app.name}</td>
                    <td className="py-3 px-4 text-center">{app.category}</td>
                    <td className="py-3 px-4 text-center">{app.price}</td>
                    <td className="py-3 px-4 text-center">{app.platforms}</td>
                    <td className="py-3 px-4 text-center">
                      {app.category === 'Full-Service Therapy' ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">
                        {renderStars(app.rating)}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{app.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed App Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed App Reviews</h2>
          
          {apps.map((app, index) => (
            <div key={app.name} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-6 md:mb-0">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl font-bold text-indigo-600 mr-3">{index + 1}</span>
                      <h3 className="text-2xl font-bold text-gray-800">{app.name}</h3>
                    </div>
                    <div className="bg-indigo-50 rounded-lg px-3 py-1 inline-block mb-3">
                      <span className="text-indigo-700 font-medium">{app.category}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="mr-2">
                        {renderStars(app.rating)}
                      </div>
                      <span className="text-gray-600">{app.rating}/5</span>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                        <span className="text-gray-600">{app.price}</span>
                      </div>
                      <div className="flex items-center">
                        <Smartphone className="h-5 w-5 text-indigo-600 mr-2" />
                        <span className="text-gray-600">{app.platforms}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button 
                        as="a"
                        href={`https://www.${app.name.toLowerCase()}.com`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        variant="primary"
                        size="sm"
                        icon={Download}
                        className="w-full justify-center"
                      >
                        Download App
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 md:pl-8">
                    <p className="text-gray-600 mb-6">
                      {app.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-3">Pros</h5>
                        <ul className="space-y-2">
                          {app.pros.map((pro, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold text-gray-800 mb-3">Cons</h5>
                        <ul className="space-y-2">
                          {app.cons.map((con, i) => (
                            <li key={i} className="flex items-start">
                              <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-gray-800 mb-3">Key Features</h5>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {app.features.map((feature, i) => (
                          <div key={i} className="bg-gray-50 rounded-lg p-3 flex items-center">
                            <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-indigo-50 rounded-lg p-4">
                      <h5 className="font-bold text-gray-800 mb-2">Best For</h5>
                      <p className="text-gray-700">{app.bestFor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Choose */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Mental Health App</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Consider Your Needs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Professional Support vs. Self-Help</span>
                    <p className="text-gray-600">Do you need professional therapy or are you looking for self-guided tools?</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Specific Mental Health Concerns</span>
                    <p className="text-gray-600">Are you addressing anxiety, depression, stress, sleep issues, or something else?</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Budget Considerations</span>
                    <p className="text-gray-600">What can you afford to spend on a mental health app?</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Time Commitment</span>
                    <p className="text-gray-600">How much time can you dedicate to using the app regularly?</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Important Features to Look For</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Evidence-Based Approaches</span>
                    <p className="text-gray-600">Apps using scientifically-validated methods like CBT, mindfulness, or other established therapeutic techniques.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Privacy and Security</span>
                    <p className="text-gray-600">Strong privacy policies, data encryption, and HIPAA compliance for therapy apps.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Ease of Use</span>
                    <p className="text-gray-600">Intuitive interface that you'll actually enjoy using regularly.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Professional Credentials</span>
                    <p className="text-gray-600">For therapy apps, check that providers are licensed mental health professionals.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Important Note About Mental Health Apps</h3>
            <p className="text-gray-700 mb-4">
              While mental health apps can be valuable tools for support and skill-building, they are not always a replacement for professional mental health treatment, especially for severe conditions. Consider these guidelines:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Self-help apps</strong> (meditation, mood tracking) work best as supplements to professional care or for mild symptoms</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Therapy apps</strong> with licensed professionals can provide legitimate treatment but may not be suitable for all conditions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>AI assistants</strong> can offer support and techniques but lack the judgment and expertise of human professionals</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Specialized App Recommendations */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Specialized App Recommendations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">For Anxiety</h3>
              <p className="text-gray-600 mb-4">
                Apps with breathing exercises, guided meditations, and CBT techniques specifically for anxiety management.
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• Headspace</li>
                <li>• Calm</li>
                <li>• MindShift CBT</li>
                <li>• Rootd</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">For Depression</h3>
              <p className="text-gray-600 mb-4">
                Apps with mood tracking, activity scheduling, and evidence-based techniques for managing depression.
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• Woebot</li>
                <li>• MoodMission</li>
                <li>• Wysa</li>
                <li>• Sanvello</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Free Options</h3>
              <p className="text-gray-600 mb-4">
                Quality mental health apps that offer substantial features without a subscription.
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• Woebot (AI therapy)</li>
                <li>• Insight Timer (meditation)</li>
                <li>• Wysa (free tier)</li>
                <li>• MindDoc (mood tracking)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Are mental health apps effective?</h3>
              <p className="text-gray-600">
                Research shows that mental health apps can be effective, particularly those based on evidence-based approaches like CBT and mindfulness. Apps offering professional therapy services (like BetterHelp and Talkspace) can provide similar benefits to traditional therapy for many conditions. Self-help apps are most effective for mild to moderate symptoms and as supplements to professional care.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Are therapy apps covered by insurance?</h3>
              <p className="text-gray-600">
                Some therapy apps like Talkspace work with certain insurance providers. BetterHelp generally doesn't accept insurance directly but may provide receipts for reimbursement. Check with your specific insurance provider about coverage for telehealth and digital mental health services.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How private are mental health apps?</h3>
              <p className="text-gray-600">
                Privacy varies significantly between apps. Therapy apps like BetterHelp and Talkspace are typically HIPAA-compliant and offer end-to-end encryption. Self-help apps may have different privacy standards. Always review the privacy policy before sharing sensitive information, and be particularly cautious with free apps that may monetize user data.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can AI chatbots replace human therapists?</h3>
              <p className="text-gray-600">
                While AI therapy assistants like Woebot and Wysa can provide valuable support and teach evidence-based techniques, they cannot fully replace human therapists. They lack the clinical judgment, empathy, and adaptability of human professionals. They're best used as supplements to professional care or for those who cannot access traditional therapy.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect Mental Health App</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the mental health app that best fits your unique needs, preferences, and goals.
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
              to="/tools/assessments/mental-health-assessment" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Take Mental Health Assessment
            </Button>
          </div>
        </div>
        
        {/* How We Review Section */}
        <div className="mt-16">
          <HowWeReviewed />
        </div>
      </div>
    </div>
  );
};

export default BestTherapyAppsCompared;
