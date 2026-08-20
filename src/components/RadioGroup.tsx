import { useId } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { ContactFormData } from "../schemas/contactFormSchema";

interface QueryType {
  value: "general" | "support";
  label: string;
}

interface RadioGroupProps {
  legend: string;
  name: "queryType";
  queries: QueryType[];
  register: UseFormRegister<ContactFormData>;
  error?: string;
}

export default function RadioGroup({
  legend,
  name,
  queries,
  register,
  error,
}: RadioGroupProps) {
  const baseId = useId();
  const errorId = `${baseId}-error`;

  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend>
        <span>{legend}</span>
        <span aria-hidden={true}>*</span>
        <span className="sr-only">(required)</span>
      </legend>
      <div>
        {queries.map((item) => {
          const inputId = `${baseId}-${item.value}`;
          return (
            <div key={item.value}>
              <input
                type="radio"
                id={inputId}
                value={item.value}
                {...register(name)}
              />
              <label htmlFor={inputId}>{item.label}</label>
            </div>
          );
        })}
      </div>
      {error && (
        <p id={errorId} role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}
