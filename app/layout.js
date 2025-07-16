import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import AppLayoutClient from "./AppLayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Infinity Scale",
  description: "Ads Agency",
};

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <AppLayoutClient>
        <div className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </div>
      </AppLayoutClient>
    </LanguageProvider>
  );
}