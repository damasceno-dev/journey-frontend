import {Plus} from "lucide-react";
import {useState} from "react";
import {CreateActivityModal} from "./modal-create-activity.tsx";
import {ImportantLinks} from "./important-links.tsx";
import Guests from "./guests.tsx";
import {Activities} from "./activities.tsx";
import Header from "./header.tsx";
import {Button} from "../../components/button.tsx";

export function TripDetailsPage() {
    const [modalCreateActivityOpen, setModalCreateActivityOpen] = useState(false);

    return (
        <div className="max-w-6xl py-10 mx-auto space-y-8">
            <Header/>
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
                    <Guests/>
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