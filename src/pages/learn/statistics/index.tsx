import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, PieChart, TrendingUp, Brain, Users, Globe, LineChart } from 'lucide-react';
import Button from '../../../components/Button';

const LearnStatistics = () => {
  // Featured statistics articles
  const featuredArticles = [
    {
      title: 'Mental Health Statistics',
      description: 'Key data and trends in mental health, including prevalence, treatment access, and outcomes.',
      icon: BarChart,
      path: '/learn/statistics/mental-health-statistics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Online Therapy Effectiveness',
      description: 'Research findings on the efficacy of online therapy compared to traditional in-person treatment.',
      icon: LineChart,
      path: '/learn/statistics/online-therapy-effectiveness',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Therapy Platform Comparisons',
      description: 'Data-driven comparisons of major online therapy platforms, including user satisfaction and outcomes.',
      icon: PieChart,
      path: '/learn/statistics/therapy-platform-comparisons',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Mental Health Trends',
      description: 'Analysis of changing patterns in mental health diagnoses, treatment approaches, and public attitudes.',
      icon: TrendingUp,
      path: '/learn/statistics/mental-health-trends',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Key statistics
  const keyStats = [
    {
      title: '1 in 5',
      description: 'U.S. adults experience mental illness each year',
      source: 'National Institute of Mental Health'
    },
    {
      title: '60%',
      description: 'Of people with mental illness don\'t receive treatment',
      source: 'Mental Health America'
    },
    {
      title: '76%',
      description: 'Report improvement after online therapy',
      source: 'Journal of Telemedicine and e-Health'
    },
    {
      title: '$1 trillion',
      description: 'Annual cost of mental health conditions globally',
      source: 'World Health Organization'
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
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Mental Health Statistics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Mental Health Statistics & Research</h1>
              <p className="text-xl text-gray-600 mb-6">
                Evidence-based data and research findings on mental health conditions, treatment effectiveness, and industry trends to inform your decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link} 
                  to="/learn/statistics/mental-health-statistics" 
                  variant="primary"
                  icon={BarChart}
                >
                  Explore Key Statistics
                </Button>
                <Button 
                  as={Link}
                  to="/learn" 
                  variant="outline"
                  icon={ArrowRight}
                >
                  View All Learning Resources
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Mental Health Statistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyStats.map((stat, index) => (
              <div key={index} className="bg-indigo-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.title}</div>
                <p className="text-gray-700 mb-3">{stat.description}</p>
                <p className="text-sm text-gray-500">Source: {stat.source}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Link 
              to="/learn/statistics/mental-health-statistics" 
              className="text-indigo-600 font-medium flex items-center justify-center hover:text-indigo-800"
            >
              View detailed statistics <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Featured Articles */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Statistics & Research Articles</h2>
        
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

        {/* Topic Categories */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Statistics by Topic</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Conditions</h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link to="/learn/statistics/depression-statistics" className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    Depression Statistics
                  </Link>
                </li>
                <li>
                  <Link to="/learn/statistics/anxiety-statistics" className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    Anxiety Statistics
                  </Link>
                </li>
                <li>
                  <Link to="/learn/statistics/ptsd-statistics" className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    PTSD Statistics
                  </Link>
                </li>
                <li>
                  <Link to="/learn/statistics/conditions-overview" className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    All Conditions Data
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Globe className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Treatment</h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link to="/learn/statistics/online-therapy-effectiveness" className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    Online Therapy Effectiveness
                  </Link>
                </li>
                <li>
                  <Link to="/learn/statistics/medication-statistics" className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    Medication Statistics
                  </Link>
                </li>
                <li>
                  <Link to="/learn/statistics/therapy-approaches-data" className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    Therapy Approaches Data
                  </Link>
                </li>
                <li>
                  <Link to="/learn/statistics/treatment-outcomes" className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    Treatment Outcomes
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Users className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Demographics</h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link to="/learn/statistics/age-group-statistics" className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    Age Group Statistics
                  </Link>
                </li>
                <li>
                  <Link to="/learn/statistics/gender-differences" className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    Gender Differences
                  </Link>
                </li>
                <li>
                  <Link to="/learn/statistics/cultural-factors" className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    Cultural Factors
                  </Link>
                </li>
                <li>
                  <Link to="/learn/statistics/socioeconomic-impact" className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                    Socioeconomic Impact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find the Right Support?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Now that you understand the data, take the next step toward better mental health with personalized recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/assessments/mental-health-assessment" 
              variant="light"
              size="lg"
              icon={Brain}
            >
              Take Mental Health Assessment
            </Button>
            <Button 
              as={Link} 
              to="/tools/matchers/therapy-platform-matcher" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
              icon={Users}
            >
              Find Your Therapy Match
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnStatistics;
