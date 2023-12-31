import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} p-8 `}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider 
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="real-notion-theme"
              >
              <Toaster position="bottom-center" toastOptions={{ duration: 5000 }}/>
              <ModalProvider/>
              {children}
            </ThemeProvider>  
          </EdgeStoreProvider>          
        </ConvexClientProvider>      
      </body>
    </html>
  );
}
