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
    <main className="min-h-screen flex justify-center items-center p-4">
      <div className="bg-white max-w-184 w-full p-6 md:p-10 rounded-2xl flex flex-col gap-8">
        <h1 className=" font-bold text-[2rem] leading-none">Contact Us</h1>
        <ContactForm onSuccess={handleSuccess} />
      </div>
      <Toast show={showToast} onClick={handleDismiss} />
    </main>
  );
}
