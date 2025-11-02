import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertCircle, Laptop, Users, Clock, DollarSign, Home, Globe } from 'lucide-react';
import Button from '../../components/Button';

const OnlineVsTraditionalTherapy = () => {
  // Comparison data
  const comparisonPoints = [
    {
      aspect: 'Accessibility',
      online: {
        points: [
          'Available from anywhere with internet connection',
          'No travel time or transportation barriers',
          'More options for those in rural or underserved areas',
          'Easier to fit into busy schedules'
        ],
        rating: 9
      },
      traditional: {
        points: [
          'Limited by geographic proximity to therapist',
          'Requires travel time and transportation',
          'May have longer wait times for appointments',
          'Often limited to business hours'
        ],
        rating: 6
      }
    },
    {
      aspect: 'Communication',
      online: {
        points: [
          'Multiple formats: video, audio, text messaging',
          'Asynchronous options available (not time-dependent)',
          'May feel less intimidating for some clients',
          'Digital record of text-based communications'
        ],
        rating: 8
      },
      traditional: {
        points: [
          'Face-to-face interaction only',
          'Full access to non-verbal cues and body language',
          'No technology barriers or connectivity issues',
          'May feel more personal and connected'
        ],
        rating: 9
      }
    },
    {
      aspect: 'Privacy & Comfort',
      online: {
        points: [
          'Sessions from the comfort of your own space',
          'No chance of running into someone in a waiting room',
          'May feel safer discussing sensitive topics remotely',
          'Secure, HIPAA-compliant platforms protect privacy'
        ],
        rating: 8
      },
      traditional: {
        points: [
          'Dedicated professional space free from home distractions',
          'Physical separation between therapy and home life',
          'Potential privacy concerns in waiting rooms',
          'Confidentiality maintained through office protocols'
        ],
        rating: 7
      }
    },
    {
      aspect: 'Cost',
      online: {
        points: [
          'Generally more affordable ($60-$120 per session)',
          'Subscription options often available',
          'No transportation costs',
          'Increasing insurance coverage'
        ],
        rating: 8
      },
      traditional: {
        points: [
          'Typically more expensive ($100-$200+ per session)',
          'Usually billed per session',
          'Additional costs for transportation and time',
          'More established insurance coverage'
        ],
        rating: 6
      }
    },
    {
      aspect: 'Therapeutic Relationship',
      online: {
        points: [
          'Research shows effective therapeutic alliance can form',
          'May take longer to develop deep connection',
          'More frequent contact through messaging',
          'Some clients feel more open discussing issues remotely'
        ],
        rating: 7
      },
      traditional: {
        points: [
          'Direct personal connection in shared physical space',
          'Therapist can observe subtle non-verbal cues',
          'Physical environment designed for therapeutic work',
          'Established tradition with extensive research support'
        ],
        rating: 9
      }
    },
    {
      aspect: 'Treatment Options',
      online: {
        points: [
          'Most evidence-based approaches adaptable to online',
          'Growing research supporting effectiveness',
          'Some platforms offer specialized programs',
          'May include supplemental resources and tools'
        ],
        rating: 8
      },
      traditional: {
        points: [
          'Full range of therapeutic approaches available',
          'Decades of research supporting effectiveness',
          'Better suited for certain techniques requiring physical presence',
          'Easier to incorporate experiential exercises'
        ],
        rating: 9
      }
    }
  ];

  // Ideal for sections
  const idealFor = {
    online: [
      'People with mobility limitations or transportation barriers',
      'Those living in rural or underserved areas',
      'Individuals with busy schedules or caregiving responsibilities',
      'People who feel anxious or uncomfortable in new environments',
      'Those seeking more affordable therapy options',
      'Clients who prefer writing about their feelings (text therapy)',
      'People with mild to moderate mental health concerns'
    ],
    traditional: [
      'Individuals who value face-to-face interaction',
      'Those with limited technology access or comfort',
      'People who need a physical separation between therapy and home',
      'Clients with complex or severe mental health conditions',
      'Those who benefit from in-person therapeutic techniques',
      'Individuals who struggle with focus or need structure',
      'People who prefer established treatment approaches'
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
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Online vs Traditional Therapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Online vs. Traditional Therapy: A Comprehensive Comparison</h1>
              <p className="text-xl text-gray-600 mb-6">
                Understand the key differences, benefits, and limitations of online and traditional in-person therapy to help you choose the right approach for your needs.
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
                  Explore Top Online Platforms
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Your Therapy Options</h2>
          <p className="text-gray-600 mb-4">
            The landscape of mental health care has evolved significantly in recent years, with online therapy emerging as a popular alternative to traditional in-person sessions. Both approaches offer effective ways to address mental health concerns, but they differ in important ways that may impact your experience and outcomes.
          </p>
          <p className="text-gray-600 mb-4">
            This comparison examines key aspects of both therapy formats to help you make an informed decision about which might be better suited to your specific needs, preferences, and circumstances. Remember that many people find value in both approaches, and some even combine them at different points in their mental health journey.
          </p>
          <p className="text-gray-600">
            Research consistently shows that the therapeutic relationship—the connection between you and your therapist—is one of the most important factors in successful therapy outcomes, regardless of whether that relationship develops online or in person.
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
                  <Laptop className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="text-lg font-bold text-gray-800">Online Therapy</h4>
                  <div className="ml-auto bg-blue-100 text-blue-800 text-sm font-bold px-2 py-1 rounded">
                    {point.online.rating}/10
                  </div>
                </div>
                <ul className="space-y-2">
                  {point.online.points.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <Users className="h-5 w-5 text-purple-600 mr-2" />
                  <h4 className="text-lg font-bold text-gray-800">Traditional Therapy</h4>
                  <div className="ml-auto bg-purple-100 text-purple-800 text-sm font-bold px-2 py-1 rounded">
                    {point.traditional.rating}/10
                  </div>
                </div>
                <ul className="space-y-2">
                  {point.traditional.points.map((item, i) => (
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Who Is Each Approach Best For?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Laptop className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Online Therapy Is Ideal For:</h3>
              </div>
              <ul className="space-y-3">
                {idealFor.online.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Traditional Therapy Is Ideal For:</h3>
              </div>
              <ul className="space-y-3">
                {idealFor.traditional.map((item, i) => (
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
                <Laptop className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Online Therapy Research</h3>
              </div>
              <p className="text-gray-600 mb-4">
                A growing body of research supports the effectiveness of online therapy for many common mental health conditions:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Multiple meta-analyses show online CBT is as effective as in-person CBT for depression and anxiety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">76% of people report significant symptom improvement with online therapy (Journal of Telemedicine, 2024)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Client satisfaction rates average 85-90% across major online therapy platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Research shows strong therapeutic alliances can form in online settings</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Traditional Therapy Research</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Traditional therapy has decades of research supporting its effectiveness:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Extensive research across thousands of studies demonstrates effectiveness for diverse conditions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Meta-analyses show 75-80% of people who receive therapy experience benefit compared to untreated individuals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">More research on complex conditions and specialized therapeutic approaches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Strong evidence for the importance of the therapeutic relationship, which some argue is enhanced in person</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">The Bottom Line on Effectiveness</h3>
            <p className="text-gray-700">
              Current research suggests that for many common mental health conditions like depression and anxiety, online therapy can be as effective as traditional therapy. However, traditional therapy may have advantages for complex conditions, crisis situations, or when specific in-person therapeutic techniques are needed. The most important factor in therapy success is finding an approach and therapist that works for your specific situation and preferences.
            </p>
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
                <span className="font-bold">Online:</span> More flexible scheduling, no travel time, some platforms offer 24/7 messaging access.
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Traditional:</span> Fixed appointment times, requires travel time, typically limited to business hours.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Cost Factors</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <span className="font-bold">Online:</span> Generally lower cost ($60-$120/week), subscription options, no transportation costs.
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Traditional:</span> Higher per-session costs ($100-$200+), plus transportation expenses and time value.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Globe className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Availability & Access</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <span className="font-bold">Online:</span> Available anywhere with internet, thousands of therapists to choose from, minimal wait times.
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Traditional:</span> Limited by geographic location, potential waitlists, fewer options in rural areas.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Home className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Environment</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <span className="font-bold">Online:</span> Your own space, potential for distractions, requires private area, technology dependence.
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Traditional:</span> Dedicated therapeutic space, free from home distractions, designed for therapy.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <AlertCircle className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Crisis Management</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <span className="font-bold">Online:</span> May have limitations for severe crises, emergency protocols vary by platform.
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Traditional:</span> Better equipped for immediate crisis intervention, direct access to local resources.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Users className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Therapist Selection</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <span className="font-bold">Online:</span> Wider selection not limited by geography, matching algorithms on some platforms.
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Traditional:</span> Limited to local providers, may offer more specialized approaches in some areas.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Ideal Therapy Option?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Whether you choose online or traditional therapy, the most important step is finding the right match for your unique needs and preferences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="light"
              size="lg"
              icon={Laptop}
            >
              Find Your Therapy Match
            </Button>
            <Button 
              as={Link} 
              to="/best/platforms/best-online-therapy-platforms" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Explore Top Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineVsTraditionalTherapy;
