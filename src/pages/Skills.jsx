export default function Skills() {
  return (
    <section className="page-section skills-section">

      <h2 className="section-title">Compétences</h2>

      {/* COMPÉTENCES RÉSEAUX */}
      <div className="skills-block">
        <h3 className="block-title">🌐 Réseaux & Infrastructures</h3>

        <ul className="skills-list">
          <li><strong>Maintenance Réseau</strong> — Préventive & curative, diagnostic, continuité de service</li>
          <li><strong>Infrastructures Physiques</strong> — Fibre optique, cuivre, baies, tiroirs, brassage, raccordements</li>
          <li><strong>Architectures Structurantes</strong> — Collecte, backbone, réseaux mobiles, boucles locales</li>
          <li><strong>Protocoles & Transmission</strong> — Bases solides en Ethernet, IP, VLAN, routage simple</li>
          <li><strong>Mesures & Tests</strong> — Reflectométrie, tests de continuité, validation de liens</li>
          <li><strong>Supervision</strong> — Surveillance d’équipements, analyse d’alarmes, diagnostic initial</li>
        </ul>
      </div>

      {/* COMPÉTENCES CYBER */}
      <div className="skills-block">
        <h3 className="block-title">🛡️ Cybersécurité</h3>

        <ul className="skills-list">
          <li><strong>Hygiène & bonnes pratiques</strong> — ANSSI, SecNumAcadémie</li>
          <li><strong>Analyse de risques</strong> — Identification des vulnérabilités courantes</li>
          <li><strong>Protection des accès</strong> — Gestion des droits, mots de passe, segmentation</li>
          <li><strong>Veille & sensibilisation</strong> — Suivi des menaces, comportements sécurisés</li>
        </ul>
      </div>

      {/* COMPÉTENCES SYSTÈMES */}
      <div className="skills-block">
        <h3 className="block-title">💻 Systèmes & Environnements</h3>

        <ul className="skills-list">
          <li><strong>Linux / Debian</strong> — Commandes essentielles, services, gestion de fichiers</li>
          <li><strong>Scripts simples</strong> — Automatisation basique, logique shell</li>
          <li><strong>Virtualisation</strong> — Utilisation de machines virtuelles, environnements isolés</li>
          <li><strong>Outils de diagnostic</strong> — Ping, traceroute, ip, netstat, nmap (bases)</li>
        </ul>
      </div>

      {/* COMPÉTENCES DEV */}
      <div className="skills-block">
        <h3 className="block-title">⚡ Développement & Outils Modernes</h3>

        <ul className="skills-list">
          <li><strong>React & Vite</strong> — Interfaces modernes, composants, hooks simples</li>
          <li><strong>JavaScript</strong> — Logique, événements, manipulation d’UI</li>
          <li><strong>Git & GitHub</strong> — Versioning, branches, projets</li>
          <li><strong>Documentation</strong> — Rédaction claire, structurée, professionnelle</li>
        </ul>
      </div>

      {/* COMPÉTENCES TRANSVERSALES */}
      <div className="skills-block">
        <h3 className="block-title">🧠 Compétences Transversales</h3>

        <ul className="skills-list">
          <li>Apprentissage rapide des technologies complexes (WDM, SDH, etc.)</li>
          <li>Communication claire & transmission efficace des consignes</li>
          <li>Rigueur dans la documentation & le reporting technique</li>
          <li>Respect strict des procédures & protocoles de sécurité</li>
          <li>Esprit d’équipe, autonomie & sens des responsabilités</li>
        </ul>
      </div>

      {/* CERTIFICATIONS */}
      <div className="skills-block">
        <h3 className="block-title">📜 Certifications</h3>

        <ul className="skills-list">
          <li>ANSSI — SecNumAcadémie (2026)</li>
          <li>Cisco Networking Academy — Introduction to Cybersecurity (2025)</li>
        </ul>
      </div>

    </section>
  );
}