import React, { useEffect } from "react";
import {
  Body,
  Container,
  Grid,
  HeaderContianer,
  Paragraph,
  Text,
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
              <Text color="#fff" className="animate-charcter text-glow">Chanantaphon Chansuksri</Text>
              <Paragraph>
                Software Engineer Student seeking an entry-level position as a
                website developer and mobile developer with a passion for
                developing innovative programs that are efficacious and
                reliable. Perform Open-minded for extremely skills that should
                be improved my potential skill to apply in organization
              </Paragraph>
              <button className="loginBtn">Download CV</button>
            </div>
          </Container>
        </Grid>
      </HeaderContianer>
      <div className="skills-container">
        <Grid columns="1fr 1fr 1fr 1fr">
          <Container margin={"auto"}>
            <img
              width={100}
              height={100}
              src={require("../assets/React_logo_wordmark.png")}
            />
            <div className="text-skills">
              <h1>React</h1>
            </div>
          </Container>
          <Container margin={"auto"}>
            <img
              width={100}
              height={100}
              src={require("../assets/nodejs-logo.png")}
            />
            <div className="text-skills">
              <h1>Node.js</h1>
            </div>
          </Container>
          <Container margin={"auto"}>
            <img
              width={100}
              height={100}
              src={require("../assets/laravel.png")}
              style={{ margin: "auto" }}
            />
            <div className="text-skills">
              <h1>Laravel</h1>
            </div>
          </Container>
          <Container margin={"auto"}>
            <img
              width={100}
              height={100}
              src={require("../assets/angular.png")}
            />
            <div className="text-skills">
              <h1>Angular</h1>
            </div>
          </Container>
        </Grid>
      </div>
      <a className="anchor" id="Education"></a>
      <Education />
      <a className="anchor" id="Project"></a>
      <ProjectExpreience />
      <a className="anchor" id="Contract"></a>
      <Contract />
    </Body>
  );
}
