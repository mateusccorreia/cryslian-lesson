import React from "react";
import { ArrowRight } from "lucide-react";
import miniLogo from "../assets/logo.png";

// Definindo a interface de tipos para as props do componente
interface InscricaoCardProps {
  preco: string;
  parcelas: number;
}

// Tipando o componente como React.FC (Functional Component) com as props definidas
const InscricaoCard: React.FC<InscricaoCardProps> = ({ preco, parcelas }) => {
  return (
    // Card principal com fundo escuro e bordas arredondadas
    <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-8 max-w-sm mx-auto text-center flex flex-col items-center">
      {/* Espaço para a Logo */}
      <div className="w-24 h-12 mb-6 rounded flex items-center justify-center">
        <img src={miniLogo} alt="mini-logo" />
      </div>

      {/* Texto "Por apenas:" */}
      <p className="text-gray-300 text-lg mb-2">Por apenas:</p>

      {/* Preço em destaque */}
      <div className="mb-8">
        <span className="text-5xl md:text-6xl font-bold text-white">
          {parcelas}x de
        </span>
        <span className="text-5xl md:text-6xl font-bold text-yellow-400 ml-2">
          R$ {preco}
        </span>
        <p className="pt-3">
          ou à vista por <b>R$ 197,00</b>
        </p>
      </div>

      {/* Botão de Ação */}
      <a
        href="#inscricao"
        className="w-full bg-yellow-400 text-black px-6 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center justify-center space-x-2"
      >
        <ArrowRight size={24} />
        <span>QUERO EVOLUIR AGORA</span>
      </a>
    </div>
  );
};

// Exemplo de como usar o componente no seu App.tsx
const ExemploDeUso: React.FC = () => {
  return (
    <div className="bg-black p-10">
      <InscricaoCard parcelas={12} preco="16,42" />
    </div>
  );
};

export default InscricaoCard;
