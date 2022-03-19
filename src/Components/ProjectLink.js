import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Radium from "radium";

const container = {
  display: 'flex',
  justifyContent: 'center'
};

const container_lg = {
  display: 'flex',
  justifyContent: 'left'
};

const view_btn = {
  padding: "0.6rem 1.5rem",
  backgroundColor: "#74a7f4",
  borderRadius: "0.3rem",
  textDecoration: "none",
  color: "white",
  textAlign: "center",
  ":hover": {
    backgroundColor: "red",
    color: "black",
  },
};

const view_btn_danger = {
  padding: "0.6rem 1.5rem",
  backgroundColor: "#fa4d5a",
  borderRadius: "0.3rem",
  textDecoration: "none",
  color: "white",
  textAlign: "center",
  ":hover": {
    backgroundColor: "red",
    color: "black",
  },
};

function ProjectLink(props) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const status = props.text_btn;

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div style={!matches ? container : container_lg}>
      <Link style={status === 'Undisclosed' ? view_btn_danger : view_btn} to={props.url}>
        {props.text_btn}
      </Link>
    </div>
  );
}

export default Radium(ProjectLink);
