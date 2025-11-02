import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Clock, ArrowRight } from 'lucide-react';
import BlogLayout from '../BlogLayout';

const BlogNews: React.FC = () => {
  // News articles data
  const newsArticles = [
    {
      id: 'mental-health-policy-updates',
      title: '2025 Mental Health Policy Updates: What You Need to Know',
      excerpt: 'The mental health policy landscape is evolving rapidly in 2025, with significant expansions in telehealth coverage, increased funding for community-based services, and new initiatives to address provider shortages.',
      date: 'March 20, 2025',
      author: 'Emma Rodriguez, Health Policy Analyst',
      tags: ['Policy', 'Mental Health', 'Telehealth'],
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      url: '/blog/news/mental-health-policy-updates'
    },
    {
      id: 'latest-therapy-research',
      title: 'Latest Research on Online Therapy Effectiveness',
      excerpt: 'The growing body of research on online therapy continues to validate its effectiveness across a wide range of mental health conditions.',
      date: 'June 15, 2025',
      author: 'Dr. Sarah Johnson, Ph.D.',
      tags: ['Research', 'Online Therapy'],
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      url: '/blog/news/latest-therapy-research'
    },
    {
      id: 'ai-therapy-tools',
      title: 'AI-Powered Tools Enhancing Online Therapy Experiences',
      excerpt: 'New artificial intelligence applications are helping therapists provide more personalized and effective online mental health treatment.',
      date: 'May 10, 2025',
      author: 'Dr. Michael Chen, Digital Mental Health Researcher',
      tags: ['Technology', 'AI', 'Innovation'],
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      url: '#'
    },
    {
      id: 'therapy-platform-merger',
      title: 'Major Online Therapy Platforms Announce Merger',
      excerpt: 'Two leading online therapy providers have announced plans to merge, creating the largest telehealth mental health service in North America.',
      date: 'April 22, 2025',
      author: 'James Wilson, Business Technology Reporter',
      tags: ['Business', 'Industry News', 'Platforms'],
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      url: '#'
    },
    {
      id: 'global-mental-health-report',
      title: 'WHO Releases Global Mental Health Report: Online Therapy Adoption Rising',
      excerpt: 'The World Health Organization\'s latest report shows significant increases in online therapy adoption worldwide, with positive outcomes reported.',
      date: 'April 5, 2025',
      author: 'Dr. Elena Patel, Global Health Correspondent',
      tags: ['Global Health', 'WHO', 'Statistics'],
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      url: '#'
    }
  ];

  // Featured article (first in the list)
  const featuredArticle = newsArticles[0];
  // Other articles
  const otherArticles = newsArticles.slice(1);

  return (
    <BlogLayout>
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">News</span>
      </div>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Mental Health News</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest research, policy changes, and industry developments in the mental health and online therapy space.
        </p>
      </div>

      {/* Featured Article */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={featuredArticle.image} 
              alt={featuredArticle.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3">
              <div className="flex items-center mr-4 mb-2 sm:mb-0">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{featuredArticle.date}</span>
              </div>
              <div className="flex items-center mr-4 mb-2 sm:mb-0">
                <User className="h-4 w-4 mr-1" />
                <span>{featuredArticle.author}</span>
              </div>
              <div className="flex items-center mb-2 sm:mb-0">
                <Clock className="h-4 w-4 mr-1" />
                <span>{featuredArticle.readTime}</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              <Link to={featuredArticle.url} className="hover:text-indigo-600">
                {featuredArticle.title}
              </Link>
            </h2>
            
            <p className="text-gray-600 mb-6">
              {featuredArticle.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredArticle.tags.map((tag) => (
                <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <Link 
              to={featuredArticle.url} 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              Read full article <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {otherArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3">
                <div className="flex items-center mr-4 mb-2 sm:mb-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                <Link to={article.url} className="hover:text-indigo-600">
                  {article.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 mb-4">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{article.author}</span>
                <Link 
                  to={article.url} 
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="bg-indigo-50 rounded-lg p-8 text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated on Mental Health News</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest research findings, policy updates, and industry news delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-2 mb-2 sm:mb-0 sm:mr-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Browse by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="#" className="bg-indigo-100 text-indigo-800 rounded-md p-4 text-center hover:bg-indigo-200 transition duration-200">
            Research
          </Link>
          <Link to="#" className="bg-blue-100 text-blue-800 rounded-md p-4 text-center hover:bg-blue-200 transition duration-200">
            Technology
          </Link>
          <Link to="#" className="bg-green-100 text-green-800 rounded-md p-4 text-center hover:bg-green-200 transition duration-200">
            Policy
          </Link>
          <Link to="#" className="bg-purple-100 text-purple-800 rounded-md p-4 text-center hover:bg-purple-200 transition duration-200">
            Industry
          </Link>
          <Link to="#" className="bg-red-100 text-red-800 rounded-md p-4 text-center hover:bg-red-200 transition duration-200">
            Global Health
          </Link>
          <Link to="#" className="bg-yellow-100 text-yellow-800 rounded-md p-4 text-center hover:bg-yellow-200 transition duration-200">
            Statistics
          </Link>
          <Link to="#" className="bg-pink-100 text-pink-800 rounded-md p-4 text-center hover:bg-pink-200 transition duration-200">
            Interviews
          </Link>
          <Link to="#" className="bg-gray-100 text-gray-800 rounded-md p-4 text-center hover:bg-gray-200 transition duration-200">
            Opinion
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogNews;
