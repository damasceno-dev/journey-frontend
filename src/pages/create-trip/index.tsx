import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ModalInviteGuests} from "./modal-invite-guests.tsx";
import {ModalConfirmTrip} from "./modal-confirm-trip.tsx";
import {DestinationAndDateStep} from "./steps/destination-and-date-step.tsx";
import {InviteGuestsStep} from "./steps/invite-guests-step.tsx";

export function CreateTripPage() {
    const navigate = useNavigate();
    
    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
    const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
    const [typedEmail, setTypedEmail] = useState('');
    const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

    function handleAddEmailToInvite(event: FormEvent) {
        event.preventDefault();
        if (typedEmail.trim() === '') {
            return;
        }
        if (emailsToInvite.find(email => email === typedEmail.trim())) {
            return;
        }
        setEmailsToInvite([...emailsToInvite,typedEmail.trim()])
        setTypedEmail('')
    }

    function handleExcludeEmailToInvite(emailToExclude: number) {
        setEmailsToInvite(emailsToInvite.filter((email,index) => index !== emailToExclude));
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate('/trips/123')
    }

    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className="flex flex-col items-center gap-3">
                    <img src="/logo.svg" alt="planner"/>
                    <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>
                <div className="space-y-4">
                    
                    <DestinationAndDateStep 
                        isGuestInputOpen={isGuestInputOpen} 
                        setIsGuestInputOpen={setIsGuestInputOpen} 
                    />
                    
                    {isGuestInputOpen &&
                        (
                            <InviteGuestsStep 
                                setIsGuestModalOpen={setIsGuestModalOpen}
                                setIsConfirmTripModalOpen={setIsConfirmTripModalOpen}
                                emailsToInvite={emailsToInvite}
                            />
                        )
                    }
                </div>
                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela plann.er, você automaticamente concorda <br/> com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">privacidade</a>
                </p>
            </div>

            {isGuestModalOpen && (
                <ModalInviteGuests
                    emailsToInvite={emailsToInvite}
                    handleAddEmailToInvite={handleAddEmailToInvite}
                    handleExcludeEmailToInvite={handleExcludeEmailToInvite}
                    typedEmail={typedEmail}
                    setTypedEmail={setTypedEmail}
                    setIsGuestModalOpen={setIsGuestModalOpen}
                />
            )}
            
            {isConfirmTripModalOpen && (
                <ModalConfirmTrip 
                    setIsConfirmTripModalOpen={setIsConfirmTripModalOpen}
                    createTrip={createTrip}
                />
            )}
        </div>

    )
}
