import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Radium from "radium";
import "../assets/projects.css";

const container = {
  display: "flex",
  justifyContent: "center",
};

const container_lg = {
  display: "flex",
  justifyContent: "left",
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
      {!props.isLive ? (
        <Link
          className={status !== "Undisclosed" ? "primary_btn" : "danger_btn" }
          to={props.url}
        >
          {props.text_btn}
        </Link>
      ) : (
        <a
          href={props.url}
          className={status !== "Undisclosed" ? "primary_btn" : "danger_btn" }
        >
          {props.text_btn}
        </a>
      )}
    </div>
  );
}

export default Radium(ProjectLink);
