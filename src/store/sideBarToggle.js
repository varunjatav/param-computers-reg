import { createSlice } from "@reduxjs/toolkit";

const sideBarToggleSlice = createSlice({
    name: "toggle",
    initialState: false,
    reducers: {
        setToggleSlice : (state, action) => {
            return !state;
        }
    }
});

export default sideBarToggleSlice.reducer;
export const sideBarToggleActions = sideBarToggleSlice.actions;