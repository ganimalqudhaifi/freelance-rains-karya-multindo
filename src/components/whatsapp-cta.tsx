import Link from "next/link";
import CustomImage from "./custom-image";

export default function WhatsappCTA() {
  return (
    <Link
      href="https://wa.me/6282138000629"
      target="_blank"
      className="fixed bottom-6 right-4 md:bottom-8 md:right-6 shadow-inherit z-50"
    >
      <CustomImage
        src="/icons/icon-whatsapp.png"
        alt=""
        width={512}
        height={512}
        className="size-14 md:size-16 hover:scale-105 active:scale-100 duration-200"
      />
    </Link>
  );
}
