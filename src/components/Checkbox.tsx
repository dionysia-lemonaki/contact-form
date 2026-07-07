import { useId } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { ContactForm } from "../schemas/contactFormSchema";

interface CheckboxProps {
  label: string;
  name: "consent";
  register: UseFormRegister<ContactForm>;
  error?: string;
}

const Checkbox = ({ label, name, register, error }: CheckboxProps) => {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        {...register(name)}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
      />
      <label htmlFor={id}>
        <span>{label}</span>
        <span>*</span>
      </label>
      {error && (
        <p id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Checkbox;
