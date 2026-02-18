import "./App.css";

function SuccessPage() {
  return (
    <div className="success-page-outer">
      <div className="success-page-modal">
        <div className="success-icon">✔️</div>
        <h2 className="success-title">Zahlung erfolgreich!</h2>
        <p className="success-message">Ihre Zahlung wurde sicher verarbeitet.<br />Vielen Dank für Ihr Vertrauen!</p>
        <a href="/" className="stripo-home-link">Zurück zur Startseite</a>
      </div>
    </div>
  );
}

export default SuccessPage;
