import { useState } from "react";
import "./App.css";

const PAYMENT_METHODS = [
  { label: "Kreditkarte", value: "credit" },
  { label: "PayPal", value: "paypal" },
  { label: "Sofortüberweisung", value: "sofort" },
];

function PaymentView() {
  const [selectedMethod, setSelectedMethod] = useState(PAYMENT_METHODS[0].value);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardName, setCardName] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [iban, setIban] = useState("");
  const [bic, setBic] = useState("");
  const [sofortName, setSofortName] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Mock buyer info
  const buyer = {
    firstName: "Max",
    lastName: "Mustermann",
    address: "Musterstraße 1, 12345 Musterstadt",
    email: "max.mustermann@email.de",
    telefon: "+49 123 4567890",
  };

  // Payment summary
  const price = 399;

  return (
    <div className="payment-container">
      <h2>Bezahlung</h2>
      <section className="hotel-info">
        <h3>3 Nächte im Hotel Wydma ★★★</h3>
        <ul className="leistungen">
          <li>3 x Übernachtung mit Frühstücksbuffet</li>
          <li>3 x Abendessen</li>
          <li>1 x Eintritt in die "normobare Kammer" (ca. 2 Stunde)</li>
          <li>1 x Nachmittag mit Kaffee und Kuchen (15 und 16 Uhr)</li>
          <li>Nutzung von Hallenbad und Whirlpool</li>
          <li>Nutzung von Sauna (17-20 Uhr)</li>
          <li>deutschsprachiger Gästeservice des Hotels</li>
        </ul>
        <div className="room-info">
          <strong>Moderne, komfortable Doppelzimmer</strong>
        </div>
        <div className="dates">
          <strong>Datum Ihrer Anreise:</strong> 20.2. bis 23.2.2026
        </div>
      </section>

      <section className="buyer-info">
        <h4>Ihre Angaben</h4>
        <div>
          <strong>Name:</strong> {buyer.firstName} {buyer.lastName}
        </div>
        <div>
          <strong>Adresse:</strong> {buyer.address}
        </div>
        <div>
          <strong>Email:</strong> {buyer.email}
        </div>
        <div>
          <strong>Telefon:</strong> {buyer.telefon}
        </div>
      </section>

      <section className="payment-method">
        <h4>Zahlungsmethode wählen</h4>
        <div className="payment-methods">
          {PAYMENT_METHODS.map((method) => (
            <label
              key={method.value}
              className={selectedMethod === method.value ? "selected" : ""}
            >
              <input
                type="radio"
                name="payment"
                value={method.value}
                checked={selectedMethod === method.value}
                onChange={() => setSelectedMethod(method.value)}
              />
              {method.label}
            </label>
          ))}
        </div>

        {/* Dynamic payment fields */}
        <div className="payment-fields">
          {selectedMethod === "credit" && (
            <div className="credit-fields">
              <div className="card-image-row">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="card-icon"
                />
              </div>
              <input
                type="text"
                placeholder="Kartennummer"
                maxLength={19}
                className="input"
                autoComplete="cc-number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <div className="row">
                <input
                  type="text"
                  placeholder="MM/YY"
                  maxLength={5}
                  className="input half"
                  autoComplete="cc-exp"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="CVV"
                  maxLength={4}
                  className="input half"
                  autoComplete="cc-csc"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Name auf der Karte"
                className="input"
                autoComplete="cc-name"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>
          )}
          {selectedMethod === "paypal" && (
            <div className="paypal-fields">
              <div className="paypal-logo-row">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="paypal-logo"
                />
              </div>
              <input
                type="email"
                placeholder="PayPal E-Mail"
                className="input"
                autoComplete="email"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
              />
            </div>
          )}
          {selectedMethod === "sofort" && (
            <div className="sofort-fields">
              <div className="sofort-logo-row">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Sofort_Logo_2017.svg"
                  alt="Sofort"
                  className="sofort-logo"
                />
              </div>
              <input
                type="text"
                placeholder="IBAN"
                className="input"
                autoComplete="off"
                value={iban}
                onChange={(e) => setIban(e.target.value)}
              />
              <input
                type="text"
                placeholder="BIC (optional)"
                className="input"
                autoComplete="off"
                value={bic}
                onChange={(e) => setBic(e.target.value)}
              />
              <input
                type="text"
                placeholder="Kontoinhaber"
                className="input"
                autoComplete="off"
                value={sofortName}
                onChange={(e) => setSofortName(e.target.value)}
              />
            </div>
          )}
        </div>
      </section>

      <section className="payment-summary">
        <h4>Gesamtsumme</h4>
        <div className="price">{price} €</div>
      </section>

      <button
        className="pay-btn"
        onClick={() => setShowConfirmation(true)}
        disabled={
          (selectedMethod === "credit" &&
            (!cardNumber || !expiry || !cvc || !cardName)) ||
          (selectedMethod === "paypal" && !paypalEmail) ||
          (selectedMethod === "sofort" && (!iban || !sofortName))
        }
      >
        Jetzt bezahlen
      </button>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="stripo-modal-overlay">
          <div className="stripo-modal stripo-modal-animate">
            <h3>Bezahlung bestätigen</h3>
            <p>Bitte bestätigen Sie, dass Sie die Zahlung abschließen möchten.</p>
            <div className="stripo-modal-actions">
              <button
                className="stripo-confirm-btn"
                onClick={() => {
                  setShowConfirmation(false);
                  setShowSuccess(true);
                  setTimeout(() => {
                    window.location.href = "/success";
                  }, 1500);
                }}
              >
                Zahlung abschließen
              </button>
              <button
                className="stripo-cancel-btn"
                onClick={() => setShowConfirmation(false)}
              >
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Info */}
      {showSuccess && (
        <div className="stripo-success-info">
          <h3>Zahlung erfolgreich!</h3>
          <p>Ihre Zahlung wurde verarbeitet. Vielen Dank!</p>
        </div>
      )}
    </div>
  );
}

export default PaymentView;
