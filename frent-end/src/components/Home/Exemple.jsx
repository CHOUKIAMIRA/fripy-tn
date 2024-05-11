import React from "react";
import "../../App.css";
import imgLogo from "../../assets/logofripy.png";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";



function Exemple() {
  return (
  
      <div >
        <div className="container-navbar">
        <div className="logo">
          <a className="navbar-brand">
            <img
              src={imgLogo}
              alt="logo"
              style={{ width: "170px", height: "100px" }}
            />
          </a>
        </div>
        <div className="search">
 <table>
  <tr>
    <td><i className="fa fa-search" style={{ fontSize: "20px", color: "red" }} /></td>
    <td> <input className="search-input"></input></td>
  </tr>
 </table>
</div>
        <div className="panier">
          <div>
            <a className="heart-icon" title="favoris">
              <FaRegHeart  style={{ fontSize: "25px", color: "red" }} />
            </a>
            <span className="tooltip">favoris</span>
          </div>

          <div>
            <Link to="/log-in" className="heart-icon" title="panier">
              <FiShoppingCart style={{ fontSize: "25px", color: "red" }} />
            </Link><span className="tooltip">panier</span>
            <span className="nb-panier">10</span>
          </div>
        </div>
        <div className="logsign">
         <Link to="/sign-up" ><button className="log-sign sign">Sign Up</button></Link>
         <Link to="/log-in" ><button className="log-sign log">Log In</button></Link>
        </div>
        </div>
          
          </div>
  )
}
export default Exemple;