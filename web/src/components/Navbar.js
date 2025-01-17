// src/components/Navbar.js
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher"; // Importe o ThemeSwitcher
import "../app/globals.css"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white text-black dark:bg-black dark:text-white">
      {/* Nome da aplicação */}
      <h1 className="text-lg font-bold">Ferrari Dev</h1>
      
      {/* Links de navegação */}
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link href="/about" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link href="/projects" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400">Projects</Link>
        </li>
        <li>
          <Link href="/skills" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400">Skills</Link>
        </li>
        <li>
          <Link href="/certificate" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400">Certificates</Link>
        </li>
      </ul>

      {/* Botão de alternância de tema */}
      <ThemeSwitcher /> {/* Adiciona o botão de alternância do tema */}
    </nav>
  );
}
