import React, { useState } from "react";
import imgLogo from "../assets/logofripy.png";
import imgback from "../assets/signUp.png";
import { Link } from "react-router-dom";
import "../App.css";
function SignUp() {
  const [state, setState] = useState(true);
  return (
    <div style={{ display: "flex", marginTop: "10px" }}>
      <div
        style={{
          width: "500px",
          marginTop: "80px",
          height: "auto",
          marginLeft: "180px",
          border: "2px #ccc solid",
        }}
      >
        <img src={imgLogo} />
        <br />

        <h3 style={{ marginLeft: "150px" }}>Connexion </h3>
        <br />

        <form>
          <div className="input-container">
            <input
              placeholder="Email"
              className="input-field"
              type="text"
              required
            />
            <label htmlFor="input-field" className="input-label">
              Email
            </label>
            <span className="input-highlight" />
          </div>
          <br />

          <div className="input-container">
            <input
              placeholder="Password"
              className="input-field"
              type="text"
              required
            />
            <label htmlFor="input-field" className="input-label">
             Password
            </label>
            <span className="input-highlight" />
          </div>
          <br />

          {state ? (
            <div>&nbsp; </div>
          ) : (
            <div>
              <div className="input-container">
                <input
                  placeholder="Nom"
                  className="input-field"
                  type="text"
                  required
                />
                <label htmlFor="input-field" className="input-label">
                  Nom *
                </label>
                <span className="input-highlight" />
              </div>
              <br />

              <div className="input-container">
                <input
                  placeholder="Prénom"
                  className="input-field"
                  type="text"
                  required
                />
                <label htmlFor="input-field" className="input-label">
                Prénom *
                </label>
                <span className="input-highlight" />
              </div>
              <br />

              <div className="input-container">
                <input
                  placeholder="Nom de la boutique"
                  className="input-field"
                  type="text"
                  required
                />
                <label htmlFor="input-field" className="input-label">
                Nom de la boutique *
                </label>
                <span className="input-highlight" />
              </div>
              <br />

              <div className="input-container">
                <input
                  placeholder="Numéro de téléphone"
                  className="input-field"
                  type="text"
                  required
                />
                <label htmlFor="input-field" className="input-label">
                Numéro de téléphone *
                </label>
                <span className="input-highlight" />
              </div>
              <br />

              <table style={{ marginLeft: "10px" }}>
                <tr>
                  <td>
                    <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                  </td>
                  <td>&nbsp;&nbsp;</td>
                  <td>J'accepte les Termes & Conditions.</td>
                </tr>
              </table>
              <br />
            </div>
          )}
          <table style={{ marginLeft: "40px" }}>
            <tr>
              <td>
                <input
                  className="br"
                  type="radio"
                  value={true}
                  name="option"
                  checked={state}
                  onChange={(e) => setState(e.target.value === "true")}
                />
              </td>
              <td>&nbsp;&nbsp;</td>
              <td style={{ paddingBottom: "12px" }}>je suis un client</td>
            </tr>
            <tr>&nbsp;</tr>
            <tr>
              <td>
                <input
                  className="br"
                  type="radio"
                  value={false}
                  name="option"
                  checked={!state}
                  onChange={(e) => setState(e.target.value === "true")}
                />
              </td>
              <td>&nbsp;&nbsp;</td>
              <td style={{ paddingBottom: "12px" }}>je suis un vendeur</td>
            </tr>
          </table>
          <br />
          <br />
          <button className="button" style={{ marginLeft: "150px" }}>se connecter</button>
          {/* <button style={{ marginLeft: "150px" }}>se connecter</button> */}
        </form>
      </div>

      <div style={{ width: "800px", height: "700px" }}>
        <Link
          to="/log-in"
          style={{
            marginLeft: "740px",
            textDecoration: "none",
            color: "black",
            fontSize: "18px",
          }}
        >
          Log In
        </Link>
        <br />
        <br />
        <br />
        <img
          src={imgback}
          style={{ width: "600px", height: "600px", marginLeft: "140px" }}
        />
      </div>
    </div>
  );
}

export default SignUp;
