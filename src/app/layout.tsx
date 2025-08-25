import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// Local fonts (Next.js optimizes them)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO metadata
export const metadata: Metadata = {
  title: "Admin Dashboard • Competitive Exams",
  description: "Admin Dashboard for Competitive Exams with analytics, charts, and management features.",
};

// ✅ Root Layout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts (Google Inter) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Tailwind config tweaks (if using CDN in prototypes, safe to skip in Next.js since you already have tailwind.config.ts) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      brand: {
                        50: '#eef2ff',
                        100: '#e0e7ff',
                        600: '#4f46e5',
                        700: '#4338ca',
                        900: '#1e1b4b'
                      }
                    },
                    boxShadow: {
                      soft: '0 8px 30px rgba(0,0,0,0.06)'
                    }
                  }
                }
              }
            `,
          }}
        />

        {/* Custom global styles */}
        <style>{`
          html, body {
            font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji";
          }
          .scroll-slim { scrollbar-width: thin }
        `}</style>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
