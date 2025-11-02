import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, MessageCircle, Clock, Download, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';
import BlogLayout from '../BlogLayout';

const BlogInsuranceCoverageGuide: React.FC = () => {
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
        <span className="text-gray-700">Insurance Coverage Guide</span>
      </div>

      {/* Article Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <img 
          src="/images/blog/insurance-coverage-guide.jpg" 
          alt="Insurance Coverage for Therapy" 
          className="blog-featured-image h-96"
        />
        <div className="p-8">
          <h1 className="blog-title">Navigating Insurance Coverage for Online Therapy</h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <Calendar className="h-4 w-4 mr-1" />
              <span>June 1, 2025</span>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <User className="h-4 w-4 mr-1" />
              <span>By James Wilson, MHA</span>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <Tag className="h-4 w-4 mr-1" />
              <Link to="/blog/tag/insurance" className="hover:text-indigo-600">Insurance</Link>,{" "}
              <Link to="/blog/tag/therapy" className="hover:text-indigo-600 ml-1">Therapy</Link>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <Clock className="h-4 w-4 mr-1" />
              <span>10 min read</span>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-4 mb-6">
            <p className="text-gray-700 italic">
              "Understanding your insurance coverage for mental health services can be complex, but it's worth the effort. With the right information, you can maximize your benefits and minimize out-of-pocket costs for the care you need." — James Wilson, Healthcare Administration Specialist
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="blog-content">
          <p>
            Navigating health insurance for mental health services can feel like learning a foreign language. Between deductibles, copays, in-network providers, and pre-authorizations, many people give up before they even start—potentially missing out on valuable coverage they're already paying for.
          </p>
          
          <p>
            This comprehensive guide will walk you through everything you need to know about using insurance for online therapy, from understanding your benefits to submitting claims for reimbursement. With this knowledge, you can make informed decisions about your mental health care and potentially save thousands of dollars annually.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <div className="flex">
              <AlertCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
              <p className="text-sm text-yellow-700">
                <strong>Important Note:</strong> Insurance policies vary widely. While this guide provides general information, always verify details with your specific insurance provider. Information in this article is current as of June 2025 but may change as insurance policies and laws evolve.
              </p>
            </div>
          </div>
          
          <h2 className="blog-subtitle">Understanding Mental Health Parity Laws</h2>
          <p>
            Before diving into the specifics of insurance coverage, it's important to understand your rights under mental health parity laws. The Mental Health Parity and Addiction Equity Act (MHPAEA) requires most insurance plans to cover mental health and substance use disorders at the same level as medical and surgical benefits.
          </p>
          
          <p>
            What this means for you:
          </p>
          <ul>
            <li>If your plan covers mental health services, the financial requirements (like copays and deductibles) can't be more restrictive than those for medical services</li>
            <li>Treatment limitations, such as the number of visits covered, can't be more restrictive for mental health services</li>
            <li>If your plan offers out-of-network coverage for medical services, it must also provide comparable coverage for mental health services</li>
          </ul>
          
          <h2 className="blog-subtitle">Types of Insurance Coverage for Online Therapy</h2>
          <p>
            Different types of insurance plans handle online therapy coverage in various ways. Here's what you need to know about each:
          </p>
          
          <h3 className="blog-subheading">Private Insurance (Employer-Sponsored or Individual Plans)</h3>
          <p>
            Most major private insurance companies now cover some form of online therapy, though coverage varies by plan. Companies like Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare typically include telehealth mental health services in their plans.
          </p>
          
          <h3 className="blog-subheading">Medicare</h3>
          <p>
            Medicare has expanded its telehealth coverage significantly. Medicare Part B now covers online therapy sessions with psychiatrists, psychologists, and other mental health professionals.
          </p>
          
          <h3 className="blog-subheading">Medicaid</h3>
          <p>
            Medicaid coverage for telehealth varies by state, but most states now include some coverage for online mental health services. Check with your state's Medicaid office for specific details.
          </p>
          
          <h2 className="blog-subtitle">How to Check Your Insurance Coverage</h2>
          <p>
            Before starting online therapy, it's crucial to understand exactly what your insurance will cover. Follow these steps to verify your benefits:
          </p>
          
          <h3 className="blog-subheading">Step 1: Review Your Plan Documents</h3>
          <p>
            Start by reviewing your Summary of Benefits and Coverage (SBC) or Evidence of Coverage (EOC) documents. Look for sections on mental health services and telehealth.
          </p>
          
          <h3 className="blog-subheading">Step 2: Call Your Insurance Provider</h3>
          <p>
            Call the member services number on your insurance card and ask about coverage for online therapy, including copays, session limits, and provider requirements.
          </p>
          
          <h3 className="blog-subheading">Step 3: Check with Online Therapy Platforms</h3>
          <p>
            Many online therapy platforms have dedicated insurance teams that can verify your benefits. Contact them directly to check coverage and costs.
          </p>
          
          <h2 className="blog-subtitle">Conclusion</h2>
          <p>
            Navigating insurance coverage for online therapy requires some effort, but the potential financial benefits make it worthwhile. By understanding your benefits, asking the right questions, and knowing how to submit claims effectively, you can make mental health care more affordable and accessible.
          </p>
        </div>
      </div>

      {/* Author Bio */}
      <div className="blog-author">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
          alt="James Wilson" 
          className="blog-author-image"
        />
        <div>
          <h3 className="blog-author-name">About the Author</h3>
          <p className="blog-author-bio">
            James Wilson, MHA, is a healthcare administration specialist with over a decade of experience in health insurance policy and patient advocacy.
          </p>
        </div>
      </div>

      {/* Related Articles */}
      <div className="blog-related">
        <h3 className="blog-related-title">Related Articles</h3>
        <div className="blog-related-grid">
          <div className="flex items-start">
            <img 
              src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
              alt="Therapist Interviews" 
              className="blog-related-image"
            />
            <div>
              <h4 className="blog-related-item-title">A Day in the Life of an Online Therapist</h4>
              <Link to="/blog/stories/therapist-interviews" className="blog-related-item-link">
                Read article <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
          <div className="flex items-start">
            <img 
              src="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
              alt="Self-Care Practices" 
              className="blog-related-image"
            />
            <div>
              <h4 className="blog-related-item-title">5 Effective Self-Care Practices for Mental Wellness</h4>
              <Link to="/blog/stories/self-care-practices" className="blog-related-item-link">
                Read article <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogInsuranceCoverageGuide;
