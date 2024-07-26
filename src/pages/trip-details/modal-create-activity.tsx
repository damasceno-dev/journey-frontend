import {Calendar, Tag, X} from "lucide-react";
import {Button} from "../../components/button";
import {FormEvent, useState} from "react";
import {api} from "../../lib/axios.ts";

export function CreateActivityModal({setModalCreateActivityOpen, id, onActivityCreated}) {
    const [errorMessages, setErrorMessages] = useState<string[]>([]) 
    async function createActivity(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const title = data.get('title').toString();
        const occurs_at = data.get('occurs_at')?.toString();

        const newErrorMessages: string[] = [];
        
        if (!occurs_at) {
            newErrorMessages.push('Insert a value for the date');
        }

        if (newErrorMessages.length > 0) {
            setErrorMessages(newErrorMessages);
            return;
        }
        
        try {
            console.log(occurs_at)
            await api.post(`TripActivities/${id}/register`, {
                name: title,
                date: occurs_at
            })
            onActivityCreated();
            setModalCreateActivityOpen(false);
        } catch (error) {
            // console.log(error.response.data.errors)
            if (error.response && error.response.data.errors) {
                setErrorMessages(error.response.data.errors);
            }
        }
        console.log(errorMessages)

    }

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-l font-bold">Cadastrar atividade</h2>
                        <button type="button" onClick={() => setModalCreateActivityOpen(false)}>
                            <X className="size-8 p-2 text-zinc-400 rounded-full hover:bg-black transition duration-300"></X>
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Todos convidados podem visualizar as atividades.
                    </p>
                </div>
                <form onSubmit={createActivity} action="" className="space-y-3">
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
                    <Button size="full">
                        Salvar atividade
                    </Button>
                </form>
                {errorMessages.length > 0 && <div className="text-red-400">{errorMessages.map(e => <p>{e}</p>)}</div>}
            </div>
        </div>

    )
}