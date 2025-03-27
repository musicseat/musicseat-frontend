import { Button } from "@/app/components/ui/button";
import { TextInput } from "@/app/components/ui/input";

export function Login() {
  return (
    <div className="flex flex-col justify-center items-start p-4 bg-black rounded-t-4xl z-10">
        <h1 className="text-3xl font-medium text-white">Login</h1>
        <form action="" className="flex flex-col gap-4 mt-6 w-full">
          <TextInput placeholder="Email ou usuário" />
          <TextInput placeholder="Senha" type="password" />
          <div className="flex justify-between items-center">
            <div className="inline-flex items-center">
              <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
                <input type="checkbox"
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-white/20 checked:bg-transparent checked:border-white/20"
                  id="check-2" />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                    stroke="currentColor" strokeWidth="1">
                    <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                  </svg>
                </span>
              </label>
              <label className="cursor-pointer ml-2 text-white/60 text-sm" htmlFor="check-2">
                Lembrar
              </label>
            </div>
            <a href="#" className="text-white/60 font-normal text-sm">
              Esqueci minha senha
            </a>
          </div>
          <Button variant="primary">Fazer login</Button>
          <Button variant="ghost">Cadastre-se</Button>
        </form>
        <p className="text-sm text-white/60 text-center mt-2">Ao clicar em ”Fazer Login”, você aceita os <b className="text-white">Termos e condições</b> de uso e a <b className="text-white">Politica de privacidade</b></p>
      </div>
  )
}