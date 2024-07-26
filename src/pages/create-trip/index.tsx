import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ModalInviteGuests} from "./modal-invite-guests.tsx";
import {ModalConfirmTrip} from "./modal-confirm-trip.tsx";
import {DestinationAndDateStep} from "./steps/destination-and-date-step.tsx";
import {InviteGuestsStep} from "./steps/invite-guests-step.tsx";
import {DateRange} from "react-day-picker";
import {displayedDateFunction} from "../../utils/displayedDateFunction.tsx";
import {api} from "../../lib/axios.ts";

export function CreateTripPage() {
    const navigate = useNavigate();
    
    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
    const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
    const [typedName, setTypedName] = useState('');
    const [typedEmail, setTypedEmail] = useState('');
    const [participantsToInvite, setParticipantsToInvite] = useState<{ name: string,  email: string}[]>([])
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

    const [destination, setDestination] = useState('');
    const [, setOwnerData] = useState({name: '', email:''});
    const [startAndEndDates, setStartAndEndDates] = useState<DateRange | undefined>();
    
    function handleAddParticipantsToInvite(event: FormEvent) {
        event.preventDefault();
        if (typedEmail.trim() === '' || typedName.trim() === '') {
            return;
        }
        if (participantsToInvite.find(p => p.email === typedEmail.trim())) {
            return;
        }
        setParticipantsToInvite([...participantsToInvite, {name: typedName.trim(), email: typedEmail.trim()}])
        
        setTypedEmail('')
        setTypedName('')
    }

    function handleParticipantsToInvite(emailToExclude: number) {
        setParticipantsToInvite(participantsToInvite.filter((email,index) => index !== emailToExclude));
    }

    console.log(participantsToInvite)
    const displayedDate = startAndEndDates && startAndEndDates.from && startAndEndDates.to ?
        displayedDateFunction(startAndEndDates.from, startAndEndDates.to) :
        null;

    async function InviteParticipants(id: number, participantsToInvite: { name: string; email: string }[]) {
        await Promise.all(participantsToInvite.map(p => api.post(`/TripParticipants/${id}/register`, p)));
    }
    async function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // navigate(`/trips/864d2cd4-8778-4d11-ae5c-b2ac2249ce93`)
        
        if (!destination) {
            alert('Digite a data do destino')
            return;
        }

        if (!startAndEndDates || !startAndEndDates.to || !startAndEndDates.from) {
            alert('Defina a data de início e fim da viagem')
            return;
        }

        const response = await api.post('/Trip/register', {
            name: destination,
            startDate: startAndEndDates.from,
            endDate: startAndEndDates.to,
        })

        const {id} = response.data

        await InviteParticipants(id, participantsToInvite);

        navigate(`/trips/${id}`)
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
                                participantsToInvite={participantsToInvite}
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
                    participantsToInvite={participantsToInvite}
                    handleAddParticipantsToInvite={handleAddParticipantsToInvite}
                    handleParticipantsToInvite={handleParticipantsToInvite}
                    typedName={typedName}
                    setTypedName={setTypedName}
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
