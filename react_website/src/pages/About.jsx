import { useContext } from "react"
import { HeroSection } from "../components/HeroSection"
import { AppContext, useProductContext } from "../context/ProductContext"

export const About = () => {

    const {myName} = useProductContext()
    const data = {
        name: "XYZ E-Commmerce",
    }


    return(
        <>
            {myName}
            <HeroSection myData = {data}/>
        
        </>
    )
}