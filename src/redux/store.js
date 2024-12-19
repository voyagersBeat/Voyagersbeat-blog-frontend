import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./features/blog/blogApi";
import authApi from "./features/auth/AuthApi";
import authReducer from "./features/auth/authSlice";
import commentApi from "./features/comment/commentApi";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      authApi.middleware,
      commentApi.middleware
    ),
});
