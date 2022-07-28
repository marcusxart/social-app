import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/slices/userSlice";
import loadingReducer from "./features/loading/loadingSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    isLoading: loadingReducer,
  },
});

export default store;
