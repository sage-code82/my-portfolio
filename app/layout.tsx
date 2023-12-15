import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stephen Sage | Personal Portfolio",
  description:
    "Stephen is a new to the world of tech and looking for the next step in his career ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ogImageUrl = "/public/link_pic.png";
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        <meta
          property="og:url"
          content="https://stephen-sage-portfolio-nobeefjustpartys-projects.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stephen Sage | Personal Portfolio" />
        <meta
          property="og:description"
          content="Stephen is a new to the world of tech and looking for the next step in his career "
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="og:title" content="Stephen Sage | Personal Portfolio" />
        <meta
          property="og:description"
          content="Stephen is a new to the world of tech and looking for the next step in his career "
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta
          property="og:url"
          content="https://stephen-sage-portfolio-nobeefjustpartys-projects.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body
        className={`${inter.className} bg-slate-50 text-slate-950 relative pt-28 sm:pt-28 dark:bg-slate-900 dark:text-slate-50 dark:text-opacity-90`}
      >
        <div className="bg-[#ede2fb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>

        <div className="bg-[#d7eefb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
