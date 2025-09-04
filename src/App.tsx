// src/App.jsx
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // Ícones para as setas
// import musicoProfile from "../src/assets/ago-25-recorte.png";

//Importando os componentes
import AboutClass from "../src/components/About";
import InscricaoCard from "../src/components/incricaoCard";
import Garantia from "./components/Garantia";
import ProfessorCarousel from "./components/Professor";
import Modulos from "./components/Modulos";
import Testimonials from "./components/Testimonials";

//IMPORTANDO IMAGENS
// import musicoImage from "../src/assets/guitar-default.jpg";

//IMPORTANDO A LOGO
import logoGC from "../src/assets/logo-dois - cortada.png";
export default function App() {
  // Estado para controlar o slide atual do carrossel mobile
  // const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-gray-800 to-black">
        {/* ESPAÇO PARA A LOGO */}
        <img
          src={logoGC}
          alt="Logo do Curso"
          className="h-32 md:h-48 mx-auto my-1"
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
      <Modulos />
      <Testimonials />
      <ProfessorCarousel />

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
          <InscricaoCard parcelas={12} preco="20,37" />
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
