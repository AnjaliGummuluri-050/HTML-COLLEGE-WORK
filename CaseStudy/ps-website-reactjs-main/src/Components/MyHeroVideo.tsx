import newVideo from "../assets/videoplayback.webm";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Navbar />
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={newVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">PARNASOFT TECHNOLOGIES</div>
    </div>
  );
};

export default HeroSection;
