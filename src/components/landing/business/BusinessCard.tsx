import LogoSckeleton from "@/assets/img/logos/logo_sckeleton.png";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  color?: "blue" | "red" | "yellow";
}

const colors = {
  blue: "border-t-blue-primary",
  red: "border-t-red-primary",
  yellow: "border-t-yellow-primary",
};

export default function BusinessCard({
  className = "",
  color = "blue",
}: Props) {

  return (
    <article
      className={cn(
        "p-4 min-h-60 bg-white flex items-center justify-center border-t-4 shadow-[0px_4px_33px_0_rgba(0,0,0,0.03)]",
        className,
        colors[color]
      )}
    >
      <img src={LogoSckeleton} alt="logo" className="w-[70%] object-cover" />
    </article>
  );
}
