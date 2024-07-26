import {Mail, User, X} from "lucide-react";
import {FormEvent} from "react";
import {Button} from "../../components/button.tsx";

interface ConfirmTripModalProps {
    setIsConfirmTripModalOpen: (isConfirmTripModalOpen: boolean) => void;
    createTrip: (event: FormEvent<HTMLFormElement>) => void;
    setOwnerData: (data: (prevData: { name: string; email: string }) => { name: string; email: string }) => void;
    destination: string;
    displayedDate: string | null;
}

export function ModalConfirmTrip({setIsConfirmTripModalOpen, createTrip, setOwnerData, destination, displayedDate}: ConfirmTripModalProps) {

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-l font-bold">Confirmar criação de viagem</h2>
                        <button type="button" onClick={() => setIsConfirmTripModalOpen(false)}>
                            <X className="p-2 size-8 text-zinc-400 rounded-full hover:bg-black"></X>
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400 leading-8">
                        Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">{destination} </span>, nas datas de <span className="font-semibold text-zinc-100">{displayedDate}</span>, preencha seus dados abaixo:
                    </p>
                </div>
                <form action="" className="space-y-3" onSubmit={createTrip}>
                    <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                        <User className="text-zinc-400 size-5"/>
                        <input
                            name="name"
                            placeholder="Seu nome completo"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                            onChange={(event) => setOwnerData(prevState => ({ ...prevState, name: event.target.value }))}
                        />
                    </div>
                    <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                        <Mail className="text-zinc-400 size-5"/>
                        <input
                            name="email"
                            type="email"
                            placeholder="Seu e-mail pessoal"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                            onChange={(event) => setOwnerData(prevState => ({ ...prevState, email: event.target.value }))}
                        />
                    </div>
                    <Button type="submit" size="full">
                        Confirmar criação da viagem
                    </Button>
                </form>
            </div>
        </div>

    )
}