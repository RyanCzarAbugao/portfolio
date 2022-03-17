import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

const layout = {
  display: 'flex',
};

const content = {
  padding: '0.8rem',
  width: '100%',
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