import PageTitle from "./Components/PageTitle";

const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%'
};

const logo_container = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
};

const logo = {
  width: '9rem',
  margin: '1rem'
}

function Skills() {
  return (
    <div style={container}>
      <PageTitle page_name="Skills" />
      
      <div style={logo_container}>
        <img src={require("./assets/codeigniter.png")} style={logo} alt="" />
        <img src={require("./assets/cpp.png")} style={logo} alt="" />
        <img src={require("./assets/css3.png")} style={logo} alt="" />
        <img src={require("./assets/jquery.png")} style={logo} alt="" />
        <img src={require("./assets/js.png")} style={logo} alt="" />
        <img src={require("./assets/php.png")} style={logo} alt="" />
        <img src={require("./assets/react.png")} style={logo} alt="" />
      </div>
    </div>
  );
}

export default Skills;
