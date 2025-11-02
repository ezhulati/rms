import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, Brain, Shield, Users, Search } from 'lucide-react';
import Button from '../components/Button';
import HowWeReviewed from '../components/HowWeReviewed';

interface SpecialtyReview {
  id: string;
  title: string;
  slug: string;
  condition: string;
  description: string;
  platforms: {
    name: string;
    slug: string;
    rating: number;
    price: string;
    features: string[];
    bestFor: string;
  }[];
  image: string;
}

const specialtyReviews: SpecialtyReview[] = [
  {
    id: 'anxiety',
    title: 'Best Online Therapy for Anxiety',
    slug: 'anxiety-treatment',
    condition: 'Anxiety Disorders',
    description: 'Compare how different platforms handle anxiety treatment, including GAD, social anxiety, and panic disorder.',
    platforms: [
      {
        name: 'BetterHelp',
        slug: 'betterhelp',
        rating: 4.8,
        price: '$60-$90/week',
        features: ['CBT specialists', 'Multiple communication methods', 'Anxiety toolbox', 'Crisis support'],
        bestFor: 'Comprehensive anxiety treatment with flexible communication'
      },
      {
        name: 'Talkspace',
        slug: 'talkspace',
        rating: 4.7,
        price: '$65-$99/week',
        features: ['Anxiety programs', 'Medication management', 'Progress tracking', 'Insurance coverage'],
        bestFor: 'Combined therapy and medication for anxiety'
      },
      {
        name: 'Online-Therapy.com',
        slug: 'online-therapy',
        rating: 4.5,
        price: '$40-$88/week',
        features: ['Structured CBT program', 'Daily feedback', 'Anxiety worksheets', 'Yoga resources'],
        bestFor: 'Structured CBT approach to anxiety'
      }
    ],
    image: '/images/concepts/reviewsspecialty.jpg'
  },
  {
    id: 'depression',
    title: 'Best Online Therapy for Depression',
    slug: 'talkspace-for-depression',
    condition: 'Depression',
    description: 'Evaluate platforms specializing in depression treatment, including major depressive disorder and persistent depressive disorder.',
    platforms: [
      {
        name: 'Talkspace',
        slug: 'talkspace',
        rating: 4.8,
        price: '$65-$99/week',
        features: ['Depression specialists', 'Medication management', 'Structured programs', 'Insurance accepted'],
        bestFor: 'Comprehensive depression care with medication options'
      },
      {
        name: 'BetterHelp',
        slug: 'betterhelp',
        rating: 4.6,
        price: '$60-$90/week',
        features: ['Multiple approaches', 'Unlimited messaging', 'Live sessions', 'Financial aid'],
        bestFor: 'Flexible depression treatment options'
      },
      {
        name: 'Brightside',
        slug: 'brightside',
        rating: 4.5,
        price: '$95-$349/month',
        features: ['Depression focus', 'Medication delivery', 'Data-driven care', 'Insurance options'],
        bestFor: 'Data-driven depression treatment'
      }
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ptsd',
    title: 'Best Online Therapy for PTSD',
    slug: 'online-therapy-for-ptsd',
    condition: 'Post-Traumatic Stress Disorder',
    description: 'Evaluate how online therapy platforms address PTSD treatment, including trauma-focused approaches and specialized care.',
    platforms: [
      {
        name: 'Talkspace',
        slug: 'talkspace',
        rating: 4.2,
        price: '$65-$99/week',
        features: ['Trauma specialists', 'EMDR therapy', 'CPT approach', 'Medication options'],
        bestFor: 'Comprehensive PTSD treatment with medication management'
      },
      {
        name: 'BetterHelp',
        slug: 'betterhelp',
        rating: 3.8,
        price: '$60-$90/week',
        features: ['Trauma-informed care', 'CPT specialists', 'Flexible scheduling', 'Crisis support'],
        bestFor: 'Accessible trauma therapy with flexible communication'
      },
      {
        name: 'Amwell',
        slug: 'amwell',
        rating: 4.1,
        price: '$109-$129/session',
        features: ['PTSD specialists', 'Insurance coverage', 'Video sessions', 'Medical integration'],
        bestFor: 'Insurance-covered PTSD treatment'
      }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'couples',
    title: 'Best Online Couples Therapy',
    slug: 'couples-therapy',
    condition: 'Relationship Issues',
    description: 'Compare platforms offering specialized couples therapy and relationship counseling services.',
    platforms: [
      {
        name: 'ReGain',
        slug: 'regain',
        rating: 4.8,
        price: '$60-$90/week',
        features: ['Joint sessions', 'Relationship focus', 'Couples worksheets', 'Specialized counselors'],
        bestFor: 'Dedicated couples therapy platform'
      },
      {
        name: 'Talkspace',
        slug: 'talkspace',
        rating: 4.6,
        price: '$99-$139/week',
        features: ['Couples therapy', 'Insurance coverage', 'Multiple plans', 'Licensed therapists'],
        bestFor: 'Insurance-covered couples therapy'
      },
      {
        name: 'Lasting',
        slug: 'lasting',
        rating: 4.5,
        price: '$15-$89/month',
        features: ['Relationship programs', 'Self-guided options', 'Therapist support', 'Affordable plans'],
        bestFor: 'Self-guided relationship improvement'
      }
    ],
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  }
];

const ReviewsSpecialty = () => {
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

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Specialty Therapy Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            In-depth analysis of how different online therapy platforms handle specific mental health conditions and specialized needs.
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

        {/* Featured Reviews */}
        {specialtyReviews.map((review, index) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">{review.title}</h2>
                <Link to={`/reviews/specialty/${review.slug}`} className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                  View full analysis <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <img 
                    src={review.image} 
                    alt={review.title} 
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h3 className="font-bold text-gray-800 mb-2">Why Specialized Care Matters</h3>
                    <p className="text-gray-600 text-sm">
                      Different conditions require different therapeutic approaches and expertise. Finding a platform that specializes in your specific needs can lead to better outcomes.
                    </p>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <p className="text-gray-600 mb-6">{review.description}</p>
                  
                  <div className="space-y-6">
                    {review.platforms.map(platform => (
                      <div key={platform.slug} className="border-b pb-6 last:border-b-0 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <h4 className="text-lg font-bold text-gray-800 mr-3">{platform.name}</h4>
                            <div className="flex items-center">
                              {renderStars(platform.rating)}
                              <span className="ml-2 text-gray-600">{platform.rating}/5</span>
                            </div>
                          </div>
                          <span className="text-gray-600">{platform.price}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h5 className="font-bold text-gray-800 mb-2 text-sm">Key Features</h5>
                            <ul className="space-y-1">
                              {platform.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span className="text-sm text-gray-600">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-800 mb-2 text-sm">Best For</h5>
                            <p className="text-sm text-gray-600">{platform.bestFor}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button 
                            as={Link}
                            to={`/reviews/platforms/${platform.slug}`}
                            variant="outline"
                            size="sm"
                          >
                            Read review
                          </Button>
                          <Button
                            as="a"
                            href={`https://www.${platform.slug}.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            size="sm"
                          >
                            Visit Website
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Choosing Specialized Care */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose Specialized Mental Health Care</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Expertise Match</h3>
              <p className="text-gray-600">
                Look for platforms with therapists who specialize in your specific condition or needs.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Treatment Approach</h3>
              <p className="text-gray-600">
                Consider which therapeutic methods are most effective for your specific condition.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Support Features</h3>
              <p className="text-gray-600">
                Evaluate additional resources and tools specific to your needs.
              </p>
            </div>
          </div>
        </div>

        {/* How We Review Section */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Find Your Specialized Care Match</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect online therapy platform for your specific needs.
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

export default ReviewsSpecialty;
