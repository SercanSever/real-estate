import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/pin";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = ({ items }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={7}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
};

export default Map;
