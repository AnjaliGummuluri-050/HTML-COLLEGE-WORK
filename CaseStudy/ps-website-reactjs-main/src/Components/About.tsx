import AboutImage from "../assets/anj1.jpg"; // Import the image
import "../About.css"; 

const About = () => {
  return (
    <>
      <div
        id="about-section" // Add an id here for scrolling
        className="about-section"
        style={{ backgroundImage: `url(${AboutImage})` }}
      >
        <div className="about-content">
          <div className="animated-text">
            <h2>About Us</h2>
          </div>
          <div className="animated-text">
            <p>
              ParnaSoft excels in Software Engineering, specializing in
              Architecture, Development, Testing, and Automation for desktop,
              web, and mobile. Our precision extends to GIS, Asset Management,
              Industrial Automation, and Exam Automation.
            </p>
          </div>
          <div className="animated-text">
            <h2>Our Expertise:</h2>
            <p>
              GIS Solutions: Precision in Geographic Information Systems. Asset
              Management: Strategic handling of valuable assets. Industrial
              Automation: Streamlining industrial processes with cutting-edge
              technology. Exam Automation System: Enhancing efficiency in
              examination processes.
            </p>
          </div>
          <div className="animated-text">
            <h2>Our Team:</h2>
            <p>
              Comprising highly skilled Engineers with over 15 years of
              experience, we bring a wealth of knowledge across diverse domains,
              ensuring the highest quality in our services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
