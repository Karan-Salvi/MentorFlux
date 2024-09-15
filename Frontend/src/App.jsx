import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login/LoginPage";
import LobbyScreen from "./pages/MeetingRoom/LobbyPage";
import RoomPage from "./pages/MeetingRoom/RoomPage";
import SignupPage from "./pages/Login/SignupPage";
import Hero from "./pages/Home/Hero";
import Footer from "./pages/Home/Footer";
import Testimonial from "./pages/Home/Testimonial";
import About from "./pages/Home/About";
import Customization from "./pages/Home/Customization";
import SubjectSection from "./pages/Home/SubjectSection";
import ReviewSection from "./pages/Home/ReviewSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
      <About />
      <Customization />

      <SubjectSection />

      <ReviewSection />

      <Footer />
    </>
  );
}

export default App;
