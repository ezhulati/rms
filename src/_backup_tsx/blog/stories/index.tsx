import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Clock, ArrowRight, Heart, MessageCircle } from 'lucide-react';
import BlogLayout from '../BlogLayout';

const BlogStories: React.FC = () => {
  // Stories articles data
  const storiesArticles = [
    {
      id: 'therapist-interviews',
      title: 'A Day in the Life of an Online Therapist',
      excerpt: 'Five therapists share their experiences transitioning to online practice, discussing challenges, benefits, and how they maintain connection with clients in a virtual environment.',
      date: 'June 5, 2025',
      author: 'Dr. Sarah Johnson, Ph.D.',
      tags: ['Therapist Perspectives', 'Online Practice'],
      readTime: '11 min read',
      image: '/images/blog/index.jpg',
      url: '/blog/stories/therapist-interviews'
    },
    {
      id: 'self-care-practices',
      title: 'Self-Care Practices That Actually Work: Real Stories',
      excerpt: 'Beyond bubble baths and scented candles, these are the self-care practices that have made a meaningful difference in people\'s mental health journeys.',
      date: 'May 22, 2025',
      author: 'Lisa Thompson, Wellness Coach',
      tags: ['Self-Care', 'Wellness', 'Personal Stories'],
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      url: '/blog/stories/self-care-practices'
    },
    {
      id: 'therapy-success-stories',
      title: 'Therapy Success Stories: When the Right Match Makes All the Difference',
      excerpt: 'Three individuals share how finding the right therapist transformed their mental health journey and helped them overcome significant challenges.',
      date: 'May 10, 2025',
      author: 'James Wilson, Mental Health Advocate',
      tags: ['Success Stories', 'Therapeutic Relationship'],
      readTime: '13 min read',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      url: '/blog/stories/therapy-success-stories'
    },
    {
      id: 'anxiety-management-stories',
      title: 'Living with Anxiety: Personal Strategies That Help Me Cope',
      excerpt: 'Four people with different anxiety disorders share the daily practices, tools, and techniques that help them manage symptoms and thrive.',
      date: 'April 18, 2025',
      author: 'Emma Rodriguez, Mental Health Writer',
      tags: ['Anxiety', 'Coping Strategies', 'Personal Stories'],
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      url: '/blog/stories/anxiety-management-stories'
    },
    {
      id: 'therapy-during-crisis',
      title: 'How Therapy Helped Me Through My Darkest Times',
      excerpt: 'Personal accounts of how therapy provided crucial support during major life crises, from grief and loss to career changes and relationship challenges.',
      date: 'April 2, 2025',
      author: 'Michael Chen, Journalist',
      tags: ['Crisis Support', 'Life Transitions', 'Resilience'],
      readTime: '14 min read',
      image: 'https://images.unsplash.com/photo-1518754806364-d3a365a7ed17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      url: '/blog/stories/therapy-during-crisis'
    }
  ];

  // Featured story (first in the list)
  const featuredStory = storiesArticles[0];
  // Other stories
  const otherStories = storiesArticles.slice(1);

  return (
    <BlogLayout>
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Stories</span>
      </div>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Mental Health Stories & Experiences</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real-life accounts, personal journeys, and insights from therapists, clients, and mental health advocates.
        </p>
      </div>

      {/* Featured Story */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={featuredStory.image} 
              alt={featuredStory.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3">
              <div className="flex items-center mr-4 mb-2 sm:mb-0">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{featuredStory.date}</span>
              </div>
              <div className="flex items-center mr-4 mb-2 sm:mb-0">
                <User className="h-4 w-4 mr-1" />
                <span>{featuredStory.author}</span>
              </div>
              <div className="flex items-center mb-2 sm:mb-0">
                <Clock className="h-4 w-4 mr-1" />
                <span>{featuredStory.readTime}</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              <Link to={featuredStory.url} className="hover:text-indigo-600">
                {featuredStory.title}
              </Link>
            </h2>
            
            <p className="text-gray-600 mb-6">
              {featuredStory.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredStory.tags.map((tag) => (
                <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <Link 
              to={featuredStory.url} 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              Read full story <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Story Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {otherStories.map((story) => (
          <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={story.image} 
              alt={story.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3">
                <div className="flex items-center mr-4 mb-2 sm:mb-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{story.date}</span>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{story.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                <Link to={story.url} className="hover:text-indigo-600">
                  {story.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 mb-4">
                {story.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {story.tags.map((tag) => (
                  <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{story.author}</span>
                <Link 
                  to={story.url} 
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Story Categories */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Browse Stories by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-pink-50 rounded-lg p-6 text-center">
            <Heart className="h-8 w-8 text-pink-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-800 mb-2">Personal Journeys</h4>
            <p className="text-sm text-gray-600 mb-3">Stories of individual mental health experiences and recovery</p>
            <Link to="#" className="text-pink-600 hover:text-pink-800 text-sm font-medium">
              View stories <ArrowRight className="h-3 w-3 inline ml-1" />
            </Link>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-800 mb-2">Therapist Perspectives</h4>
            <p className="text-sm text-gray-600 mb-3">Insights and experiences from mental health professionals</p>
            <Link to="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View stories <ArrowRight className="h-3 w-3 inline ml-1" />
            </Link>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <User className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-800 mb-2">Client Experiences</h4>
            <p className="text-sm text-gray-600 mb-3">First-hand accounts of therapy and mental health treatment</p>
            <Link to="#" className="text-green-600 hover:text-green-800 text-sm font-medium">
              View stories <ArrowRight className="h-3 w-3 inline ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Share Your Story */}
      <div className="bg-indigo-50 rounded-lg p-8 text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Share Your Story</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Your experience matters. If you'd like to share your mental health journey or insights as a therapist, we'd love to hear from you.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-200">
          Submit Your Story
        </button>
        <p className="text-xs text-gray-500 mt-4">
          All submissions are reviewed by our editorial team. We prioritize diverse perspectives and authentic experiences.
        </p>
      </div>
    </BlogLayout>
  );
};

export default BlogStories;
