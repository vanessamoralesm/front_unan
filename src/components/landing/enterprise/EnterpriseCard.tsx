import { Button } from "@/components/ui/button";
import { Box, Download } from "lucide-react";

export default function EnterpriseCard() {
  return (
    <article className="bg-white p-6 text-center md:text-left rounded-lg border-red-primary/20 border shadow-lg shadow-red-primary/5">
      <div className="size-16 mx-auto md:ml-auto rounded-full flex items-center justify-center bg-red-primary/10 text-red-primary">
        <Box width={28} height={28} />
      </div>
      <h3 className="text-2xl font-semibold text-red-primary mb-2 mt-4">
        Cátedra Prima
      </h3>
      <p className="text-gray-400">
        Nuestra misión es transformar ideas en realidades que impacten
        positivamente a la comunidad. Creemos en un futuro donde la creatividad
        y la sostenibilidad van de la mano.
      </p>
      <Button variant={"red"} size={"xl"} className="md:ml-auto mt-6 w-full md:w-auto">
        Descargar PDF
        <Download />
      </Button>
    </article>
  );
}
