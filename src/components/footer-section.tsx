import Link from "next/link";
import CustomImage from "./custom-image";

const navigationLinks = [
  { name: "Beranda", href: "/#home" },
  { name: "Tentang", href: "/#about" },
  { name: "Layanan", href: "/#services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Profil", href: "/profile" },
  { name: "Kontak", href: "/#contact" },
];

const socials = [
  { href: "https://youtube.com/@rainskaryamultindo", icon: "/icons/icon-youtube.svg", label: "YouTube" },
  { href: "https://www.tiktok.com/@rains_km", icon: "/icons/icon-tiktok.svg", label: "TikTok" },
  { href: "https://www.instagram.com/rains_km", icon: "/icons/icon-instagram.svg", label: "Instagram" },
];

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-primary-900 text-primary-100">
      <div className="absolute -right-20 -top-20 size-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-6 lg:col-span-5">
            <span className="inline-flex rounded-xl bg-white px-4 py-3">
              <CustomImage
                src="/logo.png"
                alt="Logo Rains Karya Multindo"
                width={1460}
                height={560}
                className="w-[130px]"
              />
            </span>
            <p className="mt-6 max-w-md leading-relaxed text-primary-100/90">
              Perusahaan yang bergerak di bidang konstruksi, event organizer,
              creative agency, dan pengadaan barang. Kami berkomitmen memberikan
              layanan terbaik yang selaras dengan perkembangan teknologi dan
              kebutuhan industri modern.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3 lg:col-span-3 lg:col-start-7">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigasi
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-100/80 transition-colors hover:text-gold-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Terhubung
            </h3>
            <div className="mt-5 space-y-2 text-sm text-primary-100/80">
              <p>0821-3800-0629</p>
              <p className="break-all">rainskaryamultindo@gmail.com</p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:bg-white/10"
                >
                  <CustomImage
                    src={social.icon}
                    width={24}
                    height={24}
                    alt=""
                    className="size-5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-primary-100/70">
            © 2025 Rains Karya Multindo. All Rights Reserved.
          </p>
          <p className="text-sm text-primary-100/70">
            Dibangun dengan dedikasi & presisi.
          </p>
        </div>
      </div>
    </footer>
  );
}
