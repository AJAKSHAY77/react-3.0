import { useState } from "react";

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
const[isLoggedin,setisLoggedin]=useState(false)

  const title = "Food Villa";
  return (
    <div className="header">
      <Title />

      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      <>
        {(isLoggedin) ? (
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
