import { GoogleMap, LoadScript } from "@react-google-maps/api";

import React, { useEffect, useState } from 'react'

const Map = ({value,value2}) => {
    const mapStyles = {
        height: "20.5rem",
        width: "100%",
    };

    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation({ lat: latitude, lng: longitude });
            });
        }
    }, []);

    const divClassName = `flex-1 md:${value} ${value2}`;

    return (
        <div className={divClassName}>
            <LoadScript googleMapsApiKey="">
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={15}
                    center={currentLocation || { lat: 27.717245, lng: 85.323959 }} // Use current location if available, or default coordinates
                ></GoogleMap>
            </LoadScript>
        </div>
    )
}

export default Map