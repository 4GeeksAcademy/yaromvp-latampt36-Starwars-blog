import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from 'react-router-dom';

export const Characters = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    const imgURL = store.imagesURL + 'characters/' + params.id + '.jpg'

    const showProperties = () => {
        return (<div className="row d-flex justify-content-evenly text-center text-danger fs-5">
            <div className="col-md-2">
                <strong>Name</strong><br />{store.detailInfo.result?.properties.name}
            </div>
            <div className="col-md-2">
                <strong>Birth Year</strong><br />{store.detailInfo.result?.properties.birth_year}
            </div>
            <div className="col-md-2">
                <strong>Gender</strong><br />{store.detailInfo.result?.properties.gender}
            </div>
            <div className="col-md-2">
                <strong>Height</strong><br />{store.detailInfo.result?.properties.height}
            </div>
            <div className="col-md-2">
                <strong>Skin Color</strong><br />{store.detailInfo.result?.properties.skin_color}
            </div>
            <div className="col-md-2">
                <strong>Eye Color</strong><br />{store.detailInfo.result?.properties.eye_color}
            </div>
        </div>)
    }

    useEffect(() => {
    }, [])

    return (
        <div className="bg-dark" style={{ height: "100vh" }}>
            <div className="container py-3">
                <div className="row d-flex">
                    <div className="col-md-4 d-flex align-items-center">
                        <img className="rounded" src={imgURL} alt="" height="364px" onError={(event) => {
                            event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }} />
                    </div>
                    <div className="d-flex flex-column text-light text-center col-md-8 fs-5">
                        <h1>{store.detailInfo.result?.properties.name}</h1>
                        <p>{store.detailInfo.result?.description}</p>
                    </div>
                </div>
                <hr class="border border-danger border-2 opacity-50" />
                {showProperties()}
            </div >
        </div>
    );
};