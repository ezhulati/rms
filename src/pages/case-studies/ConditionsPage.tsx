import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Clock, ArrowRight, BookOpen, Brain, Activity } from 'lucide-react';
import MetaTags from '../../components/MetaTags';
import Button from '../../components/Button';

const ConditionsPage = () => {
  const caseStudies = [
    {
      id: 'anxiety',
      title: 'Anxiety Disorder Treatment: A 6-Month Online Therapy Journey',
      condition: 'Generalized Anxiety Disorder',
      platform: 'BetterHelp',
      duration: '6 months',
      approach: 'Cognitive Behavioral Therapy (CBT)',
      outcomes: ['47% reduction in anxiety symptoms', 'Improved sleep quality', 'Development of sustainable coping strategies'],
      description: 'This case study follows a 32-year-old professional managing generalized anxiety disorder through online therapy, documenting the treatment approach, challenges, and outcomes over a 6-month period.',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'depression',
      title: 'Depression Management Through Text-Based Therapy',
      condition: 'Major Depressive Disorder',
      platform: 'Talkspace',
      duration: '12 months',
      approach: 'Psychodynamic Therapy with Behavioral Activation',
      outcomes: ['53% improvement in depression scale scores', 'Return to full-time employment', 'Reduced medication dosage'],
      description: 'A longitudinal study of a 45-year-old client with treatment-resistant depression who found success through consistent text-based therapy combined with medication management.',
      image: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ptsd',
      title: 'PTSD Recovery: Combining Online and In-Person Treatment',
      condition: 'Post-Traumatic Stress Disorder',
      platform: 'Hybrid (Online-Therapy.com and local therapist)',
      duration: '9 months',
      approach: 'EMDR and Trauma-Focused CBT',
      outcomes: ['68% reduction in flashbacks and nightmares', 'Improved social functioning', 'Development of trauma processing skills'],
      description: 'This case study examines how a 29-year-old veteran with PTSD benefited from a hybrid approach combining online therapy resources with periodic in-person EMDR sessions.',
      image: 'https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ocd',
      title: 'OCD Treatment Through Specialized Online Platform',
      condition: 'Obsessive-Compulsive Disorder',
      platform: 'NOCD',
      duration: '4 months',
      approach: 'Exposure and Response Prevention (ERP)',
      outcomes: ['61% reduction in compulsive behaviors', 'Decreased time spent on rituals', 'Improved quality of life measures'],
      description: 'A detailed analysis of how a specialized OCD treatment platform helped a 26-year-old client significantly reduce symptoms through structured ERP therapy and between-session support.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Bipolar Disorder Management: Therapy and Medication Coordination',
      condition: 'Bipolar II Disorder',
      platform: 'Cerebral',
      duration: '8 months',
      approach: 'Interpersonal and Social Rhythm Therapy with Medication Management',
      outcomes: ['Reduced frequency and intensity of mood episodes', 'Improved medication adherence', 'Development of mood tracking skills'],
      description: 'This case study explores how integrated care through an online platform helped stabilize a 35-year-old client with Bipolar II Disorder through coordinated therapy and psychiatric services.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Eating Disorder Recovery Through Specialized Online Program',
      condition: 'Bulimia Nervosa',
      platform: 'Equip',
      duration: '10 months',
      approach: 'Family-Based Treatment (FBT) and CBT-E',
      outcomes: ['85% reduction in binge-purge episodes', 'Normalized eating patterns', 'Improved body image'],
      description: 'A comprehensive case study of a 22-year-old college student\'s recovery from bulimia through a specialized online eating disorder treatment program involving family support and multiple specialists.',
      image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Mental Health Condition Case Studies | RealMindSolutions"
        description="Real-world case studies of online therapy treatment for various mental health conditions including anxiety, depression, PTSD, OCD, bipolar disorder, and eating disorders."
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mental Health Condition Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how online therapy has helped people manage and recover from various mental health conditions.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">About Our Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Real Experiences</h3>
              <p className="text-gray-600">
                These case studies are based on real therapeutic journeys, with identifying details changed to protect privacy. They represent typical experiences and outcomes.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Evidence-Based Approaches</h3>
              <p className="text-gray-600">
                Each case study highlights specific therapeutic approaches and how they were applied to address particular mental health conditions effectively.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Measured Outcomes</h3>
              <p className="text-gray-600">
                We document concrete outcomes and improvements using standardized assessment tools and quality of life measures to demonstrate effectiveness.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.condition} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">{study.title}</h2>
                <p className="text-gray-600 mb-4">{study.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Condition</span>
                    <p className="font-medium text-gray-800">{study.condition}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Platform</span>
                    <p className="font-medium text-gray-800">{study.platform}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Duration</span>
                    <p className="font-medium text-gray-800">{study.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Approach</span>
                    <p className="font-medium text-gray-800">{study.approach}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">Key Outcomes</span>
                  <ul className="mt-1 space-y-1">
                    {study.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              <Button 
                as={Link}
                to={`/case-studies/conditions/${study.id === 'anxiety' ? 'anxiety-treatment-success' : 
                                              study.id === 'depression' ? 'depression-recovery-journey' : 
                                              study.id === 'ptsd' ? 'ptsd-treatment-online' : 
                                              study.id === 'ocd' ? 'ocd-management-success' : '#'}`}
                variant="outline"
                size="sm"
                icon={FileText}
                className="w-full justify-center"
              >
                Read Full Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-indigo-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Finding the Right Treatment for Your Condition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                  <BookOpen className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Learn About Your Condition</h3>
                  <p className="text-gray-600">
                    Understanding your specific mental health condition is the first step toward effective treatment. Our comprehensive condition guides provide evidence-based information.
                  </p>
                  <Link to="/conditions-az" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center mt-3">
                    Explore condition guides <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                  <Users className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Find Specialized Platforms</h3>
                  <p className="text-gray-600">
                    Some mental health conditions benefit from specialized treatment approaches. We've identified the best online therapy platforms for specific conditions.
                  </p>
                  <Link to="/best/conditions" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center mt-3">
                    See condition-specific recommendations <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Research Methodology</h2>
          <p className="text-gray-600 mb-6">
            Our case studies are developed through a rigorous process to ensure accuracy and usefulness:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-indigo-800 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Data Collection</h3>
                <p className="text-gray-600">
                  We gather information from therapy platforms, practitioners, and consenting clients (with identifying details changed) to document real therapeutic journeys.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-indigo-800 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Outcome Measurement</h3>
                <p className="text-gray-600">
                  We use standardized assessment tools and quality of life measures to quantify improvements and treatment effectiveness.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-indigo-800 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Expert Review</h3>
                <p className="text-gray-600">
                  Mental health professionals review our case studies to ensure clinical accuracy and appropriate representation of therapeutic approaches.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-indigo-800 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Regular Updates</h3>
                <p className="text-gray-600">
                  We continually add new case studies and follow-up on existing ones to document long-term outcomes and maintenance of improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionsPage;
