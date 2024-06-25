import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@@/components/Header";
import Provider from "./Provider";
import Navbar from "@@/components/Navbar";
import SearchBox from "@@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Project",
  description: "First App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar/>
          <SearchBox/>
          {children}
        </Provider>
      </body>
    </html>
  );
}