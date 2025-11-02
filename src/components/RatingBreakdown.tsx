import React from 'react';
import { Star } from 'lucide-react';

interface RatingBreakdownProps {
  category?: string;
  rating?: number;
  description?: string;
  overallRating?: number;
  categories?: {
    name: string;
    score: number;
    description?: string;
  }[];
  showDescription?: boolean;
}

const RatingBreakdown: React.FC<RatingBreakdownProps> = (props) => {
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

  // If the component is used with the old API (category, rating, description)
  if (props.category && props.rating) {
    return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-800">{props.category}</h3>
          <div className="flex items-center">
            <div className="mr-2">
              {renderStars(props.rating)}
            </div>
            <span className="text-gray-600">{props.rating}/5</span>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full" 
            style={{ width: `${(props.rating / 5) * 100}%` }}
          ></div>
        </div>
        
        {props.description && (
          <p className="text-sm text-gray-600">{props.description}</p>
        )}
      </div>
    );
  }

  // If the component is used with the new API (overallRating, categories)
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">Rating Breakdown</h3>
        {props.overallRating && (
          <div className="flex items-center">
            <div className="mr-2">
              {renderStars(props.overallRating)}
            </div>
            <span className="text-lg font-bold text-gray-700">{props.overallRating}/5</span>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        {props.categories && props.categories.map((category) => (
          <div key={category.name} className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-gray-700">{category.name}</span>
              <div className="flex items-center">
                <div className="mr-2">
                  {renderStars(category.score)}
                </div>
                <span className="text-gray-600">{category.score}/5</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                style={{ width: `${(category.score / 5) * 100}%` }}
              ></div>
            </div>
            
            {props.showDescription && category.description && (
              <p className="text-sm text-gray-600 mt-1">{category.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingBreakdown;
