import React, { useState, useEffect } from "react";
import { Body, HeaderContianer } from "../styles/Homepage.style";
import { Toolbar, Grid, Box, TextField } from "@mui/material";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { addContract } from "../redux/contracts/contractSlice";


const Contract = () => {
  const [state, setState] = useState({
    subject: "",
    fullname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const { subject, fullname, email, phonenumber, message } = state;

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !subject ||
      !fullname ||
      !email ||
      !phonenumber ||
      !message 
    ) {
      setError("Please insert data");
    } else {
      dispatch(addContract(state));
    }
  }

  return (
    <>
      <Toolbar />
      <Body height="auto">
        <div className="page-title">
          <h1 className="text-white">Contract</h1>
        </div>

        <HeaderContianer>
          <Grid item xs={12}>
            <Grid container justifyContent={"center"} spacing={10}>
              <Grid item>
                <div className="contract-content">
                  <div className="contract-icons">
                    <HiMail
                      color="white"
                      size={40}
                      style={{ marginRight: "10px" }}
                    />
                    chanantaphon.cha@gmail.com
                  </div>
                  <div className="contract-icons">
                    <HiPhone
                      color="white"
                      size={40}
                      style={{ marginRight: "10px" }}
                    />
                    +66 955033632
                  </div>
                  <div className="contract-icons">
                    <HiLocationMarker
                      color="white"
                      size={40}
                      style={{ marginRight: "10px" }}
                    />
                    Bangkok, Thailand
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div className="contract-form">
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": {
                        m: 1,
                      },
                      "& .MuiFilledInput-root": {
                        border: "1px solid #e2e2e1",
                        overflow: "hidden",
                        backgroundColor: "#1f1f2c",
                        borderRadius: 2,
                        fontFamily: "Prompt",
                        color: "white",

                        "&.Mui-focused": {
                          boxShadow: "rgba(111, 76, 255, 0.5) 0px 0px 20px 0px",
                          transition: "all 0.5s",
                        },
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="filled-search"
                        label="Subject"
                        name="subject"
                        type="text"
                        variant="filled"
                        style={{ width: "20rem" }}
                        value={subject}
                        onChange={handleInputChange}
                      />
                      <TextField
                        id="filled-search"
                        label="Fullname"
                        name="fullname"
                        type="text"
                        variant="filled"
                        style={{ width: "20rem" }}
                        value={fullname}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <TextField
                        id="filled-search"
                        label="Email"
                        name="email"
                        type="email"
                        variant="filled"
                        style={{ width: "20rem" }}
                        value={email}
                        onChange={handleInputChange}
                      />
                      <TextField
                        id="filled-search"
                        label="Phone Number"
                        name="phonenumber"
                        type="text"
                        variant="filled"
                        style={{ width: "20rem" }}
                        value={phonenumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <TextField
                        id="filled-multiline-static"
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        variant="filled"
                        fullWidth
                        inputProps={{
                          style: { fontFamily: "Prompt", color: "white" },
                        }}
                        value={message}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Box>
                  <button className="loginBtn" style={{ marginTop: "3rem" }} onClick={handleSubmit}>
                    Send Message
                  </button>
                </div>
              </Grid>
            </Grid>
          </Grid>
          {/* <div className="row">
            <div className="col-xs-12 col-sm-4">Hi</div>
            <div className="col-xs-12 col-sm-8">
              <div className="contract-form">
                <p>How Can I Help You?</p>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": {m:1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      required
                      id="outlined-required"
                      label="Required"
                      defaultValue="Hello World"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Required"
                      defaultValue="Hello World"
                    />
                  </div>
                </Box>
              </div>
            </div>
          </div> */}
        </HeaderContianer>
        <Footer />
      </Body>
    </>
  );
};

export default Contract;
