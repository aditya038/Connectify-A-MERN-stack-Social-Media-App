import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const loading = useSelector((state) => state.authReducer.loading)
  const [isSignup, setIsSignup] = useState(true);
  const dispatch = useDispatch();
  console.log(loading)
  const [confirmPass, setConfirmPass] = useState(true)

  const [data, setData] = useState({firstname: "", lastname: "", username: "", password: "", confirmpass: ""});

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignup) {
      data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
    }
    else {
      dispatch(logIn(data))
    }

  }

  const resetForm = () => {
    setConfirmPass(true);
    setData({firstname: "", lastname: "", username: "", password: "", confirmpass: ""})
  }

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Connectify </h1>
          <h6>Connecting people anywhere and everywhere</h6>
        </div>
      </div>

      <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{isSignup ? "Sign up" : "Log In"}</h3>

      { isSignup && (
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            onChange={handleChange}
            value={data.firstname}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            onChange={handleChange}
            value={data.lastname}
          />
        </div>
  )}
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
            onChange={handleChange}
            value={data.username}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={data.password}
          />

          { isSignup && 
          <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={handleChange}
          /> }
        </div>
            <span style={{display: confirmPass? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px"}}>Confirm Password is not same</span>
        <div>
            <span style={{fontSize: '12px', cursor : "pointer"}} onClick={() => {setIsSignup((prev)=> !prev ); resetForm()}}>{isSignup ? "Already have an account. Login!" : "Don't have an account? Sign Up" }</span>
        </div>
        <button className="button infoButton" type="submit" disabled = {loading}>{loading? "Loading..." : isSignup? "Signup" : "Log In"}</button>
      </form>
    </div>

    </div>
  );
};


export default Auth;
