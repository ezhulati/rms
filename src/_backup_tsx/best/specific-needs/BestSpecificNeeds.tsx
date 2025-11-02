import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Search, Heart, Users, Brain, DollarSign } from 'lucide-react';
import Button from '../../../components/Button';
import HowWeReviewed from '../../../components/HowWeReviewed';
import MetaTags from '../../../components/MetaTags';

const BestSpecificNeeds = () => {
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
      category: 'Accessibility',
      image: '/images/concepts/bestspecificneeds.jpg',
      rating: 4.5,
      price: '$60-$90/week',
      description: 'Offers financial aid and accessibility features for users with disabilities',
      features: ['Financial aid program', 'Screen reader compatibility', 'Mobile accessibility'],
      pros: ['Sliding scale pricing', 'Accessibility features', 'Large therapist network', 'Multiple communication methods'],
      cons: ['Limited insurance coverage', 'No medication management', 'May require stable internet', 'Text-based therapy limitations'],
      bestFor: 'Users seeking affordable therapy with accessibility needs'
    },
    {
      name: 'Talkspace',
      slug: 'talkspace',
      category: 'Insurance Coverage',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.4,
      price: '$65-$99/week',
      description: 'Extensive insurance coverage options for therapy services',
      features: ['Insurance partnerships', 'HSA/FSA eligible', 'Medication management'],
      pros: ['Works with many insurers', 'Medication services', 'Multiple therapy modalities', 'Psychiatry integration'],
      cons: ['Higher cost without insurance', 'Limited live session options', 'Therapist matching limitations', 'Response time varies'],
      bestFor: 'Users with insurance seeking comprehensive mental health care'
    },
    {
      name: 'Cerebral',
      slug: 'cerebral',
      category: 'Medication Management',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.3,
      price: '$85-$325/month',
      description: 'Combined therapy and medication management services',
      features: ['Medication delivery', 'Psychiatric care', 'Therapy options'],
      pros: ['Integrated medication services', 'Monthly subscription model', 'Regular provider check-ins', 'Medication delivery'],
      cons: ['Not available in all states', 'Limited therapy session length', 'Subscription commitment', 'Not for severe conditions'],
      bestFor: 'Users needing both therapy and medication management'
    },
    {
      name: 'Brightside',
      slug: 'brightside',
      category: 'Depression & Anxiety',
      image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.2,
      price: '$95-$349/month',
      description: 'Specialized in depression and anxiety treatment with precision prescribing',
      features: ['Precision prescribing', 'Evidence-based therapy', 'Progress tracking'],
      pros: ['Specialized for depression/anxiety', 'Data-driven approach', 'Insurance accepted', 'Integrated care model'],
      cons: ['Limited scope of conditions', 'Higher cost without insurance', 'Fewer communication options', 'Not for complex cases'],
      bestFor: 'Users with depression or anxiety seeking medication and therapy'
    },
    {
      name: 'Calmerry',
      slug: 'calmerry',
      category: 'Affordability',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.1,
      price: '$42-$68/week',
      description: 'Budget-friendly online therapy with flexible plans',
      features: ['Affordable pricing', 'Flexible subscription plans', 'Text and video options'],
      pros: ['Lower cost options', 'No subscription commitment', 'Licensed therapists', 'User-friendly platform'],
      cons: ['No insurance acceptance', 'No medication services', 'Limited therapist selection', 'Fewer specialty areas'],
      bestFor: 'Budget-conscious users seeking quality therapy'
    }
  ];

  // Need categories
  const needCategories = [
    {
      title: "Accessibility & Affordability",
      icon: <DollarSign className="h-8 w-8 text-green-500 mr-3" />,
      description: "Platforms with financial aid, sliding scale pricing, and accessibility features for users with disabilities.",
      platforms: ["BetterHelp", "Calmerry"]
    },
    {
      title: "Insurance Coverage",
      icon: <CheckCircle className="h-8 w-8 text-blue-500 mr-3" />,
      description: "Platforms that work with insurance providers to reduce out-of-pocket costs.",
      platforms: ["Talkspace", "Brightside"]
    },
    {
      title: "Medication Management",
      icon: <Heart className="h-8 w-8 text-red-500 mr-3" />,
      description: "Platforms offering psychiatric services and medication management alongside therapy.",
      platforms: ["Cerebral", "Brightside", "Talkspace"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Best Online Therapy for Specific Needs | RealMindSolutions"
        description="Find the best online therapy platforms for specific needs including accessibility, insurance coverage, and medication management."
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Online Therapy for Specific Needs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find platforms that address specific requirements like accessibility, insurance coverage, and medication management.
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
          {needCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {category.icon}
                <h2 className="text-xl font-bold text-gray-800">{category.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <ul className="space-y-2 mb-4">
                {category.platforms.map((platform, i) => (
                  <li key={i} className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span>{platform}</span>
                  </li>
                ))}
              </ul>
              <Link to={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-indigo-600 hover:text-indigo-800 flex items-center">
                View details <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          ))}
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Platform for Your Needs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Budget Considerations</h3>
              <p className="text-gray-600">
                Evaluate your budget and insurance coverage. Some platforms offer financial aid, sliding scale pricing, or accept insurance to make therapy more affordable.
              </p>
            </div>

            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Treatment Needs</h3>
              <p className="text-gray-600">
                Consider whether you need therapy only or combined therapy and medication management. Some platforms offer integrated care while others specialize in specific treatment approaches.
              </p>
            </div>

            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Communication Preferences</h3>
              <p className="text-gray-600">
                Think about how you prefer to communicate with your therapist—text, video, phone, or a combination. Different platforms offer various communication methods to suit your comfort level.
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
            Take our personalized assessment to get matched with the platform that best fits your unique needs and preferences.
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

export default BestSpecificNeeds;
