import { cn } from "@/lib/utils";
import Text from "../Text";
import SectionGrid from "./SectionGrid";

interface Props {
    container?: boolean,
    children?: React.ReactNode
    className?: string
    tag:string,
    title:string,
    description:string,
    img:string
    alt:string
    reverse?:boolean
}

export default function SectionRow({ container = false,reverse = false , children, className = '' , tag,title,description,img, alt }: Props) {
  return (
    <SectionGrid container={container} className={className}>
         <div className={cn("text-white p-20", {
            "order-last": reverse,
         })}>
          <div className="max-w-2xl w-full">
            <Text as="paragraph" >
              {tag}
            </Text>
            <Text as="subtitle" className="mb-4 leading-[1.25] mt-1 ">
              {title}
            </Text>
            <p className="text-gray-400">
                {description}
            </p>
            {
                children && <div>{children}</div>
            }
          </div>
        </div>
        <figure className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={img}
            alt={alt}
          />
        </figure>
    </SectionGrid>
  )
}
