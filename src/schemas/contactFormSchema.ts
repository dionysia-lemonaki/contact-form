import * as z from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, { error: "This field is required" }),
  lastName: z.string().min(1, { error: "This field is required" }),
  email: z.email({
    error: (issue) =>
      issue.input === ""
        ? "This field is required"
        : "Please enter a valid email address",
  }),
  queryType: z.enum(["general", "support"], {
    error: "Please select a query type",
  }),
  message: z.string().min(1, { error: "This field is required" }),
  consent: z.boolean().refine((value) => value === true, {
    error: "To submit this form, please consent to being contacted",
  }),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
