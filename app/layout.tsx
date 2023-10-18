import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Notion Clone",
  description: "Notion Clone Using Nextjs",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/color-logo.png",
        type: "image/png",
        href: "/color-logo.png",      
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/color-logo.png",
        type: "image/png",
        href: "/color-logo.png",      
      },

    ]
  }
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
