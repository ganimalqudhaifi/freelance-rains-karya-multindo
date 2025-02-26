import Image from "next/image";
import Link from "next/link";
import EmailCTA from "./email-cta";

export default function ContactSection() {
  return (
    <div
      className="relative flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-32 p-8 md:p-16 bg-cover bg-[url(/contact-background.jpg)] text-neutral-light after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-70 after:z-0"
      id="contact"
    >
      <div className="shrink-0 md:w-1/3 relative z-10 flex flex-col space-y-8">
        <h2 className="text-4xl font-bold">
          Butuh Konsultasi..?
          <br />
          Silahkan kontak kami
          <br />
          Kami siap membantu
        </h2>
        <div>
          <h3 className="text-lg font-semibold">Kontak</h3>
          <div className="flex flex-col space-y-3 mt-4">
            <div className="flex items-start space-x-4">
              <Image
                src="/icons/icon-map.svg"
                width={24}
                height={24}
                alt="map icon"
                className="size-8"
              />
              <p>
                Jl. Jaya 25 No.2B1, RT.3/RW.10, Cengkareng Bar., Kecamatan
                Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta
                11730
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <Image
                src="/icons/icon-phone.svg"
                width={24}
                height={24}
                alt="phone icon"
                className="size-6"
              />
              <p>0821-3800-0629</p>
            </div>
            <div className="flex items-start space-x-4">
              <Image
                src="/icons/icon-envelope.svg"
                width={24}
                height={24}
                alt="envelope icon"
                className="size-6 mt-1"
              />
              <div className="flex flex-col">
                <EmailCTA
                  email="rains.km.management@gmail.com"
                  label="rains.km.management@gmail.com"
                />
                <EmailCTA
                  email="rainskaryamultindo@gmail.com"
                  label="rainskaryamultindo@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Sosial Media</h3>
          <div className="mt-4 flex space-x-4 items-center">
            <Link
              href="https://youtube.com/@rainskaryamultindo"
              target="_blank"
            >
              <Image
                src="/icons/icon-youtube.svg"
                width={24}
                height={24}
                alt="youtube icon"
                className="size-8"
              />
            </Link>
            <Link href="https://www.tiktok.com/@rains_km" target="_blank">
              <Image
                src="/icons/icon-tiktok.svg"
                width={24}
                height={24}
                alt="tiktok icon"
                className="size-8"
              />
            </Link>
            <Link href="https://www.instagram.com/rains_km" target="_blank">
              <Image
                src="/icons/icon-instagram.svg"
                width={24}
                height={24}
                alt="instagram icon"
                className="size-8"
              />
            </Link>
            <p>@rains_km</p>
          </div>
        </div>
      </div>
      <div className="z-10 w-full">
        <iframe
          className="w-full h-full min-h-72 border-0 rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.025516345717!2d106.7190677741299!3d-6.1272685600762005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a0300413b3ae1%3A0x85c654ca73b29f14!2sRains%20Entertainment!5e0!3m2!1sid!2sid!4v1739213789627!5m2!1sid!2sid"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
