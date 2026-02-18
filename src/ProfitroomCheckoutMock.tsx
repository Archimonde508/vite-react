import { useState } from "react";
import "./ProfitroomMock.css";

export default function ProfitroomCheckoutMock() {
  const [paymentMethod, setPaymentMethod] = useState("gpay");
  const [showVisaModal, setShowVisaModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Mocked payment method fields
  const renderPaymentFields = () => {
    if (paymentMethod === "blik") {
      return (
        <div className="pr-mock-form-group">
          <label>BLIK-Code</label>
          <input type="text" className="pr-mock-input" placeholder="Geben Sie den 6-stelligen BLIK-Code ein" maxLength={6} />
        </div>
      );
    }
    if (paymentMethod === "visa") {
      return null; // Modal will be shown
    }
    return null;
  };

  // Visa modal mock
  const VisaModal = () => (
    <div className="pr-mock-modal-overlay">
      <div className="pr-mock-modal">
        <h3>Geben Sie Ihre Kartendaten ein</h3>
        <div className="pr-mock-form-group">
          <label>Kartennummer</label>
          <input type="text" className="pr-mock-input" placeholder="1234 5678 9012 3456" maxLength={19} />
        </div>
        <div className="pr-mock-form-group" style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1 }}>
            <label>MM/JJ</label>
            <input type="text" className="pr-mock-input" placeholder="MM/YY" maxLength={5} />
          </div>
          <div style={{ flex: 1 }}>
            <label>CVV</label>
            <input type="text" className="pr-mock-input" placeholder="CVV" maxLength={4} />
          </div>
        </div>
        <div className="pr-mock-form-group">
          <label>Name auf der Karte</label>
          <input type="text" className="pr-mock-input" placeholder="Name auf der Karte" />
        </div>
        <button className="pr-mock-confirm-btn" onClick={() => { setShowVisaModal(false); setShowSuccess(true); }}>Bezahlen</button>
        <button className="pr-mock-cancel-btn" onClick={() => setShowVisaModal(false)}>Abbrechen</button>
      </div>
    </div>
  );

  // Success page mock
  const SuccessModal = () => (
    <div className="pr-mock-modal-overlay">
      <div className="pr-mock-modal">
        <h2 style={{ color: '#1bbf6e' }}>Reservierung erfolgreich abgeschlossen!</h2>
        <p>Vielen Dank für Ihre Reservierung.<br />Die Bestätigung wurde an Ihre E-Mail-Adresse gesendet.</p>
        <button className="pr-mock-confirm-btn" onClick={() => setShowSuccess(false)}>Schließen</button>
      </div>
    </div>
  );

  return (
    <div className="pr-mock-row">
      {/* Sidebar */}
      <aside className="pr-mock-sidebar">
        <div className="pr-mock-panel pr-mock-booking-summary">
          <div className="pr-mock-panel-heading">
            <h2>Buchungsübersicht <i className="icon-arrow-down3" /></h2>
          </div>
          <div className="pr-mock-booking-summary-content">
            <div className="pr-mock-booking-summary-top">
              <div className="pr-mock-booking-summary-date-group">
                <div className="pr-mock-booking-summary-date-inner">
                  <strong className="pr-mock-booking-summary-day-name">Mi.</strong>
                  <strong className="pr-mock-booking-summary-day-digit">18</strong>
                  <span className="pr-mock-stay-date-group">
                    <span>Feb</span> <span>2026</span>
                  </span>
                </div>
                <i className="icon-thin-right-arrow" />
                <div className="pr-mock-booking-summary-date-inner">
                  <strong className="pr-mock-booking-summary-day-name">Do.</strong>
                  <strong className="pr-mock-booking-summary-day-digit">19</strong>
                  <span className="pr-mock-stay-date-group">
                    <span>Feb</span> <span>2026</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="pr-mock-booking-summary-body">
              <div className="pr-mock-booking-summary-offer">
                <div className="pr-mock-booking-summary-content-title">
                  Erholung am Meer – Aufenthalt mit Frühstück
                </div>
              </div>
              <div className="pr-mock-booking-summary-room">
                <div className="pr-mock-booking-summary-content-title">
                  Doppelzimmer
                </div>
                <div><span>Kościuszki 18</span></div>
                <label className="pr-mock-booking-summary-label-occupancy">
                  Personen: 2
                </label>
              </div>
            </div>
            <div className="pr-mock-booking-summary-totals">
              <div className="pr-mock-booking-totals-row">
                <div>Zimmer und Angebot</div>
                <div>
                  <span className="pr-mock-text-muted" style={{textDecoration: 'line-through', marginRight: 5}}>339&nbsp;zł</span>
                  <span className="pr-mock-booking-totals-price">286&nbsp;zł</span>
                </div>
              </div>
              <div className="pr-mock-booking-totals-row">
                <div className="pr-mock-text-muted">Niedrigster Preis der letzten 30 Tage vor der Reduzierung</div>
                <div className="pr-mock-text-muted">339&nbsp;zł</div>
              </div>
              <div className="pr-mock-booking-totals-row">
                <div>Gebühren und Steuern, die im Rahmen der Reservierung zu zahlen sind</div>
                <div><span className="pr-mock-booking-totals-price">6,80&nbsp;zł</span></div>
              </div>
              <div className="pr-mock-booking-totals-row pr-mock-booking-totals-row-big">
                <div>GESAMT</div>
                <div><span className="pr-mock-booking-totals-price">292,80&nbsp;zł</span></div>
              </div>
            </div>
            <div className="pr-mock-booking-totals-footer">
              <div className="pr-mock-booking-totals-row">
                <div>Vorauszahlung</div>
                <div><span className="pr-mock-booking-totals-footer-price">85,80&nbsp;zł</span></div>
              </div>
              <div className="pr-mock-booking-totals-row">
                <div>Vor Ort</div>
                <div><span className="pr-mock-booking-totals-footer-price">200,20&nbsp;zł</span></div>
              </div>
              <div className="pr-mock-booking-totals-row">
                <div>Gebühren und Steuern</div>
                <div><span className="pr-mock-booking-totals-footer-price">6,80&nbsp;zł</span></div>
              </div>
              <div className="pr-mock-booking-totals-row">
                <button type="button" className="pr-mock-link pr-mock-link-primary">Detaillierte Kalkulation</button>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <form className="pr-mock-booking-form" onSubmit={e => { e.preventDefault();
        if (paymentMethod === "visa") setShowVisaModal(true);
        else setShowSuccess(true);
      }}>
        <div className="pr-mock-panel pr-mock-booking-forms">
          <div className="pr-mock-panel-heading">
            <h3 className="pr-mock-booking-steps-title">Geben Sie die Daten des Buchenden ein</h3>
          </div>
          <div className="pr-mock-booking-guest-form">
            <div className="pr-mock-form-group">
              <label>Name und Nachname*</label>
              <input type="text" className="pr-mock-input" placeholder="Name und Nachname*" />
            </div>
            <div className="pr-mock-form-group">
              <label>E-Mail-Adresse*</label>
              <input type="email" className="pr-mock-input" placeholder="E-Mail-Adresse*" />
            </div>
            <div className="pr-mock-form-group">
              <label>Telefonnummer*</label>
              <input type="tel" className="pr-mock-input" placeholder="Telefonnummer*" />
            </div>
            <div className="pr-mock-form-group">
              <label>Ich möchte eine Mehrwertsteuerrechnung erhalten <input type="checkbox" /></label>
            </div>
            {/* Invoice fields mock */}
            <div className="pr-mock-invoice-fields">
              <div className="pr-mock-form-group">
                <label>Firmenname / Name und Nachname*</label>
                <input type="text" className="pr-mock-input" placeholder="Firmenname / Name und Nachname*" />
              </div>
              <div className="pr-mock-form-group">
                <label>USt-IdNr.</label>
                <input type="text" className="pr-mock-input" placeholder="USt-IdNr." />
              </div>
              <div className="pr-mock-form-group">
                <label>Straße*</label>
                <input type="text" className="pr-mock-input" placeholder="Straße*" />
              </div>
              <div className="pr-mock-form-group">
                <label>Postleitzahl*</label>
                <input type="text" className="pr-mock-input" placeholder="Postleitzahl*" />
              </div>
              <div className="pr-mock-form-group">
                <label>Stadt*</label>
                <input type="text" className="pr-mock-input" placeholder="Stadt*" />
              </div>
              <div className="pr-mock-form-group">
                <label>Land</label>
                <select className="pr-mock-input">
                  <option>Polen</option>
                  <option>Deutschland</option>
                  <option>UK</option>
                </select>
              </div>
            </div>
            <div className="pr-mock-form-group">
              <label>Ich habe Anmerkungen zur Reservierung <input type="checkbox" /></label>
              <textarea className="pr-mock-input" placeholder="Anmerkungen zur Reservierung (z.B. Ankunftszeit, Flugnummer oder besondere Wünsche)" />
            </div>
            <div className="pr-mock-form-group">
              <label>Gastdaten unterscheiden sich vom Buchenden <input type="checkbox" /></label>
              <input type="text" className="pr-mock-input" placeholder="Name des Gastes im Zimmer" />
            </div>
          </div>
        </div>
        {/* Payment methods mock */}
        <div className="pr-mock-panel pr-mock-payment-methods">
          <div className="pr-mock-panel-heading">
            <h3 className="pr-mock-booking-steps-title">Jetzt zahlen Sie nur einen Teil!</h3>
            <div className="pr-mock-secure-payment-icon">
              <img src="https://checkout.profitroom.com/img/secure_payment.png" alt="Secure payment" style={{height: 32}} />
            </div>
          </div>
          <div className="pr-mock-payment-methods-list">
            <label className="pr-mock-radio">
              <input type="radio" name="payment-method" value="gpay" checked={paymentMethod === "gpay"} onChange={() => setPaymentMethod("gpay")}/>
              <span className="pr-mock-radio-title">Schnelle Online-Zahlung</span>
              <img src="https://checkout.profitroom.com/img/provider_logos/gpay.svg" alt="Google Pay" style={{height: 32, marginLeft: 8}} />
              <span className="pr-mock-payment-price">85,80&nbsp;zł</span>
            </label>
            <label className="pr-mock-radio">
              <input type="radio" name="payment-method" value="blik" checked={paymentMethod === "blik"} onChange={() => setPaymentMethod("blik")}/>
              <span className="pr-mock-radio-title">BLIK</span>
              <img src="https://checkout.profitroom.com/img/provider_logos/Blik_new.svg" alt="Blik" style={{height: 32, marginLeft: 8}} />
              <span className="pr-mock-payment-price">85,80&nbsp;zł</span>
            </label>
            <label className="pr-mock-radio">
              <input type="radio" name="payment-method" value="visa" checked={paymentMethod === "visa"} onChange={() => setPaymentMethod("visa")}/>
              <span className="pr-mock-radio-title">Zahlungskarte</span>
              <img src="https://checkout.profitroom.com/img/provider_logos/visa_new.svg" alt="Visa" style={{height: 32, marginLeft: 8}} />
              <img src="https://checkout.profitroom.com/img/provider_logos/mastercard_new.svg" alt="MasterCard" style={{height: 32, marginLeft: 8}} />
              <span className="pr-mock-payment-price">85,80&nbsp;zł</span>
            </label>
            <label className="pr-mock-radio">
              <input type="radio" name="payment-method" value="przelewy24" />
              <span className="pr-mock-radio-title">Online-Überweisung</span>
              <img src="https://checkout.profitroom.com/img/provider_logos/przelewy24.svg" alt="Przelewy24" style={{height: 32, marginLeft: 8}} />
              <span className="pr-mock-payment-price">85,80&nbsp;zł</span>
            </label>
            <label className="pr-mock-radio">
              <input type="radio" name="payment-method" value="applepay" />
              <span className="pr-mock-radio-title">Apple Pay</span>
              <img src="https://checkout.profitroom.com/img/provider_logos/applepay.png" alt="Apple Pay" style={{height: 32, marginLeft: 8}} />
              <span className="pr-mock-payment-price">85,80&nbsp;zł</span>
            </label>
          </div>
          {renderPaymentFields()}
        </div>
        {/* Terms and confirm button mock */}
        <div className="pr-mock-panel pr-mock-confirm-section">
          <div className="pr-mock-form-group">
            <label>
              <input type="checkbox" /> Ich akzeptiere die Buchungsbedingungen, Stornierungsbedingungen sowie die Bedingungen und Informationspflichten von Przelewy24. <span style={{color: '#d00'}}>*</span>
            </label>
          </div>
          <div className="pr-mock-form-group">
            <label>
              <input type="checkbox" /> Ich bin damit einverstanden, Informationen über aktuelle Veranstaltungen und Aktionen zu erhalten.
            </label>
          </div>
          <button type="submit" className="pr-mock-confirm-btn">Reservieren <span style={{fontSize: '0.95em', color: '#888'}}>mit Zahlungsverpflichtung</span></button>
        </div>
      </form>
      {showVisaModal && <VisaModal />}
      {showSuccess && <SuccessModal />}
    </div>
  );
}
