import Image from "next/image";

export default function AboutSection() {
  return (
    <div
      className="p-16 flex flex-col items-center text-primary-800"
      id="about"
    >
      <div className="text-center w-9/12">
        <h2 className="text-3xl font-semibold text-primary-900">
          Tentang Kami
        </h2>
        <p className="text-lg mt-4 ">
          Rains Karya Multindo adalah perusahaan yang bergerak di bidang jasa
          konstruksi, event organizer, creative agency, dan pengadaan barang.
          Kami terus berkembang di era digital untuk memberikan layanan yang
          inovatif, berkualitas, dan sesuai dengan kebutuhan modern.
        </p>
      </div>
      <div className="flex justify-between mt-16 space-x-10">
        <div className="w-full h-full">
          <Image
            src="/about.jpg"
            alt="about image"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
        <div className="text-lg flex flex-col justify-center space-y-4">
          <h3 className="font-semibold text-2xl text-primary-900">Visi Kami</h3>
          <p className="">
            Menjadi perusahaan kompetitif di industri barang dan jasa dengan
            menghadirkan solusi terbaik serta menerapkan modernisasi agar
            selaras dengan kemajuan teknologi.
          </p>
          <h3 className="font-semibold text-2xl text-primary-900">Misi Kami</h3>
          <ul className="space-y-2 ">
            <li className="flex space-x-3 items-start">
              <span className="mt-0.5">✅</span>
              <span>
                Memberikan layanan konstruksi, event, dan pengadaan barang
                dengan standar terbaik.
              </span>
            </li>
            <li className="flex space-x-3 items-start">
              <span className="mt-0.5">✅</span>
              <span>
                Mengutamakan kualitas dan kepuasan klien melalui standar
                operasional yang jelas.
              </span>
            </li>
            <li className="flex space-x-3 items-start">
              <span className="mt-0.5">✅</span>
              <span>
                Mengikuti perkembangan teknologi agar selalu relevan dan
                inovatif.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
