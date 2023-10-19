import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notion Clone",
  description: "Notion Clone Using Nextjs", 
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`md:mt-16`}>
      {children}
    </div>
  );
}
