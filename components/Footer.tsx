
import React from 'react';
import { Mail, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#030711] pt-16 md:pt-20 pb-10 px-4 sm:px-6 border-t border-blue-900/30 scroll-mt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="sm:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#00d1ff] rounded-lg flex items-center justify-center font-bold text-[#050a18]">P</div>
              <span className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-tight">PAULO <span className="text-[#00d1ff]">RICARDO</span></span>
            </div>
            <p className="text-gray-500 text-sm sm:text-base max-w-sm leading-relaxed">
              Transformando a educação corporativa e social através de metodologias práticas de alto impacto. Vamos elevar o padrão do seu time?
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-11 h-11 rounded-full border border-blue-900/50 flex items-center justify-center text-gray-400 hover:border-[#00d1ff] hover:text-[#00d1ff] transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-11 h-11 rounded-full border border-blue-900/50 flex items-center justify-center text-gray-400 hover:border-[#00d1ff] hover:text-[#00d1ff] transition-all"><Linkedin size={20} /></a>
              <a href="#" className="w-11 h-11 rounded-full border border-blue-900/50 flex items-center justify-center text-gray-400 hover:border-[#00d1ff] hover:text-[#00d1ff] transition-all"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-white font-bold text-lg">Menu</h5>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-gray-500 hover:text-[#00d1ff] transition-colors text-sm sm:text-base py-1 inline-block">Início</a></li>
              <li><a href="#palestras" className="text-gray-500 hover:text-[#00d1ff] transition-colors text-sm sm:text-base py-1 inline-block">Palestras</a></li>
              <li><a href="#sobre" className="text-gray-500 hover:text-[#00d1ff] transition-colors text-sm sm:text-base py-1 inline-block">Sobre</a></li>
              <li><a href="#como-funciona" className="text-gray-500 hover:text-[#00d1ff] transition-colors text-sm sm:text-base py-1 inline-block">Contratação</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-white font-bold text-lg">Atendimento</h5>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 text-gray-500 text-sm sm:text-base">
                <Mail size={18} className="text-[#00d1ff] shrink-0 mt-1" />
                <span className="break-all">contato@institutoejn.com.br</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-500 text-sm sm:text-base">
                <Phone size={18} className="text-[#00d1ff] shrink-0 mt-1" />
                <a href="https://wa.me/5517991887227?text=Olá%20Paulo,%20vi%20sua%20Landing%20Page%20e%20gostaria%20de%20uma%20proposta." target="_blank" rel="noopener noreferrer" className="hover:text-[#00d1ff] transition-colors">
                  +55 (17) 99188-7227
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-blue-900/20 text-center">
          <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">
            &copy; {new Date().getFullYear()} Paulo Ricardo & Instituto EJN.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;