import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";


import {
  DashboardContainer,
  HeaderDashboardContianer,
} from "../../styles/Dashboard.style";
import "../../styles/Dashboard.css";
import portfolioApi from "../../api/portfolioApi";
import { addEducations } from "../../redux/educations/educationSlice";
import { useDispatch } from "react-redux";
const EducationCRUD = () => {

  const dispatch = useDispatch();
  const fetchEducation = async () => {
    const response = await portfolioApi.get("/Alleducation")
    .catch((err) => {
      console.log("Err: ",err)
    })
    dispatch(addEducations(response.data))

    console.log("REsponse: ",response.data)

  }

  useEffect(() => {
    fetchEducation();
  }, [])
  
  
  return (
    <DashboardContainer>
      <div>
        <HeaderDashboardContianer>
          <div className="addEducation">
            <h1>Add Education</h1>
            <div>
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    School Name
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <TextField
                  id="input-with-icon-textfield"
                  label="Faculty"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <TextField
                  id="input-with-icon-textfield"
                  label="Department"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />

                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="GPA"
                    variant="standard"
                  />

                  <TextField
                    id="input-with-icon-textfield"
                    label="Start Year"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                  <TextField
                    id="input-with-icon-textfield"
                    label="End Year"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </Box>
              </Box>
            </div>
          </div>
        </HeaderDashboardContianer>
      </div>
    </DashboardContainer>
  );
}

export default EducationCRUD;
