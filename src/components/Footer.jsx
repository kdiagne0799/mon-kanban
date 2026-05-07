export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <p className="footer-name">Khadim Diagne</p>
        <p className="footer-role">Étudiant en Réseaux & Télécommunications</p>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} — Tous droits réservés.
        </p>
        <p className="footer-made">
          Conçu avec <span className="footer-heart">❤️</span> et React.
        </p>
      </div>

    </footer>
  );
}