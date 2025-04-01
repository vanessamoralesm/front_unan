import { cn } from "@/lib/utils";
import { LucideIcon, Mail } from "lucide-react";

interface Props {
  className?: string;
  title:string;
  text:string
  Icon: LucideIcon
  
}
export default function ContactCard({ className = "", title, text, Icon }: Props) {
  return (
    <article className={cn("bg-gray-50 p-6 rounded-lg", className)}>    
      <Icon className="text-red-primary" />
      <p className="font-medium text-gray-700 mt-6 text-lg">
        {title}
      </p>
      <span className="text-gray-400 text-sm">{text}</span>
    </article>
  );
}
