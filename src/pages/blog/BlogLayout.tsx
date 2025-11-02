import React, { ReactNode, useEffect } from 'react';
import './blog-styles.css';

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  // Apply blog styles when the component mounts
  useEffect(() => {
    // Scroll to top when blog page loads
    window.scrollTo(0, 0);
    
    // Add blog-page class to body for global styling if needed
    document.body.classList.add('blog-page');
    
    return () => {
      // Clean up when component unmounts
      document.body.classList.remove('blog-page');
    };
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-content-container">
        {children}
      </div>
    </div>
  );
};

export default BlogLayout;
