import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-auto text-whisperwynd-purple" />
              <span className="ml-2 text-xl font-serif font-medium text-whisperwynd-dark-gray">WhisperWynd</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-whisperwynd-dark-gray hover:text-whisperwynd-purple transition-colors">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-whisperwynd-dark-gray hover:text-whisperwynd-purple transition-colors">
              About
            </Link>
            <Link to="/login" className="px-3 py-2 text-sm font-medium text-whisperwynd-dark-gray hover:text-whisperwynd-purple transition-colors">
              Login
            </Link>
            <Button asChild className="bg-whisperwynd-purple hover:bg-whisperwynd-purple/90 text-white">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-whisperwynd-dark-gray hover:text-whisperwynd-purple hover:bg-whisperwynd-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-whisperwynd-purple"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-whisperwynd-dark-gray hover:text-whisperwynd-purple hover:bg-whisperwynd-gray"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-whisperwynd-dark-gray hover:text-whisperwynd-purple hover:bg-whisperwynd-gray"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/login" 
              className="block px-3 py-2 rounded-md text-base font-medium text-whisperwynd-dark-gray hover:text-whisperwynd-purple hover:bg-whisperwynd-gray"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-whisperwynd-purple text-white hover:bg-whisperwynd-purple/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
