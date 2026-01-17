
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <span className="text-xl font-bold tracking-tight text-emerald-900">MITOLYN</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Autoridade em ciência metabólica e otimização celular. Nosso compromisso é com a verdade biológica e o emagrecimento saudável.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900">Conteúdo</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Artigos Científicos</li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Guia de Alimentação</li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Calculadora TDEE</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-slate-900">Suporte</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Minha Conta</li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Políticas de Envio</li>
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Rastrear Pedido</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-slate-900">Atendimento</h4>
          <p className="text-sm text-slate-500 mb-2">contato@mitolyn.com.br</p>
          <p className="text-sm text-slate-500 font-bold">0800-MET-BOLIC</p>
        </div>
      </div>

      <div className="border-t border-slate-50 pt-10 text-center">
        <p className="text-[10px] text-slate-400 max-w-4xl mx-auto uppercase tracking-widest leading-relaxed">
          AVISO LEGAL: AS INFORMAÇÕES CONTIDAS NESTE BLOG SÃO APENAS PARA FINS INFORMATIVOS E NÃO SUBSTITUEM O ACONSELHAMENTO MÉDICO. OS RESULTADOS PODEM VARIAR DE PESSOA PARA PESSOA. ESTE PRODUTO NÃO SE DESTINA A DIAGNOSTICAR, TRATAR, CURAR OU PREVENIR QUALQUER DOENÇA.
        </p>
        <p className="mt-8 text-xs text-slate-400">
          © {new Date().getFullYear()} Mitolyn Labs. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
