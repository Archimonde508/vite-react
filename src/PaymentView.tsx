import { useState } from "react";
import "./App.css";

const PAYMENT_METHODS = [
  { label: "Kreditkarte", value: "credit" },
  { label: "PayPal", value: "paypal" },
  { label: "Sofortüberweisung", value: "sofort" },
];

export default function PaymentView() {
  const [selectedMethod, setSelectedMethod] = useState(PAYMENT_METHODS[0].value);

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
        <div><strong>Name:</strong> {buyer.firstName} {buyer.lastName}</div>
        <div><strong>Adresse:</strong> {buyer.address}</div>
        <div><strong>Email:</strong> {buyer.email}</div>
        <div><strong>Telefon:</strong> {buyer.telefon}</div>
      </section>

      <section className="payment-method">
        <h4>Zahlungsmethode wählen</h4>
        <div className="payment-methods">
          {PAYMENT_METHODS.map((method) => (
            <label key={method.value} className={selectedMethod === method.value ? "selected" : ""}>
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="card-icon" />
              </div>
              <input type="text" placeholder="Kartennummer" maxLength={19} className="input" autoComplete="cc-number" />
              <div className="row">
                <input type="text" placeholder="MM/YY" maxLength={5} className="input half" autoComplete="cc-exp" />
                <input type="text" placeholder="CVV" maxLength={4} className="input half" autoComplete="cc-csc" />
              </div>
              <input type="text" placeholder="Name auf der Karte" className="input" autoComplete="cc-name" />
            </div>
          )}
          {selectedMethod === "paypal" && (
            <div className="paypal-fields">
              <div className="paypal-logo-row">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="paypal-logo" />
              </div>
              <input type="email" placeholder="PayPal E-Mail" className="input" autoComplete="email" />
            </div>
          )}
          {selectedMethod === "sofort" && (
            <div className="sofort-fields">
              <div className="sofort-logo-row">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Sofort_Logo_2017.svg" alt="Sofort" className="sofort-logo" />
              </div>
              <input type="text" placeholder="IBAN" className="input" autoComplete="off" />
              <input type="text" placeholder="BIC (optional)" className="input" autoComplete="off" />
              <input type="text" placeholder="Kontoinhaber" className="input" autoComplete="off" />
            </div>
          )}
        </div>
      </section>

      <section className="payment-summary">
        <h4>Gesamtsumme</h4>
        <div className="price">{price} €</div>
      </section>

      <button className="pay-btn" disabled>
        Jetzt bezahlen (Demo)
      </button>
    </div>
  );
}
