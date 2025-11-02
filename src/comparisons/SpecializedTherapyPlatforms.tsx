import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, Heart, Users, Brain, MessageSquare, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import MetaTags from '../components/MetaTags';

const SpecializedTherapyPlatforms = () => {
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

  // Platform categories and data
  const categories = [
    {
      name: 'Relationship Focused',
      description: 'Platforms specializing in couples therapy, marriage counseling, and relationship issues.',
      platforms: [
        {
          name: 'ReGain',
          slug: 'regain',
          image: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          rating: 4.3,
          price: '$60-$90/week',
          description: 'ReGain specializes in relationship counseling, offering therapy for couples and individuals dealing with relationship issues. Their platform connects users with licensed therapists experienced in marriage and couples counseling.',
          features: ['Couples therapy', 'Individual therapy for relationship issues', 'Shared couple\'s account', 'Messaging', 'Live sessions', 'Worksheets', 'Mobile app'],
          pros: ['Specialized relationship therapists', 'Option for joint or individual sessions', 'Shared account for couples', 'Affordable compared to in-person couples therapy', 'Convenient scheduling', 'Privacy and discretion'],
          cons: ['No three-way live sessions', 'No insurance coverage', 'Limited therapist selection process', 'No free trial', 'No medication management', 'Limited communication options'],
          bestFor: 'Couples seeking affordable relationship counseling with flexible scheduling'
        },
        {
          name: 'Lasting',
          slug: 'lasting',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          rating: 4.1,
          price: '$15-$30/month or $199/year',
          description: 'Lasting offers a self-guided relationship therapy app with optional coaching. It provides structured programs based on research-backed approaches to improve communication, intimacy, and conflict resolution in relationships.',
          features: ['Self-guided programs', 'Relationship assessment', 'Daily exercises', 'Progress tracking', 'Optional coaching', 'Audio sessions', 'Personalized plan'],
          pros: ['Very affordable', 'Research-based approach', 'Self-paced learning', 'Personalized to relationship needs', 'No scheduling required', 'Accessible anytime'],
          cons: ['Limited live interaction with therapists', 'Self-guided (requires discipline)', 'Not suitable for severe relationship issues', 'No insurance coverage', 'Less accountability than traditional therapy'],
          bestFor: 'Couples seeking affordable, self-guided relationship improvement tools'
        }
      ]
    },
    {
      name: 'Identity Specific',
      description: 'Platforms catering to specific demographics and identity groups with specialized therapists.',
      platforms: [
        {
          name: 'Pride Counseling',
          slug: 'pride-counseling',
          image: 'https://images.unsplash.com/photo-1516149893016-813d9a01d5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          rating: 4.4,
          price: '$60-$90/week',
          description: 'Pride Counseling specializes in therapy for the LGBTQ+ community, connecting users with therapists who have expertise in issues affecting LGBTQ+ individuals. Their platform offers a safe and supportive environment for addressing identity-related concerns.',
          features: ['LGBTQ+ specialized therapists', 'Messaging', 'Live chat', 'Phone sessions', 'Video sessions', 'Identity-affirming care', 'Mobile app'],
          pros: ['Therapists experienced with LGBTQ+ issues', 'Safe and affirming environment', 'Multiple communication methods', 'Financial aid available', 'Complete anonymity if desired', 'Specialized matching process'],
          cons: ['No insurance coverage', 'No medication management', 'Limited therapist selection in some areas', 'No free trial', 'Session length limitations'],
          bestFor: 'LGBTQ+ individuals seeking identity-affirming therapy in a safe environment'
        },
        {
          name: 'Ayana Therapy',
          slug: 'ayana-therapy',
          image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          rating: 4.2,
          price: '$60-$90/week',
          description: 'Ayana Therapy focuses on providing culturally competent mental health care for marginalized communities. They match users with therapists who share their cultural background, identity, or lived experience to ensure understanding and appropriate care.',
          features: ['Cultural matching algorithm', 'Diverse therapist network', 'Messaging', 'Video sessions', 'Cultural competency', 'Identity-specific care', 'Mobile app'],
          pros: ['Culturally responsive care', 'Therapists from diverse backgrounds', 'Focus on marginalized communities', 'Matching based on shared identities', 'Specialized for BIPOC, LGBTQ+, and other minorities', 'Trauma-informed approach'],
          cons: ['Newer platform with smaller network', 'Limited insurance coverage', 'No medication management', 'Higher cost without financial aid', 'Limited communication options'],
          bestFor: 'BIPOC, LGBTQ+, and other marginalized individuals seeking culturally competent care'
        },
        {
          name: 'Teen Counseling',
          slug: 'teen-counseling',
          image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          rating: 4.3,
          price: '$60-$90/week',
          description: 'Teen Counseling provides online therapy specifically for adolescents aged 13-19. They connect teens with licensed therapists experienced in adolescent mental health, offering a private space for teens to address their concerns with professional guidance.',
          features: ['Teen-focused therapy', 'Parental consent and oversight', 'Private teen space', 'Messaging', 'Live chat', 'Phone sessions', 'Video sessions'],
          pros: ['Specialized for adolescent issues', 'Balance of parental involvement and teen privacy', 'Multiple communication methods', 'Therapists experienced with teens', 'Accessible on any device', 'Affordable compared to in-person therapy'],
          cons: ['No insurance coverage', 'No medication management', 'Limited crisis support', 'Not suitable for severe mental health conditions', 'Parents cannot join sessions'],
          bestFor: 'Teenagers and their parents seeking accessible mental health support'
        }
      ]
    },
    {
      name: 'Condition Focused',
      description: 'Platforms specializing in specific mental health conditions with targeted treatment approaches.',
      platforms: [
        {
          name: 'Equip',
          slug: 'equip',
          image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          rating: 4.5,
          price: 'Insurance-based (varies)',
          description: 'Equip specializes in evidence-based treatment for eating disorders using Family-Based Treatment (FBT). They provide a comprehensive care team including therapists, dietitians, physicians, and peer mentors to support recovery.',
          features: ['Eating disorder treatment', 'Family-Based Treatment (FBT)', 'Care team approach', 'Medical monitoring', 'Nutritional support', 'Peer mentorship', 'Family support'],
          pros: ['Specialized eating disorder expertise', 'Evidence-based treatment model', 'Comprehensive care team', 'Insurance accepted', 'Family involvement', 'Medical and nutritional components', 'Virtual delivery of gold-standard care'],
          cons: ['Higher cost without insurance', 'Limited to eating disorder treatment', 'Requires family participation', 'Not available in all states', 'Intensive time commitment', 'Not suitable for all levels of care'],
          bestFor: 'Individuals with eating disorders seeking comprehensive, family-involved treatment'
        },
        {
          name: 'NOCD',
          slug: 'nocd',
          image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          rating: 4.6,
          price: '$170-$200 per session (insurance accepted)',
          description: 'NOCD specializes in treatment for Obsessive-Compulsive Disorder (OCD) using Exposure and Response Prevention (ERP) therapy. They connect users with specialized OCD therapists and provide tools for between-session support.',
          features: ['OCD specialized treatment', 'Exposure and Response Prevention (ERP)', 'OCD-trained therapists', 'Between-session tools', 'Progress tracking', 'Peer community', 'Insurance accepted'],
          pros: ['Gold-standard OCD treatment', 'Specialized OCD therapists', 'Insurance coverage', 'Evidence-based approach', 'Comprehensive app for ERP practice', 'Peer support community', 'Quick access to care'],
          cons: ['Limited to OCD treatment', 'Higher cost without insurance', 'Intensive treatment approach', 'Not suitable for all comorbidities', 'Limited medication management', 'Requires significant commitment'],
          bestFor: 'Individuals with OCD seeking specialized ERP therapy with insurance coverage'
        },
        {
          name: 'Mindbloom',
          slug: 'mindbloom',
          image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          rating: 4.2,
          price: '$1,000+ per treatment program',
          description: 'Mindbloom provides ketamine therapy for depression, anxiety, and PTSD. Their platform combines at-home ketamine treatment with preparation and integration therapy sessions to maximize therapeutic benefits.',
          features: ['Ketamine therapy', 'At-home treatment', 'Preparation sessions', 'Integration therapy', 'Medical screening', 'Guided experiences', 'Follow-up support'],
          pros: ['Alternative treatment for resistant conditions', 'Medical supervision', 'Therapeutic support', 'Convenient at-home sessions', 'Potentially rapid results', 'Structured program', 'Integration support'],
          cons: ['High cost', 'No insurance coverage', 'Not suitable for all conditions', 'Requires medical clearance', 'Limited availability by state', 'Potential for side effects', 'Emerging treatment approach'],
          bestFor: 'Individuals with treatment-resistant depression or anxiety seeking alternative approaches'
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Comparing Specialized Therapy Platforms | RealMindSolutions"
        description="Compare the top specialized online therapy platforms offering targeted mental health services for specific conditions, relationships, and identity groups."
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Specialized Therapy Platforms Compared</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive comparison of online platforms offering specialized therapy services for specific needs, conditions, and demographics.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What Are Specialized Therapy Platforms?</h2>
          <p className="text-gray-600 mb-4">
            Specialized therapy platforms focus on providing targeted mental health services for specific conditions, demographics, or therapeutic approaches. Unlike general therapy platforms that offer broad mental health support, these specialized services employ therapists with expertise in particular areas and often use treatment models designed for specific needs.
          </p>
          <p className="text-gray-600 mb-4">
            These platforms can be particularly effective for individuals who need focused care for conditions like eating disorders or OCD, couples seeking relationship counseling, or people from specific demographic groups who want culturally competent care from therapists who understand their unique experiences.
          </p>
          <p className="text-gray-600">
            In this comparison, we evaluate specialized therapy platforms across three main categories: relationship-focused, identity-specific, and condition-focused services. We assess each platform based on its specialized expertise, treatment approaches, provider qualifications, and overall value for specific needs.
          </p>
        </div>

        {/* Key Considerations Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Considerations When Choosing a Specialized Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Specialized Expertise</h3>
              <p className="text-gray-600">
                Look for platforms with therapists who have specific training, certification, and experience in your area of need. Specialized expertise often leads to more effective treatment outcomes.
              </p>
            </div>

            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Treatment Approach</h3>
              <p className="text-gray-600">
                Consider whether the platform uses evidence-based treatment models specific to your condition or situation. Some specialized platforms offer structured programs or proprietary approaches.
              </p>
            </div>

            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Cost & Insurance</h3>
              <p className="text-gray-600">
                Specialized platforms often have different pricing models than general therapy services. Some condition-focused platforms may accept insurance, while others require out-of-pocket payment.
              </p>
            </div>
          </div>
        </div>

        {/* Categories and Platforms */}
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{category.name} Platforms</h2>
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Insurance</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {category.platforms.map((platform) => (
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
                          {platform.slug === 'equip' || platform.slug === 'nocd' ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {platform.features[0]}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {platform.bestFor.length > 40 ? `${platform.bestFor.substring(0, 40)}...` : platform.bestFor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Detailed Platform Reviews */}
            {category.platforms.map((platform, index) => (
              <div key={platform.slug} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-6 md:mb-0">
                      <div className="flex items-center mb-3">
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
        ))}

        {/* Specialized vs. General Platforms */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Specialized vs. General Therapy Platforms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Brain className="h-6 w-6 text-indigo-600 mr-2" />
                Specialized Platforms
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Therapists with specific expertise in your condition or situation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Evidence-based treatment approaches tailored to specific needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Community of users with similar experiences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Specialized tools and resources for specific conditions</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Often more expensive or limited insurance coverage</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">May not address comorbid conditions or broader mental health needs</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="h-6 w-6 text-indigo-600 mr-2" />
                General Therapy Platforms
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Broader range of therapists and therapeutic approaches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Can address multiple mental health concerns simultaneously</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Often more affordable with financial aid options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Flexibility to switch focus as needs change</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Therapists may have less specialized expertise</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">May lack condition-specific tools and resources</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">When to Choose a Specialized Platform</h3>
            <p className="text-gray-600 mb-4">
              Consider a specialized therapy platform if:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">You have a specific condition that requires specialized treatment (e.g., OCD, eating disorders)</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">You're seeking therapy for relationship issues as a couple</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">You want a therapist who understands your specific cultural background or identity</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">You've tried general therapy without success and need a more targeted approach</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">You're looking for a specific evidence-based treatment approach for your condition</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Recommendations</h2>
          <p className="text-gray-600 mb-6">
            Based on our comprehensive analysis of specialized therapy platforms, here are our top recommendations by category:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Best for Relationship Counseling</h3>
              <p className="text-gray-600">
                <strong>ReGain</strong> stands out for couples therapy with its specialized relationship therapists, shared couple's account, and affordable pricing compared to traditional couples counseling. It's ideal for couples who want to work on their relationship together with professional guidance.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Best for LGBTQ+ Individuals</h3>
              <p className="text-gray-600">
                <strong>Pride Counseling</strong> offers a safe, affirming environment with therapists experienced in LGBTQ+ issues. Their specialized matching process ensures clients connect with therapists who understand their unique experiences and challenges.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Best for Culturally Responsive Care</h3>
              <p className="text-gray-600">
                <strong>Ayana Therapy</strong> excels in providing culturally competent care for marginalized communities. Their matching algorithm connects clients with therapists who share their cultural background or identity, ensuring understanding and appropriate care.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Best for Specific Conditions</h3>
              <p className="text-gray-600">
                <strong>NOCD</strong> for OCD treatment and <strong>Equip</strong> for eating disorders offer gold-standard, evidence-based treatment approaches with specialized therapists and comprehensive support. Both accept insurance, making specialized care more accessible.
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 mt-6">
            Remember that the most effective therapy experience depends on finding the right match between your specific needs and a platform's specialized offerings. Consider factors like treatment approach, provider expertise, and cost when making your decision.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect Specialized Therapy Match</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the right specialized therapy platform for your specific needs.
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
              to="/best/platforms/best-specialized-platforms"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              View All Specialized Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializedTherapyPlatforms;
