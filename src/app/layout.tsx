import type { Metadata } from "next";
import { Cormorant_Garamond, Geologica, Unbounded } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

const geologica = Geologica({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-geologica",
});

const unbounded = Unbounded({
  subsets: ["cyrillic"],
  weight: ["300", "700"],
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Голоса Земли — Малые народы России",
  description:
    "Малые народы России — хранители древних миров, живущих на краях цивилизации",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${geologica.variable} ${unbounded.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
