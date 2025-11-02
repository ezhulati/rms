import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Clock, CheckCircle, XCircle, Brain, Shield, Star, Video, Phone, MessageSquare, HelpCircle, AlertCircle } from 'lucide-react';
import BlogLayout from '../BlogLayout';

const TherapyFirstSession: React.FC = () => {
  return (
    <BlogLayout>
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
        <span className="mx-2">/</span>
        <Link to="/blog/guides" className="hover:text-indigo-600">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">First Therapy Session</span>
      </div>

      {/* Article Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <img 
          src="/images/blog/therapy-first-session.jpg" 
          alt="First Therapy Session" 
          className="blog-featured-image h-96"
        />
        <div className="p-8">
          <h1 className="blog-title">What to Expect in Your First Therapy Session: A Complete Guide</h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <Calendar className="h-4 w-4 mr-1" />
              <span>March 20, 2025</span>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <User className="h-4 w-4 mr-1" />
              <span>By Dr. Sarah Johnson, Licensed Therapist</span>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <Tag className="h-4 w-4 mr-1" />
              <Link to="/blog/tag/therapy" className="hover:text-indigo-600">Therapy</Link>,{" "}
              <Link to="/blog/tag/mental-health" className="hover:text-indigo-600 ml-1">Mental Health</Link>,{" "}
              <Link to="/blog/tag/beginners" className="hover:text-indigo-600 ml-1">Beginners</Link>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <Clock className="h-4 w-4 mr-1" />
              <span>12 min read</span>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-4 mb-6">
            <p className="text-gray-700 italic">
              "The first session is about establishing rapport, gathering information, and setting initial goals. It's normal to feel nervous, but remember that your therapist is there to help, not to judge. Come prepared with your concerns, questions, and an open mind." — Dr. Sarah Johnson
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="blog-content">
          <h2 className="blog-subtitle">Introduction: Starting Your Therapy Journey</h2>
          <p>
            Your first therapy session is an important step in your mental health journey. It's normal to feel a mix of emotions—nervousness, hope, uncertainty, or even relief. This initial session sets the foundation for your therapeutic relationship and treatment process.
          </p>
          
          <p>
            Whether you're meeting with a therapist online or in person, knowing what to expect and how to prepare can help you feel more comfortable and get the most out of this first encounter. This guide will walk you through what typically happens in a first session and how you can prepare to make it as productive as possible.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <div className="flex">
              <AlertCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
              <p className="text-sm text-yellow-700">
                <strong>Important Note:</strong> While this guide provides general information about first therapy sessions, every therapist has their own approach. Your experience may vary depending on the therapist's style, the type of therapy, and whether you're attending in-person or online.
              </p>
            </div>
          </div>
          
          <h2 className="blog-subtitle">What to Expect in Your First Session</h2>
          <p>
            First therapy sessions typically follow a similar structure, though the exact format may vary depending on your therapist's approach and the platform you're using. Here's a general outline of what you can expect:
          </p>
          
          <h3 className="blog-subheading">1. Introductions & Paperwork</h3>
          <p>
            Your therapist will introduce themselves and review any consent forms or policies you need to know about. This includes confidentiality policies, payment information, and cancellation policies. For online therapy, you might complete these forms electronically before your session.
          </p>
          
          <h3 className="blog-subheading">2. Background & Assessment</h3>
          <p>
            Your therapist will ask about your current concerns, relevant history, and what brought you to therapy. They might ask about:
          </p>
          <ul>
            <li>Your current symptoms or challenges</li>
            <li>When these issues began</li>
            <li>Your personal and family mental health history</li>
            <li>Your current living situation and support system</li>
            <li>Any previous therapy experiences</li>
            <li>Current medications or other treatments</li>
          </ul>
          
          <h3 className="blog-subheading">3. Goal Setting</h3>
          <p>
            You'll discuss what you hope to achieve through therapy. Your therapist might ask questions like:
          </p>
          <ul>
            <li>"What changes would you like to see in your life?"</li>
            <li>"How will you know therapy is working for you?"</li>
            <li>"What would success look like for you?"</li>
          </ul>
          
          <h3 className="blog-subheading">4. Treatment Planning</h3>
          <p>
            Your therapist may outline their approach and how they plan to work with you. This might include:
          </p>
          <ul>
            <li>The type of therapy they recommend (CBT, psychodynamic, etc.)</li>
            <li>How often you should meet</li>
            <li>An estimated timeline for treatment (if possible)</li>
            <li>Any homework or between-session activities</li>
          </ul>
          
          <h3 className="blog-subheading">5. Questions & Next Steps</h3>
          <p>
            You'll have time to ask questions and schedule your next session. This is a good opportunity to address any concerns about the therapy process or clarify anything you're unsure about.
          </p>
          
          <div className="bg-indigo-50 rounded-lg p-4 my-6">
            <h3 className="font-bold text-gray-800 mb-2">Session Length</h3>
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
              <p className="text-gray-700">
                First sessions typically last between 45-60 minutes. Some therapists may schedule a longer initial session (up to 90 minutes) to have more time for assessment. Check your appointment details to confirm the exact duration.
              </p>
            </div>
          </div>
          
          <h2 className="blog-subtitle">Online Session Specifics</h2>
          <p>
            If you're starting therapy online, there are some specific considerations to keep in mind:
          </p>
          
          <h3 className="blog-subheading">Video Sessions</h3>
          <p>
            Most similar to in-person therapy. You'll see and hear your therapist in real-time. Make sure you have a private space and stable internet connection. Test your camera and microphone beforehand.
          </p>
          
          <h3 className="blog-subheading">Phone Sessions</h3>
          <p>
            Audio-only sessions that offer more flexibility. Find a quiet place where you can speak freely without distractions. Some people find it easier to open up when they don't have to make eye contact.
          </p>
          
          <h3 className="blog-subheading">Messaging/Chat</h3>
          <p>
            Text-based sessions allow for thoughtful responses. Your first exchange may be more extensive to gather background information. This format gives you time to reflect on your responses and can be done at your convenience.
          </p>
          
          <h2 className="blog-subtitle">How to Prepare for Your First Session</h2>
          <p>
            Proper preparation can help you get the most out of your first therapy session. Here are some steps to take before your appointment:
          </p>
          
          <h3 className="blog-subheading">Reflect on Your Goals</h3>
          <p>
            Take some time to think about what you hope to achieve through therapy. Having clear goals will help your therapist understand how to best support you. Examples might include:
          </p>
          <ul>
            <li>"I want to manage my anxiety better so it doesn't interfere with my work."</li>
            <li>"I'd like to improve my relationship with my partner and communicate more effectively."</li>
            <li>"I want to understand why I keep repeating certain patterns in relationships."</li>
          </ul>
          
          <h3 className="blog-subheading">Prepare Your History</h3>
          <p>
            Be ready to share relevant background information about your mental health, including:
          </p>
          <ul>
            <li>Current symptoms or concerns</li>
            <li>When these issues began</li>
            <li>Previous therapy or treatment experiences</li>
            <li>Current medications</li>
            <li>Family mental health history (if relevant)</li>
          </ul>
          
          <h3 className="blog-subheading">Prepare Questions</h3>
          <p>
            Write down questions you have for your therapist, such as:
          </p>
          <ul>
            <li>"What approach do you use for [your specific concern]?"</li>
            <li>"How often should we meet?"</li>
            <li>"How do you measure progress in therapy?"</li>
            <li>"What can I do between sessions?"</li>
            <li>"How long might therapy take for my situation?"</li>
          </ul>
          
          <h3 className="blog-subheading">Set Up Your Space</h3>
          <p>
            For online therapy, it's important to have a private, comfortable space where you won't be interrupted:
          </p>
          <ul>
            <li>Find a quiet room where you won't be overheard</li>
            <li>Let others in your household know you need privacy</li>
            <li>Consider using headphones for better audio and privacy</li>
            <li>Turn off notifications on your device</li>
            <li>Have water, tissues, and a notebook nearby</li>
          </ul>
          
          <h3 className="blog-subheading">Technical Preparation</h3>
          <p>
            If you're doing online therapy, take these steps to ensure a smooth session:
          </p>
          <ul>
            <li>Test your device, camera, and microphone beforehand</li>
            <li>Ensure you have a stable internet connection</li>
            <li>Download any required apps or software in advance</li>
            <li>Have a backup plan (phone number) if technical issues arise</li>
            <li>Log in 5-10 minutes early to troubleshoot any issues</li>
          </ul>
          
          <h2 className="blog-subtitle">Addressing Common Concerns</h2>
          <p>
            Many people have worries about their first therapy session. Here are some common concerns and how to address them:
          </p>
          
          <h3 className="blog-subheading">"What if I get emotional or cry?"</h3>
          <p>
            It's completely normal and okay to get emotional during therapy. Therapists are trained to handle emotions and provide support. Crying can be a healthy release and part of the healing process. Your therapist won't be uncomfortable or judge you for showing emotion.
          </p>
          
          <h3 className="blog-subheading">"What if I don't know what to say?"</h3>
          <p>
            Your therapist will guide the conversation, especially in the first session. They'll ask questions to help you open up. It's okay to say "I'm not sure" or "I need a moment to think." There's no pressure to have everything figured out—that's what the therapy process is for.
          </p>
          
          <h3 className="blog-subheading">"What if I don't like my therapist?"</h3>
          <p>
            Not every therapist will be the right fit, and that's okay. Give yourself permission to try a session or two before deciding. If you don't feel comfortable, it's perfectly acceptable to look for another therapist. Most online platforms make it easy to switch therapists if needed.
          </p>
          
          <h3 className="blog-subheading">"How long will it take to see results?"</h3>
          <p>
            Therapy is a process that takes time. Some people notice small changes after just a few sessions, while deeper issues may take months to work through. Be patient with yourself and the process. Your therapist can help set realistic expectations based on your specific situation and goals.
          </p>
          
          <h2 className="blog-subtitle">After Your First Session</h2>
          <p>
            The work of therapy continues between sessions. Here are some helpful practices after your first appointment:
          </p>
          
          <h3 className="blog-subheading">Reflect</h3>
          <p>
            Take some time to process your experience. Consider what felt helpful, what was challenging, and any insights you gained. Journaling about your thoughts and feelings after the session can be beneficial.
          </p>
          
          <h3 className="blog-subheading">Schedule</h3>
          <p>
            If you haven't already, schedule your next session. Consistent attendance is important for building momentum in therapy. Set a recurring calendar reminder for your therapy appointments.
          </p>
          
          <h3 className="blog-subheading">Practice Self-Care</h3>
          <p>
            Therapy can stir up emotions. Be gentle with yourself and engage in activities that help you feel grounded and calm. Plan a relaxing activity for after your therapy sessions.
          </p>
          
          <h3 className="blog-subheading">Evaluate Your Experience</h3>
          <p>
            After your first session, ask yourself these questions to evaluate your experience:
          </p>
          <ul>
            <li>Did I feel comfortable talking to this therapist?</li>
            <li>Did I feel listened to and understood?</li>
            <li>Does their approach seem like a good fit for my needs?</li>
            <li>Do I feel hopeful about working with this person?</li>
          </ul>
          
          <h2 className="blog-subtitle">Final Thoughts</h2>
          <p>
            Starting therapy is a courageous step toward better mental health and well-being. Your first session is just the beginning of what can be a transformative journey. Remember that therapy is a collaborative process—you and your therapist are partners in your growth and healing.
          </p>
          
          <p>
            It's normal for the therapeutic relationship to deepen over time. As you continue with sessions, you'll likely feel more comfortable opening up and exploring deeper issues. Trust the process and give yourself permission to take things at your own pace.
          </p>
          
          <div className="bg-indigo-50 rounded-lg p-4 my-6">
            <h3 className="font-bold text-gray-800 mb-2">Remember</h3>
            <p className="text-gray-700">
              There's no "perfect" way to do therapy. Every person's journey is unique. Be patient with yourself, communicate openly with your therapist, and celebrate the courage it takes to begin this important work.
            </p>
          </div>
        </div>
      </div>

      {/* Author Bio */}
      <div className="blog-author">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
          alt="Dr. Sarah Johnson" 
          className="blog-author-image"
        />
        <div>
          <h3 className="blog-author-name">About the Author</h3>
          <p className="blog-author-bio">
            Dr. Sarah Johnson is a licensed clinical psychologist with over 15 years of experience in both traditional and online therapy settings. She specializes in anxiety, depression, and helping clients navigate major life transitions.
          </p>
        </div>
      </div>

      {/* Related Articles */}
      <div className="blog-related">
        <h3 className="blog-related-title">Related Articles</h3>
        <div className="blog-related-grid">
          <div className="flex items-start">
            <img 
              src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
              alt="Choosing the Right Therapist" 
              className="blog-related-image"
            />
            <div>
              <h4 className="blog-related-item-title">How to Choose the Right Therapist for Your Needs</h4>
              <Link to="/guides/selection/choosing-online-therapist" className="blog-related-item-link">
                Read article <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
          <div className="flex items-start">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
              alt="Therapy Types Explained" 
              className="blog-related-image"
            />
            <div>
              <h4 className="blog-related-item-title">Therapy Modalities Explained: Finding Your Best Fit</h4>
              <Link to="/guides/selection/therapy-types-explained" className="blog-related-item-link">
                Read article <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default TherapyFirstSession;
