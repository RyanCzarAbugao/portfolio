import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "boxicons";

const sidebar = {
  backgroundColor: "white",
  position: "fixed",
  top: "0",
  left: "0",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "40px",
  padding: "0 1rem",
};

const sidebar_brand = {
  color: "white",
  marginBottom: "auto",
  marginTop: "1rem",
};

const sidebar_link_container = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "auto",
};

const sidebar_link = {
  marginBottom: "0.5rem",
  color: "#8F7D5E",
  textAlign: "center",
  paddingTop: "0.5rem",
  fontSize: "1.6rem",
};

const sidebar_link_active = {
  marginBottom: "0.5rem",
  color: "white",
  backgroundColor: "#8F7D5E",
  textAlign: "center",
  paddingTop: "0.5rem",
  borderRadius: "0.5rem",
  fontSize: "1.6rem",
};

const sidebar_social_container = {
  marginBottom: "1rem",
};

const w100 = {
  width: "100%",
};

function Sidebar() {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  return (
    <nav style={sidebar}>
      <Link style={sidebar_brand} to="/">
        <img src={require("../assets/brand.png")} style={w100} alt="" />
      </Link>

      <div style={sidebar_link_container}>
        <Link
          style={current === "/" ? sidebar_link_active : sidebar_link}
          to="/"
        >
          <i className="bx bx-home"></i>
        </Link>
        <Link
          style={current === "/skills" ? sidebar_link_active : sidebar_link}
          to="/skills"
        >
          <i className="bx bx-wrench"></i>
        </Link>
        <Link
          style={
            current === "/projects" || current === "/projects/slpmcs" || current === '/projects/dsas' || current === '/projects/lnhses' || current === '/projects/svcp' || current === '/projects/pstc' || current === '/projects/esac' || current === '/projects/napt'
              ? sidebar_link_active
              : sidebar_link
          }
          to="/projects"
        >
          <i className="bx bx-briefcase-alt-2"></i>
        </Link>
        <Link
          style={current === "/aboutme" ? sidebar_link_active : sidebar_link}
          to="/aboutme"
        >
          <i className="bx bx-info-circle"></i>
        </Link>
      </div>

      <div style={sidebar_social_container}>
        <a href="https://web.facebook.com/Ryan.bugz/">
          <i className="bx bxl-facebook-square bx-md"></i>
        </a>
      </div>
    </nav>
  );
}

export default Sidebar;
