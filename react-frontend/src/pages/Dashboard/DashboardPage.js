import React, { useEffect } from "react";
import SideBar from "../../components/SideBar";

import { Body, DashboardContainer } from "../../styles/Dashboard.style";
import { Container, Grid } from "../../styles/Homepage.style";
import "../../styles/Dashboard.scss";

import { useDispatch } from "react-redux";
import { fetchAsyncEducations } from "../../redux/educations/educationSlice";
import EducationCRUD from "./Education/EducationCRUD";
import { useAuth } from "../../auth/AuthContext";
export default function DashboardPage() {
  const dispatch = useDispatch();
  const { logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    dispatch(fetchAsyncEducations());
  }, [dispatch]);

  return (
    <Body height="100vh">
      <DashboardContainer>
        <div className="dashboard-header">
          <h1>Welcome To Dashboard</h1>
        </div>

        <div className="education-wrapper">
          <EducationCRUD />
        </div>

        <button className="loginBtn" onClick={handleLogout}>
          Logout
        </button>
      </DashboardContainer>
    </Body>
  );
}
