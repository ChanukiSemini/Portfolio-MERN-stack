import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="site-header">
      <div className="nav-inner">
        <NavLink to="/" className="brand">
          <span className="brand-dot"></span>
          <span className="brand-text">Portfolio</span>
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/admin" className={linkClass}>Admin</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
