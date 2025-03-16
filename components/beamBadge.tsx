import { Badge } from "@/components/ui/badge"
import { Gem } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";

export default function BeamBadge(){
    return(
        <div className="relative w-fit p-2 px-3 border border-white/30 rounded-full">
        <h1 className="flex gap-2 justify-center items-center text-2xl text-white font-mono"> Empowering WEB3 <Gem size={16}/></h1>
        <BorderBeam
        duration={6}
        size={80}
        className="from-transparent via-blue-400 to-transparent"
        />
        </div>
    );
}