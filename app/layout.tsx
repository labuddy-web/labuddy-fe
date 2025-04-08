import { AuthProvider } from "@/atoms/AuthContext";
import "./globals.css";
import Header from "@/components/Header";
import TrackUserPath from "@/components/UserPathTracker";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
