import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Memories from './components/Memories';
import Reasons from './components/Reasons';
import Bouquet from './components/Bouquet';
import FallingPetals from './components/FallingPetals';
import PageTransition from './components/PageTransition';

export type Tab = 'home' | 'memories' | 'reasons' | 'bouquet';

export default function App() {
  const [currentTab, setCurrentTab] = useState<Tab>('home');

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <FallingPetals />
      
      <header className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-primary/10 transition-all flex-shrink-0">
        <div className="flex justify-between items-center px-4 md:px-gutter py-3 md:py-4 max-w-container-max mx-auto">
          <button
            onClick={() => setCurrentTab('home')}
            className={`text-primary hover:scale-110 transition-all duration-300 p-2 flex items-center justify-center ${currentTab === 'home' ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:bg-primary/5 rounded-full'}`}
            aria-label="Back to Home"
          >
            <span className="material-symbols-outlined text-[24px] md:text-[28px]">arrow_back</span>
          </button>
          <div className="font-display-lg text-[28px] md:text-[42px] leading-none text-primary select-none flex-shrink-0 text-center tracking-tight">Our Journey</div>
          <button className="text-primary hover:scale-110 transition-transform duration-300 p-2 flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px] md:text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </button>
        </div>

        <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </header>

      <main className="flex-1 w-full relative flex flex-col">
        <AnimatePresence mode="wait">
          <PageTransition key={currentTab}>
            {currentTab === 'home' && <Home setCurrentTab={setCurrentTab} />}
            {currentTab === 'memories' && <Memories />}
            {currentTab === 'reasons' && <Reasons />}
            {currentTab === 'bouquet' && <Bouquet />}
          </PageTransition>
        </AnimatePresence>

        <footer className="w-full py-10 mt-auto relative z-10 border-t border-primary/5 bg-surface/30">
          <div className="flex flex-col items-center justify-center gap-4 text-center px-6 md:px-gutter max-w-container-max mx-auto">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-sans text-[11px] md:text-[12px] uppercase tracking-widest font-semibold">
              <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Our Story</a>
              <span className="text-outline-variant hidden sm:inline">•</span>
              <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Contact Me</a>
              <span className="text-outline-variant hidden sm:inline">•</span>
              <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Privacy</a>
            </div>
            <p className="font-sans text-[10px] md:text-[11px] text-on-surface-variant/60 uppercase tracking-[0.2em] mt-2">
              Made with love for Mom • By your son Aimel • 2024
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
