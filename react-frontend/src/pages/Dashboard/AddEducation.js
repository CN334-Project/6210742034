import React, {useState, useEffect} from "react";
import {
  HeaderDashboardContianer,
  DashboardContainer,
} from "../../styles/Dashboard.style";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addEducations, fetchAsyncEducations } from "../../redux/educations/educationSlice";

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
        dispatch(addEducations(state))
    }
  };
  
  return (
    <HeaderDashboardContianer>
      <div className="addEducation">
        <h1>Add Education</h1>
        <h1>{error}</h1>
        <form>
          <TextField
            id="standard-basic"
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
        </form>
        <button onClick={handleSubmit}>add</button>
      </div>
    </HeaderDashboardContianer>
  );
}
