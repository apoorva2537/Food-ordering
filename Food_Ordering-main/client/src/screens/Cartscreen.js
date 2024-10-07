import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";
import AOS from "aos";
import "aos/dist/aos.css";
import { Redirect } from "react-router-dom";
export default function Cartscreen() {
  AOS.init();
  const [redirect, setRedirect] = useState(false);
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();

  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { success } = orderstate;

  if (success) {
    localStorage.removeItem("cartItems");
    cartItems.map((item) => {
      dispatch(deleteFromCart(item));
    });
    setTimeout(() => {
      setRedirect(true);
    }, 2000);
  }
  if (redirect) {
    return <Redirect to="/orders" />;
  }
  return (
    <div>
      <div className=" text-slate-100 row justify-content-center p-2" data-aos="fade-down">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>

          {cartItems.map((item) => {
            return (
              <div className="flex items-center space-x-3 align-center outline-slate-800 bg-[#344349] rounded-full m-4">
                <div className="pl-10 pt-10 space-x-3 m-auto w-100">
                  <h1 className="">
                    {item.name} [{item.varient}]
                  </h1>
                  <h1 className="outline text-orange-600">
                    Price : {item.quantity} * {item.prices[0][item.varient]} ={" "}
                    {item.price}
                  </h1>
                  <h1 className="" style={{ display: "inline" }}>Quantity : </h1>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  ></i>
                  <hr />
                </div>

                <div className="flex justify-center items-center  w-100">
                  <img
                    src={item.image}
                    style={{ height: "80px", height: "80px" }}
                  />
                </div>
                <div className="m-1 w-100 ">
                  <i
                    className="fa fa-trash "
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "45px" }}>SubTotal : {subtotal} /-</h2>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
