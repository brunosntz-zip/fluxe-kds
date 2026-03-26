export default function KDSHome() {
  return (
    <main className="flex flex-col h-screen w-full overflow-hidden">
      
      {/* 1. HEADER FIXO */}
      <header className="h-24 border-b border-gray-800 flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-action-blue rounded flex items-center justify-center font-bold text-2xl">F</div>
          <h1 className="text-2xl font-bold tracking-widest">FLUXE KDS</h1>
        </div>
        
        <div className="flex gap-12 font-bold text-xl uppercase">
          <div className="flex flex-col items-center">
            <span className="text-status-red text-sm tracking-wider mb-1">Novos</span>
            <span className="text-4xl text-status-red">2</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-status-yellow text-sm tracking-wider mb-1">Preparo</span>
            <span className="text-4xl text-status-yellow">3</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-status-green text-sm tracking-wider mb-1">Prontos</span>
            <span className="text-4xl text-status-green">1</span>
          </div>
        </div>

        <div className="text-4xl font-bold font-mono">
          20:08
        </div>
      </header>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Lado Esquerdo: Área dos Pedidos */}
        <div className="flex-1 p-6 overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="h-[400px] border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center text-gray-500 text-xl font-bold">Área do Card 1</div>
            <div className="h-[400px] border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center text-gray-500 text-xl font-bold">Área do Card 2</div>
            <div className="h-[400px] border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center text-gray-500 text-xl font-bold">Área do Card 3</div>
            <div className="h-[400px] border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center text-gray-500 text-xl font-bold">Área do Card 4</div>
          </div>
        </div>

        {/* Lado Direito: Carga de Preparo */}
        <aside className="w-96 border-l border-gray-800 bg-[#121419] p-6 flex flex-col shrink-0 overflow-y-auto no-scrollbar">
          <h2 className="text-lg font-bold tracking-widest text-text-muted mb-8 uppercase border-b border-gray-800 pb-4">
            Carga de Preparo
          </h2>
          
          <div className="bg-fluxe-card border border-gray-800 rounded-lg p-5 flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-xl">🍷</span>
              <span className="font-semibold text-lg">Caipirinha Limão</span>
            </div>
            <span className="bg-badge-purple px-4 py-1 rounded-md font-bold text-lg">2</span>
          </div>

          <div className="bg-fluxe-card border border-gray-800 rounded-lg p-5 flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-xl">🥃</span>
              <span className="font-semibold text-lg">Whisky Double</span>
            </div>
            <span className="bg-badge-purple px-4 py-1 rounded-md font-bold text-lg">1</span>
          </div>
        </aside>

      </div>
    </main>
  );
}