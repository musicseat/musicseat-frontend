'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/axios";
import { zodResolver } from '@hookform/resolvers/zod';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signInFormData = z.object({
  email: z.string(),
  password: z.string(),
})

type SignInFormData = z.infer<typeof signInFormData>


export default function SignIn() {

  const router = useRouter();
  
  const { register,  formState: {isSubmitting}, handleSubmit} = useForm<SignInFormData>({
      resolver: zodResolver(signInFormData),
    })

 async function handleSignIn(data: SignInFormData) {
    try {

      if(!data.email || !data.password) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
      
      const rep = await api.post('/sign-in', data);


      if(rep.status === 401) {
        return
      }

      router.push('/');

      return 

    } catch (error) {
      console.error(error);
    }
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
              <Label htmlFor="password">Digite sua senha</Label>
              <Input
                id="password"
                type="text"
                {...register('password')}
              />
            </div>

            <Button disabled={isSubmitting} className="w-full cursor-pointer" type="submit">
              Entrar
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
