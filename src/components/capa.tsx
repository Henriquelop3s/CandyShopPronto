'use client';

import { Button } from "@/components/ui/button"
import { Heart, Candy, IceCream } from "lucide-react"

export default function Capa() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 animate-float">
          {/* <Candy className="h-16 w-16 text-pink-500" /> */}
        </div>
        <div className="absolute bottom-10 right-10 animate-float animation-delay-2000">
          {/* <IceCream className="h-16 w-16 text-blue-500" /> */}
        </div>
        <div className="absolute top-1/2 left-1/4 animate-float animation-delay-1000">
          {/* <Heart className="h-12 w-12 text-red-500" /> */}
        </div>
      </div>
      
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text- mb-4">
          Doce Delícia
        </h1>
        <p className="text-xl md:text-2xl text-blue-600 mb-8">
          Descubra o paraíso dos doces!
        </p>
        <Button
  className="bg-blue-500 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-full text-lg"
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
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  )
}