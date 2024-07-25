import {ArrowRight, Calendar, MapPin, Settings2, X} from "lucide-react";
import {Button} from "../../../components/button.tsx";
import {useState} from "react";
import {DateRange, DayPicker} from "react-day-picker";
import "react-day-picker/dist/style.css"
import {format} from "date-fns";
import {ptBR} from "date-fns/locale";

interface DestinationAndDateProps {
    isGuestInputOpen: boolean;
    setIsGuestInputOpen: (isOpen: boolean) => void;
}

export function DestinationAndDateStep({isGuestInputOpen, setIsGuestInputOpen} : DestinationAndDateProps) {
    
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [startAndEndDate, setStartAndEndDate] = useState<DateRange | undefined>()
    
    const displayedDate = startAndEndDate && startAndEndDate.to && startAndEndDate.from ?
        format(startAndEndDate.from, "LLL") ==format(startAndEndDate.to,  "LLL") ?
            format(startAndEndDate.from, "d").concat(' até ').concat(format(startAndEndDate.to,  "d' de 'LLL", {locale: ptBR}))
            :
            format(startAndEndDate.from, "d' de 'LLL", {locale: ptBR}).concat(' até ').concat(format(startAndEndDate.to,  "d' de 'LLL", {locale: ptBR}))
        
        : null;
    
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400"/>
                <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                       disabled={isGuestInputOpen}
                />
            </div>
            <button onClick={() => setIsDatePickerOpen(true)} className="flex items-center gap-2 text-left w-[250px]"
                    disabled={isGuestInputOpen}>
                <Calendar className="size-5 text-zinc-400"/>
                <span className="bg-transparent text-lg text-zinc-400 w-40 flex-1">{displayedDate || 'Quando?'}</span>
            </button>

            {isDatePickerOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <h2 className="text-l font-bold">Selecione a data</h2>
                                <button type="button" onClick={() => setIsDatePickerOpen(false)}>
                                    <X className="size-5 text-zinc-400"></X>
                                </button>
                            </div>
                        </div>
                        <DayPicker mode="range" selected={startAndEndDate} 
                                   onSelect={setStartAndEndDate}
                                   classNames={{
                                       today: `border-lime-500`,
                                       selected: `bg-lime-500 rounded-full text-white`,
                                       calendar: `shadow-lg p-5`,
                                       chevron: `fill-lime-500`,
                                       range_start: `bg-lime-500 rounded-full text-white`,
                                       range_end: `bg-lime-500 rounded-full text-white`,
                                       range_middle: "bg-lime-200 rounded text-black",
                                   }}/>
                    </div>
                </div>
            )}
            <div className="w-px h-6 bg-zinc-800"></div>

            {!isGuestInputOpen ?
                (
                    <Button onClick={() => setIsGuestInputOpen(true)}>
                        Continuar
                        <ArrowRight className="size-5"/>
                    </Button>
                )
                :
                (
                    <Button onClick={() => setIsGuestInputOpen(false)} bgColor="secondary">
                        Alterar local/data
                        <Settings2 className="size-5"/>
                    </Button>
                )
            }
        </div>

    )
}