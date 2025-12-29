
import React from 'react';
import { Users, Zap, TrendingUp, ChevronRight, CheckCircle2, AlertCircle, Target } from 'lucide-react';
import { LECTURES } from '../constants';

const IconMap: Record<string, React.ReactNode> = {
  Users: <Users size={32} />,
  Zap: <Zap size={32} />,
  TrendingUp: <TrendingUp size={32} />,
};

const Lectures: React.FC = () => {
  const whatsappUrl = "https://wa.me/5517991887227?text=Olá%20Paulo,%20vi%20sua%20Landing%20Page%20e%20gostaria%20de%20uma%20proposta.";

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
              <div className="w-14 h-14 mb-6 bg-[#00d1ff]/10 rounded-2xl flex items-center justify-center text-[#00d1ff] border border-[#00d1ff]/20 shadow-[0_0_15px_rgba(0,209,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                  {IconMap[lecture.iconName]}
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#00d1ff] transition-colors">
                {lecture.title}
              </h4>
              
              <div className="space-y-4 mb-8">
                {/* Para Quem */}
                <div className="flex items-start space-x-3">
                  <Target size={18} className="text-[#00d1ff] shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-[#00d1ff] font-bold">Para quem:</span> {lecture.forWho}
                  </p>
                </div>

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
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full bg-[#050a18]/40 sm:bg-transparent border border-blue-900/30 sm:border-0 p-4 sm:p-0 rounded-xl sm:rounded-none flex items-center justify-center sm:justify-start space-x-2 text-white font-bold group-hover:text-[#00d1ff] transition-colors active:scale-95"
              >
                <span>Quero uma proposta</span>
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
