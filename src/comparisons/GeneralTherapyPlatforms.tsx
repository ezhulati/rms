import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Calendar, Users, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import MetaTags from '../components/MetaTags';

const GeneralTherapyPlatforms = () => {
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

  // Platform data
  const platforms = [
    {
      name: 'BetterHelp',
      slug: 'betterhelp',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: '$60-$90/week',
      description: 'BetterHelp is one of the largest online therapy platforms, offering access to thousands of licensed therapists across various specialties. They provide multiple communication methods and a user-friendly interface.',
      features: ['Text messaging', 'Live chat', 'Phone sessions', 'Video sessions', 'Worksheets', 'Journaling tools', 'Mobile app'],
      pros: ['Large therapist network', 'Multiple communication methods', 'Financial aid available', 'Easy therapist switching', 'Convenient scheduling', 'User-friendly platform', 'Weekly live sessions'],
      cons: ['No insurance coverage', 'No medication management', 'Limited therapist selection control', 'Session length limitations', 'No three-way sessions', 'No specialized programs'],
      bestFor: 'Those seeking affordable, flexible therapy with multiple communication options'
    },
    {
      name: 'Talkspace',
      slug: 'talkspace',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.4,
      price: '$65-$99/week + optional live sessions',
      description: 'Talkspace offers text-based therapy with optional live video sessions. They accept insurance from many providers and offer psychiatry services for medication management in addition to therapy.',
      features: ['Text messaging', 'Live video', 'Audio messages', 'Psychiatry services', 'Insurance accepted', 'Specialized programs', 'Mobile app'],
      pros: ['Insurance coverage', 'Medication management available', 'Unlimited messaging', 'Specialized programs', 'Easy-to-use platform', 'Therapist matching system', 'HIPAA compliant'],
      cons: ['Live sessions cost extra', 'Response times vary', 'Limited therapist switching', 'Higher base cost', 'No group therapy', 'No three-way sessions'],
      bestFor: 'Those with insurance coverage seeking therapy with optional medication management'
    },
    {
      name: 'Online-Therapy.com',
      slug: 'online-therapy',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: '$40-$88/week',
      description: 'Online-Therapy.com specializes in cognitive behavioral therapy (CBT) with a structured program that includes worksheets, journaling, and live sessions. Their comprehensive approach includes self-help tools alongside therapist support.',
      features: ['CBT worksheets', 'Live chat', 'Video sessions', 'Messaging', 'Journaling', 'Activity planning', 'Yoga videos'],
      pros: ['Structured CBT approach', 'Comprehensive self-help tools', 'Affordable starter plan', 'Quick therapist responses', 'Holistic wellness focus', 'No subscription commitment', 'Weekly live sessions'],
      cons: ['Smaller therapist network', 'Limited therapy approaches', 'No insurance coverage', 'No medication management', 'Less flexible communication', 'No specialized programs'],
      bestFor: 'Those seeking structured CBT therapy with comprehensive self-help tools'
    },
    {
      name: 'Calmerry',
      slug: 'calmerry',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.2,
      price: '$42-$68/week',
      description: 'Calmerry is a flexible online therapy platform offering text and video therapy at affordable rates. They provide personalized therapy plans and a user-friendly platform with various self-help tools.',
      features: ['Text therapy', 'Video sessions', 'Therapy plans', 'Self-assessment', 'Progress tracking', 'Client portal', 'Mobile app'],
      pros: ['Affordable pricing', 'Flexible plans', 'No subscription commitment', 'Quick therapist matching', 'Licensed therapists', 'Personalized approach', 'Free initial assessment'],
      cons: ['Newer platform', 'Smaller therapist network', 'No insurance coverage', 'No medication management', 'Limited communication options', 'No specialized programs'],
      bestFor: 'Budget-conscious individuals seeking personalized therapy with flexible scheduling'
    },
    {
      name: 'Amwell',
      slug: 'amwell',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.0,
      price: '$109-$129 per session',
      description: 'Amwell is a telehealth platform offering therapy and psychiatry services with a pay-per-session model. They accept insurance from many providers and offer 24/7 access to healthcare professionals.',
      features: ['Video sessions', 'Psychiatry services', 'Insurance accepted', 'Pay-per-session', '24/7 availability', 'Medical services', 'Mobile app'],
      pros: ['Insurance coverage', 'No subscription required', 'Medication management', 'Same-day appointments', 'Board-certified providers', 'Integrated healthcare', 'HIPAA compliant'],
      cons: ['No messaging between sessions', 'Higher per-session cost', 'No free trial', 'Limited therapy modalities', 'No specialized programs', 'Less personalized experience'],
      bestFor: 'Those with insurance seeking occasional therapy sessions without a subscription commitment'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Comparing General Therapy Platforms | RealMindSolutions"
        description="Compare the top online general therapy platforms offering comprehensive mental health services for anxiety, depression, stress, and more."
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">General Therapy Platforms Compared</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive comparison of online platforms offering therapy services for a wide range of mental health concerns.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What Are General Therapy Platforms?</h2>
          <p className="text-gray-600 mb-4">
            General therapy platforms provide online access to licensed therapists who can help with a wide range of mental health concerns including anxiety, depression, stress, relationship issues, and more. These platforms connect users with therapists through various communication methods such as messaging, live chat, phone calls, and video sessions.
          </p>
          <p className="text-gray-600 mb-4">
            Unlike specialized platforms that focus on specific conditions or demographics, general therapy platforms offer broad mental health support for adults dealing with common psychological challenges. They typically provide flexible scheduling, multiple communication options, and a variety of therapeutic approaches to accommodate different preferences and needs.
          </p>
          <p className="text-gray-600">
            In this comparison, we evaluate the top general therapy platforms based on their services, pricing, therapist qualifications, user experience, and overall value to help you find the right option for your mental health journey.
          </p>
        </div>

        {/* Key Considerations Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Considerations When Choosing a Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Communication Options</h3>
              <p className="text-gray-600">
                Consider which communication methods (messaging, live chat, phone, video) are most important to you. Some platforms offer unlimited messaging with weekly live sessions, while others focus primarily on video therapy.
              </p>
            </div>

            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Therapist Qualifications</h3>
              <p className="text-gray-600">
                Look for platforms with licensed therapists who have experience in your areas of concern. Consider the size of the therapist network, specializations available, and the matching process.
              </p>
            </div>

            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Cost & Insurance</h3>
              <p className="text-gray-600">
                Evaluate the subscription cost or per-session pricing. Check if the platform accepts insurance or offers financial aid, as this can significantly reduce out-of-pocket expenses.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12 overflow-hidden">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Platform Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Insurance</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Live Sessions</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Messaging</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
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
                        {renderStars(platform.rating)}
                        <span className="ml-2 text-gray-600">{platform.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {platform.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {platform.slug === 'talkspace' || platform.slug === 'amwell' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {platform.features.includes('Video sessions') || platform.features.includes('Live chat') ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {platform.features.includes('Text messaging') || platform.features.includes('Text therapy') || platform.features.includes('Messaging') ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {platform.bestFor.length > 50 ? `${platform.bestFor.substring(0, 50)}...` : platform.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Platform Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed Platform Reviews</h2>

          {platforms.map((platform, index) => (
            <div key={platform.slug} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-6 md:mb-0">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl font-bold text-indigo-600 mr-3">{index + 1}</span>
                      <h3 className="text-2xl font-bold text-gray-800">{platform.name}</h3>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="mr-2">
                        {renderStars(platform.rating)}
                      </div>
                      <span className="text-gray-600">{platform.rating}/5</span>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                        <span className="text-gray-600">{platform.price}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button
                        as={Link}
                        to={`/reviews/platforms/${platform.slug}`}
                        variant="outline"
                        size="sm"
                        className="w-full justify-center"
                      >
                        Read full review
                      </Button>
                      <Button
                        as="a"
                        href={`https://www.${platform.slug}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="sm"
                        className="w-full justify-center"
                      >
                        Visit Website
                      </Button>
                    </div>
                  </div>

                  <div className="md:w-3/4 md:pl-8">
                    <h4 className="font-bold text-gray-800 mb-3">Platform Overview</h4>
                    <p className="text-gray-600 mb-6">
                      {platform.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-3">Pros</h5>
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
                        <h5 className="font-bold text-gray-800 mb-3">Cons</h5>
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

                    <div>
                      <h5 className="font-bold text-gray-800 mb-3">Key Features</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {platform.features.map((feature, i) => (
                          <div key={i} className="bg-gray-50 rounded-lg p-3 flex items-center">
                            <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 bg-indigo-50 rounded-lg p-4">
                      <h5 className="font-bold text-gray-800 mb-2">Best For</h5>
                      <p className="text-gray-700">{platform.bestFor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Communication Methods Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Communication Methods Compared</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <MessageSquare className="h-6 w-6 text-indigo-600 mr-2" />
                Text-Based Therapy
              </h3>
              <p className="text-gray-600 mb-4">
                Text-based therapy includes messaging, chat, and email communication with your therapist. This approach offers:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Time to reflect on responses and carefully articulate thoughts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Written record of conversations to review later</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Flexibility to communicate at any time, not just during scheduled sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Less intimidating for those uncomfortable with face-to-face interaction</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Lacks nonverbal cues and immediate feedback</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Response times can vary from minutes to days</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Video className="h-6 w-6 text-indigo-600 mr-2" />
                Live Sessions
              </h3>
              <p className="text-gray-600 mb-4">
                Live sessions include video calls, phone calls, and real-time chat. This approach offers:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Real-time interaction and immediate feedback</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Nonverbal cues through facial expressions and tone of voice</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Deeper therapeutic connection and rapport building</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">More similar to traditional in-person therapy</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Requires scheduling and dedicated time commitment</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">May require privacy and a quiet environment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ideal Approach</h3>
            <p className="text-gray-600 mb-4">
              The most effective online therapy experience often combines both text-based communication and live sessions:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>BetterHelp</strong> and <strong>Talkspace</strong> offer this hybrid approach with unlimited messaging and scheduled live sessions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Use messaging for ongoing support, journaling, and processing between sessions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Use live sessions for deeper work, immediate feedback, and building therapeutic alliance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Consider your personal preferences, schedule, and comfort level when choosing a platform</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Models */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Pricing Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Calendar className="h-6 w-6 text-indigo-600 mr-2" />
                Subscription Model
              </h3>
              <p className="text-gray-600 mb-4">
                Platforms like BetterHelp, Talkspace, and Online-Therapy.com use a subscription model where you pay a weekly or monthly fee for a package of services.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Predictable recurring cost</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Often includes unlimited messaging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Usually more cost-effective for regular therapy</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">May pay for unused services</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Commitment required (usually monthly or quarterly)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <DollarSign className="h-6 w-6 text-indigo-600 mr-2" />
                Pay-Per-Session Model
              </h3>
              <p className="text-gray-600 mb-4">
                Platforms like Amwell use a pay-per-session model where you pay only for the sessions you attend, without a recurring subscription.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">No commitment required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Pay only for what you use</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Good for occasional therapy needs</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Higher per-session cost</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Limited or no between-session support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Cost Considerations</h3>
            <p className="text-gray-600 mb-4">
              When evaluating the cost of online therapy platforms, consider these factors:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>Insurance coverage:</strong> Platforms like Talkspace and Amwell accept insurance, which can significantly reduce your out-of-pocket costs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>Financial aid:</strong> BetterHelp offers financial aid based on income and other factors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>Frequency of use:</strong> Subscription models are more cost-effective for regular therapy, while pay-per-session is better for occasional use</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>HSA/FSA:</strong> Many platforms accept Health Savings Account or Flexible Spending Account payments</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Recommendation</h2>
          <p className="text-gray-600 mb-6">
            Based on our comprehensive analysis, <strong>BetterHelp</strong> stands out as the best overall general therapy platform for most users. Its combination of affordable pricing, multiple communication methods, large therapist network, and user-friendly platform makes it a versatile choice for various mental health needs.
          </p>
          <p className="text-gray-600 mb-6">
            However, the best platform for you depends on your specific needs:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600"><strong>Talkspace</strong> is best if you have insurance coverage and want the option of medication management alongside therapy.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600"><strong>Online-Therapy.com</strong> is ideal for those who prefer a structured CBT approach with comprehensive self-help tools.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600"><strong>Calmerry</strong> offers a good balance of affordability and flexibility with no long-term commitment required.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600"><strong>Amwell</strong> is best for those who want occasional therapy sessions with insurance coverage and no subscription.</span>
            </li>
          </ul>
          <p className="text-gray-600">
            Remember that the most effective therapy experience depends on finding the right therapist match, regardless of platform. Many platforms offer the ability to switch therapists if your initial match isn't a good fit.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect Therapy Match</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the right therapy platform for your specific needs.
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
              to="/reviews/platforms"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              View All Platform Reviews
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralTherapyPlatforms;
