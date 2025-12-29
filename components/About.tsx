
import React from 'react';
import { Rocket, ShieldCheck, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-24 px-4 sm:px-6 overflow-hidden scroll-mt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="relative border-l-4 border-[#00d1ff] pl-5 sm:pl-8 space-y-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Quem é <span className="text-gradient">Paulo Ricardo?</span></h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                Fundador do <span className="text-white font-bold">Instituto EJN</span>, Paulo Ricardo dedica sua carreira a transformar o potencial de jovens e profissionais em resultados concretos.
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                Com uma trajetória marcada pela inovação e pelo impacto social, ele desenvolveu metodologias de ensino que conectam a educação técnica com as soft skills mais exigidas pelo mercado global.
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#0a1229] p-4 rounded-xl border border-blue-900/50 flex flex-row sm:flex-col items-center sm:text-center space-x-4 sm:space-x-0">
                  <ShieldCheck className="text-[#00d1ff] mb-0 sm:mb-2 shrink-0" size={24} />
                  <div>
                    <div className="text-white font-bold text-sm">Prudential</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold">Partner</div>
                  </div>
                </div>
                <div className="bg-[#0a1229] p-4 rounded-xl border border-blue-900/50 flex flex-row sm:flex-col items-center sm:text-center space-x-4 sm:space-x-0">
                  <Rocket className="text-[#00d1ff] mb-0 sm:mb-2 shrink-0" size={24} />
                  <div>
                    <div className="text-white font-bold text-sm">NASA Space Apps</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold">Participant</div>
                  </div>
                </div>
                <div className="bg-[#0a1229] p-4 rounded-xl border border-blue-900/50 flex flex-row sm:flex-col items-center sm:text-center space-x-4 sm:space-x-0">
                  <Globe className="text-[#00d1ff] mb-0 sm:mb-2 shrink-0" size={24} />
                  <div>
                    <div className="text-white font-bold text-sm">Vencedor</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold">Hackathons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group order-1 md:order-2 mb-8 md:mb-0">
            <div className="absolute inset-0 bg-[#00d1ff] rotate-2 sm:rotate-3 rounded-3xl transition-transform group-hover:rotate-0 opacity-10"></div>
            <img 
              src="https://drive.google.com/uc?export=view&id=1IQYMfjneMc4JXKcexBBpRbTvkF086j87" 
              alt="Paulo Ricardo Palestrando" 
              className="relative rounded-3xl w-full h-auto aspect-video object-cover border border-blue-900 shadow-2xl transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;