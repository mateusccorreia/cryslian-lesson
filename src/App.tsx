// src/App.jsx
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Ícones para as setas
// import musicoProfile from "../src/assets/ago-25-recorte.png";
import AboutClass from "../src/components/About";
import InscricaoCard from "../src/components/incricaoCard";
import Garantia from "./components/Garantia";

//IMPORTANDO IMAGENS
// import musicoImage from "../src/assets/guitar-default.jpg";

//IMPORTANDO A LOGO
import logoGC from "../src/assets/logo-dois - cortada.png";

// IMPORTE AS IMAGENS DOS SEUS PRINTS AQUI
import print1 from "../src/assets/comment-3.png";
import print2 from "../src/assets/comment-2-m.jpg";
import print3 from "../src/assets/comment-4.png";
import print4 from "../src/assets/comment-3.png";
import print5 from "../src/assets/comment-2-m.jpg";
import print6 from "../src/assets/comment-4.png";
import ProfessorCarousel from "./components/Professor";

export default function App() {
  // Estado para controlar o slide atual do carrossel mobile
  const [currentIndex, setCurrentIndex] = useState(0);

  const faqs = [
    {
      pergunta: "Preciso ter violão para começar?",
      resposta:
        "Sim, é importante ter um violão para praticar junto com as aulas.",
    },
    {
      pergunta: "O curso é para iniciantes?",
      resposta:
        "Sim, o curso foi pensado para iniciantes absolutos. Ele também é ótimo para quem já tem alguma experiência e quer aprimorar a técnica.",
    },
    {
      pergunta: "Terei suporte para tirar dúvidas?",
      resposta:
        "Sim, você terá acesso a um canal exclusivo para alunos onde você pode interagir com o professor e com os outros alunos, tirando dúvidas e trocando experiências.",
    },
    {
      pergunta: "Qual o formato das aulas?",
      resposta:
        "O curso é todo em videoaulas, com materiais de apoio em PDF para download. Assim, você pode praticar e acompanhar o conteúdo no seu próprio ritmo.",
    },
    {
      pergunta: "Por quanto tempo terei acesso?",
      resposta:
        "O acesso é de 1 ano. Depois desse período, você pode renová-lo com um desconto especial para alunos.",
    },
    {
      pergunta: "Posso parcelar a compra?",
      resposta: "Sim, você pode parcelar a compra em até 12 vezes.",
    },
  ];

  const prints = [print1, print2, print3, print4, print5, print6]; // Array com os prints

  // Funções para navegação do carrossel
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? prints.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === prints.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-gray-800 to-black">
        {/* ESPAÇO PARA A LOGO */}
        <img
          src={logoGC}
          alt="Logo do Curso"
          className="h-32 md:h-48 mx-auto mb-3 mt-3"
        />

        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
          Aprenda a tocar com confiança,{" "}
          <span className="text-yellow-400">dominando acordes</span> e ritmos de{" "}
          <span className="text-yellow-400"> diversos estilos.</span>
        </h2>
        <p className="text-lg mb-6">
          Assista ao vídeo para entender como funciona
        </p>
        <div className="aspect-video w-full max-w-3xl mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/GuUYTp_w4e4"
            title="Violão Seis Cordas"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <a
          href="#inscricao"
          className="bg-yellow-400 text-black px-4 py-3 md:px-6 md:py-3 mb-8 rounded-lg font-bold text-base md:text-lg hover:bg-yellow-300 transition"
        >
          EU QUERO EVOLUIR NO VIOLÃO
        </a>
      </section>

      {/* COMPONENTE SOBRE*/}
      <AboutClass />

      {/* DEPOIMENTOS */}
      <section className="py-8 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quem já fez recomenda
          </h2>

          {/* Grid para Desktop (md e acima) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {prints.map((print, index) => (
              <div
                key={index}
                className="h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-300 bg-white flex items-center justify-center"
              >
                <img
                  src={print}
                  alt={`Depoimento de aluno ${index + 1}`}
                  className="w-full h-full object-contain"
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
                  <img
                    key={index}
                    src={print}
                    alt={`Depoimento de aluno ${index + 1}`}
                    className="w-full flex-shrink-0"
                  />
                ))}
              </div>
            </div>

            {/* Setas de Navegação */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-3 transform -translate-y-1/2 text-black p-2 rounded-full"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-black p-2 rounded-full"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section
        className="py-10 bg-gray-950"
        // style={{ backgroundImage: `url(${musicoImage})` }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">O que você vai aprender</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Fundamentos do violão: postura, afinação e primeiros acordes.",
              "Ritmos populares e batidas simples.",
              "Técnicas de mão direita e transições de acordes.",
              "Leitura rítmica e acompanhamento.",
              "Músicas práticas para destravar.",
              "Como estudar sozinho e continuar evoluindo.",
            ].map((m, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 rounded-xl shadow text-sm"
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  Módulo {i + 1}
                </h3>
                <p>{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProfessorCarousel />

      {/* PROFESSOR
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={musicoProfile}
            alt="Gabriel Cryslian"
            className="rounded-xl shadow-lg w-full object-cover max-h-[500px]"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Quem é Gabriel Cryslian?
            </h2>
            <p className="text-lg mb-4">
              Gabriel Cryslian é músico profissional, multi-instrumentista e
              educador musical, com mais de 15 anos de experiência.
            </p>
            <p className="text-lg mb-4">
              Ao longo de sua trajetória, atuou em bandas, gravações e eventos,
              desenvolvendo um trabalho versátil e consistente. Especialista em
              violão (6 e 7 cordas), guitarra, flauta e outros instrumentos,
              oferece aulas presenciais e on-line — individuais ou em grupo —
              adaptadas a diferentes idades, níveis de conhecimento e contextos
              socioculturais.
            </p>
            <p className="text-yellow-400 font-bold">
              “Qualquer pessoa pode aprender música. Só precisa de orientação e
              constância.”
            </p>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-10 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
              >
                <h3 className="font-bold text-yellow-400">{f.pergunta}</h3>
                <p className="mt-2 text-gray-300">{f.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE INSCRIÇÃO (ANTIGA PLANOS) */}
      <section id="inscricao" className="py-10 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Garanta sua vaga agora</h2>
          <InscricaoCard parcelas={12} preco="16,42" />
        </div>
      </section>

      <Garantia />

      {/* RODAPÉ */}
      <footer className="py-6 bg-gray-900 text-center text-sm text-gray-400">
        © 2025 Gabriel Cryslian. Todos os direitos reservados.
      </footer>
    </div>
  );
}
