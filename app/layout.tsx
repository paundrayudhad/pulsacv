import { Poppins, Barlow } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const fontDisplay = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const fontBody = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Wahyu Convert",
  description: "Jasa Convert Pulsa yang Dipercaya Jutaan Customer",
  keywords: ["convert pulsa", "jasa convert pulsa", "Wahyu Convert"],
  authors: [{ name: "Wahyu Convert" }],
  openGraph: {
    title: "Wahyu Convert",
    description: "Jasa Convert Pulsa yang Dipercaya Jutaan Customer",
    url: "https://wahyuconvert.com",
    siteName: "Wahyu Convert",
    images: [
      {
        url: "/og-image.jpg", // Pastikan file ini ada di /public
        width: 1200,
        height: 630,
        alt: "Wahyu Convert",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahyu Convert",
    description: "Jasa Convert Pulsa yang Dipercaya Jutaan Customer",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://wahyuconvert.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-[#FAFBFC] antialiased",
          fontBody.variable,
          fontDisplay.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
