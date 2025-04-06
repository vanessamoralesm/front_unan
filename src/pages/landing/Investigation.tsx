import Container from "@/components/Container";
import Text from "@/components/Text";
import Students from '@/assets/img/eventos_proyectos 2.png'
import Mentors from '@/assets/img/mentores.png'
import Sciencie from '@/assets/img/cientifico.png'
import { UserRound } from "lucide-react";
import Banner from "@/components/landing/Banner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Investigation() {
  return (
    <div>
      <div className="banner">
        <Container>
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Investigación, Desarrollo e Innovación</h1>
            <p className="text-white/80 max-w-3xl">Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper phasellus enim etiam. Integer at non venenatis convallis libero faucibus eu mi. Placerat a magna congue erat odio. Nibh odio sapien quis pharetra purus.</p>
          </div>
        </Container>
      </div>
      <section className="p-8 py-14 md:py-0 md:p-32">
        <Container className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <Text as="paragraph">BIENVENIDO</Text>
            <Text as="subtitle">!Conocenos¡</Text>
            <p className="text-gray-400 mb-4 mt-6">Descubre nuestras iniciativas de investigación básica y aplicada, así como el desarrollo tecnológico y la transferencia de conocimiento  gestionados por la Dirección de Investigación y Desarrollo en estrecha  colaboración con escuelas y facultades.</p>
            <p className="text-gray-400"> Explora la diversidad de productos científicos y noticias derivados  de nuestras investigaciones internas y colaboraciones con otras  instituciones, centros de investigación y empresas  científico-tecnológicas.</p>
          </div>
          <div className="flex-1">
            <figure className="relative max-w-lg mx-auto">
              <div className="absolute top-1/3 left-0 right-0 bottom-0 bg-red-primary translate-x-7 translate-y-7"></div>
              <img src={Students} alt="estudiantes haciendo un proyecto" className="w-full object-cover block relative" />
            </figure>
          </div>
        </Container>
      </section>
      <section className="grid md:grid-cols-2">
        <figure className="w-full h-full">
          <img className="w-full h-full" src={Mentors} alt="mentores de la universidad unan" />
        </figure>
        <div className="bg-yellow-primary text-white p-10 md:p-18">
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Nuestros investigadores</h2>
          <div className="space-y-2 text-white/90 md:text-lg">
            <p>La  investigación y el desarrollo tecnológico son actividades llevadas a  cabo por personal calificado y cuya sólida formación científico-técnica  les permite realizar contribuciones al conocimiento básico y aplicado  con alto compromiso ético. </p>
            <p>Los investigadores, profesores  y tecnólogos también contribuyen activa e  intensamente a la formación integral de nuestros alumnos. </p>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2">
        <div className="bg-blue-primary  text-white p-18 flex flex-col md:flex-row items-center justify-center gap-8">
          <div>
            <span className="inline-block text-6xl text-center md:text-left w-full md:text-8xl mb-1 font-semibold">16+</span>
            <p className="text-white/90">Profesores Investigadores</p>
          </div>
          <div>
            <span className="inline-block text-6xl text-center md:text-left w-full md:text-8xl mb-1 font-semibold">29+</span>
            <p className="text-white/90">Investigadores</p>
          </div>
        </div>
        <figure className="w-full h-full">
          <img className="w-full h-full" src={Sciencie} alt="cientificos de la universidad unan" />
        </figure>
      </section>

      <section className="py-20 md:py-44 ">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="p-8 rounded-xl bg-white shadow-2xl shadow-blue-primary/10">
              <div className="flex justify-between gap-4">
                <div className="">
                  <span className="text-sm text-yellow-primary tracking-[2px]">INGENIERIA</span>
                  <h3 className="text-xl font-medium text-blue-primary mt-1">Diego Mendez Diaz</h3>
                </div>
                <div className="size-13 text-white rounded-full bg-blue-primary flex items-center justify-center">
                  <UserRound width={22} height={22} />
                </div>
              </div>
              <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper phasellus enim etiam. Integer at non venenatis convallis libero faucibus eu mi. Placerat a magna congue erat odio.</p>
            </article>
            <article className="p-8 rounded-xl bg-white shadow-2xl shadow-blue-primary/10">
              <div className="flex justify-between gap-4">
                <div className="">
                  <span className="text-sm text-yellow-primary tracking-[2px]">INGENIERIA</span>
                  <h3 className="text-xl font-medium text-blue-primary mt-1">Diego Mendez Diaz</h3>
                </div>
                <div className="size-13 text-white rounded-full bg-blue-primary flex items-center justify-center">
                  <UserRound width={22} height={22} />
                </div>
              </div>
              <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper phasellus enim etiam. Integer at non venenatis convallis libero faucibus eu mi. Placerat a magna congue erat odio.</p>
            </article>
            <article className="p-8 rounded-xl bg-white shadow-2xl shadow-blue-primary/10">
              <div className="flex justify-between gap-4">
                <div className="">
                  <span className="text-sm text-yellow-primary tracking-[2px]">INGENIERIA</span>
                  <h3 className="text-xl font-medium text-blue-primary mt-1">Diego Mendez Diaz</h3>
                </div>
                <div className="size-13 text-white rounded-full bg-blue-primary flex items-center justify-center">
                  <UserRound width={22} height={22} />
                </div>
              </div>
              <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper phasellus enim etiam. Integer at non venenatis convallis libero faucibus eu mi. Placerat a magna congue erat odio.</p>
            </article>
            <article className="p-8 rounded-xl bg-white shadow-2xl shadow-blue-primary/10">
              <div className="flex justify-between gap-4">
                <div className="">
                  <span className="text-sm text-yellow-primary tracking-[2px]">INGENIERIA</span>
                  <h3 className="text-xl font-medium text-blue-primary mt-1">Diego Mendez Diaz</h3>
                </div>
                <div className="size-13 text-white rounded-full bg-blue-primary flex items-center justify-center">
                  <UserRound width={22} height={22} />
                </div>
              </div>
              <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper phasellus enim etiam. Integer at non venenatis convallis libero faucibus eu mi. Placerat a magna congue erat odio.</p>
            </article>
            <article className="p-8 rounded-xl bg-white shadow-2xl shadow-blue-primary/10">
              <div className="flex justify-between gap-4">
                <div className="">
                  <span className="text-sm text-yellow-primary tracking-[2px]">INGENIERIA</span>
                  <h3 className="text-xl font-medium text-blue-primary mt-1">Diego Mendez Diaz</h3>
                </div>
                <div className="size-13 text-white rounded-full bg-blue-primary flex items-center justify-center">
                  <UserRound width={22} height={22} />
                </div>
              </div>
              <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper phasellus enim etiam. Integer at non venenatis convallis libero faucibus eu mi. Placerat a magna congue erat odio.</p>
            </article>
            <article className="p-8 rounded-xl bg-white shadow-2xl shadow-blue-primary/10">
              <div className="flex justify-between gap-4">
                <div className="">
                  <span className="text-sm text-yellow-primary tracking-[2px]">INGENIERIA</span>
                  <h3 className="text-xl font-medium text-blue-primary mt-1">Diego Mendez Diaz</h3>
                </div>
                <div className="size-13 text-white rounded-full bg-blue-primary flex items-center justify-center">
                  <UserRound width={22} height={22} />
                </div>
              </div>
              <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper phasellus enim etiam. Integer at non venenatis convallis libero faucibus eu mi. Placerat a magna congue erat odio.</p>
            </article>
          </div>
        </Container>
      </section>
      <section className="py-10 md:py-20">
        <Container>
          <Banner 
            withFigures={false}
            text="CONOCE NUESTROS PROYECTOS" 
            textButton="VER PROJECTOS"
            href={'/proyectos'}
          />
        </Container>
      </section>
    </div>
  )
}