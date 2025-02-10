const stats = [
  { value: "100+", label: "Proyek Terselesaikan" },
  { value: "50+", label: "Proyek Konstruksi" },
  { value: "20+", label: "Acara Berhasil" },
  { value: "80+", label: "Proyek Kreatif" },
];

export default function StatsSection() {
  return (
    <section className="px-48 py-16 bg-primary-dark text-neutral-light">
      <div className="flex space-x-10 justify-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col space-x-1 text-center flex-1">
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
