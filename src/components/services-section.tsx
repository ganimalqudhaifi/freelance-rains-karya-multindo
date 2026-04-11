import CustomImage from "./custom-image";

const services = [
  {
    iconPath: "/icons/icon-tools.svg",
    title: "Konstruksi Sipil",
    description:
      "Kami menyediakan layanan konstruksi sipil yang mencakup konsultasi, pembangunan rumah dan ruangan, renovasi bangunan, serta pengecatan gedung atau lapangan dengan teknik epoxy untuk hasil yang tahan lama dan berkualitas.",
  },
  {
    iconPath: "/icons/icon-sofa.svg",
    title: "Konstruksi Interior",
    description:
      "Membantu menciptakan ruang yang nyaman dan fungsional melalui layanan konsultasi desain interior, pembangunan interior ruangan, serta pembuatan kitchen set yang disesuaikan dengan kebutuhan pelanggan.",
  },
  {
    iconPath: "/icons/icon-bolt.svg",
    title: "Konstruksi Elektrik",
    description:
      "Layanan kelistrikan profesional untuk berbagai skala, mulai dari konsultasi, pemasangan listrik daya besar dan kecil, penambahan daya, hingga instalasi sistem kelistrikan industri dan rumah tangga serta pemasangan penangkal petir.",
  },
  // {
  //   iconPath: "/icons/icon-festival.svg",
  //   title: "Event Organizer",
  //   description:
  //     "Kami siap membantu dalam perencanaan dan penyelenggaraan berbagai acara, mulai dari konser sekolah (pensi) hingga acara korporasi, dengan layanan konsultasi dan eksekusi yang profesional.",
  // },
  {
    iconPath: "/icons/icon-crane.svg",
    title: "Pengadaan Barang",
    description:
      "Menyediakan berbagai kebutuhan bisnis dan industri, termasuk pengadaan alat tulis kantor (ATK), perlengkapan elektrik, produk kimia, hingga seragam dan garment dengan kualitas terbaik.",
  },
  // {
  //   iconPath: "/icons/icon-camera.svg",
  //   title: "Creative Studio & Agency",
  //   description:
  //     "Mendukung kebutuhan dokumentasi dan produksi media melalui layanan fotografi dan videografi profesional, editing video dan foto, pilot drone, serta penyediaan talent entertainment dan host live untuk berbagai acara.",
  // },
];

export default function ServicesSection() {
  return (
    <div
      className="p-16 flex flex-col items-center text-primary-900 text-lg"
      id="services"
    >
      <h2 className="font-bold text-3xl text-center">Layanan & Produk Kami</h2>
      <p className="text-center mt-4 text-neutral-dark">
        Bersama Rains Karya Multindo, wujudkan proyek Anda dengan kualitas dan
        profesionalisme terbaik!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-12 justify-center max-w-[1040px]">
        {services.map((service, i) => (
          <div
            className="flex flex-col text-center items-center justify-start space-y-2.5"
            key={i}
          >
            <div className="bg-primary-100 w-fit p-3.5 rounded-full">
              <CustomImage
                src={service.iconPath}
                alt=""
                width={24}
                height={24}
                className="size-8"
              />
            </div>
            <h3 className="font-semibold text-xl">{service.title}</h3>
            <p className="text-neutral-dark">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
