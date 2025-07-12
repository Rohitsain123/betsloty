import { Heebo, Alegreya } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";

export const heebo = Heebo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heebo",
});

export const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-alegreya",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${heebo.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
