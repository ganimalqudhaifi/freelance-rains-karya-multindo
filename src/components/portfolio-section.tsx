"use client";
import { useEffect, useRef, useState } from "react";
import portfolioItems from "@/data/portfolioItems.json";
import CustomImage from "./custom-image";

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const activeRef = useRef(null);

  const btns = [...new Set(portfolioItems.map((item) => item.category))];

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="px-4 md:px-16 py-8 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-primary-900">Portfolio Kami</h2>
      <p className="text-lg max-w-[800px] mt-6 text-primary-700">
        Temukan berbagai proyek unggulan Rains Karya Multindo dalam bidang
        konstruksi, event organizer, pengadaan barang, dan creative studio. Kami
        berkomitmen memberikan solusi terbaik dengan kualitas tinggi dan inovasi
        terbaru.
      </p>

      <div className="mt-10 flex flex-col md:flex-row bg-neutral-400 rounded-[10px] relative w-[calc(100%-32px)] md:w-[calc(100%-96px)]">
        <div
          ref={activeRef}
          className={`absolute bg-white rounded-[10px] shadow duration-300 translate-y-[5px] translate-x-[5px]`}
          style={
            isDesktop
              ? {
                  width: `calc(100% / ${btns.length} - 10px)`,
                  height: `calc(100% - 10px)`,
                  left: `${(100 / btns.length) * activeIndex}%`,
                }
              : {
                  width: `calc(100% - 10px)`,
                  height: `calc(100% / ${btns.length} - 10px)`,
                  top: `${(100 / btns.length) * activeIndex}%`,
                }
          }
        />
        {btns.map((tab, index) => (
          <button
            className="w-full bg-transparent p-2.5 z-20 text-primary-900"
            key={index}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="min-h-[calc(18rem*2)]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          {portfolioItems
            .filter((item) => item.category === btns[activeIndex])
            .map((item, index) => (
              <div key={index} className="relative">
                <CustomImage
                  width={854}
                  height={570}
                  src={item.image}
                  alt={item.category}
                  className="size-80 md:size-72 object-cover rounded-[10px]"
                />
                <div className="hidden absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 rounded-b-[10px]">
                  <p className="text-primary-900 font-bold">{item.category}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
