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
import MainLoginPage from "./pages/Login/MainLoginPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import SignupPage from "./pages/Login/SignupPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/lobby",
    element: <LobbyScreen />,
  },
  {
    path: "/room/:roomId",
    element: <RoomPage />,
  },
  {
    path: "/user",
    element: <MainLoginPage />,
    children:[
      {
        path:"/user/login",
        element:<LoginPage/>
      },
      {
        path:"/user/signup",
        element:<SignupPage/>
      }
    ]
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
