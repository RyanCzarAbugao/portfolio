import { useState, useEffect } from "react";
import PageTitle from "./Components/PageTitle";

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
};

const container_lg = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  margin: "0 6rem"
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
  border: "1px gray solid",
  boxShadow: "10px 10px #bfbfc0",
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
    <div style={!matches ? container : container_lg}>
      <PageTitle page_name="Skills" />

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
