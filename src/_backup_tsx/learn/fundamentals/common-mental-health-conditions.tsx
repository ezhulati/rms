import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, AlertCircle, CheckCircle, Info } from 'lucide-react';
import Button from '../../../components/Button';

const CommonMentalHealthConditions = () => {
  // Mental health conditions data
  const conditions = [
    {
      name: 'Depression',
      description: 'A mood disorder characterized by persistent feelings of sadness, hopelessness, and loss of interest in activities.',
      symptoms: [
        'Persistent sad, anxious, or "empty" mood',
        'Loss of interest in activities once enjoyed',
        'Decreased energy, fatigue',
        'Difficulty sleeping or oversleeping',
        'Changes in appetite or weight',
        'Thoughts of death or suicide'
      ],
      treatmentOptions: [
        'Psychotherapy (particularly CBT)',
        'Antidepressant medications',
        'Lifestyle changes (exercise, sleep hygiene)',
        'Support groups'
      ],
      learnMoreLink: '/conditions-az/depression'
    },
    {
      name: 'Anxiety Disorders',
      description: 'A group of conditions characterized by excessive worry, fear, or nervousness that interferes with daily activities.',
      symptoms: [
        'Excessive worry or fear',
        'Restlessness or feeling on edge',
        'Rapid heart rate or breathing',
        'Difficulty concentrating',
        'Sleep problems',
        'Avoidance of anxiety-triggering situations'
      ],
      treatmentOptions: [
        'Cognitive Behavioral Therapy (CBT)',
        'Anti-anxiety medications',
        'Relaxation techniques',
        'Mindfulness practices'
      ],
      learnMoreLink: '/conditions-az/anxiety-disorders'
    },
    {
      name: 'Bipolar Disorder',
      description: 'A condition characterized by unusual shifts in mood, energy, activity levels, and the ability to carry out day-to-day tasks.',
      symptoms: [
        'Manic episodes (abnormally elevated mood, energy)',
        'Depressive episodes (similar to major depression)',
        'Changes in sleep patterns',
        'Poor judgment and impulsivity during manic phases',
        'Difficulty concentrating',
        'Thoughts of death or suicide during depressive phases'
      ],
      treatmentOptions: [
        'Mood stabilizers',
        'Antipsychotic medications',
        'Psychotherapy',
        'Lifestyle management'
      ],
      learnMoreLink: '/conditions-az/bipolar-disorder'
    },
    {
      name: 'Post-Traumatic Stress Disorder (PTSD)',
      description: 'A condition that may develop after experiencing or witnessing a traumatic event, characterized by intrusive memories and heightened reactivity.',
      symptoms: [
        'Intrusive memories of the traumatic event',
        'Flashbacks or nightmares',
        'Avoidance of trauma-related stimuli',
        'Negative changes in thinking and mood',
        'Heightened reactivity and arousal',
        'Sleep disturbances'
      ],
      treatmentOptions: [
        'Trauma-focused psychotherapy',
        'EMDR (Eye Movement Desensitization and Reprocessing)',
        'Medications to manage symptoms',
        'Stress management techniques'
      ],
      learnMoreLink: '/conditions-az/ptsd'
    },
    {
      name: 'Obsessive-Compulsive Disorder (OCD)',
      description: 'A disorder characterized by unreasonable thoughts and fears (obsessions) that lead to repetitive behaviors (compulsions).',
      symptoms: [
        'Unwanted, intrusive thoughts or images',
        'Repetitive behaviors or mental acts',
        'Excessive concern with order, symmetry, or cleanliness',
        'Fear of contamination',
        'Distress when unable to perform rituals',
        'Time-consuming rituals that interfere with daily life'
      ],
      treatmentOptions: [
        'Exposure and Response Prevention (ERP)',
        'Cognitive Behavioral Therapy',
        'SSRI medications',
        'Mindfulness-based approaches'
      ],
      learnMoreLink: '/conditions-az/ocd'
    },
    {
      name: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
      description: 'A neurodevelopmental disorder characterized by patterns of inattention, hyperactivity, and impulsivity that interfere with functioning or development.',
      symptoms: [
        'Difficulty sustaining attention',
        'Easily distracted',
        'Forgetfulness in daily activities',
        'Fidgeting or inability to stay seated',
        'Excessive talking or interrupting',
        'Difficulty organizing tasks'
      ],
      treatmentOptions: [
        'Stimulant and non-stimulant medications',
        'Behavioral therapy',
        'Educational interventions',
        'Lifestyle modifications'
      ],
      learnMoreLink: '/conditions-az/adhd'
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
                src="https://images.unsplash.com/photo-1559757175-7cb056fba93d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Mental Health Conditions" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Common Mental Health Conditions</h1>
              <p className="text-xl text-gray-600 mb-6">
                An overview of frequently diagnosed mental health conditions, their symptoms, and treatment options to help you better understand these complex disorders.
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
                  to="/conditions-az" 
                  variant="outline"
                  icon={ArrowRight}
                >
                  View All Conditions
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Mental Health Conditions</h2>
          <div className="md:flex gap-8">
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Mental health conditions affect millions of people worldwide and can impact thinking, mood, behavior, and overall functioning. These conditions range from mild to severe and can significantly affect quality of life if left untreated.
              </p>
              <p className="text-gray-600 mb-4">
                It's important to understand that mental health conditions are medical conditions, not personal weaknesses or character flaws. They result from a complex interplay of genetic, biological, environmental, and psychological factors.
              </p>
              <p className="text-gray-600">
                With proper diagnosis and treatment, many people with mental health conditions lead fulfilling, productive lives. Treatment typically involves a combination of psychotherapy, medication, lifestyle changes, and support systems tailored to the individual's specific needs.
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">Important Notes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">This guide provides general information and is not a substitute for professional diagnosis or treatment.</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Mental health conditions exist on a spectrum of severity and presentation.</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">If you're experiencing symptoms, consult with a qualified mental health professional.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mental Health Conditions */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Mental Health Conditions</h2>
        
        {conditions.map((condition) => (
          <div key={condition.name} className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{condition.name}</h3>
            <p className="text-gray-600 mb-6">{condition.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  Common Symptoms
                </h4>
                <ul className="space-y-2">
                  {condition.symptoms.map((symptom, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Treatment Options
                </h4>
                <ul className="space-y-2">
                  {condition.treatmentOptions.map((treatment, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Link to={condition.learnMoreLink} className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
              Learn more about {condition.name.toLowerCase()} <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        ))}

        {/* When to Seek Help */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">When to Seek Help</h2>
          
          <p className="text-gray-600 mb-6">
            It's important to seek professional help if you or someone you know is experiencing symptoms that:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Warning Signs</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Persist for more than two weeks</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Cause significant distress</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Interfere with daily functioning</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Impact relationships or work performance</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Include thoughts of harming oneself or others</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Getting Help</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Talk to your primary care physician</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Contact a mental health professional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Use online therapy platforms for convenient access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Reach out to mental health helplines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">For emergencies, call 988 (Suicide & Crisis Lifeline)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Remember</h3>
            <p className="text-gray-700">
              Seeking help for mental health concerns is a sign of strength, not weakness. Early intervention often leads to better outcomes. Mental health conditions are treatable, and many people experience significant improvement with appropriate care.
            </p>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Self-Assessment Tools</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/tools/assessments/mental-health-assessment" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Comprehensive Mental Health Assessment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/tools/assessments/depression-screening" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Depression Screening</span>
                  </Link>
                </li>
                <li>
                  <Link to="/tools/assessments/anxiety-screening" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Anxiety Screening</span>
                  </Link>
                </li>
                <li>
                  <Link to="/tools/assessments/stress-level-test" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Stress Level Test</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/learn/fundamentals/therapy-types-explained" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Therapy Types Explained</span>
                  </Link>
                </li>
                <li>
                  <Link to="/learn/fundamentals/medication-vs-therapy" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Medication vs. Therapy: Understanding Your Options</span>
                  </Link>
                </li>
                <li>
                  <Link to="/learn/fundamentals/self-care" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Self-Care Strategies for Mental Health</span>
                  </Link>
                </li>
                <li>
                  <Link to="/learn/fundamentals/supporting-loved-ones" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Supporting Loved Ones with Mental Health Conditions</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find the Right Support for Your Mental Health</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take the first step toward better mental health by connecting with a qualified therapist who specializes in your specific concerns.
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

export default CommonMentalHealthConditions;
