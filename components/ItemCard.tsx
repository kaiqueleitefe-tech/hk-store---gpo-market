
import React, { useState } from 'react';
import { GPOItem } from '../types';
import { useCart } from '../context/CartContext';
import ItemDetailsModal from './ItemDetailsModal';

interface ItemCardProps {
  item: GPOItem;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case 'Mythical': return 'text-pink-400 border-pink-400/20 bg-pink-400/5';
      case 'Legendary': return 'text-orange-400 border-orange-400/20 bg-orange-400/5';
      case 'Epic': return 'text-blue-400 border-blue-400/20 bg-blue-400/5';
      default: return 'text-gray-400 border-gray-400/20 bg-gray-400/5';
    }
  };

  const getGradientClass = (rarity: string) => {
    switch (rarity) {
      case 'Mythical': return 'gradient-mythical';
      case 'Legendary': return 'gradient-legendary';
      case 'Epic': return 'gradient-epic';
      default: return 'bg-gray-800';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  };

  const isOutOfStock = item.stock <= 0;
  const hasDiscount = item.originalPrice && item.originalPrice > item.price;
  const discountPercent = hasDiscount ? Math.round(((item.originalPrice! - item.price) / item.originalPrice!) * 100) : 0;

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className={`group bg-[#111] border border-white/5 rounded-[32px] overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col h-full cursor-pointer hover:shadow-2xl hover:shadow-purple-900/15 ${isOutOfStock ? 'opacity-75 grayscale-[0.5]' : ''}`}
      >
        <div className="h-96 w-full relative overflow-hidden flex items-center justify-center flex-shrink-0 bg-black/40">
          <div className={`absolute inset-0 opacity-10 group-hover:opacity-40 transition-all duration-700 ${getGradientClass(item.rarity)}`}></div>
          
          {item.imageUrl && !imgError ? (
            <img 
              src={item.imageUrl} 
              alt={item.name}
              onError={() => setImgError(true)}
              className="z-10 w-full h-full object-contain p-0 group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
            />
          ) : (
            <div className="z-10 text-center px-4">
               <div className={`w-32 h-32 mx-auto mb-2 rounded-full flex items-center justify-center border border-white/10 ${getGradientClass(item.rarity)}`}>
                 <span className="text-5xl font-black text-white">{item.name.charAt(0)}</span>
               </div>
            </div>
          )}

          <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
             <span className={`text-[10px] uppercase font-black tracking-[0.2em] px-4 py-2 rounded-full border backdrop-blur-md ${getRarityClass(item.rarity)}`}>
               {item.rarity}
             </span>
             <span className={`text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-md ${isOutOfStock ? 'text-red-400 border-red-400/20 bg-red-400/10' : 'text-green-400 border-green-400/20 bg-green-400/10'}`}>
                {isOutOfStock ? 'SEM ESTOQUE' : `ESTOQUE: ${item.stock}`}
             </span>
             {hasDiscount && (
               <span className="text-[10px] font-black bg-orange-500 text-white px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                 {discountPercent}% OFF
               </span>
             )}
          </div>
        </div>
        
        <div className="p-7 flex flex-col flex-grow bg-gradient-to-t from-black to-transparent">
          <div className="flex justify-between items-start mb-1">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              {item.category}
            </span>
          </div>
          
          <h3 className="text-2xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors leading-tight">
            {item.name}
          </h3>

          <div className="flex flex-col mb-6">
            {hasDiscount && (
              <span className="text-sm text-gray-500 line-through font-medium">
                {formatPrice(item.originalPrice!)}
              </span>
            )}
            <div className="text-3xl font-black text-white">
              {formatPrice(item.price)}
            </div>
          </div>
          
          <div className="flex gap-2.5 mt-auto" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => !isOutOfStock && addToCart(item)}
              disabled={isOutOfStock}
              className={`flex-grow py-5 text-[12px] font-black rounded-2xl transition-all shadow-xl active:scale-95 uppercase tracking-widest ${isOutOfStock ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-white text-black hover:bg-purple-600 hover:text-white'}`}
            >
              {isOutOfStock ? 'Esgotado' : 'Adicionar'}
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="p-5 bg-white/5 text-white rounded-2xl hover:bg-white/10 transition-all border border-white/5"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <ItemDetailsModal 
        item={isModalOpen ? item : null} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ItemCard;
