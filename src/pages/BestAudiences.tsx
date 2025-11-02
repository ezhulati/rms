import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, Users, Search, ExternalLink, Heart, Shield } from 'lucide-react';
import Button from '../components/Button';

const BestAudiences = () => {
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

  // Audience categories
  const audiences = [
    {
      name: 'Teens & Young Adults',
      slug: 'teens',
      description: 'Find the best online therapy platforms designed specifically for teenagers and young adults facing unique challenges.',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      platforms: [
        {
          name: 'Teen Counseling',
          rating: 4.8,
          reason: 'Specialized platform exclusively for teens with parent involvement'
        },
        {
          name: 'BetterHelp',
          rating: 4.5,
          reason: 'Large network of therapists experienced with young adults'
        },
        {
          name: 'Talkspace',
          rating: 4.4,
          reason: 'Teen-specific therapy with insurance coverage options'
        }
      ]
    },
    {
      name: 'Couples',
      slug: 'couples',
      description: 'Discover platforms specializing in relationship counseling, marriage therapy, and couples communication.',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      platforms: [
        {
          name: 'ReGain',
          rating: 4.9,
          reason: 'Specialized couples therapy with joint session options'
        },
        {
          name: 'Talkspace',
          rating: 4.6,
          reason: 'Couples therapy with licensed relationship counselors'
        },
        {
          name: 'Lasting',
          rating: 4.5,
          reason: 'App-based relationship counseling with exercises'
        }
      ]
    },
    {
      name: 'LGBTQ+',
      slug: 'lgbtq',
      description: 'Find platforms with LGBTQ+-affirming therapists who understand the unique challenges faced by the community.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      platforms: [
        {
          name: 'Pride Counseling',
          rating: 4.8,
          reason: 'Specialized platform for LGBTQ+ individuals with affirming therapists'
        },
        {
          name: 'BetterHelp',
          rating: 4.6,
          reason: 'Large network with LGBTQ+-experienced therapists'
        },
        {
          name: 'Talkspace',
          rating: 4.5,
          reason: 'LGBTQ+-affirming therapists with specialized training'
        }
      ]
    },
    {
      name: 'Veterans',
      slug: 'veterans',
      description: 'Compare platforms offering specialized support for veterans, active military, and their families.',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      platforms: [
        {
          name: 'BetterHelp',
          rating: 4.7,
          reason: 'Large network of therapists with military experience'
        },
        {
          name: 'Talkspace',
          rating: 4.6,
          reason: 'Therapists specialized in military trauma and transition'
        },
        {
          name: 'Cerebral',
          rating: 4.4,
          reason: 'Combined therapy and medication for PTSD and related issues'
        }
      ]
    },
    {
      name: 'Seniors',
      slug: 'seniors',
      description: 'Find platforms with therapists experienced in age-related concerns, life transitions, and elder care issues.',
      image: 'https://images.unsplash.com/photo-1447005497901-b3e9ee359928?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      platforms: [
        {
          name: 'BetterHelp',
          rating: 4.6,
          reason: 'Wide selection of therapists experienced with aging issues'
        },
        {
          name: 'Talkspace',
          rating: 4.5,
          reason: 'Medicare-covered options for seniors'
        },
        {
          name: 'Amwell',
          rating: 4.4,
          reason: 'User-friendly interface designed for all ages'
        }
      ]
    },
    {
      name: 'Parents & Families',
      slug: 'parents',
      description: 'Discover platforms supporting parents, families, and those navigating parenting challenges.',
      image: 'https://images.unsplash.com/photo-1478061653917-455ba7f4a541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      platforms: [
        {
          name: 'BetterHelp',
          rating: 4.7,
          reason: 'Large selection of family therapists and parenting specialists'
        },
        {
          name: 'Talkspace',
          rating: 4.6,
          reason: 'Family therapy options with flexible scheduling'
        },
        {
          name: 'Growing Self',
          rating: 4.5,
          reason: 'Specialized in parenting support and family dynamics'
        }
      ]
    }
  ];

  // Featured audience (Couples)
  const featuredAudience = audiences[1];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Therapy Platforms by Audience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find the most effective online therapy platforms tailored to your specific demographic and personal identity.
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

        {/* Audience Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience) => (
            <div key={audience.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={audience.image} 
                alt={`Best for ${audience.name}`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Best for {audience.name}</h3>
                <p className="text-gray-600 mb-4">
                  {audience.description}
                </p>
                <div className="space-y-3 mb-4">
                  {audience.platforms.slice(0, 3).map((platform, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-indigo-600 font-medium mr-2">{index + 1}.</span>
                        <span className="font-medium">{platform.name}</span>
                      </div>
                      <div className="flex">
                        {renderStars(platform.rating)}
                      </div>
                    </div>
                  ))}
                </div>
                <Link to={`/best/audiences/best-for-${audience.slug}`} className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  View full analysis <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Audience Analysis */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Featured: Best Platforms for Couples</h2>
              <Link to="/best/audiences/best-for-couples" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                View full analysis <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-1">
                <img 
                  src={featuredAudience.image} 
                  alt={`Best for ${featuredAudience.name}`} 
                  className="w-full rounded-lg mb-4"
                />
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Why Specialized Couples Therapy Matters</h3>
                  <p className="text-gray-600 text-sm">
                    Relationship issues require specific therapeutic approaches like the Gottman Method, Emotionally Focused Therapy (EFT), and communication training. Platforms specializing in couples therapy offer therapists with expertise in these methods and often provide features for joint sessions and relationship-building exercises.
                  </p>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Top Platforms for Couples Therapy</h3>
                
                <div className="space-y-6 mb-6">
                  {/* ReGain */}
                  <div className="border-b pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                        <h4 className="text-lg font-bold">ReGain</h4>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          {renderStars(4.9)}
                        </div>
                        <span className="text-gray-600">4.9/5</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">
                      ReGain is a specialized platform exclusively for couples therapy and relationship counseling. It offers joint sessions where both partners can participate from the same device or different locations, making it ideal for both local and long-distance relationships.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-1 text-sm">Strengths for Couples</h5>
                        <ul className="space-y-1">
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Specialized relationship therapists</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Joint session capabilities</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Relationship-focused resources</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-1 text-sm">Price</h5>
                        <p className="text-gray-600 text-sm">$60-$90/week (shared cost)</p>
                        <div className="mt-2">
                          <a href="https://www.regain.us" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                            Visit ReGain <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Talkspace */}
                  <div className="border-b pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                        <h4 className="text-lg font-bold">Talkspace</h4>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          {renderStars(4.6)}
                        </div>
                        <span className="text-gray-600">4.6/5</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Talkspace offers dedicated couples therapy with licensed relationship counselors. Their platform stands out for potential insurance coverage for couples therapy and the ability to integrate with individual therapy if needed.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-1 text-sm">Strengths for Couples</h5>
                        <ul className="space-y-1">
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Insurance coverage options</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Licensed relationship counselors</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Individual therapy integration</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-1 text-sm">Price</h5>
                        <p className="text-gray-600 text-sm">$99-$129/week</p>
                        <div className="mt-2">
                          <a href="https://www.talkspace.com" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                            Visit Talkspace <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lasting */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                        <h4 className="text-lg font-bold">Lasting</h4>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          {renderStars(4.5)}
                        </div>
                        <span className="text-gray-600">4.5/5</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Lasting offers a unique app-based approach to relationship counseling with personalized programs and exercises for couples. It's ideal for couples who want to work on specific relationship issues with guided activities between therapy sessions.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-1 text-sm">Strengths for Couples</h5>
                        <ul className="space-y-1">
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Interactive relationship exercises</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Personalized programs</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Affordable self-guided option</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-1 text-sm">Price</h5>
                        <p className="text-gray-600 text-sm">$15-$89/month</p>
                        <div className="mt-2">
                          <a href="https://www.getlasting.com" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                            Visit Lasting <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Our Recommendation for Couples</h4>
                  <p className="text-gray-600">
                    For most couples, <strong>ReGain</strong> offers the best specialized experience with therapists trained specifically in relationship counseling and features designed for joint participation. However, if insurance coverage is important, <strong>Talkspace</strong> may be the better choice. For couples looking for a more affordable, self-guided approach with therapist support, <strong>Lasting</strong> provides an excellent option to complement traditional therapy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Choosing the Right Platform */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Platform for Your Identity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Cultural Competence</h3>
              <p className="text-gray-600">
                Look for platforms with therapists who understand your cultural background, identity, and the unique challenges you may face. Cultural competence ensures therapists can provide support that's sensitive to your specific experiences and needs.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Specialized Features</h3>
              <p className="text-gray-600">
                Consider platforms that offer features designed for your specific demographic. For example, couples may need joint session capabilities, while teens might benefit from platforms with parent involvement options and age-appropriate resources.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Safe & Affirming Space</h3>
              <p className="text-gray-600">
                Ensure the platform creates a safe, affirming environment for your identity. This includes therapists who are trained in working with your demographic and platform policies that protect against discrimination and bias.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Assessment Process</h3>
            <p className="text-gray-700 mb-4">
              When evaluating platforms for specific audiences, we consider:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Number of therapists specializing in your demographic</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Cultural competence and specialized training</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Features designed for your specific needs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>User reviews from people with similar backgrounds</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Policies that ensure a safe, affirming environment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Find the Right Therapy for Your Identity</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect online therapy platform based on your unique identity, background, and preferences.
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

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Why is it important to find a platform that specializes in my demographic?</h3>
              <p className="text-gray-700">
                Therapists who specialize in working with specific demographics have training and experience in addressing the unique challenges faced by those groups. For example, LGBTQ+ individuals may benefit from therapists who understand issues like coming out, gender dysphoria, or discrimination, while teens may need therapists who specialize in adolescent development and age-specific concerns.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I know if a therapist is culturally competent?</h3>
              <p className="text-gray-700">
                Look for therapists who mention specific training or experience working with your demographic in their profiles. Many platforms allow you to filter therapists by specialties or identities. During initial sessions, don't hesitate to ask about their experience working with people of your background. A culturally competent therapist will welcome these questions and demonstrate understanding of the unique challenges you may face.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can couples really benefit from online therapy?</h3>
              <p className="text-gray-700">
                Yes, research shows that online couples therapy can be effective. Specialized platforms like ReGain offer features designed for couples, such as joint sessions where both partners can participate from the same location or different locations. This flexibility can actually make therapy more accessible for couples with busy schedules or those in long-distance relationships.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How does therapy for teens work online?</h3>
              <p className="text-gray-700">
                Online therapy for teens typically requires parental consent for those under 18. Platforms like Teen Counseling include parent involvement in the process while still maintaining appropriate confidentiality for the teen. Parents usually set up the account and have initial contact with the therapist, but the therapy sessions themselves are private between the teen and therapist, with safeguards in place for situations requiring parental notification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestAudiences;
