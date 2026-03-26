import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLUXE KDS",
  description: "Kitchen Display System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-fluxe-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}