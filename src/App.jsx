import "./App.css";
import { Sidebar } from "./components/Sidebar.jsx";
import { Topbar } from "./components/Topbar.jsx";
import { Dashboard } from "./components/Dashboard.jsx";
function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Topbar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
