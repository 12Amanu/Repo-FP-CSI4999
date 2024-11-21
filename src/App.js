/* styling App.js is the main component that acts as the entry point for the application. */
// Import Router, Routes, and Route for setting up navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Import the CSS file for styling the App component
import Home from "./components/Home/Home.js"; // Import the Home component
import Footer from "./components/Footer/Footer.js"; // Import the Footer component
import Nav from "./components/Nav"; // Import the Navigation component
import About from "./components/About/About.js"; // Import the About component
import Contact from "./components/Contact/Contact.js"; // Import the Contact component
import Features from "./components/Features/Features.js"; // Import the Features component
import Media from "./components/Media/Media.js"; // Import the Media component for displaying media-related content
import data from "./CardData"; // Import the data to be used for the Media component

function App() {
  return (
    <div className="container">
      <Router>
        <Nav /> {/* Navigation bar */}
        <div>
          <main>
            <Routes>
              {/* Set up routes for navigation between pages */}
              <Route path="/" element={<Home />} /> {/* Home page */}
              <Route path="/about" element={<About />} /> {/* About page */}
              <Route path="/contact" element={<Contact />} />{" "}
              {/* Contact page */}
              <Route path="/features" element={<Features />} />{" "}
              {/* Features page */}
              <Route path="/media" element={<Media data={data} />} />{" "}
              {/* Media page with data passed as props */}
            </Routes>
          </main>
        </div>
        <Footer /> {/* Footer component */}
      </Router>
    </div>
  );
}

// Export App component to index.js for rendering
export default App;
