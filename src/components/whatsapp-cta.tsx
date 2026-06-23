import Link from "next/link";
import CustomImage from "./custom-image";

export default function WhatsappCTA() {
  return (
    <Link
      href="https://wa.me/6282138000629"
      target="_blank"
      aria-label="Hubungi kami via WhatsApp"
      className="group fixed bottom-6 right-4 z-50 md:bottom-8 md:right-6"
    >
      <span className="relative flex">
        {/* Pulsing ring */}
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-pulse-ring" />
        <CustomImage
          src="/icons/icon-whatsapp.png"
          alt=""
          width={512}
          height={512}
          className="size-14 drop-shadow-lg transition-transform duration-200 group-hover:scale-110 group-active:scale-100 md:size-16"
        />
      </span>
    </Link>
  );
}
