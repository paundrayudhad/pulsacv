import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

interface HomepageLayoutProps {
  children: React.ReactNode;
}

export default function HomepageLayout({ children }: HomepageLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
