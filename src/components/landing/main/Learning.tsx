import Text from "@/components/Text";
import Container from "../../Container";
import { Box } from 'lucide-react'
export default function Learning() {
  return (
    <section className="py-10">
        <Container>
            <div className="flex items-center justify-between gap-4">
                    <Text as="subtitle" className="flex-1 max-w-2xl leading-[1.25]">
                         Ruta de aprenzaje para los estudiantes
                    </Text>
                    <p className="text-sm text-gray-400 flex-1">Our service is designed to streamline your experience from start to finish. We provide clear guidance at every step, ensuring you understand the process. Join us as we empower you to reach your objectives with confidence.</p>
            </div>
            <div className="mt-8 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                <article className="p-6 rounded-md bg-blue-primary text-white ">
                    <Box width={30} height={30} />
                    <h4 className="font-bold mt-4 mb-2 text-xl">Step 1: Understand Your Needs and Goals with Our Expert Team</h4>
                    <p className="text-white/70">We begin by assessing your unique requirements.</p>
                </article>
                <article className="p-6 rounded-md bg-red-primary text-white ">
                    <Box width={30} height={30} />
                    <h4 className="font-bold mt-4 mb-2 text-xl">Step 1: Understand Your Needs and Goals with Our Expert Team</h4>
                    <p className="text-white/70">We begin by assessing your unique requirements.</p>
                </article>
                <article className="p-6 rounded-md bg-yellow-primary text-white ">
                    <Box width={30} height={30} />
                    <h4 className="font-bold mt-4 mb-2 text-xl">Step 1: Understand Your Needs and Goals with Our Expert Team</h4>
                    <p className="text-white/70">We begin by assessing your unique requirements.</p>
                </article>
            </div>
        </Container>
    </section>
  )
}
