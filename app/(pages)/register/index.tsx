import { Button } from "@/app/components/ui/button";
import { TextInput } from "@/app/components/ui/input";

export function Register() {
  return (
    <div className="flex flex-col justify-center items-start w-full p-4 bg-black rounded-t-4xl z-30">
        <h1 className="text-3xl font-medium text-white">Cadastro</h1>
        <form action="" className="flex flex-col gap-4 mt-6 w-full">
          <TextInput placeholder="Email" />
          <TextInput placeholder="Crie uma senha" type="password" />
          <TextInput placeholder="Confirme a senha" type="password" />

          <Button variant="primary">Continuar</Button>

        </form>
      </div>
  )
}