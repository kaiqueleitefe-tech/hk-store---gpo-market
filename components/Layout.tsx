
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();
  const DISCORD_LINK = "https://discord.gg/jXaYterhS2";

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Promoções', path: '/promotions', highlight: true },
    { name: 'Loja', path: '/shop' },
    { name: 'Vender Itens', path: '/sell' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <CartDrawer />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-white">
              HK<span className="text-purple-500">STORE</span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  location.pathname === item.path
                    ? 'text-white'
                    : item.highlight ? 'text-orange-400 hover:text-orange-300' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.highlight && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.334-.398-1.817a1 1 0 00-1.514-.857 4.028 4.028 0 00-1.888 3.307c0 2.242 1.358 4.416 2.98 5.71a8.116 8.116 0 005.23 1.856 8.116 8.116 0 005.23-1.856c1.622-1.294 2.98-3.468 2.98-5.71a4.028 4.028 0 00-1.888-3.307 1 1 0 00-1.514.857c0 .483-.07 1.137-.398 1.817a2.64 2.64 0 01-.945 1.067 31.376 31.376 0 00-.613-3.58c-.226-.966-.506-1.93-.84-2.734a12.192 12.192 0 00-.57-1.116 8.005 8.005 0 00-.822-.88z" clipRule="evenodd" />
                  </svg>
                )}
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
             <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-3 text-gray-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-2xl flex items-center gap-2 border border-white/5"
             >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-xs font-bold hidden sm:block">CARRINHO</span>
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white shadow-lg animate-in fade-in scale-in duration-200">
                    {totalItems}
                  </span>
                )}
             </button>

             <div className="h-6 w-[1px] bg-white/10 hidden sm:block mx-2"></div>

             <a 
              href={DISCORD_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-black rounded-full transition-all uppercase tracking-widest shadow-lg shadow-purple-900/20"
             >
               Suporte
             </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">HK STORE</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                A loja número #1 para aventureiros de Grand Piece Online. Qualidade, segurança e os melhores preços.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navegação</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
                <li><Link to="/promotions" className="hover:text-white transition-colors">Promoções</Link></li>
                <li><Link to="/shop" className="hover:text-white transition-colors">Toda a Loja</Link></li>
                <li><Link to="/sell" className="hover:text-white transition-colors">Venda para nós</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contato</h4>
              <p className="text-sm text-gray-500">
                <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Entre no nosso Discord
                </a><br />
                Atendimento via Ticket 24/7.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Hk Store. Não afiliado ao Roblox ou GPO.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
