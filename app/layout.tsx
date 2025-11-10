import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: "Mulia Simanjuntak - Portfolio",
    template: "%s | Mulia Simanjuntak"
  },
  description: "Portfolio website of Mulia Simanjuntak - a passionate student showcasing projects, skills, and experiences in web development.",
  keywords: ["portfolio", "web developer", "student", "projects", "Next.js", "React"],
  authors: [{ name: "Mulia Simanjuntak" }],
  creator: "Mulia Simanjuntak",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "http://localhost:3000",
    title: "Nama Kamu - Portfolio",
    description: "Portfolio website showcasing my projects and skills as a student developer.",
    siteName: "Nama Kamu Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nama Kamu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nama Kamu - Portfolio",
    description: "Portfolio website showcasing my projects and skills as a student developer.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nama Kamu",
  jobTitle: "Student & Web Developer",
  url: "https://your-portfolio.vercel.app",
  sameAs: [
    "https://github.com/namakamu",
    "https://linkedin.com/in/namakamu",
  ],
  description: "A passionate student showcasing projects and skills in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-neutral-light text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
