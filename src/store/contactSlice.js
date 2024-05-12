import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const apiKey = import.meta.env.VITE_API_URL_CONTACT;

export const handleContact = createAsyncThunk(
  "handleContact",
  async (values, thunkAPI) => {
    try {
      const response = await fetch(apiKey, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      
    } catch (error) {
      console.error(error);
    }
  }
);

const contactSlice = createSlice({
  name: "Contact",
  initialState: {
    entities: [
      {
        name: "",
        email: "",
        message: "",
      },
    ],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleContact.fulfilled, (state, {payload}) =>{
        state.entities.push(payload);
    })
  },
});

export default contactSlice.reducer;
export const contactSliceActions = contactSlice.actions;