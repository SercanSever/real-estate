import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { useNotificationStore } from "../../lib/notificationstore";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);
  if (currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo.png" />
          <span> RQ</span>
        </a>
        <a href="/">Home</a>
        <a href="/list">Properties</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign In</a>
            <a href="/register" className="register">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src={open ? "/close.png" : "/menu.png"}
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/list">Properties</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/login">Sign In</a>
          <a href="/register">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
