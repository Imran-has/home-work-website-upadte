import type { Metadata } from "next";
import localFont from "next/font/local";
import{ReactNode} from "react"
import "./globals.css";
import Footer from "./Components/Footer"
import { Children } from "react";
import NavBar from "./Components/links";
import Links from"./Components/links"
import React from "react";




const Homepage={Children}
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}:Readonly<{
  children:React.ReactNode;
}>){
  return(
    <html lang="en">
      <body className="{inter.classnName}">
      
        
         {children}
         <Links/>
         <Footer/>
         <h1 className='wel'>Welcome to the Home Page</h1>
        
        
      </body>
    </html>
  );
};