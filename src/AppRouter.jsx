import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Packages from "./pages/Packages";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Album from "./pages/Album";
import About from "./pages/About";
import Contact from "./pages/Contact";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Main Home */}
        <Route path="/home" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/album" element={<Album />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;