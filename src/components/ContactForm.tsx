import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type ContactFormData,
  contactFormSchema,
} from "../schemas/contactFormSchema";
import TextField from "./TextField";
import RadioGroup from "./RadioGroup";
import TextAreaField from "./TextAreaField";
import CheckBox from "./CheckBox";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
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
        queries={[
          { value: "general", label: "General Enquiry" },
          { value: "support", label: "Support Request" },
        ]}
        register={register}
        error={errors.queryType?.message}
      />
      <TextAreaField
        label="Message"
        name="message"
        register={register}
        error={errors.message?.message}
      />
      <CheckBox
        label="I consent to being contacted by the team"
        name="consent"
        register={register}
        error={errors.consent?.message}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
