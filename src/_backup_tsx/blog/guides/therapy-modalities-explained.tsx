import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Clock, Brain, Target, Heart, Zap, Shield, MessageCircle } from 'lucide-react';
import BlogLayout from '../BlogLayout';

const TherapyModalitiesExplained = () => {
  return (
    <BlogLayout>
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
        <span className="mx-2">/</span>
        <Link to="/blog/guides" className="hover:text-indigo-600">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Therapy Modalities</span>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <img src="/images/blog/therapy-modalities-explained.jpg" alt="Therapy Modalities" className="blog-featured-image h-96" />
        <div className="p-8">
          <h1 className="blog-title">Therapy Modalities Explained: Finding Your Best Fit</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <Calendar className="h-4 w-4 mr-1" />
              <span>April 18, 2025</span>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <User className="h-4 w-4 mr-1" />
              <span>By Dr. Sarah Johnson, Ph.D.</span>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <Tag className="h-4 w-4 mr-1" />
              <Link to="/blog/tag/therapy-types" className="hover:text-indigo-600">Therapy Types</Link>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <Clock className="h-4 w-4 mr-1" />
              <span>15 min read</span>
            </div>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4 mb-6">
            <p className="text-gray-700 italic">
              "Understanding different therapy approaches empowers you to make informed decisions. The best modality is the one that resonates with you and addresses your specific needs." — Dr. Sarah Johnson
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="blog-content">
          <p>Walking into therapy for the first time, you might hear terms like CBT, DBT, psychodynamic therapy, or EMDR. What do these mean, and how do you know which approach is right for you? This guide breaks down the most common therapy modalities.</p>

          <h2 className="blog-subtitle">Cognitive Behavioral Therapy (CBT)</h2>
          <p><strong>Core principle:</strong> Our thoughts, feelings, and behaviors are interconnected. By identifying and challenging negative thought patterns, we can change how we feel and act.</p>
          <p><strong>Best for:</strong> Depression, anxiety, OCD, PTSD, eating disorders, phobias</p>
          <p><strong>Duration:</strong> Typically 12-20 sessions, short-term focused</p>

          <h3 className="blog-subheading">What to Expect</h3>
          <ul>
            <li>Regular homework assignments between sessions</li>
            <li>Thought records to track patterns</li>
            <li>Behavioral experiments to test beliefs</li>
            <li>Learning specific coping skills</li>
            <li>Measurable goals and progress tracking</li>
          </ul>

          <h2 className="blog-subtitle">Dialectical Behavior Therapy (DBT)</h2>
          <p><strong>Core principle:</strong> Balance acceptance and change</p>
          <p><strong>Best for:</strong> Borderline personality disorder, self-harm, suicidal thoughts, emotion dysregulation</p>
          <p><strong>Duration:</strong> Typically 6-12 months or longer</p>

          <h3 className="blog-subheading">Four Core Skills</h3>
          <ol>
            <li><strong>Mindfulness:</strong> Being present and aware</li>
            <li><strong>Distress Tolerance:</strong> Surviving crises without making things worse</li>
            <li><strong>Emotion Regulation:</strong> Managing intense emotions</li>
            <li><strong>Interpersonal Effectiveness:</strong> Communicating needs effectively</li>
          </ol>

          <h2 className="blog-subtitle">Psychodynamic Therapy</h2>
          <p><strong>Core principle:</strong> Unconscious patterns from the past shape present behavior</p>
          <p><strong>Best for:</strong> Relationship patterns, self-exploration, chronic depression</p>
          <p><strong>Duration:</strong> Long-term, often years</p>

          <h3 className="blog-subheading">What to Expect</h3>
          <ul>
            <li>Free association—talking about whatever comes to mind</li>
            <li>Dream analysis and interpretation</li>
            <li>Exploring childhood experiences</li>
            <li>Examining patterns in relationships</li>
            <li>Discussion of feelings toward the therapist</li>
          </ul>

          <h2 className="blog-subtitle">EMDR (Eye Movement Desensitization and Reprocessing)</h2>
          <p><strong>Core principle:</strong> Bilateral stimulation helps process traumatic memories</p>
          <p><strong>Best for:</strong> PTSD, trauma, phobias, panic disorder</p>
          <p><strong>Duration:</strong> Varies, often 6-12 sessions for single trauma</p>

          <h2 className="blog-subtitle">How to Choose</h2>

          <h3 className="blog-subheading">Consider Your Goals</h3>
          <ul>
            <li><strong>Specific symptom relief:</strong> CBT, DBT, EMDR</li>
            <li><strong>Understanding yourself deeply:</strong> Psychodynamic</li>
            <li><strong>Processing trauma:</strong> EMDR, trauma-focused CBT</li>
            <li><strong>Relationship patterns:</strong> Psychodynamic, relational therapy</li>
          </ul>

          <h3 className="blog-subheading">Consider Your Learning Style</h3>
          <ul>
            <li><strong>Prefer structure and homework:</strong> CBT, DBT</li>
            <li><strong>Prefer open exploration:</strong> Psychodynamic</li>
            <li><strong>Want practical skills:</strong> DBT, CBT</li>
          </ul>

          <h2 className="blog-subtitle">Final Thoughts</h2>
          <p>Remember that research shows the therapeutic relationship matters more than the specific modality for most concerns. A skilled therapist you connect with using an approach that's "good enough" will likely help you more than a perfect modality with a therapist you don't click with.</p>
        </div>
      </div>

      <div className="blog-author">
        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" alt="Dr. Sarah Johnson" className="blog-author-image" />
        <div>
          <h3 className="blog-author-name">About the Author</h3>
          <p className="blog-author-bio">Dr. Sarah Johnson, Ph.D., is a licensed clinical psychologist trained in multiple therapeutic modalities.</p>
        </div>
      </div>

      <div className="blog-newsletter">
        <h3 className="blog-newsletter-title">Subscribe to Our Newsletter</h3>
        <p className="blog-newsletter-description">Stay up-to-date with the latest mental health news and resources.</p>
        <div className="blog-newsletter-form">
          <input type="email" placeholder="Your email address" className="blog-newsletter-input" />
          <button className="blog-newsletter-button">Subscribe</button>
        </div>
      </div>
    </BlogLayout>
  );
};

export default TherapyModalitiesExplained;
