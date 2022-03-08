import * as React from "react";
import { Link } from "react-router-dom";
import { HeaderContianer } from "../styles/Homepage.style";
import "../styles/Homepage.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllEducations } from "../redux/educations/educationSlice";
import EducationCard from "../components/EducationCard";
import HomeEducationCard from "../components/HomeEducationCard";
import { Grid } from "@mui/material";

export default function Education() {
  const educations = useSelector(getAllEducations);
  const dispatch = useDispatch();
  let renderEducations =
    educations.Response === "True"
      ? educations.data.map((items, index) => (
          <HomeEducationCard key={index} data={items} />
        ))
      : null;
  return (
    <div className="education">
      <HeaderContianer>
        <div className="education-content">
          <h2>Education</h2>
          <div>
            <Grid item xs={12}>
              <Grid container justifyContent={"center"} spacing={8} direction="row">
                {renderEducations}
              </Grid>
            </Grid>
            {/* <div className="education-container">{renderEducations}</div> */}
          </div>
        </div>
      </HeaderContianer>
    </div>
  );
}
