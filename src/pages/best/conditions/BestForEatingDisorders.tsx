import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import Button from '../../../components/Button';
import MetaTags from '../../../components/MetaTags';

const BestForEatingDisorders = () => {
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
      name: 'Equip',
      slug: 'equip',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      price: 'Insurance-based (varies)',
      description: 'Equip specializes in evidence-based treatment for eating disorders using Family-Based Treatment (FBT). They provide a comprehensive care team including therapists, dietitians, physicians, and peer mentors to support recovery.',
      features: ['Family-Based Treatment (FBT)', 'Care team approach', 'Medical monitoring', 'Nutritional support', 'Peer mentorship', 'Family support', 'Insurance accepted'],
      pros: ['Gold-standard eating disorder treatment', 'Comprehensive care team', 'Insurance coverage', 'Family involvement', 'Medical and nutritional components', 'Virtual delivery of specialized care', 'Peer support from recovered individuals'],
      cons: ['Higher cost without insurance', 'Requires family participation', 'Not available in all states', 'Intensive time commitment', 'Not suitable for all levels of care', 'Limited to eating disorder treatment'],
      bestFor: 'Individuals with eating disorders seeking comprehensive, family-involved treatment with insurance coverage'
    },
    {
      name: 'Within Health',
      slug: 'within-health',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: 'Insurance-based (varies)',
      description: 'Within Health offers virtual eating disorder treatment with a whole-person approach. Their program includes therapy, nutrition counseling, meal support, and medical monitoring, all delivered through their app and virtual sessions.',
      features: ['Virtual care', 'Meal support', 'Therapy sessions', 'Nutritional counseling', 'Medical monitoring', 'Group support', 'Insurance accepted'],
      pros: ['Comprehensive eating disorder care', 'Flexible virtual format', 'Insurance coverage', 'Meal support and monitoring', 'Medical oversight', 'Group and individual therapy', 'Evidence-based approaches'],
      cons: ['Limited availability in some states', 'Higher cost without insurance', 'Intensive program may not fit all schedules', 'Not suitable for severe medical complications', 'Requires smartphone/internet access', 'Limited to eating disorder treatment'],
      bestFor: 'Adults seeking flexible, comprehensive eating disorder treatment that fits into their daily lives'
    },
    {
      name: 'Eating Recovery Center',
      slug: 'eating-recovery-center',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      price: 'Insurance-based (varies)',
      description: 'Eating Recovery Center offers virtual and in-person treatment for eating disorders at various levels of care. Their virtual intensive outpatient program provides structured therapy, nutrition counseling, and medical monitoring.',
      features: ['Multiple levels of care', 'Virtual and in-person options', 'Group therapy', 'Individual therapy', 'Nutritional counseling', 'Medical monitoring', 'Family involvement'],
      pros: ['Comprehensive eating disorder expertise', 'Various treatment intensity options', 'Insurance accepted', 'Evidence-based approaches', 'Specialized for all eating disorders', 'Transition between levels of care', 'Family support programs'],
      cons: ['Higher cost without insurance', 'Limited virtual program availability', 'Intensive time commitment', 'May require travel for in-person care', 'Structured program with less flexibility', 'Complex insurance verification process'],
      bestFor: 'Individuals needing various levels of eating disorder care with the option to transition between programs as recovery progresses'
    },
    {
      name: 'Recovery Record',
      slug: 'recovery-record',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: 'Free app (therapist connection may have costs)',
      description: 'Recovery Record is a mobile app for eating disorder recovery that can be used independently or in conjunction with a treatment provider. It offers meal logging, coping skills, mood tracking, and secure messaging with your treatment team.',
      features: ['Meal logging', 'Coping skills', 'Mood tracking', 'Treatment team connection', 'Progress monitoring', 'Journal prompts', 'Community support'],
      pros: ['Free to use', 'Can connect with treatment providers', 'Privacy-focused', 'Evidence-based tools', 'Accessible anytime', 'Self-monitoring capabilities', 'Supplements formal treatment'],
      cons: ['Not a replacement for professional treatment', 'Limited direct therapeutic support', 'Requires self-motivation', 'No medical monitoring', 'Therapist connection requires separate arrangement', 'Basic interface'],
      bestFor: 'Individuals who want a supportive tool to supplement professional eating disorder treatment or maintain recovery'
    },
    {
      name: 'Arise',
      slug: 'arise',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.4,
      price: 'Insurance-based (varies)',
      description: 'Arise offers virtual eating disorder treatment with a focus on binge eating disorder and emotional eating. Their program combines therapy, nutrition counseling, and body image work in a flexible virtual format.',
      features: ['Specialized for binge eating', 'Group therapy', 'Individual therapy', 'Nutritional counseling', 'Body image work', 'Virtual format', 'Insurance accepted'],
      pros: ['Specialized for binge eating disorder', 'Flexible scheduling', 'Insurance coverage', 'Evidence-based approaches', 'Body-positive philosophy', 'Addresses emotional eating', 'Virtual accessibility'],
      cons: ['Less comprehensive for other eating disorders', 'Limited availability in some states', 'Higher cost without insurance', 'No medical component for complex cases', 'Newer provider with less track record', 'Limited group session times'],
      bestFor: 'Individuals with binge eating disorder or emotional eating seeking specialized virtual treatment'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Best Online Therapy for Eating Disorders | RealMindSolutions"
        description="Compare the top online therapy platforms specializing in eating disorder treatment, including anorexia, bulimia, binge eating disorder, and more."
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Online Therapy for Eating Disorders</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Specialized online platforms offering evidence-based treatment for anorexia, bulimia, binge eating disorder, and other eating disorders.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Finding Specialized Care for Eating Disorders</h2>
          <p className="text-gray-600 mb-4">
            Eating disorders are complex mental health conditions that require specialized treatment approaches. Online therapy platforms that specialize in eating disorders offer evidence-based interventions delivered by professionals with specific expertise in these conditions.
          </p>
          <p className="text-gray-600 mb-4">
            The most effective eating disorder treatment typically involves a multidisciplinary approach, combining psychological therapy, nutritional counseling, and sometimes medical monitoring. Many specialized online platforms now offer comprehensive care teams that can address all these aspects virtually.
          </p>
          <p className="text-gray-600">
            In this guide, we evaluate the top online platforms specializing in eating disorder treatment, comparing their approaches, features, and suitability for different types of eating disorders and recovery stages.
          </p>
        </div>

        {/* Key Considerations Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Considerations for Eating Disorder Treatment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Treatment Approach</h3>
              <p className="text-gray-600 mb-4">
                Look for platforms that offer evidence-based approaches for eating disorders, such as:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Family-Based Treatment (FBT)</strong> - Particularly effective for adolescents, involving parents in the recovery process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Cognitive Behavioral Therapy (CBT-E)</strong> - Specialized for eating disorders, addressing thoughts and behaviors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Dialectical Behavior Therapy (DBT)</strong> - Helpful for emotional regulation and distress tolerance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Acceptance and Commitment Therapy (ACT)</strong> - Focuses on psychological flexibility and values-based action</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Comprehensive Care</h3>
              <p className="text-gray-600 mb-4">
                Effective eating disorder treatment typically requires multiple components:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Therapy</strong> - Individual and/or group sessions with eating disorder specialists</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Nutritional counseling</strong> - Work with registered dietitians specialized in eating disorders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Medical monitoring</strong> - Regular check-ins with medical professionals to monitor physical health</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Meal support</strong> - Guidance and accountability around meals and eating behaviors</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Level of Care Considerations</h3>
            <p className="text-gray-600 mb-4">
              Online therapy is not appropriate for all stages of eating disorder recovery. Consider these guidelines:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>Medical emergencies</strong> - If you're experiencing severe medical complications (significant weight loss, electrolyte imbalances, cardiac issues), seek immediate in-person medical care</span>
              </li>
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>Severe cases</strong> - Those with very severe eating disorders may initially need higher levels of care (residential or inpatient treatment)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>Moderate cases</strong> - Virtual intensive outpatient programs can be effective for moderate eating disorders with medical stability</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>Mild cases or maintenance</strong> - Standard online therapy can work well for mild cases or maintaining recovery</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Platform Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12 overflow-hidden">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Online Platforms for Eating Disorder Treatment</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Insurance</th>
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
                      {platform.features.includes('Insurance accepted') ? (
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
                    <div className="mb-6">
                      <p className="text-gray-600">{platform.price}</p>
                    </div>
                    <div className="space-y-2">
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

        {/* Types of Eating Disorders Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Eating Disorders and Treatment Considerations</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Anorexia Nervosa</h3>
              <p className="text-gray-600 mb-3">
                Characterized by restrictive eating, intense fear of weight gain, and distorted body image. Treatment considerations:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Often requires higher levels of care initially, especially with medical complications</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Family-Based Treatment (FBT) shows strong evidence for adolescents</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Regular medical monitoring is essential</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Recommended platforms:</strong> Equip, Within Health, Eating Recovery Center</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Bulimia Nervosa</h3>
              <p className="text-gray-600 mb-3">
                Characterized by cycles of binge eating followed by compensatory behaviors like purging. Treatment considerations:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">CBT-E has strong evidence for effectiveness</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Regular meal patterns and nutritional rehabilitation are important</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Medical monitoring for electrolyte imbalances may be needed</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Recommended platforms:</strong> Within Health, Eating Recovery Center, Equip</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Binge Eating Disorder</h3>
              <p className="text-gray-600 mb-3">
                Characterized by recurrent episodes of eating large amounts of food with a sense of loss of control. Treatment considerations:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">CBT, DBT, and interpersonal therapy show good evidence</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Focus on emotional regulation and binge triggers</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Non-diet approach to nutrition is often beneficial</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Recommended platforms:</strong> Arise, Within Health, Recovery Record</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Other Specified Feeding or Eating Disorders (OSFED)</h3>
              <p className="text-gray-600 mb-3">
                Includes atypical presentations that don't meet full criteria for other eating disorders. Treatment considerations:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Treatment approach depends on specific symptoms</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Can be just as serious as named eating disorders</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Comprehensive assessment is important</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Recommended platforms:</strong> Within Health, Eating Recovery Center, Equip</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion and Recommendations */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Recommendations</h2>
          <p className="text-gray-600 mb-6">
            Based on our comprehensive analysis, here are our top recommendations for eating disorder treatment platforms:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Best Overall: Equip</h3>
              <p className="text-gray-600">
                Equip stands out for its comprehensive approach to eating disorder treatment using the gold-standard Family-Based Treatment (FBT) model. Their care team includes therapists, dietitians, physicians, and peer mentors, providing holistic support for recovery. With insurance coverage and virtual delivery, they make specialized care accessible to many.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Best for Adults: Within Health</h3>
              <p className="text-gray-600">
                Within Health offers a flexible, comprehensive approach that works well for adults with busy lives. Their whole-person approach includes therapy, nutrition counseling, and medical monitoring in a virtual format that can fit into daily routines. Their meal support feature provides practical help with one of the most challenging aspects of recovery.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Best for Various Levels of Care: Eating Recovery Center</h3>
              <p className="text-gray-600">
                Eating Recovery Center excels in providing multiple levels of care, from intensive outpatient to residential treatment. This makes them ideal for individuals who may need to transition between different intensities of treatment throughout their recovery journey. Their virtual intensive outpatient program offers structured support with insurance coverage.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Best Supplemental Tool: Recovery Record</h3>
              <p className="text-gray-600">
                Recovery Record provides an excellent free tool to supplement professional treatment or maintain recovery. Its meal logging, coping skills, and mood tracking features help with self-monitoring, while the option to connect with treatment providers bridges the gap between sessions. This app is particularly valuable for ongoing support in recovery.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Best for Binge Eating Disorder: Arise</h3>
              <p className="text-gray-600">
                Arise specializes in binge eating disorder and emotional eating, with a body-positive approach that addresses the psychological aspects of these conditions. Their flexible virtual format combines therapy, nutrition counseling, and body image work, making them ideal for those specifically seeking help with binge eating behaviors.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Important Safety Note</h3>
            <p className="text-gray-600 mb-4">
              Eating disorders can be life-threatening conditions that require appropriate levels of care. If you or someone you know is experiencing severe symptoms, please seek immediate medical attention. Online therapy is not appropriate for all stages of eating disorder recovery, particularly in cases with medical complications or severe symptoms.
            </p>
            <p className="text-gray-600">
              Always consult with a healthcare professional to determine the appropriate level of care for your specific situation. The platforms reviewed here may be components of a comprehensive treatment plan but should be used under appropriate professional guidance.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find the Right Eating Disorder Treatment</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our assessment to get matched with the most appropriate eating disorder treatment option for your specific needs.
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
              to="/conditions-az/eating-disorders"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Learn More About Eating Disorders
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestForEatingDisorders;
