import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Karan Salvi",
    email: "raviprakash@gmail.com",
    password: "ndnnffhifndfhfiuhi",
    avatar: "../public/images/default.png",
    role: "user",
    mainInterest: ["Software Devolopment", "Web Devlopment", "Data Structure"],
  },
  reducers: {
    addUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice;
