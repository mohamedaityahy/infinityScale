'use client';

export default function AppLayoutClient({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className="lang-en">
        {children}
      </body>
    </html>
  );
} 