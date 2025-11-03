import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link 
      to={to}
      className={`text-gray-700 hover:text-emerald-500 font-medium transition-colors duration-200 ${
        isActive(to) ? 'text-emerald-500' : ''
      }`}
    >
      {children}
    </Link>
  );

  const DropdownMenu = ({ 
    title, 
    items 
  }: { 
    title: string; 
    items: { label: string; href: string }[] 
  }) => (
    <div className="relative group">
      <button className="flex items-center gap-1 text-gray-700 hover:text-emerald-500 font-medium transition-colors duration-200">
        {title}
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[240px] z-50">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-500 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const compareItems = [
    { label: 'Platform Comparisons', href: '/compare/platforms' },
    { label: 'Therapy Modalities', href: '/compare/modalities' },
    { label: 'Therapy Approaches', href: '/compare/modalities/therapy-approaches' },
    { label: 'Insurance Coverage', href: '/compare/roundups/insurance-friendly-platforms' },
    { label: 'Therapy Alternatives', href: '/compare/alternatives' }
  ];

  const reviewItems = [
    { label: 'Platform Reviews', href: '/reviews/platforms' },
    { label: 'Feature Reviews', href: '/reviews/features' },
    { label: 'Specialty Reviews', href: '/reviews/specialty' },
    { label: 'Pricing Reviews', href: '/reviews/pricing' }
  ];

  const bestItems = [
    { label: 'Best Platforms', href: '/best/platforms' },
    { label: 'Best by Condition', href: '/best/conditions' },
    { label: 'Best for Specific Needs', href: '/best/specific-needs' },
    { label: 'Best by Audience', href: '/best/audiences' }
  ];

  const toolItems = [
    { label: 'Mental Health Assessments', href: '/tools/assessments' },
    { label: 'Platform Matcher', href: '/tools/matchers/therapy-platform-matcher' },
    { label: 'Insurance Checker', href: '/tools/matchers/insurance-coverage-checker' },
    { label: 'Therapy Style Finder', href: '/tools/matchers/therapy-type-finder' }
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/RMS.svg" alt="RealMindSolutions Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-800">RealMindSolutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <DropdownMenu title="Compare" items={compareItems} />
            <DropdownMenu title="Reviews" items={reviewItems} />
            <DropdownMenu title="Best For You" items={bestItems} />
            <DropdownMenu title="Tools" items={toolItems} />
            <NavLink to="/conditions-az">Conditions A-Z</NavLink>
            <NavLink to="/learn">Learn</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-emerald-500 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
            <div className="space-y-2">
              <div className="font-medium px-4">Compare</div>
              {compareItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="space-y-2">
              <div className="font-medium px-4">Reviews</div>
              {reviewItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="space-y-2">
              <div className="font-medium px-4">Best For You</div>
              {bestItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="space-y-2">
              <div className="font-medium px-4">Tools</div>
              {toolItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <Link
                to="/conditions-az"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Conditions A-Z
              </Link>
              <Link
                to="/learn"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Learn
              </Link>
              <Link
                to="/blog"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;