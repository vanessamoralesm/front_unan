
import { Play } from "lucide-react";

export default function Video() {
  return (
    <div className="h-[600px] video-main flex items-center justify-center mt-20">
        <div className="size-32 rounded-full bg-white text-blue-primary flex items-center justify-center">
            <Play className="w-8 h-8" />
        </div>
    </div>
  )
}
