import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
