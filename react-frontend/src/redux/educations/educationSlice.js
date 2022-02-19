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
  async (data) => {
    const response = await PortfolioService.create(data);
    return data;
  }
);

export const updateEducations = createAsyncThunk(
  "educations/updateEducations",
  async ({ id, data }) => {
    const response = await PortfolioService.update(id, data);
    return response.data;
  }
);

export const deleteEducations = createAsyncThunk(
  "educations/deleteEducations",
  async ({id}) => {
    await PortfolioService.remove(id);
    return {id};
  }
);

const initialState = {
  educations: [],
};

const educationSlice = createSlice({
  name: "educations",
  initialState,
  extraReducers: {
    [fetchAsyncEducations.fulfilled]: (state, { payload }) => {
      console.log("Fetch Success");
      return { ...state, educations: payload };
    },
    [addEducations.fulfilled]: (state, { payload }) => {
      console.log("Add Success");
      return { ...state, educations: payload };
    },
    [updateEducations.fulfilled]: (state, { payload }) => {
      console.log("Update Success");
      try {
        const index = state.findIndex(
          (education) => education.id === payload.id
        );
        state[index] = {
          ...state[index],
          ...payload,
        };
      } catch (error) {}
    },
    [deleteEducations.fulfilled]: (state, { payload }) => {
      console.log("Delete Success");
      try {
        let index = state.findIndex(({ id }) => id === payload.id);
        state.splice(index, 1);
      } catch (error) {
        
      }
    },
  },
});

export const getAllEducations = (state) => state.educations.educations;
export default educationSlice.reducer;
