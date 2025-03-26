import Container from "../../Container";
import { Box } from 'lucide-react'
export default function Learning() {
  return (
    <section className="py-10">
        <Container>
            <div className="flex items-center justify-between gap-4">
                <div className="w-1/2">
                    <h2 className="font-semibold text-2xl ">
                         Ruta de aprenzaje para los estudiantes
                    </h2>
                </div>
                <div className="w-1/2">
                    <p className="text-sm text-gray-400">Our service is designed to streamline your experience from start to finish. We provide clear guidance at every step, ensuring you understand the process. Join us as we empower you to reach your objectives with confidence.</p>
                </div>
            </div>
            <div className="mt-6 grid gap-4 grid-cols-3">
                <article className="p-4 rounded">
                    <Box/>
                    <h4>Step 1: Understand Your Needs and Goals with Our Expert Team</h4>
                    <p>We begin by assessing your unique requirements.</p>
                </article>
            </div>
        </Container>
    </section>
  )
}
