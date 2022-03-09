import { Grid, Paper } from "@mui/material";
import React from "react";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import { Container } from "../styles/Homepage.style";


const Footer = () => {
  return (
    <div id="footer">
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            <div
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://github.com/Manusea";
              }}
            >
              <BsGithub
                size={25}
                className="icons"
                color="white"
                onMouseOver={({ target }) => (target.style.color = "#0a66c2")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
            </div>
          </Grid>
          <Grid item>
            <div
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.linkedin.com/in/chanantaphon/";
              }}
            >
              <BsLinkedin
                size={25}
                className="icons"
                color="white"
                onMouseOver={({ target }) => (target.style.color = "#0a66c2")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
            </div>
          </Grid>
          <Grid item>
            <div
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://www.facebook.com/Mansea.Ctp/";
              }}
            >
              <BsFacebook
                size={25}
                className="icons"
                color="white"
                onMouseOver={({ target }) => (target.style.color = "#0a66c2")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
            </div>
          </Grid>
          <Grid item>
            <div
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://www.instagram.com/mansea.ctp/";
              }}
            >
              <BsInstagram
                size={25}
                className="icons"
                color="white"
                onMouseOver={({ target }) => (target.style.color = "#0a66c2")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Container textAlign="center" pt="1.5rem">
        <div className="copyright text-white py-1">&copy; Copyright. All Rights Reserved</div>
        <div className="credits text-white">
          by <a>Chanantaphon Chansuksri</a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
