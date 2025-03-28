import Container from "@/components/Container";
import Text from "@/components/Text";
import { Box, ChevronRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="py-18">
        <Container>
            <div>
                <div className="flex  justify-between gap-4">
                    <div className="">
                        <Text as="paragraph"> DESTACADOS EN LOS ESTUDIANTES </Text>
                        <Text as="subtitle">   Proyectos que Transforman el Aprendizaje</Text>
                    </div>
                    <Link to={'#'} className="text-gray-400 transition-colors duration-300 flex items-center gap-2 hover:underline group/link"> 
                        Ver más proyectos
                        <MoveRight  className="group-hover/link:translate-x-2 transition-all duration-300"/>
                    </Link>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-4">
                    <article className="project-main-card p-6 text-white rounded-md">
                        <Box width={30} height={30} />
                        <h3 className="text-2xl mb-2 mt-4">Athletics and Recreation </h3>
                        <p className="text-white/70">Sed imperdiet, diam id dignissim convallis, felis justo gravida quam, in efficitur mi eros ac erat. Maecenas sit amet sem ac sem finibus dapibus nec convallis eros.</p>
                        <Link to={'#'} className="text-yellow-primary ml-auto mt-4 w-max font-medium uppercase tracking-[2px] text-sm flex items-center gap-2">Ver Más <ChevronRight /></Link>
                    </article>
                    <article className="project-main-card p-6 text-white rounded-md">
                        <Box width={30} height={30} />
                        <h3 className="text-2xl mb-2 mt-4">Athletics and Recreation </h3>
                        <p className="text-white/70">Sed imperdiet, diam id dignissim convallis, felis justo gravida quam, in efficitur mi eros ac erat. Maecenas sit amet sem ac sem finibus dapibus nec convallis eros.</p>
                        <Link to={'#'} className="text-yellow-primary ml-auto mt-4 w-max font-medium uppercase tracking-[2px] text-sm flex items-center gap-2">Ver Más <ChevronRight /></Link>
                    </article>
                    <article className="project-main-card p-6 text-white rounded-md">
                        <Box width={30} height={30} />
                        <h3 className="text-2xl mb-2 mt-4">Athletics and Recreation </h3>
                        <p className="text-white/70">Sed imperdiet, diam id dignissim convallis, felis justo gravida quam, in efficitur mi eros ac erat. Maecenas sit amet sem ac sem finibus dapibus nec convallis eros.</p>
                        <Link to={'#'} className="text-yellow-primary ml-auto mt-4 w-max font-medium uppercase tracking-[2px] text-sm flex items-center gap-2">Ver Más <ChevronRight /></Link>
                    </article>
                    <article className="project-main-card p-6 text-white rounded-md">
                        <Box width={30} height={30} />
                        <h3 className="text-2xl mb-2 mt-4">Athletics and Recreation </h3>
                        <p className="text-white/70">Sed imperdiet, diam id dignissim convallis, felis justo gravida quam, in efficitur mi eros ac erat. Maecenas sit amet sem ac sem finibus dapibus nec convallis eros.</p>
                        <Link to={'#'} className="text-yellow-primary ml-auto mt-4 w-max font-medium uppercase tracking-[2px] text-sm flex items-center gap-2">Ver Más <ChevronRight /></Link>
                    </article>
                    <article className="project-main-card p-6 text-white rounded-md">
                        <Box width={30} height={30} />
                        <h3 className="text-2xl mb-2 mt-4">Athletics and Recreation </h3>
                        <p className="text-white/70">Sed imperdiet, diam id dignissim convallis, felis justo gravida quam, in efficitur mi eros ac erat. Maecenas sit amet sem ac sem finibus dapibus nec convallis eros.</p>
                        <Link to={'#'} className="text-yellow-primary ml-auto mt-4 w-max font-medium uppercase tracking-[2px] text-sm flex items-center gap-2">Ver Más <ChevronRight /></Link>
                    </article>
                    <article className="project-main-card p-6 text-white rounded-md">
                        <Box width={30} height={30} />
                        <h3 className="text-2xl mb-2 mt-4">Athletics and Recreation </h3>
                        <p className="text-white/70">Sed imperdiet, diam id dignissim convallis, felis justo gravida quam, in efficitur mi eros ac erat. Maecenas sit amet sem ac sem finibus dapibus nec convallis eros.</p>
                        <Link to={'#'} className="text-yellow-primary ml-auto mt-4 w-max font-medium uppercase tracking-[2px] text-sm flex items-center gap-2">Ver Más <ChevronRight /></Link>
                    </article>
                </div>
            </div>
        </Container>
    </section>
  )
}
