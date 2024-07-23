import {ArrowRight, UserRoundPlus} from "lucide-react";

interface InviteGuestsStepProps {
    setIsGuestModalOpen: (IsGuestModalOpen: boolean) => void;
    setIsConfirmTripModalOpen: (IsConfirmTripModalOpen: boolean) => void;
    emailsToInvite: string[];
}

export function InviteGuestsStep({setIsGuestModalOpen, emailsToInvite, setIsConfirmTripModalOpen}: InviteGuestsStepProps) {
    function pluralMessageOnEmailsToInvite() {
        if (emailsToInvite.length === 1) {
            return 'pessoa convidada'
        } else {
            return 'pessoas convidadas'
        }
    }

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <button type="button" onClick={() => setIsGuestModalOpen(true)} className="flex items-center gap-3 flex-1 text-left hover:underline">
                <UserRoundPlus className="size-5 text-zinc-400"/>
                {emailsToInvite.length > 0 ?
                    (
                        <span className="text-zinc-100 text-lg flex-1">{emailsToInvite.length} {pluralMessageOnEmailsToInvite()}</span>
                    )
                    :
                    (
                        <span className="text-zinc-400 text-lg flex-1">Quem estará na viagem?</span>
                    )
                }
            </button>

            <div className="w-px h-6 bg-zinc-800"></div>

            <button type="button" onClick={() => setIsConfirmTripModalOpen(true)} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-bold flex items-center gap-2 hover:bg-lime-400 transition">
                Confirmar viagem
                <ArrowRight className="size-5"/>
            </button>
        </div>
    )
}