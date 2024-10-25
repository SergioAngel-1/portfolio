import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ParticlesBackground } from "@/components/particles-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergio Jáuregui Developer",
  description: "Portafolio Profesional Desarrollador FullStack",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="preload">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ParticlesBackground />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
