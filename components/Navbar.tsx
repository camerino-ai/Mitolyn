
import React from 'react';
import { PURCHASE_URL } from '../data';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
      <div 
        className="flex items-center space-x-2 cursor-pointer group"
        onClick={() => onNavigate('blog')}
      >
        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-emerald-700 transition-colors">
          M
        </div>
        <span className="text-2xl font-bold tracking-tight text-emerald-900">MITOLYN</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
        <button 
          onClick={() => onNavigate('blog')}
          className={`hover:text-emerald-600 transition-colors ${currentPage === 'blog' ? 'text-emerald-600 font-bold' : ''}`}
        >
          Blog
        </button>
        <button 
          onClick={() => window.open(PURCHASE_URL, '_blank')}
          className="bg-emerald-600 text-white px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-bold"
        >
          Acelerar Metabolismo
        </button>
      </div>

      <button className="md:hidden text-slate-900">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
