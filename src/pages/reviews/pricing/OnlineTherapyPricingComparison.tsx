import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, XCircle, DollarSign, CreditCard, Calendar, Shield, Percent } from 'lucide-react';
import Button from '../../../components/Button';
import HowWeReviewed from '../../../components/HowWeReviewed';

const OnlineTherapyPricingComparison = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Online Therapy Pricing Comparison" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Online Therapy Pricing Comparison (2025)</h1>
              <p className="text-xl text-gray-600 mb-6">
                A comprehensive analysis of costs, payment options, and value across major online therapy platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link}
                  to="/tools/matchers/budget-friendly-finder"
                  variant="primary"
                  icon={ArrowRight}
                >
                  Find Affordable Options
                </Button>
                <Button 
                  as={Link}
                  to="/reviews/pricing/insurance-coverage-guide"
                  variant="outline"
                >
                  Insurance Coverage Guide
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Price Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Online Therapy Platform Price Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Platform</th>
                  <th className="py-3 px-4 text-left">Weekly Cost</th>
                  <th className="py-3 px-4 text-left">Monthly Cost</th>
                  <th className="py-3 px-4 text-left">What's Included</th>
                  <th className="py-3 px-4 text-left">Insurance</th>
                  <th className="py-3 px-4 text-left">Value Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-4 px-4 font-medium">BetterHelp</td>
                  <td className="py-4 px-4">$60-$90</td>
                  <td className="py-4 px-4">$240-$360</td>
                  <td className="py-4 px-4">Unlimited messaging, 1 weekly live session</td>
                  <td className="py-4 px-4">
                    <XCircle className="h-5 w-5 text-red-500 inline mr-1" />
                    <span>No direct coverage</span>
                  </td>
                  <td className="py-4 px-4">4.2/5</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Talkspace</td>
                  <td className="py-4 px-4">$69-$109</td>
                  <td className="py-4 px-4">$276-$436</td>
                  <td className="py-4 px-4">Messaging, 1-4 live sessions/month</td>
                  <td className="py-4 px-4">
                    <CheckCircle className="h-5 w-5 text-green-500 inline mr-1" />
                    <span>Some plans covered</span>
                  </td>
                  <td className="py-4 px-4">4.0/5</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Calmerry</td>
                  <td className="py-4 px-4">$42-$68</td>
                  <td className="py-4 px-4">$168-$272</td>
                  <td className="py-4 px-4">Messaging, 1-4 live sessions/month</td>
                  <td className="py-4 px-4">
                    <XCircle className="h-5 w-5 text-red-500 inline mr-1" />
                    <span>No direct coverage</span>
                  </td>
                  <td className="py-4 px-4">4.5/5</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Online-Therapy.com</td>
                  <td className="py-4 px-4">$40-$88</td>
                  <td className="py-4 px-4">$160-$352</td>
                  <td className="py-4 px-4">Messaging, worksheets, 1-2 live sessions/week</td>
                  <td className="py-4 px-4">
                    <XCircle className="h-5 w-5 text-red-500 inline mr-1" />
                    <span>No direct coverage</span>
                  </td>
                  <td className="py-4 px-4">4.3/5</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Amwell</td>
                  <td className="py-4 px-4">$109-$129 per session</td>
                  <td className="py-4 px-4">Varies by usage</td>
                  <td className="py-4 px-4">Live video sessions only</td>
                  <td className="py-4 px-4">
                    <CheckCircle className="h-5 w-5 text-green-500 inline mr-1" />
                    <span>Many plans covered</span>
                  </td>
                  <td className="py-4 px-4">3.8/5</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Cerebral</td>
                  <td className="py-4 px-4">$85-$325</td>
                  <td className="py-4 px-4">$85-$325</td>
                  <td className="py-4 px-4">Therapy and/or medication management</td>
                  <td className="py-4 px-4">
                    <CheckCircle className="h-5 w-5 text-green-500 inline mr-1" />
                    <span>Some plans covered</span>
                  </td>
                  <td className="py-4 px-4">3.9/5</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">ReGain</td>
                  <td className="py-4 px-4">$60-$90</td>
                  <td className="py-4 px-4">$240-$360</td>
                  <td className="py-4 px-4">Couples therapy, messaging, live sessions</td>
                  <td className="py-4 px-4">
                    <XCircle className="h-5 w-5 text-red-500 inline mr-1" />
                    <span>No direct coverage</span>
                  </td>
                  <td className="py-4 px-4">4.1/5</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-sm text-gray-600">
            <p><strong>Note:</strong> Prices are accurate as of March 2025 and subject to change. Value rating considers cost relative to services provided.</p>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Online Therapy Costs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Subscription vs. Per-Session Pricing</h3>
              <p className="text-gray-600 mb-4">
                Online therapy platforms typically use one of two pricing models:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Subscription Model</span>
                    <p className="text-gray-600">Platforms like BetterHelp and Talkspace charge a weekly or monthly fee for a package of services, often including unlimited messaging and a set number of live sessions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Per-Session Model</span>
                    <p className="text-gray-600">Platforms like Amwell charge per individual session, similar to traditional therapy. This can be more expensive for frequent use but more flexible for occasional therapy.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Payment Options</h3>
              <p className="text-gray-600 mb-4">
                Most platforms offer multiple payment methods and billing cycles:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Billing Frequency</span>
                    <p className="text-gray-600">Weekly, monthly, quarterly, or annual billing options, with discounts often available for longer commitments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Payment Methods</span>
                    <p className="text-gray-600">Credit/debit cards, PayPal, and HSA/FSA accounts (for eligible platforms).</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Financial Aid</span>
                    <p className="text-gray-600">Some platforms offer reduced rates based on financial need, location, or specific circumstances.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Commitment Requirements</h3>
              <p className="text-gray-600 mb-4">
                Understanding the commitment required by different platforms:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Subscription Length</span>
                    <p className="text-gray-600">Most platforms bill monthly but may require a minimum commitment period.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Cancellation Policies</span>
                    <p className="text-gray-600">Varies by platform, with some allowing easy cancellation and others requiring notice periods.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Free Trials</span>
                    <p className="text-gray-600">Some platforms offer free or discounted trial periods to test the service.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Insurance Coverage</h3>
              <p className="text-gray-600 mb-4">
                Insurance options vary significantly between platforms:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">In-Network Providers</span>
                    <p className="text-gray-600">Platforms like Talkspace and Amwell work directly with certain insurance companies.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Out-of-Network Benefits</span>
                    <p className="text-gray-600">Some platforms provide superbills for reimbursement through out-of-network benefits.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">HSA/FSA Eligibility</span>
                    <p className="text-gray-600">Many platforms accept Health Savings Account or Flexible Spending Account payments.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Value Analysis */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Value Analysis: Cost vs. Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <DollarSign className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Best Overall Value</h3>
              <p className="text-gray-700 mb-3">
                <span className="font-bold">Calmerry</span> - $42-$68/week
              </p>
              <p className="text-gray-600 text-sm">
                Offers the best balance of affordability and service quality. Their entry-level plan is among the most affordable, while still providing access to licensed therapists and multiple communication options.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Percent className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Most Affordable</h3>
              <p className="text-gray-700 mb-3">
                <span className="font-bold">Online-Therapy.com</span> - $40-$88/week
              </p>
              <p className="text-gray-600 text-sm">
                Offers the lowest entry price point with their basic plan. While the basic plan doesn't include live sessions, it provides messaging, worksheets, and a structured CBT approach.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Shield className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Best for Insurance</h3>
              <p className="text-gray-700 mb-3">
                <span className="font-bold">Talkspace</span> - $69-$109/week
              </p>
              <p className="text-gray-600 text-sm">
                Partners with many employers and health plans. While their base price is higher than some competitors, insurance coverage can significantly reduce out-of-pocket costs for eligible users.
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Comparing to Traditional Therapy Costs</h3>
            <p className="text-gray-700 mb-4">
              Online therapy typically offers significant cost savings compared to traditional in-person therapy:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Average in-person therapy session: $100-$200 per session</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Online therapy subscription: $40-$90 per week for multiple touchpoints</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Additional value from messaging access between sessions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">No transportation costs or time spent traveling to appointments</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hidden Costs */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Hidden Costs to Consider</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Additional Fees</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Cancellation Fees</span>
                    <p className="text-gray-600">Some platforms charge for late cancellations or missed appointments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Extra Session Costs</span>
                    <p className="text-gray-600">Additional live sessions beyond your plan's allocation can be expensive.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Psychiatry Services</span>
                    <p className="text-gray-600">Medication management is typically priced separately and can be significantly more expensive.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Limitations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Response Time Limitations</span>
                    <p className="text-gray-600">Therapist response times vary, with some only responding during business hours or 1-2 times per day.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Session Length Restrictions</span>
                    <p className="text-gray-600">Live sessions are typically 30-45 minutes, which may be shorter than traditional therapy.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800">Auto-Renewal Policies</span>
                    <p className="text-gray-600">Many platforms auto-renew subscriptions, which can lead to unexpected charges if you forget to cancel.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Reviewed Section */}
        <div className="mt-8">
          <HowWeReviewed />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Find Your Best Value in Online Therapy</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Use our matching tools to find the perfect balance of affordability and quality for your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link} 
              to="/tools/matchers/budget-friendly-finder" 
              variant="light"
              size="lg"
            >
              Find Affordable Options
            </Button>
            <Button 
              as={Link} 
              to="/tools/matchers/insurance-coverage-checker" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Check Insurance Coverage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineTherapyPricingComparison;
