import { NavLink } from "react-router-dom";
import { FormatPrice } from "../Helpers/FormatPrice";

export const ListView = ({ products }) => {
  return (
    <div className="listview">
      <div className="container grid">
        {
          products.map((currElem) => {
            const { id, title, image, price, description } = currElem;

            return (
              <div className="card grid grid-two-column" key={id}>
                <figure>
                  <img src={image} alt={title} />
                </figure>

                <div className="card-data">
                  <h3>{title}</h3>
                  <p><FormatPrice price={price} /></p>
                  <p>{description.slice(0, 90)}...</p>

                  <NavLink to={`/singleproduct/${id}`}>
                    <button className="btn">Read More</button>
                  </NavLink>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
