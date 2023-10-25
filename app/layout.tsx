import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} p-8 `}>
        <ConvexClientProvider>
          <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="real-notion-theme"
          >
            <Toaster position="top-right" toastOptions={{ duration: 5000 }}/>
            {children}
          </ThemeProvider>  
        </ConvexClientProvider>      
      </body>
    </html>
  );
}
