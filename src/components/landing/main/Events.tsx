import Container from "@/components/Container";
import Text from "@/components/Text";
import Rally from "@/assets/img/eventos/rally_nac.jpeg";
import { Calendar, Clock4, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Events() {
  return (
    <section className="py-20">
      <Container>
        <div className="">
          <div className="text-center">
            <Calendar className="text-red-primary mx-auto size-11 stroke-1 mb-4" />
            <Text as="paragraph">CREANDO IDEAS</Text>
            <Text as="subtitle">Proximos Eventos</Text>
          </div>
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
            <article className="overflow-hidden rounded-md shadow-2xl shadow-blue-primary/10">
              <figure className="h-40">
                <img
                  className="w-full h-full block object-cover"
                  src={Rally}
                  alt=""
                />
              </figure>
              <div className="p-5">
                <p className="font-medium text-lg">Hackaton Nicaragua 2025</p>
                <p className="text-sm text-gray-400 mt-2">
                  ¡Tu proyecto tiene el potencial de volar alto! Únete a nuestro
                  programa de incubación y ...
                </p>
                <div className="flex gap-4 mt-6">
                    <div className="flex items-center gap-2 text-yellow-primary text-sm">
                        <Navigation className="size-4"/>
                        Básico UNAN-LEÓN
                    </div>
                    <h1 className="w-0.5 bg-gray-200"></h1>
                    <div className="flex items-center gap-2 text-blue-primary text-sm">
                        <Clock4 className="size-4"/>
                        10:00 am
                    </div>
                </div>
                
                <Button variant={'blue'} className="block ml-auto mt-8 h-auto ">Ver más</Button>
              </div>
            </article>
            <article className="overflow-hidden rounded-md shadow-2xl shadow-blue-primary/10">
              <figure className="h-40">
                <img
                  className="w-full h-full block object-cover"
                  src={Rally}
                  alt=""
                />
              </figure>
              <div className="p-5">
                <p className="font-medium text-lg">Hackaton Nicaragua 2025</p>
                <p className="text-sm text-gray-400 mt-2">
                  ¡Tu proyecto tiene el potencial de volar alto! Únete a nuestro
                  programa de incubación y ...
                </p>
                <div className="flex gap-4 mt-6">
                    <div className="flex items-center gap-2 text-yellow-primary text-sm">
                        <Navigation className="size-4"/>
                        Básico UNAN-LEÓN
                    </div>
                    <h1 className="w-0.5 bg-gray-200"></h1>
                    <div className="flex items-center gap-2 text-blue-primary text-sm">
                        <Clock4 className="size-4"/>
                        10:00 am
                    </div>
                </div>
                
                <Button variant={'blue'} className="block ml-auto mt-8 h-auto ">Ver más</Button>
              </div>
            </article>
            <article className="overflow-hidden rounded-md shadow-2xl shadow-blue-primary/10">
              <figure className="h-40">
                <img
                  className="w-full h-full block object-cover"
                  src={Rally}
                  alt=""
                />
              </figure>
              <div className="p-5">
                <p className="font-medium text-lg">Hackaton Nicaragua 2025</p>
                <p className="text-sm text-gray-400 mt-2">
                  ¡Tu proyecto tiene el potencial de volar alto! Únete a nuestro
                  programa de incubación y ...
                </p>
                <div className="flex gap-4 mt-6">
                    <div className="flex items-center gap-2 text-yellow-primary text-sm">
                        <Navigation className="size-4"/>
                        Básico UNAN-LEÓN
                    </div>
                    <h1 className="w-0.5 bg-gray-200"></h1>
                    <div className="flex items-center gap-2 text-blue-primary text-sm">
                        <Clock4 className="size-4"/>
                        10:00 am
                    </div>
                </div>
                <Button variant={'blue'} className="block ml-auto mt-8 h-auto ">Ver más</Button>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
