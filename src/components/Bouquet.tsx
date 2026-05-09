export default function Bouquet() {
  const flowers = [
    { name: 'Peony', icon: 'local_florist', colorRef: 'primary', msg: "Thanks for actually listening when I ramble about random stuff. Your patience is next level." },
    { name: 'Tulip', icon: 'spa', colorRef: 'secondary', msg: "Seriously, your vibe just makes everything better. Love seeing you happy." },
    { name: 'Rose', icon: 'filter_vintage', colorRef: 'tertiary', msg: "You're easily the strongest person I know. I really look up to how you handle everything." },
    {
      name: 'Wildflower Patch',
      isWide: true,
      iconSet: [
        { i: 'yard', c: 'text-secondary', s: '50px' },
        { i: 'local_florist', c: 'text-tertiary', s: '60px' },
        { i: 'spa', c: 'text-primary', s: '50px' }
      ],
      colorRef: 'primary',
      msg: "Thanks for letting me do my thing but always being there when I need to crash. You're my safe spot."
    },
    { name: 'Daisy', icon: 'grass', colorRef: 'secondary', msg: "It's the little things, like our random chats, that I appreciate the most. Love you, Mom." },
  ];

  const colorStyles: Record<string, string> = {
    primary: "border-primary/20 hover:border-primary/50 text-primary bg-primary text-on-primary bg-gradient-to-br from-primary to-primary-fixed-dim",
    secondary: "border-secondary/20 hover:border-secondary/50 text-secondary bg-secondary text-on-secondary bg-gradient-to-br from-secondary to-secondary-fixed-dim",
    tertiary: "border-tertiary/20 hover:border-tertiary/50 text-tertiary bg-tertiary text-on-tertiary bg-gradient-to-br from-tertiary to-tertiary-fixed-dim"
  };

  return (
    <div className="flex-1 px-4 md:px-gutter py-8 md:py-12 max-w-container-max mx-auto pb-24 md:pb-32 w-full">  
      <section className="mb-8 md:mb-12 text-center max-w-2xl mx-auto pt-4 md:pt-8">
        <h1 className="font-display-lg text-[40px] md:text-[64px] text-on-surface mb-3 md:mb-4 drop-shadow-sm leading-none">Pick a Flower</h1>
        <p className="font-sans text-[13px] md:text-[14px] opacity-75 max-w-md mx-auto px-4">Tap or hover over each bloom to reveal a little note just for you.</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 flower-pattern px-2 md:px-4 py-8 rounded-[1.5rem] md:rounded-3xl">
        {flowers.map((f, i) => (
          <div key={i} className={`flip-card h-72 md:h-80 rounded-3xl cursor-pointer ${f.isWide ? 'lg:col-span-2' : ''}`}>
            <div className="flip-card-inner w-full h-full rounded-[1.5rem] relative">
              <div className={`flip-card-front absolute w-full h-full bg-surface-container-low rounded-[1.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center p-6 border transition-colors bg-gradient-to-br from-surface to-surface-container-low ${colorStyles[f.colorRef].split(' ')[0]} ${colorStyles[f.colorRef].split(' ')[1]}`}>
                {f.isWide && f.iconSet ? (
                  <div className="flex gap-1 md:gap-2 mb-4 drop-shadow-md items-end">
                    {f.iconSet.map((ico, idx) => (
                      <span key={idx} className={`material-symbols-outlined ${ico.c}`} style={{ fontSize: ico.s, fontVariationSettings: "'FILL' 1" }}>{ico.i}</span>
                    ))}
                  </div>
                ) : (
                  <span className={`material-symbols-outlined mb-4 drop-shadow-md ${colorStyles[f.colorRef].split(' ')[2]}`} style={{ fontSize: '80px', fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                )}
                <h3 className="font-display-lg text-xl md:text-2xl text-on-surface tracking-tight font-semibold mt-2">{f.name}</h3>
              </div>

              <div className={`flip-card-back absolute w-full h-full rounded-[1.5rem] shadow-xl flex flex-col items-center justify-center p-6 md:p-8 text-center border-2 border-transparent ${colorStyles[f.colorRef].split(' ').slice(3).join(' ')}`}>
                <span className="material-symbols-outlined mb-4 text-3xl md:text-4xl opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <p className="font-body-md md:font-body-lg font-semibold text-sm md:text-base">{f.msg}</p>      
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-margin flex justify-center pb-20 px-4">
        <button className="bg-primary text-white rounded-full px-8 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] hover:bg-black transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.05)] flex items-center justify-center gap-2 w-full sm:w-auto active:scale-95">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span> Add a Bloom
        </button>
      </div>
    </div>
  );
}
