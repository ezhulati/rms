import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Clock, ArrowRight, BookOpen, Brain, Activity, Target } from 'lucide-react';
import MetaTags from '../../components/MetaTags';
import Button from '../../components/Button';

const DemographicsPage = () => {
  const caseStudies = [
    {
      id: 'remote-worker',
      title: 'Remote Worker Mental Health: Balancing Work and Wellbeing',
      demographic: 'Remote Workers',
      platform: 'BetterHelp',
      duration: '7 months',
      approach: 'CBT and Mindfulness',
      outcomes: ['Improved work-life boundaries', 'Reduced anxiety and burnout', 'Better social connections'],
      description: 'This case study examines how online therapy helped a remote software developer manage work-life balance challenges, isolation, and burnout through specialized interventions.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'teen',
      title: 'Online Therapy for Teens: A School Counselor Collaboration',
      demographic: 'Adolescents (13-17)',
      platform: 'Teen Counseling',
      duration: '8 months',
      approach: 'CBT and Motivational Interviewing',
      outcomes: ['Improved school attendance', 'Reduced anxiety symptoms', 'Better family communication'],
      description: 'This case study examines how online therapy helped a 15-year-old with social anxiety and school avoidance through a collaborative approach between the platform therapist and school counselor.',
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'lgbtq',
      title: 'LGBTQ+ Affirming Therapy: Creating Safe Spaces Online',
      demographic: 'LGBTQ+ Young Adults',
      platform: 'Pride Counseling',
      duration: '10 months',
      approach: 'Affirmative Therapy and Minority Stress Model',
      outcomes: ['Increased self-acceptance', 'Development of coping strategies for minority stress', 'Improved relationships'],
      description: 'A case study following a 23-year-old non-binary individual navigating identity and family relationships through specialized LGBTQ+ affirming online therapy.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'rural',
      title: 'Rural Access to Mental Healthcare Through Telehealth',
      demographic: 'Rural Adults',
      platform: 'BetterHelp',
      duration: '12 months',
      approach: 'Solution-Focused Brief Therapy',
      outcomes: ['Overcame geographical barriers to care', 'Reduced depression symptoms', 'Improved work functioning'],
      description: 'This case study documents how online therapy provided essential mental health support for a 42-year-old living in a rural area with limited local resources.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'military',
      title: 'Couples Therapy for Military Families During Deployment',
      demographic: 'Military Couples',
      platform: 'ReGain',
      duration: '6 months',
      approach: 'Emotionally Focused Therapy (EFT)',
      outcomes: ['Maintained connection during deployment', 'Improved communication patterns', 'Reduced relationship distress'],
      description: 'A case study exploring how online couples therapy helped a military couple maintain their relationship during a 9-month overseas deployment.',
      image: 'https://images.unsplash.com/photo-1529778873920-4da98f6b73b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'night-owl',
      title: 'Therapy for Night Owls: Supporting Non-Traditional Schedules',
      demographic: 'Night Shift Workers',
      platform: 'Talkspace',
      duration: '8 months',
      approach: 'Acceptance and Commitment Therapy',
      outcomes: ['Reduced anxiety and depression', 'Improved sleep quality', 'Better social integration'],
      description: 'Case study examining how online therapy accommodated a client with a non-traditional sleep schedule, providing effective mental health support during late-night hours.',
      image: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'senior',
      title: 'Senior Mental Health Support Through Technology Adaptation',
      demographic: 'Older Adults (65+)',
      platform: 'Talkspace',
      duration: '9 months',
      approach: 'Cognitive Behavioral Therapy with Life Review',
      outcomes: ['Reduced isolation feelings', 'Improved technology comfort', 'Better management of grief and loss'],
      description: 'This case study follows a 72-year-old widow who overcame initial technology barriers to benefit from online therapy for grief and adjustment issues.',
      image: 'https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'college',
      title: 'College Student Stress Management: Balancing Academics and Wellbeing',
      demographic: 'College Students',
      platform: 'BetterHelp',
      duration: '5 months',
      approach: 'CBT and Mindfulness',
      outcomes: ['Reduced academic anxiety', 'Improved time management', 'Better work-life balance'],
      description: 'Case study examining how online therapy helped a college student manage academic stress, anxiety, and work-life balance through accessible and affordable mental health support.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'immigrant',
      title: 'Culturally Responsive Therapy for Immigrant Experiences',
      demographic: 'First-Generation Immigrants',
      platform: 'Alma',
      duration: '11 months',
      approach: 'Cultural Formulation and Narrative Therapy',
      outcomes: ['Improved bicultural identity integration', 'Reduced acculturative stress', 'Enhanced family relationships'],
      description: 'A case study examining how culturally responsive online therapy supported a 29-year-old first-generation immigrant navigating cultural identity and family expectations.',
      image: 'https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Demographic-Specific Therapy Case Studies | RealMindSolutions"
        description="Real-world case studies of online therapy for specific demographics including teens, LGBTQ+ individuals, rural populations, military families, seniors, and immigrants."
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Demographic-Specific Therapy Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring how online therapy can be tailored to meet the unique needs of different population groups.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">The Importance of Demographic Considerations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Unique Needs</h3>
              <p className="text-gray-600">
                Different demographic groups face distinct challenges and may require specialized therapeutic approaches that address their specific life experiences and contexts.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Cultural Competence</h3>
              <p className="text-gray-600">
                Effective therapy requires cultural sensitivity and awareness of how factors like age, ethnicity, gender identity, and life circumstances impact mental health.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Tailored Approaches</h3>
              <p className="text-gray-600">
                Online therapy platforms increasingly offer specialized programs and therapist matching to address the specific needs of different demographic groups.
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
                  alt={study.demographic} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">{study.title}</h2>
                <p className="text-gray-600 mb-4">{study.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Demographic</span>
                    <p className="font-medium text-gray-800">{study.demographic}</p>
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
                to={`/case-studies/demographics/${study.id === 'remote-worker' ? 'remote-worker-mental-health' : 
                                               study.id === 'rural' ? 'rural-access-to-therapy' : 
                                               study.id === 'night-owl' ? 'therapy-for-night-owls' : 
                                               study.id === 'college' ? 'college-student-stress-management' : '#'}`}
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Finding Demographic-Specific Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                  <Users className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Specialized Platforms</h3>
                  <p className="text-gray-600">
                    Some online therapy services focus specifically on certain demographics, offering specialized therapist training and tailored approaches.
                  </p>
                  <Link to="/best/audiences" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center mt-3">
                    Explore demographic-specific platforms <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                  <Target className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Therapist Matching</h3>
                  <p className="text-gray-600">
                    Many general platforms offer therapist matching based on demographic factors, allowing you to find a therapist with relevant experience and cultural competence.
                  </p>
                  <Link to="/reviews/features/therapist-matching-systems" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center mt-3">
                    Learn about therapist matching <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Insights from Demographic Studies</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Accessibility Varies by Group</h3>
              <p className="text-gray-600">
                Our case studies reveal that different demographics face unique barriers to accessing mental health care. Online therapy can address many of these barriers, but platforms vary in how effectively they accommodate specific needs.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Specialized Training Matters</h3>
              <p className="text-gray-600">
                Therapists with specialized training in working with specific demographics consistently achieve better outcomes. When choosing a platform, consider whether they offer therapists with relevant specialized experience.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Communication Preferences Differ</h3>
              <p className="text-gray-600">
                Different demographic groups show varying preferences for communication methods. For example, teens often prefer text-based therapy, while older adults typically benefit more from video sessions after initial technology adaptation.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Community Integration Enhances Outcomes</h3>
              <p className="text-gray-600">
                The most successful cases often involve integration with existing support systems and communities. Online therapy that acknowledges and works with a client's cultural, family, and community context tends to be more effective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicsPage;
