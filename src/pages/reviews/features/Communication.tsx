import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, MessageCircle, Video, Phone, Clock } from 'lucide-react';
import Button from '../../../components/Button';
import MetaTags from '../../../components/MetaTags';

const Communication = () => {
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

  // Platform communication data
  const platforms = [
    {
      name: 'BetterHelp',
      slug: 'betterhelp',
      messagingRating: 4.7,
      liveSessionsRating: 4.5,
      responseTimeRating: 4.6,
      overallRating: 4.6,
      messagingFeatures: [
        'Unlimited messaging with therapist',
        'Text, audio, and video messaging options',
        'Dedicated messaging room accessible 24/7',
        'Therapist typically responds 1-2 times per day',
        'Message notifications',
        'Journaling feature for personal reflections'
      ],
      liveSessionFeatures: [
        'Weekly 30-45 minute live sessions',
        'Video, phone, or live chat options',
        'Easy scheduling through the platform',
        'Session reminders',
        'Option to extend session length (at therapist discretion)',
        'Group sessions available as add-ons'
      ],
      pros: [
        'Most comprehensive communication options',
        'Truly unlimited messaging with no character limits',
        'Multiple modalities for different comfort levels',
        'Consistent therapist response schedule',
        'Intuitive interface for all communication methods',
        'Seamless switching between communication types'
      ],
      cons: [
        'Therapist response times can vary',
        'Live sessions limited to once weekly on standard plan',
        'Occasional technical issues with video',
        'Message notifications sometimes delayed',
        'No direct crisis support communication channel'
      ]
    },
    {
      name: 'Talkspace',
      slug: 'talkspace',
      messagingRating: 4.6,
      liveSessionsRating: 4.3,
      responseTimeRating: 4.5,
      overallRating: 4.5,
      messagingFeatures: [
        'Unlimited text, audio, and video messaging',
        'Structured daily check-ins',
        'Guaranteed therapist responses 5 days/week',
        'Organized conversation view with timestamps',
        'Media sharing capabilities',
        'Progress tracking integrated with messaging'
      ],
      liveSessionFeatures: [
        'Live video sessions (frequency depends on plan)',
        'Session scheduling through the app',
        'Pre-session agenda setting feature',
        'Post-session summary option',
        'Session recording available (with consent)',
        'Worksheets and exercises can be assigned during sessions'
      ],
      pros: [
        'Guaranteed response timeframes',
        'Well-organized messaging interface',
        'Structured approach to asynchronous therapy',
        'Seamless integration between messaging and live sessions',
        'Good video session quality',
        'Clear boundaries around communication expectations'
      ],
      cons: [
        'Therapists only respond during business days',
        'Character limits on some messages',
        'Live sessions require higher-tier plans',
        'Less flexible communication schedule',
        'Mobile app messaging more robust than web version'
      ]
    },
    {
      name: 'Calmerry',
      slug: 'calmerry',
      messagingRating: 4.4,
      liveSessionsRating: 4.5,
      responseTimeRating: 4.3,
      overallRating: 4.4,
      messagingFeatures: [
        'Unlimited text messaging',
        'Therapist responds 5 days per week',
        'Structured messaging templates available',
        'Emotion tracking integrated with messaging',
        'File and image sharing',
        'Conversation history easily accessible'
      ],
      liveSessionFeatures: [
        'Weekly video sessions (30 minutes)',
        'Calendar integration for scheduling',
        'Session reminders via email and app',
        'Backup phone session option if video fails',
        'Session notes shared afterward',
        'Flexible rescheduling policy'
      ],
      pros: [
        'Balanced approach to messaging and live sessions',
        'Consistent response times',
        'User-friendly messaging interface',
        'Good video quality and reliability',
        'Thoughtful integration of tools within messaging',
        'Affordable pricing for communication features'
      ],
      cons: [
        'No audio messaging option',
        'Limited to text-only messaging on basic plan',
        'Newer platform with occasional technical issues',
        'No weekend therapist responses',
        'Mobile app less robust than competitors'
      ]
    },
    {
      name: 'Online-Therapy.com',
      slug: 'online-therapy',
      messagingRating: 4.2,
      liveSessionsRating: 4.6,
      responseTimeRating: 4.0,
      overallRating: 4.3,
      messagingFeatures: [
        'Daily messaging with therapist (Monday-Friday)',
        'Text-based messaging only',
        'Structured CBT worksheets integrated with messaging',
        'Therapist feedback on completed activities',
        'Journal feature with therapist access',
        'Messaging organized by therapy sections'
      ],
      liveSessionFeatures: [
        'Weekly live video sessions',
        'Focused session structure based on CBT framework',
        'Screen sharing for worksheet review',
        'Pre-session preparation guides',
        'Post-session action items',
        'Session notes in secure portal'
      ],
      pros: [
        'Highly structured communication approach',
        'Excellent integration of messaging with CBT program',
        'High-quality video sessions focused on specific goals',
        'Clear expectations for communication',
        'Therapist feedback is thorough and educational',
        'Communication tied directly to therapeutic progress'
      ],
      cons: [
        'Limited messaging options (text only)',
        'Less flexible than other platforms',
        'Response times can be slower (up to 24 hours)',
        'No weekend support',
        'Communication strictly focused on CBT work'
      ]
    },
    {
      name: 'Amwell',
      slug: 'amwell',
      messagingRating: 2.5,
      liveSessionsRating: 4.7,
      responseTimeRating: 3.0,
      overallRating: 3.4,
      messagingFeatures: [
        'No between-session messaging',
        'Pre-appointment questionnaires',
        'Secure message center for administrative communications',
        'Appointment reminders via email/text',
        'Document sharing capabilities',
        'Post-session follow-up messages from provider'
      ],
      liveSessionFeatures: [
        'High-quality video sessions (45 minutes)',
        'Phone session backup option',
        'Multiple device compatibility',
        'Waiting room feature',
        'Session notes provided after appointments',
        'Easy scheduling and rescheduling'
      ],
      pros: [
        'Excellent video session quality and reliability',
        'Professional telehealth communication environment',
        'HIPAA-compliant secure communication',
        'Straightforward scheduling process',
        'Clear session structure similar to in-person therapy',
        'Good administrative communication'
      ],
      cons: [
        'No between-session therapeutic messaging',
        'Traditional appointment-only model',
        'Limited communication outside of sessions',
        'No ongoing therapeutic conversation',
        'Less accessible for quick check-ins or questions'
      ]
    }
  ];

  // Communication method comparison
  const communicationMethods = [
    {
      method: 'Text Messaging',
      icon: <MessageCircle className="h-8 w-8 text-indigo-600" />,
      description: 'Asynchronous text-based communication with therapist through a secure platform.',
      benefits: [
        'Allows time to reflect and compose thoughts',
        'Creates a written record of therapeutic conversations',
        'Accessible anytime for expressing immediate feelings',
        'Lower barrier to entry for those uncomfortable with face-to-face',
        'Can be done discreetly in various environments'
      ],
      limitations: [
        'Lacks nonverbal cues and tone',
        'May lead to misinterpretations',
        'Delayed responses can be frustrating',
        'Less immediate therapeutic intervention',
        'Requires written expression skills'
      ],
      bestFor: 'Ongoing support, processing thoughts between sessions, and those who express themselves better in writing.'
    },
    {
      method: 'Video Sessions',
      icon: <Video className="h-8 w-8 text-indigo-600" />,
      description: 'Live face-to-face video conversations with therapist through secure telehealth platform.',
      benefits: [
        'Most similar to traditional therapy',
        'Includes visual cues and body language',
        'Allows for real-time feedback and intervention',
        'Creates stronger therapeutic alliance',
        'Better for complex therapeutic techniques'
      ],
      limitations: [
        'Requires privacy and quiet environment',
        'Dependent on internet connection quality',
        'Scheduled time commitment required',
        'Some people feel self-conscious on video',
        'Technical issues can disrupt sessions'
      ],
      bestFor: 'Deep therapeutic work, complex issues, and those who value face-to-face connection and immediate feedback.'
    },
    {
      method: 'Phone Sessions',
      icon: <Phone className="h-8 w-8 text-indigo-600" />,
      description: 'Live voice-only conversations with therapist via phone or in-app calling feature.',
      benefits: [
        'More accessible than video (less bandwidth required)',
        'Provides vocal tone and real-time interaction',
        'Often more comfortable than video for some clients',
        'Can be done while walking or moving',
        'Good balance of connection and privacy'
      ],
      limitations: [
        'Lacks visual cues and body language',
        'Still requires scheduled time commitment',
        'Some therapeutic techniques less effective',
        'Call quality issues can occur',
        'Less engaging than video for some people'
      ],
      bestFor: 'Those uncomfortable with video, people with limited internet bandwidth, and clients who process well through verbal communication.'
    },
    {
      method: 'Live Chat',
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      description: 'Real-time text-based conversations during scheduled session times.',
      benefits: [
        'Combines immediacy of live sessions with comfort of writing',
        'Creates written record while allowing real-time interaction',
        'Good for those uncomfortable with voice/video',
        'Can be done in environments where speaking is not possible',
        'Less bandwidth required than video'
      ],
      limitations: [
        'Slower pace than verbal communication',
        'Lacks nonverbal and vocal cues',
        'Requires typing skills and speed',
        'Can feel rushed compared to asynchronous messaging',
        'Less immersive therapeutic experience'
      ],
      bestFor: 'Those who prefer writing but want real-time interaction, clients in environments where they cannot speak freely, and people uncomfortable with audio/video.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Online Therapy Communication Features Compared | RealMindSolutions"
        description="Compare messaging, video sessions, and response times across top online therapy platforms. Find the best communication style for your therapy needs."
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Online Therapy Communication Features Compared</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            How therapy platforms handle messaging, live sessions, and therapist availability
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Importance of Communication in Online Therapy</h2>
          <p className="text-gray-600 mb-4">
            Communication is the foundation of effective therapy. In the online therapy world, platforms offer various ways to connect with therapists—from asynchronous messaging to live video sessions. The communication methods available, their quality, and the responsiveness of therapists can significantly impact your therapeutic experience.
          </p>
          <p className="text-gray-600 mb-4">
            Different communication styles suit different needs. Some clients benefit from the reflection time that messaging provides, while others need the immediacy and personal connection of video sessions. Many find that a combination of approaches works best, allowing for both ongoing support and deeper therapeutic work.
          </p>
          <p className="text-gray-600">
            In this guide, we evaluate the communication features of leading online therapy platforms, comparing their messaging capabilities, live session quality, and therapist responsiveness to help you find the best fit for your communication preferences.
          </p>
        </div>

        {/* Communication Methods Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Different Communication Methods</h2>
          
          <div className="space-y-10">
            {communicationMethods.map((method, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                <div className="flex items-center mb-4">
                  {method.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-3">{method.method}</h3>
                </div>
                <p className="text-gray-600 mb-4">{method.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      Limitations
                    </h4>
                    <ul className="space-y-2">
                      {method.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start">
                          <XCircle className="h-4 w-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-1">Best For</h4>
                  <p className="text-gray-700">{method.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12 overflow-hidden">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Communication Features by Platform</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Messaging</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Live Sessions</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response Time</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {platforms.map((platform) => (
                  <tr key={platform.slug}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{platform.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {renderStars(platform.messagingRating)}
                        <span className="ml-2 text-gray-600">{platform.messagingRating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {renderStars(platform.liveSessionsRating)}
                        <span className="ml-2 text-gray-600">{platform.liveSessionsRating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {renderStars(platform.responseTimeRating)}
                        <span className="ml-2 text-gray-600">{platform.responseTimeRating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {renderStars(platform.overallRating)}
                        <span className="ml-2 text-gray-600">{platform.overallRating}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Platform Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed Communication Analysis by Platform</h2>

          {platforms.map((platform, index) => (
            <div key={platform.slug} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-6 md:mb-0">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl font-bold text-indigo-600 mr-3">{index + 1}</span>
                      <h3 className="text-2xl font-bold text-gray-800">{platform.name}</h3>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Messaging</span>
                          <div className="flex">
                            {renderStars(platform.messagingRating)}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Live Sessions</span>
                          <div className="flex">
                            {renderStars(platform.liveSessionsRating)}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Response Time</span>
                          <div className="flex">
                            {renderStars(platform.responseTimeRating)}
                          </div>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-gray-700">Overall</span>
                          <div className="flex">
                            {renderStars(platform.overallRating)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button
                        as={Link}
                        to={`/reviews/platforms/${platform.slug}`}
                        variant="primary"
                        size="sm"
                        className="w-full justify-center"
                      >
                        Full Review
                      </Button>
                    </div>
                  </div>

                  <div className="md:w-3/4 md:pl-8">
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <MessageCircle className="h-5 w-5 text-indigo-600 mr-2" />
                        Messaging Features
                      </h4>
                      <ul className="space-y-2">
                        {platform.messagingFeatures.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <Video className="h-5 w-5 text-indigo-600 mr-2" />
                        Live Session Features
                      </h4>
                      <ul className="space-y-2">
                        {platform.liveSessionFeatures.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Communication Pros</h4>
                        <ul className="space-y-2">
                          {platform.pros.map((pro, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Communication Cons</h4>
                        <ul className="space-y-2">
                          {platform.cons.map((con, i) => (
                            <li key={i} className="flex items-start">
                              <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Communication Preferences Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Finding Your Communication Fit</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">For Those Who Value Ongoing Support</h3>
              <p className="text-gray-600 mb-3">
                If you benefit from consistent support and like processing thoughts throughout the week, prioritize platforms with strong messaging features:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Best options:</strong> BetterHelp, Talkspace</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Look for:</strong> Unlimited messaging, quick response times, multiple messaging formats</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Avoid:</strong> Platforms with session-only models or limited messaging</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">For Those Who Prefer Face-to-Face Interaction</h3>
              <p className="text-gray-600 mb-3">
                If you value nonverbal cues and real-time conversation, prioritize platforms with excellent live session capabilities:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Best options:</strong> Amwell, Online-Therapy.com</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Look for:</strong> High-quality video, flexible session scheduling, longer session times</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Avoid:</strong> Platforms that limit live sessions or charge significant extra fees for them</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">For Those Who Want a Balanced Approach</h3>
              <p className="text-gray-600 mb-3">
                If you value both ongoing messaging support and regular live sessions, look for platforms that excel in both areas:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Best options:</strong> Calmerry, BetterHelp</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Look for:</strong> Plans that include both messaging and weekly sessions as standard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Avoid:</strong> Platforms that excel in one communication type but are weak in others</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">For Those With Privacy Concerns</h3>
              <p className="text-gray-600 mb-3">
                If you have limited privacy at home or prefer more discreet therapy options:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Best options:</strong> Platforms with text-based options like BetterHelp (live chat) or Talkspace (messaging)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Look for:</strong> Phone session options, live chat capabilities, discreet app interfaces</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Avoid:</strong> Platforms without text-based options or those requiring video/audio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Recommendations</h2>
          <p className="text-gray-600 mb-4">
            Based on our comprehensive analysis of communication features across online therapy platforms, here are our top recommendations:
          </p>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Best Overall Communication Features: BetterHelp</h3>
              <p className="text-gray-700">
                BetterHelp offers the most comprehensive and flexible communication options, with unlimited messaging in multiple formats (text, audio, video) and weekly live sessions via video, phone, or live chat. Their platform provides the best balance of asynchronous and synchronous communication methods.
              </p>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Best for Structured Communication: Talkspace</h3>
              <p className="text-gray-700">
                Talkspace excels with its organized messaging system and guaranteed response timeframes. Their structured approach to asynchronous therapy makes it ideal for those who appreciate clear communication boundaries and consistent therapist engagement.
              </p>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Best Video Session Quality: Amwell</h3>
              <p className="text-gray-700">
                For those who prioritize high-quality video sessions similar to traditional therapy, Amwell offers the most professional telehealth experience. Their video platform is reliable, and their 45-minute sessions provide ample time for meaningful therapeutic work.
              </p>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Best Value for Communication Features: Calmerry</h3>
              <p className="text-gray-700">
                Calmerry provides a good balance of messaging and video sessions at a more affordable price point than some competitors. Their platform offers consistent response times and reliable video quality without premium pricing.
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 mt-6">
            When choosing an online therapy platform, consider your personal communication preferences, therapy goals, and practical constraints like privacy and internet access. The right communication methods can significantly enhance your therapeutic experience and outcomes.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect Communication Style</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our assessment to get matched with the online therapy platform that best fits your communication preferences and needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={Link}
              to="/tools/matchers/therapy-platform-matcher"
              variant="light"
              size="lg"
            >
              Take the Assessment
            </Button>
            <Button
              as={Link}
              to="/compare/platforms/top-therapy-platforms-compared"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Compare All Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
