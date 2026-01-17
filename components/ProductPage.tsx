
import React from 'react';
import { PURCHASE_URL } from '../data';

const ProductPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-16">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 rounded-l-[100px] hidden lg:block"></div>
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Nova Tecnologia Metabólica</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Destrave seu <span className="text-emerald-600">Metabolismo</span> Naturalmente
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            O Mitolyn não é uma pílula mágica. É o catalisador mitocondrial que devolve ao seu corpo a capacidade de queimar gordura como fonte primária de energia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button 
              onClick={() => window.open(PURCHASE_URL, '_blank')}
              className="w-full sm:w-auto bg-emerald-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-emerald-700 transition-all shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 uppercase tracking-wider"
            >
              Quero Garantir Meu Kit
            </button>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Garantia de 90 dias</span>
            </div>
          </div>
          <div className="pt-8 flex items-center justify-center lg:justify-start space-x-4 opacity-70 grayscale hover:grayscale-0 transition-all">
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/FDA_logo.svg" alt="FDA" className="h-6" />
             <div className="h-6 w-px bg-slate-300"></div>
             <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Anvisa_logo.png" alt="Anvisa" className="h-4" />
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <img 
            src="https://picsum.photos/seed/mitolyn-product/600/800" 
            alt="Mitolyn Suplemento" 
            className="relative rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Por que o Mitolyn é Diferente?</h2>
          <p className="text-slate-600 text-lg">
            Diferente de termogênicos que causam taquicardia, o Mitolyn trabalha na raiz do problema: suas mitocôndrias.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Aceleração Real", 
              desc: "Aumenta sua taxa metabólica basal de forma segura e permanente.",
              icon: "M13 10V3L4 14h7v7l9-11h-7z"
            },
            { 
              title: "Foco e Energia", 
              desc: "Elimina a névoa mental e o cansaço crônico ao otimizar a ATP celular.",
              icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            },
            { 
              title: "Queima Teimosa", 
              desc: "Atua especificamente na gordura visceral e abdominal difícil de eliminar.",
              icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof / Testimonial */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="bg-emerald-900 rounded-[50px] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16 text-white overflow-hidden relative">
          <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
          <div className="flex-1 space-y-8 z-10">
            <div className="flex space-x-1">
              {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400">★</span>)}
            </div>
            <p className="text-2xl md:text-4xl font-medium leading-relaxed italic">
              "Depois dos 40 anos, eu achei que emagrecer era impossível. O Mitolyn não só me ajudou a perder 12kg, como me deu uma disposição que eu não tinha há décadas."
            </p>
            <div className="flex items-center space-x-4">
               <div className="w-16 h-16 bg-slate-200 rounded-full border-4 border-emerald-800 overflow-hidden">
                  <img src="https://picsum.photos/seed/lucas/100/100" alt="Lucas" />
               </div>
               <div>
                 <div className="font-bold text-xl">Lucas Mendes</div>
                 <div className="text-emerald-300 text-sm">Empresário, 43 anos</div>
               </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 z-10">
             <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center">
                <div className="text-4xl font-bold mb-2">-12kg</div>
                <div className="text-xs uppercase tracking-widest text-emerald-200">Em 3 meses</div>
             </div>
             <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center">
                <div className="text-4xl font-bold mb-2">+65%</div>
                <div className="text-xs uppercase tracking-widest text-emerald-200">Mais disposição</div>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing / Offers */}
      <section className="py-24 bg-slate-50 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">Oferta Especial de Lançamento</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Kit 1 */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200 flex flex-col items-center">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Experimentar</span>
            <div className="text-2xl font-bold mb-6">1 Pote</div>
            <img src="https://picsum.photos/seed/pote1/200/200" className="mb-8" alt="1 Pote" />
            <div className="text-slate-400 line-through text-sm mb-2">R$ 297,00</div>
            <div className="text-4xl font-black text-slate-900 mb-6">R$ 197,00</div>
            <button 
              onClick={() => window.open(PURCHASE_URL, '_blank')}
              className="w-full bg-slate-100 text-slate-900 font-bold py-4 rounded-2xl hover:bg-slate-200 transition-all uppercase text-sm"
            >
              Comprar Agora
            </button>
          </div>
          {/* Kit Recomendado */}
          <div className="bg-white p-10 rounded-[40px] border-4 border-emerald-500 shadow-2xl flex flex-col items-center relative scale-105">
            <div className="absolute -top-5 bg-emerald-500 text-white px-6 py-2 rounded-full font-bold text-sm">O MAIS VENDIDO</div>
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Tratamento 3 Meses</span>
            <div className="text-2xl font-bold mb-6">3 Potes</div>
            <img src="https://picsum.photos/seed/pote3/200/200" className="mb-8" alt="3 Potes" />
            <div className="text-slate-400 line-through text-sm mb-2">R$ 891,00</div>
            <div className="text-5xl font-black text-emerald-600 mb-6">R$ 447,00</div>
            <div className="text-xs text-emerald-600 font-bold mb-6 italic">FRETE GRÁTIS PARA TODO BRASIL</div>
            <button 
              onClick={() => window.open(PURCHASE_URL, '_blank')}
              className="w-full bg-emerald-600 text-white font-bold py-5 rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 uppercase tracking-widest"
            >
              Garantir Meu Kit VIP
            </button>
          </div>
          {/* Kit Máximo */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200 flex flex-col items-center">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Tratamento Completo</span>
            <div className="text-2xl font-bold mb-6">5 Potes</div>
            <img src="https://picsum.photos/seed/pote5/200/200" className="mb-8" alt="5 Potes" />
            <div className="text-slate-400 line-through text-sm mb-2">R$ 1.485,00</div>
            <div className="text-4xl font-black text-slate-900 mb-6">R$ 597,00</div>
            <button 
              onClick={() => window.open(PURCHASE_URL, '_blank')}
              className="w-full bg-slate-100 text-slate-900 font-bold py-4 rounded-2xl hover:bg-slate-200 transition-all uppercase text-sm"
            >
              Comprar Agora
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Dúvidas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "O Mitolyn tem efeitos colaterais?", a: "Não. Por ser um catalisador baseado em micronutrientes naturais, ele não causa efeitos colaterais comuns em termogênicos como tremores ou insônia." },
              { q: "Quanto tempo para ver resultados?", a: "A maioria dos clientes relata aumento de energia nos primeiros 3 dias e perda visível de medidas a partir da segunda semana." },
              { q: "Como devo tomar?", a: "Apenas 2 cápsulas por dia, preferencialmente 30 minutos antes da sua principal refeição." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-lg mb-4 text-emerald-700">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
