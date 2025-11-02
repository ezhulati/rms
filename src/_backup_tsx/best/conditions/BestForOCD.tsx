import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import Button from '../../../components/Button';
import MetaTags from '../../../components/MetaTags';

const BestForOCD = () => {
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
      name: 'NOCD',
      slug: 'nocd',
      rating: 4.8,
      price: '$170-$200 per session (insurance accepted)',
      description: 'NOCD specializes in treatment for OCD using ERP therapy.',
      features: ['ERP', 'OCD-trained therapists', 'Mobile app'],
      pros: ['Gold-standard OCD treatment', 'Insurance coverage'],
      cons: ['Higher cost without insurance', 'Limited to OCD treatment'],
      bestFor: 'Individuals with OCD seeking specialized ERP therapy'
    },
    {
      name: 'BetterHelp',
      slug: 'betterhelp',
      rating: 4.2,
      price: '$60-$90/week',
      description: 'BetterHelp offers therapy for various conditions including OCD.',
      features: ['Therapist matching', 'Messaging', 'Video sessions'],
      pros: ['Affordable', 'Multiple communication methods'],
      cons: ['Not OCD-specialized', 'No insurance coverage'],
      bestFor: 'Individuals with mild to moderate OCD seeking affordable therapy'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Best Online Therapy for OCD | RealMindSolutions"
        description="Compare the top online therapy platforms for OCD treatment."
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Online Therapy for OCD</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Specialized online platforms offering evidence-based treatment for OCD.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Finding Specialized Care for OCD</h2>
          <p className="text-gray-600 mb-4">
            Obsessive-Compulsive Disorder (OCD) requires specialized treatment approaches. Research shows that Exposure and Response Prevention (ERP) is most effective for OCD.
          </p>
        </div>

        {/* Platform Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Online Platforms for OCD Treatment</h2>
          
          {platforms.map((platform, index) => (
            <div key={platform.slug} className="mb-8 p-6 border rounded-lg">
              <h3 className="text-xl font-bold">{platform.name}</h3>
              <div className="flex items-center mb-2">
                {renderStars(platform.rating)}
                <span className="ml-2">{platform.rating}/5</span>
              </div>
              <p className="mb-2">{platform.description}</p>
              <p className="font-bold">Price: {platform.price}</p>
              <div className="mt-4">
                <h4 className="font-bold">Best For:</h4>
                <p>{platform.bestFor}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect OCD Treatment</h2>
          <Button
            as={Link}
            to="/tools/matchers/therapy-platform-matcher"
            variant="light"
            size="lg"
          >
            Take the Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BestForOCD;
