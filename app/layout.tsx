import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshita Tote Bags | Premium Handcrafted Tote Bags & Custom Embroidery",
  description: "Explore Akshita Tote Bags, New Delhi's premier destination for premium handcrafted tote bags, personalized embroidery, floral designs, and luxury canvas bags. Wholesale and retail available at competitive prices.",
  keywords: "Akshita Tote Bags, handcrafted tote bags New Delhi, personalized embroidery bags, custom name tote bags, floral embroidery bags, premium canvas bags, Saket District Centre, wholesale tote bags, designer tote bags",
  authors: [{ name: "Akshita Tote Bags" }],
  metadataBase: new URL("https://akshitatotebags.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Akshita Tote Bags | Premium Handcrafted Tote Bags & Custom Embroidery",
    description: "Explore Akshita Tote Bags, New Delhi's premier destination for premium handcrafted tote bags, personalized embroidery, floral designs, and luxury canvas bags. Wholesale and retail available.",
    url: "https://akshitatotebags.com",
    siteName: "Akshita Tote Bags",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/bag-1.jpeg",
        width: 800,
        height: 600,
        alt: "Akshita Tote Bags - Premium Handcrafted Tote Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshita Tote Bags | Premium Handcrafted Tote Bags",
    description: "Explore Akshita Tote Bags, New Delhi's premier destination for premium handcrafted tote bags, personalized embroidery, and stylish canvas bags.",
    images: ["/assets/bag-1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-cream-bg text-charcoal">
        {children}
      </body>
    </html>
  );
}
