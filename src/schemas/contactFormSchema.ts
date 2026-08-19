import * as z from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, { error: "This field is required" }),
  lastName: z.string().trim().min(1, { error: "This field is required" }),
  email: z
    .string()
    .trim()
    .pipe(
      z.email({
        error: (iss) =>
          iss.input === ""
            ? "This field is required"
            : "Please enter a valid email address",
      }),
    ),
  queryType: z.enum(["general", "support"], {
    error: "Please select a query type",
  }),
  message: z.string().trim().min(1, { error: "This field is required" }),
  consent: z.literal(true, {
    error: "To submit this form, please consent to being contacted",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
