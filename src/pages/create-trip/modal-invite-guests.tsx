import {AtSign, Plus, UserRoundPlus, X} from "lucide-react";
import {FormEvent} from "react";
import {Button} from "../../components/button.tsx";

interface InviteGuestsModalProps {
    participantsToInvite: { name: string,  email: string}[];
    handleAddParticipantsToInvite: (event: FormEvent) => void;
    handleParticipantsToInvite: (emailToExclude: number) => void;
    typedEmail: string;
    setTypedEmail: (value:string) => void;
    typedName: string;
    setTypedName: (value:string) => void;
    setIsGuestModalOpen: (isGuestModalOpen:boolean) => void;
}

export function ModalInviteGuests({participantsToInvite, handleAddParticipantsToInvite, handleParticipantsToInvite, typedEmail, setTypedEmail, typedName, setTypedName, setIsGuestModalOpen}: InviteGuestsModalProps) {
    
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-l font-bold">Selecionar convidados</h2>
                        <button type="button" onClick={() => setIsGuestModalOpen(false)}>
                            <X className="size-6 text-zinc-400 rounded-full hover:bg-black"></X>
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Os convidados irão receber e-mails para confirmar a participação na viagem.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {participantsToInvite.map((participant,i) => (
                        <div key={i.toString()} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-4">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-zinc-200 font-bold">{participant.name}</span>
                                <span className="text-zinc-400">{participant.email}</span>
                            </div>
                            <button type="button" onClick={() => handleParticipantsToInvite(i)}>
                                <X className="py-2 size-8 text-zinc-400 rounded-full hover:bg-black"/>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="w-full h-px bg-zinc-800"></div>

                <form onSubmit={handleAddParticipantsToInvite} action="" className="p-2.5 bg-zinc-950 border-zinc-800 rounded-lg flex justify-between">
                    <div className="flex flex-1 flex-col gap-7">
                        <div className="flex items-center flex-1 gap-2">
                            <UserRoundPlus className="text-zinc-400 size-5"/>
                            <input
                                type="text"
                                placeholder="Digite o nome do convidado"
                                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                                value={typedName}
                                onChange={(e) => setTypedName(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center flex-1 gap-2">
                            <AtSign className="text-zinc-400 size-5"></AtSign>
                            <input
                                type="text"
                                placeholder="Digite o e-mail do convidado"
                                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                                value={typedEmail}
                                onChange={(e) => setTypedEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button type="submit">
                        Adicionar
                        <Plus className="size-5"/>
                    </Button>
                </form>
                    <Button onClick={() => setIsGuestModalOpen(false)} size="full" bgColor="secondary">
                        OK
                    </Button>
            </div>
        </div>

    )
}