import BannerHero from "@/components/BannerHero";
import HeroTeacher from '@/assets/img/tittle/tittle_mentoria.png'
import Mentores from '@/assets/img/scroll/hero_mentores.png'
import MentorQueEs from '@/assets/img/mentor_que_es.png'
import Mesa from '@/assets/img/mesa.png'
import Text from "@/components/Text";
import Container from "@/components/Container";
import TeacherCard from "@/components/landing/teacher/TeacherCard";
import Banner from "@/components/landing/Banner";
import SectionRow from "@/components/landing/SectionRow";
export default function Teachers() {
  return (
    <div>
      <BannerHero
        title="Mentoria"
        description="Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper phasellus enim etiam. Integer at non venenatis convallis libero faucibus eu mi. Placerat a magna congue erat odio. Nibh odio sapien quis pharetra purus."
        url={HeroTeacher}
        color="#940a18b3" />
      <section className="py-20">
        <div className="grid grid-cols-2 items-center">
          <div className="text-white p-20 flex-1">
            <div className="max-w-2xl w-full">
              <Text as="paragraph" className="">EXPLORA</Text>
              <Text as="subtitle" className="mb-4 leading-[1.25] mt-1 ">Guiándote en tu camino universitario</Text>
              <p className="text-gray-400 mb-4">
                Este programa está compuesto por toda una cultura de personas interesadas en la formación integral de nuestros alumnos. A través de una serie de sesiones de mentoría a lo largo de su carrera, cada estudiante podrá descubrir su Proyecto Personal de Vida.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <figure className="relative max-w-lg w-fu mx-auto">
              <div className="absolute top-1/3 left-0 right-0 bottom-0 bg-red-primary translate-x-7 translate-y-7"></div>
              <img src={Mentores} alt="estudiantes haciendo un proyecto" className="w-full object-cover block relative" />
            </figure>
          </div>
        </div>
      </section>
      <SectionRow
        tag="UNETE"
        title="¿Qué es un mentor?"
        description="Es un referente para el alumno, que lo inspira a ejercer un liderazgo de  acción positiva en situaciones cotidianas y difíciles.Es un formador que se comparte con el otro, con la intensión de promover mutuamente su desarrollo integral."
        img={MentorQueEs}
        alt="estudiantes haciendo un proyecto"
        reverse
      />
      <section className="py-20">
        <Container>
          <div className="mb-8 text-center">
            <Text as="paragraph">CONOCELOS</Text>
            <Text as="subtitle" className="mb-4">Nuestros Mentores</Text>
          </div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-18">
            <TeacherCard />
            <TeacherCard />
            <TeacherCard /> 
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <Banner 
            variant="transparent" 
            url={Mesa} 
            withFigures={false}
            text="¿YA VISTES NUESTROS ULTIMOS EVENTOS?" 
            textButton="VER EVENTOS"
            href={'/eventos'}
            />
        </Container>
      </section>

    </div>
  )
}
