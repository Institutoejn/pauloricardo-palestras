
import React from 'react';
import { ArrowRight, Star, Users, CheckCircle, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-28 pb-12 md:pt-48 md:pb-20 px-4 sm:px-6 scroll-mt-28">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-[#00d1ff] text-[10px] sm:text-xs font-bold uppercase tracking-widest mx-auto md:mx-0">
            <Star size={14} fill="#00d1ff" />
            <span>Impacto Real em Desenvolvimento Humano</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] md:leading-tight">
            Elevando o Padrão do <span className="text-gradient">Profissionalismo.</span>
          </h1>
          
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
            Paulo Ricardo lidera o Instituto EJN, capacitando a próxima geração de talentos e líderes com foco em resultados e postura de excelência.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://wa.me/5517991887227?text=Olá%20Paulo,%20vi%20sua%20Landing%20Page%20e%20gostaria%20de%20uma%20proposta." 
              className="w-full sm:w-auto bg-[#00d1ff] text-[#050a18] px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 btn-glow transition-all active:scale-95"
            >
              <span>Agendar Palestra</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href="#palestras" 
              className="w-full sm:w-auto border border-blue-800 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-900/20 transition-all text-center active:scale-95"
            >
              Temas Disponíveis
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-4 sm:space-x-6 pt-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center gap-1">
                <Users size={18} className="text-[#00d1ff]" /> +500
              </div>
              <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-bold">Jovens Formados</div>
            </div>
            <div className="w-px h-8 bg-blue-900/50"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center gap-1">
                <CheckCircle size={18} className="text-[#00d1ff]" /> 80%
              </div>
              <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-bold">Empregabilidade</div>
            </div>
            <div className="w-px h-8 bg-blue-900/50"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center gap-1">
                <Award size={18} className="text-[#00d1ff]" /> +400
              </div>
              <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-bold">Líderes Treinados</div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00d1ff]/20 to-transparent rounded-3xl blur-2xl"></div>
          <div className="relative rounded-3xl overflow-hidden border border-blue-900/50 bg-[#0a1229] shadow-2xl aspect-[4/5] md:aspect-auto">
            <img 
              src="https://drive.google.com/uc?export=view&id=1EqIIqSU9UO_vs8onYd9kkLEnjomYUleT" 
              alt="Paulo Ricardo" 
              className="w-full h-full object-cover object-top transition-all duration-700 transform hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 md:bottom-12 md:-left-12 glass-effect p-4 sm:p-6 rounded-2xl shadow-2xl border border-[#00d1ff]/30 max-w-[200px] sm:max-w-none">
            <div className="flex items-center space-x-3">
              <div className="p-2 sm:p-3 bg-[#00d1ff]/10 rounded-full text-[#00d1ff] shrink-0">
                <Award size={20} />
              </div>
              <div>
                <div className="text-white font-bold text-xs sm:text-base">Founder Instituto EJN</div>
                <div className="text-gray-400 text-[10px] sm:text-sm">Transformação & Carreira</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;