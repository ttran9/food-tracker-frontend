import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

/**
 * Object holding information if the user is logged in and information about the logged in user.
 */
const initialState =
  token && user
    ? { isLoggedIn: true, user: user }
    : { isLoggedIn: false, user: null };

// const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {},
});

const { reducer } = authSlice;
export default reducer;
