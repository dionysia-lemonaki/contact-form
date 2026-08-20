import { useId } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { ContactFormData } from "../schemas/contactFormSchema";

interface TextAreaFieldProps {
  label: string;
  name: "message";
  register: UseFormRegister<ContactFormData>;
  error?: string;
}

export default function TextAreaField({
  label,
  name,
  register,
  error,
}: TextAreaFieldProps) {
  const baseId = useId();
  const inputId = `${baseId}-input`;
  const errorId = `${baseId}-error`;
  return (
    <div>
      <label htmlFor={inputId}>
        <span>{label}</span>
        <span aria-hidden={true}>*</span>
        <span className="sr-only">(required)</span>
      </label>
      <textarea
        id={inputId}
        aria-describedby={error ? errorId : undefined}
        {...register(name)}
      ></textarea>
      {error && (
        <p id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
