'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const { register,  formState: {isSubmitting}, handleSubmit} = useForm()

  function handleSignUp(data: unknown) {
    console.log(data);
  }

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="p-8">
        
        <Button asChild className="absolute right-8 top-8" variant="ghost">
          <Link href='/sign-in'>Fazer Login</Link>
        </Button>

        <div className="w-[340px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">Criar Conta grátis</h1>
            <p className="text-sm text-muted-foreground">Seja um parceiro e entre para o mundo da música</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="name">Seu nome</Label>
              <Input
                id="name"
                type="text"
                {...register('name')}
              />
            </div>
            
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
            
            <div className="space-y-2">
              <Label htmlFor="passwordConfirm">Confirme a senha</Label>
              <Input
                id="passwordConfirm"
                type="text"
                {...register('passwordConfirm')}
              />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar você concorda com nossos <Link href='' className="underline underline-offset-4">Termos de serviço</Link> e <Link href='' className="underline underline-offset-4">políticas de privacidade</Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  )
}
