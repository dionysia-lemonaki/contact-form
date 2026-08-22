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
    <fieldset aria-describedby={error ? errorId : undefined} className="mb-6">
      <legend className="flex items-center gap-2 mb-4">
        <span className="text-base font-normal leading-4">{legend}</span>
        <span aria-hidden={true} className="text-green-600">
          *
        </span>
        <span className="sr-only">(required)</span>
      </legend>
      <div className="grid gap-4 md:grid-cols-2 mb-4">
        {queries.map((item) => {
          const inputId = `${baseId}-${item.value}`;
          return (
            <div
              key={item.value}
              className="flex items-center gap-3 py-3 px-6 border border-grey-500 rounded-lg has-checked:bg-green-200 accent-green-600 hover:border-green-600"
            >
              <input
                type="radio"
                id={inputId}
                value={item.value}
                {...register(name)}
                className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              />
              <label htmlFor={inputId}>{item.label}</label>
            </div>
          );
        })}
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
    </fieldset>
  );
}
