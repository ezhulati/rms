import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, CheckCircle, Star, Users, Heart, Sparkles, Zap } from 'lucide-react';
import Button from '../../../components/Button';

const TherapyTypesExplained = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Therapy Types Explained</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive overview of different therapy approaches and which conditions they're best suited for.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Different Therapy Approaches" 
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Different Therapeutic Approaches</h2>
              <p className="text-gray-600 mb-4">
                When starting therapy, one of the most important factors to consider is the therapeutic approach your therapist uses. Different therapy types are based on distinct theories about human behavior, emotions, and change—and some approaches may be more effective for specific conditions or better suited to your personal preferences.
              </p>
              <p className="text-gray-600 mb-4">
                This guide will help you understand the most common therapy approaches, their underlying principles, and which conditions they're typically most effective for. Having this knowledge can help you make a more informed decision when choosing a therapist or therapy platform.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-indigo-600 mr-2" />
                  <h3 className="font-bold text-gray-800">Key Takeaway</h3>
                </div>
                <p className="text-gray-700">
                  No single therapy approach works best for everyone. The most effective therapy often depends on your specific concerns, goals, and personal preferences. Many therapists use an integrative approach, combining elements from different therapeutic methods.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cognitive Behavioral Therapy (CBT) */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex items-center mb-6">
            <Brain className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Cognitive Behavioral Therapy (CBT)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Core Principles</h3>
              <p className="text-gray-600 mb-4">
                CBT is based on the idea that our thoughts, feelings, and behaviors are interconnected, and that changing negative thought patterns can lead to changes in feelings and behaviors. It's a structured, goal-oriented approach that focuses on the present rather than the past.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Structured sessions</strong> with specific agendas and goals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Homework assignments</strong> to practice skills between sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Focus on identifying and challenging</strong> negative thought patterns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Practical problem-solving</strong> and coping strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Time-limited treatment</strong> (typically 12-20 sessions)</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Common Techniques</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Cognitive restructuring:</span>
                    <p className="text-sm text-gray-600 mt-1">Identifying and challenging negative thought patterns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Behavioral activation:</span>
                    <p className="text-sm text-gray-600 mt-1">Engaging in positive activities to improve mood</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Exposure therapy:</span>
                    <p className="text-sm text-gray-600 mt-1">Gradually facing fears in a controlled way</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Mindfulness practices:</span>
                    <p className="text-sm text-gray-600 mt-1">Developing awareness of thoughts without judgment</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Best For</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Anxiety disorders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Depression</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Phobias</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>PTSD</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>OCD</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Eating disorders</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">You Might Prefer CBT If You:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Want a structured approach with clear goals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Prefer focusing on current problems rather than past experiences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Like learning practical skills and techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Are comfortable with homework between sessions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Psychodynamic Therapy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex items-center mb-6">
            <Brain className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Psychodynamic Therapy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Core Principles</h3>
              <p className="text-gray-600 mb-4">
                Psychodynamic therapy is based on the idea that unconscious processes and past experiences, particularly from childhood, influence current behavior and relationships. It focuses on gaining insight into these unconscious patterns to create lasting change.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Exploration of unconscious patterns</strong> and motivations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Focus on past experiences</strong>, especially childhood</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Emphasis on the therapeutic relationship</strong> as a window into other relationships</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Less structured</strong> than CBT, with more open-ended exploration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Longer-term treatment</strong> (months to years)</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Common Techniques</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Free association:</span>
                    <p className="text-sm text-gray-600 mt-1">Speaking freely about whatever comes to mind</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Dream analysis:</span>
                    <p className="text-sm text-gray-600 mt-1">Exploring the meaning of dreams</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Transference analysis:</span>
                    <p className="text-sm text-gray-600 mt-1">Examining feelings toward the therapist that reflect other relationships</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Interpretation:</span>
                    <p className="text-sm text-gray-600 mt-1">Helping clients understand the meaning of their thoughts, feelings, and behaviors</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Best For</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Depression</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Relationship issues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Personality disorders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Long-term emotional difficulties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Identity issues</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">You Might Prefer Psychodynamic Therapy If You:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Want to understand the root causes of your issues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Are interested in exploring your past experiences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Prefer a less structured, more exploratory approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Are comfortable with a longer-term therapeutic process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Humanistic Therapy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex items-center mb-6">
            <Heart className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Humanistic Therapy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Core Principles</h3>
              <p className="text-gray-600 mb-4">
                Humanistic therapy emphasizes personal growth, self-actualization, and the present moment. It views people as inherently good and capable of making positive choices, focusing on the whole person rather than just symptoms or diagnoses.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Client-centered approach</strong> where the client leads the process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Focus on personal growth</strong> and self-actualization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Emphasis on the present moment</strong> rather than past or future</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Non-directive</strong> - therapist as a facilitator rather than an expert</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Unconditional positive regard</strong> from the therapist</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Common Approaches</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Person-Centered Therapy:</span>
                    <p className="text-sm text-gray-600 mt-1">Focuses on creating a supportive environment for self-discovery</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Gestalt Therapy:</span>
                    <p className="text-sm text-gray-600 mt-1">Emphasizes personal responsibility and living in the present moment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Existential Therapy:</span>
                    <p className="text-sm text-gray-600 mt-1">Explores questions of meaning, purpose, and human existence</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Best For</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Self-exploration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Personal growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Life transitions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Existential concerns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Relationship issues</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">You Might Prefer Humanistic Therapy If You:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Want to lead your own therapeutic journey</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Prefer focusing on growth rather than "fixing" problems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Value self-discovery and personal meaning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Appreciate a non-judgmental, supportive approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Dialectical Behavior Therapy (DBT) */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex items-center mb-6">
            <Zap className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Dialectical Behavior Therapy (DBT)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Core Principles</h3>
              <p className="text-gray-600 mb-4">
                DBT is a modified form of CBT that focuses on emotional regulation, distress tolerance, interpersonal effectiveness, and mindfulness. It balances acceptance and change strategies, teaching clients to accept themselves while working to change problematic behaviors.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Structured skills training</strong> in four key areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Balance of acceptance and change</strong> strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Often includes group skills training</strong> and individual therapy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Focus on building a life worth living</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Emphasis on validation</strong> of experiences and emotions</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Core Skill Modules</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Mindfulness:</span>
                    <p className="text-sm text-gray-600 mt-1">Being fully aware and present in the moment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Distress Tolerance:</span>
                    <p className="text-sm text-gray-600 mt-1">Accepting reality and surviving crisis situations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Emotion Regulation:</span>
                    <p className="text-sm text-gray-600 mt-1">Understanding, recognizing, and managing emotions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Interpersonal Effectiveness:</span>
                    <p className="text-sm text-gray-600 mt-1">Building healthy relationships and setting boundaries</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Best For</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Borderline Personality Disorder</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Emotional dysregulation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Self-harm behaviors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Suicidal thoughts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Eating disorders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>PTSD</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">You Might Prefer DBT If You:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Struggle with intense emotions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Want to learn specific skills for managing emotions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Benefit from both individual and group learning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Need help with interpersonal relationships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Family and Couples Therapy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Family and Couples Therapy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Core Principles</h3>
              <p className="text-gray-600 mb-4">
                Family and couples therapy focuses on relationships and communication patterns between family members or partners. It views problems as existing within the relationship system rather than within individuals.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Multiple participants</strong> in therapy sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Focus on relationship dynamics</strong> and communication patterns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Emphasis on systems</strong> rather than individual pathology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Goal of improving relationships</strong> and family functioning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Therapist as mediator</strong> and facilitator</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Common Approaches</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Emotionally Focused Therapy (EFT):</span>
                    <p className="text-sm text-gray-600 mt-1">Focuses on emotional bonds and attachment patterns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Gottman Method:</span>
                    <p className="text-sm text-gray-600 mt-1">Research-based approach to strengthen relationships</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Structural Family Therapy:</span>
                    <p className="text-sm text-gray-600 mt-1">Focuses on family organization and boundaries</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Strategic Family Therapy:</span>
                    <p className="text-sm text-gray-600 mt-1">Focuses on solving specific problems through strategic interventions</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Best For</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Relationship conflicts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Communication problems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Parenting challenges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Life transitions affecting the family</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Blended family integration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">You Might Prefer This Approach If You:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Want to improve relationship dynamics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Believe the issue involves multiple family members</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Need help with communication patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Are comfortable discussing issues with others present</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Integrative Therapy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex items-center mb-6">
            <Sparkles className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Integrative Therapy</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Many therapists today use an integrative approach, drawing from multiple therapeutic methods to create a personalized treatment plan. This flexible approach allows therapists to adapt their methods to each client's unique needs.
          </p>
          
          <div className="bg-indigo-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Benefits of Integrative Therapy</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Tailored to individual needs rather than a one-size-fits-all approach</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Can address multiple aspects of a problem (thoughts, emotions, behaviors, relationships)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Flexible and adaptable as therapy progresses</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Draws on the strengths of various therapeutic approaches</span>
              </li>
            </ul>
          </div>
          
          <p className="text-gray-600 mb-4">
            When considering an integrative therapist, it's helpful to ask about their primary theoretical orientation and how they incorporate different approaches. This will give you a better understanding of their therapeutic style and whether it aligns with your preferences.
          </p>
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Finding Your Best Fit</h2>
          
          <p className="text-gray-600 mb-4">
            Understanding different therapy approaches is just one step in finding the right therapist. Remember that the therapeutic relationship—how comfortable you feel with your therapist—is often more important than the specific approach they use.
          </p>
          
          <p className="text-gray-600 mb-4">
            It's okay to try different therapists or approaches until you find what works best for you. Many people benefit from an initial consultation with a few different therapists before making a decision.
          </p>
          
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">Questions to Ask Potential Therapists</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>"What approach do you typically use for [your specific concern]?"</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>"How do you measure progress in therapy?"</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>"What is your experience with [your specific concern]?"</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>"How would you describe your therapeutic style?"</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Guides */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Choosing the Right Therapist</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to finding the perfect therapist for your unique needs and preferences.
              </p>
              <Link to="/guides/selection/choosing-online-therapist" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Read guide <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">First Therapy Session</h3>
              <p className="text-gray-600 mb-4">
                Tips and guidance to help you prepare for and get the most out of your first online therapy session.
              </p>
              <Link to="/guides/selection/first-therapy-session" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Read guide <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Red Flags in Therapy</h3>
              <p className="text-gray-600 mb-4">
                Learn to identify warning signs that might indicate a therapist isn't the right fit for you.
              </p>
              <Link to="/guides/selection/red-flags-in-therapy" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Read guide <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyTypesExplained;
