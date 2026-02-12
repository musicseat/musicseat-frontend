"use server";

import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function registerUser(
  prevState: any,
  formData: FormData
) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
      return { error: "Todos os campos são obrigatórios." };
    }

    // 1. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Insert into next_auth.users table
    const { error } = await supabaseAdmin
      .schema("next_auth")
      .from("users")
      .insert([
        {
          name,
          email,
          password: hashedPassword,
          emailVerified: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error("Error creating user:", error);
      if (error.code === "23505") return { error: "Este email já está em uso." };
      return { error: "Erro ao criar conta. Tente novamente." };
    }

    return { success: true };
  } catch (error) {
    console.error("Registration error:", error);
    return { error: "Ocorreu um erro inesperado." };
  }
}
