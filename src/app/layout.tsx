import '@/common/styles/globals.css';

import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  variable: '--font-family',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} font-body min-h-screen subpixel-antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
