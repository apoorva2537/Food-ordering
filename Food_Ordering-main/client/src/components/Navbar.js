import React from "react";
import logo from "../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const isAdmin = currentUser?.isAdmin;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="flex justify-center items-center bg-[#344349] text-slate-100 navbar navbar-expand-lg shadow-lg p-3 mb-5 rounded">
        <a className="navbar-brand" href="/">
          <img 
          src={logo} alt="pizza-logo" 
          className="h-20 w-20"></img>
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i style={{ color: "white" }} className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <div className="dropdown mt-2 p-auto m-auto">
                <a
                  style={{ color: "white" }}
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <div
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuButton"
                >
                  {isAdmin ? (
                    <li className="nav-item">
                      <a className="dropdown-item" href="/admin">
                        Dashboard
                      </a>
                    </li>
                  ) : null}
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item p-auto m-auto ">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

              {/* <li className="nav-item p-auto m-auto ">
                <a className="nav-link" href="/home">
                  Menu
                </a>
              </li> */}

            <li className="nav-item ">
             
             
              <a className=" nav-link " href="/cart">
              <div className=' flex pr-3 m-3 rounded-full bg-orange-600 text-slate-100 w-20 hover:bg-orange-500'>
                <div className="flex pl-3 pr-3 pt-2 pb-2">
                <img src="https://raw.githubusercontent.com/codersgyan/realtime-pizza-app-node-express-mongo/master/public/img/cart.png"></img>

                <span className="pl-2">{cartstate.cartItems.length} </span>
                </div>
                </div>
              </a>
              
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
