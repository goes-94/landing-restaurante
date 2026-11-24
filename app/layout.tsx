import type { Metadata } from "next";
import { League_Gothic, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-league-gothic",
});

export const metadata: Metadata = {
  title: "Home - Início | Feito no Fogo Intenso & Verdadeiro",
  description:
    "Sabor com simplicidade, feito no fogo. Alta gastronomia descomplicada — na brasa, na lenha e na alma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${leagueGothic.variable} scroll-smooth`}>
      <body className="overflow-x-hidden bg-[#f5deb3] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}