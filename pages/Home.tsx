
import React from 'react';
import { Link } from 'react-router-dom';
import { GPO_DATA, FEEDBACK_DATA } from '../constants';
import ItemCard from '../components/ItemCard';
import FeedbackCard from '../components/FeedbackCard';

const Home: React.FC = () => {
  const featuredItems = GPO_DATA.filter(item => item.rarity === 'Mythical').slice(0, 4);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[1.1] mb-6">
              O seu arsenal definitivo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">GPO</span> começa aqui.
            </h1>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
              Frutas Míticas, Itens Lendários e Armas de Elite. Tudo o que você precisa para dominar os mares em Hk Store.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-purple-900/20">
                Ver Loja Completa
              </Link>
              <Link to="/sell" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/10">
                Vender Meus Itens
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Destaques Míticos</h2>
            <p className="text-gray-500">Os itens mais raros e poderosos do momento.</p>
          </div>
          <Link to="/shop" className="text-sm font-semibold text-purple-400 hover:text-purple-300">
            Ver todos &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Categories Fast Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-2">Akuma no Mi</h3>
              <p className="text-gray-400 text-sm mb-6">De Logias a Mythical Zoans, encontre sua fruta ideal.</p>
              <Link to="/shop?cat=Fruits" className="text-purple-400 font-bold text-sm">Explorar Frutas &rarr;</Link>
           </div>
           <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-900/20 to-transparent border border-white/5 hover:border-orange-500/30 transition-all cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-2">Items & Roupas</h3>
              <p className="text-gray-400 text-sm mb-6">Buffs insanos e aparências lendárias como All Seeing Eye.</p>
              <Link to="/shop?cat=Items" className="text-orange-400 font-bold text-sm">Explorar Itens &rarr;</Link>
           </div>
           <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-transparent border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-2">Armas</h3>
              <p className="text-gray-400 text-sm mb-6">Domine o PvP com Kikoku, Dark Blade e muito mais.</p>
              <Link to="/shop?cat=Weapons" className="text-blue-400 font-bold text-sm">Explorar Armas &rarr;</Link>
           </div>
        </div>
      </section>

      {/* Feedbacks Section */}
      <section className="bg-white/[0.02] py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 italic tracking-tight">O que nossos aventureiros dizem</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Mais de 500+ trades realizadas com segurança absoluta. Veja a opinião de quem já comprou conosco.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEEDBACK_DATA.map((fb) => (
              <FeedbackCard key={fb.id} feedback={fb} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Suporte via Ticket no Discord 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/5 rounded-[40px] p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Tem itens sobrando?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Compramos suas frutas e itens raros por um preço justo. Entre em contato e venda para nós hoje mesmo.</p>
          <Link to="/sell" className="inline-block px-10 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all">
            Falar com Vendedor
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
