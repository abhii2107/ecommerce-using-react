import { HeroSection } from "../components/HeroSection"

export const Home = () => {
    const data = {
        name: "XYZ STORE",
    }
    return (
        <>
            <HeroSection myData = {data}/>

        </>
    )
}