import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollReset from "./components/ScrollReset";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Encino Residencial | Terrenos en Lagos de Moreno, Jalisco",
  description:
    "Fraccionamiento residencial en Lagos de Moreno, Jalisco. 595 terrenos con infraestructura completa, más de 40,000 m² de parques, ciclovía y acceso controlado. Desde $4,193/mes.",
  keywords:
    "terrenos Lagos de Moreno, fraccionamiento Lagos de Moreno, El Encino Residencial, terrenos Jalisco, lotes residenciales Lagos de Moreno",
  openGraph: {
    title: "El Encino Residencial | Terrenos en Lagos de Moreno",
    description: "Tu terreno en el lugar donde quieres vivir. Lagos de Moreno, Jalisco.",
    url: "https://www.elencinoresidencial.mx",
    siteName: "El Encino Residencial",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
