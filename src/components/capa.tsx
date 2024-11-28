'use client';

import { Button } from "@/components/ui/button";

export default function Capa() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 animate-float"></div>
        <div className="absolute bottom-10 right-10 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 animate-float animation-delay-1000"></div>
      </div>
      
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text- mb-4">
          Douceur
        </h1>
        <p className="text-xl md:text-2xl text-blue-600 mb-8">
          Descubra o esse sabor único!
        </p>
        <Button
          className="bg-blue-500 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-full text-lg transform hover:scale-105"
          onClick={() => {
            const targetSection = document.getElementById('target-section');
            if (targetSection) {
              targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }}
        >
          Explorar Doces
        </Button>
      </div>
    
    </div>
  );
}
