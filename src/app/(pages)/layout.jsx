import { Inter } from "next/font/google";
import "./globals.css";
import Notification from "../components/Notification"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bharat Jyotish",
  description: "Astrology app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
           <body className={inter.className}>
            <Notification/>
           <Header/><Navbar/>{children}<Footer/></body>
    </html>
  );
}