import { createSlice } from "@reduxjs/toolkit";

const randomColor = () => `rgb(${Math.round(Math.random()*155+100)}, ${Math.round(Math.random()*155+100)}, ${Math.round(Math.random()*155+100)})`;

const wavesSlice = createSlice({
    name: 'waves',
    initialState: [],
    reducers: {
        addWave: (action) => {
            action.push(randomColor());
        },
        removeWave: (action) => {
            action.pop()
        },
    },
});

export const {addWave, removeWave} = wavesSlice.actions;
export const wavesReducer = wavesSlice.reducer;