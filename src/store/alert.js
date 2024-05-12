import { createSlice } from "@reduxjs/toolkit";


const alertSlice = createSlice({
    name: "alert",
    initialState: false,
    reducers: {
        setAlert:(state, action) => action.payload 
    }
});

export default alertSlice.reducer;
export const alertSliceAction = alertSlice.actions;