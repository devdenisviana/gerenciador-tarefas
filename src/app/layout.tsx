// app/layout.tsx
'use client';

import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <html lang="pt-br" className={theme}>
      <body className={inter.className}>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="fixed top-4 right-4 p-2 border rounded-md bg-gray-200 dark:bg-gray-700"
        >
          Alternar Tema
        </button>
        {children}
      </body>
    </html>
  );
}
