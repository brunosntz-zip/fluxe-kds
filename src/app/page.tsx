import OrderCard from "@/components/OrderCard";

// NOSSO MOCK (Dados de mentirinha simulando o Django)
const mockPedidos = [
  {
    id: '#0041',
    status: 'PENDENTE',
    tipo_entrega: 'MESA',
    // Coloquei a data de criação pra 15 minutos atrás pra você ver o aviso de atraso funcionando!
    criado_em: new Date(Date.now() - 15 * 60000).toISOString(), 
    mesa: { numero: '01' },
    comanda: { cliente: { nome: 'Bruno', cpf: '12345678901' } },
    item_pedido: [
      { nome_produto_snapshot: 'Caipirinha Limão', quantidade: 2 },
      { nome_produto_snapshot: 'Whisky Double', quantidade: 1, observacao: 'Sem Gelo' },
      { nome_produto_snapshot: 'Água sem gás', quantidade: 1 }
    ]
  },
  {
    id: '#0042',
    status: 'EM_PREPARO',
    tipo_entrega: 'RETIRADA',
    criado_em: new Date(Date.now() - 4 * 60000).toISOString(), // 4 minutos atrás
    comanda: { cliente: { nome: 'Daniel', cpf: '98765432100' } },
    item_pedido: [
      { nome_produto_snapshot: 'Gin Tônica', quantidade: 1, observacao: 'Zimbro' },
      { nome_produto_snapshot: 'Mojito', quantidade: 1 }
    ]
  },
  {
    id: '#0043',
    status: 'PENDENTE',
    tipo_entrega: 'MESA',
    criado_em: new Date(Date.now() - 2 * 60000).toISOString(), // 2 minutos atrás
    mesa: { numero: '08' },
    comanda: { cliente: { nome: 'Arthur', cpf: '45678912333' } },
    item_pedido: [
      { nome_produto_snapshot: 'Negroni', quantidade: 1 },
      { nome_produto_snapshot: 'Vodka Cranberry', quantidade: 1, observacao: 'Sem açúcar' }
    ]
  }
];

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
            <span className="text-4xl text-status-yellow">1</span>
          </div>
        </div>

        <div className="text-4xl font-bold font-mono">
          {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </header>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Lado Esquerdo: Área dos Pedidos */}
        <div className="flex-1 p-6 overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            
            {/* A MÁGICA ACONTECE AQUI: Ele lê a lista de mentirinha e cria um Card pra cada um */}
            {mockPedidos.map((pedido) => (
              <OrderCard key={pedido.id} pedido={pedido} />
            ))}

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
        </aside>

      </div>
    </main>
  );
}