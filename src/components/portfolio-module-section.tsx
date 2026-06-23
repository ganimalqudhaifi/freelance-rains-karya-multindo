"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import CustomImage from "./custom-image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Modal from "./modal";
import Reveal from "./reveal";

export default function PortfolioModuleSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <section
        id="portfolio"
        className="bg-white py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl text-center md:text-left">
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-500" />
                Portfolio
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary-900 md:text-4xl">
                Karya yang Berbicara
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-dark">
                Jelajahi ragam proyek kami di bidang konstruksi, event,
                pengadaan barang, dan creative studio.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-primary-200 bg-white px-6 py-3 text-sm font-semibold text-primary-800 transition-all duration-300 hover:border-primary-300 hover:bg-primary-50"
            >
              Lihat Semua
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>

          <Reveal animation="fade-in" className="mt-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {Array.from({ length: 15 }).map((_, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-4 sm:basis-1/2 lg:basis-1/3"
                  >
                    <button
                      onClick={() => {
                        setIsModalOpen(true);
                        setIndex(i + 1);
                      }}
                      className="group relative block w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-primary-900/5"
                      aria-label={`Perbesar gambar portfolio ${i + 1}`}
                    >
                      <CustomImage
                        alt={`Portfolio Rains Karya Multindo ${i + 1}`}
                        src={`/portfolio/rains-group-portfolio-${i + 1}.jpg`}
                        width={1200}
                        height={800}
                        className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="absolute bottom-4 right-4 flex size-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-primary-800 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <Maximize2 className="size-4" />
                      </span>
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 size-10 border-primary-200 bg-white text-primary-800 hover:bg-primary-50 disabled:opacity-40 md:-left-5" />
              <CarouselNext className="right-0 size-10 border-primary-200 bg-white text-primary-800 hover:bg-primary-50 disabled:opacity-40 md:-right-5" />
            </Carousel>
          </Reveal>
        </div>
      </section>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CustomImage
            alt={`Portfolio Rains Karya Multindo ${index}`}
            src={`/portfolio/rains-group-portfolio-${index}.jpg`}
            width={1200}
            height={800}
            className="rounded-lg"
          />
        </Modal>
      )}
    </>
  );
}
