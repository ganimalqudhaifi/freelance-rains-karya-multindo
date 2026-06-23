import Link from "next/link";
import EmailCTA from "./email-cta";
import CustomImage from "./custom-image";
import Reveal from "./reveal";

const socials = [
  {
    href: "https://youtube.com/@rainskaryamultindo",
    icon: "/icons/icon-youtube.svg",
    label: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@rains_km",
    icon: "/icons/icon-tiktok.svg",
    label: "TikTok",
  },
  {
    href: "https://www.instagram.com/rains_km",
    icon: "/icons/icon-instagram.svg",
    label: "Instagram",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary-900 py-20 text-white md:py-28"
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-0">
        <CustomImage
          src="/contact-background.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/85 to-primary-900/60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-16">
        {/* Left: info */}
        <div className="flex flex-col gap-8">
          <Reveal>
            <span className="eyebrow text-gold-400">
              <span className="h-px w-6 bg-gold-500" />
              Hubungi Kami
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Butuh Konsultasi?
              <br />
              Kami Siap Membantu.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-primary-100">
              Sampaikan kebutuhan proyek Anda kepada tim kami. Kami akan
              merespons dengan solusi terbaik.
            </p>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-4">
            <ContactRow icon="/icons/icon-map.svg" label="Alamat">
              Jl. Jaya 25 No.2B1, RT.3/RW.10, Cengkareng Bar., Kecamatan
              Cengkareng, Kota Jakarta Barat, DKI Jakarta 11730
            </ContactRow>

            <ContactRow icon="/icons/icon-phone.svg" label="Telepon">
              <Link
                href="https://wa.me/6282138000629"
                target="_blank"
                className="transition-colors hover:text-gold-400"
              >
                0821-3800-0629
              </Link>
            </ContactRow>

            <ContactRow icon="/icons/icon-envelope.svg" label="Email">
              <span className="flex flex-col">
                <EmailCTA
                  email="rains.km.management@gmail.com"
                  label="rains.km.management@gmail.com"
                />
                <EmailCTA
                  email="rainskaryamultindo@gmail.com"
                  label="rainskaryamultindo@gmail.com"
                />
              </span>
            </ContactRow>
          </Reveal>

          <Reveal delay={200}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-100">
              Sosial Media
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="group flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:bg-white/10"
                >
                  <CustomImage
                    src={social.icon}
                    width={24}
                    height={24}
                    alt=""
                    className="size-5 transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              ))}
              <span className="ml-1 text-sm text-primary-100">@rains_km</span>
            </div>
          </Reveal>
        </div>

        {/* Right: map */}
        <Reveal animation="scale-in" delay={120} className="min-h-[20rem] lg:min-h-full">
          <div className="h-full overflow-hidden rounded-2xl border border-white/10 shadow-card">
            <iframe
              className="h-full min-h-[20rem] w-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.025695919987!2d106.7215956!3d-6.1272444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d62166da771%3A0x8ae38bc17b7dc33!2sRAINS%20GROUP!5e0!3m2!1sid!2sid!4v1754743272501!5m2!1sid!2sid"
              loading="lazy"
              title="Lokasi Rains Karya Multindo"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-white/20">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-500">
        <CustomImage
          src={icon}
          width={24}
          height={24}
          alt=""
          className="size-5 brightness-0"
        />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
          {label}
        </p>
        <div className="mt-1 text-sm leading-relaxed text-primary-100">
          {children}
        </div>
      </div>
    </div>
  );
}
