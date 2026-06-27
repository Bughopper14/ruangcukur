import { useState } from "react";
import { Scissors, Clock, ArrowRight } from "lucide-react";

interface GalleryItem {
  id: number;
  src?: string;
  title: string;
  subtitle?: string;
  barber?: string;
  duration?: string;
  span: string;
  objectPosition?: string;
  isDetail?: boolean;
  isCta?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/ruangcukur/images/cut-1.jpg",
    title: "The French Crop",
    subtitle: "Textured fringe with razor-sharp fade",
    barber: "Alex",
    duration: "45 min",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    src: "/ruangcukur/images/cut-2.jpg",
    title: "The Executive Quiff",
    subtitle: "Elevated volume, precision taper",
    barber: "Rizky",
    duration: "40 min",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/ruangcukur/images/cut-1.jpg",
    title: "The Classic Fade",
    subtitle: "Clean lines, sharp finish",
    barber: "Ende",
    duration: "40 min",
    span: "col-span-1 row-span-1",
    objectPosition: "80% 50%",
  },
  {
    id: 4,
    src: "/ruangcukur/images/cut-3.jpg",
    title: "The Curl Crop",
    subtitle: "Natural texture, mid fade",
    barber: "Alex",
    duration: "35 min",
    span: "col-span-2 row-span-1",
  },
  {
    id: 5,
    src: "/ruangcukur/images/cut-4.jpg",
    title: "The Buzz",
    subtitle: "Zero guard confidence",
    barber: "Rizky",
    duration: "30 min",
    span: "col-span-1 row-span-2",
  },
  {
    id: 6,
    src: "/ruangcukur/images/cut-2.jpg",
    title: "Texture Detail",
    subtitle: "Volume at crown",
    span: "col-span-1 row-span-1",
    objectPosition: "50% 20%",
    isDetail: true,
  },
  {
    id: 7,
    src: "/ruangcukur/images/cut-3.jpg",
    title: "Curl Pattern",
    subtitle: "Defined ringlets",
    span: "col-span-1 row-span-1",
    objectPosition: "50% 30%",
    isDetail: true,
  },
  {
    id: 8,
    src: "/ruangcukur/images/storefront.jpg",
    title: "The Shop",
    subtitle: "Madison Grande K9, Gading Serpong",
    span: "col-span-1 row-span-1",
    objectPosition: "50% 35%",
  },
  {
    id: 9,
    title: "Book Your Style",
    subtitle: "Your seat is waiting",
    span: "col-span-1 row-span-1",
    isCta: true,
  },
];

export default function GallerySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-[#0A0A0A] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#C9A961] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            The Collection
          </h2>
          <p className="text-[#A0A0A0] max-w-xl leading-relaxed">
            Every cut tells a story. Here is what happens when UK precision meets
            Korean texture — crafted chair by chair.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryItems.map((item) => {
            if (item.isCta) {
              return (
                <a
                  key={item.id}
                  href="https://wa.me/628119451887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${item.span} relative group overflow-hidden rounded-sm border border-[#C9A961]/30 bg-[#C9A961]/5 flex flex-col items-center justify-center text-center p-6 hover:bg-[#C9A961]/10 transition-all duration-500`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Scissors className="w-8 h-8 text-[#C9A961] mb-3" />
                  <h3 className="font-serif text-xl text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-sm mb-4">{item.subtitle}</p>
                  <span className="inline-flex items-center gap-2 text-[#C9A961] text-sm font-medium group-hover:gap-3 transition-all">
                    Reserve Now <ArrowRight size={16} />
                  </span>
                </a>
              );
            }

            return (
              <div
                key={item.id}
                className={`${item.span} relative group overflow-hidden rounded-sm cursor-pointer`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                />

                {/* Dark gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${
                    hoveredId === item.id ? "opacity-100" : "md:opacity-0 opacity-100"
                  }`}
                />

                {/* Content overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-5 transition-all duration-500 ${
                    hoveredId === item.id
                      ? "translate-y-0 opacity-100"
                      : "md:translate-y-4 md:opacity-0 translate-y-0 opacity-100"
                  }`}
                >
                  {item.isDetail && (
                    <span className="text-[#C9A961] text-[10px] uppercase tracking-[0.2em] mb-2">
                      Detail Shot
                    </span>
                  )}
                  <h3
                    className={`font-serif text-white mb-1 ${
                      item.isDetail ? "text-base" : "text-xl md:text-2xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.subtitle && !item.isDetail && (
                    <p className="text-[#A0A0A0] text-sm mb-3">{item.subtitle}</p>
                  )}
                  {item.barber && (
                    <div className="flex items-center gap-4 text-xs text-[#A0A0A0]">
                      <span className="flex items-center gap-1.5">
                        <Scissors size={12} className="text-[#C9A961]" />
                        {item.barber}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} className="text-[#C9A961]" />
                        {item.duration}
                      </span>
                    </div>
                  )}
                </div>

                {/* Gold corner accent on hover */}
                <div
                  className={`absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#C9A961] transition-all duration-500 ${
                    hoveredId === item.id ? "opacity-100" : "md:opacity-0 opacity-0"
                  }`}
                />
                <div
                  className={`absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#C9A961] transition-all duration-500 ${
                    hoveredId === item.id ? "opacity-100" : "md:opacity-0 opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom caption */}
        <p className="text-center text-[#666] text-xs mt-8 tracking-wide">
          All styles crafted in-house at Ruang Cukur .INC — Gading Serpong
        </p>
      </div>
    </section>
  );
}
