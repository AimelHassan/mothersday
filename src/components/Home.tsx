import { Tab } from '../App';

export default function Home({ setCurrentTab }: { setCurrentTab: (t: Tab) => void }) {
  return (
    <div className="flex-1 flex items-center justify-center py-12 md:py-24 px-6 md:px-gutter relative w-full overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTaBe0EOGNgjtA6we8N2UVzIaYe9mGiVdxlNOl2Y6gIgdUCWpBf9xEEwx5pjAs9tAgyPj4nN11z4XTgR-qTSBoJm_E5YHA3-XdbMsexlgs_WoUZNX8JXpdvaCIy4TLYoc17QwaLStDmEHBKCsF3hsHOLaDxS-L7Ec39X8MYl-I43H065XYUxb_O69BsqYteeKB9mgUOMuyDf4pDy3G6PQn9EEfcy9djBBcNewO0rGd0Yvc4kIPt_VowSy5OmEgJFqR7RVTi6XR35pY')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-surface/50 to-surface/80 backdrop-blur-[3px] pointer-events-none" />

      <div className="absolute font-display-lg text-[120px] sm:text-[200px] md:text-[320px] font-black text-primary-container opacity-20 select-none z-0 left-[-10px] md:left-[20px] top-1/2 -translate-y-1/2 pointer-events-none tracking-widest break-normal whitespace-nowrap">MOM</div>

      <section className="relative z-10 max-w-4xl w-full text-center md:text-left flex flex-col md:pl-[80px]">  
        <h2 className="font-display-lg text-[48px] sm:text-[64px] md:text-[84px] leading-[0.9] text-on-surface mb-2 md:mb-2 tracking-tight">
            You are my<br />everything, <span className="italic text-secondary">Mom</span>.
        </h2>
        <p className="font-display-lg text-primary/60 italic text-lg md:text-2xl mb-6 md:mb-8">I love you. <span className="not-italic text-sm opacity-60 ml-2">-- By your son Aimel</span></p>
        <p className="font-body-lg text-on-surface-variant max-w-md mx-auto md:mx-0 mb-8 md:mb-10 leading-relaxed text-[14px] md:text-[15px] opacity-75">
            A small space dedicated to you - filled with our favorite moments, reasons why you're incredible, and a bouquet that never fades.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto mx-auto md:mx-0">
          <button
            onClick={() => setCurrentTab('memories')}
            className="bg-primary text-white font-sans text-[12px] font-semibold rounded-full px-8 py-4 uppercase tracking-[0.1em] hover:bg-black transition-all duration-300 w-full sm:w-auto active:scale-95">
              Our Memories
          </button>
          <button
            onClick={() => setCurrentTab('bouquet')}
            className="bg-transparent border border-primary text-primary font-sans text-[12px] font-semibold rounded-full px-8 py-4 uppercase tracking-[0.1em] hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-auto bg-white/50 backdrop-blur-sm active:scale-95">
              Virtual Bouquet
          </button>
        </div>
      </section>
    </div>
  );
}
