import { Work } from "../svg/iconsSvg"
import { Article } from "./Article"

import "./Main.css"

export const Main = () =>{

  return(
        <main  >
        <h2>
         <span>
           <Work />
         </span>
         Proyectos
         </h2>
        <Article />
        <Article />
   
       </main>
    )
}