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
    <div role="status" aria-live="polite" className="fixed top-0 p-6">
      {show && (
        <div className="bg-grey-900 text-white max-w-112.5 w-full rounded-xl flex flex-col gap-2 p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Check
                size={20}
                className="border border-white rounded-full"
                aria-hidden="true"
              />
              <p>Message Sent!</p>
            </div>
            <button
              ref={dismissRef}
              onClick={onClick}
              className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 cursor-pointer"
            >
              <X size={24} aria-hidden="true" />
              <span className="sr-only">Dismiss</span>
            </button>
          </div>
          <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div>
      )}
    </div>
  );
}
