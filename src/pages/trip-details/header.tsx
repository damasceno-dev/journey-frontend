import {Calendar, MapPin, Settings2} from "lucide-react";
import {Button} from "../../components/button";
import {displayedDateFunction} from "../../utils/displayedDateFunction.tsx";
import {Trip} from "./index.tsx";


interface HeaderProps {
    trip: Trip
}

export default function Header({trip}: HeaderProps) {
    const displayedDate = trip && trip.startDate && trip.endDate ?
        displayedDateFunction(trip.startDate, trip.endDate) :
        null;
    return (
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400"/>
                <span className="text-zinc-100">{trip?.name}</span>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400"/>
                    <span className="text-zinc-100">{displayedDate}</span>
                </div>
                <div className="w-px h-6 bg-zinc-800"></div>

                <Button bgColor="secondary">
                    Alterar local/data
                    <Settings2 className="size-5"/>
                </Button>
            </div>


        </div>

    )
}