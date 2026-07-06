import { useId } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { ContactForm } from "../schemas/contactFormSchema";

interface TextFieldProps {
  label: string;
  type: "text" | "email";
  name: "firstName" | "lastName" | "email";
  register: UseFormRegister<ContactForm>;
  error?: string;
}

const TextField = ({ label, type, name, register, error }: TextFieldProps) => {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id}>
        <span>{label} </span>
        <span>*</span>
      </label>
      <input
        id={id}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...register(name)}
      />
      {error && (
        <p id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextField;
