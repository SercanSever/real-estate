import React, { useContext } from "react";
import SearchBar from "../../components/searchbar/searchbar";
import { AuthContext } from "../../context/auth-context.js";
import "./home-page.scss";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis harum quaerat porro ipsum, dignissimos veritatis
            blanditiis ratione vitae ipsa cum consequatur fuga quas, debitis
            deserunt omnis aperiam pariatur facere sed.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
