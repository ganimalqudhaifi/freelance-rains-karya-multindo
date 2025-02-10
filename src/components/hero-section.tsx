import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex pt-8 pl-16 items-center justify-between overflow-hidden">
      <div className="w-[500px] flex flex-col space-y-5">
        <h1 className="font-bold text-4xl">
          Mewujudkan Inovasi dalam Konstruksi, Event, dan Kreativitas
        </h1>
        <p className="text-xl">
          Dari jasa konstruksi hingga event organizer dan creative agency, kami
          hadir dengan solusi terbaik untuk kebutuhan Anda. Rains Karya Multindo
          berkomitmen memberikan layanan berkualitas dengan standar profesional
          dan inovasi modern.
        </p>
        <div className="text-xl flex space-x-5 font-semibold">
          <Link
            href="#services"
            className="px-5 py-2.5 bg-primary-dark text-neutral-light rounded-lg"
          >
            Lihat Layanan
          </Link>
          <Link
            href="#contact"
            className="px-5 py-2.5 bg-neutral-light text-primary-dark border border-neutral rounded-lg"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
      <Image
        src="/hero.png"
        width={595}
        height={897}
        alt="hero image"
        className="-mb-1"
      />
    </section>
  );
}
