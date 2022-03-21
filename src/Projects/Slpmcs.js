import { useState, useEffect } from "react";
import PageTitle from "../Components/PageTitle";
import React from "react";
import { Carousel } from "react-carousel-minimal";

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

function Slpmcs() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const images = [
    {
      image: require("../assets/slpmcs/1.jpg"),
    },
    {
      image: require("../assets/slpmcs/2.jpg"),
    },
    {
      image: require("../assets/slpmcs/3.jpg"),
    },
    {
      image: require("../assets/slpmcs/4.jpg"),
    },
    {
      image: require("../assets/slpmcs/5.jpg"),
    },
    {
      image: require("../assets/slpmcs/6.jpg"),
    },
    {
      image: require("../assets/slpmcs/7.jpg"),
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div style={!matches ? container : container_lg}>
      <PageTitle page_name="Projects" />

      <div style={{ margin: "auto 0", textAlign: "center" }}>
        <h3 style={{ margin: '0' }}>SLPMCS</h3>
        <p style={{ color: "gray", fontStyle: "italic" }}>(Stress Level of Plants Monitoring and Control System)</p>
        <Carousel
          data={images}
          time={2000}
          width="850px"
          height="500px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="contain"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto"
          }}
        />
      </div>
    </div>
  );
}

export default Slpmcs;
