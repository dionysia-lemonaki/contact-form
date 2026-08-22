import { useId } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { ContactFormData } from "../schemas/contactFormSchema";

interface CheckBoxProps {
  name: "consent";
  label: string;
  register: UseFormRegister<ContactFormData>;
  error?: string;
}

export default function CheckBox({
  name,
  label,
  register,
  error,
}: CheckBoxProps) {
  const baseId = useId();
  const inputId = `${baseId}-input`;
  const errorId = `${baseId}-error`;
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4 mb-2">
        <input
          type="checkbox"
          id={inputId}
          {...register(name)}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={!!error}
          className="accent-green-600"
        />
        <div>
          <label htmlFor={inputId} className="flex items-center gap-1">
            <span className="text-base font-normal leading-6">
              {label}{" "}
              <span aria-hidden={true} className="text-green-600">
                *
              </span>
            </span>
            <span className="sr-only">(required)</span>
          </label>
        </div>
      </div>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-red text-base font-normal leading-6"
        >
          {error}
        </p>
      )}
    </div>
  );
}
