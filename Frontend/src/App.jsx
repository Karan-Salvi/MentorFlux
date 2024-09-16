import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home/HomePage";
import RoomConnected from "./pages/MeetingRoom/RoomConnected";

function App() {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      <RoomConnected />
    </>
  );
}

export default App;
