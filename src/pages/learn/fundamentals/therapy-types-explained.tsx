import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Users, Heart, MessageSquare, Sparkles, Leaf } from 'lucide-react';
import Button from '../../../components/Button';

const TherapyTypesExplained = () => {
  // Therapy approaches data
  const therapyApproaches = [
    {
      name: 'Cognitive Behavioral Therapy (CBT)',
      icon: Brain,
      description: 'A structured, goal-oriented approach that focuses on identifying and changing negative thought patterns and behaviors.',
      bestFor: ['Anxiety disorders', 'Depression', 'Phobias', 'OCD', 'PTSD'],
      keyFeatures: [
        'Focuses on present thoughts and behaviors',
        'Structured and time-limited (typically 12-20 sessions)',
        'Includes homework and practical exercises',
        'Evidence-based with strong research support'
      ]
    },
    {
      name: 'Dialectical Behavior Therapy (DBT)',
      icon: Sparkles,
      description: 'Combines cognitive techniques with mindfulness practices to help regulate emotions and improve interpersonal effectiveness.',
      bestFor: ['Borderline personality disorder', 'Self-harm behaviors', 'Emotional dysregulation', 'Suicidal ideation'],
      keyFeatures: [
        'Focuses on acceptance and change',
        'Teaches mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness',
        'Often includes both individual therapy and skills training groups',
        'Structured approach with specific skills to practice'
      ]
    },
    {
      name: 'Psychodynamic Therapy',
      icon: Leaf,
      description: 'Focuses on unconscious processes and how they manifest in current behavior, helping individuals understand how past experiences influence present patterns.',
      bestFor: ['Depression', 'Anxiety', 'Relationship issues', 'Self-exploration', 'Identity concerns'],
      keyFeatures: [
        'Explores unconscious patterns and past experiences',
        'Examines the therapeutic relationship as a window into other relationships',
        'Less structured than CBT or DBT',
        'Can be short-term or long-term'
      ]
    },
    {
      name: 'Interpersonal Therapy (IPT)',
      icon: Users,
      description: 'A time-limited approach that focuses on improving interpersonal relationships and social functioning to reduce distress.',
      bestFor: ['Depression', 'Relationship difficulties', 'Life transitions', 'Grief and loss'],
      keyFeatures: [
        'Focuses on current relationships rather than childhood or past',
        'Time-limited (typically 12-16 weeks)',
        'Addresses social roles and communication patterns',
        'Practical and focused on specific interpersonal problems'
      ]
    },
    {
      name: 'Acceptance and Commitment Therapy (ACT)',
      icon: Heart,
      description: 'Helps individuals accept difficult thoughts and feelings while committing to behavior changes aligned with personal values.',
      bestFor: ['Anxiety', 'Depression', 'Chronic pain', 'OCD', 'Substance use disorders'],
      keyFeatures: [
        'Emphasizes psychological flexibility',
        'Incorporates mindfulness practices',
        'Focuses on values-based living',
        'Uses metaphors and experiential exercises'
      ]
    },
    {
      name: 'Humanistic/Person-Centered Therapy',
      icon: Heart,
      description: 'A non-directive approach that emphasizes personal growth, self-actualization, and the therapeutic relationship.',
      bestFor: ['Self-exploration', 'Personal growth', 'Self-esteem issues', 'Relationship problems'],
      keyFeatures: [
        'Non-judgmental, empathetic therapeutic relationship',
        'Client-led sessions with therapist as facilitator',
        'Focus on self-acceptance and personal growth',
        'Emphasis on present experience rather than past or future'
      ]
    }
  ];

  // Therapy formats data
  const therapyFormats = [
    {
      name: 'Individual Therapy',
      description: 'One-on-one sessions between a therapist and client, providing personalized attention and treatment.',
      benefits: [
        'Complete privacy and confidentiality',
        'Personalized treatment plan',
        'Focused attention on your specific needs',
        'Flexible pacing based on your progress'
      ]
    },
    {
      name: 'Group Therapy',
      description: 'Sessions led by one or more therapists with a group of clients who share similar concerns or conditions.',
      benefits: [
        'Sense of community and belonging',
        'Opportunity to learn from others\' experiences',
        'Practice social skills in a supportive environment',
        'Often more affordable than individual therapy'
      ]
    },
    {
      name: 'Couples Therapy',
      description: 'Sessions with both partners and a therapist to improve relationship dynamics and communication.',
      benefits: [
        'Neutral space to address relationship concerns',
        'Improved communication skills',
        'Tools for conflict resolution',
        'Deeper understanding of relationship patterns'
      ]
    },
    {
      name: 'Family Therapy',
      description: 'Sessions involving multiple family members to address family dynamics, communication, and relationships.',
      benefits: [
        'Addresses issues affecting the entire family system',
        'Improves family communication patterns',
        'Helps navigate family transitions or crises',
        'Builds stronger family relationships'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Therapy Types Explained" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Therapy Types Explained</h1>
              <p className="text-xl text-gray-600 mb-6">
                A comprehensive guide to different therapeutic approaches, helping you understand which might be most effective for your specific needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link} 
                  to="/tools/assessments/therapy-style-assessment" 
                  variant="primary"
                  icon={Brain}
                >
                  Find Your Therapy Match
                </Button>
                <Button 
                  as={Link}
                  to="/compare/modalities/therapy-approaches" 
                  variant="outline"
                  icon={ArrowRight}
                >
                  Compare Approaches
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Therapeutic Approaches</h2>
          <p className="text-gray-600 mb-4">
            With so many different therapy types available, it can be challenging to understand which approach might be best for your specific needs. Different therapeutic approaches have been developed to address various mental health concerns, each with its own theoretical framework, techniques, and areas of focus.
          </p>
          <p className="text-gray-600 mb-4">
            While many therapists integrate multiple approaches (known as "eclectic" or "integrative" therapy), understanding the core principles of each major therapy type can help you make informed decisions about your mental health care.
          </p>
          <p className="text-gray-600">
            This guide breaks down the most common therapeutic modalities, their key features, and what conditions they're typically most effective for. Remember that the therapeutic relationship itself—the connection between you and your therapist—is often one of the most important factors in successful therapy outcomes, regardless of the specific approach used.
          </p>
        </div>

        {/* Major Therapy Approaches */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Major Therapy Approaches</h2>
        
        {therapyApproaches.map((approach, index) => (
          <div key={approach.name} className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start mb-4">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <approach.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{approach.name}</h3>
                <p className="text-gray-600 mb-4">{approach.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Best For:</h4>
                <ul className="space-y-1">
                  {approach.bestFor.map((condition, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {approach.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Therapy Formats */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Therapy Formats</h2>
          <p className="text-gray-600 mb-6">
            In addition to different therapeutic approaches, therapy can be delivered in various formats. Each format offers unique benefits and may be more suitable depending on your specific situation and preferences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {therapyFormats.map((format) => (
              <div key={format.name} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{format.name}</h3>
                <p className="text-gray-600 mb-4">{format.description}</p>
                <h4 className="font-bold text-gray-800 mb-2">Benefits:</h4>
                <ul className="space-y-2">
                  {format.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Online vs. In-Person */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Online vs. In-Person Therapy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Online Therapy</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Convenience</h4>
                    <p className="text-gray-600">Access therapy from anywhere with an internet connection, eliminating travel time and transportation barriers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Accessibility</h4>
                    <p className="text-gray-600">Ideal for those with mobility issues, busy schedules, or who live in areas with limited mental health resources.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Communication Options</h4>
                    <p className="text-gray-600">Many platforms offer multiple communication methods including video, phone, and text messaging.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Effectiveness</h4>
                    <p className="text-gray-600">Research shows online therapy can be as effective as in-person therapy for many conditions.</p>
                  </div>
                </div>
              </div>
              <Link to="/learn/fundamentals/online-therapy-guide" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                Learn more about online therapy <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">In-Person Therapy</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Personal Connection</h4>
                    <p className="text-gray-600">Face-to-face interaction may foster a stronger therapeutic alliance for some individuals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Non-Verbal Cues</h4>
                    <p className="text-gray-600">Therapists can observe body language and subtle non-verbal cues more easily.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Dedicated Space</h4>
                    <p className="text-gray-600">Provides a physical environment specifically designed for therapy, free from home distractions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800">Specialized Treatments</h4>
                    <p className="text-gray-600">Some therapeutic techniques may be better suited for in-person delivery.</p>
                  </div>
                </div>
              </div>
              <Link to="/compare/modalities/online-vs-traditional" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                Compare online and traditional therapy <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Choosing the Right Approach */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Choosing the Right Approach for You</h2>
          
          <div className="space-y-6">
            <p className="text-gray-600">
              Finding the right therapeutic approach depends on several factors, including your specific concerns, personal preferences, and treatment goals. Here are some considerations to help guide your decision:
            </p>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">1. Consider your specific concerns</h3>
              <p className="text-gray-600">
                Some approaches are particularly effective for specific conditions. For example, CBT has strong research support for anxiety and depression, while DBT was specifically developed for borderline personality disorder and emotional regulation difficulties.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">2. Think about your preferences and personality</h3>
              <p className="text-gray-600">
                Do you prefer a structured approach with homework and exercises (like CBT), or would you benefit more from an exploratory, insight-oriented approach (like psychodynamic therapy)? Consider what resonates with your learning and processing style.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">3. Consider your goals and timeline</h3>
              <p className="text-gray-600">
                Are you looking for short-term, symptom-focused treatment or longer-term personal growth and exploration? Some approaches (like CBT and IPT) are typically time-limited, while others may continue for longer periods.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">4. Remember the importance of the therapeutic relationship</h3>
              <p className="text-gray-600">
                Research consistently shows that the quality of the relationship between therapist and client is one of the strongest predictors of successful outcomes, regardless of the specific approach used. Finding a therapist you connect with and trust is crucial.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">5. Be open to an integrative approach</h3>
              <p className="text-gray-600">
                Many therapists draw from multiple therapeutic modalities, tailoring their approach to each client's unique needs. An integrative approach can combine the strengths of different therapy types for a more personalized treatment experience.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Not Sure Where to Start?</h3>
            <p className="text-gray-600 mb-4">
              Take our therapy style assessment to get personalized recommendations based on your specific needs, preferences, and goals.
            </p>
            <Button 
              as={Link} 
              to="/tools/assessments/therapy-style-assessment" 
              variant="primary"
            >
              Take the Assessment
            </Button>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/learn/fundamentals/online-therapy-guide" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Online Therapy Guide</span>
                  </Link>
                </li>
                <li>
                  <Link to="/learn/fundamentals/medication-vs-therapy" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Medication vs. Therapy: Understanding Your Options</span>
                  </Link>
                </li>
                <li>
                  <Link to="/learn/statistics/therapy-outcomes-data" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Therapy Outcomes: What the Research Shows</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Helpful Tools</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/tools/matchers/therapy-platform-matcher" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Therapy Platform Matcher</span>
                  </Link>
                </li>
                <li>
                  <Link to="/tools/assessments/mental-health-assessment" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Mental Health Assessment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/tools/matchers/therapy-type-finder" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Therapy Type Finder</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find the Right Therapist?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Now that you understand different therapy approaches, take the next step in your mental health journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="light"
              size="lg"
            >
              Find Your Therapy Match
            </Button>
            <Button 
              as={Link} 
              to="/best/platforms/best-online-therapy-platforms" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Explore Top Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyTypesExplained;
