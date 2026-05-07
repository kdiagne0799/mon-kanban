import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import LogoKN from "./LogoKN";

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="header-left">
        <LogoKN />
        <div className="site-title">
          <span className="site-name">Khadim Diagne</span>
          <span className="site-role">Étudiant BUT Réseaux & Télécoms</span>
        </div>
      </div>

      <button
        className={`burger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${open ? "nav-open" : ""}`}>
        <Link className={isActive("/")} to="/" onClick={() => setOpen(false)}>
          Accueil
        </Link>
        <Link
          className={isActive("/a-propos")}
          to="/a-propos"
          onClick={() => setOpen(false)}
        >
          À propos
        </Link>
        <Link
          className={isActive("/competences")}
          to="/competences"
          onClick={() => setOpen(false)}
        >
          Compétences
        </Link>
        <Link
          className={isActive("/parcours")}
          to="/parcours"
          onClick={() => setOpen(false)}
        >
          Parcours
        </Link>
        <Link
          className={isActive("/contact")}
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}