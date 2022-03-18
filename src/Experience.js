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
        desc="PSC or Phase Check System is a web app that lets user upload excel file, view, edit and delete its contents. This checks the phasing of power lines, and finally outputs an excel file that shows where the error is and automatically corrects it. This project is undisclosed as requested by Mr. Boragay, our supervisor. I can only show a snippet during development."
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
        desc="Lagonoy High School Enrollment System automates the enrollment process of the school by providing web portal for student to enroll and apply for ESC Vouchers. ."
        url="/experience/lnhses"
        title="Lagonoy National High School Enrollment System"
      />

      <Card
        img={dsas}
        desc="DSAS was one of my personal project that involves arduino to process attendance of student by scanning their QR code to the custom build QR Code Scanner which uses Nudemcu ESP32."
        url="/experience/dsas"
        title="DSAS ( Development of Smart Attendance System )"
      />

      <Card
        img={svcp}
        desc="An ongoing personal project to practice and learn more about Codeigniter and MVC architecture. "
        url="/experience/svcp"
        title="SVCP ( Sheperdville College Voting Portal )"
      /

      <Card
        img={pstc}
        desc="PSTC Registration System is a simple registration portal for enrollees, this project aims to lessen the time it takes to register and minimize being infected with covid."
        url="/experience/pstc"
        title="PSTC ( Partido Skills Training Center, Inc. ) Registration System"
      />

      <Card
        img={esac}
        desc="ESAC was one of my personal project that involves a beacon device that activates when a student is near. This project aims to automate attendance and the enrollment system of Montessori Children House of Learning."
        url="/experience/esac"
        title="ESAC ( Enrollment System With Automation on Attendance Checking)"
      />

      <Card
        img={pcs}
        desc="A 6 months project that is owned by Numiworks Auction Product Trading, a business established by Amaro Baleta Jr., This project aims to provide a portal for numismatist and give them an easy to navigate app for auctioned numismatic items of Numisworks Auction Product Trading."
        url="https://numisworksauction.com"
        title="Numisworks Auction"
      />
    </div>
  );
}

export default Experience;
