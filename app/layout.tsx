import '@/styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js App',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
