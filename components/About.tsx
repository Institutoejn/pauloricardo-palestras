
import React from 'react';
import { Rocket, ShieldCheck, Award, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 px-4 sm:px-6 overflow-hidden scroll-mt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Lado do Texto: Bio */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="relative border-l-4 border-[#00d1ff] pl-5 sm:pl-8 space-y-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Quem é <span className="text-gradient">Paulo Ricardo?</span>
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Sou Paulo Ricardo, fundador do <span className="text-white font-bold">Instituto Escola Jovens de Negócios (EJN)</span>, em São José do Rio Preto. Levo para empresas uma palestra corporativa prática para fortalecer propósito, autorresponsabilidade e cultura de dono, transformando postura em resultado no dia a dia do time.
                </p>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Minha credibilidade vem de campo: formação de jovens, atuação em eventos e projetos de inovação, e experiência direta com desenvolvimento humano aplicado à realidade de equipes.
                </p>
              </div>

              {/* Selos de Credibilidade */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="bg-[#0a1229] p-5 rounded-2xl border border-blue-900/50 flex flex-row sm:flex-col items-center sm:text-center space-x-4 sm:space-x-0 group hover:border-[#00d1ff]/40 transition-all">
                  <Star className="text-[#00d1ff] mb-0 sm:mb-3 shrink-0 group-hover:scale-110 transition-transform" size={26} />
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">Jovem Visionário Prudential</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-1">Top 8 Brasil</div>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="bg-[#0a1229] p-5 rounded-2xl border border-blue-900/50 flex flex-row sm:flex-col items-center sm:text-center space-x-4 sm:space-x-0 group hover:border-[#00d1ff]/40 transition-all">
                  <Rocket className="text-[#00d1ff] mb-0 sm:mb-3 shrink-0 group-hover:scale-110 transition-transform" size={26} />
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">Mentor — NASA Space Apps</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-1">2 anos</div>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="bg-[#0a1229] p-5 rounded-2xl border border-blue-900/50 flex flex-row sm:flex-col items-center sm:text-center space-x-4 sm:space-x-0 group hover:border-[#00d1ff]/40 transition-all">
                  <Award className="text-[#00d1ff] mb-0 sm:mb-3 shrink-0 group-hover:scale-110 transition-transform" size={26} />
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">Vencedor de Hackathon (Cimed)</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-1">Link School of Business</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado da Imagem */}
          <div className="relative group order-1 md:order-2 mb-8 md:mb-0">
            <div className="absolute inset-0 bg-[#00d1ff] rotate-2 sm:rotate-3 rounded-3xl transition-transform group-hover:rotate-0 opacity-10"></div>
            <div className="relative">
              <img 
                src="https://drive.google.com/uc?export=view&id=1IQYMfjneMc4JXKcexBBpRbTvkF086j87" 
                alt="Paulo Ricardo Palestrando" 
                className="rounded-3xl w-full h-auto aspect-[4/3] object-cover border border-blue-900/50 shadow-2xl transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
              />
              {/* Overlay Decorativo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-effect rounded-2xl border border-white/10 hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#00d1ff]/20 flex items-center justify-center text-[#00d1ff]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs">Atuação Nacional</div>
                    <div className="text-gray-400 text-[10px]">Impacto em diversas corporações</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
