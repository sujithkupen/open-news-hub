import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../constants/constants";

const NavBar=()=>{
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const navigate=useNavigate();
  return (
    <>
      <nav>
        <Link to="/" className="nav-links">
          OpenNewsHub
        </Link>
        <div>
          <Link to="/" className="nav-links">
            Home
          </Link>
          {authToken && (
            <Link to="/create" className="nav-links">
              Create
            </Link>
          )}

          {authToken ? (
            <div
              className="nav-links"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                navigate("/");
              }}
            >
              Logout
            </div>
          ) : (
            <Link to="/login" className="nav-links">
              Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
