
import React from 'react';

const Sell: React.FC = () => {
  const DISCORD_LINK = "https://discord.gg/jXaYterhS2";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-[#111] border border-white/5 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Venda seus itens na <span className="text-purple-500">Hk Store</span></h1>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl">
            Temos interesse em Frutas Míticas, Lendárias, Armas Raras e Itens Limitados. Pagamos de forma rápida e segura para que você possa converter seu inventário em saldo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <h3 className="text-white font-bold mb-2">Processo Profissional</h3>
              <p className="text-sm text-gray-500">Utilizamos intermediários confiáveis ou gravação completa para garantir que ambas as partes estejam seguras.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <h3 className="text-white font-bold mb-2">Cotação Atualizada</h3>
              <p className="text-sm text-gray-500">Monitoramos os valores de trade do GPO em tempo real para oferecer o preço mais justo do mercado brasileiro.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-l-4 border-purple-500 pl-4">Como funciona o processo?</h3>
            <ol className="list-decimal list-inside text-gray-400 space-y-3 text-sm">
              <li>Entre no nosso Discord oficial através do botão abaixo.</li>
              <li>Navegue até o canal <span className="text-white font-medium">#vender-itens</span> e abra um ticket de suporte.</li>
              <li>Informe à nossa equipe quais frutas ou itens você deseja vender.</li>
              <li>Receba uma proposta baseada na raridade e demanda do item.</li>
              <li>Após o acordo, realizamos a trade in-game e o pagamento é feito imediatamente via PIX ou método de sua preferência.</li>
            </ol>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30"
            >
              Falar com um Comprador
            </a>
            <div className="text-xs text-gray-500 px-4 italic max-w-xs text-center md:text-left">
              *Atendimento prioritário para Frutas Míticas e Sets Lendários.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
