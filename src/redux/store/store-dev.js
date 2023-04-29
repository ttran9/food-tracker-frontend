import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slice";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["auth/login/fulfilled"],
      },
    }),
});
export default store;
