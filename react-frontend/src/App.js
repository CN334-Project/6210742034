import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import * as React from "react";
import { useEffect } from "react";

import Education from "./pages/Education";
import ResponsiveAppBar from "./components/Navbar";
import SignIn from "./pages/Login";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import SideBar from "./components/SideBar";
import HeaderEdit from "./pages/Dashboard/HeaderEdit";
import Layout from "./pages/Dashboard/Layout";
import EducationCRUD from "./pages/Dashboard/EducationCRUD";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

function Home() {
  return (
    <div>
      <ResponsiveAppBar />
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
        <Route path="/" exact element={<DashboardPage />} />
        <Route path="/header" element={<HeaderEdit />} />
        <Route path="/education" element={<EducationCRUD />} />
      </Routes>
      <SideBar />
    </div>
  );
}

export default App;
