
import React from 'react';
import { Users, Zap, TrendingUp, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { LECTURES } from '../constants';

const IconMap: Record<string, React.ReactNode> = {
  Users: <Users size={28} />,
  Zap: <Zap size={28} />,
  TrendingUp: <TrendingUp size={28} />,
};

const Lectures: React.FC = () => {
  return (
    <section id="palestras" className="py-20 md:py-24 px-4 sm:px-6 bg-[#0a1229]/30 scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#00d1ff] font-bold tracking-widest uppercase text-[10px] sm:text-sm mb-4">Soluções Corporativas</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Nossas <span className="text-gradient">Palestras</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LECTURES.map((lecture) => (
            <div 
              key={lecture.id} 
              className="group glass-effect p-6 sm:p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 border-blue-900/30 hover:border-[#00d1ff]/40 flex flex-col h-full"
            >
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-blue-900/30">
                <img 
                  src="https://placehold.co/600x400/050a18/00d1ff?text=Foto+da+Palestra" 
                  alt={lecture.title} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a18] to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#00d1ff] rounded-xl flex items-center justify-center text-[#050a18]">
                  {IconMap[lecture.iconName]}
                </div>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#00d1ff] transition-colors">
                {lecture.title}
              </h4>
              <p className="text-gray-400 mb-6 text-sm flex-grow">
                {lecture.description}
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="bg-[#050a18]/50 p-4 rounded-xl border border-blue-900/20">
                  <div className="flex items-center space-x-2 text-[#00d1ff] text-[10px] font-bold uppercase mb-2">
                    <AlertCircle size={14} />
                    <span>O que resolve:</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{lecture.resolve}</p>
                </div>
                
                <div className="bg-[#00d1ff]/5 p-4 rounded-xl border border-[#00d1ff]/20">
                  <div className="flex items-center space-x-2 text-green-400 text-[10px] font-bold uppercase mb-2">
                    <CheckCircle2 size={14} />
                    <span>Resultado Prático:</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{lecture.result}</p>
                </div>
              </div>

              <a 
                href="https://wa.me/5517991887227?text=Olá%20Paulo,%20vi%20sua%20Landing%20Page%20e%20gostaria%20de%20uma%20proposta." 
                className="w-full bg-[#050a18]/40 sm:bg-transparent border border-blue-900/30 sm:border-0 p-4 sm:p-0 rounded-xl sm:rounded-none flex items-center justify-center sm:justify-start space-x-2 text-white font-bold group-hover:text-[#00d1ff] transition-colors active:scale-95"
              >
                <span>Solicitar Proposta</span>
                <ChevronRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lectures;