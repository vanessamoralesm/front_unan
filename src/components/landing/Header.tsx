import Container from "../Container";
import { Button } from "../ui/button";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white">
      <Container>
        <div className="h-20 flex items-center justify-between gap-4">
          <Link to={'#'}>
            Logo
          </Link>
          <nav className="text-gray-400 text-sm flex items-center gap-4">
              <Link to={'#'}>Inicio</Link>
              <Link to={'#'}>Maestros</Link>
              <Link to={'#'}>Proyectos</Link>
              <Link to={'#'}>Eventos</Link>
              <Link to={'#'}>Contactos</Link>
              <Link to={'#'}>Inicio</Link>
          </nav>
          <Button variant={'blue'}>Iniciar sesión</Button>
        </div>
      </Container>
    </header>
  )
}
