export default function Reasons() {
  const reasons = [
    {
      title: 'Your amazing cooking',
      desc: 'Nobody makes it quite like you do. Every meal feels like a warm hug, and your recipes are the taste of home no matter where I am.',
      icon: 'soup_kitchen',
      colorRef: 'primary'
    },
    {
      title: 'Your infinite patience',
      desc: 'Even when I was difficult, you always took a deep breath and guided me with a gentle hand. Your calm strength is something I aspire to.',
      icon: 'self_improvement',
      colorRef: 'secondary'
    },
    {
      title: 'Your beautiful smile',
      desc: 'It lights up any room you walk into. Your laugh is contagious, and seeing you happy is the best gift I could ever ask for.',
      icon: 'mood',
      colorRef: 'tertiary'
    },
    {
      title: 'Your magical advice',
      desc: "You always know exactly what to say when I'm lost. Your wisdom is my compass, and your intuition is never wrong.",
      icon: 'auto_awesome',
      colorRef: 'primary'
    }
  ];

  return (
    <div className="flex-1 w-full px-4 md:px-gutter py-8 md:py-12 pb-24 md:pb-32">
      <div className="text-center mb-10 md:mb-12 max-w-2xl mx-auto pt-4 md:pt-8">
        <h2 className="font-display-lg text-[48px] md:text-[64px] leading-none text-on-surface mb-3 md:mb-4">Reasons Why</h2>
        <p className="font-sans text-[13px] md:text-[14px] opacity-75 max-w-md mx-auto px-4">A little collection of all the things that make you the most wonderful mom in the whole world. Just a few of the million reasons.</p>
      </div>
      <div className="flex flex-col gap-5 md:gap-8 max-w-3xl mx-auto">
        {reasons.map((r, i) => {
          const bgMap: Record<string, string> = {
            primary: 'bg-primary-container text-on-primary-container',
            secondary: 'bg-secondary-container text-on-secondary-container',
            tertiary: 'bg-tertiary-container text-on-tertiary-container'
          };
          const textMap: Record<string, string> = {
            primary: 'text-primary',
            secondary: 'text-secondary',
            tertiary: 'text-tertiary'
          };
          
          return (
            <article key={i} className="bg-white rounded-[1.5rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-outline-variant/30 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className={`absolute top-0 right-0 p-4 md:p-6 opacity-5 md:opacity-10 ${textMap[r.colorRef]} transition-opacity duration-300 group-hover:opacity-20`}>
                <span className="material-symbols-outlined text-[60px] md:text-[80px]" style={{ fontVariationSettings: "'FILL' 1" }}>{r.icon}</span>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 md:gap-6 items-center sm:items-start text-center sm:text-left">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-[1rem] md:rounded-[1.25rem] ${bgMap[r.colorRef]} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <span className="material-symbols-outlined text-2xl md:text-3xl">{r.icon}</span>
                </div>
                <div>
                  <h3 className="font-display-lg text-[26px] md:text-3xl text-on-surface mb-2 md:mb-4 tracking-tight leading-none">{r.title}</h3>
                  <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant leading-relaxed opacity-80">{r.desc}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
