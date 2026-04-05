import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajeshbathula.com"),
  title: "Rajesh Bathula | Senior SDET & Penetration Tester",
  description: "Senior SDET and Security Expert specialized in building high-end automation frameworks and performing advanced security testing for global enterprises. Bridging the gap between Quality and Security.",
  keywords: ["Rajesh Bathula", "SDET Portfolio", "Security Tester", "Automation Architect", "Cybersecurity Expert", "Java Selenium Appium", "Penetration Tester", "India"],
  authors: [{ name: "Rajesh Bathula" }],
  openGraph: {
    title: "Rajesh Bathula | Senior SDET & Penetration Tester",
    description: "Senior SDET and Security Expert specialized in building high-end automation frameworks.",
    url: "https://rajeshbathula.com",
    siteName: "Rajesh Bathula Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajesh Bathula Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Bathula | Senior SDET & Penetration Tester",
    description: "Senior SDET and Security Expert specialized in building automation frameworks.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rajesh Bathula",
    "url": "https://rajeshbathula.com",
    "jobTitle": "Senior SDET & Penetration Tester",
    "sameAs": [
        "https://linkedin.com/in/rajeshbathula",
        "https://github.com/rajeshbathula"
    ],
    "description": "Senior SDET and Security Expert specialized in building high-end automation frameworks.",
    "knowsAbout": ["Test Automation", "Penetration Testing", "Java", "Security", "SDET"]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
