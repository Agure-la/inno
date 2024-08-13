import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const headerOffset = 80; // Adjust this value if needed
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Innovara Constructions</h1>
        <p>Innovating Tomorrow's Infrastructure Today</p>
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
          <li><a href="#vision" onClick={(e) => handleNavClick(e, 'vision')}>Our Vision</a></li>
          <li><a href="#mission" onClick={(e) => handleNavClick(e, 'mission')}>Our Mission</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Our Services</a></li>
          <li><a href="#why-choose-us" onClick={(e) => handleNavClick(e, 'why-choose-us')}>Why Choose Us</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Our Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
        </ul>
      </nav>

      <section id="about">
        <h2>About Us</h2>
        <p>
          Innovara Constructions is a leading general construction company based in Kenya, specializing in delivering comprehensive construction solutions.
          Our name, "Innovara," combines "innovation" with a modern suffix "ara," signifying our dedication to pioneering and advanced construction practices.
          At Innovara Constructions, we strive to build the future with innovative and sustainable solutions tailored to our clients' needs.
        </p>
      </section>

      <section id="vision">
        <h2>Our Vision</h2>
        <p>
          To be the foremost construction company in Kenya, known for our innovative approaches, superior quality, and sustainable practices that redefine the standards of the construction industry.
        </p>
      </section>

      <section id="mission">
        <h2>Our Mission</h2>
        <ul>
          <li>To provide top-tier construction services through innovation, quality craftsmanship, and customer-focused solutions.</li>
          <li>To create sustainable and aesthetically pleasing environments that enhance the lives of our clients and communities.</li>
          <li>To maintain the highest standards of safety, professionalism, and integrity in all our projects.</li>
        </ul>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Plumbing</h3>
          <ul>
            <li>Residential and commercial plumbing installations</li>
            <li>Maintenance and repair services</li>
            <li>Water supply and drainage systems</li>
          </ul>
        </div>
        <div className="service">
          <h3>Interior Design</h3>
          <ul>
            <li>Partitioning and space planning</li>
            <li>Tile installation and flooring solutions</li>
            <li>Fittings and fixtures</li>
            <li>Ceiling design and installation</li>
          </ul>
        </div>
        <div className="service">
          <h3>Electrical Connections</h3>
          <ul>
            <li>Electrical wiring and installations</li>
            <li>Fire alarms and safety systems</li>
            <li>CCTV and surveillance systems</li>
            <li>Audio and sound systems</li>
          </ul>
        </div>
        <div className="service">
          <h3>HVAC</h3>
          <ul>
            <li>Air conditioning installations and maintenance</li>
            <li>Ventilation system design and installation</li>
            <li>Heating solutions for residential and commercial properties</li>
          </ul>
        </div>
      </section>

      <section id="why-choose-us">
        <h2>Why Choose Us</h2>
        <ul>
          <li><strong>Innovation:</strong> We integrate the latest technologies and innovative methods in our projects to ensure efficiency and excellence.</li>
          <li><strong>Quality:</strong> Our commitment to quality ensures that every project we undertake meets the highest standards of construction and design.</li>
          <li><strong>Sustainability:</strong> We are dedicated to sustainable building practices that minimize environmental impact and promote energy efficiency.</li>
          <li><strong>Customer Focus:</strong> We prioritize our clients' needs and work closely with them to deliver customized solutions that exceed their expectations.</li>
          <li><strong>Expert Team:</strong> Our team of skilled professionals brings years of experience and expertise to every project, ensuring successful and timely completion.</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Our Projects</h2>
        <div className="project-gallery">
          {/* Placeholder for images */}
          <img src="path/to/image1.jpg" alt="Project 1" />
          <img src="path/to/image2.jpg" alt="Project 2" />
          <img src="path/to/image3.jpg" alt="Project 3" />
        </div>
        <div className="project-video">
          {/* Placeholder for video */}
          <video controls>
            <source src="path/to/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <address>
          Office Address: Innovara Constructions, 123 Innovation Street, Nairobi, Kenya<br />
          Phone: +254-700-123456<br />
          Email: info@innovaraconstructions.co.ke<br />
          Website: <a href="http://www.innovaraconstructions.co.ke" target="_blank" rel="noopener noreferrer">www.innovaraconstructions.co.ke</a><br />
          Social Media:<br />
          Facebook: <a href="http://facebook.com/InnovaraConstructions" target="_blank" rel="noopener noreferrer">@InnovaraConstructions</a><br />
          Twitter: <a href="http://twitter.com/InnovaraCon" target="_blank" rel="noopener noreferrer">@InnovaraCon</a><br />
          LinkedIn: <a href="http://linkedin.com/company/innovara-constructions" target="_blank" rel="noopener noreferrer">Innovara Constructions</a>
        </address>
      </section>

      <footer>
        <p>&copy; 2024 Innovara Constructions. All rights reserved.</p>
        <p>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a> | 
          <a href="#vision" onClick={(e) => handleNavClick(e, 'vision')}>Our Vision</a> | 
          <a href="#mission" onClick={(e) => handleNavClick(e, 'mission')}>Our Mission</a> | 
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Our Services</a> | 
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
