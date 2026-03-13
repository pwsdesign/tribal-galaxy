import type { Metadata } from "next";
import { Cinzel_Decorative, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Tribal Galaxy | Music · Healing · Community · Miami",
  description: "A sacred space where people from all backgrounds come together to share, learn, and heal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cinzelDecorative.variable} ${cormorantGaramond.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}
