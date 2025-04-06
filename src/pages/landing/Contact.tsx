import Container from "@/components/Container";
import ContactCard from "@/components/landing/contacts/ContactCard";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <section className="py-10">
        <Container>
          <div className="max-w-2xl">
            <Text as="subtitle" className="mb-2">
              Contactos
            </Text>
            <p className="text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              vero quidem temporibus esse, placeat cumque perferendis doloremque
              eos veniam illo et aut, exercitationem quo vitae inventore, quis
              commodi fugiat illum?
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 mt-10">
            <div className="grid gap-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <Label className="mb-2 inline-block" htmlFor="name">
                    Nombre
                  </Label>
                  <Input type="text" id="name" placeholder="Ej. Mario Lopez" />
                </div>
                <div>
                  <Label className="mb-2 inline-block" htmlFor="phone">
                    Telefono
                  </Label>
                  <Input type="tel" id="phone" placeholder="Ej. 9992891234" />
                </div>
              </div>
              <div>
                <Label className="mb-2 inline-block" htmlFor="email">
                  Correo Electrónico
                </Label>
                <Input
                  type="tel"
                  id="email"
                  placeholder="Ej. exemple@gmail.com"
                />
              </div>
              <div>
                <Label className="mb-2 inline-block" htmlFor="message">
                  Mensaje
                </Label>
                <Textarea
                  rows={8}
                  name="message"
                  placeholder="Escribe aquí tu mensaje..."
                />
              </div>
              <Button
                variant={"blue"}
                size={"xl"}
                className="md:ml-auto mt-4 w-full md:w-auto" 
              >
                CONTACTAR
              </Button>
            </div>
            <div className="">
              <div className="grid md:grid-cols-2 gap-4">
                <ContactCard 
                    title="Correo Electrónico"
                    text="example@gmail.com"
                    Icon={Mail}
                
                />
                <ContactCard 
                    title="Telefono"
                    text="9992891234"
                    Icon={Phone}
                />
                <ContactCard 
                  title="UNIVERSIDAD UNAN"
                  text="123 Sample St, Sydney NSW 2000 AU"
                  Icon={MapPin}
                  className="md:col-span-2" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
