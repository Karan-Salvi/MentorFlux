import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { SocketProvider } from "./context/SocketProvider.jsx";
import LobbyScreen from "./pages/MeetingRoom/LobbyPage.jsx";
import RoomPage from "./pages/MeetingRoom/RoomPage.jsx";
import MentifyStore from "../src/store/index.js";
import { Provider } from "react-redux";
import LoginPage from "./pages/Login/LoginPage.jsx";
import SignupPage from "./pages/Login/SignupPage.jsx";
import MainUserPanel from "./pages/UserPanel/MainUserPanel.jsx";
import ForgetPassword from "./pages/Password/ForgetPassword.jsx";
import ResetPassword from "./pages/Password/ResetPassword.jsx";
import MentorsPage from "./pages/Mentors/MentorsPage.jsx";
import HomePage from "./pages/Home/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },

  {
    path: "/user",
    element: <App />,
    children: [
      {
        path: "/user/login",
        element: <LoginPage />,
      },
      {
        path: "/user/signup",
        element: <SignupPage />,
      },
      {
        path: "/user/dashboard",
        element: <MainUserPanel />,
      },
      {
        path: "/user/forgetpassword",
        element: <ForgetPassword />,
      },
      {
        path: "/user/api/v1/password/reset/:token",
        element: <ResetPassword />,
      },
      {
        path: "/user/lobby",
        element: <LobbyScreen />,
      },
      {
        path: "/user/room/:roomId",
        element: <RoomPage />,
      },
    ],
  },
  {
    path: "/mentor",
    element: <App />,
    children: [
      {
        path: "/mentor",
        element: <MentorsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={MentifyStore}>
      <SocketProvider>
        <RouterProvider router={router} />
      </SocketProvider>
    </Provider>
  </StrictMode>
);
