import { Check } from "lucide-react";
import CustomImage from "./custom-image";
import Reveal from "./reveal";

const missions = [
  "Memberikan layanan konstruksi, event, dan pengadaan barang dengan standar terbaik.",
  "Mengutamakan kualitas dan kepuasan klien melalui standar operasional yang jelas.",
  "Mengikuti perkembangan teknologi agar selalu relevan dan inovatif.",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold-500" />
            Tentang Kami
            <span className="h-px w-6 bg-gold-500" />
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary-900 md:text-4xl">
            Mitra Terpercaya untuk Setiap Proyek Anda
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-dark">
            Rains Karya Multindo adalah perusahaan yang bergerak di bidang jasa
            konstruksi, event organizer, creative agency, dan pengadaan barang.
            Kami terus berkembang di era digital untuk memberikan layanan yang
            inovatif, berkualitas, dan sesuai dengan kebutuhan modern.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal animation="fade-up" className="relative">
            <div className="absolute -left-4 -top-4 -z-10 size-32 rounded-3xl bg-gold-100" />
            <div className="absolute -bottom-4 -right-4 -z-10 size-40 rounded-3xl border-2 border-primary-100" />
            <div className="overflow-hidden rounded-[1.75rem] shadow-card ring-1 ring-primary-900/5">
              <CustomImage
                src="/about.jpg"
                alt="Tim insinyur Rains Karya Multindo di lokasi proyek"
                width={1200}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>

          {/* Vision & Mission */}
          <div className="flex flex-col gap-8">
            <Reveal delay={80} className="rounded-2xl border border-neutral-400/70 bg-neutral-light p-7 shadow-sm">
              <h3 className="flex items-center gap-3 font-display text-2xl font-semibold text-primary-900">
                <span className="inline-block h-6 w-1 rounded-full bg-gold-500" />
                Visi Kami
              </h3>
              <p className="mt-3 leading-relaxed text-neutral-dark">
                Menjadi perusahaan kompetitif di industri barang dan jasa dengan
                menghadirkan solusi terbaik serta menerapkan modernisasi agar
                selaras dengan kemajuan teknologi.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <h3 className="flex items-center gap-3 font-display text-2xl font-semibold text-primary-900">
                <span className="inline-block h-6 w-1 rounded-full bg-gold-500" />
                Misi Kami
              </h3>
              <ul className="mt-4 space-y-3">
                {missions.map((mission, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-700 text-white">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed text-neutral-dark">
                      {mission}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
