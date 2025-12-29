
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-[#0a1229]/20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-extrabold text-white">Dúvidas <span className="text-gradient">Frequentes</span></h3>
        </div>
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-effect rounded-2xl border border-blue-900/30 overflow-hidden"
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left text-white font-bold hover:bg-blue-900/10 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{item.question}</span>
                {openIndex === idx ? <Minus size={18} className="text-[#00d1ff]" /> : <Plus size={18} className="text-[#00d1ff]" />}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
