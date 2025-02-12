import Link from "next/link";

interface EmailCTAButtonProps {
  email: string;
  subject?: string;
  body?: string;
  label?: string;
}

export default function EmailCTA({
  email,
  subject = "Pemesanan Layanan Rains Karya Multindo",
  body = "Halo Rains Karya Multindo, saya tertarik dengan layanan Anda. Berikut detail saya:\n\nNama: \nProduk: \nEmail: ",
  label,
}: EmailCTAButtonProps) {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <Link href={mailtoLink} className="hover:underline">
      {label}
    </Link>
  );
}
