


import { NavbarsPageLinks } from "./navbars-links";
import { NavbarsPageSearch } from "./navbars-search";



export const NavbarsPage = () => {
  
   console.log(`Navbars Rendered`);
   
    return(
        <div>

           <NavbarsPageLinks/>
           <NavbarsPageSearch/>

        </div>
    )
    
}