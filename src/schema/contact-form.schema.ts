import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nimen pitää olla enemmän kuin 2 merkkiä.",
  }),
  email: z
    .string()
    .email({ message: "Sähköpostin pitää olla oikeassa muodossa." }),
  description: z.string().min(4, {
    message: "Kuvauksen pitää olla enemmän kuin 4 merkkiä.",
  }),
});
