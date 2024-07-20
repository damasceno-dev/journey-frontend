import {
    ArrowRight,
    AtSign,
    Calendar, Mail,
    MapPin,
    Plus,
    Settings2,
    User,
    UserRoundPlus,
    X
} from "lucide-react";
import {FormEvent, useState} from "react";

export function App() {
    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [typedEmail, setTypedEmail] = useState('');
    const [emailsToInvite, setEmailsToInvite] = useState([])
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

    function numberOfEmailsOnMessage() {
        if (emailsToInvite.length === 1) {
            return emailsToInvite.length + ' pessoa convidada'
        } else {
            return emailsToInvite.length + ' pessoas convidadas'
        }
    }

    return (
   <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
       <div className="max-w-3xl w-full px-6 text-center space-y-10">
           <div className="flex flex-col items-center gap-3">
               <img src="/logo.svg" alt="planner"/>   
                <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
           </div>
           <div className="space-y-4">
               <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                   <div className="flex items-center gap-2 flex-1">
                       <MapPin className="size-5 text-zinc-400"/>
                       <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                        disabled={isGuestInputOpen}
                       />
                   </div>
                   <div className="flex items-center gap-2 ">
                       <Calendar className="size-5 text-zinc-400"/>
                       <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" 
                        disabled={isGuestInputOpen}
                       />
                   </div>
                   
                   <div className="w-px h-6 bg-zinc-800"></div>

                   {!isGuestInputOpen ? 
                       (
                           <button onClick={() => setIsGuestInputOpen(true)} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-bold flex items-center gap-2 hover:bg-lime-400 transition">
                               Continuar
                               <ArrowRight className="size-5"/>
                           </button>
                       )   
                           :
                       (
                           <button onClick={() => setIsGuestInputOpen(false)} className="bg-zinc-800 text-zinc-400 rounded-lg px-5 py-2 font-bold flex items-center gap-2 hover:bg-zinc-700 transition">
                               Alterar local/data
                               <Settings2 className="size-5"/>
                           </button>
                       )
                   }
               </div>

               {isGuestInputOpen && 
                   (
                       <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                           <button type="button" onClick={() => setIsModalOpen(true)} className="flex items-center gap-3 flex-1 text-left hover:underline">
                               <UserRoundPlus className="size-5 text-zinc-400"/>
                                   {emailsToInvite.length > 0 ? 
                                       (
                                           <span className="text-zinc-100 text-lg flex-1">{numberOfEmailsOnMessage()}</span>
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
           </div>
           <p className="text-sm text-zinc-500">
               Ao planejar sua viagem pela plann.er, você automaticamente concorda <br/> com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">privacidade</a>
           </p>
       </div>

       {isModalOpen && (
           <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
               <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                   <div className="space-y-2">
                       <div className="flex items-center justify-between">
                           <h2 className="text-l font-bold">Selecionar convidados</h2>
                           <button type="button" onClick={() => setIsModalOpen(false)}>
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
                       <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition">
                           Adicionar
                           <Plus className="size-5"/>
                       </button>
                   </form>
               </div>
           </div>
       )}
       {isConfirmTripModalOpen && (
           <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
               <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                   <div className="space-y-2">
                       <div className="flex items-center justify-between">
                           <h2 className="text-l font-bold">Confirmar criação de viagem</h2>
                           <button type="button" onClick={() => setIsConfirmTripModalOpen(false)}>
                               <X className="size-5 text-zinc-400"></X>
                           </button>
                       </div>
                       <p className="text-sm text-zinc-400">
                           Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil </span> nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto</span> preencha seus dados abaixo:
                       </p>
                   </div>
                   <form onSubmit={handleAddEmailToInvite} action="" className="space-y-3">
                       <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                           <User className="text-zinc-400 size-5"/>
                           <input
                               name="name"
                               placeholder="Seu nome completo"
                               className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                           />
                       </div>
                       <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                           <Mail className="text-zinc-400 size-5"/>
                           <input
                               name="email"
                               type="email"
                               placeholder="Seu e-mail pessoal"
                               className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                           />
                       </div>
                       <button type="submit" className="bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition">
                           Confirmar criação da viagem
                       </button>
                   </form>
               </div>
           </div>
       )}
   </div>
      
  )
}
