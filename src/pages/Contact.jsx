export default function Contact() {
  return (
    <section className="page-section contact-section">

      <h2 className="section-title">Contact</h2>

      <p className="contact-intro">
        Tu peux me contacter pour un projet, une collaboration, une opportunité
        ou simplement pour échanger autour des réseaux, des systèmes ou de la cybersécurité.
      </p>

      <div className="contact-grid">

        {/* EMAIL PERSO */}
        <div className="contact-card">
          <h3>📧 Email personnel</h3>
          <p className="contact-value">kdiagne799@gmail.com</p>
        </div>

        {/* EMAIL UNIVERSITAIRE */}
        <div className="contact-card">
          <h3>🎓 Email universitaire</h3>
          <p className="contact-value">khadim.diagne@etu.univ-st-etienne.fr</p>
        </div>

        {/* TÉLÉPHONE */}
        <div className="contact-card">
          <h3>📱 Téléphone</h3>
          <p className="contact-value">+33 6 65 93 32 56</p>
        </div>

        {/* LOCALISATION */}
        <div className="contact-card">
          <h3>📍 Localisation</h3>
          <p className="contact-value">Roanne, France</p>
        </div>

        {/* LIENS PRO (OPTIONNELS) */}
        <div className="contact-card">
          <h3>💼 LinkedIn</h3>
          <p className="contact-value contact-placeholder">
            (Ajoute ton lien si tu veux)
          </p>
        </div>

        <div className="contact-card">
          <h3>🐙 GitHub</h3>
          <p className="contact-value contact-placeholder">
            (Ajoute ton lien si tu veux)
          </p>
        </div>

      </div>

      {/* MESSAGE DE FIN */}
      <p className="contact-footer">
        Je réponds rapidement et avec plaisir.
      </p>

    </section>
  );
}