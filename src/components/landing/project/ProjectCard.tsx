import { Button } from "@/components/ui/button";
import { DownloadCloud, FlaskConical } from "lucide-react";
export default function ProjectCard() {
  return (
    <article className="p-6 rounded-md bg-blue-primary text-white flex gap-2">
      <div>
        <div className="w-14 h-14 text-blue-primary flex items-center justify-center bg-white rounded">
          <FlaskConical />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-medium">Proyecto 1</h3>
        <p className="text-white/80 mt-2">
          Lorem ipsum dolor sit amet consectetur. Risus odio ullamcorper
          phasellus enim etiam. Integer at non venenatis convallis libero
          faucibus eu mi. Placerat a magna congue erat odio.
        </p>
        <Button variant={"secondary"} size={"xl"} className="mt-8 flex ml-auto">
          {" "}
          Descargar PDF <DownloadCloud width={20} height={20} />
        </Button>
      </div>
    </article>
  );
}
