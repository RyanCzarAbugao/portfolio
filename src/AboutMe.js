import { useState, useEffect } from "react";
import PageTitle from "./Components/PageTitle";

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
};

const container_lg = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  margin: "0 2rem",
};

const aboutme_pic = {
  width: "16rem",
  borderRadius: "50%",
  boxShadow: "0px 0px 15px #bfbfc0",
};

const center_image = {
  display: "flex",
  justifyContent: "center",
};

const statement = {
  marginTop: "2rem",
};

const caption = {
  textAlign: "center",
  fontStyle: "italic",
  margin: "0 1rem 0 1rem",
  padding: "2rem 0 0 0",
  color: "#6c6c6f",
};

const bookmark = {
  display: "inline-block",
  backgroundColor: "#8f7d6d",
  color: "white",
  marginTop: "3rem",
  padding: "0.5rem",
  marginBottom: 0,
};

const triangle = {
  width: "0",
  height: "0",
  borderTop: "18px solid transparent",
  borderBottom: "18px solid transparent",
  borderLeft: "18px solid #8f7d6d",
};

function ProfilePicture() {
  return (
    <div style={center_image}>
      <img src={require("./assets/avatar.png")} style={aboutme_pic} alt="" />
    </div>
  );
}

function Intro() {
  return (
    <>
      <p style={caption}>
        “First, solve the problem. Then, write the code.” <br/>- John Johnson
      </p>

      <p style={statement}>
        I am a highly skilled and motivated freelance developer with expertise
        in software development and a focus on SDK development for SAP Business
        One. With a strong background in programming languages and frameworks, I
        am dedicated to delivering top-notch solutions that optimize business
        processes and enhance user experiences.
      </p>

      <p style={statement}>
        As an SDK developer at SAP Business One, I have gained valuable
        experience in designing, developing, and implementing custom solutions
        and integrations. I possess a deep understanding of the SAP Business One
        platform and its SDK, allowing me to create tailored applications that
        meet specific business requirements.
      </p>

      <p style={statement}>
        Throughout my career, I have successfully collaborated with
        cross-functional teams, including project managers, designers, and
        stakeholders, to ensure seamless integration and efficient delivery of
        software projects. I have a proven track record of delivering
        high-quality code on time and within budget, while consistently
        exceeding client expectations.
      </p>

      <p style={statement}>
        In addition to my technical expertise, I am a strong communicator and
        problem-solver. I excel at translating complex technical concepts into
        user-friendly language, enabling effective communication with both
        technical and non-technical stakeholders. I thrive in dynamic and
        fast-paced environments, always eager to learn and adapt to new
        technologies and industry trends.
      </p>

      <p style={statement}>
        As a freelance developer, I am committed to providing exceptional
        services to my clients. Whether it's developing custom applications,
        troubleshooting issues, or optimizing existing solutions, I take pride
        in delivering results that drive business growth and improve operational
        efficiency.
      </p>

      <p style={statement}>
        If you are looking for a reliable and experienced developer for your
        software projects, feel free to connect with me. I am always open to new
        opportunities and challenges, and I look forward to discussing how I can
        contribute to your success.
      </p>
    </>
  );
}

function Bookmark(props) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      <h3 style={bookmark}>{props.title}</h3>
      <div style={triangle}>&nbsp;</div>
    </div>
  );
}

function Experience() {
  return (
    <ul>
      <li>SDK Programmer • Fasttrack Solutions, Inc. • 11 mos</li>
      <li>Full Stack Developer • Freelance • 4 yrs 9 mos</li>
      <li>Quality Assurance Specialist • Breta Consulting Corp. • 1 yr</li>
      <li>Web Application Developer • Camarines Sur Electric Coop. • 4 mos</li>
    </ul>
  );
}

function AboutMe() {
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
      <PageTitle page_name="About Me" />

      <div style={{ margin: "auto 0" }}>
        <ProfilePicture />
        <Bookmark title="Let get acquainted!" />
        <Intro />
        <Bookmark title="Work Experience" />
        <Experience />
      </div>
    </div>
  );
}

export default AboutMe;
