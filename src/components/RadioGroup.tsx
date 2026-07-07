import type { UseFormRegister } from "react-hook-form";
import { useId } from "react";
import RadioGroupItem from "./RadioGroupItem";
import type { ContactForm } from "../schemas/contactFormSchema";

interface Radios {
  id: "general" | "support";
  title: string;
}

interface RadioGroupProps {
  legend: string;
  queryTypes: Radios[];
  name: "queryType";
  register: UseFormRegister<ContactForm>;
  error?: string;
}

const RadioGroup = ({
  legend,
  queryTypes,
  name,
  register,
  error,
}: RadioGroupProps) => {
  const id = useId();
  return (
    <fieldset aria-describedby={error ? id : undefined}>
      <legend>
        <span>{legend}</span>
        <span>*</span>
      </legend>
      <div>
        {queryTypes.map((queryType) => (
          <RadioGroupItem
            key={queryType.id}
            label={queryType.title}
            value={queryType.id}
            register={register}
            name={name}
          />
        ))}
      </div>
      {error && (
        <p id={id} role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
};

export default RadioGroup;
