import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { GraduationCap, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Masters() {
  return (
    <div className="py-10">
      <Container>
        <div className="">
          <div className="text-center">
            <GraduationCap className="text-red-primary mx-auto w-18 h-18 stroke-1 mb-4" />
            <Text as="paragraph">GUIANDO EL FUTURO</Text>
            <Text as="subtitle">Mentores que Inspiran Innovación</Text>
          </div>
          <Link
            to={"#"}
            className="text-gray-400 transition-colors duration-300 flex w-max ml-auto items-center gap-2 hover:underline group/link"
          >
            Ver todos los mentores
            <MoveRight className="group-hover/link:translate-x-2 transition-all duration-300" />
          </Link>
          <div className="mt-10 grid grid-cols-3 gap-4">
            <article className="overflow-hidden rounded-md shadow">
              <figure className="w-full h-40">
                <img
                  className="w-full h-full block object-cover"
                  src="https://images.pexels.com/photos/29692543/pexels-photo-29692543/free-photo-of-panoramic-view-of-rome-through-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </figure>
              <div className="p-5">
                <h3 className="text-lg font-medium">Juan carlos de la cruz</h3>
                <p className="text-gray-400 mt-2"> 
                  Con más de 10 año de experiencia en el área de ciberseguridad
                </p>
                <Button variant={'outline'} className="mt-8 ml-auto block">
                    Más información
                </Button>
              </div>
            </article>
            <article className="overflow-hidden rounded-md shadow">
              <figure className="w-full h-40">
                <img
                  className="w-full h-full block object-cover"
                  src="https://images.pexels.com/photos/29692543/pexels-photo-29692543/free-photo-of-panoramic-view-of-rome-through-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </figure>
              <div className="p-5">
                <h3 className="text-lg font-medium">Juan carlos de la cruz</h3>
                <p className="text-gray-400 mt-2"> 
                  Con más de 10 año de experiencia en el área de ciberseguridad
                </p>
                <Button variant={'outline'} className="mt-8 ml-auto block">
                    Más información
                </Button>
              </div>
            </article>
            <article className="overflow-hidden rounded-md shadow">
              <figure className="w-full h-40">
                <img
                  className="w-full h-full block object-cover"
                  src="https://images.pexels.com/photos/29692543/pexels-photo-29692543/free-photo-of-panoramic-view-of-rome-through-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </figure>
              <div className="p-5">
                <h3 className="text-lg font-medium">Juan carlos de la cruz</h3>
                <p className="text-gray-400 mt-2"> 
                  Con más de 10 año de experiencia en el área de ciberseguridad
                </p>
                <Button variant={'outline'} className="mt-8 ml-auto block">
                    Más información
                </Button>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </div>
  );
}
