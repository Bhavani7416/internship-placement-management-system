import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Internship & Placement Tracker</h2>

      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/applications">Applications</Link>
      </div>
    </nav>
  );
}

export default Navbar;