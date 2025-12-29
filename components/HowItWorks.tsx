
import React from 'react';
import { Clock, FileText, DollarSign, Calendar, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Clock />,
      title: "Duração",
      desc: "90 minutos de imersão total (Palestra + Q&A)."
    },
    {
      icon: <FileText />,
      title: "Fiscal",
      desc: "Emissão de Nota Fiscal inclusa em todos os serviços."
    },
    {
      icon: <DollarSign />,
      title: "Investimento",
      desc: "Valores sob consulta, adaptados ao formato e local."
    },
    {
      icon: <Calendar />,
      title: "Formatos",
      desc: "Presencial em todo Brasil ou Online Ao Vivo."
    }
  ];

  const whatsappUrl = "https://wa.me/5517991887227?text=Olá%20Paulo,%20vi%20sua%20Landing%20Page%20e%20gostaria%20de%20uma%20proposta.";

  return (
    <section id="como-funciona" className="py-20 md:py-24 px-4 sm:px-6 border-t border-blue-900/10 scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Logística e <span className="text-gradient">Contratação</span></h3>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">Transparência e agilidade desde o primeiro contato até o pós-evento.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-[#0a1229] p-6 sm:p-8 rounded-2xl border border-blue-900/30 text-center hover:border-[#00d1ff]/30 transition-all group">
              <div className="w-12 h-12 bg-[#00d1ff]/10 text-[#00d1ff] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h5 className="text-white font-bold mb-2 text-lg">{step.title}</h5>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#00d1ff] to-[#0072ff] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:-translate-y-1 active:scale-95"
          >
            <span>Iniciar Processo de Contratação</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
