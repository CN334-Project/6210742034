import React, { useState, useEffect } from "react";
import {
  HeaderDashboardContianer,
  DashboardContainer,
  Body,
} from "../../../styles/Dashboard.style";
import { TextField, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addEducations } from "../../../redux/educations/educationSlice";

export default function AddEducation() {
  const [state, setState] = useState({
    university_name: "",
    department_name: "",
    GPA: "",
    faculty: "",
    startyear: "",
    endyear: "",
  });
  const { university_name, department_name, GPA, faculty, startyear, endyear } =
    state;

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !university_name ||
      !department_name ||
      !GPA ||
      !faculty ||
      !startyear ||
      !endyear
    ) {
      setError("Please insert data");
    } else {
      dispatch(addEducations(state));
    }
  };

  return (
    <Body height="100vh">
      <DashboardContainer hg="100vh">
        <HeaderDashboardContianer>
          <div className="addEducation">
            <h1>Add Education</h1>
            <h1>{error}</h1>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 3, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              bgcolor="primary.main"
            >
              <TextField
                id="filled-textarea"
                label="University Name"
                name="university_name"
                value={university_name}
                type="text"
                onChange={handleInputChange}
              />
              <TextField
                id="standard-basic"
                label="department_name"
                name="department_name"
                value={department_name}
                type="text"
                onChange={handleInputChange}
              />
              <TextField
                id="standard-basic"
                label="GPA"
                name="GPA"
                value={GPA}
                type="text"
                onChange={handleInputChange}
              />
              <TextField
                id="standard-basic"
                label="faculty"
                name="faculty"
                value={faculty}
                type="text"
                onChange={handleInputChange}
              />
              <TextField
                id="standard-basic"
                label="startyear"
                name="startyear"
                value={startyear}
                type="text"
                onChange={handleInputChange}
              />
              <TextField
                id="standard-basic"
                label="endyear"
                name="endyear"
                value={endyear}
                type="text"
                onChange={handleInputChange}
              />
            </Box>
            
              <button onClick={handleSubmit} className="btn-gradient-border">
                Add
              </button>
            
          </div>
        </HeaderDashboardContianer>
      </DashboardContainer>
    </Body>
  );
}
