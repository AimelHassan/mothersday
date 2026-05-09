import { Tab } from '../App';

export default function Navigation({ currentTab, setCurrentTab }: { currentTab: Tab, setCurrentTab: (t: Tab) => void }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'memories', label: 'Memories' },
    { id: 'reasons', label: 'Reasons' },
    { id: 'bouquet', label: 'Bouquet' },
  ] as const;

  return (
    <nav className="w-full border-t border-outline-variant/20 px-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex justify-between sm:justify-center sm:gap-6 md:gap-14 min-w-max max-w-4xl mx-auto px-2 sm:px-4">
        {navItems.map(item => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`flex flex-col items-center justify-center py-3 md:py-4 px-2 sm:px-4 border-b-[3px] transition-all duration-300 active:bg-primary/5 ${isActive ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary hover:border-primary/30'}`}
            >
              <span className={`font-sans tracking-[0.1em] sm:tracking-[0.15em] uppercase transition-all whitespace-nowrap ${isActive ? 'text-[9px] sm:text-[11px] font-bold' : 'text-[9px] sm:text-[11px] font-semibold opacity-60'}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  );
}
