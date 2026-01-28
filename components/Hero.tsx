import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onScrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Modern Architecture Building" 
          className="w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-black">
        {/* Main Copy */}
        <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] font-semibold leading-[1.3] mb-6 tracking-tight text-neutral-900 drop-shadow-sm">
          건축은 관리에서 완성됩니다.
        </h1>
        
        {/* Sub Copy */}
        <p className="text-base md:text-lg font-normal text-neutral-700 mb-10 max-w-3xl mx-auto leading-[1.7] tracking-tight">
          {/* PC Layout */}
          <span className="hidden md:block">
            SLK & PhilArt는 설계부터 인허가, 시공, 감리까지<br />
            프로젝트 전 과정을 직접 관리하는<br />
            건축사사무소 협업 그룹입니다.
          </span>
          {/* Mobile Layout */}
          <span className="md:hidden">
            SLK & PhilArt는 설계부터 인허가,<br />
            시공, 감리까지 프로젝트 전 과정을<br />
            직접 관리하는 건축사사무소<br />
            협업 그룹입니다.
          </span>
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={onScrollDown}
            className="px-10 py-4 bg-black text-white font-bold text-xs md:text-sm tracking-widest hover:bg-neutral-800 transition-colors uppercase"
          >
             VIEW PROJECT
          </button>
          <button 
            onClick={() => {
                const el = document.getElementById('company');
                el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 bg-transparent border border-black text-black font-bold text-xs md:text-sm tracking-widest hover:bg-black hover:text-white transition-colors uppercase"
          >
            ABOUT US
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button onClick={onScrollDown} className="text-black opacity-40 hover:opacity-100 transition-opacity">
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;