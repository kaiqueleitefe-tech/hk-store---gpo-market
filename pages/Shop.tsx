
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GPO_DATA } from '../constants';
import ItemCard from '../components/ItemCard';
import { Category, Rarity } from '../types';

const Shop: React.FC = () => {
  const location = useLocation();
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const [rarityFilter, setRarityFilter] = useState<Rarity | 'All'>('All');
  const [search, setSearch] = useState('');

  const categoryLabels: Record<Category | 'All', string> = {
    'All': 'Todos',
    'Fruits': 'Frutas',
    'Items': 'Itens',
    'Weapons': 'Armas',
    'Armor': 'Outfits',
    'Accessories': 'Acessórios',
    'Baits': 'Iscas'
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat') as Category;
    if (cat) setFilter(cat);
  }, [location.search]);

  const filteredItems = GPO_DATA.filter(item => {
    const matchesCategory = filter === 'All' || item.category === filter;
    const matchesRarity = rarityFilter === 'All' || item.rarity === rarityFilter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesRarity && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Banner de Aviso de Reembolso */}
      <div className="mb-10 bg-red-950/20 border border-red-500/20 rounded-3xl p-6 flex items-center space-x-6">
        <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h3 className="text-red-400 font-bold text-sm uppercase tracking-widest">Política de Reembolso</h3>
          <p className="text-gray-400 text-sm mt-1">
            AVISO: Devido à natureza digital das trades em GPO, <span className="text-white font-bold">não realizamos reembolsos</span> após a entrega do item. Certifique-se do seu pedido antes de finalizar.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Catálogo Hk Store</h1>
        <p className="text-gray-500">Explore todos os nossos itens e frutas disponíveis.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-8">
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Busca</h3>
            <input 
              type="text" 
              placeholder="Ex: Ope Ope..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Categorias</h3>
            <div className="space-y-2">
              {(Object.keys(categoryLabels) as (Category | 'All')[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    filter === cat 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-500 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Raridade</h3>
            <div className="space-y-2">
              {['All', 'Mythical', 'Legendary', 'Epic'].map((rarity) => (
                <button
                  key={rarity}
                  onClick={() => setRarityFilter(rarity as any)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    rarityFilter === rarity 
                    ? 'bg-white/10 text-white border border-white/10' 
                    : 'text-gray-500 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {rarity === 'All' ? 'Todas' : rarity}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Grid Content */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-3xl">
                <p className="text-gray-500 italic">Nenhum item encontrado com esses filtros.</p>
                <button 
                  onClick={() => {setFilter('All'); setRarityFilter('All'); setSearch('');}}
                  className="mt-4 text-purple-400 font-bold hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
