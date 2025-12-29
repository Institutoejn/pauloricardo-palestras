
import React from 'react';
import { ArrowRight, Star, Users, CheckCircle, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-16 md:pt-52 md:pb-32 px-4 sm:px-6 overflow-hidden scroll-mt-28">
      {/* Efeito de Brilho Radial de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00d1ff]/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          
          {/* Badge de Destaque (Founder Card Adaptado) */}
          <div className="inline-flex items-center space-x-3 glass-effect px-5 py-2.5 rounded-2xl border border-[#00d1ff]/30 shadow-xl animate-bounce-slow">
            <div className="p-2 bg-[#00d1ff]/10 rounded-full text-[#00d1ff]">
              <Award size={18} />
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-xs sm:text-sm">Founder Instituto EJN</div>
              <div className="text-gray-400 text-[10px] sm:text-xs">Transformação & Carreira</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-[#00d1ff] text-[10px] sm:text-xs font-bold uppercase tracking-widest mx-auto">
              <Star size={14} fill="#00d1ff" />
              <span>Impacto Real em Desenvolvimento Humano</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight">
              Elevando o Padrão do <span className="text-gradient">Profissionalismo.</span>
            </h1>
            
            <p className="text-gray-400 text-base sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Paulo Ricardo lidera o Instituto EJN, capacitando a próxima geração de talentos e líderes com foco em resultados e postura de excelência.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://wa.me/5517991887227?text=Olá%20Paulo,%20vi%20sua%20Landing%20Page%20e%20gostaria%20de%20uma%20proposta." 
              className="w-full sm:w-auto bg-[#00d1ff] text-[#050a18] px-10 py-5 rounded-full font-bold flex items-center justify-center space-x-2 btn-glow transition-all active:scale-95 text-lg"
            >
              <span>Agendar Palestra Agora</span>
              <ArrowRight size={20} />
            </a>
            <a 
              href="#palestras" 
              className="w-full sm:w-auto border border-blue-800 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-900/20 transition-all text-center active:scale-95 text-lg"
            >
              Temas Disponíveis
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8">
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center gap-2 group-hover:text-[#00d1ff] transition-colors">
                <Users size={24} className="text-[#00d1ff]" /> +500
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Jovens Formados</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-blue-900/50"></div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center gap-2 group-hover:text-[#00d1ff] transition-colors">
                <CheckCircle size={24} className="text-[#00d1ff]" /> 80%
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Empregabilidade</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-blue-900/50"></div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center gap-2 group-hover:text-[#00d1ff] transition-colors">
                <Award size={24} className="text-[#00d1ff]" /> +400
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Líderes Treinados</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Estilo Adicional para a animação leve do Badge */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
