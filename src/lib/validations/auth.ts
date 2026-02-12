import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Aquele email ali não parece muito musical. Tenta de novo?"),
  password: z.string().min(6, "Sua chave precisa de pelo menos 6 notas (caracteres)."),
  remember: z.boolean().optional(),
});

export const registerSchema = z.object({
  name: z.string().min(3, "Como devemos te chamar? (Mínimo 3 letras)"),
  email: z.string().email("E-mail inválido. Verifique se digitou corretamente."),
  password: z.string().min(6, "Crie uma senha com pelo menos 6 caracteres."),
  birthDate: z.string().min(1, "Sua data de nascimento é importante."),
  phone: z.string().min(10, "Telefone inválido."),
});

export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;
