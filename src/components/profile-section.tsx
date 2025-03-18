import CustomImage from "./custom-image";

export default function ProfileSection() {
  return (
    <section className="px-4 md:px-16 py-4 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-primary-900">
        Mengenal Lebih Dekat Rains Karya Multindo
      </h2>
      <p className="text-lg  mt-6 text-primary-700">
        Di halaman ini, Anda akan mengenal lebih dekat Rains Karya Multindo,
        termasuk tim profesional yang berperan dalam setiap proyek serta
        lingkungan kerja kami. Kami percaya bahwa keberhasilan perusahaan
        didukung oleh kerja tim yang solid, inovasi, dan komitmen terhadap
        kualitas terbaik.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 space-y-8 md:space-y-0 items-stretch mt-8 md:px-24">
        <div className="row-span-4 col-span-2 relative rounded-lg overflow-hidden hover:scale-[1.03] duration-300">
          <CustomImage
            src="/profile/director-1.jpeg"
            width={400}
            height={600}
            alt=""
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent to-50%" />
          <div className="absolute bottom-0 inset-x-0">
            <p className="text-neutral-light text-3xl font-semibold p-4">
              Direktur
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
        <div className="order-last md:order-none rounded-lg overflow-hidden relative hover:scale-[1.03] duration-300">
          <CustomImage
            src="/profile/workshop-1.jpeg"
            width={400}
            height={600}
            alt=""
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 md:from-black/30 to-transparent to-25% md:to-100%" />
          <div className="absolute bottom-0 inset-x-0">
            <p className="md:hidden text-neutral-light text-xl font-semibold p-4">
              Workshop
            </p>
          </div>
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
        <div className="hidden md:block rounded-lg overflow-hidden relative hover:scale-[1.03] duration-300">
          <CustomImage
            src="/profile/workshop-2.jpeg"
            width={400}
            height={600}
            alt=""
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <div className="col-span-2 row-span-3 rounded-lg overflow-hidden relative hover:scale-[1.03] duration-300">
          <CustomImage
            src="/profile/team-1.jpeg"
            width={400}
            height={600}
            alt=""
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent to-25%" />
          <div className="absolute bottom-0 inset-x-0">
            <p className="text-neutral-light text-xl font-semibold p-4">
              Our Team
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
