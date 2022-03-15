import React, { useEffect } from "react";
import {
  Body,
  Container,
  HeaderContianer,
  Paragraph,
  Text,
  Grid,
} from "../styles/Homepage.style";
import useWindowDimensions from "../components/useWindowDimensions";
import Education from "./Education";
import "../styles/Homepage.css";
import { useDispatch } from "react-redux";
import { fetchAsyncEducations } from "../redux/educations/educationSlice";
import IndexPage from "./IndexPage";
import "../styles/HomepageStyle.scss";
import ProjectExpreience from "./ProjectExpreience";
import Contract from "./Contract";
import Footer from "./Footer";
import Skills from "./Skills";
// import { Grid } from "@mui/material";
import MyResume from "../assets/CV_Chanantaphon_Chansuksri.pdf";

export default function HomePage() {
  const { height, width } = useWindowDimensions();
  const hgc = height + "px";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncEducations());
  }, []);

  return (
    <Body height={"auto"}>
      <a className="anchor" id="Home"></a>
      <IndexPage />
      <HeaderContianer hg="auto" pb="5rem">
        <a className="anchor" id="About"></a>

        {/* <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={20}>
            <Grid item xs={5}>
     
                <div className="profile-picture">
                  <div className="profile-picture-background"></div>
                </div>
      
            </Grid>
            <Grid item xs={7}>
              <Container>
                <Text size="1rem" color="#7a7a7a">
                  Software Developer
                </Text>
                <Text color="#fff" className="animate-charcter text-glow">
                  Chanantaphon Chansuksri
                </Text>
                <p>Software Engineer Student seeking an entry-level position as a
                website developer and mobile developer with a passion for developing innovative programs that are efficacious and
                reliable. Perform Open-minded for extremely skills that should
                be improved my potential skill to apply in organization</p>
                <br />
                <a
                  href={MyResume}
                  download="CV_Chanantaphon_Chanuksri"
                  target="_blank"
                >
                  <button className="loginBtn">Download CV</button>
                </a>
              </Container>
            </Grid>
          </Grid>
        </Grid> */}

        <Grid columns="1fr 1fr">
          <Container>
            <div style={{ alignItems: "self-end", alignSelf: "end" }}>
              <div className="profile-picture">
                <div className="profile-picture-background"></div>
              </div>
            </div>
          </Container>
          <Container>
            <div>
              <Text size="1rem" color="#7a7a7a">
                Software Developer
              </Text>
              <Text color="#fff" className="animate-charcter text-glow">
                Chanantaphon Chansuksri
              </Text>
              <Paragraph>
                Software Engineer Student seeking an entry-level position as a
                website developer and mobile developer with a passion for
                developing innovative programs that are efficacious and
                reliable. Perform Open-minded for extremely skills that should
                be improved my potential skill to apply in organization
              </Paragraph>
              <a
                href={MyResume}
                download="CV_Chanantaphon_Chanuksri"
                target="_blank"
              >
                <button className="loginBtn">Download CV</button>
              </a>
            </div>
          </Container>
        </Grid>
      </HeaderContianer>

      <Skills />

      <a className="anchor" id="Education"></a>
      <Education />
      <a className="anchor" id="Project"></a>
      <ProjectExpreience />
      <a className="anchor" id="Contract"></a>
      {/* <Contract /> */}
      <Footer />
    </Body>
  );
}
