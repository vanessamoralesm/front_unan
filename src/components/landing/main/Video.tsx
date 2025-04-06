
import { Play } from "lucide-react";

export default function Video() {
  return (
    <div className="h-[260px] md:h-[600px] video-main flex items-center justify-center mt-20">
        <div className="size-20 md:size-32 rounded-full bg-white text-blue-primary flex items-center justify-center">
            <Play className="size-6 md:size-8" />
        </div>
    </div>
  )
}
