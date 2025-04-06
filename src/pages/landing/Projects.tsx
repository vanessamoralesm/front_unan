import Container from "@/components/Container";
import ProjectImg from "@/assets/img/project-img.png";
import Text from "@/components/Text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/landing/project/ProjectCard";
import Banner from "@/components/landing/Banner";
import ProjectBanner from '@/assets/img/proyectos-banner.png'
import HeroProject from '@/assets/img/tittle/tittle_proyectos.png'
import BannerHero from "@/components/BannerHero";
import SectionRow from "@/components/landing/SectionRow";
export default function Projects() {
  return (
    <div>
      <BannerHero  
        title="Proyectos" 
        description="Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper phasellus enim etiam. Integer at non venenatis convallis libero faucibus eu mi. Placerat a magna congue erat odio. Nibh odio sapien quis pharetra purus." 
        url={HeroProject} 
        color="#243982E6"/>
  
        <SectionRow
          tag="EXPLORA"
          title="Transforma tu idea en un proyecto que inspire al mundo"
          description="No subestimes el impacto de tu trabajo. Lo que hoy es solo un código en tu pantalla, mañana podría ser la solución a un gran problema. Comparte tu proyecto y deja que el mundo vea tu potencial."
          img={ProjectImg}
          alt="mentores de la universidad unan"
        
        />
        <SectionRow
          tag="Explora"
          title="¿Quisieras que tu proyecto apareciera aqui mismo?"
          description="Proporciona tu correo electronico y solicita tu cuenta para
              obtener acceso a la subida de proyectos"
          img={ProjectImg}
          alt="mentores de la universidad unan"
          reverse={true}
        >
            <Input
              type="email"
              placeholder="Correo electronico"
              className="mt-4 h-14"
            />
            <Button
              variant={"yellow"}
              className="ml-auto flex mt-8"
              size={"xl"}
            >
              SOLICITAR CUENTA
            </Button>

        </SectionRow>
      
      <section className="py-40">
        <Container>
          <div>
            <Text as="subtitle" className="mb-1">
              Proyectos
            </Text>
            <p className="text-gray-400 mb-14 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper
              phasellus enim etiam. Integer at non venenatis convallis libero
              faucibus eu mi. Placerat a magna congue erat odio. Nibh odio
              sapien quis pharetra purus.
            </p>
            <div className="grid gap-4 grid-cols-2">
             <ProjectCard />
             <ProjectCard />
             <ProjectCard />
             <ProjectCard />
             <ProjectCard />
            
            </div>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
            <Banner  
              variant="transparent" 
              url={ProjectBanner} 
              text="¿YA VISTES NUESTROS ULTIMOS EVENTOS?" 
              textButton="VER EVENTOS" 
              href={'/eventos'}
            />
            
        </Container>
    </section>
    </div>
  );
}
