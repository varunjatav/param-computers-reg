import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const apikey = import.meta.env.VITE_API_URL;
export const addStudent = createAsyncThunk(
  "addStudent",
  async (values, thunkAPI) => {
    // console.log(values);
    try {
      const response = await fetch(apikey, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      // values = null;
      return data;
      //   setSuccess(true);
    } catch (error) {
      console.log("Error: " + error);
    }

    // console.log(data);
  }
);

const studentSlice = createSlice({
  name: "Student",
  initialState: {
    entities: [
      {
        name: "",
        email: "",
        date: "",
        age: "",
        gender: "",
        address: "",
        courses: "",
        courseType: "",
      },
    ],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addStudent.fulfilled, (state, { payload }) => {
      state.entities.push(payload);
    });
  },
});

export default studentSlice.reducer;
export const studentSliceAction = studentSlice.actions;
