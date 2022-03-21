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

const acronym = {
  margin: "2.5rem 0 0 0", 
  textAlign: 'center'
};

const acronym_lg = {
  margin: "0"
};

const fullname = {
  fontSize: "1rem",
  color: "gray", 
  fontStyle: "italic", 
  textAlign: 'center',
  marginTop: '0.5rem'
};

const fullname_lg = {
  fontSize: "1rem",
  color: "gray", 
  fontStyle: "italic",
  marginTop: '0.5rem'
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
        <h3 style={!matches ? acronym : acronym_lg}>{props.acronym}</h3>
        <p style={!matches ? fullname : fullname_lg}>{props.fullname}</p>
        <p style={{ margin: "0 0 1rem 0" }}>{props.desc}</p>
        <ProjectLink url={props.url} isLive={props.isLive} text_btn={props.text_btn} />
      </div>
    </div>
  );
}

export default Card;
