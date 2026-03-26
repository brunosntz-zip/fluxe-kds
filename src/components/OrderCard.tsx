import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// Aqui é o formato do dado que vai vir do seu Django depois
type PedidoProps = {
  id: string;
  status: string; 
  tipo_entrega: string; 
  criado_em: string;
  mesa?: { numero: string };
  comanda: { cliente: { nome: string, cpf: string } };
  item_pedido: Array<{
    nome_produto_snapshot: string;
    quantidade: number;
    observacao?: string;
  }>;
};

export default function OrderCard({ pedido }: { pedido: PedidoProps }) {
  // Mascarando o CPF
  const cpfOriginal = pedido.comanda.cliente.cpf;
  const cpfMascarado = `***.${cpfOriginal.slice(3, 6)}.***-${cpfOriginal.slice(-2)}`;

  // Calculando o tempo de atraso sozinho
  const tempoAtraso = formatDistanceToNow(new Date(pedido.criado_em), { locale: ptBR });
  
  const isRetirada = pedido.tipo_entrega === 'RETIRADA';
  const isPendente = pedido.status === 'PENDENTE';
  
  // Regra de cores
  const headerColor = isPendente ? 'bg-status-red' : (isRetirada ? 'bg-status-green' : 'bg-status-yellow');
  const actionButtonColor = isPendente ? 'bg-action-blue' : (isRetirada ? 'bg-status-green' : 'bg-status-yellow');
  const actionButtonText = isPendente ? 'INICIAR' : (isRetirada ? 'RETIRAR' : 'FINALIZAR');

  // Regra de piscar vermelho se passar de 10 minutos (600000 milissegundos)
  const tempoMilisegundos = new Date().getTime() - new Date(pedido.criado_em).getTime();
  const isAtrasado = tempoMilisegundos > 600000 && isPendente;

  return (
    <div className={`bg-fluxe-card border rounded-xl overflow-hidden flex flex-col shadow-xl ${isAtrasado ? 'border-status-red animate-pulse' : 'border-gray-800'}`}>
      
      <div className={`${headerColor} p-3 flex justify-between items-start`}>
        <div>
          <h3 className="text-2xl font-bold uppercase">
            {isRetirada ? `BALCÃO (RETIRADA)` : `MESA ${pedido.mesa?.numero}`}
          </h3>
          <p className="text-white/80 text-sm font-medium">
            ID: {pedido.id} • CPF: {cpfMascarado}
          </p>
        </div>
        <div className="flex items-center gap-1 font-bold text-xl">
          <span>⏱</span> {tempoAtraso}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col gap-4">
        {pedido.item_pedido.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-3xl font-bold leading-tight">
              {item.quantidade}x {item.nome_produto_snapshot}
            </span>
            {item.observacao && (
              <span className="text-status-yellow font-bold text-xl mt-1">
                *{item.observacao}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 pt-0">
        <button className={`w-full py-4 rounded-lg text-2xl font-black uppercase tracking-wider ${actionButtonColor} active:scale-95 transition-transform`}>
          {actionButtonText}
        </button>
      </div>

    </div>
  );
}