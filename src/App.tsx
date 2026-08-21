import { useState } from "react";
import ContactForm from "./components/ContactForm";
import Toast from "./components/Toast";

export default function App() {
  const [showToast, setShowToast] = useState(false);

  const handleSuccess = () => {
    setShowToast(true);
  };

  const handleDismiss = () => {
    setShowToast(false);
  };
  return (
    <main>
      <div>
        <h1>Contact Us</h1>
        <ContactForm onSuccess={handleSuccess} />
      </div>
      <Toast show={showToast} onClick={handleDismiss} />
    </main>
  );
}
