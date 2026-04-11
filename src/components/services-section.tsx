import CustomImage from "./custom-image";

const services = [
  {
    iconPath: "/icons/icon-tools.svg",
    title: "Design & Konstruksi",
    description:
      "Kami menyediakan layanan terpadu mulai dari konsultasi desain exterior dan interior, pembangunan rumah tinggal maupun kantor, renovasi dan remodeling bangunan, pekerjaan finishing seperti pengecatan dan epoxy, hingga instalasi serta sistem kelistrikan untuk berbagai skala, sehingga cocok untuk kebutuhan pembangunan baru, renovasi, maupun peningkatan fasilitas secara menyeluruh.",
  },
  {
    iconPath: "/icons/icon-sofa.svg",
    title: "Rumah Tinggal & Kantor",
    description:
      "Kami membantu mewujudkan hunian dan ruang kerja yang nyaman, fungsional, dan estetis melalui pembangunan dari nol, renovasi rumah dan kantor, penataan ruang yang lebih efisien, serta penyesuaian desain sesuai kebutuhan dan anggaran, dengan fokus pada kenyamanan, efisiensi, dan tampilan yang profesional.",
  },
  {
    iconPath: "/icons/icon-bolt.svg",
    title: "AC Service & Instalasi",
    description:
      "Kami menyediakan layanan AC profesional yang mencakup instalasi unit baru untuk rumah dan kantor, perawatan dan pencucian rutin, perbaikan berbagai masalah seperti AC tidak dingin atau bocor, hingga bongkar pasang dan relokasi unit, dengan pengerjaan yang cepat, rapi, dan ditangani teknisi berpengalaman.",
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
      "Kami menyediakan solusi pengadaan berbagai kebutuhan operasional bisnis dan proyek, mulai dari alat tulis kantor (ATK), peralatan elektrik dan teknikal, kebutuhan konstruksi, hingga seragam kerja dan garment, sehingga memudahkan Anda mendapatkan produk berkualitas secara praktis dan efisien.",
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
