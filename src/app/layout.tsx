import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProviderContext from "@/components/SessionProviderContext";
import { Session } from "next-auth";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/Theme-Provider";
import { config } from "../../config";
import Head from "next/head";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/landing-pages/light-saas/Navbar";
import Footer from "@/components/landing-pages/light-saas/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.title}`,
    default: config.title, // a default is required when creating a template
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  verification: {
    google: config.googleVerification,
    yandex: config.yandexVerification,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics GA_TRACKING_ID={config.googleAnalyticsId} />
      </head>
      <body className={inter.className + " flex flex-col min-h-svh bg-zinc-900"}>
        <Toaster position="top-right" />
        <SessionProviderContext>
          <ThemeProvider
            attribute="className"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
              <main
      className="flex-grow z-10 rounded-5xl lg:rounded-b-6xl bg-zinc-900 overflow-hidden lg:pb-24 lg:mb-[100vh]"
    >
            {children}
            </main>
            <Footer />
          </ThemeProvider>
        </SessionProviderContext>
      </body>
    </html>
  );
}
