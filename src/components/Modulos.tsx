import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
// --- ESTILO DO BACKGROUND ---
// 1. URL DA IMAGEM DE FUNDO (COLOQUE A SUA AQUI)
// import backgroundImageModulos from "../assets/acustic-guitar-horizontal.jpg";

// --- DADOS DOS MÓDULOS ---
const modulosData = [
  {
    titulo: "Primeiros Passos",
    descricao:
      "Aprenda os conceitos fundamentais para começar no violão: postura, partes do instrumento, como segurar e dedilhar as cordas.",
  },
  {
    titulo: "Afinação e Primeiros Acordes",
    descricao:
      "Descubra como afinar seu violão corretamente e toque seus primeiros acordes para começar a formar músicas simples.",
  },
  {
    titulo: "Ritmo e Coordenação com Metrônomo",
    descricao:
      "Desenvolva sua noção rítmica, coordenação entre as mãos e pratique sua primeira música completa com metrônomo.",
  },
  {
    titulo: "Dedilhado, Teoria Básica e Prática",
    descricao:
      "Desenvolva exercícios de dedilhado, entenda noções iniciais de escalas e pratique sua segunda música.",
  },
  {
    titulo: "Digitação, Teoria e Revisão",
    descricao:
      "Melhore a digitação da mão esquerda, aprofunde-se em acordes maiores e menores, pratique sua terceira música e revise os aprendizados do Nível 1.",
  },
  {
    titulo: "Início do Nível 2 - Novo Ritmo (Rock)",
    descricao:
      "Aprenda a levada de Rock, compreenda o compasso e sua contagem de tempo, treinando sempre com metrônomo.",
  },
  {
    titulo: "Acordes com Pestana sem Medo",
    descricao:
      "Descubra técnicas práticas para tocar pestanas com facilidade, obtendo um som limpo e definido sem esforço excessivo.",
  },
  {
    titulo: "Ritmo Rock na Prática",
    descricao:
      "Coloque em prática o ritmo Rock na sua quarta música, consolidando o aprendizado das pestanas.",
  },
  {
    titulo: "Novos Acordes e Nova Música",
    descricao:
      "Aprenda novos acordes e aplique-os na sua quinta música, expandindo suas possibilidades musicais.",
  },
  {
    titulo: "Expandindo o Repertório",
    descricao:
      "Amplie seu repertório de acordes e músicas, incluindo sua sexta música completa.",
  },
  {
    titulo: "Variação de Ritmo e Primeiro Solo",
    descricao:
      "Explore variações rítmicas para enriquecer o acompanhamento, aprenda sua sétima música e dê os primeiros passos nos solos de violão.",
  },
  {
    titulo: "Nova Variação Rítmica e Prática",
    descricao:
      "Adicione uma nova variação rítmica ao seu estilo e pratique sua oitava música.",
  },
  {
    titulo: "Novo Ritmo - Balada",
    descricao:
      "Aprenda a levada de Balada e aplique esse ritmo na sua nona música, fortalecendo sua base e repertório.",
  },
  {
    titulo: "Acordes com Sétima na Prática",
    descricao:
      "Estude os acordes com sétima e pratique-os na sua décima música, unindo harmonia e ritmo.",
  },
  {
    titulo: "Variação Rítmica na Balada",
    descricao:
      "Torne seu acompanhamento mais dinâmico praticando uma variação da levada Balada na sua décima primeira música.",
  },
  {
    titulo: "Uso da Palheta - Técnicas e Exercícios",
    descricao:
      "Aprenda a usar a palheta corretamente, com dicas e exercícios que melhoram a precisão, a pegada e a sonoridade.",
  },
  {
    titulo: "Alternando Levadas na Prática",
    descricao:
      "Desenvolva fluidez e versatilidade praticando a alternância entre levadas na sua décima segunda música.",
  },
];

export default function Modulos() {
  // --- LÓGICA DO CARROSSEL ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      // Define quantos cards são visíveis por vez
      const newItemsPerPage = window.innerWidth < 768 ? 1 : 3;
      setItemsPerPage(newItemsPerPage);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    const limit = modulosData.length - itemsPerPage;
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, limit));
  };

  // 2. ESTILO DO BACKGROUND COM SOBREPOSIÇÃO
  // Este objeto cria um gradiente escuro sobre a imagem para garantir que o texto seja legível
  const sectionStyle = {
    // backgroundImage: `
    //   linear-gradient(rgba(10, 18, 27, 0.85), rgba(10, 18, 27, 0.85)),
    //   url(${backgroundImageModulos})
    // `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="py-16" style={sectionStyle}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          O que você vai aprender
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                // A largura total do trilho é calculada para todos os cards
                width: `${(100 / itemsPerPage) * modulosData.length}%`,
                // O deslocamento é calculado com base no card atual e na largura de um único card
                transform: `translateX(-${
                  currentIndex * (100 / modulosData.length)
                }%)`,
              }}
            >
              {modulosData.map((modulo, i) => (
                <div
                  key={i}
                  className="w-full px-4"
                  // A base de cada card é calculada para caber no trilho
                  style={{ flexBasis: `${100 / modulosData.length}%` }}
                >
                  <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg h-full text-left flex flex-col">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">
                      Módulo {i + 1}: {modulo.titulo}
                    </h3>
                    <p className="text-gray-300 text-sm flex-grow">
                      {modulo.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão Anterior */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute top-1/2 left-2 -translate-y-1/2 -translate-x-4 bg-gray-800/80 hover:bg-yellow-400 text-white hover:text-gray-900 rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= modulosData.length - itemsPerPage}
            className="absolute top-1/2 right-2 -translate-y-1/2 translate-x-4 bg-gray-800/80 hover:bg-yellow-400 text-white hover:text-gray-900 rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
