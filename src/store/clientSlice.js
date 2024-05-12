import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const apikey = import.meta.env.VITE_API_URL_CLIENT;

export const addClient = createAsyncThunk(
  "addClient",
  async (values, thunkAPI) => {
    try {
      const response = await fetch(apikey, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      //   setSuccess(true);
      return data;
    } catch (error) {
      console.log("Error: " + error);
    }
  }
);

const clientSlice = createSlice({
  name: "Client",
  initialState: {
    entities: [
      {
        name: "",
        email: "",
        date: "",
        age: "",
        gender: "",
        address: "",
        services: "",
        serviceType: "",
      },
    ],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addClient.fulfilled, (state, { payload }) => {
      state.entities.push(payload);
    });
  },
});

export default clientSlice.reducer;
export const clientSliceAction = clientSlice.actions;
