import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import Button from '../../../components/Button';
import HowWeReviewed from '../../../components/HowWeReviewed';

const AnxietyTreatment: React.FC = () => {
  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="h-5 w-5 fill-current" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<Star key={i} className="h-5 w-5 fill-current" />);
      } else {
        stars.push(<Star key={i} className="h-5 w-5" strokeWidth={1} />);
      }
    }
    return <div className="flex text-yellow-400">{stars}</div>;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Online Therapy for Anxiety" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Best Online Therapy for Anxiety</h1>
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  {renderStars(4.5)}
                </div>
                <span className="text-gray-600 font-medium">Expert Review</span>
              </div>
              <p className="text-xl text-gray-600 mb-6">
                Comprehensive analysis of the most effective online therapy platforms for anxiety treatment
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Top Pick</h3>
                  <p className="text-gray-600">BetterHelp</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Best Value</h3>
                  <p className="text-gray-600">Online-Therapy.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Best for Severe Anxiety</h3>
                  <p className="text-gray-600">Talkspace</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Best with Insurance</h3>
                  <p className="text-gray-600">Cerebral</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button 
                  as={Link} 
                  to="/tools/matchers/therapy-platform-matcher" 
                  variant="primary"
                >
                  Find Your Perfect Match
                </Button>
                <Button 
                  as={Link} 
                  to="/tools/assessments/anxiety-screening" 
                  variant="outline"
                >
                  Take Anxiety Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Online Therapy for Anxiety: An Overview</h2>
          <p className="text-gray-700 mb-4">
            Anxiety disorders affect approximately 40 million adults in the United States, making them the most common mental health conditions. Online therapy has emerged as an effective, accessible option for anxiety treatment, offering evidence-based approaches like Cognitive Behavioral Therapy (CBT), mindfulness techniques, and exposure therapy in a convenient format.
          </p>
          <p className="text-gray-700 mb-4">
            Research consistently shows that online therapy can be as effective as in-person treatment for anxiety disorders, with studies demonstrating significant symptom reduction for conditions ranging from generalized anxiety disorder to panic disorder, social anxiety, and specific phobias.
          </p>
          <p className="text-gray-700">
            In this comprehensive guide, we evaluate the leading online therapy platforms specifically for anxiety treatment, examining their therapeutic approaches, therapist qualifications, accessibility, and overall effectiveness to help you find the right solution for your needs.
          </p>
        </div>

        {/* Top Platforms Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Online Therapy Platforms for Anxiety</h2>
          
          <div className="space-y-8">
            {/* BetterHelp */}
            <div className="border-b pb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">1. BetterHelp</h3>
                <div className="flex items-center">
                  {renderStars(4.5)}
                  <span className="ml-2 text-gray-600">4.5/5</span>
                </div>
              </div>
              
              <div className="md:flex">
                <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="BetterHelp for Anxiety" 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 mb-4">
                    BetterHelp earns our top recommendation for anxiety treatment due to its extensive network of therapists specializing in anxiety disorders, flexible communication options, and evidence-based approaches. The platform's matching algorithm effectively pairs clients with therapists experienced in treating specific anxiety conditions.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Strengths for Anxiety Treatment</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Large network of anxiety specialists</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Multiple communication methods (messaging, phone, video)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>CBT and other evidence-based approaches</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Weekly live sessions included in all plans</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Limitations</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No insurance coverage</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No medication management</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Not suitable for severe anxiety requiring intensive treatment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-700">
                      <strong>Price:</strong> $60-$90/week
                    </div>
                    <Button 
                      as={Link} 
                      to="/reviews/platforms/betterhelp" 
                      variant="outline" 
                      size="sm" 
                      icon={ArrowRight}
                    >
                      Read Full Review
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Online-Therapy.com */}
            <div className="border-b pb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">2. Online-Therapy.com</h3>
                <div className="flex items-center">
                  {renderStars(4.3)}
                  <span className="ml-2 text-gray-600">4.3/5</span>
                </div>
              </div>
              
              <div className="md:flex">
                <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Online-Therapy.com for Anxiety" 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 mb-4">
                    Online-Therapy.com stands out for anxiety treatment with its structured CBT program specifically designed to address anxiety disorders. The platform offers a comprehensive toolbox including worksheets, activities, and journaling exercises that are particularly effective for anxiety management.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Strengths for Anxiety Treatment</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Structured CBT program specifically for anxiety</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Comprehensive worksheets and activities</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Mindfulness and yoga resources</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Daily therapist feedback on worksheets</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Limitations</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Limited to CBT approach</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Live sessions only in higher-tier plans</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No insurance coverage</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-700">
                      <strong>Price:</strong> $40-$88/week
                    </div>
                    <Button 
                      as={Link} 
                      to="/reviews/platforms/online-therapy-com" 
                      variant="outline" 
                      size="sm" 
                      icon={ArrowRight}
                    >
                      Read Full Review
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Talkspace */}
            <div className="border-b pb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">3. Talkspace</h3>
                <div className="flex items-center">
                  {renderStars(4.2)}
                  <span className="ml-2 text-gray-600">4.2/5</span>
                </div>
              </div>
              
              <div className="md:flex">
                <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                  <img 
                    src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Talkspace for Anxiety" 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 mb-4">
                    Talkspace is particularly well-suited for those with moderate to severe anxiety who may benefit from combined therapy and medication management. The platform's psychiatric services make it an excellent choice for comprehensive anxiety treatment, especially for conditions that respond well to medication.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Strengths for Anxiety Treatment</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Integrated medication management</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Insurance coverage available</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Specialized anxiety treatment programs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Multiple communication methods</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Limitations</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Higher pricing</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Limited live sessions on basic plans</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Less structured self-help resources</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-700">
                      <strong>Price:</strong> $65-$99/week
                    </div>
                    <Button 
                      as={Link} 
                      to="/reviews/platforms/talkspace" 
                      variant="outline" 
                      size="sm" 
                      icon={ArrowRight}
                    >
                      Read Full Review
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Reviewed */}
        <HowWeReviewed />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Find Your Ideal Anxiety Treatment</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect online therapy platform for your specific anxiety symptoms, preferences, and needs.
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
              to="/tools/assessments/anxiety-screening" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Take Anxiety Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnxietyTreatment;
