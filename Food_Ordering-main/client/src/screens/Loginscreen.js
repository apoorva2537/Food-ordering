import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div className="login">
      <div className=" row justify-content-center mt-5 " >
        <div className="flex flex-col justify-center items-center 
        col-md-5 mt-5 text-left shadow-lg p-3 mb-5 rounded"
        style={{backgroundColor : '#3a4b53'}}>
          <h2 className="text-center m-2" style={{ fontSize: "35px", color:"white" }}>
            Login
          </h2>

          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}

          <div className="flex flex-col justify-center ">
            <input
              required
              type="email"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              className="form-control mb-3"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <div className="bg-orange-600 flex items-center justify-center m-auto rounded w-100
            hover:bg-orange-500">
            <button onClick={login} className="bg-orange-600 btn">
              LOGIN
            </button>
            </div>
            <br />
            <a style={{ color: "white" }} href="/register" className="mt-2 hover:no-underline">
              Not Logged in yet! <span className="text-bold text-orange-600 hover:underline">Register Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
