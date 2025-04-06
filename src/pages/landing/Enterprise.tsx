import Container from "@/components/Container";
import Enterprise1 from "@/assets/img/empresas/empresa1.png";
import Enterprise2 from "@/assets/img/empresas/empresa2.png";
import Enterprise3 from "@/assets/img/empresas/empresa3.png";
import Enterprise4 from "@/assets/img/empresas/empresa4.png";
import Text from "@/components/Text";
import { Box, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnterpriseCard from "@/components/landing/enterprise/EnterpriseCard";
export default function Enterprise() {
  return (
    <div>
      <section className="">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="py-20 md:py-48">
              <h1 className=" text-3xl md:text-5xl font-semibold text-blue-primary leading-[1.25]">
                Transformando ideas en realidades inspiradoras
              </h1>
              <p className="text-gray-400 mt-4">
                En nuestro emprendimiento, cada proyecto es una oportunidad para
                innovar y crecer. Únete a nosotros en este viaje hacia el éxito
                y la creatividad.
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-rows-5 gap-4">
              <img
                src={Enterprise1}
                alt="enterprise1"
                className="w-full h-full object-cover row-start-1 row-end-3"
              />
              <img
                src={Enterprise2}
                alt="enterprise2"
                className="w-full h-full object-cover row-start-1 row-end-4"
              />
              <img
                src={Enterprise3}
                alt="enterprise3"
                className="w-full h-full object-cover row-start-3 row-end-6"
              />
              <img
                src={Enterprise4}
                alt="enterprise4"
                className="w-full h-full object-cover row-start-4 row-end-6"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-32">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="w-full max-w-2xl">
              <Text as="paragraph">INNOVACIÓN</Text>
              <Text as="subtitle" className="mt-2 leading-[1.2]">
                Nuestra Misión y Visión en el Emprendimiento
              </Text>
            </div>
            <div className="w-full text-gray-400">
              <p>
                Nuestra misión es transformar ideas en realidades que impacten
                positivamente a la comunidad. Creemos en un futuro donde la
                creatividad y la sostenibilidad van de la mano.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-10">
        <Container>
          <div>
            <Text as="subtitle" className="text-center mb-10">
              Nuestros Valores
            </Text>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <EnterpriseCard />
              <EnterpriseCard />
              <EnterpriseCard />
              <EnterpriseCard />
              <EnterpriseCard />
              <EnterpriseCard />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
