import authSlice from "./auth";
import messageSlice from "./message";

const rootReducer = {
  auth: authSlice,
  message: messageSlice,
};

export default rootReducer;
