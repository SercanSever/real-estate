import "./about-page.scss";
import React from "react";

function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="textContainer">
        <h1 className="title">About Our Real Estate Platform</h1>
        <p className="description">
          We are dedicated to revolutionizing the real estate industry by
          providing a seamless, transparent, and efficient platform for property
          transactions. Our mission is to connect property seekers with their
          dream homes and help property owners find the right buyers or tenants.
        </p>
        <p className="description">
          With years of experience in the real estate market, we understand the
          challenges and complexities of property transactions. That's why we've
          built a platform that simplifies the process while ensuring security
          and reliability at every step.
        </p>

        <div className="stats">
          <div className="stat">
            <span className="number">5000+</span>
            <span className="text">Properties Listed</span>
          </div>
          <div className="stat">
            <span className="number">2000+</span>
            <span className="text">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="number">150+</span>
            <span className="text">Cities Covered</span>
          </div>
        </div>

        <div className="team">
          <h2>Meet Our Team</h2>
          <div className="members">
            <div className="member">
              <img src="/user1.jpg" alt="Team Member" />
              <h3 className="name">John Doe</h3>
              <p className="role">Founder & CEO</p>
            </div>
            <div className="member">
              <img src="/user2.jpg" alt="Team Member" />
              <h3 className="name">Jane Smith</h3>
              <p className="role">Head of Operations</p>
            </div>
            <div className="member">
              <img src="/user3.jpg" alt="Team Member" />
              <h3 className="name">Mike Johnson</h3>
              <p className="role">Lead Developer</p>
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

export default AboutPage;
