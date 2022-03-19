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

const thumbnail = {
  width: "40%",
  borderRadius: "0.4rem",
};

/*
 * Images
 */
function Thumbnail(props) {
  return (
    <img src={props.src} style={thumbnail} alt="" />
  )
};

function Projects() {
  return (
    <div style={container}>
      <PageTitle page_name="Projects" />

      <Card
        img={<Thumbnail src={pcs} />}
        desc="PSC or Phase Check System is a web app that lets user upload excel file, view, edit and delete its contents. This checks the phasing of power lines, and finally outputs an excel file that shows where the error is and automatically corrects it. This project is undisclosed as requested by Engr. Boragay, our supervisor. I can only show a snippet during the early stage of development."
        url="/projects"
        title="CASURECO IV - PCS (Phase Check System)"
        text_btn="Undisclosed"
      />

      <Card
        img={<Thumbnail src={slpmcs}/>}
        desc="Stress Level Monitoring and Control System using NUDEMCU ESP32 is one of my personal projects. This system measures both the root temperature and moisture content of crop plants to minimize the effects of drought and give recommended actions needed to maintain the health of crop plants through the GSM module."
        url="/projects/slpmcs"
        title="SLPMCS ( Stress Level of Plants Monitoring and Control System )"
        text_btn="View"
      />

      <Card
        img={<Thumbnail src={alert}/>}
        desc="Lagonoy High School Enrollment System automates the enrollment process of the school by providing web portal for student to enroll and apply for ESC Vouchers. ."
        url="/projects/lnhses"
        title="Lagonoy National High School Enrollment System"
        text_btn="Ongoing"
      />

      <Card
        img={<Thumbnail src={dsas}/>}
        desc="DSAS was one of my personal project that involves arduino to process attendance of student by scanning their QR code to the custom build QR Code Scanner which uses Nudemcu ESP32. It also has a web application to record all of the attendances of students, as well as view their schedule and abscences. The displayed image is the dashboard of the student."
        url="/projects/dsas"
        title="DSAS ( Development of Smart Attendance System )"
        text_btn="View"
      />

      <Card
        img={<Thumbnail src={alert}/>}
        desc="An ongoing personal project to practice and learn more about Codeigniter and MVC architecture. "
        url="/projects/svcp"
        title="SVCP ( Sheperdville College Voting Portal )"
        text_btn="Ongoing"
      />

      <Card
        img={<Thumbnail src={alert}/>}
        desc="PSTC Registration System is a simple registration portal for enrollees, this project aims to lessen the time it takes to register and minimize being infected with covid."
        url="/projects/pstc"
        title="PSTC ( Partido Skills Training Center, Inc. ) Registration System"
        text_btn="Ongoing"
      />

      <Card
        img={<Thumbnail src={esac}/>}
        desc="ESAC was one of my personal project that is coded with java, it involves a beacon device that activates when a student is near which prompts them to take an attendance. This project aims to automate attendance and the enrollment system of Montessori Children House of Learning."
        url="/projects/esac"
        title="ESAC ( Enrollment System With Automation on Attendance Checking)"
        text_btn="View"
      />

      <Card
        img={<Thumbnail src={napt}/>}
        desc="A 6 months project that is owned by Numiworks Auction Product Trading, a business established by Amaro Baleta Jr., This project aims to provide a portal for numismatist and give them an easy to navigate app for auctioned numismatic items of Numisworks Auction Product Trading."
        url="https://numisworksauction.com"
        title="Numisworks Auction"
        text_btn="View"
      />
    </div>
  );
}

export default Projects;