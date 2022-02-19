import React, { useEffect } from "react";
import SideBar from "../../components/SideBar";

import { DashboardContainer } from "../../styles/Dashboard.style";
import { Container, Grid } from "../../styles/Homepage.style";
import "../../styles/Dashboard.scss";

import { useDispatch } from "react-redux";
import { fetchAsyncEducations } from "../../redux/educations/educationSlice";
import EducationCRUD from "./Education/EducationCRUD";
export default function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncEducations());
  }, [dispatch]);
  return (
    <DashboardContainer>
      <div className="DashboardContent">
        <h1>Welcome To Dashbaord</h1>

        <div className="education-wrapper">
          <EducationCRUD />
        </div>

      </div>
    </DashboardContainer>
  );
}
