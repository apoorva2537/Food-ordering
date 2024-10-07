import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }

  const payNow = ()=>{
    alert("Order Placed !!! ");
  }

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order Placed Successfully" />}
      
         <div className="bg-orange-600 text-center rounded-full w-1/2 m-auto">
           <button className="btn " onClick={payNow}>Pay Now</button>
           </div> 

    </div>
  );
}
