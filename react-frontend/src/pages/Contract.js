import React from "react";
import { Container, Grid, HeaderContianer } from "../styles/Homepage.style";
import { TextField } from "@mui/material";
import { HiMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
const Contract = () => {
  return (
    <div className="contract">
      <div className="skills-container">
        <HeaderContianer>
          <h2>Contract</h2>
          <Grid columns="1fr 1fr 1fr">
            <Container>
              <h1>
                <HiMail color="white" size={50} style={{marginRight:"10px"}} />
                chanantaphon.cha@gmail.com
              </h1>
            </Container>
            <Container>
              <h1>
                <ImLinkedin size={40} color="white" style={{marginRight:"10px"}} />
                chanantaphon
              </h1>
            </Container>
            <Container>
            <h1>
                <BsFillTelephoneFill color="white" size={50}  style={{marginRight:"10px"}}/>
                +66 955033632
              </h1>
            </Container>
          </Grid>
        </HeaderContianer>
      </div>
    </div>
  );
};

export default Contract;
