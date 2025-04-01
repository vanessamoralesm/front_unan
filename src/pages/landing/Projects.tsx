import Container from "@/components/Container";
import ProjectImg from "@/assets/img/project-img.png";
import Text from "@/components/Text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/landing/project/ProjectCard";
import Banner from "@/components/landing/Banner";
import ProjectBanner from '@/assets/img/proyectos-banner.png'
import HeroProject from '@/assets/img/tittle/tittle_proyectos.png'
export default function Projects() {
  return (
    <div>
      <div
        className="py-24 text-white"
        style={{
          background: ` linear-gradient( #243982E6,#243982E6) ,url(${HeroProject})`,
        }}
      >
        <Container>
          <div>
            <h1 className="text-4xl font-semibold mb-4">Proyectos</h1>
            <p className="text-white/80 max-w-3xl">
              Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper
              phasellus enim etiam. Integer at non venenatis convallis libero
              faucibus eu mi. Placerat a magna congue erat odio. Nibh odio
              sapien quis pharetra purus.
            </p>
          </div>
        </Container>
      </div>
      <section className="grid grid-cols-2 items-center">
        <div className="text-white p-20 flex-1 flex justify-center">
          <div className="max-w-2xl w-full">
            <Text as="paragraph" className="">
              EXPLORA
            </Text>
            <Text as="subtitle" className="mb-4 leading-[1.25] mt-1 ">
              Transforma tu idea en un proyecto que inspire al mundo
            </Text>
            <p className="text-gray-400">
              No subestimes el impacto de tu trabajo. Lo que hoy es solo un
              código en tu pantalla, mañana podría ser la solución a un gran
              problema. Comparte tu proyecto y deja que el mundo vea tu
              potencial.
            </p>
          </div>
        </div>
        <figure className="flex-1">
          <img
            className="w-full  object-cover"
            src={ProjectImg}
            alt="mentores de la universidad unan"
          />
        </figure>
      </section>
      <section className="grid grid-cols-2 items-center">
        <figure className="flex-1">
          <img
            className="w-full  object-cover"
            src={ProjectImg}
            alt="mentores de la universidad unan"
          />
        </figure>
        <div className="text-white p-20 flex-1 flex justify-center">
          <div className="max-w-2xl w-full">
            <Text as="paragraph" className="">
              EXPLORA
            </Text>
            <Text as="subtitle" className="mb-4 leading-[1.25] mt-1 ">
              ¿Quisieras que tu proyecto apareciera aqui mismo?
            </Text>
            <p className="text-gray-400">
              Proporciona tu correo electronico y solicita tu cuenta para
              obtener acceso a la subida de proyectos
            </p>
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
          </div>
        </div>
      </section>
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
            <Banner className="flex items-center justify-between" variant="transparent" url={ProjectBanner}>
                <span className="max-w-xl">¿YA VISTES NUESTROS ULTIMOS EVENTOS? </span>
                <Button variant={'outline'} className="bg-transparent py-6 px-8">
                    VER EVENTOS
                </Button>
            </Banner>
        </Container>
    </section>
    </div>
  );
}
