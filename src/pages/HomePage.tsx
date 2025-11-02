import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, CheckCircle, Star, Search, Users, Heart, DollarSign } from 'lucide-react';
import Button from '../components/Button';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="sb-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Mental Health Solution</h1>
              <p className="text-xl mb-8">
                Compare, review, and discover the best online therapy platforms tailored to your unique needs. Expert guides and tools to support your mental health journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="light" size="lg" as={Link} to="/compare">
                  Compare Platforms
                </Button>
                <Button variant="outline" size="lg" as={Link} to="/tools/assessments/mental-health-assessment">
                  Take the Assessment
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Mental Health Solutions" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="sb-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How We Help You Find the Right Solution</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide comprehensive resources to help you navigate the world of online therapy and mental health services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Compare Options</h3>
              <p className="text-gray-600">
                Side-by-side comparisons of leading online therapy platforms to help you make an informed decision.
              </p>
              <Link to="/compare" className="inline-block mt-4 text-indigo-600 hover:text-indigo-800">
                Compare platforms →
              </Link>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Reviews</h3>
              <p className="text-gray-600">
                In-depth, unbiased reviews of online therapy platforms based on real user experiences and expert analysis.
              </p>
              <Link to="/reviews" className="inline-block mt-4 text-indigo-600 hover:text-indigo-800">
                Read reviews →
              </Link>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Tools</h3>
              <p className="text-gray-600">
                Interactive assessments and matching tools to help you find the right therapy solution for your specific needs.
              </p>
              <Link to="/tools" className="inline-block mt-4 text-indigo-600 hover:text-indigo-800">
                Try our tools →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="py-16 bg-gray-50">
        <div className="sb-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Compare Top Online Therapy Platforms</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Make an informed decision with our detailed side-by-side comparisons.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">BetterHelp vs Talkspace</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">BetterHelp</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>$60-$90 per week</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Unlimited messaging</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Weekly live sessions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Financial aid available</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Talkspace</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>$65-$99 per week</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Unlimited messaging</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Live sessions (plan dependent)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Insurance coverage available</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Our Verdict</h4>
                  <p className="text-gray-600 mb-4">
                    BetterHelp is better for affordability and financial aid, while Talkspace excels with insurance coverage and medication management options.
                  </p>
                  <Link to="/compare/platforms/betterhelp-vs-talkspace" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    Read full comparison <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="primary" icon={ArrowRight} as={Link} to="/compare">
              View all comparisons
            </Button>
          </div>
        </div>
      </section>

      {/* Best For You Section */}
      <section className="py-16 bg-white">
        <div className="sb-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Path to Better Mental Health</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We've curated the perfect therapy options for every situation—find what works specifically for you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1 */}
            <div className="sb-card sb-card-hover">
              <div className="p-6">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Therapy for Your Condition</h3>
                <p className="text-gray-600 text-sm mb-4">Find platforms specializing in your specific mental health needs</p>
                <ul className="space-y-2 mb-4">
                  <li>
                    <Link to="/best/conditions/best-for-anxiety" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      <span>Anxiety solutions</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/best/conditions/best-for-depression" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      <span>Depression support</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/best/conditions/best-for-ptsd" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      <span>PTSD treatment</span>
                    </Link>
                  </li>
                </ul>
                <Link to="/best/conditions" className="text-emerald-500 font-medium hover:text-emerald-600 flex items-center">
                  See all conditions <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Category 2 */}
            <div className="sb-card sb-card-hover">
              <div className="p-6">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Therapy for Your Identity</h3>
                <p className="text-gray-600 text-sm mb-4">Specialized support for your unique background and needs</p>
                <ul className="space-y-2 mb-4">
                  <li>
                    <Link to="/best/audiences/best-for-teens" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      <span>Teen-focused therapy</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/best/audiences/best-for-couples" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      <span>Relationship healing</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/best/audiences/best-for-lgbtq" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      <span>LGBTQ+ affirming care</span>
                    </Link>
                  </li>
                </ul>
                <Link to="/best/audiences" className="text-emerald-500 font-medium hover:text-emerald-600 flex items-center">
                  See all audiences <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Category 3 */}
            <div className="sb-card sb-card-hover">
              <div className="p-6">
                <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Top-Rated Platforms</h3>
                <p className="text-gray-600 text-sm mb-4">Our expert picks for the most effective therapy services</p>
                <ul className="space-y-2 mb-4">
                  <li>
                    <Link to="/best/platforms/best-online-therapy-platforms" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      <span>Overall excellence</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/best/platforms/best-text-therapy-services" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      <span>Text-based therapy</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/best/platforms/best-video-therapy-platforms" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      <span>Video sessions</span>
                    </Link>
                  </li>
                </ul>
                <Link to="/best/platforms" className="text-emerald-500 font-medium hover:text-emerald-600 flex items-center">
                  See all platforms <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Category 4 */}
            <div className="sb-card sb-card-hover">
              <div className="p-6">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Therapy That Fits Your Life</h3>
                <p className="text-gray-600 text-sm mb-4">Solutions that match your practical requirements</p>
                <ul className="space-y-2 mb-4">
                  <li>
                    <Link to="/best/specific-needs/best-affordable-therapy" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      <span>Budget-friendly options</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/best/specific-needs/best-insurance-coverage" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      <span>Insurance accepted</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/best/specific-needs/best-medication-management" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      <span>Medication services</span>
                    </Link>
                  </li>
                </ul>
                <Link to="/best/specific-needs" className="text-emerald-500 font-medium hover:text-emerald-600 flex items-center">
                  See all specific needs <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button variant="primary" icon={ArrowRight} as={Link} to="/best">
              Find your perfect match
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="sb-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Interactive Mental Health Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Free tools to help you assess your needs and find the right mental health solution.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tool 1 */}
            <div className="sb-card sb-card-hover">
              <div className="p-6">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Mental Health Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Take our comprehensive assessment to better understand your mental health needs and get personalized recommendations.
                </p>
                <Button variant="primary" as={Link} to="/tools/assessments/mental-health-assessment">
                  Take the assessment
                </Button>
              </div>
            </div>
            
            {/* Tool 2 */}
            <div className="sb-card sb-card-hover">
              <div className="p-6">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Therapy Platform Matcher</h3>
                <p className="text-gray-600 mb-4">
                  Answer a few questions to find the perfect therapy platform based on your preferences, needs, and budget.
                </p>
                <Button variant="primary" as={Link} to="/tools/matchers/therapy-platform-matcher">
                  Find your match
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" icon={ArrowRight} as={Link} to="/tools">
              Explore all tools
            </Button>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section className="py-16 bg-white">
        <div className="sb-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Learn About Mental Health</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Educational resources to help you understand mental health concepts, treatments, and best practices.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Learn Card 1 */}
            <div className="sb-card sb-card-hover">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Therapy Types" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Therapy Types Explained</h3>
                <p className="text-gray-600 mb-4">Learn about different therapy approaches including CBT, DBT, psychodynamic therapy, and more.</p>
                <Link to="/learn/fundamentals/therapy-types-explained" className="text-emerald-500 font-medium flex items-center hover:text-emerald-600">
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Learn Card 2 */}
            <div className="sb-card sb-card-hover">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Mental Health Statistics" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Mental Health Statistics</h3>
                <p className="text-gray-600 mb-4">Explore current data and trends in mental health, including prevalence, treatment access, and outcomes.</p>
                <Link to="/learn/statistics/mental-health-statistics" className="text-emerald-500 font-medium flex items-center hover:text-emerald-600">
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Learn Card 3 */}
            <div className="sb-card sb-card-hover">
              <img 
                src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Online Therapy Guide" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Online Therapy Guide</h3>
                <p className="text-gray-600 mb-4">Everything you need to know about online therapy, from how it works to what to expect in your first session.</p>
                <Link to="/guides/selection/choosing-online-therapist" className="text-emerald-500 font-medium flex items-center hover:text-emerald-600">
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button variant="primary" icon={ArrowRight} as={Link} to="/learn">
              Explore all resources
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sb-gradient-primary text-white">
        <div className="sb-container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Mental Health Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Take the first step toward better mental health by exploring our comprehensive resources and finding the right platform for your needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="light" size="lg" as={Link} to="/tools/assessments/mental-health-assessment">
              Take the Assessment
            </Button>
            <Button variant="outline" size="lg" as={Link} to="/compare/platforms">
              Compare Platforms
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="sb-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest from Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Stay informed with our latest articles, news, and insights on mental health topics.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="sb-card sb-card-hover">
              <img 
                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Latest Research" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">June 15, 2025 • <span className="sb-badge sb-badge-primary">Research</span></div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Latest Research on Online Therapy Effectiveness</h3>
                <p className="text-gray-600 mb-4">New studies show promising results for online therapy approaches across various mental health conditions.</p>
                <Link to="/blog/news/latest-therapy-research" className="text-emerald-500 font-medium flex items-center hover:text-emerald-600">
                  Read article <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div className="sb-card sb-card-hover">
              <img 
                src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Therapist Interview" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">June 10, 2025 • <span className="sb-badge sb-badge-primary">Interviews</span></div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">A Day in the Life of an Online Therapist</h3>
                <p className="text-gray-600 mb-4">We interviewed several online therapists to understand their experiences, challenges, and rewards.</p>
                <Link to="/blog/stories/therapist-interviews" className="text-emerald-500 font-medium flex items-center hover:text-emerald-600">
                  Read article <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Blog Post 3 */}
            <div className="sb-card sb-card-hover">
              <img 
                src="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Self-Care Tips" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">June 5, 2025 • <span className="sb-badge sb-badge-primary">Self-Care</span></div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">5 Effective Self-Care Practices for Mental Wellness</h3>
                <p className="text-gray-600 mb-4">Simple but powerful self-care strategies you can incorporate into your daily routine for better mental health.</p>
                <Link to="/blog/stories/self-care-practices" className="text-emerald-500 font-medium flex items-center hover:text-emerald-600">
                  Read article <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button variant="primary" icon={ArrowRight} as={Link} to="/blog">
              View all articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;