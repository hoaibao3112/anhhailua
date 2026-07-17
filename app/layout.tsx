import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gà Kiểng Premium | Nghệ Thuật Chăn Nuôi Đẳng Cấp",
  description: "Cung cấp các giống gà kiểng khỏe mạnh, thuần chủng. Chúng tôi tự hào mang đến những tác phẩm nghệ thuật sống động cho không gian của bạn.",
  keywords: ["gà kiểng", "gà cảnh", "gà kiểng đẹp", "gà serama", "gà silkie", "gà onagadori", "gà phoenix", "gà ba lan", "gà tân châu"],
  authors: [{ name: "Gà Kiểng Premium" }],
  openGraph: {
    title: "Gà Kiểng Premium | Nghệ Thuật Chăn Nuôi Đẳng Cấp",
    description: "Cung cấp các giống gà kiểng khỏe mạnh, thuần chủng. Chúng tôi tự hào mang đến những tác phẩm nghệ thuật sống động cho không gian của bạn.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="bg-surface text-on-surface font-sans overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
