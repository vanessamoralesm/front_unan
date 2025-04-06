import Container from "@/components/Container";
import Banner from "../Banner";

export default function BannerSection() {
  return (
    <section className="py-20">
        <Container>
            <Banner 
                text="DISFRUTA DE LOS PROXIMOS EVENTOS DE LA CARRERA" 
                textButton="REGISTRARSE"
                href={'/eventos'}
            />
        </Container>
    </section>
  )
}
