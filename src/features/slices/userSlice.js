import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: null,
    email: null,
    userId: null,
    photo: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action) {
      state.user = action.payload;
    },
    signOut(state) {
      state.user = {
        name: null,
        email: null,
        userId: null,
        photo: null,
      };
    },
  },
});

export default userSlice.reducer;
export const { logIn, signOut } = userSlice.actions;
export const selectUser = (state) => state.user.user;
