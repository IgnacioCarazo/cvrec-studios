import "./App.css";
// import {
//   HashRouter as Router,
//   Navigate,
//   Route,
//   Routes,
// } from "react-router-dom";
// import About from "./pages/About";
import Work from "./pages/Work";
// import Navbar from "./Navbar";
function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Work></Work>
      {/* <Routes>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/work" />} />
        <Route path="/work" element={<Work />} />
      </Routes> */}
    </>
  );
}
export default App;
