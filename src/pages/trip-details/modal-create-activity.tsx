import {Calendar, Tag, X} from "lucide-react";

export function CreateActivityModal({setModalCreateActivityOpen}) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-l font-bold">Cadastrar atividade</h2>
                        <button type="button" onClick={() => setModalCreateActivityOpen(false)}>
                            <X className="size-5 text-zinc-400"></X>
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Todos convidados podem visualizar as atividades.
                    </p>
                </div>
                <form action="" className="space-y-3">
                    <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                        <Tag className="text-zinc-400 size-5"/>
                        <input
                            name="title"
                            placeholder="Qual a atividade?"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                        />
                    </div>
                    <div className=" cursor-pointer items-center gap-2">
                        <div className="flex-1 h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2 cursor-pointer">
                            <Calendar className="text-zinc-400 size-5"/>
                            <input
                                type="datetime-local"
                                name="occurs_at"
                                placeholder="Data e horário da atividade"
                                className=" bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                            />
                        </div>
                    </div>
                    <button type="submit" className="bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition">
                        Salvar atividade
                    </button>
                </form>
            </div>
        </div>

    )
}