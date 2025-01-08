import "./contact-page.scss";
import React, { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import apiRequest from "../../lib/api-request";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await apiRequest.post("/mailSender/send", formData);
    if (res.status === 200) {
      alert("Email sent successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contactPage">
      <div className="textContainer">
        <h1 className="title">Get in Touch</h1>
        <p className="description">
          Have questions about our properties or services? We're here to help!
          Contact us using the form below or reach out through our contact
          information.
        </p>

        <div className="contactInfo">
          <div className="infoItem">
            <MdEmail />
            <span>contact@realestate.com</span>
          </div>
          <div className="infoItem">
            <MdPhone />
            <span>+1 234 567 8900</span>
          </div>
          <div className="infoItem">
            <MdLocationOn />
            <span>123 Real Estate St, City</span>
          </div>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default ContactPage;
