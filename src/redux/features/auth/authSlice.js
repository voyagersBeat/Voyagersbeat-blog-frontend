import { createSlice } from "@reduxjs/toolkit";

// Check if token exists in cookies
const usTokenAvailableCookie = () => {
  const token = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("token="));
  return !!token; // Returns true if token exists
};

// Load user from local storage
const loadUserFromLocalStorage = () => {
  try {
    const serialState = localStorage.getItem("user");
    if (serialState === null) {
      return { user: null };
    }
    return { user: JSON.parse(serialState) };
  } catch (err) {
    return { user: null };
  }
};

const initialState = loadUserFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
