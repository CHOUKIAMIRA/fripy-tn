import React from "react";
import Exemple from "../../components/Home/Exemple";

import ImageSlider from "../../components/Home/ImageSlider";
import Footer from "../../components/Footer";
import Semaine from "../../components/Home/Semaine";
import Navig from "../../components/Home/Navig";
import Marque from "../../components/Home/Marque";
import "../../App.css";
import Image from "../../components/Home/Image";
import Hero from "../../components/Home/Hero";
function Acceuil() {
  return (
    <div>
      <div className="pos1">
       
        <Exemple />
      </div>
      <div className="pos2">
        <Navig />
      </div>
      <div className="pos3">
  
        <Image />
      </div>
      <div className="pos2">
  
  <Hero />
</div>
      <div  className="pos2" >
        <Semaine />
      </div>
      <div className="pos2">
        <Marque />
      </div>
      {/* <div>
        
        <Footer className="pos2"/>
      </div> */}
    </div>
  );
}

export default Acceuil;
