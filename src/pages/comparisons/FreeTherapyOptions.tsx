import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain, Search, Heart, Globe } from 'lucide-react';
import Button from '../../components/Button';
import HowWeReviewed from '../../components/HowWeReviewed';

const FreeTherapyOptions = () => {
  // Resource data
  const resources = [
    {
      name: '7 Cups',
      category: 'Online Peer Support',
      website: 'https://www.7cups.com',
      description: 'Platform offering free emotional support through trained volunteer listeners and online chat rooms.',
      pros: [
        'Available 24/7',
        'Anonymous support',
        'Supportive community forums',
        'Mobile app available'
      ],
      cons: [
        'Volunteers aren\'t licensed therapists',
        'Quality of support can vary',
        'Limited to text-based communication in free version',
        'Professional therapy requires payment'
      ],
      bestFor: 'Immediate emotional support and active listening'
    },
    {
      name: 'Crisis Text Line',
      category: 'Crisis Support',
      website: 'https://www.crisistextline.org',
      description: 'Free 24/7 text line that connects people in crisis with trained crisis counselors.',
      pros: [
        'Available 24/7',
        'Trained crisis counselors',
        'Text-based for privacy and accessibility',
        'No cost barrier'
      ],
      cons: [
        'Designed for crisis intervention, not ongoing therapy',
        'Not a substitute for professional mental health treatment',
        'Text-only format may be limiting for some',
        'Wait times during high-volume periods'
      ],
      bestFor: 'Crisis intervention and immediate support during mental health emergencies'
    },
    {
      name: 'Open Path Collective',
      category: 'Affordable Therapy',
      website: 'https://openpathcollective.org',
      description: 'Nonprofit connecting clients with affordable therapy sessions ($30-60 per session) after a one-time membership fee.',
      pros: [
        'Sessions with licensed therapists',
        'One-time $59 membership fee',
        'Both in-person and online options',
        'Sliding scale fees based on income'
      ],
      cons: [
        'Not completely free (but significantly reduced cost)',
        'Limited therapist availability in some areas',
        'No insurance billing',
        'May have waiting lists'
      ],
      bestFor: 'Those who can afford a small fee for professional therapy'
    },
    {
      name: 'National Alliance on Mental Illness (NAMI)',
      category: 'Support Groups',
      website: 'https://www.nami.org',
      description: 'Nonprofit offering free support groups, education programs, and resources for individuals and families affected by mental illness.',
      pros: [
        'Peer-led support groups',
        'Educational resources and programs',
        'Local chapters across the US',
        'Both online and in-person options'
      ],
      cons: [
        'Not a substitute for professional therapy',
        'Group format may not address individual needs',
        'Availability varies by location',
        'Focus on support rather than treatment'
      ],
      bestFor: 'Community support and education about mental health conditions'
    }
  ];

  // Community resource data
  const communityResources = [
    {
      name: 'University Counseling Centers',
      description: 'Many colleges and universities offer free or low-cost counseling services to students, and sometimes to community members.',
      howToAccess: 'Contact your local university\'s counseling center or student health services to inquire about eligibility and services.'
    },
    {
      name: 'Community Mental Health Centers',
      description: 'Federally funded centers that provide mental health services on a sliding fee scale, often with free options for those who qualify.',
      howToAccess: 'Search for "community mental health center" in your area or contact your local health department for referrals.'
    },
    {
      name: 'Religious Organizations',
      description: 'Many churches, synagogues, mosques, and other religious organizations offer free counseling services with trained pastoral counselors.',
      howToAccess: 'Contact local religious organizations directly to inquire about available counseling services.'
    },
    {
      name: 'Employee Assistance Programs (EAPs)',
      description: 'Many employers offer EAPs that include a limited number of free counseling sessions for employees and their family members.',
      howToAccess: 'Contact your HR department to learn if your employer offers an EAP and how to access it.'
    }
  ];

  // Hotline data
  const hotlines = [
    {
      name: '988 Suicide & Crisis Lifeline',
      description: 'National network of local crisis centers providing free and confidential emotional support to people in suicidal crisis or emotional distress.',
      contact: 'Call or text 988 or chat at 988lifeline.org'
    },
    {
      name: 'SAMHSA\'s National Helpline',
      description: 'Free, confidential, 24/7 treatment referral and information service for individuals and families facing mental health or substance use disorders.',
      contact: '1-800-662-HELP (4357)'
    },
    {
      name: 'Veterans Crisis Line',
      description: 'Connects veterans and their families with qualified responders through a confidential toll-free hotline.',
      contact: 'Call 988 then press 1, text 838255, or chat online'
    },
    {
      name: 'The Trevor Project',
      description: 'Crisis intervention and suicide prevention services for LGBTQ+ young people under 25.',
      contact: '1-866-488-7386 or text START to 678678'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Free and Low-Cost Therapy Options</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover accessible mental health resources and support services available at no or minimal cost.
          </p>
          <div className="flex justify-center">
            <Button 
              as="a" 
              href="#crisis-resources" 
              variant="primary" 
              size="lg" 
              icon={Heart}
            >
              Crisis Resources
            </Button>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Finding Affordable Mental Health Support</h2>
          <p className="text-gray-600 mb-4">
            While traditional therapy can be expensive, numerous free and low-cost options exist for those seeking mental health support. These alternatives range from peer support networks to community resources and crisis intervention services.
          </p>
          <p className="text-gray-600 mb-4">
            It's important to note that while these resources can provide valuable support, they may not be equivalent to professional therapy. However, they can serve as important stepping stones or supplements to more comprehensive care.
          </p>
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">When to Seek Immediate Help</h3>
            <p className="text-gray-700 mb-4">
              If you're experiencing thoughts of harming yourself or others, please reach out to emergency services immediately:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Call or text <strong>988</strong> for the Suicide & Crisis Lifeline</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Call <strong>911</strong> or go to your nearest emergency room</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Text <strong>HOME</strong> to 741741 to reach the Crisis Text Line</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Online Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Free Online Mental Health Resources</h2>
          
          {resources.map((resource, index) => (
            <div key={resource.name} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl font-bold text-indigo-600 mr-3">{index + 1}</span>
                      <h3 className="text-2xl font-bold text-gray-800">{resource.name}</h3>
                    </div>
                    <div className="bg-indigo-50 rounded-lg px-3 py-1 inline-block mb-4">
                      <span className="text-indigo-700 font-medium">{resource.category}</span>
                    </div>
                    <div className="space-y-2 mb-6">
                      <a 
                        href={resource.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-indigo-600 hover:text-indigo-800 flex items-center"
                      >
                        <Globe className="h-4 w-4 mr-1" />
                        <span>Visit Website</span>
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 md:pl-8">
                    <p className="text-gray-600 mb-6">
                      {resource.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-3">Pros</h5>
                        <ul className="space-y-2">
                          {resource.pros.map((pro, i) => (
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
                          {resource.cons.map((con, i) => (
                            <li key={i} className="flex items-start">
                              <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h5 className="font-bold text-gray-800 mb-2">Best For</h5>
                      <p className="text-gray-700">{resource.bestFor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Resources */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Local Community Resources</h2>
          <p className="text-gray-600 mb-8">
            Many communities offer free or low-cost mental health services through various local organizations. These resources can provide valuable in-person support and may be covered by insurance or offered on a sliding scale.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityResources.map((resource) => (
              <div key={resource.name} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{resource.name}</h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">How to Access</h4>
                  <p className="text-gray-700">{resource.howToAccess}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crisis Hotlines */}
        <div id="crisis-resources" className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Crisis Hotlines and Immediate Support</h2>
          <p className="text-gray-600 mb-8">
            If you're experiencing a mental health crisis or need immediate support, these hotlines are available 24/7 and can provide immediate assistance at no cost.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotlines.map((hotline) => (
              <div key={hotline.name} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{hotline.name}</h3>
                <p className="text-gray-600 mb-4">
                  {hotline.description}
                </p>
                <div className="bg-indigo-50 rounded-lg p-4 flex items-center">
                  <Phone className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                  <span className="text-indigo-700 font-bold">{hotline.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance and Government Programs */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Insurance and Government Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Insurance Coverage</h3>
              <p className="text-gray-600 mb-4">
                Many insurance plans cover mental health services due to mental health parity laws. Even if you think you can't afford therapy, check your insurance benefits first.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Call the number on your insurance card to ask about mental health coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Ask about copays, deductibles, and session limits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Inquire about in-network providers in your area</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link to="/reviews/pricing/insurance-coverage-guide" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  Read our insurance coverage guide <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Government Programs</h3>
              <p className="text-gray-600 mb-4">
                Several government programs provide free or low-cost mental health services to eligible individuals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Medicaid</span>
                    <p className="text-gray-600">Provides health coverage, including mental health services, to eligible low-income adults, children, and people with disabilities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Medicare</span>
                    <p className="text-gray-600">Covers mental health services including therapy and psychiatric services for those 65+ or with certain disabilities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">VA Healthcare</span>
                    <p className="text-gray-600">Provides mental health services to eligible veterans through the Department of Veterans Affairs.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Self-Help Resources */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Free Self-Help Resources</h2>
          <p className="text-gray-600 mb-8">
            While not a replacement for therapy, these self-help resources can provide valuable support and skills for managing mental health.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Mental Health Apps</h3>
              <p className="text-gray-600 mb-4">
                Many apps offer free tools for meditation, mood tracking, and cognitive behavioral therapy exercises.
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• Insight Timer (meditation)</li>
                <li>• Woebot (CBT chatbot)</li>
                <li>• MoodMission (mood improvement)</li>
                <li>• Wysa (AI mental health support)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Support Groups</h3>
              <p className="text-gray-600 mb-4">
                Online and in-person support groups provide community and shared experiences.
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• Mental Health America support groups</li>
                <li>• Depression and Bipolar Support Alliance</li>
                <li>• Anxiety and Depression Association of America</li>
                <li>• Reddit communities (r/mentalhealth, etc.)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Educational Resources</h3>
              <p className="text-gray-600 mb-4">
                Free online courses and resources for learning about mental health.
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• Coursera mental health courses</li>
                <li>• NIMH educational materials</li>
                <li>• Mental Health First Aid training</li>
                <li>• Psychology Today articles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Finding What Works For You */}
        <div className="bg-indigo-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Finding What Works for You</h2>
          <p className="text-gray-700 mb-4">
            Mental health support is not one-size-fits-all. You may need to try several different resources before finding what works best for your specific situation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Considerations When Choosing Resources</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Urgency of your needs</span>
                    <p className="text-gray-700">Crisis resources for immediate help vs. ongoing support for long-term issues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Specific mental health concerns</span>
                    <p className="text-gray-700">Some resources specialize in specific conditions like depression, anxiety, or PTSD</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Communication preferences</span>
                    <p className="text-gray-700">Text, phone, video, or in-person support options</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">When to Seek Professional Help</h3>
              <p className="text-gray-700 mb-4">
                While free resources can be helpful, professional therapy may be necessary if:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Your symptoms significantly impact your daily functioning</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">You're experiencing thoughts of harming yourself or others</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">You're dealing with trauma or complex mental health issues</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Free resources haven't provided sufficient relief</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Finding Affordable Therapy?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our assessment to get personalized recommendations for mental health resources that fit your needs and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/budget-friendly-finder" 
              variant="light"
              size="lg"
            >
              Find Affordable Resources
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
      </div>
    </div>
  );
};

export default FreeTherapyOptions;
