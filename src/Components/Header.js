import { useState } from "react";
import { Link } from "react-router-dom";
import useonoffInternet from "../Utils/ISoffline";
import Cart from "./Cart";
import { useContext } from "react";
import Usercontext from "../Utils/UserContext";
import { useSelector } from "react-redux";


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
  const { code } = useContext(Usercontext);


  const title = "Food Villa";

  const cartitems = useSelector(store => store.cart.item)
  console.log(cartitems);

  const Internet = useonoffInternet();
  return (
    <div className="header">
      <Title />

      {/* <h1>{title}</h1> */}
      <div className="nav-items mt-5">
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

          <Link to={"cart"}>
            <li>Cart-{cartitems.length}</li>
          </Link>
        </ul>
      </div>
      {/* <h5>{Internet ? "on" : "off"}</h5> */}
      <>
        {/* this is for react context demo */}
        {/* <h1 className="text-red-400">{code.name}</h1> */}
        {isLoggedin ? (
          <button
            className="login-btn bg-green-500 font-bold h-10 mt-5 mr-3 p-4 py-2 rounded-lg text-black"
            onClick={() => {
              setisLoggedin(false);
            }}
          >
            Login
          </button>
        ) : (
          <button
            className="login-btn  bg-green-500 h-10 font-bold mt-5 mr-3 p-4 py-2  rounded-lg text-black"
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
