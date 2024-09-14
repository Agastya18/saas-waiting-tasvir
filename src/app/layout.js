import localFont from "next/font/local";
import "./globals.css";
import Header from '@/app/Header/page'
import Theming from "@/Theme/Theming";
import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: "tasvir-ai",
  description: "tasvir-ai is a saas that provides image recognition services",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Theming>
        <Header/>
        {children}
        <Analytics />
       </Theming>
      </body>
    </html>
  );
}
