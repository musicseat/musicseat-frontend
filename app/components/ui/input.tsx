import { cn } from "@/app/utils/utils"

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>){
  return (
    <input 
      type="text" 
      {...props} 
      className={cn(
        "w-full max-w-3xs py-4 px-6 bg-transparent border border-Charade text-white rounded-2xl font-medium placeholder-white/60 focus:outline-none focus:border-white/20",
        props.className
      )}
    />
  )
}