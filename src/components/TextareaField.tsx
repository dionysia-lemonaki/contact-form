import { useId } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { ContactForm } from "../schemas/contactFormSchema";

interface TextareaFieldProps {
  label: string;
  name: "message";
  register: UseFormRegister<ContactForm>;
  error?: string;
}

const TextareaField = ({
  label,
  name,
  register,
  error,
}: TextareaFieldProps) => {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        {...register(name)}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
      ></textarea>
      {error && (
        <p id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextareaField;
