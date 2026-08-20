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
    <div>
      <div>
        <input
          type="checkbox"
          id={inputId}
          {...register(name)}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={!!error}
        />
        <div>
          <label htmlFor={inputId}>
            <span>{label}</span>
            <span aria-hidden={true}>*</span>
            <span className="sr-only">(required)</span>
          </label>
        </div>
      </div>
      {error && (
        <p id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
