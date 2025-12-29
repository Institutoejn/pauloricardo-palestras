
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Fecha o menu mobile se estiver aberto
      setIsOpen(false);
      
      // Realiza a rolagem suave programaticamente
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Atualiza a URL sem recarregar a página (opcional, melhora UX)
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'glass-effect py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#00d1ff] rounded-lg flex items-center justify-center font-bold text-[#050a18]">P</div>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white uppercase">Paulo <span className="text-[#00d1ff]">Ricardo</span></span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-[#00d1ff] transition-colors font-medium text-sm cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 -mr-2 relative z-[110]" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-[105] transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-[#050a18]/95 backdrop-blur-lg" onClick={() => setIsOpen(false)}></div>
        <div className={`relative flex flex-col items-center justify-center h-full space-y-6 p-6 transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-10'}`}>
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-bold text-white hover:text-[#00d1ff] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
