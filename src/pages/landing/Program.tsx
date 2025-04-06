import SectionGrid from "@/components/landing/SectionGrid";
import Text from "@/components/Text";
import Pizzaron from '@/assets/img/pisarron.png'
import { Check } from "lucide-react";
export default function Program() {
    return (
        <div>
            <SectionGrid>
                <div className="p-20">
                    <Text as="subtitle" color={'red'}>Programa de Incubación y Aceleración de Negocios</Text>
                    <p className="text-gray-400 mt-4">En nuestro emprendimiento, cada proyecto es una oportunidad para innovar y crecer. Únete a nosotros en este viaje hacia el éxito y la creatividad.</p>
                </div>
                <figure className="size-full">
                    <img src={Pizzaron} alt="pizza ron" className="w-full h-full object-cover block" />
                </figure>
            </SectionGrid>
            <SectionGrid>
                <div className="p-20 order-last">
                    <Text as="paragraph" >INNOVACIÓN</Text>
                    <Text as="subtitle" color={'red'}>METODOLOGÍA</Text>
                    <p className="text-gray-400 mt-4">
                        Para garantizar el éxito de dicho programa es necesario desarrollar,  previo a la capitalización de los participantes, un proceso de mentorías y acompañamiento a los protagonistas seleccionados para fortalecer sus  habilidades y capacidades en temas específicos, relacionados a la  sostenibilidad de sus modelos de negocios.
                    </p>
                    <p className="text-gray-400 mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mi et malesuada id amet gravida egestas. Justo id malesuada tincidunt sem ipsum quis a nunc. Id massa quisque risus vitae urna sagittis. Porta venenatis iaculis sed faucibus vitae.
                    </p>
                </div>
                <figure className="size-full">
                    <img src={Pizzaron} alt="pizza ron" className="w-full h-full object-cover block" />
                </figure>
            </SectionGrid>
            <SectionGrid>
                <div className="p-20 ">
                    <Text as="subtitle">Objetivos del Programa</Text>
                    <ul className="mt-4 space-y-4">
                        <li className="w-full flex gap-6 text-gray-400">
                            <Check className="text-blue-primary size-8"/>
                            <p>Identificar a emprendimientos y modelos de negocios con potencial de crecimiento y escalabilidad en el mercado.</p>
                        </li>
                        <li className="w-full flex gap-4 text-gray-400">
                            <Check className="text-blue-primary size-8"/>
                            <p>
                            Acompañar a emprendimientos y modelos de negocios a través de  mentorías especializadas en temas críticos para el desarrollo de los  participantes seleccionados.

                            </p>
                        </li>
                        <li className="w-full flex gap-4 text-gray-400">
                            <Check className="text-blue-primary size-8"/>
                            <p>
                            Apoyar financieramente a los emprendimientos y mipymes que cumplan con los criterios establecidos en el programa.
                            </p>
                        </li>
                        <li className="w-full flex gap-4 text-gray-400">
                            <Check className="text-blue-primary size-8"/>
                            <p>Identificar a emprendimientos y modelos de negocios con potencial de crecimiento y escalabilidad en el mercado.</p>
                        </li>
                    </ul>
                </div>
                <figure className="size-full">
                    <img src={Pizzaron} alt="pizza ron" className="w-full h-full object-cover block" />
                </figure>
            </SectionGrid>
            <SectionGrid>
                <div className="p-20 order-last">
                    <Text as="subtitle">Selección del Programa</Text>
                    <ul className="mt-4 space-y-4">
                        <li className="w-full flex gap-6 text-gray-400">
                            <Check className="text-blue-primary size-8"/>
                            <p>Identificar a emprendimientos y modelos de negocios con potencial de crecimiento y escalabilidad en el mercado.</p>
                        </li>
                        <li className="w-full flex gap-4 text-gray-400">
                            <Check className="text-blue-primary size-8"/>
                            <p>
                            Acompañar a emprendimientos y modelos de negocios a través de  mentorías especializadas en temas críticos para el desarrollo de los  participantes seleccionados.

                            </p>
                        </li>
                        <li className="w-full flex gap-4 text-gray-400">
                            <Check className="text-blue-primary size-8"/>
                            <p>
                            Apoyar financieramente a los emprendimientos y mipymes que cumplan con los criterios establecidos en el programa.
                            </p>
                        </li>
                        <li className="w-full flex gap-4 text-gray-400">
                            <Check className="text-blue-primary size-8"/>
                            <p>Identificar a emprendimientos y modelos de negocios con potencial de crecimiento y escalabilidad en el mercado.</p>
                        </li>
                    </ul>
                </div>
                <figure className="size-full">
                    <img src={Pizzaron} alt="pizza ron" className="w-full h-full object-cover block" />
                </figure>
            </SectionGrid>
        </div>
    )
}
