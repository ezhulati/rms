import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [currentPath, setCurrentPath] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Set initial path
    setCurrentPath(window.location.pathname);

    // Listen for navigation events
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a
      href={to}
      className={`flex items-center min-h-[44px] text-neutral-700 hover:text-brand-primary-600 font-sans font-medium transition-colors duration-200 ${
        isActive(to) ? 'text-brand-primary-600' : ''
      }`}
    >
      {children}
    </a>
  );

  const DropdownMenu = ({
    title,
    items
  }: {
    title: string;
    items: { label: string; href: string }[]
  }) => (
    <div className="relative group">
      <button className="flex items-center gap-1 text-neutral-700 hover:text-brand-primary-600 font-sans font-medium transition-colors duration-200 min-h-[44px]">
        {title}
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[240px] z-50">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 py-2">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center px-4 py-3 min-h-[44px] text-sm font-sans text-neutral-700 hover:bg-brand-primary-50 hover:text-brand-primary-600 transition-colors duration-200"
            >
              {item.label}
            </a>
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
    <header className="bg-white border-b border-neutral-200 shadow-sm">
      <div className="w-full">
        <nav className="flex items-center justify-between h-16 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src="/images/RMS_icon.svg" alt="RealMindSolutions Logo" className="h-10 w-10" />
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-heading font-black text-brand-primary-600 tracking-tight">Real</span>
                <span className="text-[22px] font-serif italic font-bold text-brand-accent-600">Mind</span>
              </div>
              <span className="text-[10px] font-sans font-light text-neutral-500 tracking-[0.2em] uppercase">Solutions</span>
            </div>
          </a>

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
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-brand-primary-600 hover:bg-neutral-100"
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
          <div className="lg:hidden py-4 space-y-4 max-w-7xl mx-auto px-6">
            <div className="space-y-2">
              <div className="font-heading font-semibold px-4 text-brand-primary-600">Compare</div>
              {compareItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 min-h-[44px] flex items-center text-sm font-sans text-neutral-700 hover:bg-brand-primary-50 hover:text-brand-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="space-y-2">
              <div className="font-heading font-semibold px-4 text-brand-primary-600">Reviews</div>
              {reviewItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 min-h-[44px] flex items-center text-sm font-sans text-neutral-700 hover:bg-brand-primary-50 hover:text-brand-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="space-y-2">
              <div className="font-heading font-semibold px-4 text-brand-primary-600">Best For You</div>
              {bestItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 min-h-[44px] flex items-center text-sm font-sans text-neutral-700 hover:bg-brand-primary-50 hover:text-brand-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="space-y-2">
              <div className="font-heading font-semibold px-4 text-brand-primary-600">Tools</div>
              {toolItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 min-h-[44px] flex items-center text-sm font-sans text-neutral-700 hover:bg-brand-primary-50 hover:text-brand-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="space-y-2">
              <a
                href="/conditions-az"
                className="block px-4 py-3 min-h-[44px] flex items-center text-sm font-sans text-neutral-700 hover:bg-brand-primary-50 hover:text-brand-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Conditions A-Z
              </a>
              <a
                href="/learn"
                className="block px-4 py-3 min-h-[44px] flex items-center text-sm font-sans text-neutral-700 hover:bg-brand-primary-50 hover:text-brand-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Learn
              </a>
              <a
                href="/blog"
                className="block px-4 py-3 min-h-[44px] flex items-center text-sm font-sans text-neutral-700 hover:bg-brand-primary-50 hover:text-brand-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
