// src/components/layout/Layout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "../common/BackToTop"; // Import the component
import { useTheme } from "../../context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  activeSection,
  scrollToSection,
}) => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-gray-800";

  return (
    // Add min-h-screen to ensure full height coverage
    <div
      className={`${bgColor} ${textColor} min-h-screen flex flex-col transition-colors duration-300`}
    >
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      {/* Use flex-grow to push footer to bottom */}
      <main className="pt-16 flex-grow">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
