import { Facebook, InstagramIcon, TwitterIcon, Phone, Mail, MapPin } from "lucide-react";
import Container from "../Container";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className=" text-white py-18 footer">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30">
          
          {/* Logo y descripción */}
          <div>
            <h2 className="text-xl font-semibold">Logo</h2>
            <p className="mt-2 text-sm leading-relaxed max-w-md text-justify">
              Lorem ipsum dolor sit amet consectetur. Bibendum elementum tellus dignissim in pulvinar gravida arcu purus mi.
            </p>

            <div className="flex gap-3 mt-4">
              <Link to="#" className="size-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="size-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20">
                <InstagramIcon size={20} />
              </Link>
              <Link to="#" className="size-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20">
                <TwitterIcon size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-row gap-10">
            {/* Navegación */}
            <div>
              <h3 className="font-semibold text-base">Navegación</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><Link to="/eventos" className="hover:underline">Eventos</Link></li>
                <li><Link to="/noticias" className="hover:underline">Noticias</Link></li>
                <li><Link to="/proyectos" className="hover:underline">Proyectos</Link></li>
                <li><Link to="/foros" className="hover:underline">Foros</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base">Eventos</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><Link to="/eventos" className="hover:underline">Eventos</Link></li>
                <li><Link to="/noticias" className="hover:underline">Noticias</Link></li>
                <li><Link to="/proyectos" className="hover:underline">Proyectos</Link></li>
                <li><Link to="/foros" className="hover:underline">Foros</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base">Eventos</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><Link to="/eventos" className="hover:underline">Eventos</Link></li>
                <li><Link to="/noticias" className="hover:underline">Noticias</Link></li>
                <li><Link to="/proyectos" className="hover:underline">Proyectos</Link></li>
                <li><Link to="/foros" className="hover:underline">Foros</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base">Contactos</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Phone size={20} /> <span>+15 99938283812</span>
                  </div>
                  <span className="text-xs text-gray-300">Número de celular</span>
                  <hr className="border-gray-600" />
                </li>

                <li className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Mail size={20} /> <span>exemple@gmail.com</span>
                  </div>
                  <span className="text-xs text-gray-300">Correo</span>
                  <hr className="border-gray-600" />
                </li>

                <li className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} /> <span>Perú</span>
                  </div>
                  <span className="text-xs text-gray-300">Ubicación</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-right mt-10 border-t border-gray-500 pt-6 text-sm text-gray-300">
          Copyright ©2025
        </div>
      </Container>
    </footer>
  );
}
