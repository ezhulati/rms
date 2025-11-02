import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, CreditCard, Shield, Percent, FileText } from 'lucide-react';
import Button from '../../components/Button';

const ReviewsPricing = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Online Therapy Pricing Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis of online therapy costs, insurance coverage, and value for money across major platforms.
          </p>
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Online Therapy Pricing Comparison" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex items-center mb-4">
                <DollarSign className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Online Therapy Pricing Comparison</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our comprehensive comparison breaks down the costs of major online therapy platforms, including subscription plans, session fees, and hidden costs to help you find the most affordable option for your needs.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-800">What You'll Learn</h3>
                    <p className="text-gray-600">Detailed pricing breakdowns for BetterHelp, Talkspace, Cerebral, and more</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CreditCard className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-800">Payment Options</h3>
                    <p className="text-gray-600">Information on payment methods, billing cycles, and cancellation policies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Percent className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-800">Value Analysis</h3>
                    <p className="text-gray-600">Cost-per-session calculations and feature-to-price ratio comparisons</p>
                  </div>
                </div>
              </div>
              <Button 
                as={Link}
                to="/reviews/pricing/online-therapy-pricing-comparison"
                variant="primary"
                icon={ArrowRight}
              >
                Read the Full Comparison
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-800">Insurance Coverage Guide</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Navigate the complexities of insurance coverage for online therapy with our comprehensive guide to in-network providers, out-of-network benefits, and reimbursement strategies.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <span>Which platforms accept insurance</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <span>How to verify your coverage</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <span>Submitting claims for reimbursement</span>
                </div>
              </div>
              <Button 
                as={Link}
                to="/reviews/pricing/insurance-coverage-guide"
                variant="outline"
                size="sm"
              >
                Read the Guide
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-800">Affordable Therapy Options</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Discover budget-friendly online therapy solutions, including sliding scale providers, low-cost platforms, and free mental health resources for those on tight budgets.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <span>Platforms with sliding scale fees</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <span>Financial aid and discount programs</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <span>Free and low-cost alternatives</span>
                </div>
              </div>
              <Button 
                as={Link}
                to="/compare/alternatives/free-therapy-options"
                variant="outline"
                size="sm"
              >
                Explore Affordable Options
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Pricing Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Platform</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Monthly Cost</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Per Session</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Insurance</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold">Free Trial</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">BetterHelp</td>
                  <td className="py-3 px-4 text-center">$240-$360</td>
                  <td className="py-3 px-4 text-center">$60-$90</td>
                  <td className="py-3 px-4 text-center">No</td>
                  <td className="py-3 px-4 text-center">7 days</td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Talkspace</td>
                  <td className="py-3 px-4 text-center">$260-$396</td>
                  <td className="py-3 px-4 text-center">$65-$99</td>
                  <td className="py-3 px-4 text-center">Yes</td>
                  <td className="py-3 px-4 text-center">No</td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Cerebral</td>
                  <td className="py-3 px-4 text-center">$85-$325</td>
                  <td className="py-3 px-4 text-center">Varies</td>
                  <td className="py-3 px-4 text-center">Yes</td>
                  <td className="py-3 px-4 text-center">No</td>
                </tr>
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Online-Therapy.com</td>
                  <td className="py-3 px-4 text-center">$200-$440</td>
                  <td className="py-3 px-4 text-center">$50-$110</td>
                  <td className="py-3 px-4 text-center">No</td>
                  <td className="py-3 px-4 text-center">No</td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Calmerry</td>
                  <td className="py-3 px-4 text-center">$227-$360</td>
                  <td className="py-3 px-4 text-center">$57-$90</td>
                  <td className="py-3 px-4 text-center">No</td>
                  <td className="py-3 px-4 text-center">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            * Prices are approximate and subject to change. Last updated March 2025.
          </p>
        </div>

        {/* Common Questions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Questions About Online Therapy Pricing</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is online therapy cheaper than in-person therapy?</h3>
              <p className="text-gray-600">
                Generally, yes. Online therapy typically costs between $60-$120 per session, while traditional in-person therapy averages $100-$200 per session. Online platforms also often offer subscription models that can reduce the per-session cost further.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Does insurance cover online therapy?</h3>
              <p className="text-gray-600">
                It depends on the platform and your insurance plan. Some platforms like Talkspace and Cerebral work directly with insurance companies, while others provide superbills for out-of-network reimbursement. Coverage varies widely between insurance plans.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Are there hidden costs with online therapy subscriptions?</h3>
              <p className="text-gray-600">
                Some platforms charge additional fees for features like live sessions, psychiatry services, or medication management. Always check what's included in your subscription and what costs extra before signing up.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">What payment options do online therapy platforms accept?</h3>
              <p className="text-gray-600">
                Most platforms accept major credit cards and debit cards. Some also accept HSA/FSA cards, PayPal, or other payment methods. Few platforms accept direct payment from insurance, though this is becoming more common.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Find Affordable Therapy That Fits Your Budget</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Use our budget-friendly therapy finder to discover platforms that match your financial needs and mental health goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/budget-friendly-finder" 
              variant="light"
              size="lg"
            >
              Find Affordable Therapy
            </Button>
            <Button 
              as={Link} 
              to="/reviews/pricing/online-therapy-pricing-comparison" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Compare Platform Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPricing;
