import { useId } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { ContactForm } from "../schemas/contactFormSchema";

interface RadioGroupItemProps {
  label: string;
  name: "queryType";
  value: "general" | "support";
  register: UseFormRegister<ContactForm>;
}

const RadioGroupItem = ({
  label,
  name,
  value,
  register,
}: RadioGroupItemProps) => {
  const id = useId();
  return (
    <div>
      <input type="radio" id={id} value={value} {...register(name)} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioGroupItem;
