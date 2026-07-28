import { ClerkProvider } from "@clerk/nextjs";
import type { ReactNode } from "react";
import "./globals.css";

import Navbar from "@/src/components/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
