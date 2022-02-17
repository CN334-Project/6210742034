import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Education from "./pages/Education";
import ResponsiveAppBar from "./components/Navbar";
import SignIn from "./pages/Login";
import HomePage from "./pages/HomePage";
import Dashboardpage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}

function Dashboard() {
  return (
    <div>
      <p>Look, more routes!</p>
      <Routes>
        <Route path="/" element={<Dashboardpage />} />
        <Route path="login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
