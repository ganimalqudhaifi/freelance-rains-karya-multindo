import Link from "next/link";
import CustomImage from "./custom-image";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row pt-8 pl-8 md:pl-16 items-start justify-between overflow-hidden md:overflow-visible text-primary-900"
      id="home"
    >
      <div className="md:sticky md:top-[220px] md:mb-36 w-full md:w-[500px] flex flex-col space-y-5 text-center md:text-left pr-8 md:pr-0">
        <h1 className="font-bold text-4xl">
          Mewujudkan Inovasi dalam Konstruksi, Event, dan Kreativitas
        </h1>
        <p className="text-xl">
          Dari jasa konstruksi hingga event organizer dan creative agency, kami
          hadir dengan solusi terbaik untuk kebutuhan Anda. Rains Karya Multindo
          berkomitmen memberikan layanan berkualitas dengan standar profesional
          dan inovasi modern.
        </p>
        <div className="text-xl flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 font-semibold">
          {/* <Link
            href="#services"
            className="px-4 py-2 bg-primary-dark text-neutral-light rounded-lg duration-300 hover:shadow-md hover:bg-primary-600"
          >
            Lihat Layanan
          </Link> */}
          <Link
            href="/files/rains-karya-multindo-company-profile.pdf"
            download
            className="px-4 py-2 bg-primary-dark text-neutral-light rounded-lg duration-300 hover:shadow-md hover:bg-primary-600"
          >
            Rains Portfolio PDF
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 bg-neutral-light text-primary-dark border border-neutral rounded-lg duration-300 hover:bg-neutral-400 hover:shadow-md"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
      <div className="overflow-hidden">
        <CustomImage
          src="/hero.png"
          width={595}
          height={897}
          alt="hero image"
          className="-mb-1 pt-10 md:pt-0"
        />
      </div>
    </section>
  );
}
