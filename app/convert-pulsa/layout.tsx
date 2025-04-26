interface ConvertPulsaLayoutProps {
  children: React.ReactNode;
}

export default function ConvertPulsaLayout({ children }: ConvertPulsaLayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
