import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Form from "./components/Form";

const root = document.querySelector("#root");
if (!root) throw new Error("root not found");
createRoot(root).render(
  <StrictMode>
    <Form />
  </StrictMode>,
);
