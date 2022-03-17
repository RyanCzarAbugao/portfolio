const page_title = {
  textAlign: 'center',
  marginBottom: '2rem'
};

function PageTitle(props) {
  return (
    <h1 style={page_title}>{props.page_name}</h1>
  )
}

export default PageTitle