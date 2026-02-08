import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { MdNumbers } from "react-icons/md";

export const Stars = ({stars}) => {
    const ratingStar = Array.from({length:5},(elem,index) => {
        let number = index+0.5;
        return <span key={index}>
            {
                stars >= index+1 ? <FaStar className="icon"/> : stars >= number ? <FaStarHalfAlt className="icons"/> : <FaRegStar className="icon"/>
            }
        </span>
    })
    return(
        <>
            <div className="icon-style">
                {ratingStar}
            </div>
        
        
        </>
    )
}