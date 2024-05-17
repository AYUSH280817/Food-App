

import { Link } from "react-router-dom";
import { LOGO_URL } from "../utilis/constants";
import React, { useContext, useState } from 'react';
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
//   const onlinestatus = useOnlineStatus();
  const { loggedINUser } = useContext(UserContext);
  const [btname, setBtname] = useState("Login");

  // subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex bg-red-300 justify-between">
      <div id="img_container">
        <img className='w-20' src={LOGO_URL} alt="Logo" />
      </div>
      <div id="nav-item" className="flex items-center">
        <ul className="flex p-8 m-4 gap-8">
          {/* <li>
            Online Status: {onlinestatus ? (
              <img className="w-4" src="/path/to/online-icon.png" alt="Online" />
            ) : (
              <img className="w-4" src="/path/to/offline-icon.png" alt="Offline" />
            )}
          </li> */}
          
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-bold">Cart ({cartItems.length} items)</li>
          <li>
            <button
              id="login"
              onClick={() => {
                setBtname(btname === "Login" ? "LogOut" : "Login");
              }}
            >
              {btname}
            </button>
          </li>
          <li className="font-bold">{loggedINUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
