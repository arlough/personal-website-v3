import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ViewTransitions } from "next-view-transitions";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Aidan Loughney",
    template: "%s · Aidan Loughney",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className="min-h-screen">
        <body className="flex flex-col max-w-(--breakpoint-xl) min-h-screen ml-auto mr-auto text-primary selection:bg-secondary/90">
          <ThemeProvider defaultTheme="system" enableSystem>
            <Navbar />
            <main className="mt-8 ml-8 mr-8 md:mt-16 md:ml-16 md:mr-16">
              {children}
            </main>
            <Footer />
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
