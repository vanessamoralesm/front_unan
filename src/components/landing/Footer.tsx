import { Facebook, InstagramIcon, TwitterIcon } from "lucide-react";
import Container from "../Container";

export default function Footer() {
  return (
    <footer>
      <Container>

      <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Facebook/>
            </div>
            <div className="flex items-center gap-4">
            <InstagramIcon/>
            </div>
            <div className="flex items-center gap-4">
            <TwitterIcon/>
            </div>
          </div>  

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h3 className="font-semibold text-lg">Navegación</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Eventos</a></li>
            <li><a href="#" className="hover:underline">Noticias</a></li>
            <li><a href="#" className="hover:underline">Proyectos</a></li>
            <li><a href="#" className="hover:underline">Foros</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Eventos</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Eventos</a></li>
            <li><a href="#" className="hover:underline">Noticias</a></li>
            <li><a href="#" className="hover:underline">Proyectos</a></li>
            <li><a href="#" className="hover:underline">Foros</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Contactos</h3>
          <ul className="mt-2 space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-xl"></span> <a href="" className="hover:underline">+505 88426945</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl"></span> <a href="" className="hover:underline">unanleon@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl"></span> <span>LEON-Nicaragua</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-500 pt-4 text-sm">
        Copyright ©2025
      </div>

      </div>    
        



      </Container>
    </footer>
  )
}
