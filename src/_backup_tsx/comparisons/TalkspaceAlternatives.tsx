import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight, ExternalLink, MessageSquare, Video, Phone, Calendar, DollarSign, Shield, Users, Brain, Search, Pill } from 'lucide-react';
import Button from '../../components/Button';
import HowWeReviewed from '../../components/HowWeReviewed';

const TalkspaceAlternatives = () => {
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
      description: 'The largest online therapy platform with a vast network of licensed therapists and flexible communication options.',
      pros: [
        'Larger therapist network than Talkspace',
        'Financial aid program available',
        'More affordable base pricing',
        'Unlimited messaging with therapists'
      ],
      cons: [
        'No insurance coverage',
        'No medication management',
        'Less structured therapy approach',
        'No specialized psychiatry services'
      ],
      features: [
        'Text therapy',
        'Video sessions',
        'Phone sessions',
        'Therapist matching'
      ],
      bestFor: 'Those seeking affordable therapy without insurance and who don\'t need medication management'
    },
    {
      name: 'Cerebral',
      slug: 'cerebral',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.2,
      price: '$85-$325/month',
      description: 'Comprehensive mental healthcare platform offering therapy, medication management, and coaching services.',
      pros: [
        'More affordable medication management than Talkspace',
        'Accepts many insurance plans',
        'Comprehensive care plans available',
        'Monthly subscription model (vs. weekly)'
      ],
      cons: [
        'Less therapy-focused than Talkspace',
        'Newer platform with less established reputation',
        'Limited to certain conditions (anxiety, depression, insomnia, ADHD)',
        'Not available in all states'
      ],
      features: [
        'Medication management',
        'Therapy sessions',
        'Care counseling',
        'Insurance coverage'
      ],
      bestFor: 'Those seeking combined therapy and medication management at a lower price point than Talkspace'
    },
    {
      name: 'Brightside',
      slug: 'brightside',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      rating: 4.0,
      price: '$95-$349/month',
      description: 'Specialized platform for depression and anxiety treatment with data-driven medication management and therapy.',
      pros: [
        'Specialized in depression and anxiety treatment',
        'Data-driven medication approach',
        'Accepts many insurance plans',
        'Structured therapy program'
      ],
      cons: [
        'Limited to depression and anxiety',
        'Fewer communication options than Talkspace',
        'Less flexible therapy approach',
        'Smaller therapist network'
      ],
      features: [
        'Medication management',
        'Therapy sessions',
        'Progress tracking',
        'Insurance coverage'
      ],
      bestFor: 'Those specifically seeking treatment for depression or anxiety with insurance coverage'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Top Talkspace Alternatives in 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the best alternatives to Talkspace for online therapy, medication management, and comprehensive mental healthcare.
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

        {/* Talkspace Context */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Talkspace Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">What Talkspace Offers</h3>
              <p className="text-gray-600 mb-4">
                Talkspace is a leading online therapy platform that offers text, audio, and video therapy sessions with licensed therapists, plus psychiatric services for medication management.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="font-bold text-gray-800">Standard Plans: $65-$99/week</span>
                </div>
                <ul className="space-y-1 text-gray-600 pl-7">
                  <li>• Messaging Therapy: $65/week</li>
                  <li>• Messaging + Live: $79/week</li>
                  <li>• Messaging + Live + Workshops: $99/week</li>
                  <li>• Psychiatry: $249 initial evaluation, $125 follow-ups</li>
                </ul>
              </div>
              <p className="text-gray-600">
                Talkspace accepts insurance from many major providers, which can significantly reduce out-of-pocket costs for eligible users.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Why Consider Alternatives?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <DollarSign className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Cost Considerations</span>
                    <p className="text-gray-600">Talkspace can be expensive, especially for psychiatric services. Some alternatives offer more affordable options.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Pill className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Medication Management</span>
                    <p className="text-gray-600">If you need medication, some platforms offer more comprehensive or affordable psychiatric services.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Therapist Matching</span>
                    <p className="text-gray-600">Different platforms have different therapist networks and matching systems that may better suit your needs.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Top Talkspace Alternatives */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Top Alternatives to Talkspace</h2>
          
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
                        icon={ArrowRight}
                        className="w-full justify-center"
                      >
                        Visit Website
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 md:pl-8">
                    <h4 className="font-bold text-gray-800 mb-3">Why It's a Good Alternative</h4>
                    <p className="text-gray-600 mb-6">
                      {platform.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-3">Pros vs. Talkspace</h5>
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
                        <h5 className="font-bold text-gray-800 mb-3">Cons vs. Talkspace</h5>
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
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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

        {/* Specialized Alternatives */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Specialized Talkspace Alternatives</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">For Couples Therapy</h3>
              <p className="text-gray-600 mb-4">
                If you're specifically looking for relationship counseling, ReGain specializes in couples therapy with licensed therapists.
              </p>
              <div className="flex items-center mb-3">
                <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-gray-600">$60-$90/week</span>
              </div>
              <Link to="/reviews/platforms/regain" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Read ReGain review <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">For LGBTQ+ Community</h3>
              <p className="text-gray-600 mb-4">
                Pride Counseling offers specialized therapy for LGBTQ+ individuals with therapists experienced in related issues.
              </p>
              <div className="flex items-center mb-3">
                <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-gray-600">$60-$90/week</span>
              </div>
              <Link to="/reviews/platforms/pride-counseling" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Read Pride Counseling review <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">For CBT Focus</h3>
              <p className="text-gray-600 mb-4">
                Online-Therapy.com specializes in cognitive behavioral therapy (CBT) with structured programs and additional resources.
              </p>
              <div className="flex items-center mb-3">
                <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-gray-600">$40-$88/week</span>
              </div>
              <Link to="/reviews/platforms/online-therapy" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Read Online-Therapy.com review <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Talkspace vs Alternatives: Quick Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Platform</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Price Range</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Communication Methods</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Insurance</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Medication</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Talkspace</td>
                  <td className="py-3 px-4 text-center">$65-$99/week</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center space-x-1">
                      <MessageSquare className="h-4 w-4 text-indigo-600" aria-label="Messaging" />
                      <Video className="h-4 w-4 text-indigo-600" aria-label="Video" />
                      <Phone className="h-4 w-4 text-indigo-600" aria-label="Phone" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(4.3)}
                    </div>
                  </td>
                </tr>
                
                {platforms.map(platform => (
                  <tr key={platform.slug} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{platform.name}</td>
                    <td className="py-3 px-4 text-center">{platform.price}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center space-x-1">
                        <MessageSquare className="h-4 w-4 text-indigo-600" aria-label="Messaging" />
                        <Video className="h-4 w-4 text-indigo-600" aria-label="Video" />
                        {platform.slug === 'betterhelp' && (
                          <Phone className="h-4 w-4 text-indigo-600" aria-label="Phone" />
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {platform.slug === 'betterhelp' ? (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {platform.slug === 'betterhelp' ? (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">
                        {renderStars(platform.rating)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How to Choose */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Alternative to Talkspace</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Consider Your Primary Needs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <DollarSign className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Budget Constraints</span>
                    <p className="text-gray-600">If cost is your main concern, BetterHelp offers similar services at a lower price point, especially with financial aid.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Pill className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Medication Needs</span>
                    <p className="text-gray-600">If you need medication management, Cerebral and Brightside offer more affordable options than Talkspace's psychiatry services.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Insurance Coverage</span>
                    <p className="text-gray-600">If using insurance is essential, Brightside and Cerebral accept many plans, similar to Talkspace.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Specific Conditions</span>
                    <p className="text-gray-600">For specific conditions like depression or anxiety, specialized platforms like Brightside may offer more targeted treatment.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Questions to Ask Yourself</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Do I need medication management?</span>
                    <p className="text-gray-600">If yes, consider Cerebral or Brightside. If no, BetterHelp may be a more cost-effective option.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Do I have insurance that covers mental health?</span>
                    <p className="text-gray-600">If yes, check if Brightside or Cerebral accepts your plan, as they may offer better coverage than Talkspace.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">What communication methods are most important to me?</span>
                    <p className="text-gray-600">If you value phone sessions, BetterHelp offers these while some other alternatives don't.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Do I prefer a structured approach or flexibility?</span>
                    <p className="text-gray-600">Brightside offers more structure, while BetterHelp provides more flexibility in therapy approaches.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Recommendations</h3>
            <p className="text-gray-700 mb-4">
              Based on your specific needs, we recommend:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>BetterHelp</strong> if you're looking for affordable therapy without medication needs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Cerebral</strong> if you want comprehensive care with both therapy and medication at a lower cost than Talkspace</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Brightside</strong> if you specifically need treatment for depression or anxiety with a data-driven approach</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Direct Comparisons */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Head-to-Head Comparisons with Talkspace</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/compare/platforms/talkspace-vs-betterhelp" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Talkspace vs BetterHelp</h3>
              <p className="text-gray-600 text-sm mb-3">Detailed comparison of the two largest online therapy platforms.</p>
              <div className="flex justify-between items-center">
                <span className="text-indigo-600 text-sm">Read comparison</span>
                <ArrowRight className="h-4 w-4 text-indigo-600" />
              </div>
            </Link>
            
            <Link to="/compare/platforms/talkspace-vs-cerebral" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Talkspace vs Cerebral</h3>
              <p className="text-gray-600 text-sm mb-3">Compare these platforms' approaches to therapy and medication management.</p>
              <div className="flex justify-between items-center">
                <span className="text-indigo-600 text-sm">Read comparison</span>
                <ArrowRight className="h-4 w-4 text-indigo-600" />
              </div>
            </Link>
            
            <Link to="/compare/platforms/talkspace-vs-online-therapy" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-800 mb-2">Talkspace vs Online-Therapy.com</h3>
              <p className="text-gray-600 text-sm mb-3">See how Talkspace compares to a CBT-focused alternative.</p>
              <div className="flex justify-between items-center">
                <span className="text-indigo-600 text-sm">Read comparison</span>
                <ArrowRight className="h-4 w-4 text-indigo-600" />
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect Therapy Match</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the online therapy platform that best fits your unique needs, preferences, and budget.
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

export default TalkspaceAlternatives;
