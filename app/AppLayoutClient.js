'use client';
import { useContext } from 'react';
import { LanguageContext } from './context/LanguageContext';

export default function AppLayoutClient({ children }) {
  const { lang } = useContext(LanguageContext);
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body className={lang === 'ar' ? 'lang-ar' : 'lang-en'}>
        {children}
      </body>
    </html>
  );
} 