import { cn } from "@/lib/utils"

interface TextProps {
    as?: 'title'| 'subtitle' | 'text'| 'paragraph',
    children: React.ReactNode,
    className?: string,
    color?:'blue'|'red'|'yellow'|'gray'| null

}

const colores = {
    blue: 'text-blue-primary',
    red: 'text-red-primary',
    yellow: 'text-yellow-primary',
    gray: 'text-gray-400'
}

export default function Text({ as = 'text', children, className = '', color = null }: TextProps) {

  const colorClass = color ? colores[color] : ''

  if (as === 'paragraph') {
    return (
      <p className={cn("text-red-primary tracking-[2px] uppercase underline text-sm",className,colorClass)}>{children}</p> 
    )
  }

  if(as === 'subtitle') {
    return (
      <h2 className={cn("text-[2.5rem] font-semibold text-blue-primary",className,colorClass)}>{children}</h2> 
    )
  }

  return (
    <p className={cn("text-gray-400",className,colorClass)}>{children}</p> 
  )
}
