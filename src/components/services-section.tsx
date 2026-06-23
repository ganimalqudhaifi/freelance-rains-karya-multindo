import CustomImage from "./custom-image";
import Reveal from "./reveal";

const services = [
  {
    iconPath: "/icons/icon-tools.svg",
    title: "Design & Konstruksi",
    description:
      "Layanan terpadu dari konsultasi desain exterior dan interior, pembangunan rumah tinggal maupun kantor, renovasi dan remodeling, pekerjaan finishing seperti pengecatan dan epoxy, hingga instalasi serta sistem kelistrikan untuk berbagai skala.",
  },
  {
    iconPath: "/icons/icon-sofa.svg",
    title: "Rumah Tinggal & Kantor",
    description:
      "Mewujudkan hunian dan ruang kerja yang nyaman, fungsional, dan estetis melalui pembangunan dari nol, renovasi, penataan ruang yang lebih efisien, serta penyesuaian desain sesuai kebutuhan dan anggaran.",
  },
  {
    iconPath: "/icons/icon-bolt.svg",
    title: "AC Service & Instalasi",
    description:
      "Layanan AC profesional mencakup instalasi unit baru untuk rumah dan kantor, perawatan dan pencucian rutin, perbaikan berbagai masalah, hingga bongkar pasang dan relokasi unit — ditangani teknisi berpengalaman.",
  },
  {
    iconPath: "/icons/icon-crane.svg",
    title: "Pengadaan Barang",
    description:
      "Solusi pengadaan kebutuhan operasional bisnis dan proyek, mulai dari alat tulis kantor (ATK), peralatan elektrik dan teknikal, kebutuhan konstruksi, hingga seragam kerja dan garment secara praktis dan efisien.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-neutral-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold-500" />
            Layanan & Produk
            <span className="h-px w-6 bg-gold-500" />
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary-900 md:text-4xl">
            Apa yang Kami Tawarkan
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-dark">
            Bersama Rains Karya Multindo, wujudkan proyek Anda dengan kualitas
            dan profesionalisme terbaik.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 90}
              animation="fade-up"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-400/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary-200 hover:shadow-card"
            >
              {/* Gold top accent on hover */}
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />

              <span className="absolute right-5 top-5 font-display text-5xl font-bold text-primary-50 transition-colors duration-300 group-hover:text-gold-100">
                0{i + 1}
              </span>

              <div className="relative flex size-14 items-center justify-center rounded-xl bg-primary-700 shadow-soft transition-all duration-300 group-hover:bg-primary-900">
                <CustomImage
                  src={service.iconPath}
                  alt=""
                  width={24}
                  height={24}
                  className="size-7 brightness-0 invert"
                />
              </div>

              <h3 className="relative mt-6 font-display text-xl font-semibold text-primary-900">
                {service.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-neutral-dark">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
