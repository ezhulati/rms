import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import type { NavCategory } from '../data/navigationData';

interface AccordionSectionProps {
  category: NavCategory;
  isExpanded: boolean;
  onToggle: () => void;
  onItemClick: () => void;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  category,
  isExpanded,
  onToggle,
  onItemClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const Icon = category.icon;

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded]);

  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-neutral-50 transition-colors duration-200"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-primary-100 flex items-center justify-center">
            <Icon className="h-5 w-5 text-brand-primary-600" strokeWidth={2.5} />
          </div>
          <span className="font-nav font-semibold text-[16px] text-neutral-900">
            {category.title}
          </span>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-neutral-500 transition-transform duration-250 ease-in-out ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Accordion Content */}
      <div
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.25s ease-in-out',
        }}
      >
        <div ref={contentRef} className="pb-2">
          {category.items.map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <Link
                key={index}
                to={item.href}
                onClick={onItemClick}
                className="flex items-center gap-3 px-4 py-3 ml-4 mr-2 rounded-lg hover:bg-brand-primary-50 transition-all duration-200 group"
              >
                {/* Icon */}
                {ItemIcon && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-md bg-white border border-neutral-200 flex items-center justify-center group-hover:border-brand-primary-300 group-hover:bg-brand-primary-50 transition-all duration-200">
                      <ItemIcon className="h-4 w-4 text-neutral-600 group-hover:text-brand-primary-600" strokeWidth={2} />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-nav font-medium text-[14px] text-neutral-700 group-hover:text-brand-primary-600 transition-colors duration-200">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[9px] font-nav font-semibold tracking-wide uppercase bg-brand-accent-100 text-brand-accent-700 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
