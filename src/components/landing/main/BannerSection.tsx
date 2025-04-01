import Container from "@/components/Container";
import Banner from "../Banner";
import { Button } from "@/components/ui/button";
import Hero from '@/assets/img/scroll/hero.png'

export default function BannerSection() {
  return (
    <section className="py-20">
        <Container>
            <Banner className="flex items-center justify-between" url={Hero}>
                <span className="max-w-xl">DISFRUTA DE LOS PROXIMOS EVENTOS DE LA CARRERA </span>
                <Button variant={'outline'} className="bg-transparent py-6 px-8">
                    REGISTRARSE
                </Button>
            </Banner>
        </Container>
    </section>
  )
}
