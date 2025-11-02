import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Search, Heart, Users, Brain, DollarSign } from 'lucide-react';
import Button from '../../../components/Button';
import HowWeReviewed from '../../../components/HowWeReviewed';
import MetaTags from '../../../components/MetaTags';

const BestSpecializedPlatforms = () => {
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
      name: 'ReGain',
      slug: 'regain',
      category: 'Couples Therapy',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: '$60-$90/week',
      description: 'Specialized platform for couples therapy and relationship counseling',
      features: ['Joint therapy sessions', 'Relationship-focused resources', 'Specialized couples therapists'],
      pros: ['Dedicated couples platform', 'Joint or individual sessions', 'Relationship worksheets', 'Experienced couples counselors'],
      cons: ['No insurance coverage', 'No medication management', 'Only for relationship issues', 'Both partners must use same device for joint sessions'],
      bestFor: 'Couples seeking relationship counseling'
    },
    {
      name: 'Pride Counseling',
      slug: 'pride-counseling',
      category: 'LGBTQ+ Therapy',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.4,
      price: '$60-$90/week',
      description: 'LGBTQ+-focused therapy platform with specialized counselors',
      features: ['LGBTQ+ specialized therapists', 'Identity-affirming care', 'Community resources'],
      pros: ['LGBTQ+ affirming therapists', 'Identity-specific support', 'Cultural competency', 'Specialized resources'],
      cons: ['No insurance coverage', 'Limited therapist selection', 'No medication management', 'Higher cost without financial aid'],
      bestFor: 'LGBTQ+ individuals seeking affirming therapy'
    },
    {
      name: 'Teen Counseling',
      slug: 'teen-counseling',
      category: 'Teen Therapy',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: '$60-$90/week',
      description: 'Online therapy platform specifically designed for teenagers',
      features: ['Teen-focused therapists', 'Parent involvement options', 'Age-appropriate resources'],
      pros: ['Specialized teen therapists', 'Parent portal', 'Age-appropriate approach', 'Flexible communication'],
      cons: ['No insurance coverage', 'Requires parent consent', 'No medication management', 'Limited to ages 13-19'],
      bestFor: 'Teenagers and their parents'
    },
    {
      name: 'NOCD',
      slug: 'nocd',
      category: 'OCD Treatment',
      image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      price: 'Insurance-based',
      description: 'Specialized platform for OCD treatment using ERP therapy',
      features: ['ERP specialists', 'OCD-specific tools', 'Between-session support'],
      pros: ['OCD-specialized therapists', 'ERP therapy focus', 'Insurance accepted', 'Evidence-based treatment'],
      cons: ['Only for OCD treatment', 'Limited availability', 'Higher cost without insurance', 'Waiting lists in some areas'],
      bestFor: 'Individuals seeking OCD treatment'
    },
    {
      name: 'Equip',
      slug: 'equip',
      category: 'Eating Disorders',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: 'Insurance-based',
      description: 'Comprehensive eating disorder treatment platform',
      features: ['Treatment team approach', 'Family-based treatment', 'Nutritional support'],
      pros: ['Specialized ED treatment', 'Insurance coverage', 'Family involvement', 'Comprehensive care'],
      cons: ['Limited availability', 'Intensive commitment', 'Higher cost', 'Not for all ED types'],
      bestFor: 'Individuals with eating disorders'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Best Specialized Online Therapy Platforms | RealMindSolutions"
        description="Compare the top specialized online therapy platforms for specific conditions, demographics, and therapeutic approaches."
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Specialized Online Therapy Platforms</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare platforms that focus on specific mental health conditions, demographics, or therapeutic approaches.
          </p>
          <div className="flex justify-center">
            <Button
              as={Link}
              to="/tools/matchers/therapy-platform-matcher"
              variant="primary"
              size="lg"
              icon={Search}
            >
              Find your perfect therapy match
            </Button>
          </div>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-pink-500 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Relationship Focused</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Platforms specializing in couples therapy, marriage counseling, and relationship issues.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                <span>ReGain</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                <span>Lasting</span>
              </li>
            </ul>
            <Link to="#relationship-platforms" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              View details <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-purple-500 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Identity Specific</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Platforms catering to specific demographics and identities.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                <span>Pride Counseling</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                <span>Teen Counseling</span>
              </li>
            </ul>
            <Link to="#identity-platforms" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              View details <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-emerald-500 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Condition Focused</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Platforms specializing in specific mental health conditions.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                <span>NOCD</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                <span>Equip</span>
              </li>
            </ul>
            <Link to="#condition-platforms" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              View details <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Detailed Platform Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Detailed Platform Comparisons</h2>

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
                      <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {platform.category}
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

        {/* Choosing the Right Platform */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Specialized Platform</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Expertise Match</h3>
              <p className="text-gray-600">
                Choose a platform that specializes in your specific needs, whether that's relationship counseling, identity-specific support, or condition-focused treatment.
              </p>
            </div>

            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Cultural Competence</h3>
              <p className="text-gray-600">
                Look for platforms with therapists who understand your background, identity, and specific challenges you may face.
              </p>
            </div>

            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Cost Consideration</h3>
              <p className="text-gray-600">
                Consider insurance coverage, subscription costs, and whether specialized care justifies potentially higher prices.
              </p>
            </div>
          </div>
        </div>

        {/* How We Review Section */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Therapy Match?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the specialized platform that best fits your unique needs.
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
      </div>
    </div>
  );
};

export default BestSpecializedPlatforms;
