import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

const layout = {
  display: 'flex',
};

const content = {
  marginLeft: '62.8px',
  padding: '0.8rem',
  width: 'calc(100% - 56px)',
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