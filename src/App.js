import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/page";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/Contact/page";
import Services from "./pages/Services/page";
import FaqPage from "./pages/Faq/page";
import ScrollToTop from "./ScrollToTop";
import AboutPage from "./pages/About/page";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
