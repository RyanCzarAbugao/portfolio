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
  boxShadow: '7px 7px #bfbfc0',
  textDecoration: 'none',
  color: '#000'
};

const job_title = {
  color: '#6c6c6f',
  marginBottom: '2rem',
  textAlign: 'center'
};

const name = {
  marginBottom: '0',
  textAlign: 'center'
};

function Home() {
  return (
    <div style={container}>
      <img src={require("./assets/avatar.png")} style={user} alt="" /> 
      <h1 style={name}>Hi! I am Ryan Czar Abugao</h1>
      <h3 style={job_title}>SDK Programmer | Full Stack Developer | Web Developer </h3>
      <a href="mailto:ryan.abugao@fasttrackph.com" className="Contact" style={btn_outlined}>Contact Me</a>
    </div>
  )
}

export default Home
