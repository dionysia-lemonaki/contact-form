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
  const inputId = `${baseId}-input`;
  const errorId = `${baseId}-error`;
  return (
    <div className="flex flex-col gap-2 mb-6">
      <label htmlFor={inputId} className="flex items-center gap-2">
        <span className="text-base font-normal leading-6">{label}</span>
        <span aria-hidden={true} className="text-green-600">
          *
        </span>
        <span className="sr-only">(required)</span>
      </label>
      <input
        id={inputId}
        type={type}
        {...register(name)}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
        className={`border py-3 px-6 rounded-lg hover:border-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 ${
          error
            ? "border-red focus-visible:outline-red"
            : "border-grey-500 focus-visible:outline-green-600"
        }`}
      />
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
