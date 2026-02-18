import { createRoot } from "react-dom/client";
import ProfitroomCheckoutMock from "./ProfitroomCheckoutMock";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProfitroomCheckoutMock />
  </StrictMode>,
);
