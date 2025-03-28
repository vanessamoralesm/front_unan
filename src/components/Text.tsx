import { cn } from "@/lib/utils"

interface TextProps {
    as?: 'title'| 'subtitle' | 'text'| 'paragraph',
    children: React.ReactNode,
    className?: string

}

export default function Text({ as = 'text', children, className = '' }: TextProps) {

  if (as === 'paragraph') {
    return (
      <p className={cn("text-red-primary tracking-[2px] uppercase underline text-sm",className)}>{children}</p> 
    )
  }

  if(as === 'subtitle') {
    return (
      <h2 className={cn("text-[2.5rem] font-semibold text-blue-primary",className)}>{children}</h2> 
    )
  }

  return (
    <p className={cn("text-gray-400",className)}>{children}</p> 
  )
}
