import React from "react";
import "./single-page.scss";
import Slider from "../../components/slider/slider";
import { singlePostData, userData } from "../../lib/dummy-data";
import Map from "../../components/map/map";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">${singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical"></div>
          <p className="sizes">Sizes</p>
          <div className="sizes"></div>
          <p className="nearbyPlaces">nearbyPlaces</p>
          <div className="listHorizontal"></div>
          <p className="location">location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              <span>Send a Message</span>
            </button>
            <button>
              <img src="/save.png" alt="" />
              <span>Save the Place</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
