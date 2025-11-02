import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import MetaTags from '../../components/MetaTags';
import Button from '../../components/Button';

const WorksheetsPage = () => {
  const worksheetCategories = [
    {
      name: 'Anxiety Management',
      description: 'Tools and exercises to help manage anxiety symptoms and develop coping strategies.',
      worksheets: [
        {
          title: 'Anxiety Thought Record',
          description: 'Track anxious thoughts and develop more balanced perspectives.',
          format: 'HTML',
          pages: 2,
          tags: ['CBT', 'Thought Challenging'],
          filePath: '/worksheets/anxiety/anxiety-thought-record.html'
        },
        {
          title: 'Progressive Muscle Relaxation Guide',
          description: 'Step-by-step instructions for practicing progressive muscle relaxation.',
          format: 'HTML',
          pages: 3,
          tags: ['Relaxation', 'Stress Management'],
          filePath: '/worksheets/anxiety/progressive-muscle-relaxation.html'
        },
        {
          title: 'Worry Time Worksheet',
          description: 'Schedule dedicated "worry time" to contain and manage anxious thoughts.',
          format: 'HTML',
          pages: 1,
          tags: ['Worry Management', 'Scheduling'],
          filePath: '/worksheets/anxiety/worry-time-worksheet.html'
        }
      ]
    },
    {
      name: 'Depression Support',
      description: 'Worksheets designed to help with depression symptoms and build positive habits.',
      worksheets: [
        {
          title: 'Activity Scheduling Worksheet',
          description: 'Plan and track daily activities to increase engagement and positive experiences.',
          format: 'HTML',
          pages: 2,
          tags: ['Behavioral Activation', 'Scheduling'],
          filePath: '/worksheets/depression/activity-scheduling-worksheet.html'
        },
        {
          title: 'Negative Thought Patterns Log',
          description: 'Identify and challenge common negative thought patterns.',
          format: 'HTML',
          pages: 3,
          tags: ['CBT', 'Cognitive Restructuring'],
          filePath: '/worksheets/depression/negative-thought-patterns-log.html'
        },
        {
          title: 'Gratitude Journal Template',
          description: 'Daily template for practicing gratitude to improve mood and outlook.',
          format: 'HTML',
          pages: 1,
          tags: ['Positive Psychology', 'Journaling'],
          filePath: '/worksheets/depression/gratitude-journal-template.html'
        }
      ]
    },
    {
      name: 'Mindfulness Practices',
      description: 'Resources for developing mindfulness skills and present-moment awareness.',
      worksheets: [
        {
          title: 'Five Senses Mindfulness Exercise',
          description: 'Guide for practicing mindfulness using the five senses.',
          format: 'HTML',
          pages: 1,
          tags: ['Grounding', 'Present Awareness'],
          filePath: '/worksheets/mindfulness/five-senses-mindfulness-exercise.html'
        },
        {
          title: 'Mindful Breathing Log',
          description: 'Track daily mindful breathing practice and its effects.',
          format: 'HTML',
          pages: 2,
          tags: ['Breathing', 'Daily Practice'],
          filePath: '/worksheets/mindfulness/mindful-breathing-log.html'
        },
        {
          title: 'Body Scan Meditation Script',
          description: 'Step-by-step script for practicing body scan meditation.',
          format: 'HTML',
          pages: 3,
          tags: ['Meditation', 'Body Awareness'],
          filePath: '/worksheets/mindfulness/body-scan-meditation-script.html'
        }
      ]
    },
    {
      name: 'Relationship Skills',
      description: 'Worksheets focused on improving communication and relationship dynamics.',
      worksheets: [
        {
          title: 'Effective Communication Template',
          description: 'Framework for practicing clear, assertive communication.',
          format: 'HTML',
          pages: 2,
          tags: ['Communication', 'Assertiveness'],
          filePath: '/worksheets/effective-communication-template.html'
        },
        {
          title: 'Boundary Setting Worksheet',
          description: 'Identify and articulate personal boundaries in relationships.',
          format: 'HTML',
          pages: 2,
          tags: ['Boundaries', 'Self-Care'],
          filePath: '/worksheets/boundary-setting-worksheet.html'
        },
        {
          title: 'Conflict Resolution Guide',
          description: 'Step-by-step approach to resolving interpersonal conflicts constructively.',
          format: 'HTML',
          pages: 3,
          tags: ['Conflict Management', 'Problem-Solving'],
          filePath: '/worksheets/conflict-resolution-guide.html'
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="Mental Health Worksheets & Resources | RealMindSolutions"
        description="Free, printable mental health worksheets and resources for anxiety, depression, mindfulness, and relationship skills. Download and use with or without therapy."
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mental Health Worksheets & Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free, printable worksheets and exercises to support your mental health journey, whether you're in therapy or practicing self-help.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Use These Worksheets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Download & Print</h3>
              <p className="text-gray-600">
                All worksheets are available for download. Print them out to complete by hand or fill them out digitally.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Regular Practice</h3>
              <p className="text-gray-600">
                For best results, use these worksheets consistently. Many are designed for daily or weekly practice to build skills over time.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Therapy Integration</h3>
              <p className="text-gray-600">
                These worksheets can complement therapy sessions. Consider sharing your completed worksheets with your therapist for discussion.
              </p>
            </div>
          </div>
        </div>

        {worksheetCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
            <div className="p-6 bg-indigo-50">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{category.name} Worksheets</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.worksheets.map((worksheet, wIndex) => (
                  <div key={wIndex} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-gray-800 mb-2">{worksheet.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{worksheet.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-4">{worksheet.format}</span>
                      <span>{worksheet.pages} page{worksheet.pages > 1 ? 's' : ''}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {worksheet.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      as="a"
                      href={worksheet.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                      icon={Download}
                      className="w-full justify-center"
                    >
                      {worksheet.filePath ? 'Open Worksheet' : 'Coming Soon'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="bg-indigo-600 rounded-lg p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Need Personalized Support?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            While these worksheets can be helpful tools, working with a therapist provides personalized guidance and support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/best/platforms" 
              variant="light"
              size="lg"
              icon={ArrowRight}
            >
              Find the Right Therapy Platform
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Are these worksheets a substitute for therapy?</h3>
              <p className="text-gray-600">
                While these worksheets can be valuable self-help tools, they are not intended to replace professional mental health treatment. They work best as supplements to therapy or for those with mild symptoms looking for self-guided resources.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How often should I complete these worksheets?</h3>
              <p className="text-gray-600">
                The frequency depends on the specific worksheet and your personal needs. Some worksheets (like thought records or gratitude journals) are designed for daily use, while others might be used weekly or as needed during difficult situations.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can I share these worksheets with others?</h3>
              <p className="text-gray-600">
                Yes, these worksheets are free to download and share for personal or clinical use. If you're a mental health professional, feel free to use them with your clients. We just ask that you maintain the attribution to RealMindSolutions.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What if a worksheet isn't helping me?</h3>
              <p className="text-gray-600">
                Not every technique works for everyone. If you find a particular worksheet isn't helpful, try a different one or approach. If you're consistently not finding relief from your symptoms, consider reaching out to a mental health professional for more personalized support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksheetsPage;
