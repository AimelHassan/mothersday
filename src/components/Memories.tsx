export default function Memories() {
  const images = [
    {
      img: '/memories/mem1.jpeg',
      title: 'Cherished Moment',
      date: 'May 2026',
      badgeClass: 'bg-primary-container/30 text-on-primary-container',
      yOff: ''
    },
    {
      img: '/memories/mem2.jpeg',
      title: 'Beautiful Day',
      date: 'May 2026',
      badgeClass: 'bg-secondary-container/50 text-on-secondary-container',
      yOff: 'sm:translate-y-4'
    },
    {
      img: '/memories/mem3.jpeg',
      title: 'Together Forever',
      date: 'May 2026',
      badgeClass: 'bg-tertiary-container/30 text-on-tertiary-container',
      yOff: 'lg:-translate-y-2'
    },
    {
      img: '/memories/mem4.jpeg',
      title: 'Pure Joy',
      date: 'May 2026',
      badgeClass: 'bg-primary-container/30 text-on-primary-container',
      yOff: 'sm:translate-y-6 lg:translate-y-4'
    },
    {
      img: '/memories/mem5.jpeg',
      title: 'Special Celebration',
      date: 'May 2026',
      badgeClass: 'bg-secondary-container/50 text-on-secondary-container',
      yOff: ''
    }
  ];

  return (
    <div className="flex-1 px-4 md:px-section-padding py-8 z-10 w-full max-w-7xl mx-auto pb-24 md:pb-32 overflow-x-hidden">
      <div className="text-center mb-10 md:mb-12 pt-4 md:pt-8">
        <h1 className="font-display-lg text-[40px] md:text-[64px] text-on-surface mb-3 md:mb-4 drop-shadow-sm leading-none">Memory Gallery</h1>
        <p className="font-sans text-[13px] md:text-[14px] opacity-75 max-w-md mx-auto px-2">A collection of our most cherished moments together. Every picture tells a story of love, laughter, and the beautiful bond we share.</p>
      </div>

      <div className="absolute top-[20%] left-[-5%] text-primary-container/40 z-0 pointer-events-none transform -rotate-12">
        <span className="material-symbols-outlined text-[120px]">local_florist</span>
      </div>
      <div className="absolute bottom-[30%] right-[-5%] text-secondary-container/40 z-0 pointer-events-none transform rotate-45">
        <span className="material-symbols-outlined text-[150px]">favorite</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-12 relative z-10">
        {images.map((img, i) => (
          <div key={i} className={`glass-effect rounded-[1.5rem] p-4 flex flex-col gap-4 soft-shadow hover:-translate-y-1 transition-transform duration-300 transform md:${img.yOff}`}>
            <div className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-[1rem] overflow-hidden border border-surface-variant" style={{ backgroundImage: `url(${img.img})` }}></div>
            <div className="text-center pt-2 pb-1 border-t border-surface-variant/50">
              <p className="font-display-lg text-[22px] md:text-[24px] text-on-surface mb-2">{img.title}</p>    
              <div className={`inline-flex items-center justify-center px-4 py-1.5 md:px-3 md:py-1 rounded-full font-sans text-[10px] uppercase font-semibold tracking-wider ${img.badgeClass}`}>
                  {img.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
