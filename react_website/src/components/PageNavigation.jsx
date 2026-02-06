import { NavLink } from "react-router-dom";

export const PageNavigation = ({title}) => {
    return(
        <>
              
        <NavLink to="/">Home</NavLink>{title}
        
        </>
    )
};