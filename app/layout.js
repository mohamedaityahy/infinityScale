import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Infinity Scale",
  description: "Ads Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className={cairo.variable}>
        {children}
      </body>
    </html>
  );
}
