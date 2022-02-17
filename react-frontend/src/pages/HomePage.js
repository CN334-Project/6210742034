import React from "react";
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
import "../styles/Homepage.css"

export default function HomePage() {
  const { height, width } = useWindowDimensions();
  const hgc = height + "px";

  return (
    <Body height={height + "px"}>
      <HeaderContianer>
        <Grid>
          <Container>
            <Text>Hi</Text>
            <img src="./image0_gray.jpg"/>
          </Container>
          <Container>
            <Text size="1rem" color="#7a7a7a">
              Software Developer
            </Text>
            <Text color="#fff">Chanantaphon Chansuksri</Text>
            <Paragraph>
              Software Engineer Student seeking an entry-level position as a
              website developer and mobile developer with a passion for
              developing innovative programs that are efficacious and reliable.
              Perform Open-minded for extremely skills that should be improved
              my potential skill to apply in organization
            </Paragraph>
            <button className="loginBtn">Download CV</button>
          </Container>
        </Grid>
      </HeaderContianer>
      <Education />
    </Body>
  );
}
