
import React from 'react';
import { GPO_DATA } from '../constants';
import ItemCard from '../components/ItemCard';

const Promotions: React.FC = () => {
  const promoItems = GPO_DATA.filter(item => item.originalPrice && item.originalPrice > item.price);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Header */}
      <div className="relative rounded-[40px] bg-gradient-to-r from-orange-600/20 to-purple-600/20 border border-white/10 p-12 mb-16 overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 2L2 11l1.41 1.41L11 4.83l7.59 7.58L20 11 11 2zM4.83 12.41L2 15.24l1.41 1.41L4.83 15.24l7.58 7.59 1.41-1.41-7.58-7.59z" />
           </svg>
        </div>
        
        <div className="relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Ofertas de Tempo Limitado
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter italic">
            ZONA DE <span className="text-orange-500">PROMOÇÕES</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Aproveite os melhores preços do mercado em itens selecionados. Estoque limitado para garantir a rapidez da entrega.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {promoItems.length > 0 ? (
          promoItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))
        ) : (
          <div className="col-span-full py-40 text-center border border-dashed border-white/10 rounded-[40px]">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Sem promoções no momento</h2>
            <p className="text-gray-500">Fique de olho no nosso Discord para anúncios de novas ofertas!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Promotions;
