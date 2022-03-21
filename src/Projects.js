import { useState, useEffect } from "react";
import PageTitle from "./Components/PageTitle";
import Card from "./Components/Card";
import pcs from "./assets/p_pcs.jpg";
import slpmcs from "./assets/p_slpmcs.jpg";
import dsas from "./assets/p_dsas.png";
import esac from "./assets/p_esac.png";
import napt from "./assets/p_napt.png";
import alert from "./assets/alert.png";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

const container_lg = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  margin: "0 2rem",
};

const thumbnail = {
  width: "100%",
  borderRadius: "0.4rem",
  boxShadow: "10px 10px #bfbfc0",
};

const thumbnail_lg = {
  width: "17rem",
  borderRadius: "0.4rem",
  boxShadow: "10px 10px #bfbfc0",
};

function Thumbnail(props) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <img src={props.src} style={!matches ? thumbnail : thumbnail_lg} alt="" />
  );
}

function Projects() {
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
      <PageTitle page_name="Projects" />

      <div style={{ margin: "auto 0" }}>
        <Card
          img={<Thumbnail src={pcs} />}
          desc="PSC or Phase Check System is a web app that lets user upload excel file, View Project, edit and delete its contents. This checks the phasing of power lines, and finally outputs an excel file that shows where the error is and automatically corrects it. This project is undisclosed as requested by Engr. Boragay, our supervisor. I can only show a snippet during the early stage of development."
          url="/projects"
          acronym="CASURECO IV - PCS"
          fullname="(Phase Check System)"
          text_btn="Undisclosed"
          year="2019"
        />

        <Card
          img={<Thumbnail src={slpmcs} />}
          desc="Stress Level Monitoring and Control System using NUDEMCU ESP32 is one of my personal projects. This system measures both the root temperature and moisture content of crop plants to minimize the effects of drought and give recommended actions needed to maintain the health of crop plants through the GSM module."
          url="/projects/slpmcs"
          acronym="SLPMCS"
          fullname="(Stress Level of Plants Monitoring and Control System)"
          text_btn="View Project"
          year="2020"
        />

        <Card
          img={<Thumbnail src={alert} />}
          desc="Lagonoy High School Enrollment System automates the enrollment process of the school by providing web portal for student to enroll and apply for ESC Vouchers. ."
          url="/projects"
          acronym="LHSES"
          fullname="(Lagonoy National High School Enrollment System)"
          text_btn="Ongoing"
          year="2022"
        />

        <Card
          img={<Thumbnail src={dsas} />}
          desc="DSAS was one of my personal project that involves arduino to process attendance of student by scanning their QR code to the custom build QR Code Scanner which uses Nudemcu ESP32. It also has a web application to record all of the attendances of students, as well as View Project their schedule and abscences. The displayed image is the dashboard of the student."
          url="/projects/dsas"
          acronym="DSAS"
          fullname="(Development of Smart Attendance System)"
          text_btn="View Project"
          year="2020"
        />

        <Card
          img={<Thumbnail src={alert} />}
          desc="An ongoing personal project to practice and learn more about Codeigniter and MVC architecture. "
          url="/projects"
          acronym="SVCP"
          fullname="(Sheperdville College Voting Portal)"
          text_btn="Ongoing"
          year="2022"
        />

        <Card
          img={<Thumbnail src={alert} />}
          desc="PSTC Registration System is a simple registration portal for enrollees, this project aims to lessen the time it takes to register and minimize being infected with covid."
          url="/projects"
          acronym="PSTCIRS"
          fullname="(Partido Skills Training Center, Inc. Registration System)"
          text_btn="Ongoing"
          year="2022"
        />

        <Card
          img={<Thumbnail src={esac} />}
          desc="ESAC was one of my personal project that is coded with java, it involves a beacon device that activates when a student is near which prompts them to take an attendance. This project aims to automate attendance and the enrollment system of Montessori Children House of Learning."
          url="/projects/esac"
          acronym="ESAC"
          fullname="(Enrollment System With Automation on Attendance Checking)"
          text_btn="View Project"
          year="2019"
        />

        <Card
          img={<Thumbnail src={napt} />}
          desc="A 6 months project that is owned by Numiworks Auction Product Trading, a business established by Amaro Baleta Jr., This project aims to provide a portal for numismatist and give them an easy to navigate app for auctioned numismatic items of Numisworks Auction Product Trading."
          url="https://numisworksauction.com"
          acronym="Numisworks Auction"
          text_btn="View Project"
          isLive="true"
          year="2022"
        />
      </div>
    </div>
  );
}

export default Projects;
