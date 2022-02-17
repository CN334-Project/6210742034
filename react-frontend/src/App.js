import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Education from "./pages/Education";
import ResponsiveAppBar from "./components/Navbar";
import SignIn from "./pages/Login";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login/*" element={<Login />} />
      <Route path="dashboard/*" element={<Dashboard />} />
    </Routes>
    </>
    
  );
}

function Home() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}



export default App;
