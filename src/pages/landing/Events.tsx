import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import Event from "@/components/landing/events/Event";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Search } from "lucide-react";

export default function Events() {
  return (
    <div>
      <div className="banner-events">
        <Container>
          <div>
            <h1 className="text-5xl font-semibold mb-4">Eventos</h1>
            <p className="text-white/80 max-w-3xl">Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper phasellus enim etiam. Integer at non venenatis convallis libero faucibus eu mi. Placerat a magna congue erat odio. Nibh odio sapien quis pharetra purus.</p>
            <Button variant={'outline'} size={'xl'} className="bg-transparent mt-8 ">IA AL EVENTO</Button>
          </div>
        </Container>
      </div>
      <section className="py-20">
        <Container>
          <div>
            <Text as="paragraph">NO TE LO PIERDAS</Text>
            <Text as="subtitle">Proximos Eventos</Text>
            <p className="text-gray-400 max-w-3xl mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odit, maiores qui molestiae omnis ab nihil corporis dicta atque. Asperiores facilis impedit nesciunt nostrum voluptate pariatur amet qui laboriosam praesentium?
            </p>
          </div>
          <div className="py-10 flex items-end gap-4 ">
            <div  className="w-full max-w-sm">
                <Label htmlFor="search" className="text-gray-400 mb-2">Buscar eventos</Label>
                <Input name="search" placeholder="Buscar" className="w-full"  />
            </div>
            <Button className="h-11 " variant={'yellow'}> <Search/> BUSCAR EVENTO</Button>
            <Button className="h-11 " variant={'blue'}> <Calendar /> FILTRAR POR FECHA</Button>
          </div>
          <div className="grid mt-8 gap-10">
            <Event/>
            <Event/>
            <Event/>
            <Event/>
          </div>
        </Container>

      </section>
    </div>
  )
}