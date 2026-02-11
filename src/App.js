import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/nav-bar/Navbar";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Events from "./components/events/Events";
import Contact from "./components/contact/Contact";
import Footer from "./layout/footer/Footer";

function App() {
  return (
<>
<HashRouter>
      <div className="min-h-screen bg-gradient-to-b from-lime-50 via-white to-white text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
</>
  );
}

export default App;
