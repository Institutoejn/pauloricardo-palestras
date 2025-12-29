
import React from 'react';
import { Clock, FileText, DollarSign, Calendar } from 'lucide-react';

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

  return (
    <section id="como-funciona" className="py-20 md:py-24 px-4 sm:px-6 border-t border-blue-900/10 scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Logística e <span className="text-gradient">Contratação</span></h3>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">Transparência e agilidade desde o primeiro contato até o pós-evento.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-[#0a1229] p-6 sm:p-8 rounded-2xl border border-blue-900/30 text-center hover:border-[#00d1ff]/30 transition-all">
              <div className="w-12 h-12 bg-[#00d1ff]/10 text-[#00d1ff] rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h5 className="text-white font-bold mb-2 text-lg">{step.title}</h5>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;