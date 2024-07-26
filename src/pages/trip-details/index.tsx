import {Plus} from "lucide-react";
import {useEffect, useState} from "react";
import {CreateActivityModal} from "./modal-create-activity.tsx";
import {ImportantLinks} from "./important-links.tsx";
import Guests from "./guests.tsx";
import {Activities} from "./activities.tsx";
import Header from "./header.tsx";
import {Button} from "../../components/button.tsx";
import {useParams} from "react-router-dom";
import {api} from "../../lib/axios.ts";

export interface activity {
    id: string;
    name: string;
    date: string;
    status: number
}

export interface participant {
    id: string;
    name: string;
    email: string;
    isConfirmed: boolean;
}

export interface Trip {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    activities: activity[];
    participants: participant[];
}

export function TripDetailsPage() {
    const [modalCreateActivityOpen, setModalCreateActivityOpen] = useState(false);
    
    const {id} = useParams<{ id: string }>();
    const [trip, setTrip] = useState<Trip | undefined>()
    useEffect(() => {
        api.get(`/Trip/${id}`).then(response => setTrip(response.data))
    }, [id])
    
    if (!trip) {
        return <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <h1>Carregando viagem...</h1>
                </div>
    } 
    
    return (
        <div className="max-w-6xl py-10 mx-auto space-y-8">
            {trip && <Header trip={trip}/>}
            <main className="flex gap-16">
                <div className="flex-1 space-y-6 px-7">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <Button onClick={() => setModalCreateActivityOpen(true)}>
                            <Plus className="size-5"/>
                            Cadastrar atividade
                        </Button>
                    </div>
                    <Activities/>
                </div>
                <div className="w-80 space-y-10">
                    <ImportantLinks/>
                    <div className="w-full h-px bg-zinc-800"></div>
                    <Guests participants={trip.participants}/>
                </div>
            </main>

            {modalCreateActivityOpen && (
                <CreateActivityModal
                    setModalCreateActivityOpen={setModalCreateActivityOpen}
                />
            )}
            
        </div>
    )
}