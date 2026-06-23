import CustomImage from "./custom-image";
import Reveal from "./reveal";

export default function ProfileSection() {
  return (
    <section className="bg-white pb-24 pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold-500" />
            Company Profile
            <span className="h-px w-6 bg-gold-500" />
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary-900 md:text-5xl">
            Mengenal Lebih Dekat Rains Karya Multindo
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-neutral-dark">
            Kenali tim profesional yang berperan dalam setiap proyek serta
            lingkungan kerja kami. Keberhasilan perusahaan didukung oleh kerja
            tim yang solid, inovasi, dan komitmen terhadap kualitas terbaik.
          </p>
        </Reveal>

        <Reveal animation="fade-in" className="mt-14">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2">
            <ProfileCard
              src="/profile/director-1.jpeg"
              label="Direktur"
              className="md:col-span-2 md:row-span-2"
              priority
            />
            <ProfileCard
              src="/profile/workshop-1.jpeg"
              label="Workshop"
            />
            <ProfileCard
              src="/profile/workshop-2.jpeg"
              label="Workshop"
            />
            <ProfileCard
              src="/profile/team-1.jpeg"
              label="Our Team"
              className="md:col-span-2"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProfileCard({
  src,
  label,
  className = "",
  priority = false,
}: {
  src: string;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`group relative min-h-[16rem] overflow-hidden rounded-2xl shadow-soft ring-1 ring-primary-900/5 ${className}`}
    >
      <CustomImage
        src={src}
        width={800}
        height={1000}
        alt={label}
        priority={priority}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 p-5">
        <span className="h-5 w-1 rounded-full bg-gold-500" />
        <p className="font-display text-xl font-semibold text-white md:text-2xl">
          {label}
        </p>
      </div>
    </div>
  );
}
