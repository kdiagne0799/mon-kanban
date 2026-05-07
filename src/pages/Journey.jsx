export default function Journey() {
  return (
    <section className="page-section journey-section">

      <h2 className="section-title">Mon Parcours</h2>

      <p className="journey-intro">
        Mon parcours est marqué par deux pays, deux cultures et une passion commune :
        comprendre, réparer et améliorer les technologies qui nous connectent.
        Voici comment mon chemin m’a conduit du Sénégal à la France, puis vers le monde
        des Réseaux & Télécommunications.
      </p>

      <div className="timeline">

        {/* ÉTAPE 1 — SÉNÉGAL */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>🇸🇳 Sénégal — Les débuts</h3>
            <p>
              Né et grandi au Sénégal, j’ai développé très tôt un intérêt pour la
              technologie, la maintenance et le diagnostic. Entre bricolage, réparation
              d’équipements et curiosité naturelle, j’ai construit les bases de mon
              esprit technique.
            </p>
            <p>
              C’est là que j’ai compris que j’aimais comprendre comment les systèmes
              fonctionnent, pourquoi ils tombent en panne, et comment les remettre en état.
            </p>
          </div>
        </div>

        {/* ÉTAPE 2 — TRANSITION */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>✈️ Transition — Un nouveau départ</h3>
            <p>
              Mon arrivée en France a marqué un tournant majeur. Nouveau pays, nouvelle
              culture, nouveaux défis… mais aussi de nouvelles opportunités pour
              approfondir mes compétences techniques.
            </p>
            <p>
              Cette transition m’a appris l’adaptation, la rigueur et l’autonomie — des
              qualités essentielles dans les métiers du réseau.
            </p>
          </div>
        </div>

        {/* ÉTAPE 3 — FRANCE */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>🇫🇷 France — Construction du profil R&T</h3>
            <p>
              En intégrant le BUT Réseaux & Télécommunications à l’IUT de Roanne,
              j’ai commencé à structurer mes connaissances : infrastructures, fibre,
              systèmes, cybersécurité, protocoles, diagnostic, supervision…
            </p>
            <p>
              Aujourd’hui, je développe un profil polyvalent, capable d’intervenir sur
              des architectures modernes, d’analyser des incidents et de contribuer à
              la qualité de service des réseaux.
            </p>
          </div>
        </div>

        {/* ÉTAPE 4 — OBJECTIF */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>🚀 Objectif — Devenir un professionnel complet</h3>
            <p>
              Mon ambition est claire : évoluer dans les domaines du réseau, de la
              cybersécurité ou de l’ingénierie système. Je veux comprendre, sécuriser
              et optimiser les infrastructures qui font fonctionner notre monde connecté.
            </p>
            <p>
              Chaque étape de mon parcours m’a rapproché de cet objectif.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}