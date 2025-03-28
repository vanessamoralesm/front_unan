import { linksHeader } from "@/lib/utils";
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
          <nav>
            <ul className=" text-sm flex items-center gap-4">
                {
                  linksHeader.map((link, index) => (
                    <li key={index}>
                        <Link className="text-gray-400 transition-colors duration-300 hover:text-blue-primary" to={link.href}>{link.name}</Link>
                    </li>
                  ))
                }
              
            </ul>
          </nav>
          <Button variant={'blue'}>Iniciar sesión</Button>
        </div>
      </Container>
    </header>
  )
}
