import React, { useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { navigationCategories, directLinks, findActiveCategory } from '../../data/navigationData';

const Header = () => {
  const [currentPath, setCurrentPath] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [expandedMobileAccordion, setExpandedMobileAccordion] = useState<number | null>(null);

  // Track current path
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Scroll detection for hide/show and styling
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);

      // Hide when scrolling down past 100px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
        setOpenDropdown(null); // Close dropdowns when hiding
      } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  const activeCategory = findActiveCategory(currentPath);

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 bg-white border-b z-50 transition-all duration-300 ${
          scrolled ? 'border-neutral-300 shadow-lg' : 'border-neutral-200 shadow-sm'
        } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="w-full">
          <nav className={`flex items-center justify-between w-full mx-auto px-6 transition-all duration-300 ${
            scrolled ? 'h-[60px]' : 'h-16'
          }`}>
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 relative z-50">
              <img src="/images/RMS_icon.svg" alt="RealMindSolutions" className="h-10 w-10" />
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-nav font-black text-brand-primary-600 tracking-tight">Real</span>
                  <span className="text-[22px] font-accent italic font-medium text-brand-accent-600">Mind</span>
                </div>
                <span className="text-[10px] font-nav font-light text-neutral-500 tracking-[0.2em] uppercase">Solutions</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Dropdown Categories */}
              {navigationCategories.map((category, index) => {
                const Icon = category.icon;
                const isDropdownOpen = openDropdown === index;
                const isCategoryActive = activeCategory?.title === category.title;

                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {/* Dropdown Button */}
                    <button
                      className={`flex items-center gap-1.5 text-[15px] font-nav font-semibold transition-colors duration-200 py-2 ${
                        isCategoryActive ? 'text-brand-primary-600' : 'text-neutral-700 hover:text-brand-primary-600'
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={2.5} />
                      <span>{category.title}</span>
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu - No gap, seamless hover */}
                    {isDropdownOpen && (
                      <div className="absolute left-0 top-full pt-0 z-50">
                        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200/80 p-2 min-w-[320px] mt-0">
                          {category.items.map((item, itemIndex) => {
                            const ItemIcon = item.icon;
                            return (
                              <a
                                key={itemIndex}
                                href={item.href}
                                className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-brand-primary-50 transition-all duration-200 hover:translate-x-0.5"
                              >
                                {ItemIcon && (
                                  <div className="flex-shrink-0 mt-0.5">
                                    <div className="w-9 h-9 rounded-lg bg-brand-primary-100 flex items-center justify-center">
                                      <ItemIcon className="h-4 w-4 text-brand-primary-600" strokeWidth={2.5} />
                                    </div>
                                  </div>
                                )}
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <span className="font-nav font-medium text-[14px] text-neutral-900">{item.label}</span>
                                    {item.badge && (
                                      <span className="px-2 py-0.5 text-[10px] font-nav font-semibold uppercase bg-brand-accent-100 text-brand-accent-700 rounded-full">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  {item.description && (
                                    <p className="font-accent italic text-[13px] text-neutral-500 leading-snug">{item.description}</p>
                                  )}
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Direct Links */}
              {directLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className={`flex items-center gap-2 text-[15px] font-nav font-medium transition-colors duration-200 py-2 ${
                      isActive(link.href) ? 'text-brand-primary-600' : 'text-neutral-700 hover:text-brand-primary-600'
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2.5} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-neutral-700 hover:text-brand-primary-600 hover:bg-neutral-100 transition-all relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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

      {/* Spacer */}
      <div className={scrolled ? 'h-[60px]' : 'h-16'} />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />

          <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">
            {/* Mobile Header */}
            <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/images/RMS_icon.svg" alt="Menu" className="h-8 w-8" />
                <span className="font-nav font-bold text-lg text-neutral-900">Menu</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-neutral-100">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Categories */}
            <div className="py-2">
              {navigationCategories.map((category, index) => {
                const Icon = category.icon;
                const isExpanded = expandedMobileAccordion === index;

                return (
                  <div key={index} className="border-b border-neutral-100 last:border-0">
                    <button
                      onClick={() => setExpandedMobileAccordion(isExpanded ? null : index)}
                      className="w-full flex items-center justify-between px-6 py-4 hover:bg-neutral-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-brand-primary-600" strokeWidth={2.5} />
                        <span className="font-nav font-semibold text-neutral-900">{category.title}</span>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-neutral-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-4 space-y-1">
                        {category.items.map((item, itemIndex) => {
                          const ItemIcon = item.icon;
                          return (
                            <a
                              key={itemIndex}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-brand-primary-50 transition-colors"
                            >
                              {ItemIcon && (
                                <div className="w-8 h-8 rounded-lg bg-brand-primary-100 flex items-center justify-center flex-shrink-0">
                                  <ItemIcon className="h-4 w-4 text-brand-primary-600" strokeWidth={2.5} />
                                </div>
                              )}
                              <span className="font-nav font-medium text-[14px] text-neutral-700">{item.label}</span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Direct Links */}
            <div className="border-t border-neutral-200 py-4 px-4">
              {directLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-neutral-600" strokeWidth={2.5} />
                    </div>
                    <span className="font-nav font-medium text-[15px] text-neutral-700">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
