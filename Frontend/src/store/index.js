import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import messageSlice from "./messageSlice";

const MentifyStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    messages: messageSlice.reducer,
  },
});

export default MentifyStore;
