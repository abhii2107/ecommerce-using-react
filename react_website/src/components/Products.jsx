import { NavLink } from "react-router-dom"

export const Products = ({ id, title, image, price, category }) => {
    return (
        <NavLink to={`/singleproduct/${id}`} className="card" aria-label={title}>
            <figure>
                <img src={image} alt={title} />
                <figcaption className="caption">{category}</figcaption>

                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{title}</h3>
                        <p className="card-data--price">${price}</p>
                    </div>
                </div>
            </figure>
        </NavLink>
    )
}