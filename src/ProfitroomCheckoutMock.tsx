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
          <label>Kod BLIK</label>
          <input type="text" className="pr-mock-input" placeholder="Wpisz 6-cyfrowy kod BLIK" maxLength={6} />
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
        <h3>Podaj dane karty płatniczej</h3>
        <div className="pr-mock-form-group">
          <label>Numer karty</label>
          <input type="text" className="pr-mock-input" placeholder="1234 5678 9012 3456" maxLength={19} />
        </div>
        <div className="pr-mock-form-group" style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1 }}>
            <label>MM/YY</label>
            <input type="text" className="pr-mock-input" placeholder="MM/YY" maxLength={5} />
          </div>
          <div style={{ flex: 1 }}>
            <label>CVV</label>
            <input type="text" className="pr-mock-input" placeholder="CVV" maxLength={4} />
          </div>
        </div>
        <div className="pr-mock-form-group">
          <label>Imię i nazwisko na karcie</label>
          <input type="text" className="pr-mock-input" placeholder="Imię i nazwisko" />
        </div>
        <button className="pr-mock-confirm-btn" onClick={() => { setShowVisaModal(false); setShowSuccess(true); }}>Zapłać</button>
        <button className="pr-mock-cancel-btn" onClick={() => setShowVisaModal(false)}>Anuluj</button>
      </div>
    </div>
  );

  // Success page mock
  const SuccessModal = () => (
    <div className="pr-mock-modal-overlay">
      <div className="pr-mock-modal">
        <h2 style={{ color: '#1bbf6e' }}>Rezerwacja zakończona sukcesem!</h2>
        <p>Dziękujemy za dokonanie rezerwacji.<br />Potwierdzenie zostało wysłane na Twój adres email.</p>
        <button className="pr-mock-confirm-btn" onClick={() => setShowSuccess(false)}>Zamknij</button>
      </div>
    </div>
  );

  return (
    <div className="pr-mock-row">
      {/* Sidebar */}
      <aside className="pr-mock-sidebar">
        <div className="pr-mock-panel pr-mock-booking-summary">
          <div className="pr-mock-panel-heading">
            <h2>Podsumowanie rezerwacji <i className="icon-arrow-down3" /></h2>
          </div>
          <div className="pr-mock-booking-summary-content">
            <div className="pr-mock-booking-summary-top">
              <div className="pr-mock-booking-summary-date-group">
                <div className="pr-mock-booking-summary-date-inner">
                  <strong className="pr-mock-booking-summary-day-name">śr.</strong>
                  <strong className="pr-mock-booking-summary-day-digit">18</strong>
                  <span className="pr-mock-stay-date-group">
                    <span>lut</span> <span>2026</span>
                  </span>
                </div>
                <i className="icon-thin-right-arrow" />
                <div className="pr-mock-booking-summary-date-inner">
                  <strong className="pr-mock-booking-summary-day-name">czw.</strong>
                  <strong className="pr-mock-booking-summary-day-digit">19</strong>
                  <span className="pr-mock-stay-date-group">
                    <span>lut</span> <span>2026</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="pr-mock-booking-summary-body">
              <div className="pr-mock-booking-summary-offer">
                <div className="pr-mock-booking-summary-content-title">
                  Wypoczynek nad morzem - pobyt ze śniadaniem
                </div>
              </div>
              <div className="pr-mock-booking-summary-room">
                <div className="pr-mock-booking-summary-content-title">
                  Pokój dwuosobowy
                </div>
                <div><span>Kościuszki 18</span></div>
                <label className="pr-mock-booking-summary-label-occupancy">
                  Osoby: 2
                </label>
              </div>
            </div>
            <div className="pr-mock-booking-summary-totals">
              <div className="pr-mock-booking-totals-row">
                <div>Pokoje i oferta</div>
                <div>
                  <span className="pr-mock-text-muted" style={{textDecoration: 'line-through', marginRight: 5}}>339&nbsp;zł</span>
                  <span className="pr-mock-booking-totals-price">286&nbsp;zł</span>
                </div>
              </div>
              <div className="pr-mock-booking-totals-row">
                <div className="pr-mock-text-muted">Najniższa cena z 30 dni przed obniżką</div>
                <div className="pr-mock-text-muted">339&nbsp;zł</div>
              </div>
              <div className="pr-mock-booking-totals-row">
                <div>Opłaty i podatki płatne w ramach rezerwacji</div>
                <div><span className="pr-mock-booking-totals-price">6,80&nbsp;zł</span></div>
              </div>
              <div className="pr-mock-booking-totals-row pr-mock-booking-totals-row-big">
                <div>SUMA</div>
                <div><span className="pr-mock-booking-totals-price">292,80&nbsp;zł</span></div>
              </div>
            </div>
            <div className="pr-mock-booking-totals-footer">
              <div className="pr-mock-booking-totals-row">
                <div>Przedpłata</div>
                <div><span className="pr-mock-booking-totals-footer-price">85,80&nbsp;zł</span></div>
              </div>
              <div className="pr-mock-booking-totals-row">
                <div>Na miejscu</div>
                <div><span className="pr-mock-booking-totals-footer-price">200,20&nbsp;zł</span></div>
              </div>
              <div className="pr-mock-booking-totals-row">
                <div>Opłaty i podatki</div>
                <div><span className="pr-mock-booking-totals-footer-price">6,80&nbsp;zł</span></div>
              </div>
              <div className="pr-mock-booking-totals-row">
                <button type="button" className="pr-mock-link pr-mock-link-primary">Szczegółowa kalkulacja</button>
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
            <h3 className="pr-mock-booking-steps-title">Podaj dane rezerwującego</h3>
          </div>
          <div className="pr-mock-booking-guest-form">
            <div className="pr-mock-form-group">
              <label>Imię i nazwisko*</label>
              <input type="text" className="pr-mock-input" placeholder="Imię i nazwisko*" />
            </div>
            <div className="pr-mock-form-group">
              <label>Adres email*</label>
              <input type="email" className="pr-mock-input" placeholder="Adres email*" />
            </div>
            <div className="pr-mock-form-group">
              <label>Numer telefonu*</label>
              <input type="tel" className="pr-mock-input" placeholder="Numer telefonu*" />
            </div>
            <div className="pr-mock-form-group">
              <label>Chcę otrzymać fakturę VAT <input type="checkbox" /></label>
            </div>
            {/* Invoice fields mock */}
            <div className="pr-mock-invoice-fields">
              <div className="pr-mock-form-group">
                <label>Nazwa firmy / Imię i nazwisko*</label>
                <input type="text" className="pr-mock-input" placeholder="Nazwa firmy / Imię i nazwisko*" />
              </div>
              <div className="pr-mock-form-group">
                <label>NIP</label>
                <input type="text" className="pr-mock-input" placeholder="NIP" />
              </div>
              <div className="pr-mock-form-group">
                <label>Ulica*</label>
                <input type="text" className="pr-mock-input" placeholder="Ulica*" />
              </div>
              <div className="pr-mock-form-group">
                <label>Kod pocztowy*</label>
                <input type="text" className="pr-mock-input" placeholder="Kod pocztowy*" />
              </div>
              <div className="pr-mock-form-group">
                <label>Miasto*</label>
                <input type="text" className="pr-mock-input" placeholder="Miasto*" />
              </div>
              <div className="pr-mock-form-group">
                <label>Kraj</label>
                <select className="pr-mock-input">
                  <option>Polska</option>
                  <option>Germany</option>
                  <option>UK</option>
                </select>
              </div>
            </div>
            <div className="pr-mock-form-group">
              <label>Mam uwagi do rezerwacji <input type="checkbox" /></label>
              <textarea className="pr-mock-input" placeholder="Uwagi do rezerwacji (np. godzina przyjazdu, numer lotu lub dodatkowe życzenia)" />
            </div>
            <div className="pr-mock-form-group">
              <label>Dane gościa inne niż rezerwującego <input type="checkbox" /></label>
              <input type="text" className="pr-mock-input" placeholder="Imię i nazwisko gościa w pokoju" />
            </div>
          </div>
        </div>
        {/* Payment methods mock */}
        <div className="pr-mock-panel pr-mock-payment-methods">
          <div className="pr-mock-panel-heading">
            <h3 className="pr-mock-booking-steps-title">Teraz płacisz tylko część!</h3>
            <div className="pr-mock-secure-payment-icon">
              <img src="https://checkout.profitroom.com/img/secure_payment.png" alt="Secure payment" style={{height: 32}} />
            </div>
          </div>
          <div className="pr-mock-payment-methods-list">
            <label className="pr-mock-radio">
              <input type="radio" name="payment-method" value="gpay" checked={paymentMethod === "gpay"} onChange={() => setPaymentMethod("gpay")}/>
              <span className="pr-mock-radio-title">Szybka płatność online</span>
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
              <span className="pr-mock-radio-title">Karta Płatnicza</span>
              <img src="https://checkout.profitroom.com/img/provider_logos/visa_new.svg" alt="Visa" style={{height: 32, marginLeft: 8}} />
              <img src="https://checkout.profitroom.com/img/provider_logos/mastercard_new.svg" alt="MasterCard" style={{height: 32, marginLeft: 8}} />
              <span className="pr-mock-payment-price">85,80&nbsp;zł</span>
            </label>
            <label className="pr-mock-radio">
              <input type="radio" name="payment-method" value="przelewy24" />
              <span className="pr-mock-radio-title">Przelew online</span>
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
              <input type="checkbox" /> Akceptuję regulamin rezerwacji, warunki anulacji oraz warunki i obowiązek informacyjny Przelewy24. <span style={{color: '#d00'}}>*</span>
            </label>
          </div>
          <div className="pr-mock-form-group">
            <label>
              <input type="checkbox" /> Wyrażam zgodę na otrzymywanie informacji o aktualnych wydarzeniach i promocjach.
            </label>
          </div>
          <button type="submit" className="pr-mock-confirm-btn">Rezerwuj <span style={{fontSize: '0.95em', color: '#888'}}>z obowiązkiem zapłaty</span></button>
        </div>
      </form>
      {showVisaModal && <VisaModal />}
      {showSuccess && <SuccessModal />}
    </div>
  );
}
