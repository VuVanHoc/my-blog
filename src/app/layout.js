import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `Welcome to Vu Van Hoc's blog`,
  description: `Vu Van Hoc's blogs`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <main className="flex">
          <Sidebar />
          <div>
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
