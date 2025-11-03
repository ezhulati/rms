import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sb-dark-900 text-white">
      <div className="w-full py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/RMS_icon.svg" alt="RealMindSolutions Logo" className="h-8 w-8" />
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-heading font-black text-white tracking-tight">Real</span>
                  <span className="text-[17px] font-serif italic font-bold text-brand-accent-400">Mind</span>
                </div>
                <span className="text-[9px] font-sans font-light text-sb-gray-700 tracking-[0.2em] uppercase">Solutions</span>
              </div>
            </div>
            <p className="text-sb-gray-700 mb-4">
              Helping you find the right mental health solutions for your unique needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/compare" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">Compare</Link></li>
              <li><Link to="/reviews" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">Reviews</Link></li>
              <li><Link to="/guides" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">Guides</Link></li>
              <li><Link to="/best" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">Best For You</Link></li>
              <li><Link to="/tools" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">Tools</Link></li>
              <li><Link to="/learn" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">Learn</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/worksheets" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">Worksheets</Link></li>
              <li><Link to="/case-studies" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">Blog</Link></li>
              <li><Link to="/learn/statistics" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">Statistics</Link></li>
              <li><Link to="/learn/fundamentals" className="text-sb-gray-700 hover:text-emerald-400 transition-colors">Fundamentals</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <p className="text-neutral-400 mb-4">
              Have questions or feedback? We're here to help.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-brand-primary-400 hover:text-brand-primary-300 transition-colors font-semibold">
              Get in Touch
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-sb-dark-800 mt-12 pt-8 text-center text-neutral-400 text-sm">
          <p className="mb-4 text-neutral-400">
            Disclaimer: RealMindSolutions provides information for educational purposes only.
            We are not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p className="text-neutral-300">© {new Date().getFullYear()} RealMindSolutions. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="text-brand-primary-400 hover:text-brand-primary-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-brand-primary-400 hover:text-brand-primary-300 transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="text-brand-primary-400 hover:text-brand-primary-300 transition-colors">Accessibility</Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;