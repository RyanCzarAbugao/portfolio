import { useState, useEffect } from "react";
import PageTitle from "../Components/PageTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

const container_lg = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  margin: "0 2rem",
};

const preview = {
    objectFit: 'cover'
};

function Slpmcs() {    
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div style={!matches ? container : container_lg}>
      <PageTitle page_name="Projects" />      
      <h3>SLPMCS ( Stress Level of Plants Monitoring and Control System )</h3>

      <div style={{ margin: "auto 0", minHeight: '500px' }}>
        <Carousel showArrows={true}>
          <div>
            <img src={require("../assets/slpmcs/1.jpg")} style={preview} alt="" />
            <p className="legend">1</p>
          </div>
          <div>
            <img src={require("../assets/slpmcs/2.jpg")} style={preview} alt="" />
            <p className="legend">2</p>
          </div>
          <div>
            <img src={require("../assets/slpmcs/3.jpg")} style={preview} alt="" />
            <p className="legend">3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Slpmcs;
