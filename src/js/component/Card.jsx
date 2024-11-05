import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Card = (props) => {
    const { store, actions } = useContext(Context);
    const imgURL = store.imagesURL + props.category + '/' + props.index + '.jpg'

    let isFav = false
    const clickFav = async () => {
        isFav = !isFav
        console.log(isFav)
    }

    return (
        <div id={crypto.randomUUID()} className="card bg-dark border border-warning p-0" style={{ width: "18rem" }}>
            <img src={imgURL} className="card-img-top" alt="..." style={{ maxHeight: "18rem" }} onError={(event) => {
                event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
            }} />
            <div className="card-body text-light">
                <h5 className="card-title">{props.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to="/detail">
                        <button type="button" className="btn btn-outline-primary">Learn more!</button>
                    </Link>
                    <button type="button" className={`btn btn-outline-warning ${isFav ? "text-danger" : ""}`} onClick={clickFav}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
            </div>
        </div>

    )
};