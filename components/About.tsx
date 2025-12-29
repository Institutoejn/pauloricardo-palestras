import React from 'react';
import { Rocket, Award, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 px-4 sm:px-6 overflow-visible scroll-mt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Lado da Imagem: Mobile (aparece primeiro), Desktop (lado direito) */}
          <div className="order-1 md:order-2 mb-12 md:mb-0">
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-white/10">
                <img 
                  src="https://drive.google.com/thumbnail?id=1HSJUEnDSz_DVmckY1e722xEuGRI4gFc3&sz=w1200" 
                  alt="Paulo Ricardo - Fundador EJN" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-cyan-600/20 to-blue-600/20 blur-2xl opacity-50 rounded-3xl"></div>
            </div>
          </div>

          {/* Lado do Texto: Bio (order-2 no Mobile, order-1 no Desktop) */}
          <div className="relative order-2 md:order-1 space-y-10">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-[#00d1ff] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                Trajetória e Propósito
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                Quem é <span className="text-gradient">Paulo Ricardo?</span>
              </h3>
            </div>
            
            <div className="space-y-6 border-l-4 border-[#00d1ff] pl-6 sm:pl-8">
              <p className="text-gray-200 text-lg sm:text-xl leading-relaxed font-medium">
                Sou Paulo Ricardo, fundador do <span className="text-[#00d1ff] font-bold">Instituto Escola Jovens de Negócios (EJN)</span>, em São José do Rio Preto. Levo para empresas uma palestra corporativa prática para fortalecer propósito, autorresponsabilidade e cultura de dono, transformando postura em resultado no dia a dia do time.
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                Minha credibilidade vem de campo: formação de jovens, atuação em eventos e projetos de inovação, e experiência direta com desenvolvimento humano aplicado à realidade de equipes.
              </p>
            </div>

            {/* Selos de Credibilidade */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#0a1229] p-5 rounded-2xl border border-blue-900/50 hover:border-[#00d1ff]/50 transition-all group/item shadow-xl">
                <Star className="text-[#00d1ff] mb-3 group-hover/item:scale-110 transition-transform" size={26} />
                <div className="text-white font-bold text-sm leading-tight">Jovem Visionário Prudential</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-1.5">Top 8 Brasil</div>
              </div>
              
              <div className="bg-[#0a1229] p-5 rounded-2xl border border-blue-900/50 hover:border-[#00d1ff]/50 transition-all group/item shadow-xl">
                <Rocket className="text-[#00d1ff] mb-3 group-hover/item:scale-110 transition-transform" size={26} />
                <div className="text-white font-bold text-sm leading-tight">Mentor — NASA Space Apps</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-1.5">2 anos</div>
              </div>
              
              <div className="bg-[#0a1229] p-5 rounded-2xl border border-blue-900/50 hover:border-[#00d1ff]/50 transition-all group/item shadow-xl">
                <Award className="text-[#00d1ff] mb-3 group-hover/item:scale-110 transition-transform" size={26} />
                <div className="text-white font-bold text-sm leading-tight">Vencedor de Hackathon (Cimed)</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-1.5">Link School of Business</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;