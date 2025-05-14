'use client';

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { montserrat } from "@/utils/fonts";

// Define your nav links here
const navbarLinks = [
  { name: "Home", url: "#hero" },
  { name: "About", url: "#about" },
  { name: "Education", url: "#education" },
  { name: "Skills", url: "#skills" },
  { name: "Services", url: "#services" },
];

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  const [paddingTop, setPaddingTop] = useState<string | undefined>();

  useEffect(() => {
    setPaddingTop("80px");
  }, []);

  return (
    <body
      className={`${montserrat.className} antialiased`}
      style={paddingTop ? { paddingTop } : undefined}
    >
      <Navbar links={navbarLinks} />
      {children}
      <Footer />
    </body>
  );
}
