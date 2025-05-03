import type { Metadata } from "next";
import "./globals.css";

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
        {children}

      </body>
    </html>
  );
}
