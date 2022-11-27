import React from "react";
import {MapContainer, TileLayer, Marker} from "react-leaflet";

const MapLeaflet = ({ position }) => {
  return (
    <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </MapContainer>
  );
};

export default MapLeaflet;
