// src/components/ThemeSwitcher.js
"use client"; // Certifique-se de que este arquivo é tratado como um componente de cliente

import { useState, useEffect } from "react";
import { Switch } from "./ui/switch"; // Certifique-se de usar o caminho correto para o Switch importado

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  // Verificar o tema salvo no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(false); // Padrão para o tema claro
    }
  }, []);

  // Função para alternar o tema
  const handleThemeChange = (enabled) => {
    setDarkMode(enabled);
    localStorage.setItem("theme", enabled ? "dark" : "light");
    document.documentElement.classList.toggle("dark", enabled); // Alterna a classe 'dark' no HTML
  };

  return (
    <Switch
      checked={darkMode}
      onCheckedChange={handleThemeChange} // Utilizando o onCheckedChange para manipular o estado
    />
  );
}
