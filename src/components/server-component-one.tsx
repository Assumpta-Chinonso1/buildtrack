import fs from 'fs'
import { ClientComponentOne } from './client-component-one'



export const ServerComponetOne = () => {
    fs.readFileSync("src/components/server-component-one.tsx", "utf-8")
    return (
        <div>
            <h1> Serve component one</h1>
           <ClientComponentOne/>
           
        </div>
    )
}