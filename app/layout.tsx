import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Panduan Skripsian ILKOM UNNES",
    template: "%s | Panduan Skripsian ILKOM UNNES",
  },
  description: "Membantu mahasiswa ILKOM UNNES dalam menyelesaikan skripsi",
  openGraph: {
    title: "Panduan Skripsian ILKOM UNNES",
    type: "website",
    images: [{
      url: "/capek_kuliah.png",
      width: 1200,
      height: 630,
      alt: "Logo Capek Kuliah"
    }],
  },
  twitter: {
    title: "Panduan Skripsian ILKOM UNNES",
    card: "summary_large_image",
    images: [{
      url: "/capek_kuliah.png",
      width: 1200,
      height: 630,
      alt: "Logo Capek Kuliah"
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen max-w-7xl mx-auto bg-background font-sans antialiased",
          fontSans.variable,
          inter.className
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics/>
          {children}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
