import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "/tts",
  },
};

export default function TtsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
