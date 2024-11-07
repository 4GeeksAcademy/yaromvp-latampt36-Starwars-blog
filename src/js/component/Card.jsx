import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Card = (props) => {
    const { store, actions } = useContext(Context);
    const [isFav, setIsFav] = useState(false);
    const navigate = useNavigate()
    const imgURL = store.imagesURL + props.category + '/' + props.index + '.jpg'

    const clickLearnMore = () => {
        if (props.category == 'characters') {
            actions.getDetail(props.index, 'people')
        } else {
            actions.getDetail(props.index, props.category)
        }
        //navigate(`/${props.category}/${props.index}`)
    }

    const clickFav = async () => {
        setIsFav(!isFav);
        isFav ? actions.addFav(props.index, props.category) : null //actions.deleteFav()
        console.log(store.favorites.lenght)
    }

    return (
        <div id={crypto.randomUUID()} className="card bg-dark border border-warning p-0" style={{ width: "18rem" }}>
            <img src={imgURL} className="card-img-top" alt="..." style={{ objectFit: 'fill' }} onError={(event) => {
                event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                event.target.style.height = '286px'
                event.target.style.width = '286px'
            }} />
            <div className="card-body text-light">
                <h5 className="card-title">{props.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/${props.category}/${props.index}`}>
                        <button type="button" className="btn btn-outline-primary" onClick={clickLearnMore}>Learn more!</button>
                    </Link>
                    <button type="button" className={`btn btn-outline-warning ${isFav == true ? "text-danger" : ""}`} onClick={clickFav}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
            </div>
        </div>

    )
};