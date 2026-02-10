import fs from 'fs'


export const ServerComponetTwo = () => {
    fs.readFileSync("src/components/server-component-two.tsx", "utf-8")
    return (
        <div>
            <h1> Serve component Two</h1>
          
        </div>
    )
}