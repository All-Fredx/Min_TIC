import "./Card.css"
import { Link } from "react-router-dom";

function Card({titulo="titulos", description="descriptions",imagen="imagenes" }){

    return (
        <div className="Card">            
            {/*<img src={imagen} alt="Imagen"/>*/}
            <Link to={titulo}>
            <h2>{titulo}</h2>
            </Link>
            <p>{description}</p>
        </div>
    )
};

export default Card;