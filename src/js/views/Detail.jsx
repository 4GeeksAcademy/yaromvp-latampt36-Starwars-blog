import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Detail = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="bg-dark">
            <div className="container py-3">
                <div className="row d-flex">
                    <div className="col-md-6 d-flex align-items-center">
                        <img className="rounded" src="https://picsum.photos/800/600" alt="" width="100%" />
                    </div>
                    <div className="d-flex flex-column text-light text-center col-md-6 fs-5">
                        <h1>Luke Skywalker</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore fugiat officia sint dolores veritatis praesentium consequatur, debitis, tenetur itaque, atque labore id nemo officiis incidunt iure nobis beatae esse vel!<br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore fugiat officia sint dolores veritatis praesentium consequatur, debitis, tenetur itaque, atque labore id nemo officiis incidunt iure nobis beatae esse vel!</p>
                    </div>
                </div>
                <hr />
                <div className="row d-flex justify-content-evenly text-center text-danger fs-5">
                    <div className="col-md-2">
                        <strong>Name</strong><br />Luke Skywalker
                    </div>
                    <div className="col-md-2">
                        <strong>Birth Year</strong><br />Luke Skywalker
                    </div>
                    <div className="col-md-2">
                        <strong>Gender</strong><br />Luke Skywalker
                    </div>
                    <div className="col-md-2">
                        <strong>Height</strong><br />Luke Skywalker
                    </div>
                    <div className="col-md-2">
                        <strong>Skin Color</strong><br />Luke Skywalker
                    </div>
                    <div className="col-md-2">
                        <strong>Eye Color</strong><br />Luke Skywalker
                    </div>
                </div>
            </div >
        </div>
    );
};