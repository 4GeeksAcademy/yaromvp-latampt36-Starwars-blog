import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from 'react-router-dom';

export const Planets = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    const imgURL = store.imagesURL + 'planets/' + params.id + '.jpg'

    const showProperties = () => {
        return (<div className="row d-flex justify-content-evenly text-center text-danger fs-5">
            <div className="col-md-2">
                <strong>Name</strong><br />{store.detailInfo.result?.properties.name}
            </div>
            <div className="col-md-2">
                <strong>Climate</strong><br />{store.detailInfo.result?.properties.climate}
            </div>
            <div className="col-md-2">
                <strong>Gravity</strong><br />{store.detailInfo.result?.properties.gravity}
            </div>
            <div className="col-md-2">
                <strong>Diameter</strong><br />{store.detailInfo.result?.properties.diameter}
            </div>
            <div className="col-md-2">
                <strong>Population</strong><br />{store.detailInfo.result?.properties.population}
            </div>
            <div className="col-md-2">
                <strong>Terrain</strong><br />{store.detailInfo.result?.properties.terrain}
            </div>
        </div>)
    }

    useEffect(() => {
    }, [])

    return (
        <div className="bg-dark" style={{ height: "100vh" }}>
            <div className="container py-3">
                <div className="row d-flex">
                    <div className="col-md-6 d-flex align-items-center">
                        <img className="rounded" src={imgURL} alt="" height="364px" onError={(event) => {
                            event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }} />
                    </div>
                    <div className="d-flex flex-column text-light text-center col-md-6 fs-5">
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