import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import type { NavCategory } from '../data/navigationData';

interface MegaMenuDropdownProps {
  category: NavCategory;
  isActive?: boolean;
}

const MegaMenuDropdown: React.FC<MegaMenuDropdownProps> = ({ category, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = category.icon;

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown Trigger */}
      <button
        className={`flex items-center gap-1.5 text-[15px] font-nav font-semibold transition-all duration-200 py-2 ${
          isActive
            ? 'text-brand-primary-600'
            : 'text-neutral-700 hover:text-brand-primary-600'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Icon className="h-4 w-4" strokeWidth={2.5} />
        <span>{category.title}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu with Backdrop */}
      {isOpen && (
        <>
          {/* Backdrop blur overlay */}
          <div
            className="fixed inset-0 bg-neutral-900/10 backdrop-blur-[2px] z-40"
            style={{ top: '64px' }}
          />

          {/* Mega Menu Content */}
          <div className="absolute left-0 top-full pt-3 z-50">
            <div
              className="bg-white rounded-2xl shadow-xl border border-neutral-200/80 p-2 min-w-[320px] animate-fade-in-down"
              style={{
                animation: 'fadeInDown 0.25s ease-out',
              }}
            >
              {/* Menu Items Grid */}
              <div className="space-y-1">
                {category.items.map((item, index) => {
                  const ItemIcon = item.icon;

                  return (
                    <Link
                      key={index}
                      to={item.href}
                      className="group/item flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-brand-primary-50 transition-all duration-200 hover:translate-x-0.5"
                      style={{
                        animation: `fadeInStagger 0.3s ease-out ${index * 0.05}s both`,
                      }}
                    >
                      {/* Icon */}
                      {ItemIcon && (
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-9 h-9 rounded-lg bg-brand-primary-100 flex items-center justify-center group-hover/item:bg-brand-primary-200 transition-colors duration-200">
                            <ItemIcon className="h-4 w-4 text-brand-primary-600" strokeWidth={2.5} />
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-nav font-medium text-[14px] text-neutral-900 group-hover/item:text-brand-primary-600 transition-colors duration-200">
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className="px-2 py-0.5 text-[10px] font-nav font-semibold tracking-wide uppercase bg-brand-accent-100 text-brand-accent-700 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="font-accent italic text-[13px] text-neutral-500 leading-snug">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Add keyframe animations
const styles = document.createElement('style');
styles.textContent = `
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInStagger {
    from {
      opacity: 0;
      transform: translateX(-4px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
document.head.appendChild(styles);

export default MegaMenuDropdown;
