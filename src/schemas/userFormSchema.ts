import { z } from "zod";

export const userFormSchema = z
  .object({
    name: z.string().min(3, "O nome precisa ter mais de 3 caracteres"),
    lastname: z.string().min(3, "O sobrenome precisa ter mais de 3 caracteres"),
    gender: z.string().refine((field) => field !== "select", {
      message: "Você precisa escolher um genero",
    }),
    email: z
      .string()
      .min(1, "O campo é obrigatorio")
      .email("Insira um email válido"),
    password: z.string().min(6, "A senha precisa ter no minimo 6 caracteres"),
    confirmpassword: z
      .string()
      .min(6, "A confirmação precisa ter no mínimo 6 caracteres"),
    agree: z.boolean().refine((field) => field === true, {
      message: "O campo precisa concordar com os termos",
    }),
  })
  .refine((field) => field.password === field.confirmpassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmpassword"],
  });

export type UserFormSchema = z.infer<typeof userFormSchema>