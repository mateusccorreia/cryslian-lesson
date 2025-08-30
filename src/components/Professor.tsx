import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import profImg1 from "../assets/guitar-default.jpg";
import profImg2 from "../assets/acustic-guitar-horizontal.jpg";
import profImg3 from "../assets/guitar-vertical-dois.jpg";
import profImg4 from "../assets/guitar-vertical.jpg";
import profImg5 from "../assets/guitar-horizontal-tres.jpg";

const professorImages = [profImg1, profImg2, profImg3, profImg4, profImg5];

const SLIDES_PER_VIEW = 3;

export default function ProfessorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const nextSlide = () => {
    const maxIndex = professorImages.length - SLIDES_PER_VIEW;
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : maxIndex
    );
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-12 my-10 px-4">
      {/* Seção de Texto Superior */}
      <div className="w-full grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Coluna Esquerda: Títulos */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-yellow-400 tracking-wider mb-2 uppercase">
            Quem é Gabriel Cryslian?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Aprenda com quem vive a música
          </h2>
        </div>

        {/* Coluna Direita: Descrição */}
        <div className="text-center md:text-left text-lg text-gray-300 space-y-4">
          <p>
            Gabriel Cryslian é músico profissional, multi-instrumentista e
            educador musical, com mais de 15 anos de experiência.
          </p>
          <p>
            Ao longo de sua trajetória, atuou em bandas, gravações e eventos,
            desenvolvendo um trabalho versátil e consistente. Especialista em
            violão (6 e 7 cordas), guitarra, flauta e outros instrumentos.
          </p>
          <p className="text-yellow-400 font-bold pt-2">
            “Qualquer pessoa pode aprender música. Só precisa de orientação e
            constância.”
          </p>
        </div>
      </div>

      {/* Seção do Carrossel Inferior */}
      <div className="relative w-full">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / SLIDES_PER_VIEW)
              }%)`,
            }}
          >
            {professorImages.map((src, index) => (
              <div
                key={index}
                style={{ flex: `0 0 ${100 / SLIDES_PER_VIEW}%` }}
                className="px-2"
              >
                <img
                  src={src}
                  alt={`Foto do professor Gabriel ${index + 1}`}
                  className="w-full rounded-xl object-cover aspect-square shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Setas de Navegação */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-3 md:-left-5 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 hover:bg-opacity-100 text-white p-2 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Foto anterior"
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-3 md:-right-5 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 hover:bg-opacity-100 text-white p-2 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Próxima foto"
          disabled={currentIndex === professorImages.length - SLIDES_PER_VIEW}
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
