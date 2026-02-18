
import { createRoot } from 'react-dom/client';
import SuccessPage from './SuccessPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaymentView from './PaymentView';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentView />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
