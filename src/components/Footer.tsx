import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white border-t-4 border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link to="/" className="inline-block">
                <span className="font-bold text-2xl tracking-tight text-white flex flex-col">
                  SADA-E-THAL<sup className="text-sm font-medium text-red-500 -mt-2">®</sup>
                </span>
                <span className="text-xs text-neutral-400 font-medium tracking-widest uppercase">
                  (Media Network)
                </span>
              </Link>
            </div>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              A minimalist, clean, and content-focused personal blog and media platform dedicated to highlighting stories that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 border-b border-neutral-800 pb-2 text-neutral-300">Sections</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-red-500 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/opinion" className="text-neutral-400 hover:text-red-500 transition-colors text-sm">Opinion</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-neutral-400 hover:text-red-500 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/our-team" className="text-neutral-400 hover:text-red-500 transition-colors text-sm">Our Team</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 border-b border-neutral-800 pb-2 text-neutral-300">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-neutral-400">
                <MapPin size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Lilla Interchange, Toba, Pind Dadan Khan, District Jhelum</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-neutral-400">
                <Phone size={18} className="text-red-500 flex-shrink-0" />
                <span>+92 3038163022</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-neutral-400">
                <Mail size={18} className="text-red-500 flex-shrink-0" />
                <a href="mailto:sadaethalmedianetwork@gmail.com" className="hover:text-red-500 transition-colors">
                  sadaethalmedianetwork@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-black py-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} SADA-E-THAL® (Media Network). All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
