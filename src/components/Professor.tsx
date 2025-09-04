import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ... (importações das imagens permanecem as mesmas)
import profImg1 from "../assets/new-picture/img-01.jpg";
import profImg2 from "../assets/new-picture/img-021.jpg";
import profImg3 from "../assets/new-picture/img-03.jpg";
import profImg4 from "../assets/new-picture/img-04.jpg";
import profImg5 from "../assets/guitar-horizontal-tres.jpg";
import profImg6 from "../assets/guitar-default.jpg";
import profImg7 from "../assets/new-picture/img-08.jpg";
import profImg8 from "../assets/acustic-guitar-horizontal.jpg";
import profImg9 from "../assets/guitar-vertical.jpg";
import profImg10 from "../assets/new-picture/img-05.jpg";
import profImg11 from "../assets/new-picture/img-06.jpg";
import profImg12 from "../assets/new-picture/img-07.jpg";

const professorImages = [
  profImg1,
  profImg2,
  profImg3,
  profImg4,
  profImg5,
  profImg6,
  profImg7,
  profImg8,
  profImg9,
  profImg10,
  profImg11,
  profImg12,
];

const AUTO_SLIDE_INTERVAL = 2000;

export default function ProfessorCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = professorImages.length - slidesPerView;
  const numDots = Math.ceil(professorImages.length / slidesPerView);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : maxIndex
    );
  };

  const goToSlide = (dotIndex: number) => {
    const newIndex = dotIndex * slidesPerView;
    setCurrentIndex(Math.min(newIndex, maxIndex));
  };

  useEffect(() => {
    if (isPaused) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < maxIndex ? prevIndex + 1 : 0
      );
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(slideInterval);
  }, [currentIndex, isPaused, maxIndex]);

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-12 my-10 px-4">
      {/* Seção de Texto Superior (inalterada) */}
      <div className="w-full grid md:grid-cols-2 gap-8 md:gap-12">
        {/* ... (código do texto permanece aqui, omitido por brevidade) ... */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-yellow-400 tracking-wider mb-2 uppercase">
            Quem é Gabriel Cryslian?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Aprenda com quem vive a música
          </h2>
        </div>
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
      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / slidesPerView)
              }%)`,
            }}
          >
            {professorImages.map((src, index) => (
              <div
                key={index}
                style={{ flex: `0 0 ${100 / slidesPerView}%` }}
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

        {/* CÓDIGO DAS SETAS DE NAVEGAÇÃO RESTAURADO */}
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
          disabled={currentIndex >= maxIndex} // Usar >= para desabilitar corretamente no último slide
        >
          <ChevronRight size={28} />
        </button>

        {/* Marcadores de navegação */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
          {Array.from({ length: numDots }).map((_, index) => {
            const isActive = Math.floor(currentIndex / slidesPerView) === index;

            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para o slide ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-4 bg-yellow-400"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
