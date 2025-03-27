import { Button } from "@/app/components/ui/button";
import { TextInput } from "@/app/components/ui/input";

export function CreateUser() {
  return (
    <div className="flex flex-col justify-center items-start w-full px-4 py-6 bg-black rounded-t-4xl z-10">
        <h1 className="text-3xl font-medium text-white">Criar Usuário</h1>
        <form action="" className="flex flex-col gap-4 mt-6 w-full">
          <TextInput placeholder="Nome" />
          <TextInput placeholder="Nome de usuário" type="text" />
          <TextInput placeholder="Data de nascimento" type="date" />
          <TextInput placeholder="Número de telefone" type="number" />

          <Button variant="ghost">Voltar</Button>
          <Button variant="secondary">Pronto</Button>

        </form>
      </div>
  )
}