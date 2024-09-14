import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login/LoginPage";
import LobbyScreen from "./pages/MeetingRoom/LobbyPage";
import RoomPage from "./pages/MeetingRoom/RoomPage";

function App() {
  return (
    <>
      <Navbar />
      {/* <LobbyScreen />
      <RoomPage /> */}

      <LoginPage />
    </>
  );
}

export default App;
