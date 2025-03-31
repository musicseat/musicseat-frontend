import { cn } from "@/app/utils/utils"

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>){
  return (
    <input 
      {...props} 
      className={cn(
        "w-full max-w-[400px] p-4 px-6 bg-transparent border border-gray-700 text-white rounded-xl font-normal placeholder-white/60 focus:outline-none focus:border-white/60",
        props.className
      )}
    />
  )
}