import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

const layout = {
  display: 'flex',
};

const content = {
  marginLeft: '62.8px',
  padding: '0 1.6rem 0 0.8rem',
  width: 'calc(100% - 56px)',
  minHeight: '100vh'
};

function App() {
  return (
    <div style={layout}>
      <Sidebar />
      <div style={content}><Outlet /></div>
    </div>
  );
}

export default App;