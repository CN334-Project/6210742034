import React from "react";
import { HeaderContianer, Grid } from "../styles/Homepage.style";
import "../styles/CardStyle.scss";
import "../styles/Homepage.css";
import "../styles/Button.scss";

const ProjectExpreience = () => {
  return (
    <div className="">
      <HeaderContianer>
        <div className="education-content">
          <h2>Project Expreience</h2>
        </div>
        <Grid columns="1fr 1fr 1fr 1fr">
          <div className="cards">
            <div className="cards-media">
              <img
                width={238.5}
                height={238.5}
                src={require("../assets/LOGO.png")}
              />
            </div>
            <div className="cards-title">
              <h1>Todolist Applciaiton</h1>
            </div>
            <Grid columns="1fr 1fr">
              <button className="button button2">Github</button>
              <button className="button button2">View More</button>
            </Grid>
          </div>

          <div className="cards">
            <div className="cards-media">
              <img
                width={250}
                height={250}
                style={{borderRadius:"20%"}}
                src={require("../assets/covid.png")}
              />
            </div>
            <div className="cards-title">
              <h1>COVID-19 Website</h1>
            </div>
            <Grid columns="1fr 1fr">
              <button className="button button2">Github</button>
              <button className="button button2">View More</button>
            </Grid>
          </div>

          <div className="cards">
            <div className="cards-media">
              <img
                width={250}
                height={250}
                style={{borderRadius:"20%"}}
                src={require("../assets/KruChana.png")}
              />
            </div>
            <div className="cards-title">
              <h1>KruChaNa Application</h1>
            </div>
            <Grid columns="1fr 1fr">
              <button className="button button2">Github</button>
              <button className="button button2">View More</button>
            </Grid>
          </div>

          <div className="cards">
            <div className="cards-media">
              <img
                width={250}
                height={250}
                style={{borderRadius:"20%"}}
                src={require("../assets/face.png")}
              />
            </div>
            <div className="cards-title">
              <h1>Face Recognition Website</h1>
            </div>
            <Grid columns="1fr 1fr">
              <button className="button button2">Github</button>
              <button className="button button2">View More</button>
            </Grid>
          </div>

          
          
        </Grid>
      </HeaderContianer>
    </div>
  );
};

export default ProjectExpreience;
