import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./pin.scss";

const Pin = ({ item }) => {
  return (
    <Marker className="pin" position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.images} alt="" />
          <div className="textContainer">
            <Link className="title" to={`/${item.id}`}>
              {item.title}
            </Link>
            <span>
              {item.bedroom} {item.bedroom > 1 ? "bedrooms" : "bedroom"}
            </span>
            <b>${item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
