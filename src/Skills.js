import { useState, useEffect } from "react";
import PageTitle from "./Components/PageTitle";
import illustration from "./assets/skills_illustration.jpg";

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
};

const logo_container = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  paddingBottom: "1rem",
};

const logo = {
  width: "3.5rem",
  margin: "1rem",
};

const card_rating = {
  display: "flex",
  margin: "0.5rem",
  minWidth: "15rem",
  borderRadius: "0.4rem",
  boxShadow: "0 0 10px -3px gray",
};

const caption = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
};

const title = {
  margin: "0.5rem 0",
};

const stars = {
  display: "flex",
  color: "orange",
};

const intro_container = {
  display: "flex",
  alignItems: "center",
  margin: '0 5rem'
};

function Skills() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div style={container}>
      <PageTitle page_name="Skills" />

      <div style={!matches ? {display: 'none'} : intro_container}>
        <img
          src={illustration}
          alt=""
          style={{width: "40%"}}
        />
        <p style={{ marginBottom: "2rem", marginLeft: "1rem" }}>
          Hello! Welcome to my simple and minimalistic portfolio, here are the
          list of my skills, I am confident with my skills and knowledge. I am
          continuosly learning new technologies in IT that can help me boost up
          my competency levels that can meet client's needs.{" "}
        </p>
      </div>

      <div style={{ margin: "auto 0" }}>
        <div style={logo_container}>
          <div style={card_rating}>
            <img
              src={require("./assets/codeigniter.png")}
              style={logo}
              alt=""
            />
            <div style={caption}>
              <h3 style={title}>Codeigniter</h3>
              <div style={stars}>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
            </div>
          </div>
          <div style={card_rating}>
            <img src={require("./assets/cpp.png")} style={logo} alt="" />
            <div style={caption}>
              <h3 style={title}>C++</h3>
              <div style={stars}>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
                <i className="bx bx-star"></i>
              </div>
            </div>
          </div>
          <div style={card_rating}>
            <img src={require("./assets/css3.png")} style={logo} alt="" />
            <div style={caption}>
              <h3 style={title}>CSS3</h3>
              <div style={stars}>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
            </div>
          </div>
          <div style={card_rating}>
            <img src={require("./assets/jquery.png")} style={logo} alt="" />
            <div style={caption}>
              <h3 style={title}>JQuery</h3>
              <div style={stars}>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
              </div>
            </div>
          </div>
          <div style={card_rating}>
            <img src={require("./assets/js.png")} style={logo} alt="" />
            <div style={caption}>
              <h3 style={title}>JavaScript</h3>
              <div style={stars}>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
            </div>
          </div>
          <div style={card_rating}>
            <img src={require("./assets/php.png")} style={logo} alt="" />
            <div style={caption}>
              <h3 style={title}>PHP</h3>
              <div style={stars}>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
            </div>
          </div>
          <div style={card_rating}>
            <img src={require("./assets/react.png")} style={logo} alt="" />
            <div style={caption}>
              <h3 style={title}>React</h3>
              <div style={stars}>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
