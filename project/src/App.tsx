import React, { useEffect, useState } from 'react';
import { Heart, Award, Star, PartyPopper, Sparkles, GraduationCap } from 'lucide-react';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-gradient-to-br from-pink-100/90 to-purple-100/90 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <div className={`bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 text-center relative overflow-hidden transform transition-all duration-1000 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500" />
            
            {/* Floating decorations */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`absolute ${i % 2 === 0 ? 'text-pink-300' : 'text-purple-300'}`} style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}>
                <Sparkles size={24} className="animate-pulse" />
              </div>
            ))}
            
            <div className="absolute -top-6 -right-6 text-pink-300 animate-bounce">
              <PartyPopper size={64} />
            </div>
            <div className="absolute -top-6 -left-6 text-pink-300 animate-bounce delay-300">
              <PartyPopper size={64} />
            </div>
            
            {/* Main content */}
            <div className="mb-8 animate-fade-in">
              <div className="relative inline-block">
                <Award className="w-24 h-24 mx-auto text-purple-500 mb-4 animate-shine" />
                <GraduationCap className="absolute -right-4 -top-2 w-10 h-10 text-pink-500 animate-float" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
                ¡Felicitaciones mi amor! 🎉
              </h1>
              <div className="flex justify-center items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-yellow-400 animate-spin-slow" fill="currentColor" />
                <span className="text-3xl font-bold text-purple-600 animate-pulse">18/20</span>
                <Star className="w-8 h-8 text-yellow-400 animate-spin-slow" fill="currentColor" />
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                Estoy inmensamente orgulloso de ti por obtener tu certificado
                con una nota tan extraordinaria. ✨
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Tu dedicación, esfuerzo y perseverancia han dado frutos.
                Cada día me sorprendes más con tus logros y tu capacidad de superación.
                ¡Este es solo el comienzo de un camino lleno de éxitos! 🌟
              </p>
            </div>

            <div className="flex justify-center items-center gap-3 relative">
              <Heart className="w-10 h-10 text-red-500 animate-heartbeat" fill="currentColor" />
              <span className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Con todo mi amor y admiración
              </span>
              <Heart className="w-10 h-10 text-red-500 animate-heartbeat delay-100" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;