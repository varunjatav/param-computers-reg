import { configureStore } from "@reduxjs/toolkit";
import sideBarToggle from "./sideBarToggle";
import studentsSlice from "./studentsSlice";
import alertSlice from "./alert"

const paramStore = configureStore({
    reducer: {
        toggle: sideBarToggle,
        Student: studentsSlice,
        alert: alertSlice,
    }
});

export default paramStore;