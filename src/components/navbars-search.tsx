"use client"

import { useState } from "react";

export const NavbarsPageSearch = () => {

    const [search, setSearch] = useState("")
    console.log(`Nav search Rendered`);

    return( 
        <div>
            <button>
                search...
            </button>
        </div>
    )
    
}