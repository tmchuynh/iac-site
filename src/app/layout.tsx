"use client";
import Head from "next/head";
import React from "react";
import { NotFoundProvider } from "./context/NotFoundContext";
import "./globals.css";
import { Providers } from "./providers";
import Banner from "@/components/ui/banner";
import BackToTop from "@/components/BackToTop";
import SpeedDial from "@/components/SpeedDial";
import { actions } from "@/data/data";
import NavBar from "@/components/NavBar";
import NavFooter from "@/components/NavFooter";
import { TabsProvider } from "./context/TabsContext";

export default function RootLayout({
  children,
  title = "Home",
  description = "Tina Huynh Portfolio",
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Luckiest+Guy&family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Tina Huynh Portfolio" />
        <meta name="description" content={description} />
        <meta title={title} />
        <title>{title}</title>
      </Head>
      <body>
        <NotFoundProvider>
          <Providers>
            <TabsProvider>
              <MainContent>
                <NavBar />
                {children}
                <SpeedDial actions={actions} />
                <BackToTop />
                <Banner />
                <NavFooter />
              </MainContent>
            </TabsProvider>
          </Providers>
        </NotFoundProvider>
      </body>
    </html>
  );
}

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="relative mx-auto">{children}</main>
    </>
  );
};
