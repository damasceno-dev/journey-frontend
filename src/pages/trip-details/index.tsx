import {
    Calendar,
    CircleCheck,
    CircleDashed,
    Link2,
    MapPin,
    Plus,
    Settings2,
    UserCog
} from "lucide-react";

export function TripDetailsPage() {
    return (
        <div className="max-w-6xl py-10 mx-auto space-y-8">
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400"/>
                    <span className="text-zinc-100">Florianópolis, Brasil</span>
                </div>
                
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400"/>
                        <span className="text-zinc-100">17 a 23 de Agosto</span>
                    </div>
                    <div className="w-px h-6 bg-zinc-800"></div>

                    <button className="bg-zinc-800 text-zinc-400 rounded-lg px-5 py-2 font-bold flex items-center gap-2 hover:bg-zinc-700 transition">
                        Alterar local/data
                        <Settings2 className="size-5"/>
                    </button>
                </div>
                
                
            </div>
            
            <main className="flex gap-16">
                <div className="flex-1 space-y-6 px-7">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-bold flex items-center gap-2 hover:bg-lime-100 transition duration-500">
                            <Plus className="size-5"/>
                            Cadastrar atividade
                        </button>
                    </div>
                    
                    <div className="space-y-8">
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                                <span className="text-xs text-zinc-500">Sábado</span>
                            </div>
                            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
                        </div>
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                                <span className="text-xs text-zinc-500">Domingo</span>
                            </div>
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300"></CircleCheck>
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-zinc-100 ml-auto">08:00h</span>
                                </div>
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300"></CircleCheck>
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-zinc-100 ml-auto">08:00h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-80 space-y-10">
                    <div className="space-y-6">
                        <h2 className="font-semibold text-xl">Links Importantes</h2>
                        <div className="space-y-5">
                            <a href="#" className="flex items-center justify-between gap-4 group">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                                    <a href="#" className="block text-xs text-zinc-400 truncate group-hover:underline group-hover:text-zinc-200">https://www.airbnb.com.br/rooms/2429384293482394/settings-room/389238293</a>
                                </div>
                                <Link2 className="size-5 text-zinc-400 shrink-0"></Link2>
                            </a>
                        </div>
                        <div className="space-y-5">
                            <a href="#" className="flex items-center justify-between gap-4 group">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Regras da Casa</span>
                                    <a href="#" className="block text-xs text-zinc-400 truncate group-hover:underline group-hover:text-zinc-200">https://www.notion.com.br/rule-template/2429384293482394/settings-room/389238293</a>
                                </div>
                                <Link2 className="size-5 text-zinc-400 shrink-0"></Link2>
                            </a>
                        </div>
                        <button className="bg-zinc-800 w-full justify-center text-zinc-400 rounded-lg px-5 h-11 font-bold flex items-center gap-2 hover:bg-zinc-700 transition">
                            <Plus className="size-5"/>
                            Cadastrar novo link
                        </button>
                    </div>
                    <div className="w-full h-px bg-zinc-800"></div>
                    <div className="space-y-6">
                        <h2 className="font-semibold text-xl">Convidados</h2>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Jessica White</span>
                                    <span className="block text-sm text-zinc-400 truncate">jessica.white44@yahoo.com</span>
                                </div>
                                <CircleDashed className="size-5 text-zinc-400 shrink-0"/>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Dr. Rita Pacocha</span>
                                    <span className="block text-sm text-zinc-400 truncate">lacy.pacocheta@pco.com</span>
                                </div>
                                <CircleDashed className="size-5 text-zinc-400 shrink-0"/>
                            </div>
                        </div>
                        <button className="bg-zinc-800 w-full justify-center text-zinc-400 rounded-lg px-5 h-11 font-bold flex items-center gap-2 hover:bg-zinc-700 transition">
                            <UserCog className="size-5"/>
                            Gerenciar convidados
                        </button>
                    </div>

                </div>
            </main>
            
        </div>
    )
}