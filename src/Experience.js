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
    <div style={{display: "flex"}}>
      <div style={{margin: '0.8rem'}}>
        <p>{props.desc}</p>
      </div>
    </div>
  )
};

function Experience() {
  return (
    <div style={container}>
      <PageTitle page_name="Experience" />
      
      <Card img="./assets/brand.png" desc="test"/>
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