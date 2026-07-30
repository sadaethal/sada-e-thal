import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClasses = (path: string) => 
    `text-sm font-semibold tracking-wide uppercase transition-colors hover:text-red-700 ${isActive(path) ? 'text-red-700' : 'text-neutral-800'}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-neutral-200 shadow-sm">
      {/* Top Bar for Socials */}
      <div className="bg-neutral-900 text-white py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-4">
          <a href="https://www.facebook.com/share/1DGnbX9ZRL/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="Facebook">
            <Facebook size={16} />
          </a>
          <a href="https://x.com/N0manBaloch" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="Twitter">
            <Twitter size={16} />
          </a>
          <a href="https://youtube.com/@sadaethal?si=gwVYp3Yeqy6TxCD2" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="YouTube">
            <Youtube size={16} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Site Name */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="w-12 h-12 overflow-hidden rounded shadow-sm bg-neutral-100 flex items-center justify-center relative">
               <img 
                 src="/logo-1.jpg" 
                 alt="SADA-E-THAL Logo" 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.onerror = null;
                   target.src = 'https://placehold.co/100x100/dc2626/ffffff?text=SET';
                 }}
               />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-neutral-900 group-hover:text-red-700 transition-colors">
                SADA-E-THAL<sup className="text-sm font-medium">®</sup>
              </span>
              <span className="text-xs sm:text-sm text-neutral-500 font-medium tracking-widest uppercase">
                (Media Network)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkClasses('/')}>Home</Link>
            <Link to="/opinion" className={navLinkClasses('/opinion')}>Opinion</Link>
            
            {/* About Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button className={`flex items-center space-x-1 ${navLinkClasses('/about-us')} ${isActive('/our-team') ? 'text-red-700' : ''}`}>
                <span>About</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute left-0 mt-2 w-48 bg-white border border-neutral-100 shadow-lg rounded-md py-1 transition-all duration-200 ${isAboutDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link to="/about-us" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-red-700 transition-colors">
                  About Us
                </Link>
                <Link to="/our-team" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-red-700 transition-colors">
                  Our Team
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-neutral-900 hover:text-red-700 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-3 rounded-md text-base font-semibold uppercase ${isActive('/') ? 'text-red-700 bg-red-50' : 'text-neutral-900 hover:bg-neutral-50'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/opinion" 
              className={`block px-3 py-3 rounded-md text-base font-semibold uppercase ${isActive('/opinion') ? 'text-red-700 bg-red-50' : 'text-neutral-900 hover:bg-neutral-50'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Opinion
            </Link>
            
            <div className="px-3 py-3 text-base font-semibold uppercase text-neutral-900 border-b border-neutral-100">
              About
            </div>
            <Link 
              to="/about-us" 
              className={`block pl-6 pr-3 py-2 text-sm font-medium ${isActive('/about-us') ? 'text-red-700' : 'text-neutral-600 hover:text-red-700'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/our-team" 
              className={`block pl-6 pr-3 py-2 text-sm font-medium ${isActive('/our-team') ? 'text-red-700' : 'text-neutral-600 hover:text-red-700'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Team
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
