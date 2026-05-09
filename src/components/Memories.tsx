export default function Memories() {
  const images = [
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4r4p58Pgr7Rf5GQkIbicurb2v07gIDKPQs2xqrq6iYi5_FmABIw7UabjjnpMntHB7_DQjW2EkcqbWCv7v7VkjwCrmPeDUN1I7oGBkudB_232WYQ6C7T-BoT8e35Z1VlFnybzB1uuKsDqvbA7Fsf3D3f1DC5v8lBn-cmxBHHLYZ7rrY4rZrkk2zlM5j3aq-gupx6XoGinzUa713XnbXi8J5VuwrmZPFRYGdXejYjoW5DLvXW4CoKBlMREWqGJllqpYyE9e5Z1kRkoz',
      title: 'First Steps',
      date: 'Spring 1995',
      badgeClass: 'bg-primary-container/30 text-on-primary-container',
      yOff: ''
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkhUqOzmu-nvBKQKhY7lL4QFi-uo9mEZqm0Ko4GO556q_Z_J097Nx2auAZBwSf9pv3oCxBdaAkZ0MuA163yab5e-vIhobJRLf7roKqsJH2xXPnLEP3HnWXjOiAc9ktbvxGOcKP_mVW3yQOahIuq5HT7hNM6n3xFShHd8htJmBT9KVMY10dAAarcFTBjPMhJKyOJdKlNgOB92ZtTIYsL184HCBN1nsaIDDumukcaN3faS9UGkUIfRi4EEHBIZxtDK0NDByMtHoVHQQi',
      title: 'Beach Vacay',
      date: 'Summer 2002',
      badgeClass: 'bg-secondary-container/50 text-on-secondary-container',
      yOff: 'sm:translate-y-4'
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApfCKVaYHrHOkQeruev0dm2PT0k6vF2l_yGuBZmT_PEOUoDe-vIcmk5yNd9Bbr89_cnh3N-Qv3L3a4ypPF9s4AmxInCv9L0ErtxQ_0u68kZ4Sev3vS8nVWKilLlUXjSgEpeSDsM84WCUz3T8_sm9umESfL7XdyoDXdtXESxRTOpwEYPrKGRUlZRfO4ooZ8hN7YQpMh_p_AxW1qsg6iS91rJnJXi95-GaR-cRSMLbFIZTbwW2D2fvjWMQgyPzIlr0piKwtE-Wt4N58R',
      title: 'Baking Sundays',
      date: 'Winter 2010',
      badgeClass: 'bg-tertiary-container/30 text-on-tertiary-container',
      yOff: 'lg:-translate-y-2'
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsAmFohAED0yRFPLuEy7w6tnCqYNTMtv8gPnmhUi_O1VOwPvs3zK2bxa4yImRvSvvm5LccH3xSV5Q_i_phaqDmvQUt0CYjdJ2ADGGTZTWaBye8ncMkMiD_cMDzUEMBk13XOm576TD0BNYZXHvyHYN_jjGjll6mTIZHFOpdBEsYVZsg-z1obyJAHYurnkLYEaB2FRuItiptEj6PnlN_h_gG9YmoIlcGYKBgWEacWF2TldFRN0_7_zcC8V0fHJa9cY87Nth3LwdjVpan',
      title: 'Graduation Day',
      date: 'Spring 2018',
      badgeClass: 'bg-primary-container/30 text-on-primary-container',
      yOff: 'sm:translate-y-6 lg:translate-y-4'
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6Qvq_KGxOnc1zUqnw6pYYCbwLLswfSL3qf2RKxo47G8Xn6yI0pH2DXsaVyiC97J0xcpHsj8BKBwOgJo0Uz4j_4-7wij7p2dB5ATbd5SkrDr-gMSRaF_M0zlrp4tE1D0WbNBv4YBr-d1Qyp_lwDOESofrzpzuZk89Wt3nnm7cKnJdLng-_ql6Nn4WInIcJWKHKVF86KnRW99AiK5s0SB9_lpupc2pwNA3Bo0UdZaybSHYhdNbkkOZcEgb-YY4ArUjcd61rv4xQzjkP',
      title: 'Family Reunion',
      date: 'Fall 2022',
      badgeClass: 'bg-secondary-container/50 text-on-secondary-container',
      yOff: ''
    }
  ];

  return (
    <div className="flex-1 px-4 md:px-section-padding py-8 z-10 w-full max-w-7xl mx-auto pb-24 md:pb-32 overflow-x-hidden">
      <div className="text-center mb-10 md:mb-12 pt-4 md:pt-8">
        <h1 className="font-display-lg text-[48px] md:text-[64px] text-on-surface mb-3 md:mb-4 drop-shadow-sm leading-none">Memory Gallery</h1>
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
              <p className="font-display-lg text-[26px] md:text-[24px] text-on-surface mb-2">{img.title}</p>
              <div className={`inline-flex items-center justify-center px-4 py-1.5 md:px-3 md:py-1 rounded-full font-sans text-[10px] uppercase font-semibold tracking-wider ${img.badgeClass}`}>
                  {img.date}
              </div>
            </div>
          </div>
        ))}

        <div className="glass-effect rounded-[1.5rem] p-4 flex flex-col items-center justify-center gap-4 soft-shadow hover:-translate-y-1 transition-transform duration-300 border-dashed border-2 border-primary/30 min-h-[350px] md:min-h-[300px] cursor-pointer group">
          <div className="size-16 rounded-full bg-primary-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[32px]">add_photo_alternate</span>
          </div>
          <div className="text-center">
            <p className="font-display-lg text-[26px] md:text-[24px] text-primary mb-1">Add Memory</p>
            <p className="font-sans text-[13px] opacity-75">Upload a new photo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
