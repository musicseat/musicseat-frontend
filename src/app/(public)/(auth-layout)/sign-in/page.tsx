'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const { register,  formState: {isSubmitting}, handleSubmit} = useForm()

  function handleSignIn(data: unknown) {
    console.log(data);
  }

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="p-8">
        
        <Button asChild className="absolute right-8 top-8" variant="ghost">
          <Link href='/sign-up'>Novo usuário</Link>
        </Button>

        <div className="w-[340px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">Acessar perfil</h1>
            <p className="text-sm text-muted-foreground">Acompanhe as mais novas novidades do mundo da música</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                id="email"
                type="text"
                {...register('email')}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Crie uma senha</Label>
              <Input
                id="password"
                type="text"
                {...register('password')}
              />
            </div>    

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar perfil
            </Button>
          </form>
        </div>

      </div>
    </div>
  )
}
