import CustomImage from "./custom-image";
import Reveal from "./reveal";

const clients = [
  {
    name: "citra-living-apartment",
    image: "/clients/citra-living-apartment.png",
  },
  { name: "pln-heleyora-power", image: "/clients/pln-heleyora-power.png" },
  {
    name: "pt-zhi-xing-indonesia",
    image: "/clients/pt-zhi-xing-indonesia.png",
  },
  { name: "shopee", image: "/clients/shopee.png" },
  { name: "smkn-9-jkt", image: "/clients/smkn-9-jkt.png" },
  { name: "smkn-72-jkt", image: "/clients/smkn-72-jkt.png" },
];

export default function OurClients() {
  return (
    <section className="border-y border-neutral-400 bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold-500" />
            Dipercaya Oleh
            <span className="h-px w-6 bg-gold-500" />
          </span>
          <p className="mt-4 text-base leading-relaxed text-neutral-dark">
            Kepercayaan klien adalah bukti dedikasi kami dalam memberikan solusi
            terbaik di bidang konstruksi, pengadaan, dan layanan kreatif.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {clients.map((client, i) => (
            <Reveal
              key={client.name}
              delay={i * 70}
              animation="scale-in"
              className="group flex items-center justify-center rounded-2xl border border-neutral-400/70 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-soft"
            >
              <CustomImage
                src={client.image}
                width={180}
                height={170}
                alt={`Logo ${client.name.replace(/-/g, " ")}`}
                className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
