import { HeroSection } from "../components/HeroSection"
import { Services } from "../components/Services"
import { Trusted } from "../components/Trusted"

export const Home = () => {
    const data = {
        name: "XYZ STORE",
    }
    return (
        <>
            <HeroSection myData = {data}/>
            <Services/>
            <Trusted/>

        </>
    )
}