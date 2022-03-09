import {configureStore} from "@reduxjs/toolkit"
import educationReducer from "./educations/educationSlice"
import contractReducer from "./contracts/contractSlice"

export const store = configureStore({
    reducer: {
        educations: educationReducer,
        contracts: contractReducer,
    },
})