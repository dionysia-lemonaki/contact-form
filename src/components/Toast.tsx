import { useRef, useEffect } from "react";
import { Check, X } from "lucide-react";

export default function Toast({
  show,
  onClick,
}: {
  show: boolean;
  onClick: () => void;
}) {
  const dismissRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (show) {
      dismissRef.current?.focus();
    }
  }, [show]);
  return (
    <div role="status" aria-live="polite">
      {show && (
        <div>
          <div>
            <Check size={24} aria-hidden="true" />
            <p>Message Sent!</p>
          </div>
          <button ref={dismissRef} onClick={onClick}>
            <X size={24} aria-hidden="true" />
            <span>Dismiss</span>
          </button>
          <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div>
      )}
    </div>
  );
}
