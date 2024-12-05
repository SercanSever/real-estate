import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import "./profilePage.scss";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/api-request";
import { AuthContext } from "../../context/auth-context";

function ProfilePage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      updateUser(null);
      const response = await apiRequest.post("/auth/logout");
      if (response.status === 200) navigate("/login");
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
              <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              Email: <b>{currentUser.email}</b>
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
