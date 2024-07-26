import {ArrowRight, UserRoundPlus} from "lucide-react";
import {Button} from "../../../components/button.tsx";

interface InviteGuestsStepProps {
    setIsGuestModalOpen: (IsGuestModalOpen: boolean) => void;
    setIsConfirmTripModalOpen: (IsConfirmTripModalOpen: boolean) => void;
    participantsToInvite: { name: string,  email: string}[];
}

export function InviteGuestsStep({setIsGuestModalOpen, participantsToInvite, setIsConfirmTripModalOpen}: InviteGuestsStepProps) {
    function pluralMessageOnEmailsToInvite() {
        if (participantsToInvite.length === 1) {
            return 'pessoa convidada'
        } else {
            return 'pessoas convidadas'
        }
    }

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <button type="button" onClick={() => setIsGuestModalOpen(true)} className="flex items-center gap-3 flex-1 text-left hover:underline">
                <UserRoundPlus className="size-5 text-zinc-400"/>
                {participantsToInvite.length > 0 ?
                    (
                        <span className="text-zinc-100 text-lg flex-1">{participantsToInvite.length} {pluralMessageOnEmailsToInvite()}</span>
                    )
                    :
                    (
                        <span className="text-zinc-400 text-lg flex-1">Quem estará na viagem?</span>
                    )
                }
            </button>

            <div className="w-px h-6 bg-zinc-800"></div>

            <Button type="button" onClick={() => setIsConfirmTripModalOpen(true)}>
                Confirmar viagem
                <ArrowRight className="size-5"/>
            </Button>
        </div>
    )
}