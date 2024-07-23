import {AtSign, Plus, X} from "lucide-react";
import {FormEvent} from "react";
import {Button} from "../../components/button.tsx";

interface InviteGuestsModalProps {
    emailsToInvite: string[];
    handleAddEmailToInvite: (event: FormEvent) => void;
    handleExcludeEmailToInvite: (emailToExclude: number) => void;
    typedEmail: string;
    setTypedEmail: (value:string) => void;
    setIsGuestModalOpen: (isGuestModalOpen:boolean) => void;
}

export function ModalInviteGuests({emailsToInvite, handleAddEmailToInvite, handleExcludeEmailToInvite, typedEmail, setTypedEmail, setIsGuestModalOpen}: InviteGuestsModalProps) {
    
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-l font-bold">Selecionar convidados</h2>
                        <button type="button" onClick={() => setIsGuestModalOpen(false)}>
                            <X className="size-5 text-zinc-400"></X>
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Os convidados irão receber e-mails para confirmar a participação na viagem.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {emailsToInvite.map((email,i) => (
                        <div key={i.toString() + '-' + email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                            <span className="text-zinc-300">{email}</span>
                            <button type="button" onClick={() => handleExcludeEmailToInvite(i)}>
                                <X className="size-4 text-zinc-400"/>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="w-full h-px bg-zinc-800"></div>

                <form onSubmit={handleAddEmailToInvite} action="" className="p-2.5 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                    <div className="px-2 flex items-center flex-1 gap-2">
                        <AtSign className="text-zinc-400 size-5"></AtSign>
                        <input
                            type="text"
                            placeholder="Digite o e-mail do convidado"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                            value={typedEmail}
                            onChange={(e) => setTypedEmail(e.target.value)}
                        />
                    </div>
                    <Button type="submit">
                        Adicionar
                        <Plus className="size-5"/>
                    </Button>
                </form>
            </div>
        </div>

    )
}