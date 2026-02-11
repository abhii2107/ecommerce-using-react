
import { Products } from "./Products"

export const GridView = ({ products }) => {

    return (
        <div className="GridView">
            <div className="container grid grid-three-column">
                {
                    products.map((currElem) => {
                        return <Products key={currElem.id}{...currElem} />
                    })
                }

            </div>
        </div>
    )

}