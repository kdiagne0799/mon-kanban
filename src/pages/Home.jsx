import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";

export default function Home() {
  return (
    <section className="home-section">

      <div className="hero-3d">
        <div className="hero-orb"></div>
        <div className="hero-orb-small"></div>
        <img src={heroImg} className="hero-img float" alt="Hero" />
        <img src={reactLogo} className="react-logo spin-slow" alt="React" />
        <img src={viteLogo} className="vite-logo pulse" alt="Vite" />
      </div>

      <h1 className="home-title">
        Salut, moi c’est <span className="gradient">Khadim</span>
      </h1>

      <p className="typing-text">
        Étudiant en Réseaux & Télécoms — infrastructures, cybersécurité, systèmes, diagnostic.
      </p>

      {/* DESCRIPTION */}
      <p className="home-description">
        À 19 ans, je construis mon parcours entre le Sénégal et la France, avec une vision claire :
        devenir un professionnel polyvalent des réseaux modernes, capable d’intervenir, diagnostiquer,
        sécuriser et optimiser des infrastructures critiques.
      </p>


      <div className="cta-container">
        <a href="/a-propos" className="cta-btn primary">Découvrir mon profil</a>
        <a href="/competences" className="cta-btn secondary">Voir mes compétences</a>
      </div>

    </section>
  );
}


     