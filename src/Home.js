const user = {
  width: '15em',
  borderRadius: '50%'
};

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
};

const btn_outlined = {
  padding: '0.8rem 2rem',
  borderRadius: '0.4rem',
  borderColor: '#8F7D5E',
  backgroundImage: 'linear-gradient(30deg, #8F7D5E, #F7DDB0)',
  fontWeight: '700',
  boxShadow: '5px 10px #bfbfc0',
  textDecoration: 'none',
  color: '#000'
};

const job_title = {
  color: '#6c6c6f',
  marginBottom: '2rem',
  textAlign: 'center'
};

const name = {
  marginBottom: '0rem',
  textAlign: 'center'
};

function Home() {
  return (
    <div style={container}>
      <img src={require("./assets/user.jpg")} style={user} alt="" />      
      <h2>&#9001; Hello World /&#12297;</h2>      
      <h1 style={name}>I am Ryan Czar V. Abugao</h1>
      <h3 style={job_title}>Full Stack Web Developer / Freelancer</h3>
      <a href="mailto:ryan.abugao@gmail.com" className="Contact" style={btn_outlined}>Contact Me</a>
    </div>
  )
}

export default Home
