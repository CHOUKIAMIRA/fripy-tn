import React from "react";
import semaine from "../../assets/semaine.png";
import { BiSolidStar } from "react-icons/bi";
import Jarb from "./Jarb";
import "../../App.css";
function Semaine() {
  const slides = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszCBniUIiayzZD7sjGxBor_CEsdKVa65wug0p-E7HEg&s",
      title: "This is a title 1",
      description: "This is a description",
      clickEvent: "sliderClick",
    },
    {
      image:
        "https://img.freepik.com/psd-gratuit/icone-rendu-3d-isometrique-boutique-ligne_47987-9072.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705708800&semt=ais",
      title: "This is a second title 2",
      description: "This is a second description",
      clickEvent: "sliderClick",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW9PyOflZU3DcoIsEOUKvuZw0FYmYSfok0H1Ubp8N_w&s",
      title: "This is a third title 3",
      description: "This is a third description",
      clickEvent: "sliderClick",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        mawWidth: "100vh",
        height: "360px",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "330px",
          marginLeft: "50px",
          borderRadius: "20px",
          boxShadow: "0 4px 8px 0 white, 0 6px 20px 0 black ",
        }}
      >
        <img
          src={semaine}
          style={{ width: "300px", height: "330px", borderRadius: "20px" }}
        />
      </div>
      <div>
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ width: "50px" }}>
            {" "}
            <BiSolidStar
              style={{ width: "30px", height: "30px", color: "red" }}
            />
          </div>
          <div style={{ width: "150px" }}>
            <h2>A la une</h2>
          </div>
          <br />
        </div>
        <div style={{ marginTop: "30px" }}>
          <Jarb />{" "}
        </div>
      </div>
    </div>
  );
}

export default Semaine;
