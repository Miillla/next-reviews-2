import Link from "next/link";
import "./globals.css";
import NavBar from "../components/NavBar";
import { exo2, orbitron } from "./fonts";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable}${orbitron.variable}`}>
      <body className="bg-red-200 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className=" grow py-3">{children}</main>
        <footer className=" borber-t py-3 text-center text-slate-500 text-xs">
          {" "}
          Game data and images courtesy of{" "}
          <Link href="https://rawg.io/" target="_blank">
            RAWG
          </Link>
        </footer>
      </body>
    </html>
  );
}
