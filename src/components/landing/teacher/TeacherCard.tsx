import Mentor from '@/assets/img/mentor.webp'
export default function TeacherCard() {
    return (
        <article className="card-teacher">
            <img src={Mentor} alt="Maestra presentandose ante la clase" className="w-full h-full object-cover block rounded-md" />
            <div className="card-teacher-information">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quam eos repellat. Soluta, dolores at officia quo excepturi reprehenderit, alias quidem assumenda eligendi sint, repellendus praesentium voluptatibus minima et voluptatem?</p>
            </div>
            <div className="card-teacher-profile">
                <h3 className="font-medium">Carla Medina</h3>
                <p className="text-white/70">Ingeniera en Sistemas</p>
                <div className="h-1 w-1/6 mx-auto max-w-lg bg-white mt-2"></div>
            </div>
        </article>
    )
}
