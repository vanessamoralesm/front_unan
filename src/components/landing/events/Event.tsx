import { Clock3, MapPin } from 'lucide-react'
import login from '@/assets/img/login/logo_hackaton 1.png'
export default function Event() {
    return (
        <article className=" rounded-lg bg-white flex flex-col md:flex-row items-center gap-10">
            <figure className="w-full max-w-lg">
                <img className="w-full rounded-2xl" src={login} alt="logo del evento" />
            </figure>
            <div className="w-full">
                <h3 className="text-2xl font-medium">Cátedra Prima: Diseñar sin límites; Arquitectura, Arte y Objeto</h3>
                <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur. Risus pharetra scelerisque lectus nunc nisi dui. Turpis enim velit pretium quis leo etiam tellus id. Sem a risus vitae malesuada id sed. Tellus porta libero dui turpis euismod lorem lacus.</p>
                <div className="flex items-center gap-4 mt-6">
                    <div className="flex items-center gap-2 text-blue-primary">
                        <MapPin />
                        <span>Foro Cultural</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-primary">
                        <Clock3 />
                        <span>10:00 hrs</span>
                    </div>
                </div>
            </div>
        </article>
    )
}
