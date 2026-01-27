import { useState, useEffect } from "react";
import { Cuboid, Sun, Moon, Menu, X } from "lucide-react";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme!);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme!);
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { name: "Accueil", href: "#Home" },
    { name: "À propos", href: "#About" },
    { name: "Expériences", href: "#Experience" },
    { name: "Projets", href: "#Projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-base-100/80 backdrop-blur-md  border-base-content/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <a
          href="#Home"
          className="flex items-center font-black text-2xl tracking-tighter hover:scale-105 transition-transform"
        >
          <Cuboid className="mr-2 text-accent" />
          LANDRY<span className="text-accent">DEV</span>
        </a>

        <ul className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                className="btn btn-sm btn-ghost hover:text-accent rounded-xl normal-case font-medium"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}

          <div className="divider divider-horizontal mx-1"></div>

          <button
            onClick={handleToggle}
            className="btn btn-sm btn-ghost btn-circle"
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} className="text-yellow-400" />
            )}
          </button>
        </ul>

        <div className="flex items-center md:hidden gap-2">
          <button
            onClick={handleToggle}
            className="btn btn-sm btn-ghost btn-circle"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="btn btn-sm btn-ghost btn-circle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-base-100 border-b border-base-content/5 p-4 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  className="block text-center py-2 font-medium hover:text-accent"
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
