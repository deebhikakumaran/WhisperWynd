import { BookOpen, Mail, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-whisperwynd-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <BookOpen className="h-8 w-auto text-whisperwynd-purple" />
              <span className="ml-2 text-xl font-serif font-medium text-whisperwynd-dark-gray">WhisperWynd</span>
            </div>
            <p className="mt-4 text-sm text-whisperwynd-medium-gray max-w-md">
              WhisperWynd is an interactive storytelling platform that uses AI to help users explore and create magical stories and characters.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="/" className="text-whisperwynd-medium-gray hover:text-whisperwynd-purple transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="/" className="text-whisperwynd-medium-gray hover:text-whisperwynd-purple transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="/" className="text-whisperwynd-medium-gray hover:text-whisperwynd-purple transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-whisperwynd-dark-gray uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-whisperwynd-medium-gray hover:text-whisperwynd-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-whisperwynd-medium-gray hover:text-whisperwynd-purple transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sm text-whisperwynd-medium-gray hover:text-whisperwynd-purple transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-sm text-whisperwynd-medium-gray hover:text-whisperwynd-purple transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-whisperwynd-dark-gray uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-whisperwynd-medium-gray hover:text-whisperwynd-purple transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-whisperwynd-medium-gray hover:text-whisperwynd-purple transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-whisperwynd-medium-gray text-center">
            &copy; {new Date().getFullYear()} WhisperWynd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;