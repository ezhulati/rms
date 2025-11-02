import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';

const RoundupsPage = () => {
  const roundups = [
    {
      title: 'Top Therapy Platforms Compared',
      description: 'A comprehensive comparison of the leading online therapy platforms, evaluating features, pricing, therapist qualifications, and user experience.',
      path: '/compare/roundups/top-therapy-platforms-compared',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      tags: ['Comparison', 'Platforms', 'Features']
    },
    {
      title: 'Best Therapy Apps Compared',
      description: 'An in-depth analysis of mobile therapy applications, comparing accessibility, functionality, and effectiveness for different mental health needs.',
      path: '/compare/roundups/best-therapy-apps-compared',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      tags: ['Mobile Apps', 'Accessibility', 'Convenience']
    },
    {
      title: 'Insurance-Friendly Platforms',
      description: 'A detailed guide to online therapy platforms that work with insurance providers, including coverage options, reimbursement processes, and out-of-pocket costs.',
      path: '/compare/roundups/insurance-friendly-platforms',
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      tags: ['Insurance', 'Affordability', 'Coverage']
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Therapy Platform Roundups & Comparisons | RealMindSolutions"
        description="Comprehensive roundups and comparisons of online therapy platforms, apps, and services to help you find the best option for your mental health needs."
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Therapy Platform Roundups</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive comparisons and roundups of online therapy platforms, apps, and services to help you make informed decisions about your mental health care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {roundups.map((roundup, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link to={roundup.path}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={roundup.image} 
                    alt={roundup.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{roundup.title}</h2>
                  <p className="text-gray-600 mb-4">{roundup.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {roundup.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-indigo-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Our Roundups Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Comprehensive Analysis</h3>
              <p className="text-gray-600">
                Our roundups provide detailed, side-by-side comparisons of multiple platforms, giving you a complete picture of the online therapy landscape.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Unbiased Evaluations</h3>
              <p className="text-gray-600">
                We maintain editorial independence and evaluate each platform based on consistent criteria, ensuring fair and objective comparisons.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Updated Regularly</h3>
              <p className="text-gray-600">
                The online therapy landscape evolves quickly. We regularly update our roundups to reflect the latest features, pricing changes, and new entrants to the market.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Create Our Roundups</h2>
          <p className="text-gray-600 mb-6">
            Our roundup methodology combines hands-on testing, user feedback analysis, and expert consultation to provide the most accurate and helpful comparisons possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-indigo-800 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Platform Selection</h3>
                <p className="text-gray-600">
                  We identify the most relevant platforms in each category based on market presence, user base, and unique features or specializations.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-indigo-800 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Evaluation Criteria</h3>
                <p className="text-gray-600">
                  We establish consistent criteria for evaluation, including user experience, therapist qualifications, pricing and value, communication options, and specialized features.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-indigo-800 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Testing and Research</h3>
                <p className="text-gray-600">
                  Our team tests each platform, collects user feedback, and researches the latest updates and features to ensure our comparisons are accurate and comprehensive.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-indigo-800 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Analysis and Comparison</h3>
                <p className="text-gray-600">
                  We analyze how platforms perform across all criteria, identifying strengths, weaknesses, and ideal use cases for different user needs and preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundupsPage;
