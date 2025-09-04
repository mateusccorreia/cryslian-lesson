import { useState } from "react";
// Ajuste a importação dos seus ícones
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- IMPORTE AS IMAGENS AQUI ---
import print1 from "../assets/comment-3.png";
import print2 from "../assets/comment-2-m.jpg";
import print3 from "../assets/comment-4.png";
import print4 from "../assets/comment-3.png";
import print5 from "../assets/comment-2-m.jpg";
import print6 from "../assets/comment-4.png";

// 1. IMPORTE A IMAGEM DE FUNDO
// (Lembre-se de ajustar o caminho e o nome do arquivo)
import fundoDepoimentos from "../assets/acustic-guitar-horizontal.jpg";

export default function Testimonials() {
  const prints = [print1, print2, print3, print4, print5, print6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prints.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === prints.length - 1 ? 0 : prevIndex + 1
    );
  };

  // --- CONFIGURAÇÃO DA IMAGEM DE FUNDO E MÁSCARA ---
  // 2. A VARIÁVEL AGORA USA A IMAGEM IMPORTADA
  const imgBackground_dep = fundoDepoimentos;

  const sectionStyle = {
    backgroundImage: `
      linear-gradient(rgba(10, 18, 27, 0.85), rgba(10, 18, 27, 0.85)),
      url(${imgBackground_dep})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
  };

  return (
    <section className="py-16" style={sectionStyle}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Quem já fez recomenda
        </h2>

        {/* Grid para Desktop (md e acima) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {prints.map((print, index) => (
            <div
              key={index}
              className="h-76 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-300 bg-white backdrop-blur-sm border border-gray-700 flex items-center justify-center"
            >
              <img
                src={print}
                alt={`Depoimento de aluno ${index + 1}`}
                className="w-full h-full object-contain p-4"
              />
            </div>
          ))}
        </div>

        {/* Carrossel para Mobile (abaixo de md) */}
        <div className="md:hidden relative w-full max-w-xs mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {prints.map((print, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 bg-white backdrop-blur-sm border border-gray-700 rounded-lg flex items-center justify-center p-4"
                  style={{ height: "18rem" }}
                >
                  <img
                    src={print}
                    alt={`Depoimento de aluno ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Setas de Navegação */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-yellow-400 text-white hover:text-gray-900 p-2 rounded-full transition-all z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-yellow-400 text-white hover:text-gray-900 p-2 rounded-full transition-all z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
