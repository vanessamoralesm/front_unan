import { cn } from "@/lib/utils"
import Container from "../Container"

interface Props {
    container?: boolean,
    children: React.ReactNode
    className?: string
}

export default function SectionGrid({ container = false, children, className = '' }: Props) {

    if (container) {
        return (
            <section className="py-20">
                <Container>
                    <div className={cn("grid grid-cols-2 items-center gap-4", className)}>
                        {children}
                    </div>
                </Container>
            </section>
        )
    }

    return (
        <section>
            <div className={cn("grid grid-cols-2 items-center", className)}>
                {children}
            </div>
        </section>
    )
}
