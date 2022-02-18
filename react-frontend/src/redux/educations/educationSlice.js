import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    educations:[]
}

const educationSlice = createSlice({
    name: "educations",
    initialState,
    reducers:{
        addEducations:(state, {payload}) => {
            state.educations = payload;

        }
    },

})

export const {addEducations} = educationSlice.actions;
export const getAllEducations = (state) => state.educations.educations;
export default educationSlice.reducer;