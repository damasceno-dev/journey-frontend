import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ModalInviteGuests} from "./modal-invite-guests.tsx";
import {ModalConfirmTrip} from "./modal-confirm-trip.tsx";
import {DestinationAndDateStep} from "./steps/destination-and-date-step.tsx";
import {InviteGuestsStep} from "./steps/invite-guests-step.tsx";
import {DateRange} from "react-day-picker";
import {displayedDateFunction} from "../../utils/displayedDateFunction.tsx";

export function CreateTripPage() {
    const navigate = useNavigate();
    
    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
    const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
    const [typedEmail, setTypedEmail] = useState('');
    const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

    const [destination, setDestination] = useState('');
    const [, setOwnerData] = useState({name: '', email:''});
    const [startAndEndDates, setStartAndEndDates] = useState<DateRange | undefined>();
    
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
    
    const displayedDate = startAndEndDates && startAndEndDates.from && startAndEndDates.to ?
        displayedDateFunction(startAndEndDates.from, startAndEndDates.to) :
        null;
    
    async function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        navigate(`/trips/864d2cd4-8778-4d11-ae5c-b2ac2249ce93`)
        
        // if (!destination) {
        //     alert('Digite a data do destino')
        //     return;
        // }
        //
        // if (!startAndEndDates || !startAndEndDates.to || !startAndEndDates.from) {
        //     alert('Defina a data de início e fim da viagem')
        //     return;
        // }
        //
        //
        // const response = await api.post('/api/Trips', {
        //     name: destination,
        //     startDate: startAndEndDates.from,
        //     endDate: startAndEndDates.to,
        // })
        //
        // const {id} = response.data

        // navigate(`/trips/${id}`)
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
                        setDestination={setDestination}
                        startAndEndDates={startAndEndDates}
                        setStartAndEndDates={setStartAndEndDates}
                        displayedDate={displayedDate}
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
                    setOwnerData={setOwnerData}
                    destination={destination}
                    displayedDate={displayedDate}
                />
            )}
        </div>

    )
}
