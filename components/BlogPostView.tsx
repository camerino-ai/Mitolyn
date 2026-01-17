
import React from 'react';
import { BlogPost } from '../types';
import { PURCHASE_URL } from '../data';

interface BlogPostViewProps {
  post: BlogPost;
  onNavigateToProduct: () => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ post, onNavigateToProduct }) => {
  // Simple helper to render post content with clickable CTAs
  const renderContent = (text: string) => {
    const parts = text.split(/\[(.*?)\]/);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return (
          <button 
            key={i}
            onClick={() => window.open(PURCHASE_URL, '_blank')}
            className="text-emerald-600 font-bold hover:underline decoration-emerald-400 decoration-2 underline-offset-4"
          >
            {part}
          </button>
        );
      }
      return <span key={i} className="whitespace-pre-line leading-relaxed">{part}</span>;
    });
  };

  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
      <img src={post.imageUrl} alt={post.title} className="w-full h-72 md:h-[450px] object-cover" />
      
      <div className="p-8 md:p-12 lg:p-16">
        <header className="mb-10 text-center max-w-3xl mx-auto">
          <span className="bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 inline-block">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-slate-500 text-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-slate-200 mr-2 overflow-hidden">
                 <img src={`https://picsum.photos/seed/${post.author}/50/50`} alt={post.author} />
              </div>
              <span className="font-medium text-slate-700">{post.author}</span>
            </div>
            <span>•</span>
            <time>{post.date}</time>
          </div>
        </header>

        <div className="prose prose-lg max-w-3xl mx-auto text-slate-700 prose-headings:text-slate-900 prose-strong:text-emerald-700 prose-a:text-emerald-600">
          {renderContent(post.content)}
        </div>

        <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-100">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Pronto para destravar sua queima de gordura?</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Não deixe seu metabolismo ditar como você deve se sentir. Use a ciência a seu favor com o Mitolyn.
          </p>
          <button 
            onClick={() => window.open(PURCHASE_URL, '_blank')}
            className="bg-emerald-600 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-200/50 hover:-translate-y-1"
          >
            Descobrir o Segredo do Mitolyn
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPostView;
