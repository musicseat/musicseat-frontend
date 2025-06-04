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
    <div className="relative flex flex-col items-center justify-center bg-[#1C1D21]">
      <div className="p-8">
        
        <div className="absolute  bottom-8 flex justify-between w-full max-w-[340px] text-muted-foreground">
          <Label>
            Não tem uma conta?
          </Label>
          <Button asChild variant="outline">
            <Link href='/sign-up'>Cadastre-se</Link>
          </Button>
        </div>

        <div className="w-[340px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">Acessar perfil</h1>
            <p className="text-sm text-muted-foreground">Acompanhe as mais novas novidades do mundo da música</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(handleSignIn)}> 
            <Input
              className="!bg-transparent pl-0 pb-4 !border-t-0 !border-x-0 !rounded-none !shadow-none focus:border-c focus:!ring-0 focus:!outline-none focus-visible:!border-[#9C6FE4]/90"
              placeholder="Seu e-mail"
              id="email"
              type="text"
              {...register('email')}
            />
            
            <div className="">
              <Input
                className="!bg-transparent pl-0 pb-4 !border-t-0 !border-x-0 !rounded-none !shadow-none focus:border-c focus:!ring-0 focus:!outline-none focus-visible:!border-[#9C6FE4]/90"
                placeholder="Sua senha"
                id="password"
                type="text"
                {...register('password')}
              />
            </div>

            <p>
              <Link href='/forgot-password' className="text-sm leading-relaxed underline underline-offset-4 text-muted-foreground hover:text-[#9C6FE4]/90">
                Esqueci minha senha
              </Link>
            </p>

            <Button 
              disabled={isSubmitting}
              variant={"secondary"}
              className="w-full cursor-pointer mt-6" type="submit">
              Entrar
            </Button>
          </form>
        </div>

      </div>
    </div>
  )
}
