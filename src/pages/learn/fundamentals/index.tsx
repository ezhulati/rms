import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, MessageCircle, Pill, Lightbulb, Heart, Users } from 'lucide-react';
import Button from '../../../components/Button';

const LearnFundamentals = () => {
  // Featured articles
  const featuredArticles = [
    {
      title: 'Therapy Types Explained',
      description: 'A comprehensive guide to different therapeutic approaches including CBT, DBT, psychodynamic therapy, and more.',
      icon: MessageCircle,
      path: '/learn/fundamentals/therapy-types-explained',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Online Therapy Guide',
      description: 'Everything you need to know about online therapy, from how it works to what to expect in your first session.',
      icon: Lightbulb,
      path: '/learn/fundamentals/online-therapy-guide',
      image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Common Mental Health Conditions',
      description: 'An overview of frequently diagnosed mental health conditions, their symptoms, and treatment options.',
      icon: Brain,
      path: '/learn/fundamentals/common-mental-health-conditions',
      image: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Medication vs. Therapy',
      description: 'Understanding the differences, benefits, and considerations when choosing between medication, therapy, or a combined approach.',
      icon: Pill,
      path: '/learn/fundamentals/medication-vs-therapy',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Additional resources
  const additionalResources = [
    {
      title: 'Depression',
      description: 'Understanding the symptoms, causes, and treatment options for depression.',
      path: '/learn/fundamentals/depression'
    },
    {
      title: 'Self-Care Strategies',
      description: 'Practical techniques and habits to maintain and improve your mental wellbeing.',
      path: '/learn/fundamentals/self-care'
    },
    {
      title: 'Supporting Loved Ones',
      description: 'How to effectively support someone dealing with mental health challenges.',
      path: '/learn/fundamentals/supporting-loved-ones'
    },
    {
      title: 'Stress Management',
      description: 'Effective strategies for managing stress in daily life.',
      path: '/learn/fundamentals/stress-management'
    },
    {
      title: 'Mindfulness Basics',
      description: 'An introduction to mindfulness practices and their benefits for mental health.',
      path: '/learn/fundamentals/mindfulness-basics'
    },
    {
      title: 'Sleep and Mental Health',
      description: 'The crucial relationship between sleep quality and mental wellbeing.',
      path: '/learn/fundamentals/sleep-mental-health'
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
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Mental Health Fundamentals" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Mental Health Fundamentals</h1>
              <p className="text-xl text-gray-600 mb-6">
                Essential information about mental health concepts, conditions, and treatment approaches to help you build a solid understanding of mental wellbeing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link} 
                  to="/tools/assessments/mental-health-assessment" 
                  variant="primary"
                  icon={Brain}
                >
                  Take Mental Health Assessment
                </Button>
                <Button 
                  as={Link}
                  to="/learn" 
                  variant="outline"
                  icon={ArrowRight}
                >
                  Explore All Learning Resources
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Mental Health</h2>
          <p className="text-gray-600 mb-4">
            Mental health is a crucial component of overall wellbeing, affecting how we think, feel, and act in daily life. It influences how we handle stress, relate to others, and make choices. Just like physical health, mental health exists on a spectrum and can change over time.
          </p>
          <p className="text-gray-600 mb-4">
            Our mental health fundamentals section provides evidence-based information to help you understand key concepts in mental health, recognize common conditions, and learn about different treatment approaches. Whether you're seeking information for yourself or to support someone else, these resources offer a solid foundation of knowledge.
          </p>
          <p className="text-gray-600">
            Remember that while education is important, it's not a substitute for professional help. If you're experiencing mental health challenges, we encourage you to reach out to a qualified healthcare provider.
          </p>
        </div>

        {/* Featured Articles */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredArticles.map((article) => (
            <div key={article.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <article.icon className="h-4 w-4 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{article.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <Link 
                  to={article.path} 
                  className="text-indigo-600 font-medium flex items-center hover:text-indigo-800"
                >
                  Read article <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Additional Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalResources.map((resource) => (
              <div key={resource.title} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-3">{resource.description}</p>
                <Link 
                  to={resource.path} 
                  className="text-indigo-600 font-medium flex items-center hover:text-indigo-800"
                >
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Learning about mental health is an important first step. When you're ready, we can help you find the right support for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="light"
              size="lg"
              icon={Users}
            >
              Find Your Therapy Match
            </Button>
            <Button 
              as={Link} 
              to="/best/platforms/best-online-therapy-platforms" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
              icon={Heart}
            >
              Explore Top Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnFundamentals;
