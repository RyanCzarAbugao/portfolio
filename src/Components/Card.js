import { useState, useEffect } from "react";
import ProjectLink from "./ProjectLink";

const card_sm = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  marginBottom: "4rem",
};

const card_lg = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  marginBottom: "4rem",
};

function Card(props) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div style={!matches ? card_sm : card_lg}>
      {props.img}
      <div style={!matches ? {margin: "0"} : {margin: "2rem"}}>
        <h3 style={!matches ? {marginTop: "2.5rem", textAlign: 'center'} : {marginTop: "2rem"}}>{props.title}</h3>
        <p style={{ margin: "0 0 1rem 0" }}>{props.desc}</p>
        <ProjectLink url={props.url} isLive={props.isLive} text_btn={props.text_btn} />
      </div>
    </div>
  );
}

export default Card;
