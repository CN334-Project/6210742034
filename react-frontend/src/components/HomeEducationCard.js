import React from "react";
import { useDispatch } from "react-redux";
import "../styles/CardStyle.scss";
import { Grid } from "@mui/material";

const HomeEducationCard = (props) => {
  const { data } = props;

  return (
    <Grid item>
      <div className="card-item btn-gradient-border">
        <div className="card-lists">
          <h1 id="university">{data.university_name}</h1>
          <h1 id="department">
            {data.faculty}, {data.department_name}
          </h1>
          <h1 id="startyear">
            {data.startyear} - {data.endyear}
          </h1>
          <h1 id="GPA">GPA {data.GPA}</h1>
        </div>
      </div>
    </Grid>
  );
};

export default HomeEducationCard;
