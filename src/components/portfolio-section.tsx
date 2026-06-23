"use client";
import { useState } from "react";
import CustomImage from "./custom-image";
import portfolioData from "@/data/portfolioItems.json";
const portfolioItems = portfolioData.items;
import Modal from "./modal";
import Reveal from "./reveal";
import { cn } from "@/lib/utils";
import { Maximize2 } from "lucide-react";

export default function PortfolioSection() {
  const categories = [...new Set(portfolioItems.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const filtered = portfolioItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <>
      <section className="bg-white pb-24 pt-28 md:pt-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold-500" />
              Portfolio Kami
              <span className="h-px w-6 bg-gold-500" />
            </span>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary-900 md:text-5xl">
              Proyek Unggulan Rains Karya Multindo
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-dark">
              Temukan berbagai proyek dalam bidang konstruksi, pengadaan barang,
              dan creative studio — wujud komitmen kami pada kualitas tinggi dan
              inovasi terbaru.
            </p>
          </Reveal>

          {/* Tabs */}
          <Reveal animation="fade-in" className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                  activeCategory === category
                    ? "border-primary-700 bg-primary-700 text-white shadow-soft"
                    : "border-neutral-400 bg-white text-primary-800 hover:border-primary-300 hover:bg-primary-50"
                )}
              >
                {category}
              </button>
            ))}
          </Reveal>

          {/* Grid */}
          <div
            key={activeCategory}
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map((item, i) => (
              <Reveal
                key={item.image}
                delay={(i % 8) * 60}
                animation="scale-in"
              >
                <button
                  onClick={() => setModalImage(item.image)}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-primary-900/5"
                  aria-label={`Perbesar ${item.category}`}
                >
                  <CustomImage
                    width={854}
                    height={570}
                    src={item.image}
                    alt={item.category}
                    className="aspect-square h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 right-4 flex translate-y-2 items-center justify-between opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-sm font-semibold text-white">
                      {item.category}
                    </span>
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/90 text-primary-800">
                      <Maximize2 className="size-4" />
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {modalImage && (
        <Modal onClose={() => setModalImage(null)} aria-label="Portfolio Rains Karya Multindo">
          <CustomImage
            src={modalImage}
            width={1200}
            height={800}
            alt={activeCategory}
            className="max-h-[80vh] w-auto rounded-lg object-contain"
          />
        </Modal>
      )}
    </>
  );
}
