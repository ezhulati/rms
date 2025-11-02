import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, Pill, Brain, MessageSquare, Video, Phone, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import MetaTags from '../components/MetaTags';

const MedicationTherapyPlatforms = () => {
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
      name: 'Cerebral',
      slug: 'cerebral',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: '$85-$325/month',
      description: 'Cerebral offers comprehensive mental health care with both medication management and therapy services. Their subscription-based model provides access to licensed prescribers, therapists, and care counselors.',
      features: ['Medication management', 'Therapy services', 'Care counseling', 'Medication delivery', 'Insurance accepted'],
      pros: ['Integrated medication and therapy services', 'Convenient medication delivery', 'Monthly subscription model', 'Insurance coverage available', 'Regular provider check-ins'],
      cons: ['Not available in all states', 'Limited therapy session length', 'Some users report provider turnover', 'Not suitable for severe conditions', 'Subscription commitment required'],
      bestFor: 'Those seeking combined medication and therapy services for anxiety, depression, insomnia, and ADHD'
    },
    {
      name: 'Brightside',
      slug: 'brightside',
      image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.2,
      price: '$95-$349/month',
      description: 'Brightside specializes in treating depression and anxiety with a data-driven approach to medication management and therapy. Their precision prescribing technology helps match patients with the right medications.',
      features: ['Precision prescribing', 'Data-driven approach', 'Therapy services', 'Insurance accepted', 'Progress tracking'],
      pros: ['Specialized for depression and anxiety', 'Evidence-based treatment', 'Insurance coverage available', 'Detailed symptom tracking', 'Integrated care model'],
      cons: ['Limited scope of conditions treated', 'Higher cost without insurance', 'Fewer communication options', 'Not for complex cases', 'Limited availability in some states'],
      bestFor: 'Those with depression or anxiety seeking evidence-based medication management and therapy'
    },
    {
      name: 'Talkspace',
      slug: 'talkspace',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.4,
      price: '$65-$99/week + $249 initial psychiatry session, $125 follow-ups',
      description: 'Talkspace offers both therapy and psychiatric services, allowing users to receive medication management alongside therapy. Their platform provides multiple communication methods and extensive insurance coverage.',
      features: ['Psychiatry services', 'Therapy services', 'Multiple communication methods', 'Insurance accepted', 'Medication management'],
      pros: ['Extensive insurance coverage', 'Integrated therapy and psychiatry', 'Multiple therapy modalities', 'Flexible communication options', 'Large provider network'],
      cons: ['Separate pricing for psychiatry', 'Higher cost without insurance', 'Limited live session options', 'Some users report delayed responses', 'Psychiatrist availability varies'],
      bestFor: 'Those with insurance seeking both therapy and medication management with flexible communication options'
    },
    {
      name: 'Hims & Hers',
      slug: 'hims-hers',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.0,
      price: '$39-$85/month for medication, $99 for psychiatric consultation',
      description: 'Hims & Hers provides telehealth services including mental health medication management for anxiety and depression. They offer affordable medication subscriptions with free delivery.',
      features: ['Psychiatric consultations', 'Medication management', 'Medication delivery', 'Affordable pricing', 'Quick consultations'],
      pros: ['Affordable medication options', 'Convenient medication delivery', 'Quick consultation process', 'No subscription required for initial consultation', 'User-friendly platform'],
      cons: ['Limited to anxiety and depression', 'No therapy services', 'Less comprehensive care', 'No insurance accepted', 'Limited follow-up support'],
      bestFor: 'Those seeking affordable medication management for anxiety or depression without therapy'
    },
    {
      name: 'Ro Mind',
      slug: 'ro-mind',
      image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 3.9,
      price: '$65/month for medication management',
      description: 'Ro Mind focuses on medication management for anxiety and depression with a streamlined approach. They offer ongoing care with licensed providers and convenient medication delivery.',
      features: ['Medication management', 'Provider consultations', 'Medication delivery', 'Ongoing care', 'Digital health tools'],
      pros: ['Straightforward medication service', 'Convenient medication delivery', 'Affordable monthly pricing', 'No insurance needed', 'Quick consultation process'],
      cons: ['Limited to anxiety and depression', 'No therapy services', 'Less comprehensive care', 'No insurance accepted', 'Newer service with less track record'],
      bestFor: 'Those seeking straightforward medication management for anxiety or depression at an affordable price'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Comparing Medication Management Therapy Platforms | RealMindSolutions"
        description="Compare the top online platforms offering medication management and therapy services for mental health conditions like anxiety, depression, and ADHD."
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Medication Management Therapy Platforms Compared</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive comparison of online platforms offering medication management alongside therapy services for mental health conditions.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What Are Medication Management Therapy Platforms?</h2>
          <p className="text-gray-600 mb-4">
            Medication management therapy platforms provide online access to psychiatric services, allowing users to receive prescriptions for mental health medications alongside therapy. These platforms connect users with licensed psychiatrists, nurse practitioners, and therapists who can diagnose conditions, prescribe appropriate medications, and provide ongoing support.
          </p>
          <p className="text-gray-600 mb-4">
            Unlike traditional therapy-only platforms, these services offer a more comprehensive approach to mental health care by addressing both the psychological and physiological aspects of mental health conditions. This integrated approach can be particularly effective for conditions like depression, anxiety, ADHD, and insomnia that often benefit from a combination of medication and therapy.
          </p>
          <p className="text-gray-600">
            In this comparison, we evaluate the top medication management therapy platforms based on their services, pricing, provider qualifications, user experience, and overall value to help you find the right option for your needs.
          </p>
        </div>

        {/* Key Considerations Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Considerations When Choosing a Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Pill className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Medication Services</h3>
              <p className="text-gray-600">
                Consider what medications the platform can prescribe, how quickly you can get an initial consultation, and how medication delivery or refills are handled. Some platforms offer more comprehensive medication options than others.
              </p>
            </div>

            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Provider Qualifications</h3>
              <p className="text-gray-600">
                Look for platforms with board-certified psychiatrists or psychiatric nurse practitioners with extensive experience in medication management. The quality and expertise of providers can significantly impact your treatment outcomes.
              </p>
            </div>

            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Cost & Insurance</h3>
              <p className="text-gray-600">
                Evaluate the total cost including consultations, follow-ups, and medications. Check if the platform accepts insurance, as this can significantly reduce out-of-pocket expenses for psychiatric services.
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
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Therapy Included</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medication Delivery</th>
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
                      {platform.slug === 'cerebral' || platform.slug === 'brightside' || platform.slug === 'talkspace' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {platform.slug === 'cerebral' || platform.slug === 'brightside' || platform.slug === 'talkspace' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {platform.slug === 'cerebral' || platform.slug === 'hims-hers' || platform.slug === 'ro-mind' ? (
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

        {/* Medication Management vs. Therapy-Only */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Medication Management vs. Therapy-Only Platforms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Pill className="h-6 w-6 text-indigo-600 mr-2" />
                Medication Management Platforms
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Access to licensed psychiatrists or psychiatric nurse practitioners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Ability to prescribe medications for mental health conditions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Regular follow-ups to monitor medication effectiveness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Some platforms offer medication delivery services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Higher cost but more comprehensive treatment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Better for conditions that respond well to medication</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <MessageSquare className="h-6 w-6 text-indigo-600 mr-2" />
                Therapy-Only Platforms
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Access to licensed therapists and counselors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Focus on talk therapy and behavioral interventions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">More communication options (text, audio, video)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Generally lower cost than medication management</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Cannot prescribe medications</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">May need to seek medication elsewhere if needed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">When to Choose a Medication Management Platform</h3>
            <p className="text-gray-600 mb-4">
              Consider a medication management platform if:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">You've been diagnosed with a condition that typically responds well to medication (depression, anxiety, ADHD, etc.)</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">You're currently taking psychiatric medications and need ongoing management</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">You've tried therapy alone without sufficient improvement</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">You prefer a comprehensive approach that addresses both psychological and physiological aspects</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">You have insurance that covers psychiatric services</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Safety Considerations */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Safety Considerations</h2>
          
          <p className="text-gray-600 mb-6">
            While online medication management platforms offer convenience and accessibility, there are important safety considerations to keep in mind:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Medical History Disclosure</h3>
              <p className="text-gray-600 mb-4">
                Always provide complete and accurate information about your medical history, current medications, and symptoms. This ensures providers can make safe prescribing decisions and avoid potentially dangerous drug interactions.
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">Emergency Situations</h3>
              <p className="text-gray-600">
                Online platforms are not equipped to handle psychiatric emergencies. If you're experiencing suicidal thoughts, severe side effects, or other urgent issues, contact emergency services or go to your nearest emergency room.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Medication Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Some medications require regular monitoring through lab tests or vital sign checks. Ensure the platform has protocols for necessary monitoring or can coordinate with local providers for these services.
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">Controlled Substances</h3>
              <p className="text-gray-600">
                Many online platforms have limitations on prescribing controlled substances (like certain ADHD medications or benzodiazepines) due to regulatory restrictions. If you need these medications, check the platform's policies or consider in-person care.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Recommendation</h2>
          <p className="text-gray-600 mb-6">
            Based on our comprehensive analysis, <strong>Cerebral</strong> stands out as the best overall medication management therapy platform for most users. Its combination of integrated medication and therapy services, convenient medication delivery, insurance coverage options, and comprehensive care model makes it a versatile choice for various mental health conditions.
          </p>
          <p className="text-gray-600 mb-6">
            However, the best platform for you depends on your specific needs:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600"><strong>Talkspace</strong> is best if you have insurance coverage and want flexible communication options with your therapist alongside medication management.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600"><strong>Brightside</strong> is ideal for those specifically dealing with depression or anxiety who want a data-driven approach to medication selection.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600"><strong>Hims & Hers</strong> or <strong>Ro Mind</strong> are good options if you're looking for affordable medication management without therapy and don't have insurance coverage.</span>
            </li>
          </ul>
          <p className="text-gray-600">
            Remember that the most effective mental health treatment is often personalized to your specific needs, preferences, and circumstances. Consider consulting with your primary care provider before starting any new mental health treatment plan.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect Mental Health Solution</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the right medication management platform for your specific needs.
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
              to="/best/platforms/best-medication-therapy-platforms"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              View All Medication Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationTherapyPlatforms;
