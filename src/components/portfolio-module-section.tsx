"use client";
import { useState } from "react";
import CustomImage from "./custom-image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Modal from "./modal";

export default function PortfolioModuleSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <section
        className="p-16 flex flex-col items-center text-primary-900 text-lg space-y-4"
        id="portfolio"
      >
        <h2 className="font-bold text-3xl lg:text-4xl text-center">
          Portfolio
        </h2>
        <p className="text-center lg:text-xl text-neutral-dark w-full max-w-screen-md">
          Explore our diverse portfolio showcasing our expertise in
          construction, event organization, procurement, and creative studio
          projects.
        </p>
        <Carousel opts={{ align: "start" }} className="w-full max-w-screen-md">
          <CarouselNext />
          <CarouselContent className="-ml-4 hover:cursor-pointer">
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem key={index} className="pl-4">
                <CustomImage
                  alt=""
                  src={`/portfolio/rains-group-portfolio-${index + 1}.jpg`}
                  width={1200}
                  height={800}
                  onClick={() => {
                    setIsModalOpen(true);
                    setIndex(index + 1);
                  }}
                  className="rounded"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
        </Carousel>
      </section>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CustomImage
            alt=""
            src={`/portfolio/rains-group-portfolio-${index}.jpg`}
            width={1200}
            height={800}
            className="rounded animate-fade-out duration-500 ease-in-out"
          />
        </Modal>
      )}
    </>
  );
}
