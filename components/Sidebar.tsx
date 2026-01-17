
import React from 'react';
import { PURCHASE_URL } from '../data';

interface SidebarProps {
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  return (
    <aside className="w-full lg:w-80 flex flex-col space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Pesquisar</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ex: Como emagrecer rápido..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
          />
        </div>
      </div>

      {/* Main Promo Banner */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        <h3 className="text-2xl font-bold mb-4 leading-tight">Mitolyn: O Catalisador que faltava</h3>
        <p className="text-emerald-50 mb-6 text-sm leading-relaxed">Destrave seu metabolismo e perca até 4kg no primeiro mês de forma saudável e comprovada.</p>
        <button 
          onClick={() => window.open(PURCHASE_URL, '_blank')}
          className="w-full bg-white text-emerald-700 font-bold py-3 rounded-xl hover:bg-emerald-50 transition-colors shadow-sm uppercase text-xs tracking-widest"
        >
          Ver Oferta Exclusiva
        </button>
      </div>

      {/* Lead Magnet */}
      <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
        <div className="text-sky-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">E-book Gratuito</h3>
        <p className="text-slate-600 text-sm mb-4">"Guia para Destravar seu Metabolismo" - Baixe agora e receba no seu e-mail.</p>
        <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); window.open(PURCHASE_URL, '_blank'); }}>
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            className="w-full border border-slate-200 rounded-xl py-2.5 px-4 text-sm focus:ring-2 focus:ring-sky-500/20"
            required
          />
          <button type="submit" className="w-full bg-sky-600 text-white font-bold py-2.5 rounded-xl hover:bg-sky-700 transition-colors text-sm">
            Quero o Guia Grátis
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Categorias</h3>
        <div className="flex flex-wrap gap-2">
          {['Emagrecimento', 'Ciência', 'Receitas', 'Metabolismo', 'Biohacking'].map(cat => (
            <span key={cat} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full hover:bg-emerald-50 hover:text-emerald-600 cursor-pointer transition-colors">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
