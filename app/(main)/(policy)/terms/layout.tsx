"use client";

import "aos/dist/aos.css";

import PageIllustration from "@/components/misc/page-illustration";
import Footer from "@/components/ui/footer";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="grow">
        <PageIllustration />

        {children}
      </main>

      <Footer />
    </>
  );
}
