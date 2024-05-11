import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEyeSlash } from 'react-icons/fa';
import imgLogo from '../assets/logofripy.png';
import imgback from '../assets/signUp.png';
import "../App.css";
function LogIn() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "800px", height: "700px" }}>
        <Link to="/sign-up" style={{ textAlign: "right", textDecoration: "none", color: "black", fontSize: "18px" }}>Sign Up</Link><br /><br /><br />
        <img src={imgback} style={{ width: "600px", height: "600px", marginLeft: "60px" }} />
      </div>
      <div style={{
        width: "450px", marginTop: "60px", height: "600px", marginLeft: "60px",
        boxShadow: "0 4px 8px 0 white, 0 6px 20px 0 black "
      }}>
        <img src={imgLogo} style={{}} /><br /><br /><br />
        <h3 style={{ marginLeft: "150px" }}>Connexion </h3><br /><br />
        <form >
          <div className="input-container">
            <input placeholder="Email" className="input-field" type="text" />
            <label htmlFor="input-field" className="input-label">
              Email
          </label>
            <span className="input-highlight" />
          </div>
          <br />
          {show ?
            <div className="input-container">
              <input placeholder="Password" className="input-field" type="password" />
              <label htmlFor="input-field" className="input-label">
                 Password
            </label>
              <span className="input-highlight"></span>
            </div> :
            <div className="input-container">
              <input placeholder="Password" className="input-field" type="text" />
              <label htmlFor="input-field" className="input-label">
                 password
            </label>
              <span className="input-highlight"></span>
            </div>
          }
          <a className="show-hide-password" onClick={handleClick}><FaRegEyeSlash style={{ color: "black", fontSize: "23px" }} /></a>
          <br /><br /><br /><br />
          <button className="button" style={{ marginLeft: "150px" }}>se connecter</button>
        </form>
      </div>
    </div>
  )
}

export default LogIn;
