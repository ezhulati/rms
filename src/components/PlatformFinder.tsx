import React, { useState, useEffect } from 'react';
import { ArrowRight, DollarSign, Brain, Shield, ChevronDown, ChevronUp, Check } from 'lucide-react';

// Define platform interface
interface Platform {
  id: number;
  name: string;
  slug: string;
  price: string;
  priceRange: [number, number];
  communication: string[];
  insurance: boolean;
  medication: boolean;
  rating: number;
  description: string;
  conditions?: string[];
  bestFor?: string[];
}

// Sample platform data
const platformsData: Platform[] = [
  {
    id: 1,
    name: 'BetterHelp',
    slug: 'betterhelp',
    price: '$60-$90/week',
    priceRange: [60, 90],
    communication: ['messaging', 'video', 'phone'],
    insurance: false,
    medication: false,
    rating: 4.8,
    description: 'The world\'s largest online therapy platform, offering messaging, phone, and video sessions on a subscription model.',
    conditions: ['Anxiety', 'Depression', 'Stress', 'Relationship Issues', 'Grief', 'Self-Esteem'],
    bestFor: ['General Mental Health', 'Convenience', 'Multiple Communication Options']
  },
  {
    id: 2,
    name: 'Talkspace',
    slug: 'talkspace',
    price: '$65-$99/week',
    priceRange: [65, 99],
    communication: ['messaging', 'video', 'phone'],
    insurance: true,
    medication: true,
    rating: 4.5,
    description: 'Online therapy and psychiatry via text, audio, and video sessions, with medication options and insurance coverage.',
    conditions: ['Anxiety', 'Depression', 'PTSD', 'OCD', 'Bipolar Disorder', 'Relationship Issues'],
    bestFor: ['Insurance Coverage', 'Medication Management', 'Specialized Therapy']
  },
  {
    id: 3,
    name: 'Cerebral',
    slug: 'cerebral',
    price: '$85-$325/month',
    priceRange: [21, 81],  // Converted to weekly for comparison
    communication: ['messaging', 'video', 'phone'],
    insurance: true,
    medication: true,
    rating: 4.0,
    description: 'Subscription-based therapy and medication management for anxiety, depression, ADHD, and insomnia.',
    conditions: ['Anxiety', 'Depression', 'ADHD', 'Insomnia', 'Bipolar Disorder'],
    bestFor: ['Medication Management', 'Insurance Coverage', 'Comprehensive Care']
  },
  {
    id: 4,
    name: 'Calmerry',
    slug: 'calmerry',
    price: '$42-$68/week',
    priceRange: [42, 68],
    communication: ['messaging', 'video'],
    insurance: false,
    medication: false,
    rating: 4.0,
    description: 'Affordable online therapy platform offering flexible text and video-based therapy sessions.',
    conditions: ['Anxiety', 'Depression', 'Stress', 'Relationship Issues', 'Grief'],
    bestFor: ['Budget-Friendly', 'Flexible Plans', 'Fast Matching']
  },
  {
    id: 5,
    name: 'Online-Therapy.com',
    slug: 'online-therapy-com',
    price: '$40-$88/week',
    priceRange: [40, 88],
    communication: ['messaging', 'video'],
    insurance: false,
    medication: false,
    rating: 4.0,
    description: 'Specializes in CBT-based therapy with structured programs, including worksheets and yoga resources.',
    conditions: ['Anxiety', 'Depression', 'Stress', 'Addiction', 'Anger'],
    bestFor: ['CBT Therapy', 'Structured Approach', 'Self-Help Resources']
  },
  {
    id: 6,
    name: 'ReGain',
    slug: 'regain',
    price: '$60-$90/week',
    priceRange: [60, 90],
    communication: ['messaging', 'video', 'phone'],
    insurance: false,
    medication: false,
    rating: 4.5,
    description: 'Specialized couples therapy platform with joint sessions and relationship-focused therapists.',
    conditions: ['Relationship Issues', 'Marriage Problems', 'Divorce', 'Parenting Conflicts'],
    bestFor: ['Couples Therapy', 'Relationship Issues', 'Marriage Counseling']
  },
  {
    id: 7,
    name: 'Brightside',
    slug: 'brightside',
    price: '$95-$349/month',
    priceRange: [24, 87],  // Converted to weekly for comparison
    communication: ['messaging', 'video'],
    insurance: true,
    medication: true,
    rating: 4.2,
    description: 'Data-driven approach to therapy and medication management for depression and anxiety.',
    conditions: ['Depression', 'Anxiety'],
    bestFor: ['Depression Treatment', 'Anxiety Treatment', 'Medication Management']
  },
  {
    id: 8,
    name: 'Amwell',
    slug: 'amwell',
    price: '$109-$129/session',
    priceRange: [109, 129],  // Per session pricing
    communication: ['video'],
    insurance: true,
    medication: true,
    rating: 4.0,
    description: 'Telehealth platform offering therapy, psychiatry, and medical care with insurance coverage.',
    conditions: ['Anxiety', 'Depression', 'PTSD', 'Bipolar Disorder', 'Eating Disorders'],
    bestFor: ['Insurance Coverage', 'Psychiatry Services', 'Medical Integration']
  },
  {
    id: 9,
    name: 'Teen Counseling',
    slug: 'teen-counseling',
    price: '$60-$90/week',
    priceRange: [60, 90],
    communication: ['messaging', 'video', 'phone'],
    insurance: false,
    medication: false,
    rating: 4.5,
    description: 'Specialized online therapy platform for teens aged 13-19 with parent involvement options.',
    conditions: ['Anxiety', 'Depression', 'Bullying', 'Self-Esteem', 'Academic Stress'],
    bestFor: ['Teen Therapy', 'Adolescent Issues', 'School Problems']
  },
  {
    id: 10,
    name: 'Pride Counseling',
    slug: 'pride-counseling',
    price: '$60-$90/week',
    priceRange: [60, 90],
    communication: ['messaging', 'video', 'phone'],
    insurance: false,
    medication: false,
    rating: 4.7,
    description: 'Specialized therapy platform for the LGBTQ+ community with LGBTQ-affirming therapists.',
    conditions: ['Anxiety', 'Depression', 'Coming Out', 'Gender Identity', 'Relationship Issues'],
    bestFor: ['LGBTQ+ Community', 'Gender Identity Issues', 'Coming Out Support']
  }
];

const PlatformFinder: React.FC = () => {
  // State for filters
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [conditionFilter, setConditionFilter] = useState<string>('all');
  const [insuranceFilter, setInsuranceFilter] = useState<boolean | null>(null);
  
  // State for filtered platforms
  const [filteredPlatforms, setFilteredPlatforms] = useState<Platform[]>(platformsData);
  
  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    condition: true,
    insurance: true
  });
  
  // Filter platforms when filters change
  useEffect(() => {
    let result = [...platformsData];
    
    // Filter by price range
    if (priceFilter !== 'all') {
      if (priceFilter === 'budget') {
        result = result.filter(platform => platform.priceRange[0] < 50);
      } else if (priceFilter === 'mid') {
        result = result.filter(platform => platform.priceRange[0] >= 50 && platform.priceRange[1] <= 80);
      } else if (priceFilter === 'premium') {
        result = result.filter(platform => platform.priceRange[1] > 80);
      }
    }
    
    // Filter by condition
    if (conditionFilter !== 'all') {
      result = result.filter(platform => 
        platform.conditions?.includes(conditionFilter)
      );
    }
    
    // Filter by insurance
    if (insuranceFilter !== null) {
      result = result.filter(platform => platform.insurance === insuranceFilter);
    }
    
    setFilteredPlatforms(result);
  }, [priceFilter, conditionFilter, insuranceFilter]);
  
  // Toggle section expansion
  const toggleSection = (section: 'price' | 'condition' | 'insurance') => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 bg-indigo-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Find the Right Platform for Your Needs</h2>
        <p className="text-gray-600">
          Filter options to discover the perfect online therapy platform based on your preferences and requirements.
        </p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Price Range Filter */}
          <div className="border rounded-lg overflow-hidden">
            <div 
              className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('price')}
            >
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="font-bold text-gray-800">By Price Range</h3>
              </div>
              {expandedSections.price ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </div>
            
            {expandedSections.price && (
              <div className="p-4">
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="price" 
                      checked={priceFilter === 'all'} 
                      onChange={() => setPriceFilter('all')}
                      className="form-radio text-indigo-600"
                    />
                    <span>All Price Ranges</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="price" 
                      checked={priceFilter === 'budget'} 
                      onChange={() => setPriceFilter('budget')}
                      className="form-radio text-indigo-600"
                    />
                    <span>Budget-Friendly Options (Under $50/week)</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="price" 
                      checked={priceFilter === 'mid'} 
                      onChange={() => setPriceFilter('mid')}
                      className="form-radio text-indigo-600"
                    />
                    <span>Mid-Range Options ($50-$80/week)</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="price" 
                      checked={priceFilter === 'premium'} 
                      onChange={() => setPriceFilter('premium')}
                      className="form-radio text-indigo-600"
                    />
                    <span>Premium Services ($80+/week)</span>
                  </label>
                </div>
              </div>
            )}
          </div>
          
          {/* Condition Filter */}
          <div className="border rounded-lg overflow-hidden">
            <div 
              className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('condition')}
            >
              <div className="flex items-center">
                <Brain className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="font-bold text-gray-800">By Condition</h3>
              </div>
              {expandedSections.condition ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </div>
            
            {expandedSections.condition && (
              <div className="p-4">
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="condition" 
                      checked={conditionFilter === 'all'} 
                      onChange={() => setConditionFilter('all')}
                      className="form-radio text-indigo-600"
                    />
                    <span>All Conditions</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="condition" 
                      checked={conditionFilter === 'Anxiety'} 
                      onChange={() => setConditionFilter('Anxiety')}
                      className="form-radio text-indigo-600"
                    />
                    <span>Best for Anxiety</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="condition" 
                      checked={conditionFilter === 'Depression'} 
                      onChange={() => setConditionFilter('Depression')}
                      className="form-radio text-indigo-600"
                    />
                    <span>Best for Depression</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="condition" 
                      checked={conditionFilter === 'PTSD'} 
                      onChange={() => setConditionFilter('PTSD')}
                      className="form-radio text-indigo-600"
                    />
                    <span>Best for PTSD</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="condition" 
                      checked={conditionFilter === 'Relationship Issues'} 
                      onChange={() => setConditionFilter('Relationship Issues')}
                      className="form-radio text-indigo-600"
                    />
                    <span>Best for Relationship Issues</span>
                  </label>
                </div>
              </div>
            )}
          </div>
          
          {/* Insurance Filter */}
          <div className="border rounded-lg overflow-hidden">
            <div 
              className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('insurance')}
            >
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="font-bold text-gray-800">Insurance Coverage</h3>
              </div>
              {expandedSections.insurance ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </div>
            
            {expandedSections.insurance && (
              <div className="p-4">
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="insurance" 
                      checked={insuranceFilter === null} 
                      onChange={() => setInsuranceFilter(null)}
                      className="form-radio text-indigo-600"
                    />
                    <span>All Options</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="insurance" 
                      checked={insuranceFilter === true} 
                      onChange={() => setInsuranceFilter(true)}
                      className="form-radio text-indigo-600"
                    />
                    <span>Accepts Insurance</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="insurance" 
                      checked={insuranceFilter === false} 
                      onChange={() => setInsuranceFilter(false)}
                      className="form-radio text-indigo-600"
                    />
                    <span>No Insurance Required</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mt-6 mb-4">
          <p className="text-gray-600">
            <span className="font-bold">{filteredPlatforms.length}</span> platforms match your criteria
          </p>
        </div>
        
        {/* Results */}
        <div className="space-y-6">
          {filteredPlatforms.length > 0 ? (
            filteredPlatforms.map(platform => (
              <div key={platform.id} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{platform.name}</h3>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Price:</strong> {platform.price}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <strong className="mr-2">Insurance:</strong>
                      {platform.insurance ? (
                        <span className="text-green-600 flex items-center">
                          <Check className="h-4 w-4 mr-1" /> Accepted
                        </span>
                      ) : (
                        <span className="text-red-600">Not Accepted</span>
                      )}
                    </div>
                    <a href={`/reviews/platforms/${platform.slug}-review`} className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm">
                      Read Full Review <ArrowRight className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                  
                  <div className="md:w-3/4 md:pl-6">
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Best For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.bestFor?.map((item, index) => (
                          <span key={index} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Treats:</h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.conditions?.map((condition, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {condition}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">No platforms match your current filters.</p>
              <button 
                onClick={() => {
                  setPriceFilter('all');
                  setConditionFilter('all');
                  setInsuranceFilter(null);
                }}
                className="text-indigo-600 font-medium hover:text-indigo-800"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlatformFinder;
