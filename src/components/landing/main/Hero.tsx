import Container from "../../Container";
import { Button } from "../../ui/button";

export default function Hero() {
  return (
    <section className="py-42 text-center hero">
        <Container>
            <div className=" max-w-2xl mx-auto">
                <p className="uppercase tracking-[2px] text-yellow-400  md:text-lg">UNAN - LEON</p>
                <h1 className="font-semibold text-2xl md:text-5xl text-white  mt-2 mb-4 leading-[1.25] text-balance uppercase">Conectando Ideas y Talento Universitario</h1>
                <p className="uppercase text-white/70 text-balance text-sm md:text-base ">Explora proyectos, conecta con mentors y encuentra
                oportunidades para potenciar tus ideas innovadoras</p>
                <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 mt-8">
                    <Button variant={'blue'} size="lg">Explorar archivos</Button>
                    <Button variant={'red'} size="lg">Conectar un mentor</Button>
                </div>
            </div>
        </Container>
    </section>
  )
}
