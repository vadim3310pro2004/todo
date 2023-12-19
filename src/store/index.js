import { configureStore } from "@reduxjs/toolkit";
import { wavesReducer } from "./wavesSlice"

export const store = configureStore({
    reducer: {
        waves: wavesReducer,
    }
});