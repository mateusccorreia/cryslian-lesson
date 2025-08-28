import React from "react";
import { ShieldCheck } from "lucide-react";

// 1. IMPORTE A SUA IMAGEM DE GARANTIA AQUI
import seloGarantia from "../assets/selo-garantia.png";

const Garantia: React.FC = () => {
  return (
    <section className="bg-black py-12 text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Lado Esquerdo: Espaço para a Imagem */}
        <div className="flex items-center justify-center">
          <img
            src={seloGarantia}
            alt="Selo de Garantia de 7 dias"
            className="w-64 h-64 md:w-80 md:h-80 object-contain"
          />
        </div>

        {/* Lado Direito: Texto e Botão (Inalterado) */}
        <div className="text-center">
          <div className="flex flex-col items-center mb-4">
            <ShieldCheck className="w-10 h-10 text-yellow-400 mb-3" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Garantia Incondicional de 7 dias
            </h2>
          </div>
          <p className="text-gray-300 mb-8 leading-relaxed max-w-md mx-auto">
            Você tem 7 dias para explorar a plataforma, assistir às aulas que já
            estão disponíveis e acessar os materiais. Se, nesse tempo, você
            sentir que isso não é pra você, que o conteúdo não faz sentido, ou
            que não está no momento certo - é só mandar um e-mail e a gente
            devolve 100% do seu investimento. Sem perguntas. Sem letras miúdas.
            Porque se não for para te transformar, preferimos não ficar com o
            seu dinheiro.
          </p>
          <a
            href="#inscricao"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition"
          >
            QUERO MINHA VAGA COM GARANTIA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Garantia;
