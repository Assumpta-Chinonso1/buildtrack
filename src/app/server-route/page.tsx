import { ServerSideFunction } from "@/utils/server-utils"

import { ImageSlider } from "@/components/ImageSlider";



export default function ServerRoutePage() {
    const result = ServerSideFunction()
  
  return (
  <>
  <h1>Server Page {result} </h1>
    <ImageSlider/>
  </>
 
  )
}