import CustomImage from "./custom-image";

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
    <section className="px-8 md:px-24 pt-16 bg-primary-dark text-center flex flex-col items-center">
      <h2 className="text-neutral-400 text-3xl font-bold">Our Clients</h2>
      <p className="text-neutral-400 text-lg mt-4">
        Di Rains Karya Multindo, kami berfokus pada pasar di mana teknologi,
        inovasi, dan investasi dapat menciptakan nilai jangka panjang.
        Kepercayaan klien adalah bukti dedikasi kami dalam memberikan solusi
        terbaik.
      </p>
      <div className="grid grid-cols-2 md:px-20 md:grid-cols-6 mt-8 gap-8 md:gap-4">
        {clients.map((client) => (
          <CustomImage
            key={client.name}
            src={client.image}
            width={180}
            height={170}
            alt={client.name}
            className="rounded-xl bg-white"
          />
        ))}
      </div>
    </section>
  );
}
