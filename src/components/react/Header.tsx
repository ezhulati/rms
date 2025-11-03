import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import MegaMenuDropdown from '../MegaMenuDropdown';
import AccordionSection from '../AccordionSection';
import { navigationCategories, directLinks, findActiveCategory } from '../../data/navigationData';

const Header = () => {
  const [currentPath, setCurrentPath] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);

  useEffect(() => {
    // Set initial path
    setCurrentPath(window.location.pathname);

    // Listen for navigation events
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Scroll detection for sticky header behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  const activeCategory = findActiveCategory(currentPath);

  const handleAccordionToggle = (index: number) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  const NavLink = ({ to, children, icon: Icon }: { to: string; children: React.ReactNode; icon?: React.ComponentType<{ className?: string; strokeWidth?: number }> }) => (
    <a
      href={to}
      className={`flex items-center gap-2 text-[15px] font-nav font-medium transition-colors duration-200 py-2 ${
        isActive(to)
          ? 'text-brand-primary-600'
          : 'text-neutral-700 hover:text-brand-primary-600'
      }`}
    >
      {Icon && <Icon className="h-4 w-4" strokeWidth={2.5} />}
      <span>{children}</span>
    </a>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 bg-white border-b z-50 transition-all duration-300 ${
          scrolled
            ? 'border-neutral-300 shadow-md'
            : 'border-neutral-200 shadow-sm'
        }`}
      >
        <div className="w-full">
          <nav
            className={`flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-300 ${
              scrolled ? 'h-[60px]' : 'h-16'
            }`}
          >
            {/* Logo with Premium Fonts */}
            <a href="/" className="flex items-center gap-3 relative z-50">
              <img src="/images/RMS_icon.svg" alt="RealMindSolutions Logo" className="h-10 w-10" />
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-nav font-black text-brand-primary-600 tracking-tight">
                    Real
                  </span>
                  <span className="text-[22px] font-accent italic font-medium text-brand-accent-600">
                    Mind
                  </span>
                </div>
                <span className="text-[10px] font-nav font-light text-neutral-500 tracking-[0.2em] uppercase">
                  Solutions
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Dropdown Categories */}
              {navigationCategories.map((category, index) => (
                <MegaMenuDropdown
                  key={index}
                  category={category}
                  isActive={activeCategory?.title === category.title}
                />
              ))}

              {/* Direct Links */}
              {directLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <NavLink key={index} to={link.href} icon={Icon}>
                    {link.label}
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-neutral-700 hover:text-brand-primary-600 hover:bg-neutral-100 transition-all duration-200 relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
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
        </div>
      </header>

      {/* Spacer to prevent content jump */}
      <div className={scrolled ? 'h-[60px]' : 'h-16'} />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 lg:hidden overflow-y-auto animate-slide-in-right"
            style={{
              animation: 'slideInRight 0.3s ease-out',
            }}
          >
            {/* Mobile Menu Header */}
            <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/images/RMS_icon.svg" alt="Menu" className="h-8 w-8" />
                <span className="font-nav font-bold text-lg text-neutral-900">Menu</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Accordion Categories */}
            <div className="py-2">
              {navigationCategories.map((category, index) => (
                <AccordionSection
                  key={index}
                  category={category}
                  isExpanded={expandedAccordion === index}
                  onToggle={() => handleAccordionToggle(index)}
                  onItemClick={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>

            {/* Direct Links Section */}
            <div className="border-t border-neutral-200 py-4 px-4">
              <div className="space-y-1">
                {directLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-100 transition-colors duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center group-hover:bg-brand-primary-100 transition-colors">
                        <Icon className="h-5 w-5 text-neutral-600 group-hover:text-brand-primary-600" strokeWidth={2.5} />
                      </div>
                      <span className="font-nav font-medium text-[15px] text-neutral-700 group-hover:text-brand-primary-600 transition-colors">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
