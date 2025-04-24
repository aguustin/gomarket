import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "normalize.css"
import NavBar from "./components/NavBar/page";
import { UserContextProvider } from "./context/sessionContext";
import Footer from "./components/Footer/footer";
import CreateBlog from "./components/createBlog/page";
import { icons } from "lucide-react";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GoMarket",
  description: "Bienvenido a GoMarket Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}
      >
        <UserContextProvider>
          <NavBar/>
          <CreateBlog/>
          {children}
          <Footer/>
        </UserContextProvider>
      </body>
    </html>
  );
}
