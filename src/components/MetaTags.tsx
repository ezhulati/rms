import React from 'react';
import { useLocation } from 'react-router-dom';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ 
  title, 
  description, 
  image = "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  type = "website" 
}) => {
  const location = useLocation();
  const baseUrl = "https://realmindsolutions.com";
  const url = `${baseUrl}${location.pathname}`;
  
  // Default values
  const defaultTitle = "RealMindSolutions | Find Your Perfect Mental Health Solution";
  const defaultDescription = "Compare, review, and discover the best online therapy platforms tailored to your unique needs. Expert guides, reviews, and tools to support your mental health journey.";
  
  // Use provided values or defaults
  const metaTitle = title || defaultTitle;
  const metaDescription = description || defaultDescription;

  React.useEffect(() => {
    // Update document title
    document.title = metaTitle;
    
    // Update meta tags
    const metaTags = {
      'meta[name="title"]': metaTitle,
      'meta[name="description"]': metaDescription,
      'meta[property="og:title"]': metaTitle,
      'meta[property="og:description"]': metaDescription,
      'meta[property="og:image"]': image,
      'meta[property="og:url"]': url,
      'meta[property="og:type"]': type,
      'meta[property="twitter:title"]': metaTitle,
      'meta[property="twitter:description"]': metaDescription,
      'meta[property="twitter:image"]': image,
      'meta[property="twitter:url"]': url,
    };
    
    // Update each meta tag
    Object.entries(metaTags).forEach(([selector, content]) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      }
    });
  }, [metaTitle, metaDescription, image, url, type]);
  
  return null; // This component doesn't render anything
};

export default MetaTags;