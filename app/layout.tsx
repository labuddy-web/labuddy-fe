import { AuthProvider } from "@/atoms/AuthContext";
import "./globals.css";
import Header from "@/components/Header";
import TrackUserPath from "@/components/UserPathTracker";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* GA4 gtag.js 불러오기 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        {/* GA4 설정 스크립트 */}
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </head>
      <body>
        <AuthProvider>
          <TrackUserPath />
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
