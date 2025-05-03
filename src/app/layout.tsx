import type { Metadata } from "next";
import "./globals.css";
import { NavbarComponent } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Hackathon2025",
  description: "Design an app prototype to help households with outdated, inefficient appliences identify cost-effective water-saving upgrade. aditional features such as rebate finders and conversation tips, resources, etc. may be included",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarComponent/>
        {children}

      </body>
    </html>
  );
}
