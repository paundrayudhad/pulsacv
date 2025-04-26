interface V1LayoutProps {
  children: React.ReactNode;
}

export default function HomepageLayout({ children }: V1LayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
