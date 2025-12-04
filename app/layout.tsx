import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata: Metadata = {
  title: "Teia de Criadores",
  description: "Strategic communication for a truly democratic society",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Teia de Criadores",
    description: "Strategic communication for a truly democratic society",
    images: ["/logo-teia.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Fontes Teia de Criadores */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'Nethead';
              src: url('/fonts/Nethead.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'Akzidenz-Grotesk';
              src: url('/fonts/Akzidenz-grotesk-black.ttf') format('truetype');
              font-weight: 900;
              font-style: normal;
              font-display: swap;
            }
          `,
          }}
        />
      </head>
      <body className="font-nethead overflow-x-hidden">
        <LanguageProvider>
          <Header />
          {/* Adicionado padding-top para compensar o header fixo */}
          <main className="pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
