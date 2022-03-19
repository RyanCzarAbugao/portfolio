import { Link } from "react-router-dom";
import Radium from 'radium';

const view_btn = {
  padding: "0.6rem 1.5rem",
  backgroundColor: "#74a7f4",
  borderRadius: "0.3rem",
  textDecoration: "none",
  color: "white",
  textAlign: "center",
  ':hover': {
    backgroundColor: 'red',
    color: 'black'
  }
};

function ProjectLink(props) {
  return (
    <Link style={view_btn} to={props.url}>
      {props.text_btn}
    </Link>
  );
}

export default Radium( ProjectLink );