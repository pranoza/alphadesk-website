import type { Metadata, Viewport } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#121212',
  interactiveWidget: 'resizes-content',
};

export const metadata: Metadata = {
  title: 'آلفادسک | سامانه مدیریت مشتریان و تیم فروش',
  description: 'پایان سوختن سرنخ‌ها و سردرگمی بازاریاب‌ها با سامانه آلفادسک - مدیریت مشتریان، حوضچه آزاد سرنخ‌ها، مدیریت شعب هلدینگ و ارزیابی لحظه‌ای عملکرد فروش.',
  keywords: [
    'سامانه فروش',
    'آلفادسک',
    'مدیریت مشتریان',
    'مدیریت تیم فروش',
    'حوضچه آزاد سرنخ‌ها',
    'مدیریت شعب هلدینگ',
    'نرم‌افزار فروش سازمانی',
    'جلوگیری از سوختن مشتری',
  ],
  authors: [{ name: 'آلفادسک' }],
  openGraph: {
    title: 'آلفادسک | سامانه مدیریت مشتریان و تیم فروش',
    description: 'سامانه مدیریت مشتریان و تیم فروش آلفادسک با حوضچه آزاد سرنخ‌ها و مدیریت شعب هلدینگ.',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'آلفادسک | سامانه مدیریت مشتریان و تیم فروش',
    description: 'سامانه هوشمند مدیریت مشتریان، حوضچه آزاد سرنخ‌ها و ارزیابی عملکرد فروش.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body
        suppressHydrationWarning
        className={`${vazirmatn.className} bg-[#121212] text-white selection:bg-[#1DB954] selection:text-black font-sans`}
      >
        {children}
      </body>
    </html>
  );
}


