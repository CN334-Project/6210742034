import {configureStore} from "@reduxjs/toolkit"
import educationReducer from "./educations/educationSlice"

export const store = configureStore({
    reducer: educationReducer,
})