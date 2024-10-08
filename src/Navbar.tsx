import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-link" to="/work">
        Work
      </Link>
      <Link className="navbar-link" to="/about">
        About
      </Link>
    </div>
  );
};
export default Navbar;
