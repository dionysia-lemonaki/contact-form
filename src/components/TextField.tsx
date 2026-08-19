import { useId } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { ContactFormData } from "../schemas/contactFormSchema";

interface TextFieldProps {
  label: string;
  type: "text" | "email";
  name: "firstName" | "lastName" | "email";
  register: UseFormRegister<ContactFormData>;
  error?: string;
}

export default function TextField({
  label,
  type,
  name,
  register,
  error,
}: TextFieldProps) {
  const baseId = useId();
  const labelId = `${baseId}-label`;
  const errorId = `${baseId}-error`;
  return (
    <div>
      <label htmlFor={labelId}>
        <span>{label}</span>
        <span aria-hidden={true}>*</span>
        <span className="sr-only">(required)</span>
      </label>
      <input
        id={labelId}
        type={type}
        {...register(name)}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
      />
      {error && (
        <p id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
