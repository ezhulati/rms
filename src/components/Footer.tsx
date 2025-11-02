import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sb-dark-900 text-white">
      <div className="sb-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">RealMindSolutions</span>
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
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
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
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-0.5" />
                <span className="text-sb-gray-700">123 Mental Health St.<br />Wellness City, WC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-sb-gray-700">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-sb-gray-700">info@realmindsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sb-dark-800 mt-12 pt-8 text-center text-sb-gray-700 text-sm">
          <p>© {new Date().getFullYear()} RealMindSolutions. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-emerald-400 transition-colors">Accessibility</Link>
          </div>
          <p className="mt-4">
            Disclaimer: RealMindSolutions provides information for educational purposes only. 
            We are not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;