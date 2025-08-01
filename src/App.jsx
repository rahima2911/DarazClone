import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SellOnPage from "./pages/SellOnPage"; 
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Products />
          </>
        } />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sell" element={<SellOnPage />} /> {/* ✅ Add this line */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
