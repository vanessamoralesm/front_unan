import Container from "@/components/Container"
import title from '@/assets/img/tittle/tittle_financiamiento.png'
import Text from "@/components/Text"
import LogoSckeleton from '@/assets/img/logos/logo_sckeleton.png'
import BusinessCard from "@/components/landing/business/BusinessCard"
export default function Business() {
  return (
    <div className="">
      <Container>
        <div className="py-20 px-14 font-semibold text-5xl text-white bg-cover bg-center bg-no-repeat" style={{ background: ` linear-gradient( #243982E6,#243982E6) ,url(${title})` }}>
          <h1>Financiamiento</h1>
        </div>
        <section className="py-20">
          <div className="flex justify-between">
            <div className="w-full max-w-xl">
              <Text as="paragraph">EDUCACIÓN</Text>
              <Text as="subtitle" className="mt-2 leading-[1.2]">Apoyando el futuro, juntos somos más fuertes</Text> 
            </div>
            <div className="w-full">
              <p className="text-gray-400">Nuestra comunidad se fortalece gracias a las empresas que creen en la educación. Juntos, construimos un futuro brillante para nuestros estudiantes.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-12">
            <BusinessCard />
            <BusinessCard color="red"/>      
            <BusinessCard color="yellow"/> 
            <BusinessCard /> 
            <BusinessCard color="red"/> 
            <BusinessCard color="yellow"/> 
          </div> 
        </section>
      </Container>
    </div>
  )
}