import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import "./profilePage.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/api-request";

function ProfilePage() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      localStorage.removeItem("user");
      const response = await apiRequest.post("/auth/logout");
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              Email: <b>john@gmail.com</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
            {error && <span className="error">{error}</span>}
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
