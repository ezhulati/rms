import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Brain, ArrowRight, BookOpen, Users, Star } from 'lucide-react';
import Button from '../components/Button';

const ConditionsAZPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Comprehensive list of mental health conditions
  const conditions = [
    {
      letter: 'A',
      conditions: [
        {
          name: 'Anxiety Disorders',
          slug: 'anxiety-disorders',
          description: 'Including GAD, social anxiety, panic disorder, and specific phobias',
          common: true,
          image: '/images/concepts/conditionsazpage.jpg',
          symptoms: ['Excessive worry', 'Restlessness', 'Difficulty concentrating', 'Sleep problems']
        },
        {
          name: 'ADHD',
          slug: 'adhd',
          description: 'Attention-deficit/hyperactivity disorder affecting focus, impulse control, and activity levels',
          common: true,
          image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          symptoms: ['Inattention', 'Hyperactivity', 'Impulsivity', 'Disorganization']
        },
        {
          name: 'Addiction',
          slug: 'addiction',
          description: 'Substance use disorders and behavioral addictions',
          common: true,
          image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          symptoms: ['Loss of control', 'Cravings', 'Continued use despite consequences', 'Tolerance']
        }
      ]
    },
    {
      letter: 'B',
      conditions: [
        {
          name: 'Bipolar Disorder',
          slug: 'bipolar-disorder',
          description: 'Characterized by alternating periods of depression and mania',
          common: true,
          image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          symptoms: ['Mood swings', 'Periods of high energy', 'Periods of depression', 'Changes in sleep patterns']
        },
        {
          name: 'Borderline Personality Disorder (BPD)',
          slug: 'borderline-personality-disorder',
          description: 'A condition characterized by difficulties regulating emotion',
          common: false,
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          symptoms: ['Unstable relationships', 'Fear of abandonment', 'Impulsivity', 'Emotional instability']
        }
      ]
    },
    {
      letter: 'D',
      conditions: [
        {
          name: 'Depression',
          slug: 'depression',
          description: 'Major depressive disorder and related conditions',
          common: true,
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          symptoms: ['Persistent sadness', 'Loss of interest', 'Changes in sleep', 'Fatigue']
        }
      ]
    },
    {
      letter: 'E',
      conditions: [
        {
          name: 'Eating Disorders',
          slug: 'eating-disorders',
          description: 'Including anorexia, bulimia, and binge eating disorder',
          common: true,
          image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          symptoms: ['Disturbed eating patterns', 'Body image issues', 'Weight changes', 'Obsession with food']
        }
      ]
    },
    {
      letter: 'O',
      conditions: [
        {
          name: 'OCD',
          slug: 'ocd',
          description: 'Obsessive-compulsive disorder characterized by intrusive thoughts and repetitive behaviors',
          common: true,
          image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          symptoms: ['Intrusive thoughts', 'Compulsive behaviors', 'Anxiety', 'Need for order']
        }
      ]
    },
    {
      letter: 'P',
      conditions: [
        {
          name: 'PTSD',
          slug: 'ptsd',
          description: 'Post-traumatic stress disorder following exposure to trauma',
          common: true,
          image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          symptoms: ['Flashbacks', 'Nightmares', 'Avoidance', 'Hypervigilance']
        }
      ]
    },
    {
      letter: 'S',
      conditions: [
        {
          name: 'Schizophrenia',
          slug: 'schizophrenia',
          description: 'A serious mental disorder affecting thinking, emotions, and behavior',
          common: false,
          image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          symptoms: ['Hallucinations', 'Delusions', 'Disorganized thinking', 'Social withdrawal']
        },
        {
          name: 'Social Anxiety Disorder',
          slug: 'social-anxiety',
          description: 'Intense fear and anxiety in social situations',
          common: true,
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          symptoms: ['Fear of judgment', 'Avoidance of social situations', 'Physical symptoms in social settings', 'Overthinking']
        }
      ]
    }
  ];

  // Filter conditions based on search term
  const filteredConditions = conditions.map(letterGroup => ({
    letter: letterGroup.letter,
    conditions: letterGroup.conditions.filter(condition =>
      condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      condition.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.conditions.length > 0);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mental Health Conditions A-Z</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive guide to mental health conditions, including symptoms, treatments, and finding the right help.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search conditions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-gray-800 shadow-sm transition-all duration-200 hover:border-indigo-300"
              />
            </div>
          </div>
        </div>

        {/* Common Conditions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Common Mental Health Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conditions
              .flatMap(group => group.conditions)
              .filter(condition => condition.common)
              .slice(0, 6)
              .map(condition => (
                <Link
                  key={condition.slug}
                  to={`/conditions-az/${condition.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={condition.image}
                    alt={condition.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{condition.name}</h3>
                    <p className="text-gray-600 mb-4">{condition.description}</p>
                    <div className="flex items-center text-indigo-600 hover:text-indigo-800">
                      Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* A-Z Directory */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Conditions Directory A-Z</h2>
          {filteredConditions.map(letterGroup => (
            <div key={letterGroup.letter} className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">{letterGroup.letter}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {letterGroup.conditions.map(condition => (
                  <Link
                    key={condition.slug}
                    to={`/conditions-az/${condition.slug}`}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{condition.name}</h4>
                    <p className="text-gray-600 mb-4">{condition.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-gray-700">Common symptoms:</h5>
                      <ul className="list-disc pl-5 text-gray-600 text-sm">
                        {condition.symptoms.map((symptom, index) => (
                          <li key={index}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Mental Health Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Find Treatment</h3>
              <p className="text-gray-600 mb-4">
                Compare and find the right online therapy platform for your specific condition.
              </p>
              <Button 
                as={Link} 
                to="/tools/matchers/therapy-platform-matcher" 
                variant="primary" 
                size="sm" 
                icon={ArrowRight}
              >
                Find your match
              </Button>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Learn More</h3>
              <p className="text-gray-600 mb-4">
                Access our comprehensive library of mental health educational resources.
              </p>
              <Button 
                as={Link} 
                to="/learn" 
                variant="primary" 
                size="sm" 
                icon={ArrowRight}
              >
                Explore resources
              </Button>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Get Support</h3>
              <p className="text-gray-600 mb-4">
                Connect with others and find support groups for your specific condition.
              </p>
              <Button 
                as={Link} 
                to="/resources" 
                variant="primary" 
                size="sm" 
                icon={ArrowRight}
              >
                Find support
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Finding the Right Treatment?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take our personalized assessment to get matched with the perfect online therapy platform for your specific condition.
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

export default ConditionsAZPage;
