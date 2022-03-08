import React from "react";
import { Body, HeaderContianer } from "../styles/Homepage.style";
import { Toolbar, Grid } from "@mui/material";

const Contract = () => {
  return (
    <>
      <Toolbar />
      <Body height="100vh">
        <div className="page-title">
          <h1 className="text-white">Contract</h1>
        </div>

        <HeaderContianer>
          <Grid item xs={12}>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <div className="contract-content">Hi</div>
              </Grid>
              <Grid item>
                <div className="contract-content">Hi</div>
              </Grid>
            </Grid>
          </Grid>
        </HeaderContianer>
      </Body>
    </>
  );
};

export default Contract;
