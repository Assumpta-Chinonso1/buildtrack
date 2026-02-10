import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponetOne } from "@/components/server-component-one";




export default function InterLeavingPage() {

    return(
        <>
        <div>
            <h1>Interleaving Page</h1>
           
           <ClientComponentOne>

            <ServerComponetOne/>
            
           </ClientComponentOne>
        </div>
        </>
    )
    
}