
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const DISCORD_LINK = "https://discord.gg/jXaYterhS2";

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  };

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (!acceptedTerms) {
      alert("Por favor, aceite os termos de compra antes de prosseguir.");
      return;
    }

    const itemList = cart.map(item => `- ${item.name} (x${item.quantity}) - ${formatPrice(item.price * item.quantity)}`).join('\n');
    const message = encodeURIComponent(`Olá HK Store! Gostaria de comprar os seguintes itens:\n\n${itemList}\n\nTotal: ${formatPrice(totalPrice)}\n\nEstou ciente da política de reembolso.\nMeu Nick: [INSERIR NICK AQUI]`);
    
    alert("AVISO IMPORTANTE:\n\n1. Compras e trades já realizadas NÃO terão reembolso.\n2. Ao entrar no Discord, abra um ticket.\n3. Informe seu NICK do Roblox e o ASSUNTO da compra.\n\nVocê será redirecionado para o Discord.");
    
    window.open(DISCORD_LINK, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsCartOpen(false)}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-[#0a0a0a] shadow-2xl flex flex-col border-l border-white/10">
          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div className="flex items-start justify-between border-b border-white/5 pb-6">
              <h2 className="text-xl font-bold text-white tracking-tight">Seu Carrinho</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-8">
              {cart.length === 0 ? (
                <div className="text-center py-24">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
                     <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                     </svg>
                  </div>
                  <p className="text-gray-500 italic">O carrinho está vazio.</p>
                </div>
              ) : (
                <ul className="divide-y divide-white/5">
                  {cart.map((item) => (
                    <li key={item.id} className="py-6 flex items-center">
                      <div className="flex-shrink-0 w-20 h-20 bg-black/40 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden">
                        {item.imageUrl ? (
                          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain p-2" />
                        ) : (
                          <span className="text-2xl font-bold text-gray-700">{item.name.charAt(0)}</span>
                        )}
                      </div>
                      <div className="ml-4 flex-1 flex flex-col">
                        <div className="flex justify-between text-base font-bold text-white">
                          <h3>{item.name}</h3>
                          <p className="ml-4 text-purple-400">{formatPrice(item.price * item.quantity)}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                           <div className="flex items-center space-x-2">
                              <span className="text-[10px] text-gray-500 uppercase font-bold border border-white/5 px-1.5 py-0.5 rounded">{item.rarity}</span>
                              <span className="text-xs text-gray-400">Qtd: {item.quantity}</span>
                           </div>
                           <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs font-bold text-red-500/50 hover:text-red-500 transition-colors uppercase tracking-tighter"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {cart.length > 0 && (
            <div className="border-t border-white/5 py-8 px-4 sm:px-6 bg-black">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-gray-500">
                  <p>Subtotal</p>
                  <p>{formatPrice(totalPrice)}</p>
                </div>
                <div className="flex justify-between text-xl font-black text-white">
                  <p>Total Estimado</p>
                  <p>{formatPrice(totalPrice)}</p>
                </div>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    id="refund-term" 
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-gray-700 bg-gray-900 text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="refund-term" className="text-[11px] text-gray-400 leading-tight cursor-pointer">
                    Estou ciente que <span className="text-red-400 font-bold uppercase underline">não haverá reembolso</span> após a entrega/trade do item. No ticket do Discord, informarei meu <span className="text-white font-bold">Nick</span> e o <span className="text-white font-bold">Assunto</span> da compra.
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={handleCheckout}
                  disabled={!acceptedTerms}
                  className={`w-full flex justify-center items-center px-6 py-4 rounded-2xl shadow-xl text-md font-black text-white transition-all transform active:scale-95 ${
                    acceptedTerms ? 'bg-purple-600 hover:bg-purple-700 hover:scale-[1.02]' : 'bg-gray-800 cursor-not-allowed grayscale'
                  }`}
                >
                  Finalizar Pedido no Discord
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs font-bold text-gray-600 hover:text-gray-400 py-2 transition-colors"
                >
                  Esvaziar Carrinho
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
