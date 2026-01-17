
import React from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

interface BlogListProps {
  onPostClick: (post: BlogPost) => void;
}

const BlogList: React.FC<BlogListProps> = ({ onPostClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {BLOG_POSTS.map((post) => (
        <article 
          key={post.id} 
          className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
          onClick={() => onPostClick(post)}
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="text-xs text-slate-400 mb-2">{post.date} • Por {post.author}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-slate-600 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow">
              {post.excerpt}
            </p>
            <div className="flex items-center text-emerald-600 font-bold text-xs uppercase tracking-widest">
              Ler artigo completo
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogList;
