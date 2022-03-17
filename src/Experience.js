import { Link } from "react-router-dom";
import PageTitle from "./Components/PageTitle";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

const card = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  marginBottom: "2rem",
};

const view_btn = {
  padding: "0.5rem 1rem",
  backgroundColor: "#74a7f4",
  borderRadius: "0.4rem",
  border: "2px #0f74d6 solid",
  textDecoration: "none",
};

function Card(props) {
  return (
    <div style={card}>
      {props.img}
      <div style={{ margin: "0.8rem" }}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <Link style={view_btn} to={props.url}>
          {props.text_btn}
        </Link>
      </div>
    </div>
  );
}

/*
 * Images
 */
const pcs = (
  <img src={require("./assets/cpp.png")} style={{ width: "40%" }} alt="" />
);
const slpmcs = <img src={require("./assets/css3.png")} style={{ width: "40%" }} alt="" />;
const lnhses = <img src={require("./assets/jquery.png")} style={{ width: "40%" }} alt="" />;
const dsas = <img src={require("./assets/js.png")} style={{ width: "40%" }} alt="" />;
const svcp = <img src={require("./assets/react.png")} style={{ width: "40%" }} alt="" />;
const pstc = <img src={require("./assets/codeigniter.png")} style={{ width: "40%" }} alt="" />;
const esac = <img src={require("./assets/cpp.png")} style={{ width: "40%" }} alt="" />;

function Experience() {
  return (
    <div style={container}>
      <PageTitle page_name="Experience" />

      <Card
        img={pcs}
        desc="PSC or Phase Check System is a web app that lets user upload excel file, view, edit and delete its contents. This checks the phasing of power lines, and finally outputs an excel file that shows where the error is and automatically corrects it. Sadly, This project is undisclosed as requested by the Mr. Boragay, our supervisor. I can only show a snippet during development."
        url="/experience/pcs"
        title="CASURECO IV - PCS (Phase Check System)"
        text_btn="Undisclosed"
      />

      <Card
        img={slpmcs}
        desc="Stress Level Monitoring and Control System using NUDEMCU ESP32 measures both the root temperature and moisture content of crop plants to minimize the effects of drought and give recommended actions needed to maintain the health of crop plants."
        url="/experience/slpmcs"
        title="SLPMCS ( Stress Level of Plants Monitoring and Control System )"
      />

      <Card
        img={lnhses}
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla error laboriosam repellendus vitae atque cupiditate mollitia quod dolore iusto dolores fugiat est possimus temporibus, quam aperiam enim incidunt dignissimos cum."
        url="/experience/lnhses"
        title="Lagonoy National High School Enrollment System"
      />

      <Card
        img={dsas}
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla error laboriosam repellendus vitae atque cupiditate mollitia quod dolore iusto dolores fugiat est possimus temporibus, quam aperiam enim incidunt dignissimos cum."
        url="/experience/dsas"
        title="DSAS ( Development of Smart Attendance System )"
      />

      <Card
        img={svcp}
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla error laboriosam repellendus vitae atque cupiditate mollitia quod dolore iusto dolores fugiat est possimus temporibus, quam aperiam enim incidunt dignissimos cum."
        url="/experience/svcp"
        title="SVCP ( Sheperdville College Voting Portal )"
      />

      <Card
        img={pstc}
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla error laboriosam repellendus vitae atque cupiditate mollitia quod dolore iusto dolores fugiat est possimus temporibus, quam aperiam enim incidunt dignissimos cum."
        url="/experience/pstc"
        title="PSTC ( Partido Skills Training Center, Inc. ) Registration System"
      />

      <Card
        img={esac}
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla error laboriosam repellendus vitae atque cupiditate mollitia quod dolore iusto dolores fugiat est possimus temporibus, quam aperiam enim incidunt dignissimos cum."
        url="/experience/esac"
        title="ESAC ( Enrollment System With Automation on Attendance Checking)"
      />

      <Card
        img={pcs}
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla error laboriosam repellendus vitae atque cupiditate mollitia quod dolore iusto dolores fugiat est possimus temporibus, quam aperiam enim incidunt dignissimos cum."
        url="https://numisworksauction.com"
        title="Numisworks Auction"
      />
    </div>
  );
}

export default Experience;
