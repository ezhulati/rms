import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertCircle, MessageSquare, Video, Clock, DollarSign, Brain, Laptop } from 'lucide-react';
import Button from '../../components/Button';

const TextVsVideoTherapy = () => {
  // Comparison data
  const comparisonPoints = [
    {
      aspect: 'Communication Style',
      text: {
        points: [
          'Asynchronous - respond when convenient',
          'Time to reflect before responding',
          'Written expression of thoughts and feelings',
          'Creates a record of conversations to review'
        ],
        rating: 8
      },
      video: {
        points: [
          'Real-time conversation with immediate feedback',
          'Visual cues and body language',
          'Verbal expression of thoughts and feelings',
          'More similar to traditional therapy experience'
        ],
        rating: 9
      }
    },
    {
      aspect: 'Convenience & Flexibility',
      text: {
        points: [
          'Available 24/7 - message anytime',
          'No scheduling required for messaging',
          'Fit therapy into small pockets of time',
          'Continue conversations between scheduled sessions'
        ],
        rating: 9
      },
      video: {
        points: [
          'Requires scheduled appointment times',
          'Need dedicated time block (30-60 minutes)',
          'More structured therapy experience',
          'May offer evening/weekend availability'
        ],
        rating: 7
      }
    },
    {
      aspect: 'Privacy & Comfort',
      text: {
        points: [
          'Can message discreetly from anywhere',
          'No need for private space with audio',
          'May feel safer discussing sensitive topics',
          'Lower barrier for those with social anxiety'
        ],
        rating: 9
      },
      video: {
        points: [
          'Requires private, quiet space',
          'Need reliable internet connection',
          'May feel more exposed or vulnerable',
          'Potential for technical difficulties'
        ],
        rating: 6
      }
    },
    {
      aspect: 'Therapeutic Connection',
      text: {
        points: [
          'Connection builds through consistent messaging',
          'May take longer to develop rapport',
          'Lacks non-verbal communication cues',
          'Some find it easier to open up in writing'
        ],
        rating: 7
      },
      video: {
        points: [
          'Face-to-face interaction builds connection faster',
          'Therapist can observe non-verbal cues',
          'More immediate emotional support',
          'Closer to traditional therapeutic relationship'
        ],
        rating: 9
      }
    },
    {
      aspect: 'Cost',
      text: {
        points: [
          'Often more affordable option',
          'Some platforms offer text-only plans',
          'Subscription models with unlimited messaging',
          'Good value for consistent support'
        ],
        rating: 8
      },
      video: {
        points: [
          'Generally more expensive than text-only',
          'Typically billed per session',
          'More likely to be covered by insurance',
          'Pricing similar to traditional therapy'
        ],
        rating: 6
      }
    },
    {
      aspect: 'Effectiveness',
      text: {
        points: [
          'Research shows effectiveness for anxiety and depression',
          'Beneficial for ongoing support between sessions',
          'Good for maintenance and skill-building',
          'Helps with accountability and progress tracking'
        ],
        rating: 7
      },
      video: {
        points: [
          'Strong research support for effectiveness',
          'Comparable outcomes to in-person therapy',
          'Better for complex or severe conditions',
          'More suitable for certain therapeutic techniques'
        ],
        rating: 8
      }
    }
  ];

  // Ideal for sections
  const idealFor = {
    text: [
      'People with busy or unpredictable schedules',
      'Those who express themselves better in writing',
      'Individuals with social anxiety or discomfort with face-to-face interaction',
      'People seeking affordable therapy options',
      'Those who want ongoing support throughout the week',
      'Clients who prefer time to reflect before responding',
      'People in different time zones from available therapists'
    ],
    video: [
      'Those who prefer face-to-face communication',
      'People who express themselves better verbally',
      'Individuals with complex mental health needs',
      'Those who benefit from structure and scheduled sessions',
      'Clients who value non-verbal communication',
      'People who need more immediate feedback and support',
      'Those who prefer a traditional therapy experience'
    ]
  };

  // Platform examples
  const platforms = {
    textFocused: [
      { name: 'BetterHelp', features: 'Unlimited messaging with weekly live sessions available' },
      { name: 'Talkspace', features: 'Daily messaging with optional video sessions' },
      { name: 'Calmerry', features: 'Text therapy with optional video sessions' },
      { name: '7 Cups', features: 'Free peer support messaging with paid professional text therapy' }
    ],
    videoFocused: [
      { name: 'Amwell', features: 'Video-focused therapy with licensed providers' },
      { name: 'MDLive', features: 'Video therapy sessions with psychiatry options' },
      { name: 'Teladoc', features: 'Video sessions with therapists and psychiatrists' },
      { name: 'Brightside', features: 'Video therapy with optional messaging support' }
    ],
    hybrid: [
      { name: 'BetterHelp', features: 'Combines unlimited messaging with weekly video, phone, or live chat sessions' },
      { name: 'Talkspace', features: 'Offers both messaging and live video options in various plans' },
      { name: 'Online-Therapy.com', features: 'Structured CBT program with messaging and weekly video sessions' },
      { name: 'Calmerry', features: 'Flexible plans combining text and video therapy' }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Text vs Video Therapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Text vs. Video Therapy: Which Format Is Right for You?</h1>
              <p className="text-xl text-gray-600 mb-6">
                Compare the benefits, limitations, and ideal use cases for text-based and video-based online therapy to find the format that best suits your needs and preferences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link} 
                  to="/tools/matchers/therapy-platform-matcher" 
                  variant="primary"
                  icon={Laptop}
                >
                  Find Your Therapy Match
                </Button>
                <Button 
                  as={Link}
                  to="/best/platforms/best-online-therapy-platforms" 
                  variant="outline"
                  icon={ArrowRight}
                >
                  Explore Top Platforms
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Online Therapy Formats</h2>
          <p className="text-gray-600 mb-4">
            Online therapy has revolutionized mental health care by making support more accessible than ever before. Two of the most popular formats are text-based therapy and video therapy, each offering distinct advantages and potential limitations.
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Text-based therapy</span> involves communicating with your therapist through written messages, either in real-time chat sessions or through asynchronous messaging where you and your therapist respond when convenient. This format provides flexibility and the ability to engage with therapy on your own schedule.
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Video therapy</span> closely resembles traditional in-person therapy, with face-to-face sessions conducted through secure video conferencing. This format preserves many elements of traditional therapy while offering the convenience of remote access.
          </p>
          <p className="text-gray-600">
            Many online therapy platforms now offer both options, and some therapists use a hybrid approach combining the two formats. This comparison will help you understand the strengths and limitations of each to determine which might work best for your specific situation.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Side-by-Side Comparison</h2>
        
        {comparisonPoints.map((point) => (
          <div key={point.aspect} className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{point.aspect}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="text-lg font-bold text-gray-800">Text Therapy</h4>
                  <div className="ml-auto bg-blue-100 text-blue-800 text-sm font-bold px-2 py-1 rounded">
                    {point.text.rating}/10
                  </div>
                </div>
                <ul className="space-y-2">
                  {point.text.points.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <Video className="h-5 w-5 text-purple-600 mr-2" />
                  <h4 className="text-lg font-bold text-gray-800">Video Therapy</h4>
                  <div className="ml-auto bg-purple-100 text-purple-800 text-sm font-bold px-2 py-1 rounded">
                    {point.video.rating}/10
                  </div>
                </div>
                <ul className="space-y-2">
                  {point.video.points.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Ideal For Sections */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Who Is Each Format Best For?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Text Therapy Is Ideal For:</h3>
              </div>
              <ul className="space-y-3">
                {idealFor.text.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Video className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Video Therapy Is Ideal For:</h3>
              </div>
              <ul className="space-y-3">
                {idealFor.video.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Research & Effectiveness */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Research on Effectiveness</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Text Therapy Research</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Research on text-based therapy shows promising results for certain conditions:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Studies show text therapy can be effective for mild to moderate depression and anxiety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Research indicates high satisfaction rates, particularly among younger adults</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Some studies suggest the act of writing about emotions can have therapeutic benefits</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Less research available compared to video and in-person therapy</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Video className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Video Therapy Research</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Video therapy has substantial research supporting its effectiveness:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Multiple studies show comparable outcomes to in-person therapy for many conditions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Research demonstrates effective therapeutic alliance can form through video</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Studies support effectiveness for a wider range of conditions and severities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">More extensive research base with longer-term outcome studies</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">The Bottom Line on Effectiveness</h3>
            <p className="text-gray-700">
              Both text and video therapy formats have research supporting their effectiveness, though video therapy has a more robust evidence base. The most effective format often depends on individual preferences, needs, and circumstances. Many people benefit from a combination of both formats, using video for deeper therapeutic work and text for ongoing support and skill development.
            </p>
          </div>
        </div>

        {/* Platform Examples */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Platform Examples</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Text-Focused Platforms</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {platforms.textFocused.map((platform) => (
                  <div key={platform.name} className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-1">{platform.name}</h4>
                    <p className="text-gray-600">{platform.features}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Video className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Video-Focused Platforms</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {platforms.videoFocused.map((platform) => (
                  <div key={platform.name} className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-1">{platform.name}</h4>
                    <p className="text-gray-600">{platform.features}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Hybrid Platforms (Both Text & Video)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {platforms.hybrid.map((platform) => (
                  <div key={platform.name} className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-1">{platform.name}</h4>
                    <p className="text-gray-600">{platform.features}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Link to="/best/platforms/best-online-therapy-platforms" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
              View our complete reviews of top online therapy platforms <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Practical Considerations */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Practical Considerations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Time & Scheduling</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <span className="font-bold">Text:</span> Flexible, asynchronous, can message anytime, therapist typically responds 1-2 times daily.
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Video:</span> Scheduled sessions (30-60 minutes), requires dedicated time block, similar to traditional therapy.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Cost Factors</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <span className="font-bold">Text:</span> Often $40-80/week for unlimited messaging, sometimes with weekly live sessions included.
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Video:</span> Typically $60-150 per session, similar to traditional therapy pricing.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Laptop className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Technical Requirements</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <span className="font-bold">Text:</span> Minimal - basic internet connection, smartphone or computer, works with intermittent connectivity.
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Video:</span> More demanding - stable high-speed internet, webcam, microphone, private space with good lighting.
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Combining Both Formats</h3>
            <p className="text-gray-700 mb-4">
              Many therapists and platforms now offer hybrid approaches that combine the benefits of both text and video therapy. This might include:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Weekly video sessions with unlimited text messaging between sessions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Primary text therapy with occasional video sessions for deeper work</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Flexible options to switch between formats based on your needs and schedule</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Using text for check-ins, homework, and skill-building with video for processing emotions and complex issues</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Ideal Therapy Format</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Whether you prefer the flexibility of text therapy, the personal connection of video sessions, or a combination of both, we can help you find the right match for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="light"
              size="lg"
              icon={Brain}
            >
              Find Your Therapy Match
            </Button>
            <Button 
              as={Link} 
              to="/best/text-therapy-services" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
              icon={MessageSquare}
            >
              Best Text Therapy Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextVsVideoTherapy;
