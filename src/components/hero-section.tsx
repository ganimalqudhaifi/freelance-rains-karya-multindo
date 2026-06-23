import Link from "next/link";
import { ArrowUpRight, Download, ShieldCheck } from "lucide-react";
import CustomImage from "./custom-image";

const highlights = [
  "Design & Konstruksi",
  "Interior & Eksterior",
  "Pengadaan Barang",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-neutral-light"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 size-[420px] rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute right-0 top-1/3 size-[360px] rounded-full bg-gold-100/70 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1d2857 1px, transparent 1px), linear-gradient(to bottom, #1d2857 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-12 md:gap-10 md:px-12 md:pb-24 md:pt-20 lg:grid-cols-2 lg:px-16">
        {/* Copy */}
        <div className="flex flex-col gap-7 text-center lg:text-left">
          <span className="eyebrow mx-auto animate-fade-up lg:mx-0">
            <span className="h-px w-6 bg-gold-500" />
            Rains Karya Multindo
          </span>

          <h1 className="animate-fade-up font-display text-4xl font-semibold leading-[1.1] text-primary-900 [animation-delay:80ms] sm:text-5xl lg:text-6xl">
            Mewujudkan Imajinasi dalam{" "}
            <span className="relative whitespace-nowrap text-primary-700">
              Konstruksi
              <svg
                className="absolute -bottom-2 left-0 w-full text-gold-500"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Interior & Eksterior
          </h1>

          <p className="mx-auto max-w-xl animate-fade-up text-lg leading-relaxed text-neutral-dark [animation-delay:160ms] lg:mx-0">
            Kami hadir dengan solusi terbaik untuk kebutuhan konstruksi interior
            dan eksterior Anda — dikerjakan dengan standar profesional, presisi,
            dan inovasi modern.
          </p>

          <div className="flex animate-fade-up flex-col items-center justify-center gap-3 [animation-delay:240ms] sm:flex-row lg:justify-start">
            <Link
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary-900 hover:shadow-card sm:w-auto"
            >
              Hubungi Kami
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/files/rains-karya-multindo-company-profile.pdf"
              download
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-200 bg-white px-7 py-3.5 text-base font-semibold text-primary-800 transition-all duration-300 hover:border-primary-300 hover:bg-primary-50 sm:w-auto"
            >
              <Download className="size-5 text-gold-600 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Company Profile
            </Link>
          </div>

          {/* Highlight pills */}
          <ul className="flex animate-fade-up flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2 [animation-delay:320ms] lg:justify-start">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-primary-700"
              >
                <ShieldCheck className="size-4 text-gold-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-md animate-scale-in [animation-delay:200ms] lg:max-w-none">
          {/* Gold frame accent */}
          <div className="absolute -right-3 -top-3 bottom-6 left-6 -z-10 rounded-[2rem] border-2 border-gold-400/70" />
          <div className="absolute -bottom-4 -left-4 -z-10 size-28 rounded-3xl bg-primary-700/10" />

          <div className="overflow-hidden rounded-[1.75rem] shadow-card ring-1 ring-primary-900/5">
            <CustomImage
              src="/hero.png"
              width={595}
              height={897}
              alt="Proyek konstruksi gedung oleh Rains Karya Multindo"
              priority
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 animate-float items-center gap-3 rounded-2xl border border-neutral-400 bg-white/95 px-5 py-3 shadow-card backdrop-blur lg:left-auto lg:right-6 lg:translate-x-0">
            <span className="font-display text-3xl font-bold text-primary-700">
              100<span className="text-gold-500">+</span>
            </span>
            <span className="text-left text-xs font-medium leading-tight text-neutral-dark">
              Proyek
              <br />
              Terselesaikan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
