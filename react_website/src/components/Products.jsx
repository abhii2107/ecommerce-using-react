import { NavLink } from "react-router-dom"
import { FormatPrice } from "../Helpers/FormatPrice"

export const Products = ({ id, title, thumbnail, price, category }) => {
    return (
        <NavLink to={`/singleproduct/${id}`} className="card" aria-label={title}>
            <figure>
                <img src={thumbnail} alt={title} />
                <figcaption className="caption">{category}</figcaption>

                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{title}</h3>
                        <p className="card-data--price">{<FormatPrice price = {price}/>}</p>
                    </div>
                </div>
            </figure>
        </NavLink>
    )
}