import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, PieChart, TrendingUp, Users, Brain, Globe } from 'lucide-react';
import Button from '../../../components/Button';

const MentalHealthStatistics = () => {
  // Prevalence statistics
  const prevalenceStats = [
    {
      title: '1 in 5',
      description: 'U.S. adults experience mental illness each year (52.9 million people)',
      source: 'National Institute of Mental Health, 2025'
    },
    {
      title: '1 in 6',
      description: 'Youth aged 6-17 experience a mental health disorder each year',
      source: 'CDC, 2024'
    },
    {
      title: '280 million',
      description: 'People worldwide have depression',
      source: 'World Health Organization, 2025'
    },
    {
      title: '301 million',
      description: 'People worldwide have an anxiety disorder',
      source: 'World Health Organization, 2025'
    }
  ];

  // Treatment statistics
  const treatmentStats = [
    {
      title: 'Only 46.2%',
      description: 'Of U.S. adults with mental illness received treatment in 2023',
      source: 'SAMHSA, 2024'
    },
    {
      title: '11 years',
      description: 'Average delay between onset of mental health symptoms and treatment',
      source: 'National Alliance on Mental Illness, 2024'
    },
    {
      title: '60%',
      description: 'Of U.S. counties do not have a single practicing psychiatrist',
      source: 'American Psychiatric Association, 2023'
    },
    {
      title: '76%',
      description: 'Of people report improved symptoms after online therapy treatment',
      source: 'Journal of Telemedicine and e-Health, 2024'
    }
  ];

  // Demographic statistics
  const demographicStats = [
    {
      group: 'Gender',
      stats: [
        'Women are nearly twice as likely as men to experience depression',
        'Men are less likely to seek mental health treatment than women',
        'Transgender individuals experience mental health conditions at 4x the rate of cisgender individuals'
      ]
    },
    {
      group: 'Age',
      stats: [
        'Young adults (18-25) have the highest prevalence of mental illness (33.7%)',
        'Suicide is the second leading cause of death among people aged 10-34',
        'Depression affects approximately 7% of adults over 65'
      ]
    },
    {
      group: 'Race/Ethnicity',
      stats: [
        'Black and Hispanic Americans use mental health services at about half the rate of white Americans',
        'Native Americans experience serious mental illness at higher rates than any other demographic group',
        'Asian Americans are the least likely to seek mental health treatment'
      ]
    }
  ];

  // Online therapy statistics
  const onlineTherapyStats = [
    {
      title: '76%',
      description: 'Of clients report significant symptom improvement with online therapy',
      source: 'Journal of Telemedicine and e-Health, 2024'
    },
    {
      title: '98%',
      description: 'Of online therapy users find it more convenient than traditional therapy',
      source: 'American Psychological Association, 2024'
    },
    {
      title: '63%',
      description: 'Increase in online therapy usage since 2020',
      source: 'Mental Health America, 2025'
    },
    {
      title: '71%',
      description: 'Of online therapy users would not have sought traditional therapy',
      source: 'Journal of Medical Internet Research, 2024'
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Mental Health Statistics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Mental Health Statistics</h1>
              <p className="text-xl text-gray-600 mb-6">
                Key data and trends in mental health, including prevalence, treatment access, and outcomes to help understand the scope and impact of mental health conditions.
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
                  to="/learn/statistics" 
                  variant="outline"
                  icon={ArrowRight}
                >
                  View All Statistics
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Mental Health Data</h2>
          <p className="text-gray-600 mb-4">
            Mental health statistics provide crucial insights into the prevalence, impact, and treatment of mental health conditions. These numbers help us understand the scope of mental health challenges, identify disparities in care, and track progress in addressing these issues.
          </p>
          <p className="text-gray-600 mb-4">
            The data presented here comes from reputable sources including government agencies, research institutions, and peer-reviewed studies. While statistics can vary based on methodology, population samples, and definitions used, they collectively paint a picture of mental health in the United States and globally.
          </p>
          <p className="text-gray-600">
            Understanding these statistics can help reduce stigma, inform policy decisions, and guide individuals in seeking appropriate care. It's important to remember that behind each number are real people with unique experiences and needs.
          </p>
        </div>

        {/* Prevalence Statistics */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <BarChart className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Prevalence of Mental Health Conditions</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Mental health conditions are common across all demographics, affecting millions of people worldwide. Understanding prevalence helps contextualize the scale of mental health challenges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prevalenceStats.map((stat, index) => (
              <div key={index} className="bg-indigo-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.title}</div>
                <p className="text-gray-700 mb-3">{stat.description}</p>
                <p className="text-sm text-gray-500">{stat.source}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Most Common Mental Health Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-800 mb-1">Anxiety Disorders</div>
                <p className="text-gray-600">Affects 19.1% of U.S. adults annually (48 million people)</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-800 mb-1">Major Depression</div>
                <p className="text-gray-600">Affects 8.4% of U.S. adults annually (21 million people)</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-800 mb-1">PTSD</div>
                <p className="text-gray-600">Affects 3.6% of U.S. adults annually (9 million people)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Statistics */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <PieChart className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Treatment & Access Statistics</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Despite the prevalence of mental health conditions, significant gaps exist in treatment access and utilization. These statistics highlight both challenges and improvements in mental health care.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentStats.map((stat, index) => (
              <div key={index} className="bg-indigo-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.title}</div>
                <p className="text-gray-700 mb-3">{stat.description}</p>
                <p className="text-sm text-gray-500">{stat.source}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Treatment Barriers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-800 mb-1">Cost & Insurance</div>
                <p className="text-gray-600">60% of adults with mental illness cite cost as the primary barrier to seeking treatment</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-800 mb-1">Provider Availability</div>
                <p className="text-gray-600">77 million Americans live in areas with insufficient mental health providers</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-800 mb-1">Stigma</div>
                <p className="text-gray-600">31% of adults with mental illness report not seeking treatment due to concerns about others' perceptions</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-800 mb-1">Awareness</div>
                <p className="text-gray-600">42% of people with symptoms of mental illness are unaware that effective treatments exist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Demographic Differences */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Demographic Differences</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Mental health conditions and access to care vary significantly across different demographic groups. Understanding these disparities is crucial for developing equitable mental health services.
          </p>
          
          {demographicStats.map((demographic, index) => (
            <div key={demographic.group} className={`${index > 0 ? 'mt-6' : ''}`}>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{demographic.group}</h3>
              <div className="bg-gray-50 rounded-lg p-5">
                <ul className="space-y-3">
                  {demographic.stats.map((stat, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          
          <div className="bg-indigo-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Health Disparities</h3>
            <p className="text-gray-700">
              Mental health disparities are influenced by multiple factors including socioeconomic status, geographic location, cultural factors, and systemic barriers. Addressing these disparities requires targeted interventions, culturally competent care, and policy changes to improve access and quality of mental health services for all populations.
            </p>
          </div>
        </div>

        {/* Online Therapy Statistics */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Globe className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Online Therapy Statistics</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Online therapy has grown significantly in recent years, particularly accelerated by the COVID-19 pandemic. These statistics highlight trends in telemental health adoption and effectiveness.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onlineTherapyStats.map((stat, index) => (
              <div key={index} className="bg-indigo-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.title}</div>
                <p className="text-gray-700 mb-3">{stat.description}</p>
                <p className="text-sm text-gray-500">{stat.source}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Online Therapy Trends</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-800 mb-1">Modality Preferences</div>
                <p className="text-gray-600">Video sessions (52%), messaging (31%), and phone sessions (17%) are the most common online therapy formats</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-800 mb-1">User Demographics</div>
                <p className="text-gray-600">Adults aged 25-34 represent the largest user group of online therapy services (38%)</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-800 mb-1">Insurance Coverage</div>
                <p className="text-gray-600">73% increase in insurance plans covering telemental health services since 2020</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-gray-800 mb-1">Retention Rates</div>
                <p className="text-gray-600">Online therapy clients complete 60% more sessions on average compared to traditional therapy</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Link to="/learn/statistics/online-therapy-effectiveness" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
              Learn more about online therapy effectiveness <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Economic Impact */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Economic Impact</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Mental health conditions have significant economic implications, affecting productivity, healthcare costs, and quality of life. Understanding these impacts highlights the importance of mental health investment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Global Economic Burden</h3>
              <p className="text-gray-600 mb-3">
                Mental health conditions cost the global economy approximately $1 trillion annually in lost productivity, according to the World Health Organization.
              </p>
              <p className="text-gray-600">
                Depression and anxiety disorders alone cost the global economy an estimated $1 trillion each year in lost productivity.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Return on Investment</h3>
              <p className="text-gray-600 mb-3">
                For every $1 invested in scaled-up treatment for common mental disorders, there is a return of $4 in improved health and productivity.
              </p>
              <p className="text-gray-600">
                Workplace mental health programs show an average return on investment of $4.25 for every dollar spent.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Workplace Impact</h3>
              <p className="text-gray-600 mb-3">
                Mental health conditions account for approximately 200 million lost workdays annually in the United States.
              </p>
              <p className="text-gray-600">
                Employees with untreated mental health conditions use an average of 3x more sick days than other employees.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Healthcare Costs</h3>
              <p className="text-gray-600 mb-3">
                People with mental health conditions have healthcare costs that are 2-3x higher than those without mental health conditions.
              </p>
              <p className="text-gray-600">
                Early intervention can reduce long-term healthcare costs by 25-40% for many mental health conditions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Take Action for Your Mental Health</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Understanding mental health statistics is just the first step. Take action today by exploring your options for support and treatment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/assessments/mental-health-assessment" 
              variant="light"
              size="lg"
            >
              Take Mental Health Assessment
            </Button>
            <Button 
              as={Link} 
              to="/best/platforms/best-online-therapy-platforms" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Explore Treatment Options
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthStatistics;
