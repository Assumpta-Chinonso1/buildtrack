"use client"


import { useAuth } from "@clerk/nextjs";
import { useState, 
//    useUser
 } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const {isLoaded, userId,
        // sessionId, getToken
        } = useAuth()
     
    if(!isLoaded || userId) {
        return null
    }

//    const {isLoaded, isSignedIn, user} = useUser()

           return(
    <>

      <p>Count {count} </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
           )
}