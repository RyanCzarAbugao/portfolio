import { Link } from "react-router-dom";
import PageTitle from "./Components/PageTitle";

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
};

function Card(props) {
  return (
    <div style={{display: "flex", width: "100%"}}>
      {props.img}
      <div style={{margin: '0.8rem'}}>
        <p>{props.desc}</p>
      </div>
    </div>
  )
};

/*
* Images
*/
const pcs = <img src={require('./assets/js.png')} style={{width: '50%'}} alt="" />;
const slpmcs = <img src={require('./assets/js.png')} alt="" />;
const lnhses = <img src={require('./assets/js.png')} alt="" />;
const dsas = <img src={require('./assets/js.png')} alt="" />;
const svcp = <img src={require('./assets/js.png')} alt="" />;
const pstc = <img src={require('./assets/js.png')} alt="" />;
const esac = <img src={require('./assets/js.png')} alt="" />;

function Experience() {
  return (
    <div style={container}>
      <PageTitle page_name="Experience" />
      
      <Card img={pcs} desc="test"/>
      <ol>
        <li><Link to="/experience/pcs">CASURECO IV - PCS (Phase Check System)</Link></li>
        <li><Link to="/experience/slpmcs">SLPMCS ( Stress Level of Plants Monitoring and Control System )</Link></li>
        <li><Link to="/experience/lnhses">Lagonoy National High School Enrollment System</Link></li>
        <li><Link to="/experience/dsas">DSAS ( Development of Smart Attendance System )</Link></li>
        <li><Link to="/experience/svcp">SVCP ( Sheperdville College Voting Portal )</Link></li>
        <li><Link to="/experience/pstc">PSTC ( Partido Skills Training Center, Inc. ) Registration System</Link></li>
        <li><Link to="/experience/esac">ESAC ( Enrollment System With Automation on Attendance Checking)</Link></li>
        <li><a href="https://numisworksauction.com">Numisworks Auction </a></li>
      </ol>
    </div>
  )
}

export default Experience;