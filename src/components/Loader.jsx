export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-orb">
        <div className="loader-core"></div>
      </div>
      <p className="loader-text">Chargement du portfolio...</p>
    </div>
  );
}