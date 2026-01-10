
import React from 'react';
import { GPOItem } from '../types';
import { useCart } from '../context/CartContext';

interface ItemDetailsModalProps {
  item: GPOItem | null;
  onClose: () => void;
}

const ItemDetailsModal: React.FC<ItemDetailsModalProps> = ({ item, onClose }) => {
  const { addToCart } = useCart();

  if (!item) return null;

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

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-30 p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-all border border-white/5"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Imagem Side */}
          <div className="md:w-[55%] relative h-[400px] md:h-[600px] bg-black/60 flex items-center justify-center p-0 overflow-hidden">
            <div className={`absolute inset-0 opacity-20 ${getGradientClass(item.rarity)}`}></div>
            {item.imageUrl ? (
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="relative z-10 w-full h-full object-contain scale-110 drop-shadow-[0_0_60px_rgba(0,0,0,0.9)]"
              />
            ) : (
              <div className="relative z-10 w-48 h-48 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <span className="text-7xl font-bold text-gray-700">{item.name.charAt(0)}</span>
              </div>
            )}
          </div>

          {/* Info Side */}
          <div className="md:w-[45%] p-10 md:p-14 flex flex-col bg-[#0f0f0f]">
            <div className="flex items-center space-x-4 mb-6">
              <span className={`text-[11px] uppercase font-black tracking-widest px-4 py-1.5 rounded-full border ${getRarityClass(item.rarity)}`}>
                {item.rarity}
              </span>
              <span className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">
                {item.category}
              </span>
              <span className={`text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border ${isOutOfStock ? 'text-red-500 border-red-500/20 bg-red-500/5' : 'text-green-500 border-green-500/20 bg-green-500/5'}`}>
                {isOutOfStock ? 'Sem Estoque' : `Estoque: ${item.stock}`}
              </span>
            </div>

            <h2 className="text-4xl font-black text-white mb-4 leading-tight">
              {item.name}
            </h2>
            
            <div className="mb-8">
              {hasDiscount && (
                <span className="text-lg text-gray-500 line-through font-medium block">
                  {formatPrice(item.originalPrice!)}
                </span>
              )}
              <div className="text-4xl font-black text-purple-500">
                {formatPrice(item.price)}
              </div>
            </div>

            <div className="space-y-8 flex-grow">
              {item.description && (
                <div>
                  <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-3">Sobre o Item</h4>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}

              {item.stats && item.stats.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Habilidades & Atributos</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {item.stats.map((stat, i) => (
                      <li key={i} className="flex items-center space-x-3 text-sm text-gray-200 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                        <span className="font-bold">{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-12 pt-10 border-t border-white/5">
              <p className="text-[11px] text-red-500 font-black mb-6 uppercase tracking-widest text-center bg-red-500/5 py-2 rounded-lg">
                ⚠️ Sem Reembolso após a entrega
              </p>
              <button 
                onClick={() => {
                  if (!isOutOfStock) {
                    addToCart(item);
                    onClose();
                  }
                }}
                disabled={isOutOfStock}
                className={`w-full py-5 font-black text-sm rounded-2xl transition-all transform active:scale-95 shadow-2xl uppercase tracking-widest ${isOutOfStock ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-white text-black hover:bg-purple-600 hover:text-white'}`}
              >
                {isOutOfStock ? 'Produto Esgotado' : 'Adicionar ao Carrinho'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsModal;
