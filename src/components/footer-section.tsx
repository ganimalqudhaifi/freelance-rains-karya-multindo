import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function FooterSection() {
  return (
    <div className="px-8 py-12 text-neutral-dark text-center flex flex-col space-y-10 items-center">
      <div className="flex flex-col space-y-8 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={1460}
          height={560}
          className="w-[120px]"
        />
        <p className="max-w-3xl">
          Rains Karya Multindo adalah perusahaan yang bergerak di bidang
          konstruksi, event organizer, creative agency, dan pengadaan barang.
          Dengan pengalaman dan profesionalisme, kami berkomitmen untuk
          memberikan layanan terbaik yang selaras dengan perkembangan teknologi
          dan kebutuhan industri modern.
        </p>
        <ul className="flex space-x-4">
          {navigationLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href} className="p-2.5">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p>© 2025 Rains Karya Multindo. All Rights Reserved.</p>
    </div>
  );
}
