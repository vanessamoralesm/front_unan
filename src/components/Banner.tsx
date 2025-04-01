import { cn } from "@/lib/utils";
import Container from "./Container";

interface Props {
  className?: string,
  title: string,
  description: string,
}

export default function Banner({ className = '', title, description }: Props) {
  return (
    <div className={ cn('banner',className) }>
      <Container>
        <div>
          <h1 className="text-4xl font-semibold mb-4">{title}</h1>
          <p className="text-white/80 max-w-3xl">{description}</p>
        </div>
      </Container>
    </div>
  )
}
