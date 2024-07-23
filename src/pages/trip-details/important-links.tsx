import {Link2, Plus} from "lucide-react";
import {Button} from "../../components/button.tsx";

export function ImportantLinks() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links Importantes</h2>
            <div className="space-y-5">
                <a href="#" className="flex items-center justify-between gap-4 group">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                        <span className="block text-xs text-zinc-400 truncate group-hover:underline group-hover:text-zinc-200">https://www.airbnb.com.br/rooms/2429384293482394/settings-room/389238293</span>
                    </div>
                    <Link2 className="size-5 text-zinc-400 shrink-0"></Link2>
                </a>
            </div>
            <div className="space-y-5">
                <a href="#" className="flex items-center justify-between gap-4 group">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Regras da Casa</span>
                        <span className="block text-xs text-zinc-400 truncate group-hover:underline group-hover:text-zinc-200">https://www.notion.com.br/rule-template/2429384293482394/settings-room/389238293</span>
                    </div>
                    <Link2 className="size-5 text-zinc-400 shrink-0"></Link2>
                </a>
            </div>
            <Button size="full" bgColor="secondary">
                <Plus className="size-5"/>
                Cadastrar novo link
            </Button>
        </div>
    )
}