import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";

export const Detail = () => {
    const { store, actions } = useContext(Context);
    const [imgURL, setImgURL] = useState('');

    const getImgURL = () => {
        if (store.detailInfo.result?.properties.url.includes('people')) {
            setImgURL(store.imagesURL + 'characters/' + store.detailInfo.result?.uid + '.jpg')
            console.log("🔴", imgURL)
            return imgURL
        }
        if (store.detailInfo.result?.properties.url.includes('planets')) {
            setImgURL(store.imagesURL + 'planets/' + store.detailInfo.result?.uid + '.jpg')
            return imgURL
        }
        if (store.detailInfo.result?.properties.url.includes('vehicles')) {
            setImgURL(store.imagesURL + 'vehicles/' + store.detailInfo.result?.uid + '.jpg')
            return imgURL
        }
    }

    const showProperties = () => {
        if (store.detailInfo.result?.properties.url.includes('people')) {
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
        if (store.detailInfo.result?.properties.url.includes('planets')) {
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
        if (store.detailInfo.result?.properties.url.includes('vehicles')) {
            return (<div className="row d-flex justify-content-evenly text-center text-danger fs-5">
                <div className="col-md-2">
                    <strong>Name</strong><br />{store.detailInfo.result?.properties.name}
                </div>
                <div className="col-md-2">
                    <strong>Vehicle Class</strong><br />{store.detailInfo.result?.properties.vehicle_class}
                </div>
                <div className="col-md-2">
                    <strong>Cargo Capacity</strong><br />{store.detailInfo.result?.properties.cargo_capacity}
                </div>
                <div className="col-md-2">
                    <strong>Crew</strong><br />{store.detailInfo.result?.properties.crew}
                </div>
                <div className="col-md-2">
                    <strong>Passengers</strong><br />{store.detailInfo.result?.properties.passengers}
                </div>
                <div className="col-md-2">
                    <strong>Length</strong><br />{store.detailInfo.result?.properties.length}
                </div>
            </div>)
        }
    }

    useEffect(() => {
        let url = getImgURL()
        console.log("🟢", url)
    }, [])

    return (
        <div className="bg-dark">
            <div className="container py-3">
                <div className="row d-flex">
                    <div className="col-md-6 d-flex align-items-center">
                        <img className="rounded" src={getImgURL} alt="" width="100%" />
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