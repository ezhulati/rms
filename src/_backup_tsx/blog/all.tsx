import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Search, Filter } from 'lucide-react';

const BlogAll: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'Latest Research on Online Therapy Effectiveness',
      excerpt: 'A growing body of research continues to validate the effectiveness of online therapy for a wide range of mental health conditions.',
      category: 'news',
      categoryLabel: 'News & Research',
      date: 'June 15, 2025',
      author: 'Dr. Sarah Johnson',
      image: '/images/blog/all.jpg',
      tags: ['research', 'online-therapy'],
      url: '/blog/news/latest-therapy-research'
    },
    {
      id: 2,
      title: 'A Day in the Life of an Online Therapist',
      excerpt: 'We interviewed several online therapists to understand their experiences, challenges, and rewards in the digital therapy space.',
      category: 'stories',
      categoryLabel: 'Stories & Interviews',
      date: 'June 10, 2025',
      author: 'Emma Rodriguez',
      image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      tags: ['interviews', 'therapists'],
      url: '/blog/stories/therapist-interviews'
    },
    {
      id: 3,
      title: '5 Effective Self-Care Practices for Mental Wellness',
      excerpt: 'Simple but powerful self-care strategies you can incorporate into your daily routine for better mental health.',
      category: 'stories',
      categoryLabel: 'Stories & Interviews',
      date: 'June 5, 2025',
      author: 'Dr. Maya Patel',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      tags: ['self-care', 'mental-health'],
      url: '/blog/stories/self-care-practices'
    },
    {
      id: 4,
      title: 'Navigating Insurance Coverage for Online Therapy',
      excerpt: 'A comprehensive guide to understanding and maximizing your insurance benefits for mental health services.',
      category: 'guides',
      categoryLabel: 'Practical Guides',
      date: 'June 1, 2025',
      author: 'James Wilson, MHA',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      tags: ['insurance', 'therapy'],
      url: '/blog/guides/insurance-coverage-guide'
    },
    {
      id: 5,
      title: 'Mental Health Policy Updates 2025',
      excerpt: 'Recent changes in mental health policy and legislation that affect access to care and insurance coverage.',
      category: 'news',
      categoryLabel: 'News & Research',
      date: 'May 28, 2025',
      author: 'Dr. Robert Thompson',
      image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      tags: ['policy', 'healthcare'],
      url: '/blog/news/mental-health-policy-updates'
    },
    {
      id: 6,
      title: 'New Innovations in Telehealth Technology',
      excerpt: 'Exploring the latest technological advancements that are transforming the delivery of mental health care.',
      category: 'news',
      categoryLabel: 'News & Research',
      date: 'May 20, 2025',
      author: 'Alex Chen, MSc',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      tags: ['technology', 'telehealth'],
      url: '/blog/news/telehealth-innovations'
    },
    {
      id: 7,
      title: 'From Anxiety to Confidence: A Client\'s Journey',
      excerpt: 'One person\'s inspiring story of overcoming severe anxiety through online therapy and personal growth.',
      category: 'stories',
      categoryLabel: 'Stories & Interviews',
      date: 'May 15, 2025',
      author: 'Jessica Martinez',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      tags: ['success-story', 'anxiety'],
      url: '/blog/stories/client-success-story'
    },
    {
      id: 8,
      title: 'How to Find the Right Therapist for You',
      excerpt: 'A step-by-step guide to finding a therapist who matches your needs, preferences, and goals.',
      category: 'guides',
      categoryLabel: 'Practical Guides',
      date: 'May 10, 2025',
      author: 'Dr. Leila Patel',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      tags: ['therapy', 'guidance'],
      url: '/blog/guides/finding-right-therapist'
    },
    {
      id: 9,
      title: 'What to Expect in Your First Therapy Session',
      excerpt: 'Preparing for your first therapy appointment: what to expect, what to bring, and how to get the most out of it.',
      category: 'guides',
      categoryLabel: 'Practical Guides',
      date: 'May 5, 2025',
      author: 'Michael Torres, LCSW',
      image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      tags: ['therapy', 'beginners'],
      url: '/blog/guides/therapy-first-session'
    },
    {
      id: 10,
      title: 'The Impact of Social Media on Mental Health',
      excerpt: 'Examining the complex relationship between social media use and psychological wellbeing.',
      category: 'news',
      categoryLabel: 'News & Research',
      date: 'April 28, 2025',
      author: 'Dr. Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      tags: ['research', 'social-media'],
      url: '/blog/news/social-media-mental-health'
    },
    {
      id: 11,
      title: 'Mindfulness Techniques for Daily Stress Management',
      excerpt: 'Practical mindfulness exercises that can be integrated into your daily routine to reduce stress and anxiety.',
      category: 'guides',
      categoryLabel: 'Practical Guides',
      date: 'April 20, 2025',
      author: 'Dr. Maya Patel',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      tags: ['mindfulness', 'stress'],
      url: '/blog/guides/mindfulness-techniques'
    },
    {
      id: 12,
      title: 'Understanding Different Therapy Approaches',
      excerpt: 'A comparison of major therapeutic modalities to help you find the right approach for your needs.',
      category: 'guides',
      categoryLabel: 'Practical Guides',
      date: 'April 15, 2025',
      author: 'Dr. Robert Thompson',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      tags: ['therapy', 'approaches'],
      url: '/blog/guides/therapy-approaches'
    }
  ];
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">All Blog Articles</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete collection of articles, guides, and stories on mental health topics.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-800 shadow-sm transition-all duration-200 hover:border-indigo-300 text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700 mr-2">Filter by:</span>
                <select
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-800 shadow-sm transition-all duration-200 hover:border-indigo-300 cursor-pointer appearance-none pr-8 text-base font-medium"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
                >
                  <option value="all">All Categories</option>
                  <option value="news">News & Research</option>
                  <option value="stories">Stories & Interviews</option>
                  <option value="guides">Practical Guides</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      post.category === 'news' ? 'bg-blue-100 text-blue-800' : 
                      post.category === 'stories' ? 'bg-green-100 text-green-800' : 
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {post.categoryLabel}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full hover:bg-gray-200 cursor-pointer"
                        onClick={() => setSearchTerm(tag)}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link 
                    to={post.url} 
                    className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 bg-indigo-50 px-4 py-2 rounded-md hover:bg-indigo-100 transition-all duration-200 inline-flex w-auto"
                  >
                    Read full article <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-800 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button 
                className="text-indigo-600 font-medium bg-indigo-50 px-4 py-2 rounded-md hover:bg-indigo-100 transition-all duration-200 shadow-sm border border-indigo-100"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
          
          {/* Newsletter */}
          <div className="blog-newsletter">
            <h3 className="blog-newsletter-title">Subscribe to Our Newsletter</h3>
            <p className="blog-newsletter-description">
              Stay up-to-date with the latest mental health news, research, and resources delivered straight to your inbox.
            </p>
            <div className="blog-newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="blog-newsletter-input"
              />
              <button className="blog-newsletter-button">
                Subscribe
              </button>
            </div>
            <p className="blog-newsletter-privacy">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAll;
