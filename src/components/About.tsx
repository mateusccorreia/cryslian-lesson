// 1. IMPORTAÇÃO DO REACT E DOS ÍCONES
import musicoImg from "../assets/guitar-horizontal-tres.jpg"; // ajuste o caminho se necessário
import {
  FileVideo,
  Calendar,
  Headphones,
  Smartphone,
  Layers,
  Users,
} from "lucide-react"; // <-- A IMPORTAÇÃO DOS ÍCONES ESTÁ AQUI

// 2. DEFINIÇÃO DO COMPONENTE
export default function Sobre() {
  const items = [
    { text: "Mais de 100 aulas gravadas", icon: FileVideo },
    { text: "Novas aulas todos os meses", icon: Calendar },
    { text: "Suporte exclusivo", icon: Headphones },
    { text: "Acesso em qualquer dispositivo", icon: Smartphone },
    { text: "Aulas para todos os níveis", icon: Layers },
    { text: "Comunidade para continuar evoluindo", icon: Users },
  ];

  return (
    <section
      className="relative w-full py-12 px-4 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${musicoImg})` }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gray-900/70 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Por que escolher nosso curso?
          </h2>
          <p className="text-gray-300">
            Curso online criado por um multi-instrumentista profissional,
            especializado em instrumentos de corda, para te fazer aprender mais
            rápido, entender os conceitos essenciais da música e tocar sua
            primeira música desde as primeiras aulas.
          </p>
        </div>

        {/* Layout de Grid Fixo e Responsivo com Ícones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/90 text-yellow-400 border border-gray-700 p-6 shadow-md rounded-lg
                         flex flex-col items-center justify-center text-center font-semibold 
                         transition-transform transform hover:scale-[1.03] hover:shadow-yellow-400/50"
            >
              {/* Ícone centralizado acima do texto */}
              <item.icon className="w-8 h-8 mb-2" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
