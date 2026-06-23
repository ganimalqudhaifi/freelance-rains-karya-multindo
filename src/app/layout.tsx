import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavigationHeader from "@/components/navigation-header";
import FooterSection from "@/components/footer-section";
import WhatsappCTA from "@/components/whatsapp-cta";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rains Karya Multindo - Konstruksi, Event Organizer, Creative Agency",
  description:
    "Rains Karya Multindo adalah perusahaan yang bergerak di bidang konstruksi, event organizer, creative agency, dan pengadaan barang. Kami berkomitmen memberikan layanan berkualitas tinggi dengan inovasi teknologi terkini.",
  keywords: [
    "Jasa Konstruksi",
    "Event Organizer",
    "Creative Agency",
    "Pengadaan Barang",
    "Pembangunan Gedung",
    "Instalasi Listrik",
    "Fotografi Profesional",
    "Desain Interior",
    "Renovasi Rumah",
  ].join(", "),
  icons: "/favicon.svg",
  openGraph: {
    type: "website",
    url: "https://rains-km.co.id",
    siteName: "Rains Karya Multindo",
    title:
      "Rains Karya Multindo - Konstruksi, Event Organizer, Creative Agency",
    description:
      "Rains Karya Multindo adalah perusahaan yang bergerak di bidang konstruksi, event organizer, creative agency, dan pengadaan barang.",
    images: [
      {
        url: "https://rains-km.co.id/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Rains Karya Multindo Thumbnail",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`scroll-smooth ${inter.variable} ${playfair.variable}`}
      style={{ scrollPaddingTop: "6rem" }}
    >
      <body className="overflow-x-hidden bg-white">
        <NavigationHeader />
        <main>{children}</main>
        <FooterSection />
        <WhatsappCTA />
      </body>
    </html>
  );
}
