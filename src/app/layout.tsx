import "./globals.css";
import { ThemeProvider } from "next-themes";
import Aoscompo from "@/utils/aos";
import NextTopLoader from 'nextjs-toploader';
import { AppContextProvider } from "../context-api/PropertyContext";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";
import Header from "./components/layout/header";
import SessionProviderComp from "./provider/SessionProviderComp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <AppContextProvider>
      <SessionProviderComp>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <Aoscompo>
            <Header />
            <NextTopLoader />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
        </SessionProviderComp>
        </AppContextProvider>
      </body>
    </html>
  );
}
