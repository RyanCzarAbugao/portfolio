import { useState, useEffect } from "react";
import PageTitle from "../Components/PageTitle";
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

function Dsas() {
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
      image: require("../assets/dsas/1.png"),
    },
    {
      image: require("../assets/dsas/2.png"),
    },
    {
      image: require("../assets/dsas/3.png"),
    },
    {
      image: require("../assets/dsas/4.png"),
    },
    {
      image: require("../assets/dsas/5.png"),
    },
    {
      image: require("../assets/dsas/6.png"),
    },
    {
      image: require("../assets/dsas/7.png"),
    },
    {
      image: require("../assets/dsas/8.png"),
    },
    {
      image: require("../assets/dsas/9.png"),
    },
    {
      image: require("../assets/dsas/10.png"),
    },
    {
      image: require("../assets/dsas/11.png"),
    },
    {
      image: require("../assets/dsas/12.png"),
    },
    {
      image: require("../assets/dsas/13.png"),
    },
    {
      image: require("../assets/dsas/14.png"),
    },
    {
      image: require("../assets/dsas/15.png"),
    },
    {
      image: require("../assets/dsas/16.png"),
    },
    {
      image: require("../assets/dsas/17.jpg"),
    },
    {
      image: require("../assets/dsas/18.jpg"),
    },
    {
      image: require("../assets/dsas/19.jpg"),
    },
    {
      image: require("../assets/dsas/20.jpg"),
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
        <h3 style={{ margin: '0' }}>DSAS</h3>
        <p style={{ color: "gray", fontStyle: "italic" }}>(Development of Smart Attendance System)</p>
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
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  );
}

export default Dsas;
