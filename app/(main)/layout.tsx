"use client"

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Navigation from "./_components/navigation";

// export const metadata: Metadata = {
//   title: "Documents Page",
//   description: "Notion Clone Using Nextjs", 
// };

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {isAuthenticated, isLoading} = useConvexAuth();
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <div className={`container `}>
        <Navigation />
      {children}
    </div>
  );
}
