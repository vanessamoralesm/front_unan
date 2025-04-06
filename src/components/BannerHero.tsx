import { cn } from "@/lib/utils";
import Container from "./Container";

interface Props {
  className?: string,
  title: string,
  description?: string,
  url?:string,
  color:string,
}

export default function BannerHero({ className = '', title, description = '', url, color }: Props) {
  
  const background = ` linear-gradient(${color},${color}) ,url(${url})`

  return (
    <div
      className={cn("py-24 text-white", className)}
      style={{background}}
    >
      <Container>
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4">{title}</h1>
          {description && <p className="text-white/80 max-w-3xl">
            {description}
          </p>}
        </div>
      </Container>
    </div>
  )
}
