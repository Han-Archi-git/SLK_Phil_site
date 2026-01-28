import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: '홈' },
    { id: 'company', label: '소개' },
    { id: 'projects', label: '프로젝트' },
    { id: 'contact', label: '오시는 길' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <Building2 className="w-8 h-8 text-black transition-colors duration-300" />
          <div className="flex flex-col text-black transition-colors duration-300">
            <span className="text-xs md:text-sm font-bold tracking-tight leading-tight">(주)SLK종합건축사사무소</span>
            <span className="text-xs md:text-sm font-bold tracking-tight leading-tight">(주)PhilArt건축사사무소</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium tracking-wide transition-colors uppercase ${activeSection === item.id
                  ? 'text-black border-b-2 border-black'
                  : 'text-neutral-500 hover:text-black'
                }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('inquiry')}
            className="px-5 py-2 text-sm font-medium transition-colors border bg-black text-white border-black hover:bg-neutral-800"
          >
            문의하기
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 py-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-4 px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 font-medium ${activeSection === item.id ? 'text-black' : 'text-neutral-500'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('inquiry')}
              className="w-full py-3 mt-2 bg-black text-white font-medium text-center hover:bg-neutral-800"
            >
              문의하기
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;