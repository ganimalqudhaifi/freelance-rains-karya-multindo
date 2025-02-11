import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rains Karya Multindo",
  description:
    "Rains Karya Multindo adalah perusahaan yang bergerak di bidang konstruksi, event organizer, creative agency, dan pengadaan barang. Dengan pengalaman dan profesionalisme, kami berkomitmen untuk memberikan layanan terbaik yang selaras dengan perkembangan teknologi dan kebutuhan industri modern.",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
