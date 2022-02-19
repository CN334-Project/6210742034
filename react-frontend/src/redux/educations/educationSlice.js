import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import portfolioApi from "../../api/portfolioApi";
import PortfolioService from "../../api/portfolioServices";

export const fetchAsyncEducations = createAsyncThunk(
  "educations/fetchAsyncEducations",
  async () => {
    const response = await PortfolioService.getAll();
    return response.data;
  }
);

export const addEducations = createAsyncThunk(
  "educations/addEducations",
  async ({data}) => {
    const response = await PortfolioService.create(data);
    return response.data;
  }
);

export const updateEducations = createAsyncThunk(
  "educations/updateEducations",
  async ({id,data}) => {
    const response = await PortfolioService.update(data);
    return response.data;
  }
);

export const deleteEducations = createAsyncThunk(
  "educations/deleteEducations",
  async ({id}) => {
    const response = await PortfolioService.remove({id});
    return {id};
  }
);

const initialState = {
  educations: [],
};

const educationSlice = createSlice({
  name: "educations",
  initialState,
  reducers: {
    // addEducations: (state, { payload }) => {
    //   state.educations = payload;
    //   portfolioApi.post("/addEducations", payload).then((res) => {
    //     console.log("Res: ", res);
    //   });
    // },
  },
  extraReducers: {
    [fetchAsyncEducations.fulfilled]: (state, { payload }) => {
      console.log("Fetch Success");
      return { ...state, educations: payload };
    },
    [addEducations.fulfilled]: (state, { payload }) => {
      console.log("Add Success");
      return { ...state, educations: payload.data };
    },
    [updateEducations.fulfilled]: (state, { payload }) => {
      console.log("Update Success");
      return { ...state, educations: payload.data };
    },
    [deleteEducations.fulfilled]: (state, { payload }) => {
      console.log("Delete Success");
      return { ...state, educations: payload.data };
    },
  },
});

export const getAllEducations = (state) => state.educations.educations;
export default educationSlice.reducer;
