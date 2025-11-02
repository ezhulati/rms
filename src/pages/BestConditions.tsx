import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, XCircle, Brain, Search, ExternalLink, Shield, Users } from 'lucide-react';
import Button from '../components/Button';

const BestConditions = () => {
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

  // Condition categories
  const conditions = [
    {
      name: 'Anxiety',
      slug: 'anxiety',
      description: 'Find the best online therapy platforms for treating anxiety disorders, including GAD, social anxiety, and panic disorder.',
      image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      platforms: [
        {
          name: 'BetterHelp',
          rating: 4.8,
          reason: 'Large network of anxiety specialists with CBT expertise'
        },
        {
          name: 'Talkspace',
          rating: 4.7,
          reason: 'Structured anxiety treatment programs with medication options'
        },
        {
          name: 'Online-Therapy.com',
          rating: 4.5,
          reason: 'Comprehensive CBT toolbox specifically for anxiety'
        }
      ]
    },
    {
      name: 'Depression',
      slug: 'depression',
      description: 'Discover platforms specializing in depression treatment, from mild to moderate depression and persistent depressive disorder.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      platforms: [
        {
          name: 'Talkspace',
          rating: 4.8,
          reason: 'Combined therapy and medication management for depression'
        },
        {
          name: 'BetterHelp',
          rating: 4.6,
          reason: 'Wide range of therapeutic approaches for depression'
        },
        {
          name: 'Brightside',
          rating: 4.5,
          reason: 'Depression-focused care with data-driven treatment'
        }
      ]
    },
    {
      name: 'PTSD & Trauma',
      slug: 'ptsd',
      description: 'Find platforms with trauma-informed therapists specializing in PTSD, complex trauma, and trauma recovery.',
      image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      platforms: [
        {
          name: 'BetterHelp',
          rating: 4.7,
          reason: 'Large network of trauma specialists with EMDR training'
        },
        {
          name: 'Talkspace',
          rating: 4.6,
          reason: 'Trauma-focused therapy with integrated care approach'
        },
        {
          name: 'Calmerry',
          rating: 4.3,
          reason: 'Affordable trauma therapy with flexible scheduling'
        }
      ]
    },
    {
      name: 'OCD',
      slug: 'ocd',
      description: 'Compare platforms offering specialized OCD treatment, including ERP (Exposure and Response Prevention) therapy.',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      platforms: [
        {
          name: 'NOCD',
          rating: 4.9,
          reason: 'OCD-specific platform with ERP specialists'
        },
        {
          name: 'BetterHelp',
          rating: 4.4,
          reason: 'Access to therapists trained in ERP for OCD'
        },
        {
          name: 'Talkspace',
          rating: 4.3,
          reason: 'Combined therapy and medication approach for OCD'
        }
      ]
    },
    {
      name: 'Addiction & Recovery',
      slug: 'addiction',
      description: 'Find platforms supporting addiction recovery, substance use disorders, and maintaining sobriety.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      platforms: [
        {
          name: 'Monument',
          rating: 4.8,
          reason: 'Specialized in alcohol use disorder treatment'
        },
        {
          name: 'BetterHelp',
          rating: 4.5,
          reason: 'Wide range of addiction specialists and support'
        },
        {
          name: 'Talkspace',
          rating: 4.4,
          reason: 'Integrated approach to addiction and co-occurring disorders'
        }
      ]
    },
    {
      name: 'Eating Disorders',
      slug: 'eating-disorders',
      description: 'Discover platforms with specialized treatment for anorexia, bulimia, binge eating disorder, and other eating disorders.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      platforms: [
        {
          name: 'Equip',
          rating: 4.9,
          reason: 'Specialized eating disorder treatment with family-based approach'
        },
        {
          name: 'Talkspace',
          rating: 4.6,
          reason: 'Integrated therapy and nutrition counseling'
        },
        {
          name: 'BetterHelp',
          rating: 4.4,
          reason: 'Access to eating disorder specialists and support'
        }
      ]
    }
  ];

  // Featured condition (Anxiety)
  const featuredCondition = conditions[0];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Best Therapy Platforms by Condition</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find the most effective online therapy platforms specialized for your specific mental health condition.
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

        {/* Condition Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {conditions.map((condition) => (
            <div key={condition.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={condition.image} 
                alt={`Best for ${condition.name}`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Best for {condition.name}</h3>
                <p className="text-gray-600 mb-4">
                  {condition.description}
                </p>
                <div className="space-y-3 mb-4">
                  {condition.platforms.slice(0, 3).map((platform, index) => (
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
                <Link to={`/best/conditions/best-for-${condition.slug}`} className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  View full analysis <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Condition Analysis */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Featured: Best Platforms for Anxiety</h2>
              <Link to="/best/conditions/best-for-anxiety" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                View full analysis <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-1">
                <img 
                  src={featuredCondition.image} 
                  alt={`Best for ${featuredCondition.name}`} 
                  className="w-full rounded-lg mb-4"
                />
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Why Specialized Care Matters</h3>
                  <p className="text-gray-600 text-sm">
                    Anxiety disorders require specific therapeutic approaches like CBT, exposure therapy, and mindfulness techniques. Platforms specializing in anxiety treatment offer therapists with expertise in these methods and often provide additional anxiety-specific resources.
                  </p>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Top Platforms for Anxiety Treatment</h3>
                
                <div className="space-y-6 mb-6">
                  {/* BetterHelp */}
                  <div className="border-b pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                        <h4 className="text-lg font-bold">BetterHelp</h4>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          {renderStars(4.8)}
                        </div>
                        <span className="text-gray-600">4.8/5</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">
                      BetterHelp stands out for anxiety treatment with its large network of therapists specializing in anxiety disorders. Their platform offers multiple communication methods, making it easier for those with social anxiety to engage in therapy through messaging when voice or video feels overwhelming.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-1 text-sm">Strengths for Anxiety</h5>
                        <ul className="space-y-1">
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Large selection of anxiety specialists</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Multiple communication options</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>CBT and mindfulness resources</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-1 text-sm">Price</h5>
                        <p className="text-gray-600 text-sm">$60-$90/week</p>
                        <div className="mt-2">
                          <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                            Visit BetterHelp <ExternalLink className="h-3 w-3 ml-1" />
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
                          {renderStars(4.7)}
                        </div>
                        <span className="text-gray-600">4.7/5</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Talkspace excels for anxiety treatment through its structured approach and the option to integrate medication management when needed. Their psychiatry services make them ideal for those with anxiety who may benefit from combined therapy and medication.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-1 text-sm">Strengths for Anxiety</h5>
                        <ul className="space-y-1">
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Integrated medication management</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Structured anxiety programs</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Insurance coverage options</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-1 text-sm">Price</h5>
                        <p className="text-gray-600 text-sm">$65-$99/week</p>
                        <div className="mt-2">
                          <a href="https://www.talkspace.com" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                            Visit Talkspace <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Online-Therapy.com */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                        <h4 className="text-lg font-bold">Online-Therapy.com</h4>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          {renderStars(4.5)}
                        </div>
                        <span className="text-gray-600">4.5/5</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Online-Therapy.com specializes in CBT, which is one of the most effective treatments for anxiety disorders. Their structured program includes worksheets, activities, and resources specifically designed for anxiety management.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-1 text-sm">Strengths for Anxiety</h5>
                        <ul className="space-y-1">
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Comprehensive CBT program</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Daily therapist feedback</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>Anxiety-specific worksheets</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-1 text-sm">Price</h5>
                        <p className="text-gray-600 text-sm">$40-$88/week</p>
                        <div className="mt-2">
                          <a href="https://www.online-therapy.com" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                            Visit Online-Therapy.com <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Our Recommendation for Anxiety</h4>
                  <p className="text-gray-600">
                    For most people with anxiety, <strong>BetterHelp</strong> offers the best combination of specialized therapists, flexible communication options, and affordability. However, if you need medication management alongside therapy, <strong>Talkspace</strong> would be the better choice. For those specifically seeking structured CBT for anxiety, <strong>Online-Therapy.com</strong> provides the most comprehensive program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Choosing the Right Platform */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Platform for Your Condition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Therapist Specialization</h3>
              <p className="text-gray-600">
                Look for platforms with therapists who specialize in your specific condition. Different mental health conditions respond best to different therapeutic approaches, so finding a therapist with expertise in your particular concern is crucial.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Treatment Approach</h3>
              <p className="text-gray-600">
                Consider which therapeutic methods are most effective for your condition. For example, anxiety and OCD often respond well to CBT and exposure therapy, while trauma may require EMDR or other trauma-focused approaches.
              </p>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Additional Resources</h3>
              <p className="text-gray-600">
                Many platforms offer condition-specific resources like worksheets, exercises, and educational materials. These supplementary tools can enhance your therapy experience and provide additional support between sessions.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Our Assessment Process</h3>
            <p className="text-gray-700 mb-4">
              When evaluating platforms for specific conditions, we consider:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Number of therapists specializing in the condition</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Availability of evidence-based treatments for the condition</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Condition-specific resources and tools</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>User reviews from people with the same condition</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Treatment outcomes for the specific condition</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Find the Right Treatment for Your Condition</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect online therapy platform based on your specific mental health condition and preferences.
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
              <h3 className="text-lg font-bold text-gray-800 mb-2">Why is it important to find a platform that specializes in my condition?</h3>
              <p className="text-gray-700">
                Different mental health conditions respond best to specific therapeutic approaches. Platforms that specialize in your condition are more likely to have therapists trained in these approaches and offer resources tailored to your needs. For example, OCD treatment often requires Exposure and Response Prevention (ERP) therapy, while trauma may benefit from EMDR or other trauma-focused approaches.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can online therapy be effective for serious mental health conditions?</h3>
              <p className="text-gray-700">
                Online therapy can be effective for many mental health conditions, including moderate anxiety, depression, PTSD, and OCD. However, severe conditions, active suicidal ideation, or situations requiring intensive treatment may need in-person care or higher levels of support. Many online platforms conduct initial assessments to determine if their services are appropriate for your needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Do I need medication for my condition, and can I get it online?</h3>
              <p className="text-gray-700">
                Whether medication is needed depends on your specific condition, its severity, and your personal preferences. Some conditions like severe depression, anxiety disorders, or ADHD often benefit from combined medication and therapy. Platforms like Talkspace, Cerebral, and Brightside offer both therapy and medication management services, while others like BetterHelp focus solely on therapy.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I know if a therapist is qualified to treat my specific condition?</h3>
              <p className="text-gray-700">
                Look for therapists who list your condition as a specialty in their profile. You can also check for specific certifications or training in evidence-based treatments for your condition (like CBT for anxiety, EMDR for trauma, etc.). Don't hesitate to ask potential therapists about their experience treating your specific condition and their approach to treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestConditions;