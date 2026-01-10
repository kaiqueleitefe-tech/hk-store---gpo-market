
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, login } = useAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email, name);
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
        onClick={() => setIsLoginModalOpen(false)}
      ></div>
      
      <div className="relative w-full max-w-md bg-[#0f0f0f] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 p-8 md:p-10">
        <button 
          onClick={() => setIsLoginModalOpen(false)}
          className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
            <span className="text-2xl font-bold text-white">HK</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Bem-vindo à Hk Store</h2>
          <p className="text-gray-500 text-sm mt-2">Acesse sua conta para gerenciar seus pedidos.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Nome de Usuário</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como quer ser chamado?" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-all text-sm"
              />
            </div>
          )}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">E-mail</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Senha</label>
            <input 
              type="password" 
              required
              placeholder="••••••••" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-all text-sm"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-purple-900/20 mt-2"
          >
            {isRegister ? 'Criar Conta' : 'Entrar na Loja'}
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#0f0f0f] px-2 text-gray-600">Ou continue com</span></div>
          </div>

          <button className="w-full py-3.5 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2">
            Discord Login
          </button>

          <p className="text-sm text-gray-500">
            {isRegister ? 'Já possui conta?' : 'Ainda não é membro?'} 
            <button 
              onClick={() => setIsRegister(!isRegister)}
              className="ml-2 text-purple-400 font-bold hover:underline"
            >
              {isRegister ? 'Fazer Login' : 'Cadastre-se'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
