import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BookOpen, Users, Brain, Shield, Star } from 'lucide-react';
import Button from '../../../components/Button';

const ChoosingOnlineTherapist = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">How to Choose the Right Online Therapist</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive guide to finding the perfect therapist for your unique needs and preferences.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Choosing a Therapist" 
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Finding the Right Therapist Matters</h2>
              <p className="text-gray-600 mb-4">
                Choosing the right therapist is one of the most important decisions you'll make in your mental health journey. Research consistently shows that the therapeutic relationship—the connection between you and your therapist—is one of the strongest predictors of successful outcomes in therapy.
              </p>
              <p className="text-gray-600 mb-4">
                With online therapy platforms offering thousands of therapists to choose from, the selection process can feel overwhelming. This guide will walk you through a step-by-step process to find a therapist who meets your specific needs, matches your communication style, and helps you achieve your mental health goals.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-indigo-600 mr-2" />
                  <h3 className="font-bold text-gray-800">Key Takeaway</h3>
                </div>
                <p className="text-gray-700">
                  The right therapist for you is someone who has expertise in your specific concerns, uses an approach that resonates with you, and with whom you feel comfortable and understood.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1: Identify Your Needs */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-indigo-600">1</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Identify Your Needs and Goals</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Before you start searching for a therapist, take some time to reflect on what you're looking for in therapy. Being clear about your needs will help you find a therapist with the right expertise and approach.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Questions to Ask Yourself</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>What specific issues or symptoms am I experiencing?</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>What are my goals for therapy? What would success look like?</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Do I have a preference for a therapist's gender, age, or cultural background?</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>What communication style works best for me? (direct, gentle, collaborative, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>What practical factors matter? (scheduling, cost, insurance, etc.)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Common Therapy Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Managing symptoms of anxiety, depression, or other conditions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Processing trauma or difficult life experiences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Improving relationships and communication skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Developing coping strategies for stress or life transitions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Personal growth and self-exploration</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">Pro Tip</h3>
            <p className="text-gray-700">
              Write down your therapy goals and priorities before starting your search. Having a clear list will help you evaluate potential therapists more effectively and stay focused on what matters most to you.
            </p>
          </div>
        </div>

        {/* Step 2: Understand Different Approaches */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-indigo-600">2</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Understand Different Therapeutic Approaches</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Therapists use different approaches and techniques. Understanding the basics of common therapeutic approaches can help you find a method that aligns with your preferences and needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Brain className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Cognitive Behavioral Therapy (CBT)</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Focuses on identifying and changing negative thought patterns and behaviors. Structured and goal-oriented.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Anxiety, depression, phobias, and other specific issues with clear symptoms.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Brain className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Psychodynamic Therapy</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Explores how past experiences and unconscious processes influence current behavior. More open-ended and insight-oriented.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Complex emotional issues, relationship patterns, and self-exploration.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Brain className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Humanistic Therapy</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Client-centered approach focusing on personal growth and self-actualization. Emphasizes empathy and unconditional positive regard.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Self-exploration, personal growth, and identity issues.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <Link to="/learn/fundamentals/therapy-types-explained" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              Learn more about therapy approaches <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Step 3: Research Therapists */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-indigo-600">3</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Research Potential Therapists</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Once you understand your needs and preferred therapeutic approaches, it's time to research potential therapists. Online therapy platforms make this process easier by providing detailed therapist profiles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">What to Look for in Therapist Profiles</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Credentials and Licensing:</span>
                    <p className="text-sm text-gray-600">Verify they're licensed in your state (LMFT, LCSW, LPC, PhD, PsyD)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Specializations:</span>
                    <p className="text-sm text-gray-600">Experience with your specific concerns (anxiety, trauma, etc.)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Therapeutic Approaches:</span>
                    <p className="text-sm text-gray-600">Methods they use (CBT, psychodynamic, etc.)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Years of Experience:</span>
                    <p className="text-sm text-gray-600">How long they've been practicing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Personal Statement:</span>
                    <p className="text-sm text-gray-600">Their philosophy and approach to therapy</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Red Flags to Watch For</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Vague credentials or unlicensed practitioners</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Guarantees or promises of quick fixes</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">No experience with your specific concerns</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Poor reviews or concerning feedback patterns</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Unprofessional online presence</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">Platform Matching Services</h3>
            <p className="text-gray-700 mb-3">
              Many online therapy platforms offer matching services that use algorithms to connect you with compatible therapists based on your needs and preferences. While these can be helpful starting points, it's still important to review the suggested therapists' profiles carefully.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/reviews/platforms/betterhelp" className="text-indigo-600 hover:text-indigo-800 text-sm">BetterHelp Matching</Link>
              <Link to="/reviews/platforms/talkspace" className="text-indigo-600 hover:text-indigo-800 text-sm">Talkspace Matching</Link>
              <Link to="/reviews/platforms/cerebral" className="text-indigo-600 hover:text-indigo-800 text-sm">Cerebral Matching</Link>
            </div>
          </div>
        </div>

        {/* Step 4: Initial Consultation */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-indigo-600">4</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Evaluate the Initial Consultation</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            The initial consultation or first session is a crucial opportunity to assess whether a therapist is the right fit for you. Pay attention to how you feel during and after this first interaction.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Questions to Ask Your Therapist</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>"What experience do you have with [your specific concern]?"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>"How would you approach treating my situation?"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>"What does a typical session with you look like?"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>"How do you measure progress in therapy?"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>"What is your policy on messaging between sessions?"</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Signs of a Good Fit</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You feel comfortable and safe sharing with them</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>They listen attentively and respond thoughtfully</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>They explain concepts clearly and answer questions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Their communication style works for you</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You feel hopeful after speaking with them</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">Trust Your Instincts</h3>
            <p className="text-gray-700">
              Pay attention to how you feel during and after your first session. It's normal to feel a bit uncomfortable discussing difficult topics, but you should generally feel respected, understood, and safe with your therapist. If something feels off, it's okay to try someone else.
            </p>
          </div>
        </div>

        {/* Step 5: Ongoing Evaluation */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-indigo-600">5</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Evaluate the Therapeutic Relationship Over Time</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Finding the right therapist is an ongoing process. It's important to regularly assess whether the therapeutic relationship is working for you and whether you're making progress toward your goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Signs Therapy Is Working</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You're developing new insights or perspectives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You're learning useful coping strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You notice positive changes in your thoughts, feelings, or behaviors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You feel more equipped to handle challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>You look forward to your sessions (even if they're challenging)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">When to Consider Switching Therapists</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>You consistently feel misunderstood or judged</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>You don't see any progress after several sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>The therapist's approach doesn't resonate with you</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>You feel uncomfortable or unsafe in sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>The therapist is frequently late, cancels, or is unprofessional</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">Discussing Concerns with Your Therapist</h3>
            <p className="text-gray-700">
              If you have concerns about your therapy, consider discussing them directly with your therapist first. Good therapists welcome feedback and may be able to adjust their approach to better meet your needs. If the issues persist or you're uncomfortable having this conversation, it's okay to seek a different therapist.
            </p>
          </div>
        </div>

        {/* Recommended Platforms */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Online Therapy Platforms</h2>
          
          <p className="text-gray-600 mb-6">
            These platforms offer large networks of licensed therapists and user-friendly interfaces to help you find the right match.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">BetterHelp</h3>
              <p className="text-gray-600 mb-4">
                Largest online therapy platform with thousands of therapists and a comprehensive matching system.
              </p>
              <Link to="/reviews/platforms/betterhelp" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Read full review <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Talkspace</h3>
              <p className="text-gray-600 mb-4">
                Insurance-friendly platform with specialized programs for various mental health concerns.
              </p>
              <Link to="/reviews/platforms/talkspace" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Read full review <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Calmerry</h3>
              <p className="text-gray-600 mb-4">
                Affordable platform with flexible plans and a focus on personalized matching.
              </p>
              <Link to="/reviews/platforms/calmerry" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                Read full review <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              as={Link} 
              to="/compare/platforms/top-therapy-platforms-compared" 
              variant="primary"
            >
              Compare Top Therapy Platforms
            </Button>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Final Thoughts</h2>
          
          <p className="text-gray-600 mb-4">
            Finding the right therapist is a personal journey that may take some time and exploration. Remember that it's okay to try different therapists until you find someone who feels right for you. The effort you put into finding a good match will pay off in more effective and meaningful therapy.
          </p>
          
          <p className="text-gray-600 mb-4">
            Online therapy platforms have made it easier than ever to connect with a wide range of therapists and to switch if needed. Take advantage of these options to find the therapeutic relationship that works best for you.
          </p>
          
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">Remember</h3>
            <p className="text-gray-700">
              The right therapist for you is someone who has the expertise to help with your specific concerns, uses an approach that resonates with you, and with whom you feel comfortable and understood. Trust your instincts and be patient with the process.
            </p>
          </div>
        </div>

        {/* Related Guides */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <h3 className="text-lg font-bold text-gray-800 mb-3">Therapy Types Explained</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive overview of different therapy approaches and which conditions they're best suited for.
              </p>
              <Link to="/guides/selection/therapy-types-explained" className="text-indigo-600 hover:text-indigo-800 flex items-center">
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

export default ChoosingOnlineTherapist;
