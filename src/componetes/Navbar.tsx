import { Link } from "react-router-dom";
import Boton from "../boton";

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar = ({ darkMode, onToggleDarkMode }: NavbarProps) => {
  return (
    <header className="bg-purple-900 text-white shadow-md dark:bg-gray-900 border-b border-purple-800 dark:border-gray-800 transition-colors">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="text-xl font-bold hover:text-purple-300 transition-colors">
          Mi Proyecto React
        </Link>

        <div className="flex flex-wrap items-center gap-5 text-sm font-medium md:text-base">
          <Link to="/" className="hover:text-purple-300 transition-colors">
            Inicio
          </Link>
          <Link to="/app" className="hover:text-purple-300 transition-colors">
            App
          </Link>
          <Link to="/botones" className="hover:text-purple-300 transition-colors">
            Botones
          </Link>
          <Link to="/flex" className="hover:text-purple-300 transition-colors">
            Flex
          </Link>
          <Link to="/grid" className="hover:text-purple-300 transition-colors">
            Grid
          </Link>
          <Link to="/form" className="hover:text-purple-300 transition-colors">
            Form
          </Link>

          <Boton
            variante="secundario"
            onClick={onToggleDarkMode}
            className="text-xs md:text-sm"
          >
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </Boton>
        </div>
      </nav>
    </header>
  );
};
