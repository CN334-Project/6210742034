import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

import {
  DashboardContainer,
  HeaderDashboardContianer,
} from "../../../styles/Dashboard.style";
import "../../../styles/Dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addEducations,
  getAllEducations,
} from "../../../redux/educations/educationSlice";
import EducationCard from "../../../components/EducationCard";
import "../../../styles/EducationStyle.scss";
import AddEducation from "./AddEducation";
import { fetchAsyncEducations } from "../../../redux/educations/educationSlice";

const EducationCRUD = () => {
  const educations = useSelector(getAllEducations);
  const dispatch = useDispatch();
  let renderEducations =
    educations.Response === "True"
      ? (
        educations.data.map((items, index) => (
          <EducationCard key={index} data={items} />
        )))
      : null;

  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center", padding: "2rem" }}>Education</h1>
      <div className="education-container">{renderEducations}</div>
    </div>
  );
};

export default EducationCRUD;
