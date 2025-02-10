import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Contact", href: "#" },
];

export default function NavigationHeader() {
  return (
    <div className="flex justify-between items-center px-16 py-7">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={1460}
          height={560}
          className="w-[120px]"
        />
      </div>
      <ul className="flex space-x-4">
        {navigationLinks.map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="p-2.5 text-lg">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
