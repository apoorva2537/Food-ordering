import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Landingscreen() {
  return (
    <>
      <div className="color-slate-900 text-slate-100">
        <div className=" flex ">
          <div className="flex flex-col justify-center align-center m-auto">
            <p className="text-8xl font-bold text-orange-600">Hungry?</p>
            <p className="text-4xl font-medium">
              {" "}
              Grab your Pizza Now with{" "}
              <span className="font-bold text-orange-600">Pizzap</span> :)
            </p>
            <Link
              to="/home"
              className=" text-red-100 flex justify-center  hover:decoration-none"
            >
              {" "}
              <button className="text-center rounded-full p-6 bg-orange-600 hover:bg-orange-400 text-red-100 text-xl font-bold">
                {" "}
                Explore Menu
              </button>
            </Link>
          </div>
          <img
            className="m-auto "
            src="https://raw.githubusercontent.com/codersgyan/realtime-pizza-app-node-express-mongo/master/public/img/pizza.png"
            alt="poster"
          ></img>
        </div>

        <div></div>
        <div className="mt-5 flex justify-center bg-slate-100">
          <img src="https://www.pizzahutbd.com/attached_images/deals/8/Double-Deal---OLO-Banner-Jan-10.jpg"></img>
        </div>
      </div>
    </>
  );
}
