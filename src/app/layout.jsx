import "./globals.css";

import "sweetalert2/dist/sweetalert2.min.css";
import { DM_Sans, Kanit, Lato, Plus_Jakarta_Sans } from "next/font/google";
const fontName = Lato({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hit Solution",
  description: "Generated by create next app",
};

import { Providers } from "./providers";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";
// import Loader from "./loader";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en" className="light">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/logo.png" />
        {/* Optionally add support for different icon sizes */}
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${fontName.className} antialiased bg-[#F8FAFC]`}
      >
        <Providers suppressHydrationWarning={true}>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
