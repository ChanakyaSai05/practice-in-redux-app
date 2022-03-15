import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     user: null,
//   },

//   //reducers
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = userSlice.actions;
// export const selectUser = (state) => state.user.user;
// export default userSlice.reducer;

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     user: null,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//     },
//   },
// });
// export const { login, logout } = userSlice.actions;
// export const selectUser = (state) => state.user.user;
// export default userSlice.reducer;

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUsers: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    deleteUsers: (state, action) => {
      let newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    },
    emptyUsers: () => {
      return [];
    },
  },
});
export const { addUsers, deleteUsers, emptyUsers } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
