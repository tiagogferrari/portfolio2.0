import Navbar from "../components/Navbar";
import './globals.css';

export const metadata = {
  title: "Ferrari Dev Portfolio",
  description: "Meu portfólio profissional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white dark:bg-black text-gray-900">
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
