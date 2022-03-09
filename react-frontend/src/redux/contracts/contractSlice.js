import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ContractService from "../../api/ContractServices";

export const addContract = createAsyncThunk(
  "contracts/addContract",
  async (data) => {
    const response = await ContractService.create(data);
    return data;
  }
);

const initialState = {
  contracts: {},
};

const contractSlice = createSlice({
  name: "contracts",
  initialState,
  extraReducers: {
    [addContract.fulfilled]: (state, { payload }) => {
      console.log("Add Success");
      return { ...state, contracts: payload };
    },
  },
});

export const getAllContracts = (state) => state.contracts.contracts;
export default contractSlice.reducer;
