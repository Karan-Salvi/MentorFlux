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
