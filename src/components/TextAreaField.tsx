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
    <div className="flex flex-col gap-2 mb-10">
      <label htmlFor={inputId} className="flex items-center gap-2">
        <span className="text-base font-normal leading-6">{label}</span>
        <span aria-hidden={true} className="text-green-600">
          *
        </span>
        <span className="sr-only">(required)</span>
      </label>
      <textarea
        id={inputId}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
        {...register(name)}
        className={`border py-3 px-6 rounded-lg resize-none min-h-60 md:min-h-33 lg:min-h-26.25 hover:border-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 ${
          error
            ? "border-red focus-visible:outline-red"
            : "border-grey-500 focus-visible:outline-green-600"
        }`}
      ></textarea>
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
