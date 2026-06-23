import CountUp from "./count-up";
import Reveal from "./reveal";

const stats = [
  { value: 100, suffix: "+", label: "Proyek Terselesaikan" },
  { value: 50, suffix: "+", label: "Proyek Konstruksi" },
  { value: 20, suffix: "+", label: "Acara Berhasil" },
  { value: 80, suffix: "+", label: "Proyek Kreatif" },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-16 text-white md:py-20">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-20 top-0 size-72 rounded-full bg-primary-700/40 blur-3xl" />
        <div className="absolute -right-10 bottom-0 size-72 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 110}
              className="group text-center"
            >
              <div className="font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
                <CountUp value={stat.value} suffix="" />
                <span className="text-gold-500">{stat.suffix}</span>
              </div>
              <div className="mx-auto mt-3 h-px w-10 bg-gold-500/60 transition-all duration-300 group-hover:w-16" />
              <p className="mt-3 text-sm font-medium text-primary-100 md:text-base">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
