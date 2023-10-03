import { useState } from "react";
import { Link } from "react-router-dom";
import useonoffInternet from "../Utils/ISoffline";
import Cart from "./Cart";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESsGm92deQDTJR9fiWcHZ8S94NCmFLSkkQg&usqp=CAU"
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedin, setisLoggedin] = useState(false);

  const title = "Food Villa";

  const Internet = useonoffInternet();
  return (
    <div className="header">
      <Title />

      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <Link to={"/"}>
            <li> Home </li>
          </Link>

          <Link to={"about"}>
            <li>About</li>
          </Link>

          <li>
            <Link to={"contact"}>Contact</Link>
          </li>
          

          <li>
            <Link to={"instamart"}>Instamart</Link>
          </li>
          
            <li onClick={() => {
               console.log("hello");;
            }}>Cart</li>
          
        </ul>
      </div>
      <h5>{Internet ? "on" : "off"}</h5>
      <>
        {isLoggedin ? (
          <button
            className="login-btn"
            onClick={() => {
              setisLoggedin(false);
            }}
          >
            Login
          </button>
        ) : (
          <button
            className="login-btn"
            onClick={() => {
              setisLoggedin(true);
            }}
          >
            Logout
          </button>
        )}
      </>
    </div>
  );
};

export default Header;
