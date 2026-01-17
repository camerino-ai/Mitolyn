
import React, { useState } from 'react';
import { Page, BlogPost } from './types';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogPostView from './components/BlogPostView';
import ProductPage from './components/ProductPage';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { PURCHASE_URL } from './data';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.BLOG);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleNavigate = (pageStr: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(pageStr as Page);
  };

  const handlePostClick = (post: BlogPost) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedPost(post);
    setCurrentPage(Page.POST);
  };

  const renderContent = () => {
    if (currentPage === Page.PRODUCT) {
      return <ProductPage />;
    }

    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col lg:flex-row gap-12">
        <main className="flex-1">
          {currentPage === Page.BLOG && (
            <>
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-slate-900 mb-4 serif tracking-tight">Blog da Saúde Metabólica</h2>
                <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
                  Educação baseada em evidências para quem deseja emagrecer com inteligência biológica, não com restrição severa.
                </p>
              </div>
              <BlogList onPostClick={handlePostClick} />
            </>
          )}
          {currentPage === Page.POST && selectedPost && (
            <BlogPostView 
              post={selectedPost} 
              onNavigateToProduct={() => window.open(PURCHASE_URL, '_blank')} 
            />
          )}
        </main>
        <Sidebar onNavigate={handleNavigate} />
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <div className="flex-grow">
        {renderContent()}
      </div>

      <Footer />

      {/* Persistent CTA Bar for Mobile */}
      {currentPage !== Page.PRODUCT && (
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
          <button 
            onClick={() => window.open(PURCHASE_URL, '_blank')}
            className="w-full bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-2xl shadow-emerald-500/40 uppercase tracking-widest text-xs"
          >
            Acelerar Meu Metabolismo
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
