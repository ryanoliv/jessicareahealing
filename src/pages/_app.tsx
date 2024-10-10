import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { futura, brandonGrotesque } from "@/fonts";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${futura.className} ${brandonGrotesque.className}`}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
