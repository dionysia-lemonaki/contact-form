import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactForm,
} from "../schemas/contactFormSchema.ts";
import TextField from "./TextField.tsx";
import RadioGroup from "./RadioGroup.tsx";
import TextareaField from "./TextareaField.tsx";
import Checkbox from "./Checkbox.tsx";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <TextField
            label="First Name"
            type="text"
            name="firstName"
            register={register}
            error={errors.firstName?.message}
          />
          <TextField
            label="Last Name"
            type="text"
            name="lastName"
            register={register}
            error={errors.lastName?.message}
          />
        </div>
        <TextField
          label="Email Address"
          type="email"
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <RadioGroup
          legend="Query Type"
          name="queryType"
          register={register}
          queryTypes={[
            { id: "general", title: "General Enquiry" },
            { id: "support", title: "Support Request" },
          ]}
          error={errors.queryType?.message}
        />
        <TextareaField
          label="Message"
          name="message"
          register={register}
          error={errors.message?.message}
        />
        <Checkbox
          label="I consent to being contacted by the team"
          name="consent"
          register={register}
          error={errors.consent?.message}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
