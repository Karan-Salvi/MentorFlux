import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home/HomePage";
import { useEffect } from "react";
import { userSliceActions } from "./store/userSlice";
import Mentors from "./pages/Mentors/Mentors";
import MentorsPage from "./pages/Mentors/MentorsPage";
import ForgetPassword from "./pages/Password/ForgetPassword";
import ResetPassword from "./pages/Password/ResetPassword.jsx";
import MainLoginPage from "./pages/Login/MainLoginPage";
import MainUserPanel from "./pages/UserPanel/MainUserPanel";
import RoomPage from "./pages/MeetingRoom/RoomPage";
import { Outlet } from "react-router-dom";

function App() {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    async function initialiseUser() {
      if (user.role == "unloggeduser") {
        const responce = await fetch("http://localhost:8000/api/v1/getuser", {
          method: "GET",
          credentials: "include",
        });

        const userData = await responce.json();

        console.log("User Datae is ", userData);

        dispatch(userSliceActions.addUser(userData.data));

        console.log("Updated User is : ", user);
      }
    }
    initialiseUser();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <HomePage /> */}
      {/* <MentorsPage /> */}
      {/* <ForgetPassword /> */}
      {/* <ResetPassword /> */}
      {/* <MainLoginPage /> */}
      {/* <MainUserPanel /> */}
      {/* <RoomPage /> */}
    </>
  );
}

export default App;
