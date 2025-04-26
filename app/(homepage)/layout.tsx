import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import WhatsAppButton from "@/components/WhatsAppButton"; // Import komponen WhatsAppButton

interface HomepageLayoutProps {
  children: React.ReactNode;
}

export default function HomepageLayout({ children }: HomepageLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <WhatsAppButton /> {/* Menambahkan tombol WhatsApp di kanan bawah */}
      <Footer />
    </>
  );
}
