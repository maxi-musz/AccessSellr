'use client';

import Footer from "@/components/home/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white">
        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
