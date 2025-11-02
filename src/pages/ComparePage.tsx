import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star, CheckCircle, XCircle, Info, DollarSign, Calendar, MessageSquare, Video, Phone, Search, Filter, ChevronDown, ChevronUp, Users } from 'lucide-react';
import HowWeReviewed from '../components/HowWeReviewed';

const ComparePage = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/compare';
  const isPlatformsPath = location.pathname === '/compare/platforms';
  
  // State for platform filter
  const [platform1, setPlatform1] = useState('');
  const [platform2, setPlatform2] = useState('');
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);
  
  // Platform data
  const platforms = [
    {
      name: 'BetterHelp',
      slug: 'betterhelp',
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      rating: 4,
      bestFor: 'Affordability, Therapist Selection',
      description: 'The world\'s largest online therapy platform, offering messaging, phone, and video sessions on a subscription model.'
    },
    {
      name: 'Talkspace',
      slug: 'talkspace',
      price: '$65-$99/week',
      priceRange: [65, 99],
      communication: ['messaging', 'video', 'phone'],
      insurance: true,
      medication: true,
      rating: 4.5,
      bestFor: 'Insurance Coverage, Medication',
      description: 'Online therapy and psychiatry via text, audio, and video sessions, with medication options.'
    },
    {
      name: 'Cerebral',
      slug: 'cerebral',
      price: '$85-$325/month',
      priceRange: [85, 325],
      communication: ['messaging', 'video', 'phone'],
      insurance: true,
      medication: true,
      rating: 4,
      bestFor: 'Comprehensive Care, Medication',
      description: 'Subscription-based therapy and medication management for anxiety, depression, ADHD, and insomnia.'
    },
    {
      name: 'Calmerry',
      slug: 'calmerry',
      price: '$42-$68/week',
      priceRange: [42, 68],
      communication: ['messaging', 'video'],
      insurance: false,
      medication: false,
      rating: 4,
      bestFor: 'Affordability, Flexible Plans',
      description: 'Online therapy platform offering flexible text and video-based therapy sessions.'
    },
    {
      name: 'Online-Therapy.com',
      slug: 'online-therapy-com',
      price: '$40-$88/week',
      priceRange: [40, 88],
      communication: ['messaging', 'video'],
      insurance: false,
      medication: false,
      rating: 4,
      bestFor: 'CBT Focus, Self-Help Tools',
      description: 'Specializes in CBT-based therapy with structured programs, including worksheets and yoga resources.'
    },
    {
      name: 'Brightside',
      slug: 'brightside',
      price: '$95-$349/month',
      priceRange: [95, 349],
      communication: ['messaging', 'video'],
      insurance: true,
      medication: true,
      rating: 4,
      bestFor: 'Depression & Anxiety, Medication',
      description: 'Specializes in treating depression and anxiety with therapy and medication management.'
    },
    {
      name: 'ReGain',
      slug: 'regain',
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      rating: 4,
      bestFor: 'Couples Therapy, Relationships',
      description: 'Relationship and couples counseling with joint therapy sessions.'
    },
    {
      name: 'Pride Counseling',
      slug: 'pride-counseling',
      price: '$60-$90/week',
      priceRange: [60, 90],
      communication: ['messaging', 'video', 'phone'],
      insurance: false,
      medication: false,
      rating: 4,
      bestFor: 'LGBTQ+ Community',
      description: 'Specializes in therapy for the LGBTQ+ community with experienced counselors.'
    }
  ];
  
  // Display more platforms or limit to 5
  const displayedPlatforms = showAllPlatforms ? platforms : platforms.slice(0, 5);
  
  // Popular comparisons
  const popularComparisons = [
    {
      title: 'BetterHelp vs Talkspace',
      slug: 'betterhelp-vs-talkspace',
      description: 'Compare the two largest online therapy platforms, examining pricing, features, therapist qualifications, and user experience.',
      priceRange: '$60-$99/week',
      rating: 4
    },
    {
      title: 'BetterHelp vs Cerebral',
      slug: 'betterhelp-vs-cerebral',
      description: 'Compare BetterHelp\'s therapy-only approach with Cerebral\'s combined therapy and medication management services.',
      priceRange: '$60-$325/month',
      rating: 4
    },
    {
      title: 'Talkspace vs Cerebral',
      slug: 'talkspace-vs-cerebral',
      description: 'Compare two platforms that offer both therapy and psychiatric services, examining their approaches to medication management.',
      priceRange: '$65-$325/month',
      rating: 4
    },
    {
      title: 'BetterHelp vs Calmerry',
      slug: 'betterhelp-vs-calmerry',
      description: 'Compare BetterHelp with Calmerry, a newer platform offering competitive pricing and flexible therapy options.',
      priceRange: '$42-$90/week',
      rating: 4
    },
    {
      title: 'Talkspace vs Online-Therapy.com',
      slug: 'talkspace-vs-online-therapy',
      description: 'Compare Talkspace with Online-Therapy.com, which specializes in cognitive behavioral therapy (CBT) with additional resources.',
      priceRange: '$40-$99/week',
      rating: 4
    },
    {
      title: 'Cerebral vs Brightside',
      slug: 'cerebral-vs-brightside',
      description: 'Compare two platforms that focus on combined therapy and medication management for depression and anxiety.',
      priceRange: '$85-$349/month',
      rating: 4
    }
  ];
  
  // Handle platform selection
  const handleCompare = () => {
    if (platform1 && platform2) {
      // In a real app, this would navigate to the comparison page
      console.log(`Comparing ${platform1} and ${platform2}`);
    }
  };
  
  // Render stars based on rating
  const renderStars = (rating) => {
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
        {isRootPath ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Compare Online Therapy Platforms</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make an informed decision with our detailed side-by-side comparisons of the leading online therapy platforms.
              </p>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Platform Comparisons */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Platform Comparisons</h2>
                  <p className="text-gray-600 mb-6">
                    See how different online therapy platforms stack up against each other in terms of features, pricing, and more.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/compare/platforms/betterhelp-vs-talkspace" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>BetterHelp vs Talkspace</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/compare/platforms/betterhelp-vs-cerebral" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>BetterHelp vs Cerebral</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/compare/platforms/talkspace-vs-cerebral" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Talkspace vs Cerebral</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/compare/platforms/betterhelp-vs-calmerry" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>BetterHelp vs Calmerry</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/compare/platforms" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all platform comparisons <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Modality Comparisons */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Modality Comparisons</h2>
                  <p className="text-gray-600 mb-6">
                    Compare different therapy approaches and delivery methods to find what works best for your needs.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/compare/modalities/online-vs-traditional-therapy" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Online vs Traditional Therapy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/compare/modalities/text-vs-video-therapy" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Text vs Video Therapy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/compare/modalities/cbt-vs-psychodynamic" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>CBT vs Psychodynamic Therapy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/compare/modalities/individual-vs-group-therapy" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Individual vs Group Therapy</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/compare/modalities" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all modality comparisons <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Alternatives */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Alternatives</h2>
                  <p className="text-gray-600 mb-6">
                    Explore affordable and specialized alternatives to popular therapy platforms.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/compare/alternatives/affordable-betterhelp-alternatives" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Affordable BetterHelp Alternatives</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/compare/alternatives/talkspace-alternatives" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Talkspace Alternatives</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/compare/alternatives/free-therapy-options" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Free Therapy Options</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/compare/alternatives" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all alternatives <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Roundups */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Roundups</h2>
                  <p className="text-gray-600 mb-6">
                    Comprehensive comparisons of multiple platforms in one place.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link to="/compare/roundups/top-therapy-platforms-compared" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Top 5 Therapy Platforms Compared</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/compare/roundups/best-therapy-apps-compared" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Best Therapy Apps Compared</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/compare/roundups/insurance-friendly-platforms" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Insurance-Friendly Platforms Compared</span>
                      </Link>
                    </li>
                  </ul>
                  <Link to="/compare/roundups" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    View all roundups <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Comparison */}
            <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Featured Comparison: BetterHelp vs Talkspace</h2>
                  <Link to="/compare/platforms/betterhelp-vs-talkspace" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                    View full comparison <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="col-span-1 md:col-span-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">BetterHelp</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>Unlimited messaging with therapist</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>Weekly live sessions (video, phone, or chat)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>$60-$90 per week (billed monthly)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">✗</span>
                        <span>No insurance coverage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>Financial aid available</span>
                      </li>
                    </ul>
                    <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800">
                      Visit BetterHelp <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                  
                  <div className="col-span-1 md:col-span-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Talkspace</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>Unlimited messaging with therapist</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>Live sessions (depends on plan)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>$65-$99 per week (billed monthly)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>Some insurance coverage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">✗</span>
                        <span>No financial aid program</span>
                      </li>
                    </ul>
                    <a href="https://www.talkspace.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800">
                      Visit Talkspace <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                  
                  <div className="col-span-1 md:col-span-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Our Verdict</h3>
                    <p className="text-gray-600 mb-4">
                      Both platforms offer quality therapy services with licensed professionals, but they differ in key areas:
                    </p>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span><strong>BetterHelp</strong> is better for those seeking more affordable options with financial aid.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span><strong>Talkspace</strong> is better for those with insurance coverage or needing medication management.</span>
                      </li>
                    </ul>
                    <p className="text-gray-600">
                      Read our full comparison for a detailed analysis of therapist qualifications, user experience, and specialized services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : isPlatformsPath ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Online Therapy Platform Comparisons</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Detailed side-by-side comparisons of the leading online therapy platforms to help you make an informed decision.
              </p>
              <div className="flex justify-center">
                <Link to="/tools/matchers/therapy-platform-matcher" className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
                  Find your perfect match <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Comparison Filter */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Compare Any Two Platforms</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="platform1" className="block text-sm font-medium text-gray-700 mb-1">First Platform</label>
                  <select 
                    id="platform1" 
                    value={platform1}
                    onChange={(e) => setPlatform1(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select a platform</option>
                    {platforms.map(platform => (
                      <option key={`p1-${platform.slug}`} value={platform.slug}>{platform.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="platform2" className="block text-sm font-medium text-gray-700 mb-1">Second Platform</label>
                  <select 
                    id="platform2" 
                    value={platform2}
                    onChange={(e) => setPlatform2(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select a platform</option>
                    {platforms.map(platform => (
                      <option key={`p2-${platform.slug}`} value={platform.slug}>{platform.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button 
                    onClick={handleCompare}
                    disabled={!platform1 || !platform2}
                    className={`w-full px-4 py-2 rounded-md transition ${
                      platform1 && platform2 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Compare Platforms
                  </button>
                </div>
              </div>
            </div>

            {/* Popular Comparisons */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Platform Comparisons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularComparisons.map((comparison, index) => (
                  <div key={comparison.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{comparison.title}</h3>
                      <p className="text-gray-600 mb-4">
                        {comparison.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center">
                            <DollarSign className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">Pricing</div>
                            <div className="text-sm text-gray-500">{comparison.priceRange}</div>
                          </div>
                        </div>
                        {renderStars(comparison.rating)}
                      </div>
                      <Link to={`/compare/platforms/${comparison.slug}`} className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800">
                        View full comparison <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comprehensive Comparison Table */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">At-a-Glance Platform Comparison</h2>
                <button 
                  onClick={() => setShowAllPlatforms(!showAllPlatforms)}
                  className="flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  {showAllPlatforms ? (
                    <>Show less <ChevronUp className="h-4 w-4 ml-1" /></>
                  ) : (
                    <>Show all platforms <ChevronDown className="h-4 w-4 ml-1" /></>
                  )}
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold">Platform</th>
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold">Price Range</th>
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold">Communication Methods</th>
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold">Insurance</th>
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold">Medication</th>
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold">Rating</th>
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold">Best For</th>
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedPlatforms.map((platform) => (
                      <tr key={platform.slug} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium">{platform.name}</td>
                        <td className="py-4 px-4">{platform.price}</td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-1">
                            {platform.communication.includes('messaging') && (
                              <MessageSquare className="h-4 w-4 text-indigo-600" title="Messaging" />
                            )}
                            {platform.communication.includes('video') && (
                              <Video className="h-4 w-4 text-indigo-600" title="Video" />
                            )}
                            {platform.communication.includes('phone') && (
                              <Phone className="h-4 w-4 text-indigo-600" title="Phone" />
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          {platform.insurance ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </td>
                        <td className="py-4 px-4">
                          {platform.medication ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </td>
                        <td className="py-4 px-4">
                          {renderStars(platform.rating)}
                        </td>
                        <td className="py-4 px-4 text-sm">{platform.bestFor}</td>
                        <td className="py-4 px-4">
                          <Link to={`/reviews/platforms/${platform.slug}`} className="text-indigo-600 hover:text-indigo-800 text-sm">
                            Review
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-sm text-gray-600 flex items-center">
                <Info className="h-4 w-4 mr-2" />
                <span>Prices and features may vary. Last updated June 2025.</span>
              </div>
            </div>

            {/* Comparison Methodology */}
            <div className="bg-indigo-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Comparison Methodology</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                    <DollarSign className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Value & Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    We analyze subscription costs, available plans, discounts, and overall value for the services provided.
                  </p>
                </div>
                
                <div>
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                    <MessageSquare className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Communication Options</h3>
                  <p className="text-gray-600 text-sm">
                    We evaluate the quality and availability of messaging, live chat, video, and phone session options.
                  </p>
                </div>
                
                <div>
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Therapist Qualifications</h3>
                  <p className="text-gray-600 text-sm">
                    We assess therapist credentials, specializations, vetting process, and matching systems.
                  </p>
                </div>
                
                <div>
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                    <Star className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">User Experience</h3>
                  <p className="text-gray-600 text-sm">
                    We analyze platform usability, app quality, customer service, and overall client satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Platform Categories */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Platform Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">General Therapy Platforms</h3>
                  <p className="text-gray-600 mb-4">
                    Platforms offering a wide range of therapy services for various mental health conditions.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span>BetterHelp</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span>Talkspace</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span>Calmerry</span>
                    </li>
                  </ul>
                  <Link to="/compare/platforms/general-therapy" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Compare general platforms <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Medication + Therapy</h3>
                  <p className="text-gray-600 mb-4">
                    Platforms that offer both therapy and psychiatric medication management services.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span>Talkspace</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span>Cerebral</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span>Brightside</span>
                    </li>
                  </ul>
                  <Link to="/compare/platforms/medication-therapy" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Compare medication platforms <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Specialized Platforms</h3>
                  <p className="text-gray-600 mb-4">
                    Platforms focusing on specific demographics, conditions, or therapy approaches.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span>ReGain (Couples)</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span>Pride Counseling (LGBTQ+)</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span>Online-Therapy.com (CBT)</span>
                    </li>
                  </ul>
                  <Link to="/compare/platforms/specialized" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Compare specialized platforms <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">How do I choose between online therapy platforms?</h3>
                  <p className="text-gray-600">
                    Consider your specific needs (type of therapy, communication preferences), budget constraints, insurance requirements, and whether you need medication management. Our detailed comparisons can help you identify which platform best meets your unique requirements.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Is online therapy as effective as in-person therapy?</h3>
                  <p className="text-gray-600">
                    Research shows that online therapy can be just as effective as in-person therapy for many conditions, including depression, anxiety, and PTSD. The key is finding a qualified therapist and a platform that offers the communication methods that work best for you.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Which platforms accept insurance?</h3>
                  <p className="text-gray-600">
                    Talkspace, Cerebral, and Brightside accept insurance from many major providers. BetterHelp and Calmerry don't work directly with insurance companies but may provide receipts for reimbursement. Check our detailed comparisons for specific insurance information.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Can I get medication through online therapy platforms?</h3>
                  <p className="text-gray-600">
                    Yes, platforms like Talkspace, Cerebral, and Brightside offer medication management services with licensed psychiatrists or nurse practitioners. Other platforms like BetterHelp focus solely on therapy without medication services.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Not Sure Which Platform Is Right For You?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Take our personalized assessment to get matched with the perfect online therapy platform based on your unique needs and preferences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/tools/matchers/therapy-platform-matcher" className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                  Find Your Perfect Match
                </Link>
                <Link to="/tools/assessments/mental-health-assessment" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition">
                  Take Mental Health Assessment
                </Link>
              </div>
            </div>
            
            {/* How We Review Section */}
            <div className="mt-16">
              <HowWeReviewed />
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Comparison Content</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              This is a placeholder for the specific comparison content based on the current URL path.
            </p>
            <p className="text-gray-600">
              Current path: {location.pathname}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparePage;