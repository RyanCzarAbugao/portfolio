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
  textAlign: 'center',
};

const acronym_lg = {
  margin: "0"
};

const badge = {
  margin: '0.5rem',
  textAlign: 'center',
};

const badge_lg = {
  margin: '0.5rem 0 0.7rem',
};

const fullname = {
  fontSize: "1rem",
  color: "gray", 
  fontStyle: "italic", 
  textAlign: 'center',
  margin: '0.5rem 0 0.5rem 0'
};

const fullname_lg = {
  fontSize: "1rem",
  color: "gray", 
  fontStyle: "italic",
  margin: '0.5rem 0 0.5rem 0'
};

function Badge(props) {
  return (
    <span style={{ marginBottom: "0.7rem" }} className="c-pill c-pill--danger">{props.year}</span>
  )
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
        <div style={!matches ? badge : badge_lg}>
          <Badge year={props.year}/>
        </div>    
        <p style={{ margin: "0 0 1rem 0" }}>{props.desc}</p>
        <ProjectLink url={props.url} isLive={props.isLive} text_btn={props.text_btn} />
      </div>
    </div>
  );
}

export default Card;
