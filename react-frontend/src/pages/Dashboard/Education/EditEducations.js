import React, { useState, useEffect } from "react";
import {
  HeaderDashboardContianer,
  DashboardContainer,
} from "../../../styles/Dashboard.style";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  addEducations,
  updateEducations,
} from "../../../redux/educations/educationSlice";
import PortfolioService from "../../../api/portfolioServices";
import { useNavigate, useParams } from "react-router-dom";

const EditEducation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentEducation, setCurrentEducation] = useState({
    university_name: "",
    department_name: "",
    GPA: "",
    faculty: "",
    startyear: "",
    endyear: "",
  });

  const { university_name, department_name, GPA, faculty, startyear, endyear } =
    currentEducation;

  const getEducation = (id) => {
    PortfolioService.get(id)
      .then((response) => {
        setCurrentEducation(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEducation(id);
  }, [id]);

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setCurrentEducation({ ...currentEducation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentEducation);
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
      dispatch(
        updateEducations({ id: currentEducation.id, data: currentEducation })
      )

    }
  };

  return (
    <DashboardContainer hg="100vh">
      <HeaderDashboardContianer>
        <div className="addEducation">
          <h1>Edit Education</h1>
          <h1>{error}</h1>
          <form>
            <TextField
              id="standard-basic"
              label="University Name"
              name="university_name"
              value={currentEducation.university_name}
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
          <button onClick={handleSubmit}>Update</button>
        </div>
      </HeaderDashboardContianer>
    </DashboardContainer>
  );
};

export default EditEducation;
