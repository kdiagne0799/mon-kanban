export default function About() {
  return (
    <section className="page-section about-section">

      <h2 className="section-title">À propos</h2>

      {/* INTRODUCTION */}
      <p className="about-intro">
        Je suis <strong>Khadim Diagne</strong>, 19 ans, étudiant en
        <strong> BUT Réseaux & Télécommunications </strong> à l’IUT de Roanne.
        Passionné par les infrastructures réseau, la cybersécurité et les systèmes,
        j’avance avec une vision claire : devenir un professionnel capable de comprendre,
        sécuriser et optimiser les technologies qui connectent le monde.
      </p>

      {/* BLOC 1 — PARCOURS */}
      <div className="about-block">
        <h3 className="block-title">🌍 Mon parcours</h3>
        <p>
          Originaire du Sénégal, j’ai grandi dans un environnement où la débrouillardise
          technique et la curiosité étaient essentielles. Très tôt, j’ai développé un goût
          pour la maintenance, le diagnostic et la compréhension des systèmes complexes.
        </p>
        <p>
          Mon arrivée en France a marqué une nouvelle étape : approfondir mes compétences
          dans les réseaux modernes, les infrastructures, les systèmes et la cybersécurité.
          Aujourd’hui, je construis un profil polyvalent, capable d’intervenir aussi bien
          sur le terrain que dans des environnements techniques avancés.
        </p>
      </div>

      {/* BLOC 2 — OBJECTIFS */}
      <div className="about-block">
        <h3 className="block-title">🎯 Mes objectifs</h3>
        <p>
          Je souhaite évoluer dans les domaines du réseau, de la cybersécurité ou de
          l’ingénierie système. Mon ambition est de devenir un professionnel capable de :
        </p>
        <ul className="about-list">
          <li>Diagnostiquer et résoudre des incidents complexes</li>
          <li>Sécuriser des infrastructures critiques</li>
          <li>Superviser et optimiser des réseaux modernes</li>
          <li>Intervenir sur des architectures physiques et logiques</li>
          <li>Documenter, analyser et communiquer efficacement</li>
        </ul>
      </div>

      {/* BLOC 3 — QUALITÉS */}
      <div className="about-block">
        <h3 className="block-title">🧠 Ce qui me définit</h3>
        <ul className="about-list">
          <li>Rigueur technique & sens du diagnostic</li>
          <li>Capacité d’apprentissage rapide</li>
          <li>Esprit d’équipe & communication claire</li>
          <li>Curiosité technologique permanente</li>
          <li>Autonomie et sens des responsabilités</li>
        </ul>
      </div>

      {/* BLOC 4 — CENTRES D'INTÉRÊT */}
      <div className="about-block">
        <h3 className="block-title">⚡ Centres d’intérêt</h3>
        <ul className="about-list">
          <li>Simulation réseau & cybersécurité</li>
          <li>Maintenance & bricolage technique</li>
          <li>Football & basketball</li>
          <li>Veille technologique</li>
          <li>Projets techniques en autonomie</li>
        </ul>
      </div>

    </section>
  );
}