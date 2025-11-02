import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, MessageSquare, Video, Phone, Heart, Users, DollarSign } from 'lucide-react';
import Button from '../../../components/Button';
import RatingBreakdown from '../../../components/RatingBreakdown';
import MetaTags from '../../../components/MetaTags';

const ReGainReview = () => {
  // Platform details
  const platform = {
    name: 'ReGain',
    tagline: 'Specialized platform for couples therapy and relationship counseling',
    website: 'https://www.regain.us',
    logo: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    pricing: {
      range: '$60-$90 per week',
      billingCycle: 'Monthly',
      financialAid: 'Available for those who qualify',
      insuranceCoverage: 'Not accepted',
    },
    ratings: {
      overall: 4.5,
      therapistQuality: 4.6,
      userInterface: 4.3,
      customerService: 4.2,
      valueForMoney: 4.4,
      privacySecurity: 4.7,
    },
    features: [
      { name: 'Joint therapy sessions', available: true },
      { name: 'Individual therapy sessions', available: true },
      { name: 'Messaging', available: true },
      { name: 'Live chat', available: true },
      { name: 'Phone sessions', available: true },
      { name: 'Video sessions', available: true },
      { name: 'Worksheets & exercises', available: true },
      { name: 'Mobile app', available: true },
      { name: 'Medication management', available: false },
      { name: 'Insurance coverage', available: false },
    ],
    pros: [
      'Specialized in couples and relationship therapy',
      'Option for joint or individual sessions',
      'Relationship-focused worksheets and resources',
      'Licensed and experienced relationship counselors',
      'Multiple communication methods',
      'Dedicated mobile app',
      'Financial aid available',
    ],
    cons: [
      'No insurance coverage',
      'No medication management',
      'Only focused on relationship issues',
      'Both partners must use the same device for joint sessions',
      'Limited therapist selection compared to general platforms',
      'No free trial period',
    ],
    bestFor: [
      'Couples seeking relationship counseling',
      'Partners dealing with communication issues',
      'Individuals with relationship concerns',
      'Those preparing for marriage or commitment',
      'Couples navigating life transitions',
    ],
    notIdealFor: [
      'Those seeking insurance coverage',
      'Individuals needing medication management',
      'People with severe mental health conditions',
      'Those seeking in-person therapy',
      'Couples without reliable internet access',
    ],
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="h-4 w-4 fill-current" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<Star key={i} className="h-4 w-4 fill-current" />);
      } else {
        stars.push(<Star key={i} className="h-4 w-4" strokeWidth={1} />);
      }
    }
    return <div className="flex text-yellow-400">{stars}</div>;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <MetaTags 
        title="ReGain Review | Online Couples Therapy Platform | RealMindSolutions"
        description="Comprehensive review of ReGain, an online therapy platform specializing in couples counseling and relationship therapy. Learn about pricing, features, pros and cons."
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
              <div className="md:mr-8 mb-4 md:mb-0">
                <img 
                  src={platform.logo} 
                  alt={`${platform.name} logo`} 
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{platform.name} Review</h1>
                <p className="text-xl text-gray-600 mb-4">{platform.tagline}</p>
                <div className="flex items-center mb-4">
                  <div className="mr-2">
                    {renderStars(platform.ratings.overall)}
                  </div>
                  <span className="text-gray-700 font-semibold">{platform.ratings.overall}/5</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-600">Our Rating</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    as="a"
                    href={platform.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                  >
                    Visit Website
                  </Button>
                  <Button
                    as={Link}
                    to="/tools/matchers/therapy-platform-matcher"
                    variant="outline"
                    size="md"
                  >
                    Find Your Match
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Overview Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>
              <p className="text-gray-600 mb-4">
                ReGain is an online therapy platform that specializes in relationship counseling and couples therapy. 
                Unlike general therapy platforms, ReGain focuses exclusively on helping couples and individuals with 
                relationship issues. The platform connects users with licensed therapists who have expertise in 
                marriage and family therapy, providing a range of communication options including messaging, live chat, 
                phone, and video sessions.
              </p>
              <p className="text-gray-600 mb-4">
                What sets ReGain apart is its ability to include both partners in the therapy process, allowing 
                couples to participate in joint sessions. The platform also offers relationship-focused resources 
                and worksheets to help couples work through issues between sessions. While ReGain doesn't accept 
                insurance or offer medication management, it provides financial aid options to make therapy more 
                accessible.
              </p>
              <p className="text-gray-600">
                ReGain is best suited for couples experiencing communication difficulties, navigating life transitions, 
                or seeking to strengthen their relationship. It's also valuable for individuals dealing with relationship 
                concerns who want guidance from therapists specialized in this area.
              </p>
            </div>

            {/* Pros and Cons Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Pros & Cons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" /> Pros
                  </h3>
                  <ul className="space-y-3">
                    {platform.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                    <XCircle className="h-6 w-6 mr-2" /> Cons
                  </h3>
                  <ul className="space-y-3">
                    {platform.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Features Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {platform.features.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    {feature.available ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    )}
                    <span className={`${feature.available ? 'text-gray-700' : 'text-gray-500'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication Options */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Communication Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <MessageSquare className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-1">Messaging</h3>
                  <p className="text-sm text-gray-600">Unlimited text messaging with your therapist</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <MessageSquare className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-1">Live Chat</h3>
                  <p className="text-sm text-gray-600">Real-time text conversations with your therapist</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <Phone className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-sm text-gray-600">Audio sessions with your therapist</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <Video className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-1">Video</h3>
                  <p className="text-sm text-gray-600">Face-to-face video sessions with your therapist</p>
                </div>
              </div>
            </div>

            {/* Therapist Quality */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Therapist Quality</h2>
              <p className="text-gray-600 mb-4">
                ReGain works exclusively with licensed mental health professionals who specialize in relationship 
                counseling. All therapists on the platform are required to have:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">A master's or doctoral degree in their field</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Licensing as a psychologist, marriage and family therapist, clinical social worker, or professional counselor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">At least 3 years and 1,000 hours of clinical experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Specialized training or experience in relationship counseling</span>
                </li>
              </ul>
              <p className="text-gray-600">
                The platform uses a matching algorithm to pair users with appropriate therapists based on their 
                specific relationship concerns and preferences. While users can request a new therapist if they're 
                not satisfied with their match, the selection is more limited than on general therapy platforms due 
                to ReGain's specialization in relationship counseling.
              </p>
            </div>

            {/* User Experience */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">User Experience</h2>
              <p className="text-gray-600 mb-4">
                ReGain offers a straightforward and user-friendly experience designed specifically for couples therapy:
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Sign-up Process</h3>
              <p className="text-gray-600 mb-4">
                The sign-up process begins with a questionnaire about your relationship status, concerns, and therapy 
                goals. You can sign up individually or invite your partner to join. If you sign up as a couple, both 
                partners will have access to the same therapy room and conversations with the therapist.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Platform Interface</h3>
              <p className="text-gray-600 mb-4">
                ReGain's interface is clean and intuitive, with a central messaging room where both partners and the 
                therapist can communicate. The platform is accessible via web browser or mobile app, making it convenient 
                to engage in therapy from anywhere. Users can easily schedule live sessions, access relationship resources, 
                and review previous conversations with their therapist.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Privacy Features</h3>
              <p className="text-gray-600">
                ReGain takes privacy seriously, with end-to-end encryption for all communications. The platform also 
                offers a "private mode" where individuals can communicate with the therapist without their partner seeing 
                the messages, which can be helpful for discussing sensitive topics. However, the therapist maintains a 
                policy of transparency and will not keep secrets that are relevant to the couple's therapy progress.
              </p>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div>
            {/* Pricing Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Pricing</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price Range:</span>
                  <span className="font-semibold text-gray-800">{platform.pricing.range}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Billing Cycle:</span>
                  <span className="font-semibold text-gray-800">{platform.pricing.billingCycle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Financial Aid:</span>
                  <span className="font-semibold text-gray-800">{platform.pricing.financialAid}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Insurance:</span>
                  <span className="font-semibold text-gray-800">{platform.pricing.insuranceCoverage}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                ReGain charges a flat weekly fee that is billed monthly. The exact price depends on your location, 
                therapist availability, and preferences. Financial aid is available based on income verification.
              </p>
              <Button
                as="a"
                href={platform.website}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                Check Current Pricing
              </Button>
            </div>

            {/* Ratings Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Our Ratings</h2>
              <div className="space-y-4">
                {/* Rating breakdown */}
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Overall</span>
                  <div className="flex items-center">
                    <div className="mr-2">
                      {renderStars(platform.ratings.overall)}
                    </div>
                    <span className="text-gray-700">{platform.ratings.overall}/5</span>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Therapist Quality</span>
                  <div className="flex items-center">
                    <div className="mr-2">
                      {renderStars(platform.ratings.therapistQuality)}
                    </div>
                    <span className="text-gray-700">{platform.ratings.therapistQuality}/5</span>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">User Interface</span>
                  <div className="flex items-center">
                    <div className="mr-2">
                      {renderStars(platform.ratings.userInterface)}
                    </div>
                    <span className="text-gray-700">{platform.ratings.userInterface}/5</span>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Customer Service</span>
                  <div className="flex items-center">
                    <div className="mr-2">
                      {renderStars(platform.ratings.customerService)}
                    </div>
                    <span className="text-gray-700">{platform.ratings.customerService}/5</span>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Value for Money</span>
                  <div className="flex items-center">
                    <div className="mr-2">
                      {renderStars(platform.ratings.valueForMoney)}
                    </div>
                    <span className="text-gray-700">{platform.ratings.valueForMoney}/5</span>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Privacy & Security</span>
                  <div className="flex items-center">
                    <div className="mr-2">
                      {renderStars(platform.ratings.privacySecurity)}
                    </div>
                    <span className="text-gray-700">{platform.ratings.privacySecurity}/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Best For Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Best For</h2>
              <ul className="space-y-2">
                {platform.bestFor.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Ideal For Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Not Ideal For</h2>
              <ul className="space-y-2">
                {platform.notIdealFor.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alternatives Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Alternatives</h2>
              <ul className="space-y-4">
                <li>
                  <Link to="/reviews/platforms/talkspace" className="text-indigo-600 font-semibold hover:text-indigo-800">Talkspace</Link>
                  <p className="text-sm text-gray-600 mt-1">Offers couples therapy with insurance coverage options</p>
                </li>
                <li>
                  <Link to="/reviews/platforms/betterhelp" className="text-indigo-600 font-semibold hover:text-indigo-800">BetterHelp</Link>
                  <p className="text-sm text-gray-600 mt-1">General therapy platform with some relationship counselors</p>
                </li>
                <li>
                  <Link to="/reviews/platforms/online-therapy" className="text-indigo-600 font-semibold hover:text-indigo-800">Online-Therapy.com</Link>
                  <p className="text-sm text-gray-600 mt-1">Offers CBT-based therapy with worksheets and resources</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
          <p className="text-gray-600 mb-6">
            ReGain stands out as a specialized platform for couples and relationship therapy, offering a focused 
            approach to addressing relationship issues. With licensed therapists experienced in marriage and family 
            therapy, multiple communication options, and relationship-specific resources, it provides comprehensive 
            support for couples seeking to improve their relationship.
          </p>
          <p className="text-gray-600 mb-6">
            While the platform has limitations, such as no insurance coverage and a focus solely on relationship 
            issues, its specialization is also its strength. For couples committed to working on their relationship 
            or individuals seeking guidance on relationship concerns, ReGain offers a convenient, accessible, and 
            specialized therapy option.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              as="a"
              href={platform.website}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Visit ReGain
            </Button>
            <Button
              as={Link}
              to="/tools/matchers/therapy-platform-matcher"
              variant="outline"
              size="lg"
            >
              Find Your Perfect Match
            </Button>
          </div>
        </div>

        {/* Related Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <Link to="/reviews/specialty/couples-therapy" className="block hover:opacity-90 transition-opacity">
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Best Online Couples Therapy Options</h3>
                  <p className="text-sm text-gray-600">Compare the top platforms for couples therapy and relationship counseling.</p>
                </div>
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <Link to="/comparisons/betterhelp-vs-talkspace" className="block hover:opacity-90 transition-opacity">
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">BetterHelp vs Talkspace</h3>
                  <p className="text-sm text-gray-600">A detailed comparison of two leading online therapy platforms.</p>
                </div>
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <Link to="/learn/fundamentals/therapy-types-explained" className="block hover:opacity-90 transition-opacity">
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Types of Relationship Therapy</h3>
                  <p className="text-sm text-gray-600">Learn about different approaches to couples and relationship therapy.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReGainReview;
