import React from 'react';
import { ClipboardCheck, Users, FileText, Award, Search, Star, Shield } from 'lucide-react';

const HowWeReviewed = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">How We Review Online Therapy Services</h2>
      <p className="text-gray-600 mb-6">
        At RealMindSolutions, we take a comprehensive, multi-faceted approach to reviewing online therapy platforms. 
        Our methodology combines rigorous testing, extensive user feedback, and expert analysis to provide you with 
        the most accurate, unbiased information possible.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex">
          <div className="mr-4">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
              <ClipboardCheck className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Hands-On Testing</h3>
            <p className="text-gray-600">
              Our team personally signs up for and uses each platform we review. We evaluate the entire user experience from 
              sign-up to therapy sessions, testing all available communication methods (messaging, live chat, video, phone). 
              We assess therapist responsiveness, platform usability, and the quality of therapeutic interactions across 
              multiple sessions.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Users className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">User Experience Analysis</h3>
            <p className="text-gray-600">
              We collect and analyze feedback from thousands of actual users through detailed surveys and interviews. 
              This provides insights into long-term satisfaction, therapeutic outcomes, and the nuances of each platform 
              that might not be apparent during our testing period. We pay special attention to how platforms serve 
              diverse populations with varying needs.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Shield className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Privacy & Security Assessment</h3>
            <p className="text-gray-600">
              We thoroughly evaluate each platform's privacy policies, data security measures, and compliance with 
              healthcare regulations like HIPAA. We examine encryption standards, data storage practices, and 
              policies regarding user information. This critical aspect of our review process ensures we only 
              recommend platforms that prioritize your confidentiality and data protection.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Search className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Therapist Verification</h3>
            <p className="text-gray-600">
              We investigate each platform's therapist vetting process, credential verification systems, and ongoing 
              quality control measures. Our team independently verifies the licensing and qualifications of a sample 
              of therapists on each platform to ensure they meet professional standards. We also assess therapist 
              diversity, specializations, and the matching process.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
              <FileText className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Value Assessment</h3>
            <p className="text-gray-600">
              We conduct a detailed analysis of each platform's pricing structure, subscription options, and overall 
              value. This includes examining hidden fees, cancellation policies, and insurance coverage options. 
              We compare the cost against the quality and quantity of services provided to determine which platforms 
              offer the best value for different budget levels.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Award className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Expert Consultation</h3>
            <p className="text-gray-600">
              Our reviews are developed in consultation with licensed mental health professionals who provide clinical 
              perspectives on each platform's therapeutic approaches and suitability for different conditions. These 
              experts help us evaluate the evidence-based practices used, appropriateness of care for various mental 
              health concerns, and potential limitations of online therapy formats.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Our Rating Criteria</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-indigo-600 mr-2" />
              <h4 className="font-bold text-gray-800">Therapist Qualifications</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Licensing, credentials, specializations, and the platform's vetting process
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-indigo-600 mr-2" />
              <h4 className="font-bold text-gray-800">Platform Usability</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Interface design, ease of use, accessibility features, and technical reliability
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-indigo-600 mr-2" />
              <h4 className="font-bold text-gray-800">Communication Options</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Quality and availability of messaging, live chat, video, and phone sessions
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-indigo-600 mr-2" />
              <h4 className="font-bold text-gray-800">Privacy & Security</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Data protection, encryption, HIPAA compliance, and confidentiality measures
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-indigo-600 mr-2" />
              <h4 className="font-bold text-gray-800">Value & Affordability</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Pricing structure, subscription options, insurance coverage, and overall value
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-indigo-600 mr-2" />
              <h4 className="font-bold text-gray-800">Client Satisfaction</h4>
            </div>
            <p className="text-gray-600 text-sm">
              User reviews, reported outcomes, and overall satisfaction with the service
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Our Commitment to You</h3>
        <p className="text-gray-600 mb-4">
          At RealMindSolutions, we're committed to providing honest, thorough, and unbiased reviews. We regularly update our 
          reviews to reflect changes in platforms, pricing, and features. Our goal is to help you find the right mental health 
          solution for your unique needs, preferences, and budget.
        </p>
        <p className="text-gray-600">
          We maintain editorial independence and do not accept payment for favorable reviews. While we may receive affiliate 
          commissions when you sign up through our links (at no additional cost to you), this never influences our ratings or 
          recommendations. Your mental health journey matters to us, and we're dedicated to providing information you can trust.
        </p>
      </div>
    </div>
  );
};

export default HowWeReviewed;